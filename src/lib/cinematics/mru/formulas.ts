import { timeMagnitudes, type formula, type mruData, type result, distanceMagnitudes, speedMagnitudes } from "$lib/interfaces";
import { fixExpression } from "$lib/utils";

const mruFirstFormula = (data: mruData) => {
    const speed = data.speed!
    const distance = data.distance!

    return {
        name: 'Tiempo',
        input: "time",
        value: distance / speed,
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                    <tr>
                        <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                            distancia
                        </td>
                    </tr> 
                    <tr>
                        <td style="padding:0px; text-align:center">
                            velocidad
                        </td>
                    </tr>
                    </table> 
                    = 
                    <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                        <tr>
                            <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                                ${fixExpression(distance)}
                            </td>
                        </tr> 
                        <tr>
                            <td style="padding:0px; text-align:center">
                                ${fixExpression(speed)}
                            </td>
                        </tr>
                    </table>`
    } as result;
}

const mruSecondFormula = (data: mruData) => {
    const speed = data.speed!
    const time = data.time!
        
    return {
        name: 'Distancia',
        input: "distance",
        value: speed * time,
        magnitude: distanceMagnitudes.main,
        formula: `Velocidad * tiempo = ${fixExpression(speed)} * ${fixExpression(time)}`
    } as result;
}

const mruThirdFormula = (data: mruData) => {
    const distance = data.distance!
    const time = data.time!

    return {
        name: 'Velocidad',
        input: "speed",
        value: distance / time,
        magnitude: speedMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle"><tr><td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">distancia</td></tr> <tr><td style="padding:0px; text-align:center">tiempo</td></tr></table> = <table style="display:inline-table; border-collapse:collapse; vertical-align:middle"><tr><td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">${fixExpression(distance)}</td></tr> <tr><td style="padding:0px; text-align:center">${fixExpression(time)}</td></tr></table>`
    } as result

}

export const mruFormulas: formula[] = [
    {required: ["speed", "distance"], result: "time", func: mruFirstFormula},
    {required: ["speed", "time"], result: "distance", func: mruSecondFormula},
    {required: ["distance", "time"], result: "speed", func: mruThirdFormula},
]