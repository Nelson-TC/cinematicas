import { c as create_ssr_component, v as validate_component, i as each, b as add_attribute, e as escape } from "../../chunks/index2.js";
import { c as cinematics } from "../../chunks/stores2.js";
import { H as HeadTitle } from "../../chunks/headTitle.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cinematicsValue = [];
  cinematics.subscribe((value) => {
    cinematicsValue = value;
  });
  return `${validate_component(HeadTitle, "HeadTitle").$$render($$result, { title: "Inicio" }, {}, {})}

<div class="p-4 bg-white rounded-lg shadow md:px-12"><h1 class="text-5xl font-bold text-center text-main-black-primary">Aplicación de cinemática</h1>
	<p class="max-w-xl mx-auto mt-6 font-semibold text-center text-main-black-secondary">En esta aplicación encuentras todos los tipos de movimiento de cinemática que puedes calcular,
		solo haz click en ellos desde la barra de navegación o en las tarjetas de abajo
	</p>

	<ul class="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">${each(cinematicsValue, (cinematic, index) => {
    return `<li${add_attribute(
      "class",
      index === cinematicsValue.length - 1 && cinematicsValue.length % 2 !== 0 ? "col-span-full" : "",
      0
    )}><a${add_attribute("href", `/${cinematic.slug}`, 0)} class="flex items-center justify-center w-full h-32 p-4 text-2xl font-bold text-center capitalize transition-colors text-main-primary bg-main-light rounded-xl hover:bg-white hover:border-4 hover:border-main-primary hover:text-main-primary">${escape(cinematic.name)}</a>
			</li>`;
  })}</ul></div>`;
});
export {
  Page as default
};
