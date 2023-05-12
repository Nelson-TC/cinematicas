import { accelerationAngularMagnitudes, accelerationTangentialMagnitudes, angleAngularMagnitudes, angleTangentialMagnitudes, distanceMagnitudes, frecuencyMagnitudes, speedAngularMagnitudes, speedMagnitudes, timeMagnitudes } from "./interfaces"
import { fixExpression } from "./utils"

export const toDegrees = (angle: number) => {
    return (angle * 180) / Math.PI
}
export const toRadians = (angle: number) => {
    return (angle * Math.PI) / 180
}

export const mainConversor = (type: string, conv: string, value: string, result?: boolean): number | {value: number, formula: string} => {
    let foundedConverter
    if (result) {
        foundedConverter = Object.values(resultConverters).find((f) => f.type.includes(type) && conv === f.conv);
        if(foundedConverter){
            return foundedConverter.func(parseFloat(value))
        }
    } else {
        foundedConverter = Object.values(converters).find((f) => f.type.includes(type) && conv === f.conv);
        if(foundedConverter){
            return foundedConverter.func(parseFloat(value)).value
        }
    }
        return parseFloat(value)
}


const speedTypes = ["speed", "initialSpeed", "finalSpeed", "tangentialSpeed", "tangentialInitialSpeed", "tangentialFinalSpeed", "initialSpeedX", "initialSpeedY"]
const speedAngularTypes = ["angularSpeed", "angularInitialSpeed", "angularFinalSpeed"]
const timeTypes = ["time", "flightTime", "riseTime"]
const distanceTypes = ["distance", "height", "initialHeight", "maxHeight", "horizontalDisplacement", "horizontalReach"]
const angularTypes = ["angle"]
const accelerationTypes = ["acceleration", "centripetalAcceleration"]
const frecuencyTypes = ["frecuency"]
const accelerationAngularTypes = ["angularAcceleration"]

export const converters = [
    { type: speedTypes, conv: speedMagnitudes.kmph, func: (value: number) => { return { value: value / 3.6 } } },
    { type: timeTypes, conv: timeMagnitudes.minutes, func: (value: number) => { return { value: value * 60 } } },
    { type: timeTypes, conv: timeMagnitudes.hours, func: (value: number) => { return { value: value * 3600 } } },
    { type: distanceTypes, conv: distanceMagnitudes.centimeteres, func: (value: number) => { return { value: value / 100 } } },
    { type: distanceTypes, conv: distanceMagnitudes.kilometers, func: (value: number) => { return { value: value * 1000 } } },
    { type: angularTypes, conv: angleAngularMagnitudes.degrees, func: (value: number) => { return { value: (value * Math.PI) / 180 } } },
    { type: angularTypes, conv: angleTangentialMagnitudes.radians, func: (value: number) => { return { value: (value * 180) / Math.PI } } },
    { type: accelerationTypes, conv: accelerationTangentialMagnitudes.kmph, func: (value: number) => { return { value: value / 12960 } } },
    { type: speedAngularTypes, conv: speedAngularMagnitudes.degreesPerSec, func: (value: number) => { return { value: (value * Math.PI) / 180 } } },
    { type: speedAngularTypes, conv: speedAngularMagnitudes.rpm, func: (value: number) => { return { value: (value * Math.PI) / 30 } } },
    { type: frecuencyTypes, conv: frecuencyMagnitudes.khz, func: (value: number) => {return {value: value*1000}}},
    { type: frecuencyTypes, conv: frecuencyMagnitudes.mhz, func: (value: number) => {return {value: value*1000000}}},
    { type: accelerationAngularTypes, conv: accelerationAngularMagnitudes.degreesPerSec, func: (value: number) => {return {value: (value*Math.PI)/180}}}
]

export const resultConverters = [
    { type: speedTypes, conv: speedMagnitudes.kmph, func: (value: number) => { 

        return { value: value * 3.6, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} * 3.6` } }
     },
    { type: timeTypes, conv: timeMagnitudes.minutes, func: (value: number) => { 
        return { value: value / 60 , formula: `= ${fixExpression(value)} -> ${fixExpression(value)} / 60`} }
     },
    { type: timeTypes, conv: timeMagnitudes.hours, func: (value: number) => { 
        return { value: value / 3600, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} / 3600` } }
     },
    { type: distanceTypes, conv: distanceMagnitudes.centimeteres, func: (value: number) => { 
        return { value: value * 100, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} * 100` } }
     },
    { type: distanceTypes, conv: distanceMagnitudes.kilometers, func: (value: number) => { 
        return { value: value / 1000, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} / 1000` } }
     },
    { type: angularTypes, conv: angleAngularMagnitudes.degrees, func: (value: number) => { 
        return { value: (value / Math.PI) * 180, formula: `= ${fixExpression(value)} -> (${fixExpression(value)} / π) * 180` } }
     },
    { type: angularTypes, conv: angleTangentialMagnitudes.radians, func: (value: number) => { 
        return { value: (value / 180) * Math.PI, formula: `= ${fixExpression(value)} -> (${fixExpression(value)} / 180) * π` } }
     },
    { type: accelerationTypes, conv: accelerationTangentialMagnitudes.kmph, func: (value: number) => { 
        return { value: value * 12960,  formula: `= ${fixExpression(value)} -> ${fixExpression(value)} * 12960` } }
     },
    { type: speedAngularTypes, conv: speedAngularMagnitudes.degreesPerSec, func: (value: number) => { 
        return { value: (value / Math.PI) * 180, formula: `= ${fixExpression(value)} -> (${fixExpression(value)} / π) * 180` } }
     },
    { type: speedAngularTypes, conv: speedAngularMagnitudes.rpm, func: (value: number) => { 
        return { value: (value / Math.PI) * 30, formula: `= ${fixExpression(value)} -> (${fixExpression(value)} / π) * 30` }} 
    },
    { type: frecuencyTypes, conv: frecuencyMagnitudes.khz, func: (value: number) => { 
        return { value: value/1000, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} / 1000` }} 
    },
    { type: frecuencyTypes, conv: frecuencyMagnitudes.mhz, func: (value: number) => { 
        return { value: value/1000000, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} / 1000000` }} 
    },
    { type: accelerationAngularTypes, conv: accelerationAngularMagnitudes.degreesPerSec, func: (value: number) => {
        return {value: (value/Math.PI)*180, formula: `= ${fixExpression(value)} -> (${fixExpression(value)} / π)*180`}}
    }
]