import { c as create_ssr_component, e as escape, d as add_attribute } from './index-559e2f90.js';
import 'socket.io-client';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let priceShowHideTxt = "\u0418\u0437\u0447\u0438\u0441\u043B\u0438 \u0446\u0435\u043D\u0430";
  let senderAddress, recieverAddress, recieverPhone, senderPhone;
  let senderAddressError = "";
  let recieverAddressError = "";
  let senderPhoneError = "";
  let recieverPhoneError = "";
  return `${$$result.head += `<!-- HEAD_svelte-3kwoz5_START -->${$$result.title = `<title>DEX \u2013 \u0434\u043E\u0441\u0442\u0430\u0432\u0438</title>`, ""}<link rel="${"stylesheet"}" href="${"./css/delivery.css"}"><link rel="${"stylesheet"}" href="${"https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"}" integrity="${"sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="}" crossorigin="${""}"><script src="${"https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"}" integrity="${"sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="}" crossorigin="${""}"><\/script><!-- HEAD_svelte-3kwoz5_END -->`, ""}

${``}

${``}

<div id="${"deliveryContainer"}"><h1>\u0414\u043E\u0441\u0442\u0430\u0432\u0438</h1>
    <div calss="${"choose"}"><div class="${"el"}"><p>\u0418\u0437\u0431\u0435\u0440\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F</p>
            <select id="${"chooseCategory"}"><option value="${"\u0434\u043E\u0441\u0442\u0430\u0432\u0438"}">\u0414\u043E\u0441\u0442\u0430\u0432\u0438</option><option value="${"\u043A\u0443\u043F\u0438"}">\u041A\u0443\u043F\u0438</option><option value="${"\u0442\u0430\u043A\u0441\u0438"}">\u0422\u0430\u043A\u0441\u0438</option></select></div></div>
    <div class="${"main"}"><div class="${"el"}"><p>\u0413\u0440\u0430\u0434: </p>
            <select id="${"chooseCity"}"><option value="${"Plovdiv"}">Plovdiv</option></select></div>
        <div class="${"el"}"><p>${escape(
    "\u0410\u0434\u0440\u0435\u0441 \u043D\u0430 \u0438\u0437\u043F\u0440\u0430\u0449\u0430\u0447:"
  )}</p>
            
            <button title="${"\u0418\u0437\u0431\u0435\u0440\u0438 \u043E\u0442 \u043A\u0430\u0440\u0442\u0430"}" class="${"addOn addOnLeft"}" id="${"chooseMyLocation"}"><i class="${"fa-solid fa-map-location-dot"}"></i></button>
            <input type="${"text"}" id="${"addrOfSender"}" class="${"addressInp"}" placeholder="${"\u0443\u043B. \u0418\u0432\u0430\u043D \u0412\u0430\u0437\u043E\u0432 22"}"${add_attribute("value", senderAddress, 0)}>
            <button title="${"\u0412\u0430\u0448\u0430\u0442\u0430 \u043B\u043E\u043A\u0430\u0446\u0438\u044F"}" class="${"addOn addOnRight"}" id="${"chooseMyLocation"}"><i class="${"fa-solid fa-location-crosshairs"}"></i></button>
            
            <div class="${"error"}">${escape(senderAddressError)}</div></div>
        ${`<div class="${"el"}"><p>${escape(
    "\u0410\u0434\u0440\u0435\u0441 \u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F: "
  )}</p>

                <button title="${"\u0418\u0437\u0431\u0435\u0440\u0438 \u043E\u0442 \u043A\u0430\u0440\u0442\u0430"}" class="${"addOn addOnLeft"}" id="${"chooseMyLocation"}"><i class="${"fa-solid fa-map-location-dot"}"></i></button>
                <input class="${"addressInp"}" type="${"text"}" id="${"addrOfReciever"}" placeholder="${"\u043F\u043B\u043E\u0449\u0430\u0434 \u0421\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435"}"${add_attribute("value", recieverAddress, 0)}>
                <button title="${"\u0412\u0430\u0448\u0430\u0442\u0430 \u043B\u043E\u043A\u0430\u0446\u0438\u044F"}" class="${"addOn addOnRight"}" id="${"chooseMyLocation"}"><i class="${"fa-solid fa-location-crosshairs"}"></i></button>
            
                <div class="${"error"}">${escape(recieverAddressError)}</div></div>`}
        <div class="${"el"}"><p>${escape(
    "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u0430 \u0438\u0437\u043F\u0440\u0430\u0449\u0430\u0447:"
  )}</p>
            ${`<input maxlength="${"10"}" type="${"text"}" id="${"phoneOfSender"}" placeholder="${"0896605074"}"${add_attribute("value", senderPhone, 0)}>
                <div class="${"error"}">${escape(senderPhoneError)}</div>`}</div>
        ${`<div class="${"el"}"><p>\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F: </p>
                <input maxlength="${"10"}" type="${"text"}" id="${"phoneOfReciever"}" placeholder="${"0894834545"}"${add_attribute("value", recieverPhone, 0)}>
                <div class="${"error"}">${escape(recieverPhoneError)}</div></div>`}
        <br>
        ${``}
        <div class="${"btns"}"><button id="${"calculatePriceBtn"}">${escape(priceShowHideTxt)}</button>
            <button id="${"bookdelivery"}"><strong>\u041F\u043E\u0440\u044A\u0447\u0430\u0439</strong></button></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-39863f13.js.map
