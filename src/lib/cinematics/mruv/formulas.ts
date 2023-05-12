import { type exceptionResult, type formula, type result, type mruvData, timeMagnitudes, accelerationTangentialMagnitudes, distanceMagnitudes, speedMagnitudes } from "$lib/interfaces"
import { fixExpression, fixNumber } from '$lib/utils';


const mruvFirstFormula = (data: mruvData) => {
    const distance = data.distance
    const initialSpeed = data.initialSpeed
    const finalSpeed = data.finalSpeed
    return {
        name: 'Tiempo',
        input: 'time',
        value: fixNumber((2 * distance!) / (initialSpeed! + finalSpeed!)),
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2&nbsp*&nbspDistancia
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Velocidad&nbspinicial&nbsp+&nbspVelocidad&nbspFinal
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        2&nbsp*&nbsp${fixExpression(distance!)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(initialSpeed!)}&nbsp+&nbsp${fixExpression(
            finalSpeed!
        )}
                    </td>
                </tr>
            </table>`
    } as result
}

const mruvSecondFormula = (data: mruvData) => {
    const initialSpeed = data.initialSpeed
    const finalSpeed = data.finalSpeed
    const time = data.time


    return {
        name: 'Aceleración',
        input: 'acceleration',
        value: fixNumber((finalSpeed! - initialSpeed!) / time!),
        magnitude: accelerationTangentialMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspFinal&nbsp-&nbspVelocidad&nbspinicial
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Tiempo
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(finalSpeed!)}&nbsp-&nbsp${fixExpression(
            initialSpeed!
        )}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(time!)}
                    </td>
                </tr>
            </table>`
    } as result
}

const mruvThirdFormula = (data: mruvData) => {
    const initialSpeed = data.initialSpeed!
    const time = data.time!
    const distance = data.distance!

    return {
        name: 'Aceleración',
        input: 'acceleration',
        value: fixNumber((2 * distance) / (Math.pow(time, 2)) - ((2 * initialSpeed) / time)),
        magnitude: accelerationTangentialMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2*&nbspDistancia
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Tiempo<sup>2</sup>
                </td>
            </tr>
            </table>
            -
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2*&nbspVelocidad&nbspInicial
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Tiempo
                </td>
            </tr>
            </table>
            =
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2*&nbsp${fixExpression(distance)}
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    ${fixExpression(time)}<sup>2</sup>
                </td>
            </tr>
            </table>
            -
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2*&nbsp${fixExpression(initialSpeed)}
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    ${fixExpression(time)}
                </td>
            </tr>
            </table>`
    } as result
}

const mruvFourthFormula = (data: mruvData) => {
    const initialSpeed = data.initialSpeed
    const finalSpeed = data.finalSpeed
    const time = data.time

    return {
        name: 'Distancia',
        input: 'distance',
        value: fixNumber(((initialSpeed! + finalSpeed!) / 2) * time!),
        magnitude: distanceMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspinicial&nbsp+Velocidad&nbspfinal
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    2
                </td>
            </tr>
            </table>
            &nbsp*&nbspTiempo&nbsp=
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(initialSpeed!)}&nbsp+&nbsp${fixExpression(finalSpeed!)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        2
                    </td>
                </tr>
            </table>
            &nbsp*&nbsp${fixExpression(time!)}
            `
    } as result

}

