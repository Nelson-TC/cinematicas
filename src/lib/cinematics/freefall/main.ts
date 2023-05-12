import type { freeFallMagnitudes, freefallInputs } from '$lib/interfaces';
import { inputsFreefall, magnitudesFreefall, resultsFreefall } from '$lib/stores';
import { freefallFormulas } from './formulas';
import { handleInputs } from '../main';

let inputs: freefallInputs

inputsFreefall.subscribe((value) => {
    inputs = value
})

let magnitudes: freeFallMagnitudes

magnitudesFreefall.subscribe((value) => {
    magnitudes = value
})

const exceptZeroInputs = ['initialSpeed', 'finalSpeed'];
const exceptNegativeInputs = [] as string[];

export const handleInputsFreefall = () => {
        handleInputs(exceptZeroInputs, exceptNegativeInputs, inputs, resultsFreefall, freefallFormulas, magnitudes)
}