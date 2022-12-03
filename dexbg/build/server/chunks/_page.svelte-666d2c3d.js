import { c as create_ssr_component, d as add_attribute, e as escape } from './index-559e2f90.js';

const css = {
  code: "#showHidePass.svelte-4byxmd.svelte-4byxmd{margin-top:-12px}#backgroundHider.svelte-4byxmd.svelte-4byxmd{position:absolute;width:100%;height:calc(100% - 80px);top:80px;left:0;z-index:5;backdrop-filter:blur(5px)}#notify.svelte-4byxmd.svelte-4byxmd{color:white;font-size:15px;align-items:center;justify-content:center;text-align:center;position:absolute;border-radius:15px;background:linear-gradient(45deg, rgb(253, 253, 253), rgb(228, 228, 228));border:2px solid gray;padding:25px;font-weight:bolder;font-size:26px;width:280px;z-index:10;top:50vh;left:50%;padding-top:50px;padding-bottom:30px;transform:translate(-50%, -50%)}#notify.svelte-4byxmd i.svelte-4byxmd{margin-bottom:10px;margin-right:-15px;font-size:145px;color:rgb(63, 63, 63);text-shadow:3px 3px 5px black}input.svelte-4byxmd.svelte-4byxmd::-webkit-outer-spin-button,input.svelte-4byxmd.svelte-4byxmd::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number].svelte-4byxmd.svelte-4byxmd{-moz-appearance:textfield}@media screen and (max-height: 1000px){input.svelte-4byxmd.svelte-4byxmd{margin-top:-3px !important}p.svelte-4byxmd.svelte-4byxmd{margin-top:7px !important}h1.svelte-4byxmd.svelte-4byxmd{margin-bottom:0px !important}button.svelte-4byxmd.svelte-4byxmd{margin-top:25px !important;margin-bottom:-3px !important}#container.svelte-4byxmd.svelte-4byxmd{padding-top:10px !important;padding-bottom:40px !important;transform:translate(-50%, calc(-50% + 30px)) !important}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let container;
  let name, phone, address, mail;
  let nameError = "";
  let phoneError = "";
  let mailError = "";
  let addressError = "";
  let passError = "";
  let type = "password";
  let icon = "fa-solid fa-eye";
  let value = "";
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-18uqozm_START -->${$$result.title = `<title>DEX \u2013 \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</title>`, ""}<link rel="${"stylesheet"}" href="${"./css/register.css"}"><!-- HEAD_svelte-18uqozm_END -->`, ""}


${``}
 

	<div id="${"container"}"${add_attribute("bind.this", container, 0)} class="${"svelte-4byxmd"}"><h1 class="${"svelte-4byxmd"}">Register</h1>
		<p class="${"inpInfo svelte-4byxmd"}">\u0418\u043C\u0435 (\u041F\u044A\u0440\u0432\u043E, \u0424\u0430\u043C\u0438\u043B\u043D\u043E):</p>
		<input type="${"text"}" id="${"name"}" minlength="${"5"}" maxlength="${"55"}" placeholder="${"\u0418\u0432\u0430\u043D \u0413\u0435\u043E\u0440\u0433\u0438\u0435\u0432"}" class="${"svelte-4byxmd"}"${add_attribute("value", name, 0)}>
		<div class="${"error"}">${escape(nameError)}</div>
		<p class="${"inpInfo svelte-4byxmd"}">\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</p>
		<input type="${"tel"}" maxlength="${"10"}" id="${"phone"}" minlength="${"10"}" placeholder="${"0874357641"}" class="${"svelte-4byxmd"}"${add_attribute("value", phone, 0)}>
		<div class="${"error"}">${escape(phoneError)}</div>
		<p class="${"inpInfo svelte-4byxmd"}">E-MAIL:</p>
		<input type="${"text"}" id="${"mail"}" minlength="${"4"}" maxlength="${"55"}" placeholder="${"example@example.com"}" class="${"svelte-4byxmd"}"${add_attribute("value", mail, 0)}>
		<div class="${"error"}">${escape(mailError)}</div>
		<p class="${"inpInfo svelte-4byxmd"}">\u0410\u0434\u0440\u0435\u0441 (\u043D\u0435 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043D\u043E):</p>
		<input type="${"text"}" id="${"address"}" minlength="${"3"}" maxlength="${"30"}" placeholder="${"\u0443\u043B. \u0418\u0432\u0430\u043D\u043E\u0432\u0438 22"}" class="${"svelte-4byxmd"}"${add_attribute("value", address, 0)}>
		<div class="${"error"}">${escape(addressError)}</div>
        <div id="${"showHidePass"}" class="${"svelte-4byxmd"}"><a title="${"SHOW PASSWORD"}"><i${add_attribute("class", icon, 0)}></i></a></div>
		<p class="${"inpInfo svelte-4byxmd"}">\u041F\u0430\u0440\u043E\u043B\u0430:</p>
        <input${add_attribute("type", type, 0)} id="${"pass"}"${add_attribute("value", value, 0)} minlength="${"3"}" maxlength="${"30"}" placeholder="${"password_123"}" class="${"svelte-4byxmd"}">
        <div class="${"error"}">${escape(passError)}</div>
        
		<button class="${"svelte-4byxmd"}">\u041F\u0440\u043E\u0434\u044A\u043B\u0436\u0438</button>
		<a class="${"link"}" href="${"/login"}">\u0412\u041B\u0415\u0417 \u0412 \u0410\u041A\u0410\u0423\u041D\u0422</a>
		<div id="${"generalError"}" style="${"display: none;"}"></div>
	</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-666d2c3d.js.map