const mruvFifthFormula = (data: mruvData) => {
    const initialSpeed = data.initialSpeed
    const finalSpeed = data.finalSpeed
    const acceleration = data.acceleration

    return {
        name: 'Tiempo',
        input: 'time',
        value: fixNumber((finalSpeed! - initialSpeed!) / acceleration!),
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspfinal&nbsp-&nbspVelocidad&nbspinicial
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Aceleración
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(finalSpeed!)}&nbsp-&nbsp${fixExpression(initialSpeed!)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(acceleration!)}
                    </td>
                </tr>
            </table>`
    } as result

}

const mruvSixthFormula = (data: mruvData) => {
    const initialSpeed = data.initialSpeed
    const acceleration = data.acceleration
    const distance = data.distance

    return {
        name: 'Velocidad Final',
        input: 'finalSpeed',
        value: fixNumber(
            Math.sqrt(
                initialSpeed! * initialSpeed! + 2 * acceleration! * distance!
            )
        ),
        magnitude: speedMagnitudes.main,
        formula: `&#8730;<span style="text-decoration: overline">Velocidad&nbspinicial<sup>2</sup>&nbsp+&nbsp(2&nbsp*&nbspAceleración&nbsp*&nbspDistancia)</span><hr class="mt-2"> Velocidad&nbspFinal&nbsp= &#8730;<span style="text-decoration: overline">${fixExpression(
            initialSpeed!
        )}<sup>2</sup>&nbsp+&nbsp(2&nbsp*&nbsp${fixExpression(
            acceleration!
        )}&nbsp*&nbsp${fixExpression(distance!)})</span>`
    } as result
}

const exceptionSixthFormula = (data: mruvData): exceptionResult => {
    if ((data.initialSpeed! * data.initialSpeed! + 2 * data.acceleration! * data.distance!) < 0) {
        return { exists: true, input: "acceleration", message: "Se ha cambiado el signo de la aceleración para tener un resultado coherente", inputChange: `${-data.acceleration!}` }
    }
    return { exists: false }
}

const mruvSeventhFormula = (data: mruvData) => {
    const finalSpeed = data.finalSpeed
    const acceleration = data.acceleration
    const distance = data.distance

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(
            Math.sqrt(finalSpeed! * finalSpeed! - 2 * acceleration! * distance!)
        ),
        magnitude: speedMagnitudes.main,
        formula: `&#8730;<span style="text-decoration: overline">Velocidad&nbspfinal<sup>2</sup>&nbsp-&nbsp(2&nbsp*&nbspAceleración&nbsp*&nbspDistancia)</span><hr class="mt-2"> Velocidad&nbspInicial&nbsp= &#8730;<span style="text-decoration: overline">${fixExpression(
            finalSpeed!
        )}<sup>2</sup>&nbsp-&nbsp(2&nbsp*&nbsp${fixExpression(
            acceleration!
        )}&nbsp*&nbsp${fixExpression(distance!)})</span>`
    }

}

const exceptionSeventhFormula = (data: mruvData): exceptionResult => {
    if ((data.finalSpeed! * data.finalSpeed! - 2 * data.acceleration! * data.distance!) < 0) {
        return { exists: true, input: "acceleration", message: "Se ha cambiado el signo de la aceleración para tener un resultado coherente", inputChange: `${-data.acceleration!}` }
    }
    return { exists: false }
}

const mruvEighthFormula = (data: mruvData) => {
    const initialSpeed = data.initialSpeed
    const acceleration = data.acceleration
    const time = data.time

    return {
        name: 'Velocidad Final',
        input: 'finalSpeed',
        value: fixNumber(initialSpeed! + (acceleration! * time!)),
        magnitude: speedMagnitudes.main,
        formula: `Velocidad&nbspinicial&nbsp+&nbspAceleración&nbsp*&nbspTiempo = ${fixExpression(initialSpeed!)}&nbsp+&nbsp${fixExpression(acceleration!)}&nbsp*&nbsp${fixExpression(time!)}`
    } as result
}

const mruvNinthFormula = (data: mruvData) => {
    const finalSpeed = data.finalSpeed
    const acceleration = data.acceleration
    const time = data.time

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(finalSpeed! - (acceleration! * time!)),
        magnitude: speedMagnitudes.main,
        formula: `Velocidad&nbspfinal&nbsp+&nbspAceleración&nbsp*&nbspTiempo = ${fixExpression(finalSpeed!)}&nbsp+&nbsp${fixExpression(acceleration!)}&nbsp*&nbsp${fixExpression(time!)}`
    } as result
}

const mruvTenthFormula = (data: mruvData) => {
    const finalSpeed = data.finalSpeed
    const distance = data.distance
    const time = data.time

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(((2 * distance!) / time!) - finalSpeed!),
        magnitude: speedMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2*&nbspDistancia
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Tiempo
                </td>
            </tr>
            </table>
            -&nbspVelocidad&nbspfinal&nbsp= 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        2&nbsp*&nbsp${fixExpression(distance!)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(time!)}
                    </td>
                </tr>
            </table>
            -&nbsp${fixExpression(finalSpeed!)} 
            `
    } as result

}

const mruvEleventhFormula = (data: mruvData) => {
    const acceleration = data.acceleration
    const distance = data.distance
    const time = data.time

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(((2 * distance!) - (acceleration! * (time! * time!))) / (2 * time!)),
        magnitude: speedMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2*&nbspDistancia&nbsp-&nbspAceleración&nbsp*&nbspTiempo<sup>2</sup>
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    2&nbsp*&nbspTiempo
                </td>
            </tr>
            </table>
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2*&nbsp${fixExpression(distance!)}&nbsp-&nbsp${fixExpression(acceleration!)}&nbsp*&nbsp${fixExpression(time!)}<sup>2</sup>
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    2&nbsp*&nbsp${fixExpression(time!)}
                </td>
            </tr>
            </table>
            `
    } as result
}

export const mruvFormulas: formula[] = [
    { required: ["distance", "initialSpeed", "finalSpeed"], result: "time", func: mruvFirstFormula },
    { required: ["initialSpeed", "finalSpeed", "time"], result: "acceleration", func: mruvSecondFormula },
    { required: ["initialSpeed", "time", "distance"], result: "acceleration", func: mruvThirdFormula },
    { required: ["initialSpeed", "finalSpeed", "time"], result: "distance", func: mruvFourthFormula },
    { required: ["initialSpeed", "finalSpeed", "acceleration"], result: "time", func: mruvFifthFormula },
    { required: ["initialSpeed", "acceleration", "distance"], result: "finalSpeed", func: mruvSixthFormula, exception: exceptionSixthFormula },
    { required: ["finalSpeed", "acceleration", "distance"], result: "initialSpeed", func: mruvSeventhFormula, exception: exceptionSeventhFormula },
    { required: ["initialSpeed", "acceleration", "time"], result: "finalSpeed", func: mruvEighthFormula },
    { required: ["finalSpeed", "acceleration", "time"], result: "initialSpeed", func: mruvNinthFormula },
    { required: ["finalSpeed", "distance", "time"], result: "initialSpeed", func: mruvTenthFormula },
    { required: ["acceleration", "distance", "time"], result: "initialSpeed", func: mruvEleventhFormula }
]