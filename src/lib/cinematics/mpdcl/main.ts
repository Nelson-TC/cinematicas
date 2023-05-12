import type { mpdclInputs, mpdclMagnitudes } from '$lib/interfaces';
import { inputsMpdcl, magnitudesMpdcl, resultsMpdcl } from '$lib/stores';
import { mpdclFormulas } from './formulas';
import { handleInputs } from '../main';
let inputs: mpdclInputs

inputsMpdcl.subscribe((value) => {
    inputs = value
})

let magnitudes: mpdclMagnitudes

magnitudesMpdcl.subscribe((value) => {
    magnitudes = value
})

const exceptZeroInputs = ['initialSpeed', 'initialSpeedX'];
const exceptNegativeInputs = ['gravity']

export const handleInputsMpdcl = () => {
    handleInputs(exceptZeroInputs, exceptNegativeInputs, inputs, resultsMpdcl, mpdclFormulas, magnitudes)
}