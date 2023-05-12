import { c as create_ssr_component, e as escape, i as each } from "./index2.js";
var speedMagnitudes = /* @__PURE__ */ ((speedMagnitudes2) => {
  speedMagnitudes2["main"] = "m/s";
  speedMagnitudes2["kmph"] = "km/h";
  return speedMagnitudes2;
})(speedMagnitudes || {});
var speedAngularMagnitudes = /* @__PURE__ */ ((speedAngularMagnitudes2) => {
  speedAngularMagnitudes2["main"] = "rad/s";
  speedAngularMagnitudes2["rpm"] = "r.p.m";
  speedAngularMagnitudes2["degreesPerSec"] = "grados/s";
  return speedAngularMagnitudes2;
})(speedAngularMagnitudes || {});
var timeMagnitudes = /* @__PURE__ */ ((timeMagnitudes2) => {
  timeMagnitudes2["main"] = "segundos";
  timeMagnitudes2["minutes"] = "minutos";
  timeMagnitudes2["hours"] = "horas";
  return timeMagnitudes2;
})(timeMagnitudes || {});
var distanceMagnitudes = /* @__PURE__ */ ((distanceMagnitudes2) => {
  distanceMagnitudes2["main"] = "metros";
  distanceMagnitudes2["centimeteres"] = "centimetros";
  distanceMagnitudes2["kilometers"] = "kilometros";
  return distanceMagnitudes2;
})(distanceMagnitudes || {});
var accelerationTangentialMagnitudes = /* @__PURE__ */ ((accelerationTangentialMagnitudes2) => {
  accelerationTangentialMagnitudes2["main"] = "m/s^2";
  accelerationTangentialMagnitudes2["kmph"] = "km/h^2";
  return accelerationTangentialMagnitudes2;
})(accelerationTangentialMagnitudes || {});
var accelerationAngularMagnitudes = /* @__PURE__ */ ((accelerationAngularMagnitudes2) => {
  accelerationAngularMagnitudes2["main"] = "rad/s^2";
  accelerationAngularMagnitudes2["degreesPerSec"] = "grados/s^2";
  return accelerationAngularMagnitudes2;
})(accelerationAngularMagnitudes || {});
var angleTangentialMagnitudes = /* @__PURE__ */ ((angleTangentialMagnitudes2) => {
  angleTangentialMagnitudes2["main"] = "grados";
  angleTangentialMagnitudes2["radians"] = "radianes";
  return angleTangentialMagnitudes2;
})(angleTangentialMagnitudes || {});
var angleAngularMagnitudes = /* @__PURE__ */ ((angleAngularMagnitudes2) => {
  angleAngularMagnitudes2["main"] = "radianes";
  angleAngularMagnitudes2["degrees"] = "grados";
  return angleAngularMagnitudes2;
})(angleAngularMagnitudes || {});
var frecuencyMagnitudes = /* @__PURE__ */ ((frecuencyMagnitudes2) => {
  frecuencyMagnitudes2["main"] = "Hz";
  frecuencyMagnitudes2["mhz"] = "mHz";
  frecuencyMagnitudes2["khz"] = "kHz";
  return frecuencyMagnitudes2;
})(frecuencyMagnitudes || {});
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow"><h1 class="text-3xl font-bold capitalize text-main-black-secondary">${escape(title)}</h1>
	${slots.default ? slots.default({}) : ``}</div>`;
});
const fixNumber = (num) => {
  return parseFloat(num.toFixed(4));
};
const fixExpression = (num) => {
  const number = fixNumber(num);
  if (isNaN(number) || !isFinite(number)) {
    return "Indeterminado";
  } else {
    return number;
  }
};
const speedTypes = ["speed", "initialSpeed", "finalSpeed", "tangentialSpeed", "tangentialInitialSpeed", "tangentialFinalSpeed", "initialSpeedX", "initialSpeedY"];
const speedAngularTypes = ["angularSpeed", "angularInitialSpeed", "angularFinalSpeed"];
const timeTypes = ["time", "flightTime", "riseTime"];
const distanceTypes = ["distance", "height", "initialHeight", "maxHeight", "horizontalDisplacement", "horizontalReach"];
const angularTypes = ["angle"];
const accelerationTypes = ["acceleration", "centripetalAcceleration"];
const frecuencyTypes = ["frecuency"];
const accelerationAngularTypes = ["angularAcceleration"];
[
  { type: speedTypes, conv: speedMagnitudes.kmph, func: (value) => {
    return { value: value / 3.6 };
  } },
  { type: timeTypes, conv: timeMagnitudes.minutes, func: (value) => {
    return { value: value * 60 };
  } },
  { type: timeTypes, conv: timeMagnitudes.hours, func: (value) => {
    return { value: value * 3600 };
  } },
  { type: distanceTypes, conv: distanceMagnitudes.centimeteres, func: (value) => {
    return { value: value / 100 };
  } },
  { type: distanceTypes, conv: distanceMagnitudes.kilometers, func: (value) => {
    return { value: value * 1e3 };
  } },
  { type: angularTypes, conv: angleAngularMagnitudes.degrees, func: (value) => {
    return { value: value * Math.PI / 180 };
  } },
  { type: angularTypes, conv: angleTangentialMagnitudes.radians, func: (value) => {
    return { value: value * 180 / Math.PI };
  } },
  { type: accelerationTypes, conv: accelerationTangentialMagnitudes.kmph, func: (value) => {
    return { value: value / 12960 };
  } },
  { type: speedAngularTypes, conv: speedAngularMagnitudes.degreesPerSec, func: (value) => {
    return { value: value * Math.PI / 180 };
  } },
  { type: speedAngularTypes, conv: speedAngularMagnitudes.rpm, func: (value) => {
    return { value: value * Math.PI / 30 };
  } },
  { type: frecuencyTypes, conv: frecuencyMagnitudes.khz, func: (value) => {
    return { value: value * 1e3 };
  } },
  { type: frecuencyTypes, conv: frecuencyMagnitudes.mhz, func: (value) => {
    return { value: value * 1e6 };
  } },
  { type: accelerationAngularTypes, conv: accelerationAngularMagnitudes.degreesPerSec, func: (value) => {
    return { value: value * Math.PI / 180 };
  } }
];
[
  {
    type: speedTypes,
    conv: speedMagnitudes.kmph,
    func: (value) => {
      return { value: value * 3.6, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} * 3.6` };
    }
  },
  {
    type: timeTypes,
    conv: timeMagnitudes.minutes,
    func: (value) => {
      return { value: value / 60, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} / 60` };
    }
  },
  {
    type: timeTypes,
    conv: timeMagnitudes.hours,
    func: (value) => {
      return { value: value / 3600, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} / 3600` };
    }
  },
  {
    type: distanceTypes,
    conv: distanceMagnitudes.centimeteres,
    func: (value) => {
      return { value: value * 100, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} * 100` };
    }
  },
  {
    type: distanceTypes,
    conv: distanceMagnitudes.kilometers,
    func: (value) => {
      return { value: value / 1e3, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} / 1000` };
    }
  },
  {
    type: angularTypes,
    conv: angleAngularMagnitudes.degrees,
    func: (value) => {
      return { value: value / Math.PI * 180, formula: `= ${fixExpression(value)} -> (${fixExpression(value)} / π) * 180` };
    }
  },
  {
    type: angularTypes,
    conv: angleTangentialMagnitudes.radians,
    func: (value) => {
      return { value: value / 180 * Math.PI, formula: `= ${fixExpression(value)} -> (${fixExpression(value)} / 180) * π` };
    }
  },
  {
    type: accelerationTypes,
    conv: accelerationTangentialMagnitudes.kmph,
    func: (value) => {
      return { value: value * 12960, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} * 12960` };
    }
  },
  {
    type: speedAngularTypes,
    conv: speedAngularMagnitudes.degreesPerSec,
    func: (value) => {
      return { value: value / Math.PI * 180, formula: `= ${fixExpression(value)} -> (${fixExpression(value)} / π) * 180` };
    }
  },
  {
    type: speedAngularTypes,
    conv: speedAngularMagnitudes.rpm,
    func: (value) => {
      return { value: value / Math.PI * 30, formula: `= ${fixExpression(value)} -> (${fixExpression(value)} / π) * 30` };
    }
  },
  {
    type: frecuencyTypes,
    conv: frecuencyMagnitudes.khz,
    func: (value) => {
      return { value: value / 1e3, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} / 1000` };
    }
  },
  {
    type: frecuencyTypes,
    conv: frecuencyMagnitudes.mhz,
    func: (value) => {
      return { value: value / 1e6, formula: `= ${fixExpression(value)} -> ${fixExpression(value)} / 1000000` };
    }
  },
  {
    type: accelerationAngularTypes,
    conv: accelerationAngularMagnitudes.degreesPerSec,
    func: (value) => {
      return { value: value / Math.PI * 180, formula: `= ${fixExpression(value)} -> (${fixExpression(value)} / π)*180` };
    }
  }
];
const ResultContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { results } = $$props;
  if ($$props.results === void 0 && $$bindings.results && results !== void 0)
    $$bindings.results(results);
  return `<div class="flex flex-col items-center w-full p-4 mt-6 space-y-10 bg-white rounded-lg shadow md:space-y-0 md:w-3/5 justify-evenly md:mt-0">${!(results && results.length > 0) ? `<p class="flex items-center justify-center w-full h-full text-2xl font-bold text-center text-main-black-secondary md:text-3xl"><span class="flex flex-col">Ingresa los datos <span class="text-base font-semibold md:text-lg text-main-black-light">(Los resultados se mostrarán automáticamente)</span></span></p>` : `${each(results, (result) => {
    return `<div class="flex flex-col space-y-4"><span class="text-xl font-semibold text-center text-main-primary">${escape(result.name)}: ${escape(fixExpression(result.value))} <!-- HTML_TAG_START -->${result.magnitude}<!-- HTML_TAG_END --></span>
				<p class="italic">${escape(result.name)} = <!-- HTML_TAG_START -->${result.formula}<!-- HTML_TAG_END --> = ${escape(fixExpression(result.value))}</p>
			</div>`;
  })}`}</div>`;
});
export {
  Banner as B,
  ResultContainer as R,
  angleAngularMagnitudes as a,
  speedAngularMagnitudes as b,
  accelerationTangentialMagnitudes as c,
  distanceMagnitudes as d,
  accelerationAngularMagnitudes as e,
  frecuencyMagnitudes as f,
  angleTangentialMagnitudes as g,
  speedMagnitudes as s,
  timeMagnitudes as t
};
