import { c as create_ssr_component, e as escape, d as add_attribute } from './index-559e2f90.js';

const css = {
  code: "#settings.svelte-12rbc35.svelte-12rbc35{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:linear-gradient(330deg, rgb(145, 145, 145), rgb(71, 71, 71));border-radius:15px;border:2px solid rgb(68, 68, 68);box-shadow:5px 5px 10px rgb(44, 22, 22);padding-bottom:35px;color:white;padding-top:10px;width:285px;text-shadow:1px 1px 1px black}#settings.svelte-12rbc35 h2.svelte-12rbc35{font-size:15px;font-weight:lighter;color:rgb(245, 245, 245);text-shadow:0px 0px 0px transparent}.secondStep.svelte-12rbc35 button.svelte-12rbc35{padding-left:18px !important;padding-right:18px !important}.change.svelte-12rbc35 button.svelte-12rbc35{margin-top:5px;padding:5px;padding-left:20px;padding-right:20px}.change.svelte-12rbc35 i.svelte-12rbc35{margin-right:3px}.error.svelte-12rbc35.svelte-12rbc35{color:rgb(255, 104, 104);text-shadow:1px 1px 0px black;font-size:15px;margin-top:6px;margin-left:-7px;width:225px !important}.cancel.svelte-12rbc35.svelte-12rbc35{color:rgb(182, 11, 11) !important}.change.svelte-12rbc35.svelte-12rbc35{margin-left:28px !important;max-width:234px}.change.svelte-12rbc35 h2.svelte-12rbc35{margin-bottom:5px}.change.svelte-12rbc35 input.svelte-12rbc35{width:220px !important}#settings.svelte-12rbc35 div.svelte-12rbc35{margin-left:34px}#settings.svelte-12rbc35 input.svelte-12rbc35{width:175px}#settings.svelte-12rbc35 p.svelte-12rbc35{margin-bottom:3px;margin-top:10px}#settings.svelte-12rbc35 h1.svelte-12rbc35{text-align:center;margin-bottom:-15px}#backgroundHider.svelte-12rbc35.svelte-12rbc35{position:absolute;width:100%;height:calc(100% - 80px);top:80px;left:0;z-index:5;backdrop-filter:blur(5px)}#notify.svelte-12rbc35.svelte-12rbc35{color:white;font-size:15px;align-items:center;justify-content:center;text-align:center;position:absolute;border-radius:15px;background:linear-gradient(45deg, rgb(253, 253, 253), rgb(228, 228, 228));border:2px solid gray;padding:25px;font-weight:bolder;font-size:26px;width:280px;z-index:10;top:50vh;left:50%;padding-top:50px;padding-bottom:30px;transform:translate(-50%, -50%);color:black}#notify.svelte-12rbc35 i.svelte-12rbc35{margin-bottom:10px;margin-left:-5px;font-size:145px;color:rgb(63, 63, 63);text-shadow:3px 3px 5px black}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let headerText = "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438";
  let name, mail, pass, address;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1diph8t_START -->${$$result.title = `<title>DEX \u2013 \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</title>`, ""}<link rel="${"stylesheet"}" href="${"./css/register.css"}"><!-- HEAD_svelte-1diph8t_END -->`, ""}

${``}

<div id="${"main_promoter"}"><div id="${"settings"}" class="${"svelte-12rbc35"}"><h1 class="${"svelte-12rbc35"}">${escape(headerText)}</h1>
        <br>
        ${`<span><div class="${"svelte-12rbc35"}"><p class="${"svelte-12rbc35"}">\u041F\u0440\u043E\u043C\u0435\u043D\u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0441\u043A\u043E \u0438\u043C\u0435: </p>
            <input type="${"text"}" placeholder="${"\u0418\u0432\u0430\u043D \u0413\u0435\u043E\u0440\u0433\u0438\u0435\u0432"}" class="${"svelte-12rbc35"}"${add_attribute("value", name, 0)}>
            <button><i class="${"fa-solid fa-pen-to-square"}"></i></button></div>
            <div class="${"svelte-12rbc35"}"><p class="${"svelte-12rbc35"}">\u041F\u0440\u043E\u043C\u0435\u043D\u0438 E-MAIL: </p>
            <input type="${"text"}" placeholder="${"example@example.com"}" class="${"svelte-12rbc35"}"${add_attribute("value", mail, 0)}>
            <button><i class="${"fa-solid fa-pen-to-square"}"></i></button></div>
            <div class="${"svelte-12rbc35"}"><p class="${"svelte-12rbc35"}">\u041F\u0440\u043E\u043C\u0435\u043D\u0438 \u0430\u0434\u0440\u0435\u0441: </p>
            <input type="${"text"}" placeholder="${"\u0443\u043B. \u0418\u0432\u0430\u043D\u043E\u0432\u0438 22"}" class="${"svelte-12rbc35"}"${add_attribute("value", address, 0)}>
            <button><i class="${"fa-solid fa-pen-to-square"}"></i></button></div>
            <div class="${"svelte-12rbc35"}"><p class="${"svelte-12rbc35"}">\u041F\u0440\u043E\u043C\u0435\u043D\u0438 \u043F\u0430\u0440\u043E\u043B\u0430: </p>
            <input type="${"password"}" placeholder="${"\u041F\u0430\u0440\u043E\u043B\u0430\u0442\u0430 \u0435 \u0441\u043A\u0440\u0438\u0442\u0430 \u0438 \u0437\u0430\u0449\u0438\u0442\u0435\u043D\u0430"}" class="${"svelte-12rbc35"}"${add_attribute("value", pass, 0)}>
            <button><i class="${"fa-solid fa-pen-to-square"}"></i></button></div></span>`}</div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-aa3dacc0.js.map
