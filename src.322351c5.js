parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/svg/icon-close.svg":[["icon-close.bb7ed7e5.svg","ApQH"],"ApQH"]}],"tUNq":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/himilayan-blue-poppy-4202825__340.3fd34407.jpg";
},{}],"bfrK":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/himilayan-blue-poppy-4202825_1280.22dd740d.jpg";
},{}],"Q8LH":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/container-4203677__340.20a75af5.jpg";
},{}],"Q8xo":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/container-4203677_1280.33c69172.jpg";
},{}],"CSe0":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/beach-4206785__340.dc9eb0b9.jpg";
},{}],"vRZ1":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/beach-4206785_1280.cfa49df1.jpg";
},{}],"bVfa":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/flowers-1835619__340.15351d23.jpg";
},{}],"Gvsa":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/flowers-1835619_1280.8efd81c2.jpg";
},{}],"APbX":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/the-alps-4209272__340.d132e31c.jpg";
},{}],"eCdk":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/the-alps-4209272_1280.fb4509ba.jpg";
},{}],"ESGj":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/mountains-3674334__340.3013dd5c.jpg";
},{}],"T80d":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/mountains-3674334_1280.22b732cd.jpg";
},{}],"Wv4R":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208255__340.eaa10895.jpg";
},{}],"DPjk":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208255_1280.e6537dfe.jpg";
},{}],"O6n2":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208571__340.a5ebf29d.jpg";
},{}],"YHg0":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/landscape-4208571_1280.b1313920.jpg";
},{}],"ZLlJ":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/lighthouse-4208843__340.70cdd9c7.jpg";
},{}],"xsxB":[function(require,module,exports) {
module.exports="/goit-js-hw-09-gallery/lighthouse-4208843_1280.a32b9620.jpg";
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.galleryItems=void 0,require("./sass/main.scss");var e=q(require("./images/himilayan-blue-poppy-4202825__340.jpg")),i=q(require("./images/himilayan-blue-poppy-4202825_1280.jpg")),r=q(require("./images/container-4203677__340.jpg")),a=q(require("./images/container-4203677_1280.jpg")),t=q(require("./images/beach-4206785__340.jpg")),n=q(require("./images/beach-4206785_1280.jpg")),s=q(require("./images/flowers-1835619__340.jpg")),l=q(require("./images/flowers-1835619_1280.jpg")),o=q(require("./images/the-alps-4209272__340.jpg")),u=q(require("./images/the-alps-4209272_1280.jpg")),c=q(require("./images/mountains-3674334__340.jpg")),d=q(require("./images/mountains-3674334_1280.jpg")),g=q(require("./images/landscape-4208255__340.jpg")),p=q(require("./images/landscape-4208255_1280.jpg")),m=q(require("./images/landscape-4208571__340.jpg")),_=q(require("./images/landscape-4208571_1280.jpg")),f=q(require("./images/lighthouse-4208843__340.jpg")),v=q(require("./images/lighthouse-4208843_1280.jpg"));function q(e){return e&&e.__esModule?e:{default:e}}const j=[{preview:e.default,original:i.default,description:"Hokkaido Flower"},{preview:r.default,original:a.default,description:"Container Haulage Freight"},{preview:t.default,original:n.default,description:"Aerial Beach View"},{preview:s.default,original:l.default,description:"Flower Blooms"},{preview:o.default,original:u.default,description:"Alpine Mountains"},{preview:c.default,original:d.default,description:"Mountain Lake Sailing"},{preview:g.default,original:p.default,description:"Alpine Spring Meadows"},{preview:m.default,original:_.default,description:"Nature Landscape"},{preview:f.default,original:v.default,description:"Lighthouse Coast Sea"}];exports.galleryItems=j;const w=document.querySelector(".js-gallery"),h=document.querySelector("div.lightbox"),y=document.querySelector(".lightbox__image"),L=document.querySelector(".js-lightbox"),b=document.querySelector(".lightbox__overlay"),k=document.querySelector('[data-action="close-lightbox"]'),S=x(j);function x(e){return e.map(({preview:e,original:i,description:r})=>`\n    <li class="gallery__item">\n      <a\n        class="gallery__link"\n        href="${i}"\n      >\n        <img\n          class="gallery__image"\n          src="${e}"\n          data-source="${i}"\n          alt="${r}"\n        />\n      </a>\n    </li>\n    `).join("")}function E(e){e.preventDefault();const i=e.target;"IMG"===i.nodeName&&"IMG"===i.nodeName&&(h.classList.add("is-open"),y.src=i.dataset.source,y.alt=i.alt)}function M(e){e.preventDefault(),h.classList.remove("is-open"),h.src="",h.alt="",window.removeEventListener("click",M)}function A(e){"Escape"===e.code&&"Escape"===e.code&&(h.classList.remove("is-open"),h.src="",h.alt="",window.removeEventListener("keydown",A))}w.insertAdjacentHTML("beforeend",S),w.addEventListener("click",E),b.addEventListener("click",M),k.addEventListener("click",M),document.addEventListener("keydown",A);
},{"./sass/main.scss":"clu1","./images/himilayan-blue-poppy-4202825__340.jpg":"tUNq","./images/himilayan-blue-poppy-4202825_1280.jpg":"bfrK","./images/container-4203677__340.jpg":"Q8LH","./images/container-4203677_1280.jpg":"Q8xo","./images/beach-4206785__340.jpg":"CSe0","./images/beach-4206785_1280.jpg":"vRZ1","./images/flowers-1835619__340.jpg":"bVfa","./images/flowers-1835619_1280.jpg":"Gvsa","./images/the-alps-4209272__340.jpg":"APbX","./images/the-alps-4209272_1280.jpg":"eCdk","./images/mountains-3674334__340.jpg":"ESGj","./images/mountains-3674334_1280.jpg":"T80d","./images/landscape-4208255__340.jpg":"Wv4R","./images/landscape-4208255_1280.jpg":"DPjk","./images/landscape-4208571__340.jpg":"O6n2","./images/landscape-4208571_1280.jpg":"YHg0","./images/lighthouse-4208843__340.jpg":"ZLlJ","./images/lighthouse-4208843_1280.jpg":"xsxB"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.322351c5.js.map