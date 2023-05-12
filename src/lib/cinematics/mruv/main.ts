import type { mruvInputs, mruvMagnitudes } from '$lib/interfaces';
import { inputsMruv, magnitudesMruv, resultsMruv } from '$lib/stores';
import { mruvFormulas } from './formulas';
import { handleInputs } from '../main';
let inputs: mruvInputs

inputsMruv.subscribe((value) => {
    inputs = value
})

let magnitudes: mruvMagnitudes

magnitudesMruv.subscribe((value) => {
    magnitudes = value
})

const exceptZeroInputs = ['initialSpeed', 'finalSpeed'];
const exceptNegativeInputs = ['acceleration']

export const handleInputsMruv = () => {
    handleInputs(exceptZeroInputs, exceptNegativeInputs, inputs, resultsMruv, mruvFormulas, magnitudes)
}