import { toDegrees, toRadians } from "$lib/conversions";
import { type formula, type result, type mpdclData, type exceptionResult, speedMagnitudes, timeMagnitudes, distanceMagnitudes, angleTangentialMagnitudes } from "$lib/interfaces"
import { fixExpression, fixNumber } from '$lib/utils';


const mpdclFirstFormula = (data: mpdclData): result => {
    const initialSpeed = data.initialSpeed!
    const angle = data.angle!

    return {
        name: 'Velocidad inicial en X',
        input: 'initialSpeedX',
        value: fixNumber(initialSpeed * Math.cos(toRadians(angle))),
        magnitude: speedMagnitudes.main,
        formula: `
            <span>
                Velocidad&nbspInicial&nbsp*&nbspcos(Ángulo)
            </span> 
                = 
            <span>
                ${fixExpression(initialSpeed)}&nbsp*&nbspcos(${fixExpression(angle)})
            </span>`
    } as result
}

const mpdclSecondFormula = (data: mpdclData): result => {
    const initialSpeed = data.initialSpeed!
    const angle = data.angle!

    return {
        name: 'Velocidad inicial en Y',
        input: 'initialSpeedY',
        value: fixNumber(initialSpeed * Math.sin(toRadians(angle))),
        magnitude: speedMagnitudes.main,
        formula: `
            <span>
                Velocidad&nbspInicial&nbsp*&nbspsen(Ángulo)
            </span> 
                = 
            <span>
                ${fixExpression(initialSpeed)}&nbsp*&nbspsen(${fixExpression(angle)})
            </span>`
    } as result
}

