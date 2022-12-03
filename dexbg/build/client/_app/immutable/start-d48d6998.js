import{S as Ye,i as Xe,s as Ze,a as xe,e as F,c as Qe,b as M,g as pe,t as J,d as de,f as G,h as K,j as et,o as ke,k as tt,l as nt,m as rt,n as ve,p as B,q as at,r as st,u as ot,v as Y,w as X,x as Ie,y as Z,z as x,A as Ce}from"./chunks/index-dfaff377.js";import{g as Fe,f as Je,s as z,a as Re,b as it,i as lt}from"./chunks/singletons-8a471a1b.js";function ct(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ft(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ut=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const t=new URL(r);for(const s of ut){let i=t[s];Object.defineProperty(t,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return dt(t),t}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ht(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ue.delete(s)}return he(r,e)};const ue=new Map;function mt(r,e,t){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(i+=`[data-hash="${ht(t.body)}"]`);const l=document.querySelector(i);if(l!=null&&l.textContent){const{body:n,...u}=JSON.parse(l.textContent),_=l.getAttribute("data-ttl");return _&&ue.set(e,{body:n,init:u,ttl:1e3*Number(_)}),Promise.resolve(new Response(n,u))}return he(r,t)}function _t(r,e){const t=ue.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ue.delete(r)}return he(r,e)}const gt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function yt(r){const e=[],t=[];let s=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${bt(r).map((l,n,u)=>{const _=decodeURIComponent(l),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(_);if(d)return e.push(d[1]),t.push(d[2]),"(?:/(.*))?";const h=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(_);if(h)return e.push(h[1]),t.push(h[2]),"(?:/([^/]+))?";const y=n===u.length-1;return _?"/"+_.split(/\[(.+?)\](?!\])/).map((U,V)=>{if(V%2){const D=gt.exec(U);if(!D)throw new Error(`Invalid param: ${U}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,ae,H,se,Q]=D;return e.push(se),t.push(Q),H?"(.*?)":ae?"([^/]*)?":"([^/]+?)"}return y&&U.includes(".")&&(s=!1),U.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${s?"/?":""}$`),names:e,types:t}}function wt(r){return!/^\([^)]+\)$/.test(r)}function bt(r){return r.slice(1).split("/").filter(wt)}function vt(r,e,t,s,i){const l={};let n=-1;for(let u=0;u<t.length;u+=1){const _=t[u],d=s[u];let h=r[u+1]||"";if(d){const y=i[d];if(!y)throw new Error(`Missing "${d}" param matcher`);if(n=e.indexOf(`=${d}`,n+1),!(!h&&e.lastIndexOf("[[",n)>e.lastIndexOf("[...",n))&&!y(h))return}l[_]=h}return l}function Et(r,e,t,s){const i=new Set(e);return Object.entries(t).map(([u,[_,d,h]])=>{const{pattern:y,names:O,types:T}=yt(u),U={id:u,exec:V=>{const D=y.exec(V);if(D)return vt(D,u,O,T,s)},errors:[1,...h||[]].map(V=>r[V]),layouts:[0,...d||[]].map(n),leaf:l(_)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function l(u){const _=u<0;return _&&(u=~u),[_,r[u]]}function n(u){return u===void 0?u:[i.has(u),r[u]]}}function kt(r){let e,t,s;var i=r[0][0];function l(n){return{props:{data:n[2],form:n[1]}}}return i&&(e=Y(i,l(r))),{c(){e&&X(e.$$.fragment),t=F()},l(n){e&&Ie(e.$$.fragment,n),t=F()},m(n,u){e&&Z(e,n,u),M(n,t,u),s=!0},p(n,u){const _={};if(u&4&&(_.data=n[2]),u&2&&(_.form=n[1]),i!==(i=n[0][0])){if(e){pe();const d=e;J(d.$$.fragment,1,0,()=>{x(d,1)}),de()}i?(e=Y(i,l(n)),X(e.$$.fragment),G(e.$$.fragment,1),Z(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(n){s||(e&&G(e.$$.fragment,n),s=!0)},o(n){e&&J(e.$$.fragment,n),s=!1},d(n){n&&K(t),e&&x(e,n)}}}function Rt(r){let e,t,s;var i=r[0][0];function l(n){return{props:{data:n[2],$$slots:{default:[Ot]},$$scope:{ctx:n}}}}return i&&(e=Y(i,l(r))),{c(){e&&X(e.$$.fragment),t=F()},l(n){e&&Ie(e.$$.fragment,n),t=F()},m(n,u){e&&Z(e,n,u),M(n,t,u),s=!0},p(n,u){const _={};if(u&4&&(_.data=n[2]),u&523&&(_.$$scope={dirty:u,ctx:n}),i!==(i=n[0][0])){if(e){pe();const d=e;J(d.$$.fragment,1,0,()=>{x(d,1)}),de()}i?(e=Y(i,l(n)),X(e.$$.fragment),G(e.$$.fragment,1),Z(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(n){s||(e&&G(e.$$.fragment,n),s=!0)},o(n){e&&J(e.$$.fragment,n),s=!1},d(n){n&&K(t),e&&x(e,n)}}}function Ot(r){let e,t,s;var i=r[0][1];function l(n){return{props:{data:n[3],form:n[1]}}}return i&&(e=Y(i,l(r))),{c(){e&&X(e.$$.fragment),t=F()},l(n){e&&Ie(e.$$.fragment,n),t=F()},m(n,u){e&&Z(e,n,u),M(n,t,u),s=!0},p(n,u){const _={};if(u&8&&(_.data=n[3]),u&2&&(_.form=n[1]),i!==(i=n[0][1])){if(e){pe();const d=e;J(d.$$.fragment,1,0,()=>{x(d,1)}),de()}i?(e=Y(i,l(n)),X(e.$$.fragment),G(e.$$.fragment,1),Z(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(n){s||(e&&G(e.$$.fragment,n),s=!0)},o(n){e&&J(e.$$.fragment,n),s=!1},d(n){n&&K(t),e&&x(e,n)}}}function Ge(r){let e,t=r[5]&&Ke(r);return{c(){e=tt("div"),t&&t.c(),this.h()},l(s){e=nt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=rt(e);t&&t.l(i),i.forEach(K),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(s,i){M(s,e,i),t&&t.m(e,null)},p(s,i){s[5]?t?t.p(s,i):(t=Ke(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&K(e),t&&t.d()}}}function Ke(r){let e;return{c(){e=at(r[6])},l(t){e=st(t,r[6])},m(t,s){M(t,e,s)},p(t,s){s&64&&ot(e,t[6])},d(t){t&&K(e)}}}function St(r){let e,t,s,i,l;const n=[Rt,kt],u=[];function _(h,y){return h[0][1]?0:1}e=_(r),t=u[e]=n[e](r);let d=r[4]&&Ge(r);return{c(){t.c(),s=xe(),d&&d.c(),i=F()},l(h){t.l(h),s=Qe(h),d&&d.l(h),i=F()},m(h,y){u[e].m(h,y),M(h,s,y),d&&d.m(h,y),M(h,i,y),l=!0},p(h,[y]){let O=e;e=_(h),e===O?u[e].p(h,y):(pe(),J(u[O],1,1,()=>{u[O]=null}),de(),t=u[e],t?t.p(h,y):(t=u[e]=n[e](h),t.c()),G(t,1),t.m(s.parentNode,s)),h[4]?d?d.p(h,y):(d=Ge(h),d.c(),d.m(i.parentNode,i)):d&&(d.d(1),d=null)},i(h){l||(G(t),l=!0)},o(h){J(t),l=!1},d(h){u[e].d(h),h&&K(s),d&&d.d(h),h&&K(i)}}}function Lt(r,e,t){let{stores:s}=e,{page:i}=e,{components:l}=e,{form:n}=e,{data_0:u=null}=e,{data_1:_=null}=e;et(s.page.notify);let d=!1,h=!1,y=null;return ke(()=>{const O=s.page.subscribe(()=>{d&&(t(5,h=!0),t(6,y=document.title||"untitled page"))});return t(4,d=!0),O}),r.$$set=O=>{"stores"in O&&t(7,s=O.stores),"page"in O&&t(8,i=O.page),"components"in O&&t(0,l=O.components),"form"in O&&t(1,n=O.form),"data_0"in O&&t(2,u=O.data_0),"data_1"in O&&t(3,_=O.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(i)},[l,n,u,_,d,h,y,s,i]}class It extends Ye{constructor(e){super(),Xe(this,e,Lt,St,Ze,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const $t=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),At=function(r,e){return new URL(r,e).href},ze={},q=function(e,t,s){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(l=>{if(l=At(l,s),l in ze)return;ze[l]=!0;const n=l.endsWith(".css"),u=n?'[rel="stylesheet"]':"";if(!!s)for(let h=i.length-1;h>=0;h--){const y=i[h];if(y.href===l&&(!n||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=n?"stylesheet":$t,n||(d.as="script",d.crossOrigin=""),d.href=l,document.head.appendChild(d),n)return new Promise((h,y)=>{d.addEventListener("load",h),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},Pt={},me=[()=>q(()=>import("./chunks/0-bc4c2c56.js"),["./chunks\\0-bc4c2c56.js","./components\\pages\\_layout.svelte-34b1aa76.js","./chunks\\index-dfaff377.js","./chunks\\index-8a495193.js","./chunks\\stores-7893e56d.js","./chunks\\singletons-8a471a1b.js"],import.meta.url),()=>q(()=>import("./chunks/1-5ffca10d.js"),["./chunks\\1-5ffca10d.js","./components\\pages\\_error.svelte-21addc37.js","./chunks\\index-dfaff377.js","./chunks\\stores-7893e56d.js","./chunks\\singletons-8a471a1b.js","./assets\\_error-510b9df6.css"],import.meta.url),()=>q(()=>import("./chunks/2-3905c721.js"),["./chunks\\2-3905c721.js","./components\\pages\\_page.svelte-8baa3f93.js","./chunks\\index-dfaff377.js","./chunks\\navigation-a9076e72.js","./chunks\\singletons-8a471a1b.js"],import.meta.url),()=>q(()=>import("./chunks/3-36e71292.js"),["./chunks\\3-36e71292.js","./components\\pages\\delivery\\_page.svelte-e538cb29.js","./chunks\\index-dfaff377.js","./chunks\\index-8a495193.js","./chunks\\navigation-a9076e72.js","./chunks\\singletons-8a471a1b.js","./chunks\\index-d4d0ac6b.js"],import.meta.url),()=>q(()=>import("./chunks/4-aa3c1b1b.js"),["./chunks\\4-aa3c1b1b.js","./components\\pages\\delivery\\_id_\\_page.svelte-9af9c712.js","./chunks\\index-dfaff377.js","./chunks\\stores-7893e56d.js","./chunks\\singletons-8a471a1b.js","./chunks\\navigation-a9076e72.js","./chunks\\index-8a495193.js","./chunks\\index-d4d0ac6b.js"],import.meta.url),()=>q(()=>import("./chunks/5-9b3668ea.js"),["./chunks\\5-9b3668ea.js","./components\\pages\\history\\_page.svelte-1cc881d6.js","./chunks\\index-dfaff377.js","./chunks\\navigation-a9076e72.js","./chunks\\singletons-8a471a1b.js","./chunks\\index-8a495193.js"],import.meta.url),()=>q(()=>import("./chunks/6-e213c5a9.js"),["./chunks\\6-e213c5a9.js","./components\\pages\\login\\_page.svelte-5a50749a.js","./chunks\\index-dfaff377.js","./chunks\\index-8a495193.js","./assets\\_page-6d449792.css"],import.meta.url),()=>q(()=>import("./chunks/7-4fa8db48.js"),["./chunks\\7-4fa8db48.js","./components\\pages\\register\\_page.svelte-76015ff9.js","./chunks\\index-dfaff377.js","./chunks\\index-8a495193.js","./chunks\\navigation-a9076e72.js","./chunks\\singletons-8a471a1b.js","./assets\\_page-5f31742c.css"],import.meta.url),()=>q(()=>import("./chunks/8-a72813fd.js"),["./chunks\\8-a72813fd.js","./components\\pages\\settings\\_page.svelte-4ef8b6aa.js","./chunks\\index-dfaff377.js","./chunks\\index-8a495193.js","./chunks\\navigation-a9076e72.js","./chunks\\singletons-8a471a1b.js","./assets\\_page-1bdbf841.css"],import.meta.url)],jt=[],Nt={"/":[2],"/delivery":[3],"/delivery/[id]":[4],"/history":[5],"/login":[6],"/register":[7],"/settings":[8]},Tt={handleError:({error:r})=>{console.error(r)}};class Oe{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,t){this.status=e,this.location=t}}const Ut="/__data.json";async function Dt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,i])=>[s,await i])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Vt=-1,Bt=-2,qt=-3,Ct=-4,Ft=-5,Jt=-6;function Gt(r){const e=JSON.parse(r);if(typeof e=="number")return i(e);const t=e,s=Array(t.length);function i(l){if(l===Vt)return;if(l===qt)return NaN;if(l===Ct)return 1/0;if(l===Ft)return-1/0;if(l===Jt)return-0;if(l in s)return s[l];const n=t[l];if(!n||typeof n!="object")s[l]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":s[l]=new Date(n[1]);break;case"Set":const _=new Set;s[l]=_;for(let y=1;y<n.length;y+=1)_.add(i(n[y]));break;case"Map":const d=new Map;s[l]=d;for(let y=1;y<n.length;y+=2)d.set(i(n[y]),i(n[y+1]));break;case"RegExp":s[l]=new RegExp(n[1],n[2]);break;case"Object":s[l]=Object(n[1]);break;case"BigInt":s[l]=BigInt(n[1]);break;case"null":const h=Object.create(null);s[l]=h;for(let y=1;y<n.length;y+=2)h[n[y]]=i(n[y+1]);break}else{const u=new Array(n.length);s[l]=u;for(let _=0;_<n.length;_+=1){const d=n[_];d!==Bt&&(u[_]=i(d))}}else{const u={};s[l]=u;for(const _ in n){const d=n[_];u[_]=i(d)}}return s[l]}return i(0)}const We="sveltekit:scroll",C="sveltekit:index",le=Et(me,jt,Nt,Pt),Se=me[0],Le=me[1];Se();Le();let re={};try{re=JSON.parse(sessionStorage[We])}catch{}function Ee(r){re[r]=Re()}function Kt({target:r,base:e,trailing_slash:t}){var Ve;const s=[];let i=null;const l={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},u=!1,_=!1,d=!0,h=!1,y=!1,O,T=(Ve=history.state)==null?void 0:Ve[C];T||(T=Date.now(),history.replaceState({...history.state,[C]:T},"",location.href));const U=re[T];U&&(history.scrollRestoration="manual",scrollTo(U.x,U.y));let V=!1,D,ae,H;async function se(){H=H||Promise.resolve(),await H,H=null;const a=new URL(location.href),f=ye(a,!0);i=null,await Ae(f,a,[])}async function Q(a,{noscroll:f=!1,replaceState:p=!1,keepfocus:o=!1,state:c={}},m,g){return typeof a=="string"&&(a=new URL(a,Fe(document))),we({url:a,scroll:f?Re():null,keepfocus:o,redirect_chain:m,details:{state:c,replaceState:p},nav_token:g,accepted:()=>{},blocked:()=>{},type:"goto"})}async function $e(a){const f=ye(a,!1);if(!f)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return i={id:f.id,promise:Ne(f)},i.promise}async function Ae(a,f,p,o,c={},m){var k,E;ae=c;let g=a&&await Ne(a);if(g||(g=await De(f,null,ne(new Error(`Not found: ${f.pathname}`),{url:f,params:{},routeId:null}),404)),f=(a==null?void 0:a.url)||f,ae!==c)return!1;if(g.type==="redirect")if(p.length>10||p.includes(f.pathname))g=await oe({status:500,error:ne(new Error("Redirect loop"),{url:f,params:{},routeId:null}),url:f,routeId:null});else return Q(new URL(g.location,f).href,{},[...p,f.pathname],c),!1;else((E=(k=g.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await z.updated.check()&&await ie(f);if(s.length=0,y=!1,h=!0,o&&o.details){const{details:b}=o,v=b.replaceState?0:1;b.state[C]=T+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",f)}if(i=null,_){n=g.state,g.props.page&&(g.props.page.url=f);const b=fe();O.$set(g.props),b()}else Pe(g);if(o){const{scroll:b,keepfocus:v}=o;if(!v){const S=document.body,I=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),I!==null?S.setAttribute("tabindex",I):S.removeAttribute("tabindex")}if(await Ce(),d){const S=f.hash&&document.getElementById(f.hash.slice(1));b?scrollTo(b.x,b.y):S?S.scrollIntoView():scrollTo(0,0)}}else await Ce();d=!0,g.props.page&&(D=g.props.page),m&&m(),h=!1}function Pe(a){var c,m;n=a.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),D=a.props.page;const p=fe();O=new It({target:r,props:{...a.props,stores:z},hydrate:!0}),p();const o={from:null,to:ce("to",{params:n.params,routeId:(m=(c=n.route)==null?void 0:c.id)!=null?m:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(g=>g(o)),_=!0}async function ee({url:a,params:f,branch:p,status:o,error:c,route:m,form:g}){var I;const k=p.filter(Boolean),E={type:"loaded",state:{url:a,params:f,branch:p,error:c,route:m},props:{components:k.map($=>$.node.component)}};g!==void 0&&(E.props.form=g);let b={},v=!D;for(let $=0;$<k.length;$+=1){const j=k[$];b={...b,...j.data},(v||!n.branch.some(N=>N===j))&&(E.props[`data_${$}`]=b,v=v||Object.keys((I=j.data)!=null?I:{}).length>0)}if(v||(v=Object.keys(D.data).length!==Object.keys(b).length),!n.url||a.href!==n.url.href||n.error!==c||g!==void 0||v){E.props.page={error:c,params:f,routeId:m&&m.id,status:o,url:a,form:g,data:v?b:D.data};const $=(j,N)=>{Object.defineProperty(E.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${N}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function _e({loader:a,parent:f,url:p,params:o,routeId:c,server_data_node:m}){var b,v,S,I,$;let g=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((b=E.shared)!=null&&b.load){let j=function(...L){for(const w of L){const{href:R}=new URL(w,p);k.dependencies.add(R)}};const N={routeId:c,params:new Proxy(o,{get:(L,w)=>(k.params.add(w),L[w])}),data:(v=m==null?void 0:m.data)!=null?v:null,url:pt(p,()=>{k.url=!0}),async fetch(L,w){let R;L instanceof Request?(R=L.url,w={body:L.method==="GET"||L.method==="HEAD"?void 0:await L.blob(),cache:L.cache,credentials:L.credentials,headers:L.headers,integrity:L.integrity,keepalive:L.keepalive,method:L.method,mode:L.mode,redirect:L.redirect,referrer:L.referrer,referrerPolicy:L.referrerPolicy,signal:L.signal,...w}):R=L;const P=new URL(R,p).href;return j(P),_?_t(P,w):mt(R,P,w)},setHeaders:()=>{},depends:j,parent(){return k.parent=!0,f()}};Object.defineProperties(N,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(S=await E.shared.load.call(null,N))!=null?S:null,g=g?await Dt(g):null}return{node:E,loader:a,server:m,shared:(I=E.shared)!=null&&I.load?{type:"data",data:g,uses:k}:null,data:($=g!=null?g:m==null?void 0:m.data)!=null?$:null}}function je(a,f,p,o){if(y)return!0;if(!p)return!1;if(p.parent&&f||p.url&&a)return!0;for(const c of p.params)if(o[c]!==n.params[c])return!0;for(const c of p.dependencies)if(s.some(m=>m(new URL(c))))return!0;return!1}function ge(a,f){var p,o;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((o=a.uses.params)!=null?o:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&f!=null?f:null}async function Ne({id:a,invalidating:f,url:p,params:o,route:c}){var L;if((i==null?void 0:i.id)===a)return i.promise;const{errors:m,layouts:g,leaf:k}=c,E=[...g,k];m.forEach(w=>w==null?void 0:w().catch(()=>{})),E.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let b=null;const v=n.url?a!==n.url.pathname+n.url.search:!1,S=E.reduce((w,R,P)=>{var te;const A=n.branch[P],W=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||je(v,w.some(Boolean),(te=A.server)==null?void 0:te.uses,o));return w.push(W),w},[]);if(S.some(Boolean)){try{b=await He(p,S)}catch(w){return oe({status:500,error:ne(w,{url:p,params:o,routeId:c.id}),url:p,routeId:c.id})}if(b.type==="redirect")return b}const I=b==null?void 0:b.nodes;let $=!1;const j=E.map(async(w,R)=>{var te;if(!w)return;const P=n.branch[R],A=I==null?void 0:I[R];if((!A||A.type==="skip")&&w[1]===(P==null?void 0:P.loader)&&!je(v,$,(te=P.shared)==null?void 0:te.uses,o))return P;if($=!0,(A==null?void 0:A.type)==="error")throw A;return _e({loader:w[1],url:p,params:o,routeId:c.id,parent:async()=>{var qe;const Be={};for(let be=0;be<R;be+=1)Object.assign(Be,(qe=await j[be])==null?void 0:qe.data);return Be},server_data_node:ge(A===void 0&&w[0]?{type:"skip"}:A!=null?A:null,P==null?void 0:P.server)})});for(const w of j)w.catch(()=>{});const N=[];for(let w=0;w<E.length;w+=1)if(E[w])try{N.push(await j[w])}catch(R){if(R instanceof Me)return{type:"redirect",location:R.location};let P=500,A;I!=null&&I.includes(R)?(P=(L=R.status)!=null?L:P,A=R.error):R instanceof Oe?(P=R.status,A=R.body):A=ne(R,{params:o,url:p,routeId:c.id});const W=await Te(w,N,m);return W?await ee({url:p,params:o,branch:N.slice(0,W.idx).concat(W.node),status:P,error:A,route:c}):await De(p,c.id,A,P)}else N.push(void 0);return await ee({url:p,params:o,branch:N,status:200,error:null,route:c,form:f?void 0:null})}async function Te(a,f,p){for(;a--;)if(p[a]){let o=a;for(;!f[o];)o-=1;try{return{idx:o+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:f,url:p,routeId:o}){var b;const c={},m=await Se();let g=null;if(m.server)try{const v=await He(p,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;g=(b=v.nodes[0])!=null?b:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||u)&&await ie(p)}const k=await _e({loader:Se,url:p,params:c,routeId:o,parent:()=>Promise.resolve({}),server_data_node:ge(g)}),E={node:await Le(),loader:Le,shared:null,server:null,data:null};return await ee({url:p,params:c,branch:[k,E],status:a,error:f,route:null})}function ye(a,f){if(Ue(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const o of le){const c=o.exec(p);if(c){const m=new URL(a.origin+ct(a.pathname,t)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:f,route:o,params:ft(c),url:m}}}}function Ue(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function we({url:a,scroll:f,keepfocus:p,redirect_chain:o,details:c,type:m,delta:g,nav_token:k,accepted:E,blocked:b}){var j,N,L,w;let v=!1;const S=ye(a,!1),I={from:ce("from",{params:n.params,routeId:(N=(j=n.route)==null?void 0:j.id)!=null?N:null,url:n.url}),to:ce("to",{params:(L=S==null?void 0:S.params)!=null?L:null,routeId:(w=S==null?void 0:S.route.id)!=null?w:null,url:a}),type:m};g!==void 0&&(I.delta=g);const $={...I,cancel:()=>{v=!0}};if(l.before_navigate.forEach(R=>R($)),v){b();return}Ee(T),E(),_&&z.navigating.set(I),await Ae(S,a,o,{scroll:f,keepfocus:p,details:c},k,()=>{l.after_navigate.forEach(R=>R(I)),z.navigating.set(null)})}async function De(a,f,p,o){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await oe({status:o,error:p,url:a,routeId:f}):await ie(a)}function ie(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ke(()=>(l.after_navigate.push(a),()=>{const f=l.after_navigate.indexOf(a);l.after_navigate.splice(f,1)}))},before_navigate:a=>{ke(()=>(l.before_navigate.push(a),()=>{const f=l.before_navigate.indexOf(a);l.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(h||!_)&&(d=!1)},goto:(a,f={})=>Q(a,f,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:f}=new URL(a,location.href);s.push(p=>p.href===f)}return se()},invalidateAll:()=>(y=!0,se()),prefetch:async a=>{const f=new URL(a,Fe(document));await $e(f)},prefetch_routes:async a=>{const p=(a?le.filter(o=>a.some(c=>o.exec(c))):le).map(o=>Promise.all([...o.layouts,o.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const f=new URL(location.href),{branch:p,route:o}=n;if(!o)return;const c=await Te(n.branch.length,p,o.errors);if(c){const m=await ee({url:f,params:n.params,branch:p.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:o});n=m.state;const g=fe();O.$set(m.props),g()}}else if(a.type==="redirect")Q(a.location,{},[]);else{const f={form:a.data,page:{...D,form:a.data,status:a.status}},p=fe();O.$set(f),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var g,k;let c=!1;const m={from:ce("from",{params:n.params,routeId:(k=(g=n.route)==null?void 0:g.id)!=null?k:null,url:n.url}),to:null,type:"unload",cancel:()=>c=!0};l.before_navigate.forEach(E=>E(m)),c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ee(T);try{sessionStorage[We]=JSON.stringify(re)}catch{}}});const a=o=>{const{url:c,options:m}=Je(o);if(c&&m.prefetch){if(Ue(c))return;$e(c)}};let f;const p=o=>{clearTimeout(f),f=setTimeout(()=>{var c;(c=o.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:c,url:m,options:g}=Je(o);if(!c||!m)return;const k=c instanceof SVGAElement;if(!k&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:"))return;const E=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||E.includes("external")||g.reload||(k?c.target.baseVal:c.target))return;const[b,v]=m.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){V=!0,Ee(T),n.url=m,z.page.set({...D,url:m}),z.page.notify();return}we({url:m,scroll:g.noscroll?Re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[C]===T)return;const c=o.state[C]-T;we({url:new URL(location.href),scroll:re[o.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=o.state[C]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[C]:++T},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&z.navigating.set(null)})},_hydrate:async({status:a,error:f,node_ids:p,params:o,routeId:c,data:m,form:g})=>{var b;u=!0;const k=new URL(location.href);let E;try{const v=p.map(async(S,I)=>{const $=m[I];return _e({loader:me[S],url:k,params:o,routeId:c,parent:async()=>{const j={};for(let N=0;N<I;N+=1)Object.assign(j,(await v[N]).data);return j},server_data_node:ge($)})});E=await ee({url:k,params:o,branch:await Promise.all(v),status:a,error:f,form:g,route:(b=le.find(S=>S.id===c))!=null?b:null})}catch(v){if(v instanceof Me){await ie(new URL(v.location,location.href));return}E=await oe({status:v instanceof Oe?v.status:500,error:ne(v,{url:k,params:o,routeId:c}),url:k,routeId:c})}Pe(E)}}}async function He(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Ut;const s=await he(t.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),i=await s.text();if(!s.ok)throw new Error(JSON.parse(i));return Gt(i)}function ne(r,e){var t;return r instanceof Oe?r.body:(t=Tt.handleError({error:r,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const zt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(r,e){for(const t of zt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function fe(){return()=>{}}async function Wt({env:r,hydrate:e,paths:t,target:s,trailing_slash:i}){it(t);const l=Kt({target:s,base:t.base,trailing_slash:i});lt({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{Wt as start};
