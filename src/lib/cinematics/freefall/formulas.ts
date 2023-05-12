import { timeMagnitudes, type exceptionResult, type formula, type freefallData, type result, accelerationTangentialMagnitudes, speedMagnitudes, distanceMagnitudes} from "$lib/interfaces"
import { fixExpression, fixNumber } from '$lib/utils';


const freefallFirstFormula = (data: freefallData) => {
    const height = data.height!
    const initialSpeed = data.initialSpeed!
    const finalSpeed = data.finalSpeed!
    return {
        name: 'Tiempo',
        input: 'time',
        value: fixNumber((2 * height) / (initialSpeed + finalSpeed)),
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
                        2&nbsp*&nbsp${fixExpression(height)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(initialSpeed)}&nbsp+&nbsp${fixExpression(
            finalSpeed
        )}
                    </td>
                </tr>
            </table>`
    } as result
}

const freefallSecondFormula = (data: freefallData) => {
    const initialSpeed = data.initialSpeed!
    const finalSpeed = data.finalSpeed!
    const time = data.time!

    return {
        name: 'Gravedad',
        input: 'gravity',
        value: fixNumber((finalSpeed - initialSpeed) / time),
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
                        ${fixExpression(finalSpeed)}&nbsp-&nbsp${fixExpression(
            initialSpeed
        )}
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

const freefallThirdFormula = (data: freefallData) => {
    const initialSpeed = data.initialSpeed!
    const time = data.time!
    const height = data.height!

    return {
        name: 'Velocidad Final',
        input: 'finalSpeed',
        value: fixNumber((2 * height) / time - initialSpeed),
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
            -&nbspVelocidad&nbspinicial&nbsp= 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        2&nbsp*&nbsp${fixExpression(height)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(time)}
                    </td>
                </tr>
            </table>
            -&nbsp${fixExpression(initialSpeed)} 
            `
    } as result
}