const mpdclThirdFormula = (data: mpdclData): result => {
    const initialSpeedY = data.initialSpeedY!
    const gravity = data.gravity!

    return {
        name: 'Tiempo de subida',
        input: 'riseTime',
        value: fixNumber(initialSpeedY / gravity),
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspInicial&nbspen&nbspY
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
                        ${fixExpression(initialSpeedY)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(gravity)}
                    </td>
                </tr>
            </table>
            `
    } as result
}

const mpdclFourthFirstFormula = (data: mpdclData): result => {
    const initialSpeedY = data.initialSpeedY!
    const initialHeight = data.initialHeight!
    const gravity = data.gravity!

    return {
        name: 'Tiempo de vuelo',
        input: 'flightTime',
        value: fixNumber((2 * (initialSpeedY + (Math.sqrt(Math.pow(initialSpeedY, 2) + (2 * gravity * initialHeight))))) / gravity),
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2&nbsp*&nbsp&#8730;<span style="text-decoration: overline">Velocidad&nbspInicial&nbspen&nbspY<sup>2</sup>&nbsp+&nbsp2&nbsp*&nbspGravedad&nbsp*&nbspAltura&nbspInicial</span>
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
                        2&nbsp*&nbsp&#8730;<span style="text-decoration: overline">${fixExpression(initialSpeedY)}<sup>2</sup>&nbsp+&nbsp2&nbsp*&nbsp${fixExpression(gravity)}&nbsp*&nbsp${fixExpression(initialHeight)}</span>
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(gravity)}
                    </td>
                </tr>
            </table>
            `
    } as result

}
const mpdclFourthFormula = (data: mpdclData): result => {
    const initialSpeed = data.initialSpeed!
    const angle = data.angle!
    const gravity = data.gravity!

    return {
        name: 'Tiempo de vuelo',
        input: 'flightTime',
        value: fixNumber((2 * initialSpeed * Math.sin(toRadians(angle))) / gravity),
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2&nbsp*&nbspVelocidad&nbspInicial*&nbspsen(Ángulo)
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
                        2&nbsp*&nbsp${fixExpression(initialSpeed)}&nbsp*&nbspsen(${fixExpression(angle)})
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(gravity)}
                    </td>
                </tr>
            </table>
            `
    } as result

}

const mpdclFifthFirstFormula = (data: mpdclData): result => {
    const initialSpeed = data.initialSpeed!
    const angle = data.angle!
    const gravity = data.gravity!
    const initialHeight = data.initialHeight!

    return {
        name: 'Altura máxima',
        input: 'maxHeight',
        value: fixNumber((((Math.pow(initialSpeed, 2)) * (Math.pow(Math.sin(toRadians(angle)), 2))) / (2 * gravity))+initialHeight),
        magnitude: distanceMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspinicial<sup>2</sup>&nbsp*&nbspsen(Ángulo)<sup>2</sup>
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    2*&nbspGravedad
                </td>
            </tr>
            </table> 
            <span>
                &nbsp+&nbspAltura&nbspInicial
            </span>
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(initialSpeed)}<sup>2</sup>&nbsp*&nbspsen(${fixExpression(angle)})<sup>2</sup>
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        2*&nbsp${fixExpression(gravity)}
                    </td>
                </tr>
            </table>
            <span>
                &nbsp+&nbsp${fixExpression(initialHeight)}
            </span>
            `
    } as result

}
const mpdclFifthFormula = (data: mpdclData): result => {
    const initialSpeed = data.initialSpeed!
    const angle = data.angle!
    const gravity = data.gravity!

    return {
        name: 'Altura máxima',
        input: 'maxHeight',
        value: fixNumber(((Math.pow(initialSpeed, 2)) * (Math.pow(Math.sin(toRadians(angle)), 2))) / (2 * gravity)),
        magnitude: distanceMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspinicial<sup>2</sup>&nbsp*&nbspsen(Ángulo)<sup>2</sup>
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    2*&nbspGravedad
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(initialSpeed)}<sup>2</sup>&nbsp*&nbspsen(${fixExpression(angle)})<sup>2</sup>
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        2*&nbsp${fixExpression(gravity)}
                    </td>
                </tr>
            </table>`
    } as result

}

const mpdclSixthFormula = (data: mpdclData): result => {
    const initialSpeedX = data.initialSpeedX!
    const riseTime = data.riseTime!

    return {
        name: 'Desplazamiento horizontal',
        input: 'horizontalDisplacement',
        value: fixNumber(initialSpeedX * riseTime),
        magnitude: distanceMagnitudes.main,
        formula: `
            <span>
                Velocidad&nbspInicial&nbspen&nbspX&nbsp*&nbspTiempo
            </span> 
                = 
            <span>
                ${fixExpression(initialSpeedX)}&nbsp*&nbsp${fixExpression(riseTime)}
            </span>`
    } as result
}

const mpcdlSeventhFirstFormula = (data: mpdclData): result => {
    const initialSpeedX = data.initialSpeedX!
    const flightTime = data.flightTime!

    return {
        name: 'Alcance horizontal',
        input: 'horizontalReach',
        value: fixNumber(initialSpeedX*flightTime),
        magnitude: distanceMagnitudes.main,
        formula: `
        <span>
            Velocidad&nbspInicial&nbspen&nbspX&nbsp*&nbspTiempo
        </span>
        =
        <span>
            ${fixExpression(initialSpeedX)}&nbsp*&nbsp${fixExpression(flightTime)}
        </span>
        `
    } as result
}

const mpdclSeventhFormula = (data: mpdclData): result => {
    const initialSpeed = data.initialSpeed!
    const angle = data.angle!
    const gravity = data.gravity!


    return {
        name: 'Alcance horizontal',
        input: 'horizontalReach',
        value: fixNumber(((Math.pow(initialSpeed, 2)) * (Math.sin(2 * toRadians(angle)))) / gravity),
        magnitude: distanceMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspinicial<sup>2</sup>&nbsp*&nbspsen(2*Ángulo)
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
                        ${fixExpression(initialSpeed)}<sup>2</sup>&nbsp*&nbspsen(2*Ángulo)
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

const mpdclEighthFormula = (data: mpdclData): result => {
    const initialSpeedX = data.initialSpeedX!
    const angle = data.angle!

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(initialSpeedX / (Math.cos(toRadians(angle)))),
        magnitude: speedMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspinicial&nbspen&nbspX
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    cos(Ángulo)
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(initialSpeedX)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        cos(${fixExpression(angle)})
                    </td>
                </tr>
            </table>`
    } as result
}

const mpdclNinthFormula = (data: mpdclData): result => {
    const initialSpeedY = data.initialSpeedY!
    const angle = data.angle!

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(initialSpeedY / (Math.sin(toRadians(angle)))),
        magnitude: speedMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspinicial&nbspen&nbspY
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    sen(Ángulo)
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(initialSpeedY)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        sen(${fixExpression(angle)})
                    </td>
                </tr>
            </table>`
    } as result
}

const mpdclTenthFormula = (data: mpdclData): result => {
    const horizontalDisplacement = data.horizontalDisplacement!
    const flightTime = data.flightTime!

    return {
        name: 'Velocidad Inicial en X',
        input: 'initialSpeedX',
        value: fixNumber(horizontalDisplacement / flightTime),
        magnitude: speedMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Desplazamiento&nbspHorizontal
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Tiempo&nbspDe&nbspVuelo
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(horizontalDisplacement)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(flightTime)}
                    </td>
                </tr>
            </table>`
    } as result
}

