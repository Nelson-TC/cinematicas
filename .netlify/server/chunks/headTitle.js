import { c as create_ssr_component, e as escape } from "./index2.js";
const HeadTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${$$result.head += `<!-- HEAD_svelte-uckxfp_START -->${$$result.title = `<title>Cinemática | ${escape(title)} </title>`, ""}<!-- HEAD_svelte-uckxfp_END -->`, ""}`;
});
export {
  HeadTitle as H
};
