import type { InputType, InputValues, MagnitudeType, formula, result } from "$lib/interfaces";
import type { Writable } from "svelte/store";
import toast from "svelte-french-toast";
import { debounceFunction } from "$lib/utils";
import { mainConversor } from "$lib/conversions";

export const handleInputs = (
    exceptZeroInputs: string[],
    exceptNegativeInputs: string[],
    inputs: InputType,
    resultsStore: Writable<result[]>,
    formulas: formula[],
    magnitudes?: MagnitudeType
) => {
    const inputsObj = Object.values(inputs).map((input) => {
        if (input.value && input.value !== 'Calculado') {
            if (!exceptZeroInputs.includes(input.name) && input.value === '0') {
                toast.error('Ingresa un valor válido, 0 no es una opción', {
                    style: 'border: 4px solid #ea580c; background-color: #fff7ed'
                });
                input.value = '';
            }
            if (!exceptNegativeInputs.includes(input.name) && input.value.includes('-')) {
                toast.error('No puedes ingresar numeros negativos en este campo', {
                    style: 'border: 4px solid #ea580c; background-color: #fff7ed'
                });
                input.value = input.value.replace('-', '');
            }
        }
        return input;
    });
    
    const mag = Object.entries(magnitudes!)
    
    const inputsValues = inputsObj.reduce((acc: InputValues, input) => {
        if (input.value && input.value !== "Calculado") {
            const found = mag.find((m) => m[0] === input.name && m[1][0] !== "main")
            if(found){
                acc[input.name] = mainConversor(found[0], found[1][1], input.value) as number
            }else{
                acc[input.name] = parseFloat(input.value);
            }
        }
        return acc;
    }, {});

    const results = operation(inputsValues, formulas, inputs)

    const resultsInputs = results.map((result) => {        
        const found = mag.find((m) => m[0] === result.input && m[1][0] !== "main")
        if(found){
            const converted = Object(mainConversor(found[0], found[1][1], String(result.value), true))
            result.value = converted.value
            result.formula += converted.formula
            result.magnitude = found[1][1]
        }
        return result.input
    })

    inputsObj.map((input) => {
        if (resultsInputs.includes(input.name)) {
            input.disabled = true
            input.type = "string"
            input.value = "Calculado"
        } else if (input.value === "Calculado") {
            input.disabled = false
            input.type = "number"
            input.value = ""
        }
    })
    resultsStore.set(results);
}

const operation = (data: InputValues, formulas: formula[], inputs: InputType) => {

    const results: result[] = [];

    const nonResult = data;

    (function foundFormula() {
        const foundedFormula = Object.values(formulas).find((f) => {
            const { required, result } = f;
            return required.every((v) => nonResult[v as keyof InputValues] !== undefined) && !(nonResult[result as keyof InputValues] !== undefined);
        });

        if (foundedFormula) {
            if (foundedFormula.exception) {
                const exception = foundedFormula.exception({ ...data })
                if (exception.exists) {
                    if(exception.input && exception.inputChange){
                        inputs[exception.input].value = exception.inputChange
                        data[exception.input] = parseFloat(exception.inputChange)
                        nonResult[exception.input] = parseFloat(exception.inputChange)
                    }
                    if (exception.message) {
                        debounceFunction(() => {
                            toast(exception.message!, {
                                icon: "🔔",
                                style: 'border: 4px solid #ea580c; background-color: #fff7ed'
                            })
                        }, `${foundedFormula.result}${exception.message}`)
                    }
                    if(exception.hideResults){
                        return [] as result[]
                    }
                }
            }
            const result = foundedFormula.func(nonResult)
            results.push(result);
            nonResult[foundedFormula.result] = result.value
            foundFormula()
        }
    })()

    return results;
}
