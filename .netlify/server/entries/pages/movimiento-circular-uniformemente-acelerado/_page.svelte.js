import { c as create_ssr_component, v as validate_component, b as add_attribute, i as each, e as escape } from "../../../chunks/index2.js";
import { B as Banner, b as speedAngularMagnitudes, a as angleAngularMagnitudes, e as accelerationAngularMagnitudes, s as speedMagnitudes, d as distanceMagnitudes, c as accelerationTangentialMagnitudes, t as timeMagnitudes, R as ResultContainer } from "../../../chunks/resultContainer.js";
import { H as HeadTitle } from "../../../chunks/headTitle.js";
import { e as inputsMcua, f as magnitudesMcua, g as resultsMcua } from "../../../chunks/stores2.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
inputsMcua.subscribe((value) => {
});
magnitudesMcua.subscribe((value) => {
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputs;
  inputsMcua.subscribe((value) => {
    inputs = value;
  });
  let results;
  resultsMcua.set([]);
  resultsMcua.subscribe((value) => {
    results = value;
  });
  magnitudesMcua.set({});
  magnitudesMcua.subscribe((value) => {
  });
  return `${validate_component(HeadTitle, "HeadTitle").$$render($$result, { title: "MCUA" }, {}, {})}
${validate_component(Banner, "Banner").$$render(
    $$result,
    {
      title: "Movimiento circular uniformemente acelerado"
    },
    {},
    {}
  )}
<form class="main-form">${inputs ? `<fieldset class="main-fieldset"><div class="flex flex-col flex-1"><label class="title-label" for="angularInitialSpeed">Velocidad Angular Inicial</label>
				<div class="flex space-x-4"><input type="number" step="any" name="angularInitialSpeed" class="w-2/3 custom-input" placeholder="Ingresa la velocidad angular"${add_attribute("this", inputs.angularInitialSpeed, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(speedAngularMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="angularFinalSpeed">Velocidad Angular Final</label>
				<div class="flex space-x-4"><input type="number" step="any" name="angularFinalSpeed" class="w-2/3 custom-input" placeholder="Ingresa la velocidad angular"${add_attribute("this", inputs.angularFinalSpeed, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(speedAngularMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="angle">Ángulo</label>
				<div class="flex space-x-4"><input type="number" step="any" name="angle" class="w-2/3 custom-input" placeholder="Ingresa el ángulo"${add_attribute("this", inputs.angle, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(angleAngularMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="angularAcceleration">Aceleración angular</label>
				<div class="flex space-x-4"><input type="number" step="any" name="angularAcceleration" class="w-2/3 custom-input" placeholder="Ingresa la aceleración centripeta"${add_attribute("this", inputs.angularAcceleration, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(accelerationAngularMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="tangentialInitialSpeed">Velocidad Tangencial Inicial</label>
				<div class="flex space-x-4"><input type="number" step="any" name="tangentialInitialSpeed" class="w-2/3 custom-input" placeholder="Ingresa la velocidad tangencial"${add_attribute("this", inputs.tangentialInitialSpeed, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(speedMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="tangentialInitialSpeed">Velocidad Tangencial Final</label>
				<div class="flex space-x-4"><input type="number" step="any" name="tangentialFinalSpeed" class="w-2/3 custom-input" placeholder="Ingresa la velocidad tangencial"${add_attribute("this", inputs.tangentialFinalSpeed, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(speedMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="arcLenght">Longitud del arco</label>
				<div class="flex space-x-4"><input type="number" step="any" name="arcLenght" class="w-2/3 custom-input" placeholder="Ingresa la longitud del arco"${add_attribute("this", inputs.arcLenght, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(distanceMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="tangentialAcceleration">Aceleración tangencial</label>
				<div class="flex space-x-4"><input type="number" step="any" name="tangentialAcceleration" class="w-2/3 custom-input" placeholder="Ingresa la aceleración centripeta"${add_attribute("this", inputs.tangentialAcceleration, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(accelerationTangentialMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="time">Tiempo</label>
				<div class="flex space-x-4"><input type="number" step="any" name="time" class="w-2/3 custom-input" placeholder="Ingresa el tiempo"${add_attribute("this", inputs.time, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(timeMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="w-2/3 title-label" for="ratio">Radio (si no tienes los datos angulares o tangenciales sera de gran ayuda)</label>
				<div class="flex space-x-4"><input type="number" step="any" name="ratio" class="w-2/3 custom-input" placeholder="Ingresa el radio"${add_attribute("this", inputs.ratio, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(distanceMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div></fieldset>` : ``}
	${validate_component(ResultContainer, "ResultContainer").$$render($$result, { results }, {}, {})}</form>
`;
});
export {
  Page as default
};
