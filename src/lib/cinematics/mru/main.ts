import type { mruInputs, mruMagnitudes } from "$lib/interfaces"
import { inputsMru, magnitudesMru, resultMru } from "$lib/stores"
import { mruFormulas } from "./formulas"
import { handleInputs } from "../main"

let inputs: mruInputs

inputsMru.subscribe((value) => {
    inputs = value
})

let magnitudes: mruMagnitudes

magnitudesMru.subscribe((value) => {
    magnitudes = value
})

const exceptZeroInputs = [] as string[];
const exceptNegativeInputs = [] as string[]

export const handleInputsMru = () => { 
    handleInputs(exceptZeroInputs, exceptNegativeInputs, inputs, resultMru, mruFormulas, magnitudes)
}