const mpdclEleventhFormula = (data: mpdclData): result => {
    const flightTime = data.flightTime!

    return {
        name: 'Tiempo de subida',
        input: 'riseTime',
        value: fixNumber(flightTime / 2),
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Tiempo&nbspde&nbspVuelo
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    2
                </td>
            </tr>
            </table>
            =
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(flightTime)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        2
                    </td>
                </tr>
            </table>
            `
    } as result
}

const mpdclTwelfthFormula = (data: mpdclData): result => {
    const riseTime = data.riseTime!

    return {
        name: 'Tiempo de vuelo',
        input: 'flightTime',
        value: fixNumber(riseTime * 2),
        magnitude: timeMagnitudes.main,
        formula: `
            <span>
                2&nbsp*&nbspTiempo&nbspde&nbspSubida
            </span> 
                = 
            <span>
                2&nbsp*&nbsp${fixExpression(riseTime)}
            </span>`
    } as result
}

const mpdclThirteenthFormula = (data: mpdclData): result => {
    const initialSpeedY = data.initialSpeedY!
    const gravity = data.gravity!

    return {
        name: 'Altura máxima',
        input: 'maxHeight',
        value: fixNumber(Math.pow(initialSpeedY, 2) / (2 * gravity)),
        magnitude: distanceMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspInicial<sup>2</sup>
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
                        ${fixExpression(initialSpeedY)}<sup>2</sup>
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(gravity)}
                    </td>
                </tr>
            </table>
            `
    } as result
}
const mpdclFourteenthFormula = (data: mpdclData): result => {

    const maxHeight = data.maxHeight!
    const gravity = data.gravity!
    const angle = data.angle!

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(Math.sqrt((2 * gravity * maxHeight) / (Math.sin(2 * angle)))),
        magnitude: speedMagnitudes.main,
        formula: `&#8730;(&nbsp<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2&nbsp*&nbspGravedad&nbsp*&nbspAltura&nbspmáxima
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    sen(2&nbsp*&nbspÁngulo)
                </td>
            </tr>
            </table>&nbsp)
            =
            &#8730;(&nbsp<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        2&nbsp*&nbsp${fixExpression(gravity)}&nbsp*&nbsp${fixExpression(maxHeight)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        sin(2&nbsp*&nbsp${fixExpression(angle)})
                    </td>
                </tr>
            </table>&nbsp)
            `
    } as result
}
const exceptionFourteenthFormula = (data: mpdclData): exceptionResult => {
    const gravity = data.gravity!
    const maxHeight = data.maxHeight!
    const angle = data.angle!

    if ((2 * gravity * maxHeight) / (Math.sin(2 * angle)) < 0) {
        return { exists: true, message: "Revisa tus datos, no tienen sentido. Mientras tanto los resultados no se mostrarán", hideResults: true }
    }
    return { exists: false }
}

const mpdclFifteenthFormula = (data: mpdclData): result => {
    const horizontalDisplacement = data.horizontalDisplacement!

    return {
        name: 'Alcance horizontal',
        input: 'horizontalReach',
        value: fixNumber(horizontalDisplacement * 2),
        magnitude: distanceMagnitudes.main,
        formula: `
            <span>
                Desplazamiento&nbspHorizontal&nbsp*&nbsp2
            </span> 
                = 
            <span>
                ${fixExpression(horizontalDisplacement)}&nbsp*&nbsp2
            </span>`
    } as result

}

