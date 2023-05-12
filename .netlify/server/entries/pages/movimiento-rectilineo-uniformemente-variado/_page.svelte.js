import { c as create_ssr_component, v as validate_component, b as add_attribute, i as each, e as escape } from "../../../chunks/index2.js";
import { B as Banner, s as speedMagnitudes, d as distanceMagnitudes, t as timeMagnitudes, c as accelerationTangentialMagnitudes, R as ResultContainer } from "../../../chunks/resultContainer.js";
import { H as HeadTitle } from "../../../chunks/headTitle.js";
import { p as inputsMruv, q as magnitudesMruv, s as resultsMruv } from "../../../chunks/stores2.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
inputsMruv.subscribe((value) => {
});
magnitudesMruv.subscribe((value) => {
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputs;
  inputsMruv.subscribe((value) => {
    inputs = value;
  });
  let results;
  resultsMruv.set([]);
  resultsMruv.subscribe((value) => {
    results = value;
  });
  magnitudesMruv.set({});
  magnitudesMruv.subscribe((value) => {
  });
  return `${validate_component(HeadTitle, "HeadTitle").$$render($$result, { title: "MRUV" }, {}, {})}
${validate_component(Banner, "Banner").$$render(
    $$result,
    {
      title: "Movimiento rectilineo uniformemente variado"
    },
    {},
    {}
  )}
<form class="main-form">${inputs ? `<fieldset class="main-fieldset"><div class="flex flex-col flex-1"><label class="title-label" for="initialSpeed">Velocidad Inicial</label>
				<div class="flex space-x-4"><input type="number" step="any" name="initialSpeed" class="w-2/3 custom-input" placeholder="Ingresa la velocidad inicial"${add_attribute("this", inputs.initialSpeed, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(speedMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="finalSpeed">Velocidad Final</label>
				<div class="flex space-x-4"><input type="number" step="any" name="finalSpeed" class="w-2/3 custom-input" placeholder="Ingresa la velocidad final"${add_attribute("this", inputs.finalSpeed, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(speedMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="distance">Distancia</label>
				<div class="flex space-x-4"><input type="number" step="any" name="distance" class="w-2/3 custom-input" placeholder="Ingresa la distancia"${add_attribute("this", inputs.distance, 0)}>
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
			<div class="flex flex-col flex-1"><label class="title-label" for="acceleration">Aceleración</label>
				<div class="flex space-x-4"><input type="number" step="any" name="acceleration" class="w-2/3 custom-input" placeholder="Ingresa la aceleración"${add_attribute("this", inputs.acceleration, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(accelerationTangentialMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div></fieldset>` : ``}
	${validate_component(ResultContainer, "ResultContainer").$$render($$result, { results }, {}, {})}</form>
`;
});
export {
  Page as default
};
