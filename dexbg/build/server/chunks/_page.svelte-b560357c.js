import { c as create_ssr_component, d as add_attribute } from './index-559e2f90.js';

const css = {
  code: "#backgroundHider.svelte-snr9hg.svelte-snr9hg{position:absolute;width:100%;height:calc(100% - 80px);top:80px;left:0;z-index:5;backdrop-filter:blur(5px)}#notify.svelte-snr9hg.svelte-snr9hg{color:white;font-size:15px;align-items:center;justify-content:center;text-align:center;position:absolute;border-radius:15px;background:linear-gradient(45deg, rgb(253, 253, 253), rgb(228, 228, 228));border:2px solid gray;padding:25px;font-weight:bolder;font-size:26px;width:280px;z-index:10;top:50vh;left:50%;padding-top:50px;padding-bottom:30px;transform:translate(-50%, -50%);color:black}#notify.svelte-snr9hg i.svelte-snr9hg{margin-bottom:10px;margin-right:-15px;font-size:145px;color:rgb(63, 63, 63);text-shadow:3px 3px 5px black}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type = "password";
  let icon = "fa-solid fa-eye";
  let value = "";
  let phone = "";
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-14lu2s9_START -->${$$result.title = `<title>DEX \u2013 LogIn</title>`, ""}<link rel="${"stylesheet"}" href="${"./css/register.css"}"><!-- HEAD_svelte-14lu2s9_END -->`, ""}

${``}

    <div id="${"container"}"><h1>Log In</h1>
        <p class="${"inpInfo"}">\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</p>
        <input type="${"tel"}" id="${"phone"}" minlength="${"10"}" maxlength="${"10"}" placeholder="${"0874357641"}"${add_attribute("value", phone, 0)}>
        <div class="${"error"}"></div>
        <div id="${"showHidePass"}"><a title="${"SHOW PASSWORD"}"><i${add_attribute("class", icon, 0)}></i></a></div>
        <p class="${"inpInfo"}">\u041F\u0430\u0440\u043E\u043B\u0430:</p>
        <input${add_attribute("type", type, 0)} id="${"pass"}"${add_attribute("value", value, 0)} minlength="${"3"}" maxlength="${"30"}" placeholder="${"password_123"}">
        <div class="${"error"}"></div>
        <button style="${"width: 135px;"}">LogIn</button>
        <a class="${"link"}" href="${"/register"}">\u0421\u042A\u0417\u0414\u0410\u0419 \u0410\u041A\u0410\u0423\u041D\u0422</a>
        <div id="${"generalError"}" style="${"display: none;"}"></div>
    </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b560357c.js.map
