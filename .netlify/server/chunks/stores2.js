import slugify from "slugify";
import { r as readable, w as writable } from "./index.js";
const cinematicsName = [
  "movimiento rectilineo uniforme",
  "movimiento rectilineo uniformemente variado",
  "caida libre",
  "tiro vertical",
  "movimiento parabolico de caida libre",
  "movimiento circular uniforme",
  "movimiento circular uniformemente acelerado"
];
const cinematics = readable(
  cinematicsName.map((name) => {
    let acronim = null;
    const obj = {
      name,
      slug: slugify(name)
    };
    if (name.length > 15) {
      acronim = name.split(" ").map((c) => c.charAt(0)).join("");
      obj.acronim = acronim.toUpperCase();
    }
    return obj;
  })
);
const inputsMcua = writable({});
const magnitudesMcua = writable({});
const resultsMcua = writable([]);
const inputsMcu = writable({});
const magnitudesMcu = writable({});
const resultsMcu = writable([]);
const inputsMpdcl = writable({});
const magnitudesMpdcl = writable({});
const resultsMpdcl = writable([]);
const inputsVerticalshot = writable({});
const magnitudesVerticalshot = writable({});
const resultsVerticalshot = writable([]);
const inputsFreefall = writable({});
const magnitudesFreefall = writable({});
const resultsFreefall = writable([]);
const inputsMruv = writable({});
const magnitudesMruv = writable({});
const resultsMruv = writable([]);
const inputsMru = writable({});
const magnitudesMru = writable({});
const resultMru = writable({});
export {
  inputsMcu as a,
  magnitudesMcu as b,
  cinematics as c,
  resultsMcu as d,
  inputsMcua as e,
  magnitudesMcua as f,
  resultsMcua as g,
  inputsMpdcl as h,
  inputsFreefall as i,
  magnitudesMpdcl as j,
  resultsMpdcl as k,
  inputsMru as l,
  magnitudesFreefall as m,
  magnitudesMru as n,
  resultMru as o,
  inputsMruv as p,
  magnitudesMruv as q,
  resultsFreefall as r,
  resultsMruv as s,
  inputsVerticalshot as t,
  magnitudesVerticalshot as u,
  resultsVerticalshot as v
};
