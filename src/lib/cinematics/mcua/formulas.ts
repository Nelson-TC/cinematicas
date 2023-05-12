import { type exceptionResult, type formula, type result, type mcuaData, timeMagnitudes, accelerationAngularMagnitudes, distanceMagnitudes, speedMagnitudes, speedAngularMagnitudes, accelerationTangentialMagnitudes, angleAngularMagnitudes } from "$lib/interfaces"
import { fixExpression, fixNumber } from '$lib/utils';


const mcua1 = (data: mcuaData) => {
    const angle = data.angle
    const angularInitialSpeed = data.angularInitialSpeed
    const angularFinalSpeed = data.angularFinalSpeed
    return {
        name: 'Tiempo',
        input: 'time',
        value: fixNumber((2 * angle!) / (angularInitialSpeed! + angularFinalSpeed!)),
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
                        2&nbsp*&nbsp${fixExpression(angle!)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(angularInitialSpeed!)}&nbsp+&nbsp${fixExpression(
            angularFinalSpeed!
        )}
                    </td>
                </tr>
            </table>`
    } as result
}

const mcua2 = (data: mcuaData) => {
    const angularInitialSpeed = data.angularInitialSpeed
    const angularFinalSpeed = data.angularFinalSpeed
    const time = data.time


    return {
        name: 'Aceleración Angular',
        input: 'angularAcceleration',
        value: fixNumber((angularFinalSpeed! - angularInitialSpeed!) / time!),
        magnitude: accelerationAngularMagnitudes.main,
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
                        ${fixExpression(angularFinalSpeed!)}&nbsp-&nbsp${fixExpression(
            angularInitialSpeed!
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

const mcua3 = (data: mcuaData) => {
    const angularInitialSpeed = data.angularInitialSpeed!
    const time = data.time!
    const angle = data.angle!

    return {
        name: 'Aceleración Angular',
        input: 'angularAcceleration',
        value: fixNumber((2 * angle) / (Math.pow(time, 2)) - ((2 * angularInitialSpeed) / time)),
        magnitude: accelerationAngularMagnitudes.main,
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
                    2*&nbsp${fixExpression(angle)}
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
                    2*&nbsp${fixExpression(angularInitialSpeed)}
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

const mcua4 = (data: mcuaData) => {
    const angularInitialSpeed = data.angularInitialSpeed
    const angularFinalSpeed = data.angularFinalSpeed
    const time = data.time

    return {
        name: 'Ángulo',
        input: 'angle',
        value: fixNumber(((angularInitialSpeed! + angularFinalSpeed!) / 2) * time!),
        magnitude: angleAngularMagnitudes.main,
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
                        ${fixExpression(angularInitialSpeed!)}&nbsp+&nbsp${fixExpression(angularFinalSpeed!)}
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

const mcua5 = (data: mcuaData) => {
    const angularInitialSpeed = data.angularInitialSpeed
    const angularFinalSpeed = data.angularFinalSpeed
    const angularAcceleration = data.angularAcceleration

    return {
        name: 'Tiempo',
        input: 'time',
        value: fixNumber((angularFinalSpeed! - angularInitialSpeed!) / angularAcceleration!),
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspfinal&nbsp-&nbspVelocidad&nbspinicial
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Aceleración Angular
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(angularFinalSpeed!)}&nbsp-&nbsp${fixExpression(angularInitialSpeed!)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(angularAcceleration!)}
                    </td>
                </tr>
            </table>`
    } as result

}

