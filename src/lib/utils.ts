type ToastId = string;

type ToastState = {
    canExecute: boolean;
    timeoutId?: number;
};

export const fixNumber = (num: number) => {
    return parseFloat(num.toFixed(4));
};

export const fixExpression = (num: number) => {
    const number = fixNumber(num)
    if (isNaN(number) || !isFinite(number)) {
        return "Indeterminado"
    } else {
        return number
    }
}

const toastStates: Record<ToastId, ToastState> = {};

export const debounceFunction = (func: () => void, toastId: ToastId) => {
    const toastState = toastStates[toastId] || { canExecute: true };

    if (toastState.canExecute) {
        func();

        toastState.canExecute = false;
        toastState.timeoutId = setTimeout(() => {
            toastState.canExecute = true;
            delete toastState.timeoutId;
        }, 5000);

        toastStates[toastId] = toastState;
    } else if (toastState.timeoutId) {
        clearTimeout(toastState.timeoutId);

        toastState.timeoutId = setTimeout(() => {
            toastState.canExecute = true;
            delete toastState.timeoutId;
        }, 5000);

        toastStates[toastId] = toastState;
    }
};

/* 
export const majorAndMinor = (
    major: {
        name: string
        value: number
    },
    minor: {
        name: string
        value: number
    },
    majorOrMinorFunc: majorOrMinor
): boolean => {
    if (majorOrMinorFunc === "major") {
        if ((major.value && minor.value) && (major.value > minor.value)) {
            debounceFunction(() => {
                toast(`El valor de ${major.name.toLocaleLowerCase()} no puede ser mayor al valor de ${minor.name.toLocaleLowerCase()}, el resultado se mostrará cuando los datos sean coherentes`, {
                    icon: "🔔",
                    style: 'border: 4px solid #ea580c; background-color: #fff7ed'
                })
            }, `${major.name}&${minor.name}`)
            return true
        }
        return false
    } else {
        if ((major.value && minor.value) && (minor.value > major.value)) {
            debounceFunction(() => {
                toast(`El valor de ${major.name.toLocaleLowerCase()} no puede ser menor al valor de ${minor.name.toLocaleLowerCase()}, el resultado se mostrará cuando los datos sean coherentes`, {
                    icon: "🔔",
                    style: 'border: 4px solid #ea580c; background-color: #fff7ed'
                })
            }, `${minor.name}&${major.name}`)
            return true
        }
        return false
    }
} */