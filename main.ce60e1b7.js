parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".burger-button"),t=document.querySelector(".header__select-language"),n=document.querySelector(".menu"),o=document.querySelectorAll(".menu__link, .button--menu"),c=document.querySelector(".page__body"),u=document.querySelector(".menu__content");function i(){e.classList.toggle("burger-button--is-active"),n.classList.toggle("menu--is-open"),u.classList.toggle("menu__content--is-visible"),c.classList.toggle("page__body--with-menu"),window.innerWidth<640&&t.classList.toggle("header__select-language--is-visible")}function l(){n.classList.contains("menu--is-open")&&e.click()}e.addEventListener("click",i),o.forEach(function(e){return e.addEventListener("click",l)});var r=document.querySelector(".last-section__email-form");document.querySelector("#button-follow").addEventListener("click",function(e){e.preventDefault(),!0===r.reportValidity()&&r.reset()},!1)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.ce60e1b7.js.map