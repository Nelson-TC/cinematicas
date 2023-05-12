import slugify from "slugify";
import { readable, writable, type Writable } from "svelte/store";
import type { cinematicsList, mruInputs, result, mruvInputs, freefallInputs, verticalshotInputs, mpdclInputs, mcuInputs, mcuaInputs, mruMagnitudes, mruvMagnitudes, freeFallMagnitudes, verticalshotMagnitudes, mpdclMagnitudes, mcuMagnitudes, mcuaMagnitudes} from "$lib/interfaces";

const cinematicsName = [
    "movimiento rectilineo uniforme",
    "movimiento rectilineo uniformemente variado",
    "caida libre",
    "tiro vertical",
    "movimiento parabolico de caida libre",
    "movimiento circular uniforme",
    "movimiento circular uniformemente acelerado"
]

export const cinematics = readable(
    cinematicsName.map((name) => {
        let acronim: string | null = null
        const obj: cinematicsList = {
            name,
            slug: slugify(name)
        }
        if (name.length > 15) {
            acronim = name.split(' ').map(c => c.charAt(0)).join('')
            obj.acronim = acronim.toUpperCase()
        }
        return obj
    })
)

export const inputsMcua: Writable<mcuaInputs> = writable({} as mcuaInputs)
export const magnitudesMcua: Writable<mcuaMagnitudes> = writable({} as mcuaMagnitudes)
export const resultsMcua: Writable<result[]> = writable([] as result[])
export const inputsMcu: Writable<mcuInputs> = writable({} as mcuInputs)
export const magnitudesMcu: Writable<mcuMagnitudes> = writable({} as mcuMagnitudes)
export const resultsMcu: Writable<result[]> = writable([] as result[])
export const inputsMpdcl: Writable<mpdclInputs> = writable({} as mpdclInputs)
export const magnitudesMpdcl: Writable<mpdclMagnitudes> = writable({} as mpdclMagnitudes)
export const resultsMpdcl: Writable<result[]> = writable([] as result[])
export const inputsVerticalshot: Writable<verticalshotInputs> = writable({} as verticalshotInputs)
export const magnitudesVerticalshot: Writable<verticalshotMagnitudes> = writable({} as verticalshotMagnitudes)
export const resultsVerticalshot: Writable<result[]> = writable([] as result[])
export const inputsFreefall: Writable<freefallInputs> = writable({} as freefallInputs)
export const magnitudesFreefall: Writable<freeFallMagnitudes> = writable({} as freeFallMagnitudes)
export const resultsFreefall: Writable<result[]> = writable([] as result[])
export const inputsMruv: Writable<mruvInputs> = writable({} as mruvInputs)
export const magnitudesMruv: Writable<mruvMagnitudes> = writable({} as mruvMagnitudes)
export const resultsMruv: Writable<result[]> = writable([] as result[])
export const inputsMru: Writable<mruInputs> = writable({} as mruInputs)
export const magnitudesMru: Writable<mruMagnitudes> = writable({} as mruMagnitudes)
export const resultMru: Writable<result[]> = writable({} as result[])