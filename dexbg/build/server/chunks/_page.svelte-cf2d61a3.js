import { c as create_ssr_component, b as subscribe } from './index-559e2f90.js';
import { p as page } from './stores-76790894.js';
import 'socket.io-client';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  setInterval(
    () => {
    },
    500
  );
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-cov2k2_START -->${$$result.title = `<title>DEX \u2013 \u0432\u0438\u0436 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430</title>`, ""}<link rel="${"stylesheet"}" href="${"../css/deliveryData.css"}"><!-- HEAD_svelte-cov2k2_END -->`, ""}

${``}

${``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cf2d61a3.js.map