const freefallFourthFormula = (data: freefallData) => {
    const initialSpeed = data.initialSpeed
    const finalSpeed = data.finalSpeed
    const time = data.time

    return {
        name: 'Altura',
        input: 'height',
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

const freefallFifthFormula = (data: freefallData) => {
    const initialSpeed = data.initialSpeed!
    const finalSpeed = data.finalSpeed!
    const gravity = data.gravity!

    return {
        name: 'Tiempo',
        input: 'time',
        value: fixNumber((finalSpeed - initialSpeed) / gravity),
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
                        ${fixExpression(finalSpeed)}&nbsp-&nbsp${fixExpression(initialSpeed)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(gravity)}
                    </td>
                </tr>
            </table>`
    } as result

}

const freefallSixthFormula = (data: freefallData) => {
    const initialSpeed = data.initialSpeed!
    const gravity = data.gravity!
    const height = data.height!

    return {
        name: 'Velocidad Final',
        input: 'finalSpeed',
        value: fixNumber(
            Math.sqrt(
                initialSpeed * initialSpeed + 2 * gravity * height
            )
        ),
        magnitude: speedMagnitudes.main,
        formula: `&#8730;<span style="text-decoration: overline">Velocidad&nbspinicial<sup>2</sup>&nbsp+&nbsp(2&nbsp*&nbspAceleración&nbsp*&nbspDistancia)</span><hr class="mt-2"> Velocidad&nbspFinal&nbsp= &#8730;<span style="text-decoration: overline">${fixExpression(
            initialSpeed
        )}<sup>2</sup>&nbsp+&nbsp(2&nbsp*&nbsp${fixExpression(
            gravity
        )}&nbsp*&nbsp${fixExpression(height)})</span>`
    } as result
}

const exceptionSixthFormula = (data: freefallData): exceptionResult => {
    if ((data.initialSpeed! * data.initialSpeed! + 2 * data.gravity! * data.height!) < 0) {
        return {exists: true, message: "Verifica tus datos, no tienen sentido. Mientras tanto no se mostrarán los resultados", hideResults: true}
    }
    return { exists: false }
}

const freefallSeventhFormula = (data: freefallData) => {
    const finalSpeed = data.finalSpeed!
    const gravity = data.gravity!
    const height = data.height!

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(
            Math.sqrt(finalSpeed * finalSpeed - 2 * gravity * height)
        ),
        magnitude: speedMagnitudes.main,
        formula: `&#8730;<span style="text-decoration: overline">Velocidad&nbspfinal<sup>2</sup>&nbsp-&nbsp(2&nbsp*&nbspAceleración&nbsp*&nbspDistancia)</span><hr class="mt-2"> Velocidad&nbspInicial&nbsp= &#8730;<span style="text-decoration: overline">${fixExpression(
            finalSpeed
        )}<sup>2</sup>&nbsp-&nbsp(2&nbsp*&nbsp${fixExpression(
            gravity
        )}&nbsp*&nbsp${fixExpression(height)})</span>`
    }

}

const exceptionSeventhFormula = (data: freefallData): exceptionResult => {
    if ((data.finalSpeed! * data.finalSpeed! - 2 * data.gravity! * data.height!) < 0) {
        return {exists: true, message: "Verifica tus datos, no tienen sentido. Mientras tanto no se mostrarán los resultados", hideResults: true}
    }
    return { exists: false }
}

const freefallEighthFormula = (data: freefallData) => {
    const initialSpeed = data.initialSpeed!
    const gravity = data.gravity!
    const time = data.time!

    return {
        name: 'Velocidad Final',
        input: 'finalSpeed',
        value: fixNumber(initialSpeed + (gravity * time)),
        magnitude: speedMagnitudes.main,
        formula: `Velocidad&nbspinicial&nbsp+&nbspAceleración&nbsp*&nbspTiempo = ${fixExpression(initialSpeed)}&nbsp+&nbsp${fixExpression(gravity)}&nbsp*&nbsp${fixExpression(time)}`
    } as result
}

const freefallNinthFormula = (data: freefallData) => {
    const finalSpeed = data.finalSpeed!
    const gravity = data.gravity!
    const time = data.time!

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(finalSpeed - (gravity * time)),
        magnitude: speedMagnitudes.main,
        formula: `Velocidad&nbspfinal&nbsp+&nbspAceleración&nbsp*&nbspTiempo = ${fixExpression(finalSpeed)}&nbsp+&nbsp${fixExpression(gravity)}&nbsp*&nbsp${fixExpression(time)}`
    } as result
}

const freefallTenthFormula = (data: freefallData) => {
    const finalSpeed = data.finalSpeed!
    const height = data.height!
    const time = data.time!

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(((2 * height) / time) - finalSpeed),
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
                        2&nbsp*&nbsp${fixExpression(height)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(time)}
                    </td>
                </tr>
            </table>
            -&nbsp${fixExpression(finalSpeed)} 
            `
    } as result

}

const freefallEleventhFormula = (data: freefallData) => {
    const gravity = data.gravity!
    const height = data.height!
    const time = data.time!

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(((2 * height) - (gravity * (time * time))) / (2 * time)),
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
                    2*&nbsp${fixExpression(height)}&nbsp-&nbsp${fixExpression(gravity)}&nbsp*&nbsp${fixExpression(time)}<sup>2</sup>
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    2&nbsp*&nbsp${fixExpression(time)}
                </td>
            </tr>
            </table>
            `
    } as result
}

export const freefallFormulas: formula[] = [
    { required: ["height", "initialSpeed", "finalSpeed"], result: "time", func: freefallFirstFormula },
    { required: ["initialSpeed", "finalSpeed", "time"], result: "gravity", func: freefallSecondFormula },
    { required: ["initialSpeed", "time", "height"], result: "finalSpeed", func: freefallThirdFormula },
    { required: ["initialSpeed", "finalSpeed", "time"], result: "height", func: freefallFourthFormula },
    { required: ["initialSpeed", "finalSpeed", "gravity"], result: "time", func: freefallFifthFormula },
    { required: ["initialSpeed", "gravity", "height"], result: "finalSpeed", func: freefallSixthFormula, exception: exceptionSixthFormula },
    { required: ["finalSpeed", "gravity", "height"], result: "initialSpeed", func: freefallSeventhFormula, exception: exceptionSeventhFormula },
    { required: ["initialSpeed", "gravity", "time"], result: "finalSpeed", func: freefallEighthFormula },
    { required: ["finalSpeed", "gravity", "time"], result: "initialSpeed", func: freefallNinthFormula },
    { required: ["finalSpeed", "height", "time"], result: "initialSpeed", func: freefallTenthFormula },
    { required: ["gravity", "height", "time"], result: "initialSpeed", func: freefallEleventhFormula }
]