export type cinematicsList = {
    name: string
    slug: string
    acronim?: string
}

export enum speedMagnitudes{
    main = "m/s",
    kmph = "km/h"
}

export enum speedAngularMagnitudes{
    main = "rad/s",
    rpm = "r.p.m",
    degreesPerSec = "grados/s"
}

export enum timeMagnitudes{
    main = "segundos",
    minutes = "minutos",
    hours = "horas"
}
export enum distanceMagnitudes{
    main = "metros",
    centimeteres = "centimetros",
    kilometers = "kilometros"
}
export enum accelerationTangentialMagnitudes{
    main = "m/s^2",
    kmph = "km/h^2"
}

export enum accelerationAngularMagnitudes{
    main = "rad/s^2",
    degreesPerSec = "grados/s^2"
}

export enum angleTangentialMagnitudes{
    main = "grados",
    radians = "radianes"
}
export enum angleAngularMagnitudes{
    main = "radianes",
    degrees = "grados"
}

export enum frecuencyMagnitudes{
    main = "Hz",
    mhz = "mHz",
    khz = "kHz"
}

export type mruMagnitudes = {
    speed?: speedMagnitudes;
    distance?: distanceMagnitudes;
    time?: timeMagnitudes;
}

export type mruvMagnitudes = {
    initialSpeed?: speedMagnitudes;
    finalSpeed?: speedMagnitudes;
    distance?: distanceMagnitudes;
    time?: timeMagnitudes;
    acceleration?: accelerationTangentialMagnitudes;
}

export type freeFallMagnitudes = {
    initialSpeed?: speedMagnitudes;
    finalSpeed?: speedMagnitudes;
    height?: distanceMagnitudes;
    time?: timeMagnitudes;
    gravity?: accelerationTangentialMagnitudes;
}

export type verticalshotMagnitudes = {
    initialSpeed?: speedMagnitudes;
    height?: distanceMagnitudes;
    time?: timeMagnitudes;
    gravity?: accelerationTangentialMagnitudes;
}

export type mpdclMagnitudes = {
    initialSpeed?: speedMagnitudes;
    initialSpeedX?: speedMagnitudes;
    initialSpeedY?: speedMagnitudes;
    angle?: angleTangentialMagnitudes;
    riseTime?: timeMagnitudes;
    flightTime?: timeMagnitudes;
    initialHeight?: distanceMagnitudes;
    maxHeight?: distanceMagnitudes;
    horizontalDisplacement?: distanceMagnitudes;
    horizontalReach?: distanceMagnitudes;
    gravity?: accelerationTangentialMagnitudes;
}

export type mcuMagnitudes = {
    angle?: angleAngularMagnitudes
    time?: timeMagnitudes
    angularSpeed?: speedAngularMagnitudes
    tangentialSpeed?: speedMagnitudes
    arcLenght?: distanceMagnitudes
    diameter?: distanceMagnitudes
    ratio?: distanceMagnitudes
    period?: timeMagnitudes
    frecuency?: frecuencyMagnitudes
    centripetalAcceleration?: accelerationTangentialMagnitudes
}
export type mcuaMagnitudes = {
    angularInitialSpeed?: speedAngularMagnitudes
    angularFinalSpeed?: speedAngularMagnitudes
    angle?: angleAngularMagnitudes;
    angularAcceleration?: accelerationAngularMagnitudes;
    tangentialInitialSpeed?: speedMagnitudes;
    tangentialFinalSpeed?: speedMagnitudes
    arcLenght?: distanceMagnitudes;
    tangentialAcceleration?: accelerationTangentialMagnitudes;
    time?: timeMagnitudes;
    ratio?: distanceMagnitudes;
};


export type mruData = {
    speed?: number;
    distance?: number;
    time?: number;
};


export type mruInputs = {
    speed: HTMLInputElement;
    distance: HTMLInputElement;
    time: HTMLInputElement;
};

export type result = {
    name: string;
    input: string
    value: number;
    magnitude: string;
    formula: string;
};

export type mruvData = {
    initialSpeed?: number;
    finalSpeed?: number;
    distance?: number;
    time?: number;
    acceleration?: number;
};