const mcua6 = (data: mcuaData) => {
    const angularInitialSpeed = data.angularInitialSpeed
    const angularAcceleration = data.angularAcceleration
    const angle = data.angle

    return {
        name: 'Velocidad Final Angular',
        input: 'angularFinalSpeed',
        value: fixNumber(
            Math.sqrt(
                angularInitialSpeed! * angularInitialSpeed! + 2 * angularAcceleration! * angle!
            )
        ),
        magnitude: speedAngularMagnitudes.main,
        formula: `&#8730;<span style="text-decoration: overline">Velocidad&nbspinicial<sup>2</sup>&nbsp+&nbsp(2&nbsp*&nbspAceleración Angular&nbsp*&nbspDistancia)</span><hr class="mt-2"> Velocidad&nbspFinal&nbsp= &#8730;<span style="text-decoration: overline">${fixExpression(
            angularInitialSpeed!
        )}<sup>2</sup>&nbsp+&nbsp(2&nbsp*&nbsp${fixExpression(
            angularAcceleration!
        )}&nbsp*&nbsp${fixExpression(angle!)})</span>`
    } as result
}

const exceptionMcua6 = (data: mcuaData): exceptionResult => {
    if ((data.angularInitialSpeed! * data.angularInitialSpeed! + 2 * data.angularAcceleration! * data.angle!) < 0) {
        return { exists: true, input: "angularAcceleration", message: "Se ha cambiado el signo de la Aceleración Angular para tener un resultado coherente", inputChange: `${-data.angularAcceleration!}` }
    }
    return { exists: false }
}

const mcua7 = (data: mcuaData) => {
    const angularFinalSpeed = data.angularFinalSpeed
    const angularAcceleration = data.angularAcceleration
    const angle = data.angle

    return {
        name: 'Velocidad Angular Inicial',
        input: 'angularInitialSpeed',
        value: fixNumber(
            Math.sqrt(angularFinalSpeed! * angularFinalSpeed! - 2 * angularAcceleration! * angle!)
        ),
        magnitude: speedAngularMagnitudes.main,
        formula: `&#8730;<span style="text-decoration: overline">Velocidad&nbspfinal<sup>2</sup>&nbsp-&nbsp(2&nbsp*&nbspAceleración Angular&nbsp*&nbspDistancia)</span><hr class="mt-2"> Velocidad&nbspInicial&nbsp= &#8730;<span style="text-decoration: overline">${fixExpression(
            angularFinalSpeed!
        )}<sup>2</sup>&nbsp-&nbsp(2&nbsp*&nbsp${fixExpression(
            angularAcceleration!
        )}&nbsp*&nbsp${fixExpression(angle!)})</span>`
    }

}

const exceptionMcua7 = (data: mcuaData): exceptionResult => {
    if ((data.angularFinalSpeed! * data.angularFinalSpeed! - 2 * data.angularAcceleration! * data.angle!) < 0) {
        return { exists: true, input: "angularAcceleration", message: "Se ha cambiado el signo de la Aceleración Angular para tener un resultado coherente", inputChange: `${-data.angularAcceleration!}` }
    }
    return { exists: false }
}

const mcua8 = (data: mcuaData) => {
    const angularInitialSpeed = data.angularInitialSpeed
    const angularAcceleration = data.angularAcceleration
    const time = data.time

    return {
        name: 'Velocidad Angular Final',
        input: 'angularFinalSpeed',
        value: fixNumber(angularInitialSpeed! + (angularAcceleration! * time!)),
        magnitude: speedAngularMagnitudes.main,
        formula: `Velocidad&nbspinicial&nbsp+&nbspAceleración Angular&nbsp*&nbspTiempo = ${fixExpression(angularInitialSpeed!)}&nbsp+&nbsp${fixExpression(angularAcceleration!)}&nbsp*&nbsp${fixExpression(time!)}`
    } as result
}

const mcua9 = (data: mcuaData) => {
    const angularFinalSpeed = data.angularFinalSpeed
    const angularAcceleration = data.angularAcceleration
    const time = data.time

    return {
        name: 'Velocidad Angular Inicial',
        input: 'angularInitialSpeed',
        value: fixNumber(angularFinalSpeed! - (angularAcceleration! * time!)),
        magnitude: speedAngularMagnitudes.main,
        formula: `Velocidad&nbspfinal&nbsp+&nbspAceleración Angular&nbsp*&nbspTiempo = ${fixExpression(angularFinalSpeed!)}&nbsp+&nbsp${fixExpression(angularAcceleration!)}&nbsp*&nbsp${fixExpression(time!)}`
    } as result
}

