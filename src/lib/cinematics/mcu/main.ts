import type { mcuInputs, mcuMagnitudes } from '$lib/interfaces';
import { inputsMcu, resultsMcu, magnitudesMcu } from '$lib/stores';
import { mcuFormulas } from './formulas';
import { handleInputs } from '../main';
let inputs: mcuInputs

inputsMcu.subscribe((value) => {
    inputs = value
})

let magnitudes: mcuMagnitudes
magnitudesMcu.set({})
magnitudesMcu.subscribe((value) => {
    magnitudes = value
})


const exceptZeroInputs = ['angularSpeed', 'tangentialSpeed'];
const exceptNegativeInputs = ['centripetalAcceleration']

export const handleInputsMcu = () => {
    handleInputs(exceptZeroInputs, exceptNegativeInputs, inputs, resultsMcu, mcuFormulas, magnitudes)
}