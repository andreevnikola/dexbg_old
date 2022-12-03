import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape } from './index-559e2f90.js';
import { p as page } from './stores-76790894.js';

const icon = "/_app/immutable/assets/icon-8798f893.png";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  var mainLink = "/history";
  var rBtnLink = "/settings";
  var rBtnText = "Settings";
  var lBtnText = "LogOut";
  $$unsubscribe_page();
  return `<div id="${"nav_tab"}"><a${add_attribute("href", mainLink, 0)}><img id="${"nav_logo"}"${add_attribute("src", icon, 0)} alt="${"DEX-\u0435\u043A\u0441\u043F\u0440\u0435\u0441\u043D\u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043B\u043E\u0433\u043E"}"></a>
    <div id="${"navAlignment"}"><nav><a href="${"/delivery"}" class="${"nav_link"}" id="${"order"}"><span id="${"order_txt"}">\u041F\u043E\u0440\u044A\u0447\u0430\u0439</span></a>
            <a href="${""}" class="${"nav_link"}" id="${"features"}">\u0424\u0443\u043D\u043A\u0446\u0438\u0438
            </a>
            <a href="${""}" class="${"nav_link"}" id="${"about_us"}">\u0417\u0430 \u043D\u0430\u0441
            </a>
            <a href="${""}" class="${"nav_link"}" id="${"prices"}">\u0426\u0435\u043D\u0438
            </a>
            ${``}
            <button id="${"more"}" class="${"nav_button"}"><i class="${"fa-solid fa-bars"}"></i></button>
            <a${add_attribute("href", rBtnLink, 0)}><button id="${"register"}" class="${"nav_button"}">${escape(rBtnText)}</button></a>
            ${`<a><button id="${"log_in"}" class="${"nav_button"}">${escape(lBtnText)}</button></a>`}</nav></div></div>

<div id="${"phoneMenu"}"><div class="${"nav_phone_link_style"}"><a href="${"/delivery"}" class="${"nav_phone_link"}">\u041F\u043E\u0440\u044A\u0447\u0430\u0439
    </a></div>
    <div class="${"nav_phone_link_style"}"><a href="${""}" class="${"nav_phone_link"}">\u0424\u0443\u043D\u043A\u0446\u0438\u0438
    </a></div>
    <div class="${"nav_phone_link_style"}"><a href="${""}" class="${"nav_phone_link"}">\u0417\u0430 \u043D\u0430\u0441
    </a></div>
    <div class="${"nav_phone_link_style"}"><a href="${""}" class="${"nav_phone_link"}">\u0426\u0435\u043D\u0438
    </a></div>
    <div class="${"nav_phone_link_style"}" id="${"shop_phone_menu"}">${``}</div></div>

<div id="${"main_promoter"}"><div id="${"childContainer"}"><div>${slots.default ? slots.default({}) : ``}</div></div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-28433518.js.map
