import type { verticalshotInputs, verticalshotMagnitudes } from "$lib/interfaces"
import { inputsVerticalshot, magnitudesVerticalshot, resultsVerticalshot } from "$lib/stores"
import { verticalshotFormulas } from './formulas';
import { handleInputs } from "../main";

let inputs: verticalshotInputs

inputsVerticalshot.subscribe((value) => {
    inputs = value
})

let magnitudes: verticalshotMagnitudes

magnitudesVerticalshot.subscribe((value) => {
    magnitudes = value
})

const exceptZeroInputs = ['initialSpeed']
const exceptNegativeInputs = [] as string[]

export const handleInputsVerticalshot = () => { 
    handleInputs(exceptZeroInputs, exceptNegativeInputs, inputs, resultsVerticalshot, verticalshotFormulas, magnitudes)
}