export type mruvInputs = {
    initialSpeed: HTMLInputElement;
    finalSpeed: HTMLInputElement;
    distance: HTMLInputElement;
    time: HTMLInputElement;
    acceleration: HTMLInputElement;
};

export type freefallData = {
    initialSpeed?: number;
    finalSpeed?: number;
    height?: number;
    time?: number;
    gravity?: number;
};


export type freefallInputs = {
    initialSpeed: HTMLInputElement;
    finalSpeed: HTMLInputElement;
    height: HTMLInputElement;
    time: HTMLInputElement;
    gravity: HTMLInputElement;
};

export type verticalshotData = {
    initialSpeed?: number;
    height?: number;
    time?: number;
    gravity?: number;
};


export type verticalshotInputs = {
    initialSpeed: HTMLInputElement;
    height: HTMLInputElement;
    time: HTMLInputElement;
    gravity: HTMLInputElement;
};

export type mpdclData = {
    initialSpeed?: number;
    initialSpeedX?: number;
    initialSpeedY?: number;
    angle?: number;
    riseTime?: number;
    flightTime?: number;
    initialHeight?: number;
    maxHeight?: number;
    horizontalDisplacement?: number;
    horizontalReach?: number;
    gravity?: number;
};


export type mpdclInputs = {
    initialSpeed?: HTMLInputElement;
    initialSpeedX?: HTMLInputElement;
    initialSpeedY?: HTMLInputElement;
    angle?: HTMLInputElement;
    riseTime?: HTMLInputElement;
    flightTime?: HTMLInputElement;
    initialHeight?: HTMLInputElement;
    maxHeight?: HTMLInputElement;
    horizontalDisplacement?: HTMLInputElement;
    horizontalReach?: HTMLInputElement;
    gravity?: HTMLInputElement;
};


export type mcuData = {
    angle?: number;
    time?: number;
    angularSpeed?: number;
    tangentialSpeed?: number;
    arcLenght?: number;
    diameter?: number;
    ratio?: number;
    period?: number;
    frecuency?: number;
    centripetalAcceleration?: number;
};


export type mcuInputs = {
    angle?: HTMLInputElement;
    angularSpeed?: HTMLInputElement;
    time?: HTMLInputElement;
    tangentialSpeed?: HTMLInputElement;
    arcLenght?: HTMLInputElement;
    diameter?: HTMLInputElement;
    ratio?: HTMLInputElement;
    period?: HTMLInputElement;
    frecuency?: HTMLInputElement;
    centripetalAcceleration?: HTMLInputElement;

};

export type mcuaData = {
    angularInitialSpeed?: number;
    angularFinalSpeed?: number
    angle?: number;
    angularAcceleration?: number;
    tangentialInitialSpeed?: number;
    tangentialFinalSpeed?: number
    arcLenght?: number;
    tangentialAcceleration?: number;
    time?: number;
    ratio?: number;
};


export type mcuaInputs = {
    angularInitialSpeed?: HTMLInputElement;
    angularFinalSpeed?: HTMLInputElement
    angle?: HTMLInputElement;
    angularAcceleration?: HTMLInputElement;
    tangentialInitialSpeed?: HTMLInputElement;
    tangentialFinalSpeed?: HTMLInputElement
    arcLenght?: HTMLInputElement;
    tangentialAcceleration?: HTMLInputElement;
    time?: HTMLInputElement;
    ratio?: HTMLInputElement;
};

export type exceptionResult = {
    exists: boolean
    input?: string
    inputChange?: string
    message?: string
    hideResults?: boolean
}

export type converter = {
    type: string
    conv: string
    func: (value: string) => number
}

export type formula = {
    required: string[]
    result: string
    func: (data: InputValues) => result
    exception?: (data: InputValues) => exceptionResult
}

export type InputValues = {
    [key: string]: number;
}

export type InputType = {
    [key: string]: HTMLInputElement
}

export type MagnitudeType = {
    [key: string]: string
}
/* 
export enum majorOrMinor {
    major = "major",
    minor = "minor"
} */