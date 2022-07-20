const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function u(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=u(n);fetch(n.href,r)}};I();const p=Object.freeze({PROMPT_MENU_NAME:"\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694",REQUIRED_MENU_NAME:"\uBA54\uB274 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694",CONFIRM_DELETE:"\uC815\uB9D0\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"}),c=Object.freeze({ADD_MENU:"ADD_MENU",REMOVE_MENU:"REMOVE_MENU",MENU_FORM_SUBMIT:"MENU_FORM_SUBMIT",CHANGE_MENU:"CHANGE_MENU",CHANGE_CATEGORY:"CHANGE_CATEGORY"});function l(e,t=document){return t.querySelector(e)}function O(e,t=document){return t.querySelectorAll(e)}function U(e){const t=document.createElement("template");return t.insertAdjacentHTML("afterbegin",e),t.firstElementChild.cloneNode(!0)}function C(e,t,u=window){u.dispatchEvent(new CustomEvent(e,{detail:t}))}function m(e,t,u=window){u.addEventListener(e,({detail:o})=>t(o))}function h(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}function A(e){if(!(e||"").trim())throw new Error(p.REQUIRED_MENU_NAME)}function L(){const e="cafe";function t(o){localStorage.setItem(e,JSON.stringify(o))}function u(){return JSON.parse(localStorage.getItem(e))||{}}return{save:t,get:u}}function R({cafeStorage:e}){return Object.assign({espresso:{name:"\u2615 \uC5D0\uC2A4\uD504\uB808\uC18C",items:[]},frappuccino:{name:"\u{1F964} \uD504\uB77C\uD478\uCE58\uB178",items:[]},blended:{name:" \u{1F379} \uBE14\uB80C\uB514\uB4DC",items:[]},teavana:{name:"\u{1FAD6} \uD2F0\uBC14\uB098",items:[]},desert:{name:"\u{1F370} \uB514\uC800\uD2B8",items:[]}},e.get())}function S(e){function t(){return e.cafe[e.currentCafe]}function u(){return t().name}function o(){return t().items}function n(){return o().length}function r(a){t().items=a}function s(a){r([...o(),a])}function N(a){r(o().filter(E=>E.menuId!==a))}function M({menuId:a,menuName:E,soldout:i}){const f=d(a);f.menuName=E,f.soldout=i}function d(a){return o().find(E=>E.menuId===a)}function g(a){e.currentCafe=a}return{currentCafe:t,currentCafeName:u,setCurrentCafe:g,currentCafeItems:o,currentCafeItemsSize:n,getMenuById:d,addMenu:s,editMenu:M,removeMenu:N}}function D({cafe:e,stateManager:t,cafeStorage:u}){function o(s){const{menuId:N}=s,M=t.getMenuById(N),d=Object.assign(M,s);t.editMenu(d),u.save(e)}function n(s){t.addMenu(s),u.save(e)}function r({menuId:s}){t.removeMenu(s),u.save(e)}m(c.CHANGE_MENU,o),m(c.ADD_MENU,n),m(c.REMOVE_MENU,r)}function T(e){e.addEventListener("submit",t=>{t.preventDefault(),C(c.MENU_FORM_SUBMIT)})}function G(e){function t(n){e.value=n}function u(){e.focus()}function o(){const{value:n}=e;try{A(n)}catch(s){return alert(s.message)}t(""),u();const r=h();C(c.ADD_MENU,{menuId:r,menuName:n})}addEventListener("load",u),m(c.MENU_FORM_SUBMIT,o)}function w(e,{stateManager:t}){function u(n){e.textContent=`\uCD1D ${n}\uAC1C`}function o(){setTimeout(()=>u(t.currentCafeItemsSize()))}m(c.CHANGE_CATEGORY,o),m(c.ADD_MENU,o),m(c.REMOVE_MENU,o)}function B(e,{menuName:t,soldout:u}){const o={menuName:t},n=l(".menu-name",e);l(".menu-remove-button",e).addEventListener("click",d),l(".menu-edit-button",e).addEventListener("click",a),l(".menu-soldout-button",e).addEventListener("click",g);function M(i){o.menuName=i,n.textContent=i}function d(){if(!confirm(p.CONFIRM_DELETE))return;const{menuId:i}=e.dataset;e.remove(),C(c.REMOVE_MENU,{menuId:i})}function g(){const{menuId:i,soldout:f}=e.dataset,_=f==="true"?"false":"true";E(_),C(c.CHANGE_MENU,{menuId:i,soldout:_})}function a(){const i=prompt(p.PROMPT_MENU_NAME,o.menuName);try{A(i)}catch{return}M(i);const{menuId:f}=e.dataset;C(c.CHANGE_MENU,{menuId:f,menuName:i})}function E(i){const f="sold-out";i==="true"?n.classList.add(f):n.classList.remove(f),e.dataset.soldout=i}return E(u),{$container:e}}function H({menuName:e,soldout:t}){const u=`
  <li class="menu-list-item d-flex items-center py-2">
    <span class="w-100 pl-2 menu-name">${e}</span>
    
    <button type="button" class="bg-gray-50 text-gray-500 text-sm mr-1 menu-soldout-button">\uD488\uC808</button>
    <button type="button" class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button">\uC218\uC815</button>
    <button type="button" class="bg-gray-50 text-gray-500 text-sm menu-remove-button">\uC0AD\uC81C</button>
  </li>`,o=U(u);return B(o,{menuName:e,soldout:t})}function x(e,{stateManager:t}){function u(){for(;e.hasChildNodes();)e.removeChild(e.firstChild)}function o({menuId:s,menuName:N,soldout:M}){const{$container:d}=H({menuName:N,soldout:M});d.dataset.menuId=s,e.insertAdjacentElement("afterbegin",d)}function n(){t.currentCafeItems().forEach(o)}function r(){u(),n()}m(c.CHANGE_CATEGORY,r),m(c.ADD_MENU,o)}function F(e,{stateManager:t}){function u(n){const r=n.target,{categoryName:s}=r.dataset;t.setCurrentCafe(s),C(c.CHANGE_CATEGORY,{categoryName:s})}const o=O(".cafe-category-name");o.forEach(n=>n.addEventListener("click",u)),setTimeout(()=>o[0].click())}function V(e,{stateManager:t}){function u(){const o=t.currentCafeName();e.textContent=`${o} \uBA54\uB274 \uAD00\uB9AC`}m(c.CHANGE_CATEGORY,u)}const b=new L,v=R({cafeStorage:b}),Y={cafe:v,currentCafe:"espresso"},y=new S(Y);new D({cafe:v,stateManager:y,cafeStorage:b});document.addEventListener("DOMContentLoaded",()=>{const e={cafe:v,stateManager:y};T(l("#espresso-menu-form")),G(l("#espresso-menu-name")),x(l("#espresso-menu-list"),e),w(l(".menu-count"),e),F(null,e),V(l(".heading h2"),e)});
