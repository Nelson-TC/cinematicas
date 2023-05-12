import { type formula, type verticalshotData, type result, type exceptionResult, speedMagnitudes, timeMagnitudes, distanceMagnitudes } from "$lib/interfaces";
import { fixExpression, fixNumber } from "$lib/utils";

const verticalshotFirstFormula = (data: verticalshotData) => {
    const gravity = data.gravity!
    const height = data.height!

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(Math.sqrt(2 * gravity * height)),
        magnitude: speedMagnitudes.main,
        formula: `&#8730;<span style="text-decoration: overline">(2&nbsp*&nbspGravedad&nbsp*&nbspAltura)</span><hr class="mt-2">&nbsp= &#8730;&#8730;<span style="text-decoration: overline">(2&nbsp*&nbsp${fixExpression(gravity)}&nbsp*&nbsp${fixExpression(height)})</span>`
    } as result
}

const exceptionFirstFormula = (data: verticalshotData): exceptionResult => {
    if((2 * data.gravity! * data.height!) < 0){
        return {exists: true, message: "Revisa tus datos, no tienen sentido. Mientras tanto no se mostrarán los resultados", hideResults: true}
    }
    return {exists: false}
}

const verticalshotSecondFormula = (data: verticalshotData) => {
    const initialSpeed = data.initialSpeed!
    const gravity = data.gravity!

    return {
        name: 'Tiempo',
        input: 'time',
        value: fixNumber(initialSpeed / gravity),
        magnitude: timeMagnitudes.main,
        formula: `
        <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspinicial
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                Gravedad
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(initialSpeed)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(gravity)}
                    </td>
                </tr>
            </table>`
    } as result;

}

const verticalshotThirdFormula = (data: verticalshotData) => {
    const gravity = data.gravity!
    const time = data.time!

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(gravity * time),
        magnitude: speedMagnitudes.main,
        formula: `
            <span>
                Gravedad&nbsp*&nbspTiempo
            </span> 
                = 
            <span>
                ${fixExpression(gravity)}&nbsp*&nbsp${fixExpression(time)}
            </span>`
    } as result;
}

const verticalshotFourthFormula = (data: verticalshotData) => {
    const gravity = data.gravity!
    const initialSpeed = data.initialSpeed!
    return {
        name: 'Altura',
        input: 'height',
        value: fixNumber((initialSpeed * initialSpeed) / (2 * gravity)),
        magnitude: distanceMagnitudes.main,
        formula: `
        <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspinicial<sup>2</sup>
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                2&nbsp*&nbspGravedad
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(initialSpeed)}<sup>2</sup>
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        2&nbsp*&nbsp${fixExpression(gravity)}
                    </td>
                </tr>
            </table>`
    } as result
}

export const verticalshotFormulas: formula[] = [
    { required: ["gravity", "height"], result: "initialSpeed", func: verticalshotFirstFormula, exception: exceptionFirstFormula },
    { required: ["gravity", "initialSpeed"], result: "time", func: verticalshotSecondFormula },
    { required: ["gravity", "time"], result: "initialSpeed", func: verticalshotThirdFormula },
    { required: ["gravity", "initialSpeed"], result: "height", func: verticalshotFourthFormula },
]