const mcua10 = (data: mcuaData) => {
    const angularFinalSpeed = data.angularFinalSpeed
    const angle = data.angle
    const time = data.time

    return {
        name: 'Velocidad Angular Inicial',
        input: 'angularInitialSpeed',
        value: fixNumber(((2 * angle!) / time!) - angularFinalSpeed!),
        magnitude: speedAngularMagnitudes.main,
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
                        2&nbsp*&nbsp${fixExpression(angle!)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(time!)}
                    </td>
                </tr>
            </table>
            -&nbsp${fixExpression(angularFinalSpeed!)} 
            `
    } as result

}

const mcua11 = (data: mcuaData) => {
    const angularAcceleration = data.angularAcceleration
    const angle = data.angle
    const time = data.time

    return {
        name: 'Velocidad Angular Inicial',
        input: 'angularInitialSpeed',
        value: fixNumber(((2 * angle!) - (angularAcceleration! * (time! * time!))) / (2 * time!)),
        magnitude: speedAngularMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2*&nbspDistancia&nbsp-&nbspAceleración Angular&nbsp*&nbspTiempo<sup>2</sup>
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
                    2*&nbsp${fixExpression(angle!)}&nbsp-&nbsp${fixExpression(angularAcceleration!)}&nbsp*&nbsp${fixExpression(time!)}<sup>2</sup>
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

const mcua12 = (data: mcuaData) => {
    const arcLenght = data.arcLenght
    const tangentialInitialSpeed = data.tangentialInitialSpeed
    const tangentialFinalSpeed = data.tangentialFinalSpeed
    return {
        name: 'Tiempo',
        input: 'time',
        value: fixNumber((2 * arcLenght!) / (tangentialInitialSpeed! + tangentialFinalSpeed!)),
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
                        2&nbsp*&nbsp${fixExpression(arcLenght!)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(tangentialInitialSpeed!)}&nbsp+&nbsp${fixExpression(
            tangentialFinalSpeed!
        )}
                    </td>
                </tr>
            </table>`
    } as result
}

