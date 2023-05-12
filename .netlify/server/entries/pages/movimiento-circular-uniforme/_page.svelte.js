import { c as create_ssr_component, v as validate_component, b as add_attribute, i as each, e as escape } from "../../../chunks/index2.js";
import { B as Banner, a as angleAngularMagnitudes, t as timeMagnitudes, b as speedAngularMagnitudes, s as speedMagnitudes, d as distanceMagnitudes, f as frecuencyMagnitudes, c as accelerationTangentialMagnitudes, R as ResultContainer } from "../../../chunks/resultContainer.js";
import { H as HeadTitle } from "../../../chunks/headTitle.js";
import { a as inputsMcu, b as magnitudesMcu, d as resultsMcu } from "../../../chunks/stores2.js";
import "../../../chunks/Toaster.svelte_svelte_type_style_lang.js";
inputsMcu.subscribe((value) => {
});
magnitudesMcu.set({});
magnitudesMcu.subscribe((value) => {
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputs;
  inputsMcu.subscribe((value) => {
    inputs = value;
  });
  let results;
  resultsMcu.set([]);
  resultsMcu.subscribe((value) => {
    results = value;
  });
  magnitudesMcu.set({});
  magnitudesMcu.subscribe((value) => {
  });
  return `${validate_component(HeadTitle, "HeadTitle").$$render($$result, { title: "MCU" }, {}, {})}
${validate_component(Banner, "Banner").$$render($$result, { title: "Movimiento circular uniforme" }, {}, {})}
<form class="main-form">${inputs ? `<fieldset class="main-fieldset"><div class="flex flex-col flex-1"><label class="title-label" for="angle">Ángulo</label>
				<div class="flex space-x-4"><input type="number" step="any" name="angle" class="w-2/3 custom-input" placeholder="Ingresa el ángulo"${add_attribute("this", inputs.angle, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(angleAngularMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="time">Tiempo</label>
				<div class="flex space-x-4"><input type="number" step="any" name="time" class="w-2/3 custom-input" placeholder="Ingresa el tiempo"${add_attribute("this", inputs.time, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(timeMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="angularSpeed">Velocidad Angular</label>
				<div class="flex space-x-4"><input type="number" step="any" name="angularSpeed" class="w-2/3 custom-input" placeholder="Ingresa la velocidad angular"${add_attribute("this", inputs.angularSpeed, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(speedAngularMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="tangentialSpeed">Velocidad tangencial</label>
				<div class="flex space-x-4"><input type="number" step="any" name="tangentialSpeed" class="w-2/3 custom-input" placeholder="Ingresa la velocidad tangencial"${add_attribute("this", inputs.tangentialSpeed, 0)}>
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
			<div class="flex flex-col flex-1"><label class="title-label" for="diameter">Diámetro</label>
				<div class="flex space-x-4"><input type="number" step="any" name="diameter" class="w-2/3 custom-input" placeholder="Ingresa el diámetro"${add_attribute("this", inputs.diameter, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(distanceMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="w-2/3 title-label" for="ratio">Radio (necesario para obtener todos los datos)</label>
				<div class="flex space-x-4"><input type="number" step="any" name="ratio" class="w-2/3 custom-input" placeholder="Ingresa el radio"${add_attribute("this", inputs.ratio, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(distanceMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="period">Periodo</label>
				<div class="flex space-x-4"><input type="number" step="any" name="period" class="w-2/3 custom-input" placeholder="Ingresa el período"${add_attribute("this", inputs.period, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(timeMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
							</option>`;
  })}</select></div></div>
			<div class="flex flex-col flex-1"><label class="title-label" for="frecuency">Frecuencia</label>
				<div class="flex space-x-4"><input type="number" step="any" name="frecuency" class="w-2/3 custom-input" placeholder="Ingresa la frecuencia"${add_attribute("this", inputs.frecuency, 0)}>
					<select class="w-1/3 custom-select-clean">${each(Object.entries(frecuencyMagnitudes), (magnitude) => {
    return `<option${add_attribute("value", magnitude, 0)}>${escape(magnitude[1])}
								</option>`;
  })}</select></div></div>
				<div class="flex flex-col flex-1"><label class="title-label" for="centripetalAcceleration">Aceleración centripeta</label>
				<div class="flex space-x-4"><input type="number" step="any" name="centripetalAcceleration" class="w-2/3 custom-input" placeholder="Ingresa la aceleración centripeta"${add_attribute("this", inputs.centripetalAcceleration, 0)}>
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
