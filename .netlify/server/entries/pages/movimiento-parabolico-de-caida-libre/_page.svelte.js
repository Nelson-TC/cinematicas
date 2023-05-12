import { c as create_ssr_component, v as validate_component, b as add_attribute, i as each, e as escape } from "../../../chunks/index2.js";
import { B as Banner, s as speedMagnitudes, g as angleTangentialMagnitudes, t as timeMagnitudes, d as distanceMagnitudes, R as ResultContainer } from "../../../chunks/resultContainer.js";
import { H as HeadTitle } from "../../../chunks/headTitle.js";
import { h as inputsMpdcl, j as magnitudesMpdcl, k as resultsMpdcl } from "../../../chunks/stores2.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
inputsMpdcl.subscribe((value) => {
});
magnitudesMpdcl.subscribe((value) => {
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputs;
  inputsMpdcl.subscribe((value) => {
    inputs = value;
  });
  let results;
  resultsMpdcl.set([]);
  resultsMpdcl.subscribe((value) => {
    results = value;
  });
  magnitudesMpdcl.set({});
  magnitudesMpdcl.subscribe((value) => {
  });
  return `${validate_component(HeadTitle, "HeadTitle").$$render($$result, { title: "MPDCL" }, {}, {})}
${validate_component(Banner, "Banner").$$render(
    $$result,
    {
      title: "Movimiento parabolico de caída libre"
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
			<div class="flex flex-col flex-1"><label class="title-label" for="initialSpeedX">Velocidad Inicial en X</label>
				<div class="flex space-x-4"><input type="number" step="any" name="initialSpeedX" class="w-2/3 custom-input" placeholder="Ingresa la velocidad inicial en X"${add_attribute("this", inputs.initialSpeedX, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(speedMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="initialSpeedY">Velocidad Inicial en Y</label>
				<div class="flex space-x-4"><input type="number" step="any" name="initialSpeedY" class="w-2/3 custom-input" placeholder="Ingresa la velocidad inicial en Y"${add_attribute("this", inputs.initialSpeedY, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(speedMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
								</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="angle">Ángulo</label>
				<div class="flex space-x-4"><input type="number" step="any" name="angle" class="w-2/3 custom-input" placeholder="Ingresa el ángulo"${add_attribute("this", inputs.angle, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(angleTangentialMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="riseTime">Tiempo de subida</label>
				<div class="flex space-x-4"><input type="number" step="any" name="riseTime" class="w-2/3 custom-input" placeholder="Ingresa el tiempo de subida"${add_attribute("this", inputs.riseTime, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(timeMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="flightTime">Tiempo de vuelo (total)</label>
				<div class="flex space-x-4"><input type="number" step="any" name="flightTime" class="w-2/3 custom-input" placeholder="Ingresa el tiempo de vuelo"${add_attribute("this", inputs.flightTime, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(timeMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="initialHeight">Altura inicial</label>
				<div class="flex space-x-4"><input type="number" step="any" name="initialHeight" class="w-2/3 custom-input" placeholder="Ingresa la altura inicial"${add_attribute("this", inputs.initialHeight, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(distanceMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="maxHeight">Altura máxima</label>
				<div class="flex space-x-4"><input type="number" step="any" name="maxHeight" class="w-2/3 custom-input" placeholder="Ingresa la altura máxima"${add_attribute("this", inputs.maxHeight, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(distanceMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="horizontalDisplacement">Desplazamiento horizontal</label>
				<div class="flex space-x-4"><input type="number" step="any" name="horizontalDisplacement" class="w-2/3 custom-input" placeholder="Ingresa el desplazamiento horizontal"${add_attribute("this", inputs.horizontalDisplacement, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(distanceMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="horizontalReach">Alcance horizontal</label>
				<div class="flex space-x-4"><input type="number" step="any" name="horizontalReach" class="w-2/3 custom-input" placeholder="Ingresa el alcance horizontal"${add_attribute("this", inputs.horizontalReach, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(distanceMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="gravity">Gravedad</label>
				<div class="flex space-x-4"><input type="number" step="any" name="gravity" class="w-2/3 custom-input" placeholder="Ingresa la gravedad" disabled value="9.81"${add_attribute("this", inputs.gravity, 0)}>
					<span class="flex items-center w-1/3 px-4 font-semibold">m/s<sup>2</sup></span></div></div></fieldset>` : ``}
	${validate_component(ResultContainer, "ResultContainer").$$render($$result, { results }, {}, {})}</form>
`;
});
export {
  Page as default
};