const mcua13 = (data: mcuaData) => {
    const tangentialInitialSpeed = data.tangentialInitialSpeed
    const tangentialFinalSpeed = data.tangentialFinalSpeed
    const time = data.time


    return {
        name: 'Aceleración Tangencial',
        input: 'tangentialAcceleration',
        value: fixNumber((tangentialFinalSpeed! - tangentialInitialSpeed!) / time!),
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
                        ${fixExpression(tangentialFinalSpeed!)}&nbsp-&nbsp${fixExpression(
            tangentialInitialSpeed!
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

const mcua14 = (data: mcuaData) => {
    const tangentialInitialSpeed = data.tangentialInitialSpeed!
    const time = data.time!
    const arcLenght = data.arcLenght!

    return {
        name: 'Aceleración Tangencial',
        input: 'tangentialAcceleration',
        value: fixNumber((2 * arcLenght) / (Math.pow(time, 2)) - ((2 * tangentialInitialSpeed) / time)),
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
                    2*&nbsp${fixExpression(arcLenght)}
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
                    2*&nbsp${fixExpression(tangentialInitialSpeed)}
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

const mcua15 = (data: mcuaData) => {
    const tangentialInitialSpeed = data.tangentialInitialSpeed
    const tangentialFinalSpeed = data.tangentialFinalSpeed
    const time = data.time

    return {
        name: 'Longitud del arco',
        input: 'arcLenght',
        value: fixNumber(((tangentialInitialSpeed! + tangentialFinalSpeed!) / 2) * time!),
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
                        ${fixExpression(tangentialInitialSpeed!)}&nbsp+&nbsp${fixExpression(tangentialFinalSpeed!)}
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

const mcua16 = (data: mcuaData) => {
    const tangentialInitialSpeed = data.tangentialInitialSpeed
    const tangentialFinalSpeed = data.tangentialFinalSpeed
    const tangentialAcceleration = data.tangentialAcceleration

    return {
        name: 'Tiempo',
        input: 'time',
        value: fixNumber((tangentialFinalSpeed! - tangentialInitialSpeed!) / tangentialAcceleration!),
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspfinal&nbsp-&nbspVelocidad&nbspinicial
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Aceleración Tangencial
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(tangentialFinalSpeed!)}&nbsp-&nbsp${fixExpression(tangentialInitialSpeed!)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(tangentialAcceleration!)}
                    </td>
                </tr>
            </table>`
    } as result

}

const mcua17 = (data: mcuaData) => {
    const tangentialInitialSpeed = data.tangentialInitialSpeed
    const tangentialAcceleration = data.tangentialAcceleration
    const arcLenght = data.arcLenght

    return {
        name: 'Velocidad Tangencial Final',
        input: 'tangentialFinalSpeed',
        value: fixNumber(
            Math.sqrt(
                tangentialInitialSpeed! * tangentialInitialSpeed! + 2 * tangentialAcceleration! * arcLenght!
            )
        ),
        magnitude: speedMagnitudes.main,
        formula: `&#8730;<span style="text-decoration: overline">Velocidad&nbspinicial<sup>2</sup>&nbsp+&nbsp(2&nbsp*&nbspAceleración Tangencial&nbsp*&nbspDistancia)</span><hr class="mt-2"> Velocidad&nbspFinal&nbsp= &#8730;<span style="text-decoration: overline">${fixExpression(
            tangentialInitialSpeed!
        )}<sup>2</sup>&nbsp+&nbsp(2&nbsp*&nbsp${fixExpression(
            tangentialAcceleration!
        )}&nbsp*&nbsp${fixExpression(arcLenght!)})</span>`
    } as result
}

const exceptionMcua17 = (data: mcuaData): exceptionResult => {
    if ((data.tangentialInitialSpeed! * data.tangentialInitialSpeed! + 2 * data.tangentialAcceleration! * data.arcLenght!) < 0) {
        return { exists: true, input: "tangentialAcceleration", message: "Se ha cambiado el signo de la Aceleración Tangencial para tener un resultado coherente", inputChange: `${-data.tangentialAcceleration!}` }
    }
    return { exists: false }
}

const mcua18 = (data: mcuaData) => {
    const tangentialFinalSpeed = data.tangentialFinalSpeed
    const tangentialAcceleration = data.tangentialAcceleration
    const arcLenght = data.arcLenght

    return {
        name: 'Velocidad Tangencial Inicial',
        input: 'tangentialInitialSpeed',
        value: fixNumber(
            Math.sqrt(tangentialFinalSpeed! * tangentialFinalSpeed! - 2 * tangentialAcceleration! * arcLenght!)
        ),
        magnitude: speedMagnitudes.main,
        formula: `&#8730;<span style="text-decoration: overline">Velocidad&nbspfinal<sup>2</sup>&nbsp-&nbsp(2&nbsp*&nbspAceleración Tangencial&nbsp*&nbspDistancia)</span><hr class="mt-2"> Velocidad&nbspInicial&nbsp= &#8730;<span style="text-decoration: overline">${fixExpression(
            tangentialFinalSpeed!
        )}<sup>2</sup>&nbsp-&nbsp(2&nbsp*&nbsp${fixExpression(
            tangentialAcceleration!
        )}&nbsp*&nbsp${fixExpression(arcLenght!)})</span>`
    }

}

const exceptionMcua18 = (data: mcuaData): exceptionResult => {
    if ((data.tangentialFinalSpeed! * data.tangentialFinalSpeed! - 2 * data.tangentialAcceleration! * data.arcLenght!) < 0) {
        return { exists: true, input: "tangentialAcceleration", message: "Se ha cambiado el signo de la Aceleración Tangencial para tener un resultado coherente", inputChange: `${-data.tangentialAcceleration!}` }
    }
    return { exists: false }
}

const mcua19 = (data: mcuaData) => {
    const tangentialInitialSpeed = data.tangentialInitialSpeed
    const tangentialAcceleration = data.tangentialAcceleration
    const time = data.time

    return {
        name: 'Velocidad Tangencial Final',
        input: 'tangentialFinalSpeed',
        value: fixNumber(tangentialInitialSpeed! + (tangentialAcceleration! * time!)),
        magnitude: speedMagnitudes.main,
        formula: `Velocidad&nbspinicial&nbsp+&nbspAceleración Tangencial&nbsp*&nbspTiempo = ${fixExpression(tangentialInitialSpeed!)}&nbsp+&nbsp${fixExpression(tangentialAcceleration!)}&nbsp*&nbsp${fixExpression(time!)}`
    } as result
}

const mcua20 = (data: mcuaData) => {
    const tangentialFinalSpeed = data.tangentialFinalSpeed
    const tangentialAcceleration = data.tangentialAcceleration
    const time = data.time

    return {
        name: 'Velocidad Tangencial Inicial',
        input: 'tangentialInitialSpeed',
        value: fixNumber(tangentialFinalSpeed! - (tangentialAcceleration! * time!)),
        magnitude: speedMagnitudes.main,
        formula: `Velocidad&nbspfinal&nbsp+&nbspAceleración Tangencial&nbsp*&nbspTiempo = ${fixExpression(tangentialFinalSpeed!)}&nbsp+&nbsp${fixExpression(tangentialAcceleration!)}&nbsp*&nbsp${fixExpression(time!)}`
    } as result
}

const mcua21 = (data: mcuaData) => {
    const tangentialFinalSpeed = data.tangentialFinalSpeed
    const arcLenght = data.arcLenght
    const time = data.time

    return {
        name: 'Velocidad Tangencial Inicial',
        input: 'tangentialInitialSpeed',
        value: fixNumber(((2 * arcLenght!) / time!) - tangentialFinalSpeed!),
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
                        2&nbsp*&nbsp${fixExpression(arcLenght!)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(time!)}
                    </td>
                </tr>
            </table>
            -&nbsp${fixExpression(tangentialFinalSpeed!)} 
            `
    } as result

}

const mcua22 = (data: mcuaData) => {
    const tangentialAcceleration = data.tangentialAcceleration
    const arcLenght = data.arcLenght
    const time = data.time

    return {
        name: 'Velocidad Tangencial Inicial',
        input: 'tangentialInitialSpeed',
        value: fixNumber(((2 * arcLenght!) - (tangentialAcceleration! * (time! * time!))) / (2 * time!)),
        magnitude: speedMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2*&nbspDistancia&nbsp-&nbspAceleración Tangencial&nbsp*&nbspTiempo<sup>2</sup>
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
                    2*&nbsp${fixExpression(arcLenght!)}&nbsp-&nbsp${fixExpression(tangentialAcceleration!)}&nbsp*&nbsp${fixExpression(time!)}<sup>2</sup>
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
const mcua23 = (data: mcuaData) => {
    const angularInitialSpeed = data.angularInitialSpeed!
    const ratio = data.ratio!

    return {
        name: "Velocidad Tangencial Inicial",
        input: "tangentialInitialSpeed",
        value: fixNumber(angularInitialSpeed*ratio),
        magnitude: speedMagnitudes.main,
        formula : `
        <span>
            Velocidad&nbspAngular&nbspInicial&nbsp*&nbspRadio
        </span>
        <span>
            ${fixExpression(angularInitialSpeed)}&nbsp*&nbsp${fixExpression(ratio)}
        </span>
        `
    }
}
const mcua24 = (data: mcuaData) => {
    const angularFinalSpeed = data.angularFinalSpeed!
    const ratio = data.ratio!

    return {
        name: "Velocidad Tangencial Final",
        input: "tangentialFinalSpeed",
        value: fixNumber(angularFinalSpeed*ratio),
        magnitude: speedMagnitudes.main,
        formula : `
        <span>
            Velocidad&nbspAngular&nbspFinal&nbsp*&nbspRadio
        </span>
        <span>
            ${fixExpression(angularFinalSpeed)}&nbsp*&nbsp${fixExpression(ratio)}
        </span>
        `
    }
}
const mcua25 = (data: mcuaData) => {
    const angularAcceleration = data.angularAcceleration!
    const ratio = data.ratio!

    return {
        name: "Aceleración Tangencial",
        input: "tangentialAcceleration",
        value: fixNumber(angularAcceleration*ratio),
        magnitude: accelerationTangentialMagnitudes.main,
        formula : `
        <span>
            Aceleración&nbspAngular&nbsp*&nbspRadio
        </span>
        <span>
            ${fixExpression(angularAcceleration)}&nbsp*&nbsp${fixExpression(ratio)}
        </span>
        `
    }
}
const mcua26 = (data: mcuaData) => {
    const angle = data.angle!
    const ratio = data.ratio!

    return {
        name: "Longitud del arco",
        input: "arcLenght",
        value: fixNumber(angle*ratio),
        magnitude: distanceMagnitudes.main,
        formula : `
        <span>
            Aceleración&nbspAngular&nbsp*&nbspRadio
        </span>
        <span>
            ${fixExpression(angle)}&nbsp*&nbsp${fixExpression(ratio)}
        </span>
        `
    }
}
const mcua27 = (data:mcuaData) => {
    const ratio = data.ratio!
    const tangentialInitialSpeed  = data.tangentialInitialSpeed!

    return {
        name: 'Velocidad Angular Inicial',
        input: 'angularInitialSpeed',
        value: fixNumber(tangentialInitialSpeed/ratio),
        magnitude: speedAngularMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspTangencial&nbspInicial
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Radio
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(tangentialInitialSpeed)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(ratio)}
                    </td>
                </tr>
            </table>`
    } as result
}
const mcua28 = (data:mcuaData) => {
    const ratio = data.ratio!
    const tangentialFinalSpeed  = data.tangentialFinalSpeed!

    return {
        name: 'Velocidad Angular Final',
        input: 'angularFinalSpeed',
        value: fixNumber(tangentialFinalSpeed/ratio),
        magnitude: speedAngularMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspTangencial&nbspFinal
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Radio
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(tangentialFinalSpeed)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(ratio)}
                    </td>
                </tr>
            </table>`
    } as result
}
const mcua29 = (data:mcuaData) => {
    const ratio = data.ratio!
    const tangentialAcceleration  = data.tangentialAcceleration!

    return {
        name: 'Aceleración Angular',
        input: 'angularAcceleration',
        value: fixNumber(tangentialAcceleration/ratio),
        magnitude: accelerationAngularMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Aceleración&nbspTangencial
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Radio
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(tangentialAcceleration)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(ratio)}
                    </td>
                </tr>
            </table>`
    } as result
}
const mcua30 = (data:mcuaData) => {
    const ratio = data.ratio!
    const arcLenght  = data.arcLenght!

    return {
        name: 'Ángulo',
        input: 'angle',
        value: fixNumber(arcLenght/ratio),
        magnitude: speedAngularMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Longitud&nbspdel&nbspArco
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Radio
                </td>
            </tr>
            </table> 
            = 
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(arcLenght)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(ratio)}
                    </td>
                </tr>
            </table>`
    } as result
}

export const mcuaFormulas: formula[] = [
    { required: ["angle", "angularInitialSpeed", "angularFinalSpeed"], result: "time", func: mcua1 },
    { required: ["angularInitialSpeed", "angularFinalSpeed", "time"], result: "angularAcceleration", func: mcua2 },
    { required: ["angularInitialSpeed", "time", "angle"], result: "angularAcceleration", func: mcua3 },
    { required: ["angularInitialSpeed", "angularFinalSpeed", "time"], result: "angle", func: mcua4 },
    { required: ["angularInitialSpeed", "angularFinalSpeed", "angularAcceleration"], result: "time", func: mcua5 },
    { required: ["angularInitialSpeed", "angularAcceleration", "angle"], result: "angularFinalSpeed", func: mcua6, exception: exceptionMcua6 },
    { required: ["angularFinalSpeed", "angularAcceleration", "angle"], result: "angularInitialSpeed", func: mcua7, exception: exceptionMcua7 },
    { required: ["angularInitialSpeed", "angularAcceleration", "time"], result: "angularFinalSpeed", func: mcua8 },
    { required: ["angularFinalSpeed", "angularAcceleration", "time"], result: "angularInitialSpeed", func: mcua9 },
    { required: ["angularFinalSpeed", "angle", "time"], result: "angularInitialSpeed", func: mcua10 },
    { required: ["angularAcceleration", "angle", "time"], result: "angularInitialSpeed", func: mcua11 },
    { required: ["arcLenght", "tangentialInitialSpeed", "tangentialFinalSpeed"], result: "time", func: mcua12 },
    { required: ["tangentialInitialSpeed", "tangentialFinalSpeed", "time"], result: "tangentialAcceleration", func: mcua13 },
    { required: ["tangentialInitialSpeed", "time", "arcLenght"], result: "tangentialAcceleration", func: mcua14 },
    { required: ["tangentialInitialSpeed", "tangentialFinalSpeed", "time"], result: "arcLenght", func: mcua15 },
    { required: ["tangentialInitialSpeed", "tangentialFinalSpeed", "tangentialAcceleration"], result: "time", func: mcua16 },
    { required: ["tangentialInitialSpeed", "tangentialAcceleration", "arcLenght"], result: "tangentialFinalSpeed", func: mcua17, exception: exceptionMcua17 },
    { required: ["tangentialFinalSpeed", "tangentialAcceleration", "arcLenght"], result: "tangentialInitialSpeed", func: mcua18, exception: exceptionMcua18 },
    { required: ["tangentialInitialSpeed", "tangentialAcceleration", "time"], result: "tangentialFinalSpeed", func: mcua19 },
    { required: ["tangentialFinalSpeed", "tangentialAcceleration", "time"], result: "tangentialInitialSpeed", func: mcua20 },
    { required: ["tangentialFinalSpeed", "arcLenght", "time"], result: "tangentialInitialSpeed", func: mcua21 },
    { required: ["tangentialAcceleration", "arcLenght", "time"], result: "tangentialInitialSpeed", func: mcua22 },
    { required: ["angularInitialSpeed", "ratio"], result: "tangentialInitialSpeed", func: mcua23 },
    { required: ["angularFinalSpeed", "ratio"], result: "tangentialFinalSpeed", func: mcua24 },
    { required: ["angularAcceleration", "ratio"], result: "tangentialAcceleration", func: mcua25 },
    { required: ["angle", "ratio"], result: "arcLenght", func: mcua26 },
    { required: ["tangentialInitialSpeed", "ratio"], result: "angularInitialSpeed", func: mcua27 },
    { required: ["tangentialFinalSpeed", "ratio"], result: "angularFinalSpeed", func: mcua28 },
    { required: ["tangentialAcceleration", "ratio"], result: "angularAcceleration", func: mcua29 },
    { required: ["arcLenght", "ratio"], result: "angle", func: mcua30 },
]