import type { mcuaInputs, mcuaMagnitudes } from '$lib/interfaces';
import { handleInputs } from '../main';
import { inputsMcua, magnitudesMcua, resultsMcua } from '$lib/stores';
import { mcuaFormulas } from './formulas';

let inputs: mcuaInputs

inputsMcua.subscribe((value) => {
    inputs = value
})

let magnitudes: mcuaMagnitudes

magnitudesMcua.subscribe((value) => {
    magnitudes = value
})

const exceptZeroInputs = ['angularInitialSpeed', 'tangentialInitialSpeed', 'angularFinalSpeed', 'tangentialFinalSpeed'];
const exceptNegativeInputs = ['centripetalAcceleration', 'tangentialAcceleration', 'angularAcceleration']

export const handleInputsMcua = () => {
    handleInputs(exceptZeroInputs, exceptNegativeInputs, inputs, resultsMcua, mcuaFormulas, magnitudes)
}