const mpdclSixteenthFormula = (data: mpdclData): result => {
    const horizontalReach = data.horizontalReach!

    return {
        name: 'Alcance horizontal',
        input: 'horizontalDisplacement',
        value: fixNumber(horizontalReach / 2),
        magnitude: distanceMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Alcance&nbspHorizontal
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    2
                </td>
            </tr>
            </table>
            =
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(horizontalReach)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        2
                    </td>
                </tr>
            </table>
            `
    } as result

}

const mpdclSeventeenthFormula = (data: mpdclData): result => {
    const gravity = data.gravity!
    const horizontalReach = data.horizontalReach!
    const maxHeight = data.maxHeight!

    return {
        name: 'Velocidad Inicial',
        input: 'initialSpeed',
        value: fixNumber(Math.sqrt((gravity * Math.pow(horizontalReach, 2)) / (2 * (maxHeight)))),
        magnitude: speedMagnitudes.main,
        formula: `&#8730;(&nbsp<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Gravedad&nbsp*&nbspAlcance&nbspHorizontal<sup>2</sup>
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    2&nbsp*&nbspAltura&nbspMáxima
                </td>
            </tr>
            </table>&nbsp)
            =
            &#8730;(&nbsp<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(gravity)}&nbsp*&nbsp${fixExpression(horizontalReach)}<sup>2</sup>
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        2&nbsp*&nbsp${fixExpression(maxHeight)}
                    </td>
                </tr>
            </table>&nbsp)
            `
    } as result
}

const mpdclEighteenthFormula = (data: mpdclData): result => {
    const initialSpeedY = data.initialSpeedY!
    const initialSpeed = data.initialSpeed!

    return {
        name: 'Ángulo',
        input: 'angle',
        value: fixNumber(toDegrees(Math.asin(initialSpeedY / initialSpeed))),
        magnitude: angleTangentialMagnitudes.main,
        formula: `arcsin(&nbsp<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspInicial&nbspen&nbspY
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Velocidad&nbspInicial
                </td>
            </tr>
            </table>&nbsp)
            =
            arcsin(&nbsp<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(initialSpeedY)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(initialSpeed)}
                    </td>
                </tr>
            </table>&nbsp)
            `
    } as result
}

const exceptionEighteenFormula = (data: mpdclData): exceptionResult => {
    const initialSpeed = data.initialSpeed!
    const initialSpeedY = data.initialSpeedY!

    if (initialSpeedY > initialSpeed) {
        return { exists: true, message: "La velocidad inicial en Y no puede ser mayor a la velocidad inicial. Mientras tanto no se tomara en cuenta", hideResults: true }
    } else {
        return { exists: false }
    }
}

const mpdclNineteenthFormula = (data: mpdclData): result => {
    const initialSpeedX = data.initialSpeedX!
    const initialSpeed = data.initialSpeed!

    return {
        name: 'Ángulo',
        input: 'angle',
        value: fixNumber(toDegrees(Math.acos(initialSpeedX / initialSpeed))),
        magnitude: angleTangentialMagnitudes.main,
        formula: `arccos(&nbsp<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspInicial&nbspen&nbspX
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Velocidad&nbspInicial
                </td>
            </tr>
            </table>&nbsp)
            =
            arccos(&nbsp<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(initialSpeedX)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(initialSpeed)}
                    </td>
                </tr>
            </table>&nbsp)
            `
    } as result
}

const exceptionNineteenthFormula = (data: mpdclData): exceptionResult => {
    const initialSpeed = data.initialSpeed!
    const initialSpeedX = data.initialSpeedX!

    if (initialSpeedX > initialSpeed) {
        return { exists: true, message: "La velocidad inicial en X no puede ser mayor a la velocidad inicial. Mientras tanto no se tomara en cuenta", hideResults: true }
    } else {
        return { exists: false }
    }
}

const mpdclTwentiethFormula = (data: mpdclData): result => {
    const initialSpeedY = data.initialSpeedY!
    const initialSpeedX = data.initialSpeedX!

    return {
        name: 'Ángulo',
        input: 'angle',
        value: fixNumber(toDegrees(Math.atan(initialSpeedY / initialSpeedX))),
        magnitude: angleTangentialMagnitudes.main,
        formula: `arctan(&nbsp<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspInicial&nbspen&nbspY
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Velocidad&nbspInicial&nbspen&nbspX
                </td>
            </tr>
            </table>&nbsp)
            =
            arctan(&nbsp<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(initialSpeedY)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(initialSpeedX)}
                    </td>
                </tr>
            </table>&nbsp)
            `
    } as result


}
const mpdclTwentyfirstFirstFormula = (data: mpdclData): result => {
    const initialSpeedY = data.initialSpeedY!
    const gravity = data.gravity!
    const initialHeight = data.initialHeight!

    return {
        name: 'Altura máxima',
        input: 'maxHeight',
        value: fixNumber(((Math.pow(initialSpeedY, 2)) / (2 * gravity))+initialHeight),
        magnitude: distanceMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspinicial&nbspen&nbspY<sup>2</sup>
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    2*&nbspGravedad
                </td>
            </tr>
            </table> 
            <span>
                &nbsp+&nbspAltura&nbspInicial
            </span>
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(initialSpeedY)}<sup>2</sup>
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        2*&nbsp${fixExpression(gravity)}
                    </td>
                </tr>
            </table>
            <span>
                &nbsp+&nbsp${fixExpression(initialHeight)}
            </span>
            `
    } as result
}
const mpdclTwentyfirstFormula = (data: mpdclData): result => {
    const initialSpeedY = data.initialSpeedY!
    const gravity = data.gravity!

    return {
        name: 'Altura máxima',
        input: 'maxHeight',
        value: fixNumber((Math.pow(initialSpeedY, 2)) / (2 * gravity)),
        magnitude: distanceMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspinicial&nbspen&nbspY<sup>2</sup>
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    2*&nbspGravedad
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(initialSpeedY)}<sup>2</sup>
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        2*&nbsp${fixExpression(gravity)}
                    </td>
                </tr>
            </table>`
    } as result
}
const mpdclTwentySecondFormula = (data: mpdclData): result => {
    const maxHeight = data.maxHeight!
    const gravity = data.gravity!

    return {
        name: 'Velocidad Inicial en Y',
        input: 'initialSpeedY',
        value: fixNumber(Math.sqrt(maxHeight / gravity)),
        magnitude: speedMagnitudes.main,
        formula: `&#8730;(&nbsp<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
        <tr>
            <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                Altura&nbspMáxima
            </td>
        </tr> 
        <tr>
            <td style="padding:0px; text-align:center">
                Gravedad
            </td>
        </tr>
        </table>&nbsp)
        =
        &#8730;(&nbsp<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    ${fixExpression(maxHeight)}
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    ${fixExpression(gravity)}
                </td>
            </tr>
        </table>&nbsp)
        `
    } as result
}

export const mpdclFormulas: formula[] = [
    { required: ["initialSpeed", "angle"], result: "initialSpeedX", func: mpdclFirstFormula },
    { required: ["initialSpeed", "angle"], result: "initialSpeedY", func: mpdclSecondFormula },
    { required: ["initialSpeedY", "gravity", "initialHeight"], result: "flightTime", func: mpdclFourthFirstFormula },
    { required: ["initialSpeed", "angle", "gravity"], result: "flightTime", func: mpdclFourthFormula },
    { required: ["initialSpeedY", "gravity"], result: "riseTime", func: mpdclThirdFormula },
    { required: ["initialSpeed", "angle", "gravity", "initialHeight"], result: "maxHeight", func: mpdclFifthFirstFormula },
    { required: ["initialSpeed", "angle", "gravity"], result: "maxHeight", func: mpdclFifthFormula },
    { required: ["initialSpeedX", "riseTime"], result: "horizontalDisplacement", func: mpdclSixthFormula },
    { required: ["initialSpeedX", "flightTime"], result: "horizontalReach", func: mpcdlSeventhFirstFormula },
    { required: ["initialSpeed", "angle", "gravity"], result: "horizontalReach", func: mpdclSeventhFormula },
    { required: ["initialSpeedX", "angle"], result: "initialSpeed", func: mpdclEighthFormula },
    { required: ["initialSpeedY", "angle"], result: "initialSpeed", func: mpdclNinthFormula },
    { required: ["horizontalDisplacement", "flightTime"], result: "initialSpeedX", func: mpdclTenthFormula },
    { required: ["flightTime"], result: "riseTime", func: mpdclEleventhFormula },
    { required: ["riseTime"], result: "flightTime", func: mpdclTwelfthFormula },
    { required: ["flighTime", "initialSpeed"], result: "angle", func: mpdclThirteenthFormula },
    { required: ["maxHeight", "gravity", "angle"], result: "initialSpeed", func: mpdclFourteenthFormula, exception: exceptionFourteenthFormula },
    { required: ["horizontalDisplacement"], result: "horizontalReach", func: mpdclFifteenthFormula },
    { required: ["horizontalReach"], result: "horizontalDisplacement", func: mpdclSixteenthFormula },
    { required: ["horizontalReach", "gravity", "maxHeight"], result: "initialSpeed", func: mpdclSeventeenthFormula },
    { required: ["initialSpeedY", "initialSpeed"], result: "angle", func: mpdclEighteenthFormula, exception: exceptionEighteenFormula },
    { required: ["initialSpeedX", "initialSpeed"], result: "angle", func: mpdclNineteenthFormula, exception: exceptionNineteenthFormula },
    { required: ["initialSpeedX", "initialSpeedY"], result: "angle", func: mpdclTwentiethFormula },
    { required: ["initialSpeedY", "gravity", "initialHeight"], result: "maxHeight", func: mpdclTwentyfirstFirstFormula },
    { required: ["initialSpeedY", "gravity"], result: "maxHeight", func: mpdclTwentyfirstFormula },
    { required: ["maxHeight", "gravity"], result: "initialSpeedY", func: mpdclTwentySecondFormula },

]