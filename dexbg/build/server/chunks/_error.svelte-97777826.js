import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute } from './index-559e2f90.js';
import { p as page } from './stores-76790894.js';

const image404 = "/_app/immutable/assets/8552-693ec157.gif";
const image500 = "/_app/immutable/assets/flaming-comp-1477cb87.gif";
const imageWHAT = "/_app/immutable/assets/what-79ee450c.gif";
const css = {
  code: "div.svelte-34v0fr.svelte-34v0fr{position:absolute;top:50%;left:50%;width:350px;height:400px;margin-left:-175px;margin-top:-200px;color:white;align-items:center;justify-content:center;font-size:30px;text-align:center;letter-spacing:1px;text-shadow:1px 1px 3px black;font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif}div.svelte-34v0fr p.svelte-34v0fr{margin-top:-2px}div.svelte-34v0fr img.svelte-34v0fr{border-radius:5px;width:300px}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-l5sewv_START -->${$$result.title = `<title>DEX - ${escape($page.error.message)}</title>`, ""}<!-- HEAD_svelte-l5sewv_END -->`, ""}

<div class="${"svelte-34v0fr"}">${$page.status === 404 ? `<img${add_attribute("src", image404, 0)} alt="${"Page Not found"}" class="${"svelte-34v0fr"}">
    <p class="${"svelte-34v0fr"}">\u0422\u0430\u0437\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u0434\u043E\u0441\u0442\u044A\u043F\u0438 \u{1F616}</p>` : `${$page.status === 500 ? `<img${add_attribute("src", image500, 0)} alt="${"Internal Error"}" class="${"svelte-34v0fr"}">
    <h1 style="${"margin-top: -5px;"}">${escape($page.error.message)}</h1>` : `<img${add_attribute("src", imageWHAT, 0)} alt="${"Undefined Error"}" class="${"svelte-34v0fr"}">
    <h1 style="${"margin-top: -5px;"}">${escape($page.error.message)}</h1>`}`}
</div>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-97777826.js.map
