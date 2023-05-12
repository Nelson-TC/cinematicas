import { c as create_ssr_component, v as validate_component, b as add_attribute, i as each, e as escape } from "../../../chunks/index2.js";
import { B as Banner, s as speedMagnitudes, d as distanceMagnitudes, t as timeMagnitudes, R as ResultContainer } from "../../../chunks/resultContainer.js";
import { H as HeadTitle } from "../../../chunks/headTitle.js";
import { t as inputsVerticalshot, u as magnitudesVerticalshot, v as resultsVerticalshot } from "../../../chunks/stores2.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
inputsVerticalshot.subscribe((value) => {
});
magnitudesVerticalshot.subscribe((value) => {
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputs;
  inputsVerticalshot.subscribe((value) => {
    inputs = value;
  });
  let results;
  resultsVerticalshot.set([]);
  resultsVerticalshot.subscribe((value) => {
    results = value;
  });
  magnitudesVerticalshot.set({});
  magnitudesVerticalshot.subscribe((value) => {
  });
  return `${validate_component(HeadTitle, "HeadTitle").$$render($$result, { title: "Tiro vertical" }, {}, {})}
${validate_component(Banner, "Banner").$$render($$result, { title: "Tiro vertical" }, {}, {})}
<form class="main-form">${inputs ? `<fieldset class="main-fieldset"><div class="flex flex-col flex-1"><label class="title-label" for="initialSpeed">Velocidad Inicial</label>
				<div class="flex space-x-4"><input type="number" step="any" name="initialSpeed" class="w-2/3 custom-input" placeholder="Ingresa la velocidad"${add_attribute("this", inputs.initialSpeed, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(speedMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="height">Altura</label>
				<div class="flex space-x-4"><input type="number" step="any" name="height" class="w-2/3 custom-input" placeholder="Ingresa la distancia"${add_attribute("this", inputs.height, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(distanceMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="time">Tiempo</label>
				<div class="flex space-x-4"><input type="number" step="any" name="time" class="w-2/3 custom-input" placeholder="Ingresa el tiempo"${add_attribute("this", inputs.time, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(timeMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="gravity">Gravedad</label>
				<div class="flex space-x-4"><input type="number" step="any" name="gravity" class="w-2/3 custom-input" placeholder="Ingresa el tiempo" disabled value="9.81"${add_attribute("this", inputs.gravity, 0)}>
					<span class="flex items-center w-1/3 px-4 font-semibold">m/s<sup>2</sup></span></div></div></fieldset>` : ``}
	${validate_component(ResultContainer, "ResultContainer").$$render($$result, { results }, {}, {})}</form>
`;
});
export {
  Page as default
};
