import { speedAngularMagnitudes, type formula, type mcuData, type result, timeMagnitudes, angleAngularMagnitudes, speedMagnitudes, accelerationTangentialMagnitudes, frecuencyMagnitudes, distanceMagnitudes } from "$lib/interfaces";
import { fixExpression, fixNumber } from "$lib/utils";

const mcu1 = (data: mcuData): result => {
    const time = data.time!
    const angle = data.angle!

    return {
        name: "Velocidad Angular",
        input: "angularSpeed",
        value: fixNumber(angle/time),
        magnitude: speedAngularMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Ángulo
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
                        ${fixExpression(angle)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(time)}
                    </td>
                </tr>
            </table>
            `
    } as result
}
const mcu2 = (data: mcuData): result => {
    const angle = data.angle!
    const angularSpeed = data.angularSpeed!

    return {
        name: "Tiempo",
        input: "time",
        value: fixNumber(angle/angularSpeed),
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Ángulo
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Velocidad&nbspÁngular
                </td>
            </tr>
            </table>
            =
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        ${fixExpression(angle)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(angularSpeed)}
                    </td>
                </tr>
            </table>
            `
    } as result
}
const mcu3 = (data: mcuData): result => {
    const angularSpeed = data.angularSpeed!
    const time = data.time!

    return {
        name: "Ángulo",
        input: "angle",
        value: fixNumber(angularSpeed*time),
        magnitude: angleAngularMagnitudes.main,
        formula: `
            <span>
                Velocidad&nbspÁngular&nbsp*&nbspTiempo
            </span> 
                = 
            <span>
                ${fixExpression(angularSpeed)}&nbsp*&nbsp${fixExpression(time)}
            </span>`
    } as result
}
const mcu4 = (data:mcuData): result => {
    const ratio = data.ratio!
    const angularSpeed = data.angularSpeed!

    return {
        name: "Velocidad Tangencial",
        input: "tangentialSpeed",
        value: fixNumber(angularSpeed*ratio),
        magnitude: speedMagnitudes.main,
        formula: `
            <span>
                Velocidad&nbspÁngular&nbsp*&nbspRadio
            </span> 
                = 
            <span>
                ${fixExpression(angularSpeed)}&nbsp*&nbsp${fixExpression(ratio)}
            </span>`
    } as result
}
const mcu5 = (data:mcuData): result => {
    const tangentialSpeed = data.tangentialSpeed!
    const ratio = data.ratio!


    return {
        name: "Aceleración centripeta",
        input: "centripetalAcceleration",
        value: fixNumber(Math.pow(tangentialSpeed, 2)/ratio),
        magnitude: accelerationTangentialMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Velocidad&nbspTangencial<sup>2</sup>
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
                        ${fixExpression(tangentialSpeed)}<sup>2</sup>
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(ratio)}
                    </td>
                </tr>
            </table>
            `
    } as result
}
const mcu6 = (data:mcuData): result => {
    const ratio = data.ratio!
    const angularSpeed = data.angularSpeed!

    return {
        name: "Aceleración centripeta",
        input: "centripetalAcceleration",
        value: fixNumber(Math.pow(angularSpeed, 2)*ratio),
        magnitude: accelerationTangentialMagnitudes.main,
        formula: `
            <span>
                Velocidad&nbspÁngular<sup>2</sup>&nbsp*&nbspRadio
            </span> 
                = 
            <span>
                ${fixExpression(angularSpeed)}<sup>2</sup>&nbsp*&nbsp${fixExpression(ratio)}
            </span>`
    } as result
}
const mcu7 = (data:mcuData): result => {
    const ratio = data.ratio!
    const tangentialSpeed = data.tangentialSpeed!
    
    return {
        name: "Período",
        input: "period",
        value: fixNumber((2*Math.PI*ratio)/tangentialSpeed),
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2&nbsp*&nbspπ&nbsp*&nbspRadio
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Velocidad&nbspTangencial
                </td>
            </tr>
            </table>
            =
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        2&nbsp*&nbspπ&nbsp*&nbsp${fixExpression(ratio)}
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(tangentialSpeed)}
                    </td>
                </tr>
            </table>
            `
    } as result
}
const mcu8 = (data:mcuData): result => {
    const angularSpeed = data.angularSpeed!
    
    return {
        name: "Período",
        input: "period",
        value: fixNumber((2*Math.PI)/angularSpeed),
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    2&nbsp*&nbspπ
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Velocidad&nbspAngular
                </td>
            </tr>
            </table>
            =
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        2&nbsp*&nbspπ
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(angularSpeed)}
                    </td>
                </tr>
            </table>
            `
    } as result
}
const mcu9 = (data:mcuData): result => {
    const period = data.period!
    
    return {
        name: "Frecuencia",
        input: "frecuency",
        value: fixNumber(1/period),
        magnitude: frecuencyMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    1
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Periodo
                </td>
            </tr>
            </table>
            =
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        1
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(period)}
                    </td>
                </tr>
            </table>
            `
    } as result
}
const mcu10 = (data:mcuData): result => {
    const frecuency = data.frecuency!
    
    return {
        name: "Período",
        input: "period",
        value: fixNumber(1/frecuency),
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    1
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Frecuencia
                </td>
            </tr>
            </table>
            =
            <table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
                <tr>
                    <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                        1
                    </td>
                </tr> 
                <tr>
                    <td style="padding:0px; text-align:center">
                        ${fixExpression(frecuency)}
                    </td>
                </tr>
            </table>
            `
    } as result
}
const mcu11 = (data:mcuData): result => {
    const ratio = data.ratio!

    return {
        name: "Diámetro",
        input: "diameter",
        value: fixNumber(ratio*2),
        magnitude: distanceMagnitudes.main,
        formula: `
            <span>
                Radio&nbsp*&nbsp2
            </span> 
                = 
            <span>
            ${fixExpression(ratio)}&nbsp*&nbsp2

            </span>`
    } as result
}
const mcu12 = (data:mcuData): result => {
    const diameter = data.diameter!
    
    return {
        name: "Radio",
        input: "ratio",
        value: fixNumber(diameter/2),
        magnitude: distanceMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Diámetro
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
                        ${fixExpression(diameter)}
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
const mcu13 = (data:mcuData): result => {
    const ratio = data.ratio!
    const angle = data.angle!

    return {
        name: "Longitud del arco",
        input: "arcLenght",
        value: fixNumber(ratio*angle),
        magnitude: distanceMagnitudes.main,
        formula: `
            <span>
                Radio&nbsp*&nbspÁngulo
            </span> 
                = 
            <span>
                ${fixExpression(ratio)}&nbsp*&nbsp${fixExpression(angle)}
            </span>`
    } as result
}
const mcu14 = (data:mcuData): result => {
    const arcLenght = data.arcLenght!
    const tangentialSpeed = data.tangentialSpeed!

    return {
        name: "Tiempo",
        input: "time",
        value: fixNumber(arcLenght/tangentialSpeed),
        magnitude: timeMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Longitud&nbspdel&nbsparco
                </td>
            </tr> 
            <tr>
                <td style="padding:0px; text-align:center">
                    Velocidad&nbspTangencial
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
                        ${fixExpression(tangentialSpeed)}
                    </td>
                </tr>
            </table>
            `
    } as result
    
}
const mcu15 = (data:mcuData): result => {
    const arcLenght = data.arcLenght!
    const ratio = data.ratio!

    return {
        name: "Ángulo",
        input: "angle",
        value: fixNumber(arcLenght/ratio),
        magnitude: angleAngularMagnitudes.main,
        formula: `<table style="display:inline-table; border-collapse:collapse; vertical-align:middle">
            <tr>
                <td style="padding:0px; border-bottom: solid 1px; width:8px; text-align:center">
                    Longitud&nbspdel&hnbspArco
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
            </table>
            `
    } as result
 }

export const mcuFormulas: formula[] = [
    { required: ["angle", "time"], result: "angularSpeed", func: mcu1 },
    { required: ["angle", "angularSpeed"], result: "time", func: mcu2 },
    { required: ["time", "angularSpeed"], result: "angle", func: mcu3 },
    { required: ["ratio", "angularSpeed"], result: "tangentialSpeed", func: mcu4 },
    { required: ["ratio", "tangentialSpeed"], result: "centripetalAcceleration", func: mcu5 },
    { required: ["ratio", "angularSpeed"], result: "centripetalAcceleration", func: mcu6 },
    { required: ["ratio", "tangentialSpeed"], result: "period", func: mcu7 },
    { required: ["angularSpeed"], result: "period", func: mcu8 },
    { required: ["period"], result: "frecuency", func: mcu9 },
    { required: ["frecuency"], result: "period", func: mcu10 },
    { required: ["ratio"], result: "diameter", func: mcu11 },
    { required: ["diameter"], result: "ratio", func: mcu12 },
    { required: ["ratio", "angle"], result: "arcLenght", func: mcu13 },
    { required: ["arcLenght", "tangentialSpeed"], result: "time", func: mcu14 },
    { required: ["arcLenght", "ratio"], result: "angle", func: mcu15 },

]