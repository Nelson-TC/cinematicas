import { c as create_ssr_component, v as validate_component, b as add_attribute, i as each, e as escape } from "../../../chunks/index2.js";
import { l as inputsMru, n as magnitudesMru, o as resultMru } from "../../../chunks/stores2.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
import { B as Banner, s as speedMagnitudes, d as distanceMagnitudes, t as timeMagnitudes, R as ResultContainer } from "../../../chunks/resultContainer.js";
import { H as HeadTitle } from "../../../chunks/headTitle.js";
inputsMru.subscribe((value) => {
});
magnitudesMru.subscribe((value) => {
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputs;
  inputsMru.subscribe((value) => {
    inputs = value;
  });
  let results;
  resultMru.set([]);
  resultMru.subscribe((value) => {
    results = value;
  });
  magnitudesMru.set({});
  magnitudesMru.subscribe((value) => {
  });
  return `${validate_component(HeadTitle, "HeadTitle").$$render($$result, { title: "MRU" }, {}, {})}
${validate_component(Banner, "Banner").$$render($$result, { title: "Movimiento rectilineo uniforme" }, {}, {})}
<form class="main-form" autocomplete="off"><fieldset class="main-fieldset"><div class="flex flex-col flex-1"><label class="title-label" for="speed">Velocidad</label>
			<div class="flex space-x-1"><input name="speed" type="number" class="w-2/3 custom-input" placeholder="Ingresa la velocidad"${add_attribute("this", inputs.speed, 0)}>
				<select class="w-1/3 custom-select-clean">${each(Object.entries(speedMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
						</option>`;
  })}</select></div></div>
		<div class="flex flex-col flex-1"><label class="title-label" for="distance">Distancia</label>
			<div class="flex space-x-1"><input type="number" name="distance" class="w-2/3 custom-input" placeholder="Ingresa la distancia"${add_attribute("this", inputs.distance, 0)}>
				<select class="w-1/3 custom-select-clean">${each(Object.entries(distanceMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
						</option>`;
  })}</select></div></div>
		<div class="flex flex-col flex-1"><label class="title-label" for="time">Tiempo</label>
			<div class="flex space-x-1"><input type="number" name="time" class="w-2/3 custom-input" placeholder="Ingresa el tiempo"${add_attribute("this", inputs.time, 0)}>
				<select class="w-1/3 custom-select-clean">${each(Object.entries(timeMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
						</option>`;
  })}</select></div></div></fieldset>
	${validate_component(ResultContainer, "ResultContainer").$$render($$result, { results }, {}, {})}</form>
`;
});
export {
  Page as default
};
