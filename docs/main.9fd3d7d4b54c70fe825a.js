/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/winbox/dist/winbox.bundle.js":
/*!***************************************************!*\
  !*** ./node_modules/winbox/dist/winbox.bundle.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * WinBox.js v0.1.92 (Bundle)\r\n * Copyright 2021 Nextapps GmbH\r\n * Author: Thomas Wilkerling\r\n * Licence: Apache-2.0\r\n * https://github.com/nextapps-de/winbox\r\n */\n(function(){'use strict';var e,k=document.createElement(\"style\");k.innerHTML=\"@keyframes fade-in{0%{opacity:0}to{opacity:.85}}.winbox.modal:after,.winbox.modal:before{content:''}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,transform .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);will-change:transform,width,height;contain:layout size;text-align:left;touch-action:none}.max,.no-shadow{box-shadow:none}.wb-header,.winbox iframe{position:absolute;width:100%}.wb-header{left:0;top:0;height:35px;color:#fff;overflow:hidden}.wb-body,.wb-n,.wb-s{position:absolute;left:0}.wb-n,.wb-s{height:10px}.wb-body{right:0;top:35px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict}.wb-title{font-family:Arial,sans-serif;font-size:14px;padding-left:10px;cursor:move;line-height:35px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-n{top:-5px;right:0;cursor:n-resize}.wb-e{position:absolute;top:0;right:-5px;bottom:0;width:10px;cursor:w-resize}.wb-s,.wb-se,.wb-sw{bottom:-5px}.wb-s{right:0;cursor:n-resize}.wb-w,.winbox.modal:before{position:absolute;top:0;bottom:0}.wb-w{left:-5px;width:10px;cursor:w-resize}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;position:absolute}.wb-nw{top:-5px;left:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-sw{left:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize}.wb-icon{float:right;height:35px;max-width:100%;text-align:center}.wb-icon *{display:inline-block;width:30px;height:100%;background-position:center;background-repeat:no-repeat;cursor:pointer;max-width:100%}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-title,.winbox.min .wb-title{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center bottom 11px}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-title{pointer-events:none}.max .wb-body{margin:0!important}.winbox iframe{height:100%;border:0}.winbox.modal:before{left:0;right:0;background:inherit;border-radius:inherit}.winbox.modal:after{position:absolute;top:-100vh;left:-100vw;right:-100vw;bottom:-100vh;background:#0d1117;animation:fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}\";\nvar m=document.getElementsByTagName(\"head\")[0];m.firstChild?m.insertBefore(k,m.firstChild):m.appendChild(k);var p=document.createElement(\"div\");p.innerHTML=\"<div class=wb-header><div class=wb-icon><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-title> </div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>\";function r(a,b,c,g){a.addEventListener(b,c,g||!1===g?g:!0)}function t(a){a.stopPropagation();a.cancelable&&a.preventDefault()}function u(a,b,c){c=\"\"+c;a[\"_s_\"+b]!==c&&(a.style.setProperty(b,c),a[\"_s_\"+b]=c)};var y=document.documentElement,z=[],B=0,C=0,D,H,I,K,L,N,O;\nfunction Q(a,b){if(!(this instanceof Q))return new Q(a);D||R();this.g=p.cloneNode(!0);this.body=this.g.getElementsByClassName(\"wb-body\")[0];var c,g;if(a){if(b){var f=a;a=b}if(\"string\"===typeof a)f=a;else{if(g=a.modal)var v=c=\"center\";var A=a.id;var J=a.root;f=f||a.title;var E=a.mount;var F=a.html;var d=a.url;var h=a.width;var l=a.height;v=a.x||v;c=a.y||c;var G=a.max;var n=a.top;var q=a.left;var w=a.bottom;var x=a.right;D=a.index||D;var X=a.onclose;var Y=a.onfocus;var Z=a.onblur;var aa=a.onmove;var ba=\na.onresize;b=a.background;var P=a.border;var M=a[\"class\"];b&&this.setBackground(b);P&&u(this.body,\"margin\",P+(isNaN(P)?\"\":\"px\"))}}this.setTitle(f||\"\");a=N;f=O;n=n?S(n,f):0;w=w?S(w,f):0;q=q?S(q,a):0;x=x?S(x,a):0;a-=q+x;f-=n+w;h=h?S(h,a):a/2|0;l=l?S(l,f):f/2|0;v=v?S(v,a,h):q;c=c?S(c,f,l):n;D=D||10;this.g.id=this.id=A||\"winbox-\"+ ++B;this.g.className=\"winbox\"+(M?\" \"+(\"string\"===typeof M?M:M.join(\" \")):\"\")+(g?\" modal\":\"\");this.x=v;this.y=c;this.width=h;this.height=l;this.top=n;this.right=x;this.bottom=\nw;this.left=q;this.max=this.min=!1;this.j=X;this.l=Y;this.i=Z;this.o=aa;this.m=ba;G?this.maximize():this.move().resize();this.focus();E?this.mount(E):F?this.body.innerHTML=F:d&&this.setUrl(d);ca(this);(J||document.body).appendChild(this.g)}Q[\"new\"]=function(a){return new Q(a)};function S(a,b,c){\"string\"===typeof a&&(\"center\"===a?a=(b-c)/2|0:\"right\"===a||\"bottom\"===a?a=b-c:(c=parseFloat(a),a=\"%\"===(\"\"+c!==a&&a.substring((\"\"+c).length))?b/100*c|0:c));return a}\nfunction R(){var a=document.body;a[K=\"requestFullscreen\"]||a[K=\"msRequestFullscreen\"]||a[K=\"webkitRequestFullscreen\"]||a[K=\"mozRequestFullscreen\"]||(K=\"\");L=K&&K.replace(\"request\",\"exit\").replace(\"mozRequest\",\"mozCancel\").replace(\"Request\",\"Exit\");r(window,\"resize\",function(){N=y.clientWidth;O=y.clientHeight;T()});N=y.clientWidth;O=y.clientHeight}\nfunction ca(a){U(a,\"title\");U(a,\"n\");U(a,\"s\");U(a,\"w\");U(a,\"e\");U(a,\"nw\");U(a,\"ne\");U(a,\"se\");U(a,\"sw\");r(a.g.getElementsByClassName(\"wb-min\")[0],\"click\",function(b){t(b);a.minimize()});r(a.g.getElementsByClassName(\"wb-max\")[0],\"click\",function(b){t(b);a.focus().maximize()});K?r(a.g.getElementsByClassName(\"wb-full\")[0],\"click\",function(b){t(b);a.focus().fullscreen()}):a.addClass(\"no-full\");r(a.g.getElementsByClassName(\"wb-close\")[0],\"click\",function(b){t(b);a.close()||(a=null)});r(a.g,\"click\",function(){a.focus()},\n!1)}function V(a){z.splice(z.indexOf(a),1);T();a.removeClass(\"min\");a.min=!1;a.g.title=\"\"}function T(){for(var a=z.length,b=0,c,g;b<a;b++)c=z[b],g=Math.min((N-2*c.left)/a,250),c.resize(g+1|0,35,!0).move(c.left+b*g|0,O-c.bottom-35,!0)}\nfunction U(a,b){function c(d){t(d);if(a.min)a.minimize();else{if(\"title\"===b){var h=Date.now(),l=h-C;C=h;if(250>l){a.maximize();return}}a.max||(h=F=a.body.getElementsByTagName(\"iframe\")[0],u(a.g,\"transition\",\"none\"),h&&u(h,\"pointer-events\",\"none\"),(A=d.touches)&&(A=A[0])?(d=A,r(window,\"touchmove\",g),r(window,\"touchend\",f)):(r(window,\"mousemove\",g),r(window,\"mouseup\",f)),J=d.pageX,E=d.pageY,a.focus())}}function g(d){t(d);A&&(d=d.touches[0]);var h=d.pageX;d=d.pageY;var l=h-J,G=d-E,n;if(\"title\"===b){a.x+=\nl;a.y+=G;var q=n=1}else{if(\"e\"===b||\"se\"===b||\"ne\"===b){a.width+=l;var w=1}else if(\"w\"===b||\"sw\"===b||\"nw\"===b)a.x+=l,a.width-=l,q=w=1;if(\"s\"===b||\"se\"===b||\"sw\"===b){a.height+=G;var x=1}else if(\"n\"===b||\"ne\"===b||\"nw\"===b)a.y+=G,a.height-=G,n=x=1}if(w||x)w&&(a.width=Math.max(Math.min(a.width,N-a.x-a.right),150)),x&&(a.height=Math.max(Math.min(a.height,O-a.y-a.bottom),35)),a.resize();if(q||n)q&&(a.x=Math.max(Math.min(a.x,N-a.width-a.right),a.left)),n&&(a.y=Math.max(Math.min(a.y,O-a.height-a.bottom),\na.top)),a.move();J=h;E=d}function f(d){t(d);d=F;u(a.g,\"transition\",\"\");d&&u(d,\"pointer-events\",\"\");F=null;A?(window.removeEventListener(\"touchmove\",g,!0),window.removeEventListener(\"touchend\",f,!0)):(window.removeEventListener(\"mousemove\",g,!0),window.removeEventListener(\"mouseup\",f,!0))}var v=a.g.getElementsByClassName(\"wb-\"+b)[0],A,J,E,F;r(v,\"mousedown\",c);r(v,\"touchstart\",c,{passive:!1})}e=Q.prototype;\ne.mount=function(a){this.unmount();a.h||(a.h=a.parentNode);this.body.textContent=\"\";this.body.appendChild(a);return this};e.unmount=function(a){var b=this.body.firstChild;if(b){var c=a||b.h;c&&c.appendChild(b);b.h=a}return this};e.setTitle=function(a){a=this.title=a;this.g.getElementsByClassName(\"wb-title\")[0].firstChild.nodeValue=a;return this};e.setBackground=function(a){u(this.g,\"background\",a);return this};e.setUrl=function(a){this.body.innerHTML='<iframe src=\"'+a+'\"></iframe>';return this};\ne.focus=function(){I!==this&&(u(this.g,\"z-index\",D++),this.addClass(\"focus\"),I&&(I.removeClass(\"focus\"),I.i&&I.i()),I=this,this.l&&this.l());return this};e.hide=function(){return this.addClass(\"hide\")};e.show=function(){return this.removeClass(\"hide\")};e.minimize=function(a){H&&W();!a&&this.min?(V(this),this.resize().move().focus()):!1===a||this.min||(z.push(this),T(),this.g.title=this.title,this.addClass(\"min\"),this.min=!0);this.max&&(this.removeClass(\"max\"),this.max=!1);return this};\ne.maximize=function(a){if(\"undefined\"===typeof a||a!==this.max)this.min&&V(this),(this.max=!this.max)?this.addClass(\"max\").resize(N-this.left-this.right,O-this.top-this.bottom,!0).move(this.left,this.top,!0):this.resize().move().removeClass(\"max\");return this};e.fullscreen=function(a){if(\"undefined\"===typeof a||a!==H)this.min&&(this.resize().move(),V(this)),H&&W()||(this.body[K](),H=!0);return this};\nfunction W(){H=!1;if(document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[L](),!0}e.close=function(a){if(this.j&&this.j(a))return!0;this.min&&V(this);this.unmount();this.g.parentNode.removeChild(this.g);I===this&&(I=null)};\ne.move=function(a,b,c){a||0===a?c||(this.x=a?a=S(a,N-this.left-this.right,this.width):0,this.y=b?b=S(b,O-this.top-this.bottom,this.height):0):(a=this.x,b=this.y);u(this.g,\"transform\",\"translate(\"+a+\"px,\"+b+\"px)\");this.o&&this.o(a,b);return this};e.resize=function(a,b,c){a||0===a?c||(this.width=a?a=S(a,N-this.left-this.right):0,this.height=b?b=S(b,O-this.top-this.bottom):0):(a=this.width,b=this.height);u(this.g,\"width\",a+\"px\");u(this.g,\"height\",b+\"px\");this.m&&this.m(a,b);return this};\ne.addClass=function(a){this.g.classList.add(a);return this};e.removeClass=function(a){this.g.classList.remove(a);return this};e.use=function(a){a(this);return this};window.WinBox=Q;}).call(undefined);\n\n\n//# sourceURL=webpack://darkdragon532.github.io/./node_modules/winbox/dist/winbox.bundle.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const winbox = __webpack_require__(/*! winbox */ \"./node_modules/winbox/dist/winbox.bundle.js\")\n\nconst about = document.querySelector(\"#about\")\nconst projects = document.querySelector(\"#projects\")\nconst about_content = document.querySelector(\"#about-content\")\nconst projects_content = document.querySelector(\"#projects-content\")\n\nabout.addEventListener('click', () => {\n    const about_box = new WinBox({\n        title: \"About Me UwU\",\n        width: \"400px\",\n        height: \"400px\",\n        top: 50,\n        right: 50,\n        left: 50,\n        bottom: 50,\n        mount: about_content,\n        onfocus: function() {\n            this.setBackground(\"#00aa00\")\n        },\n        onblur: function() {\n            this.setBackground(\"#777\")\n        }\n    })\n})\n\nprojects.addEventListener('click', () => {\n    const contact_box = new WinBox({\n        title: \"My Projects OwO\",\n        width: \"400px\",\n        height: \"400px\",\n        top: 150,\n        right: 50,\n        left: 250,\n        bottom: 50,\n        mount: projects_content,\n        onfocus: function() {\n            this.setBackground(\"#00aa00\")\n        },\n        onblur: function() {\n            this.setBackground(\"#777\")\n        }\n    })\n})\n\n//# sourceURL=webpack://darkdragon532.github.io/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;