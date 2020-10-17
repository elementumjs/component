!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Component={})}(this,(function(t){"use strict";function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function s(t,e,s){return t(s={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&s.path)}},s.exports),s.exports}var r=e(s((function(t,e){
/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
function s(){for(var t=0,e=0,s=arguments.length;e<s;e++)t+=arguments[e].length;var r=Array(t),n=0;for(e=0;e<s;e++)for(var i=arguments[e],o=0,l=i.length;o<l;o++,n++)r[n]=i[o];return r}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){return this["::listeners"]={},Object.assign(this,t),this._observable()}return t.prototype.listen=function(t,e){this["::listeners"][t]=e},t.prototype.listenAll=function(t){this["::listeners"]["*"]=t},t.prototype.dismiss=function(t){if(!Object.prototype.hasOwnProperty.call(this["::listeners"],t))throw new Error("the reference provided has not any listener registered.");delete this["::listeners"][t]},t.prototype.dismissAll=function(){if(!Object.prototype.hasOwnProperty.call(this["::listeners"],"*"))throw new Error("listenable data has not any global listener registered.");delete this["::listeners"]["*"]},t.prototype.contains=function(t){return this.refs().includes(t)},t.prototype.refs=function(){for(var t=function(e){for(var r=[],n=Object.keys(e),i=n.length,o=0;o<i;o++){var l=n[o];if(!l.startsWith("::")){var a=e[l];if(r.push([l]),"object"==typeof a&&null!==a)for(var h=t(a),c=h.length,u=0;u<c;u++)r.push(s([l],h[u]))}}return r},e=[],r=t(this),n=r.length,i=0;i<n;i++)e.push(r[i].join("."));return e},t.prototype._handler=function(t,e,s){Object.prototype.hasOwnProperty.call(this["::listeners"],t)&&(0,this["::listeners"][t])(e,s),Object.prototype.hasOwnProperty.call(this["::listeners"],"*")&&(0,this["::listeners"]["*"])(e,s,t)},t.prototype._observable=function(){var t=this,e=function(r){return void 0===r&&(r=[]),{get:function(t,n,i){try{if(n.startsWith("::"))throw null;return new Proxy(t[n],e(s(r,[n])))}catch(e){return Reflect.get(t,n,i)}},defineProperty:function(e,n,i){var o=s(r,[n]).join("."),l=i.value,a=e[n],h=Reflect.defineProperty(e,n,i);return t._handler.call(t,o,l,a),h}}};return new Proxy(t,e())},t}();e.default=r}))),n=s((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){return"\x3c!--"+t+"--\x3e"},r=/\s(\S+)\=[\"\']([^\"]*)$/,n=/^([^\"]*)[\"|\'][\s|\>]/,i=function(){function t(t,e){void 0===e&&(e=[]),this.strings=t,this.slots=[],this.prepare(e)}return Object.defineProperty(t.prototype,"html",{get:function(){for(var t="",e=this.strings.length-1,r=0;r<e;r++){var n=this.slots[r],i=n.attr,o=n.value;t+=this.strings[r]+o,null===i&&(t+=s("-"))}return t+this.strings[e]},enumerable:!1,configurable:!0}),t.prototype.prepare=function(t){for(var e=0,i=this.strings.length-1,o=0;o<i;o++){var l=this.strings[o],a=t[o],h=r.exec(l);if(null!==h){var c=l.lastIndexOf("<");if(-1!=c&&e++,0===c)this.strings[o]=s(e)+l;else if(c>0){var u=l.substring(0,c-1),d=l.substring(c);this.strings[o]=u+s(e)+d}var p=h[1],f=h[2],m=this.strings[o].length-f.length;this.strings[o]=this.strings[o].slice(0,m);for(var g="",y=this.strings[o+1],v=n.exec(y);null===v;)g+=y+t[o+1],this.strings.splice(o+1,1),t.splice(o+1,1),i--,y=this.strings[o+1],v=n.exec(y);var b=v[1];this.strings[o+1]=y.slice(b.length),this.slots.push({slotIndex:e,attr:p,value:f+a+g+b})}else e++,this.strings[o]=l+s(e),this.slots.push({slotIndex:e,attr:null,value:a})}},t}(),o=function(t){var e=t.nodeType,s=t.nodeValue;return e===Node.COMMENT_NODE&&parseInt(s)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},l=function(){function t(t,e){this.template=t,this.container=e}return t.prototype.render=function(){var t=document.createTreeWalker(this.container,NodeFilter.SHOW_COMMENT,{acceptNode:o},!1),e=t.nextNode();if(null!==e)for(;e;){var s=e.nodeValue,r=parseInt(s);this.commitNode(e.nextSibling,r),e=t.nextNode()}else{var n=document.createRange().createContextualFragment(this.template.html);this.container.appendChild(n)}},t.prototype.commitNode=function(t,e){for(var s=this.template.slots.length,r=0;r<s;r++)if(this.template.slots[r].slotIndex===e){var n=this.template.slots[r],i=n.attr,o=n.value;null!==i?t.getAttribute(i)!==o&&t.setAttribute(i,o):t.nodeValue!=o&&(t.nodeValue=o)}},t}();e.Template=i,e.html=function(t){for(var e=[],s=1;s<arguments.length;s++)e[s-1]=arguments[s];return new i(t.raw.slice(0),e)},e.render=function(t,e){return new l(t,e).render()}}));class i extends HTMLElement{constructor(){super(),this.open=!0,this.shadowRoot||this.attachShadow({mode:this.open?"open":"closed"}),this.initData(),this.initAttrs(),this.callMethod("created")}get host(){return this.getRootNode().host}static get attrs(){return{}}static get observedAttributes(){return Object.keys(this.attrs)}callMethod(t,...e){return void 0===this[t]?null:this[t].call(this,...e)}initData(){const t=this.callMethod("data");this.data=new r(t||{})}initAttrs(){if(this.constructor.hasOwnProperty("attrs")&&this.constructor.attrs instanceof Array&&this.constructor.attrs.length>0){const t={};this.constructor.attrs.forEach((e=>{t[e.name]=e.value,this.hasAttribute(e.name)||this.setAttribute(e.name,e.value)})),this.attrs=new r(t)}else this.attrs=new r({})}listenUpdates(){this.data.listenAll((()=>this.renderTemplate())),this.attrs.listenAll(((t,e,s)=>{this.getAttribute(s)!==t&&this.setAttribute(s,t)}))}dismissListeners(){this.data.dismissAll(),this.attrs.dismissAll()}listenEvents(){const t=document.createNodeIterator(this.shadowRoot,NodeFilter.SHOW_ELEMENT);let e;for(;e=t.nextNode();){const t=e.attributes;for(let s=0;s<t.length;s++){const r=t.item(s);if(r.name.startsWith("on-")){const t=r.name.split("on-")[1],s=this[r.value.split("(")[0]];void 0!==s&&e.addEventListener(t,(t=>s.call(this,t)))}}}}renderTemplate(){const t=this.callMethod("template");t&&n.render(t,this.shadowRoot)}renderStyles(){const t=this.callMethod("styles");if(t){const e=document.createElement("style");e.innerHTML=t;const s=this.shadowRoot.querySelector("style");s?s.innerHTML=e.innerHTML:this.shadowRoot.appendChild(e)}}connectedCallback(){this.renderTemplate(),this.renderStyles(),this.listenUpdates(),this.listenEvents(),this.callMethod("rendered")}disconnectedCallback(){this.dismissListeners(),this.callMethod("destroyed")}attributeChangedCallback(t,e,s){this.attrs[t]=s,this.renderTemplate()}static attach(t,e){if(!t||""===t)throw new Error("The component tag must be provided.");if(Object.getPrototypeOf(e).name!==this.name)throw new Error("The component must extend Component class");window.customElements.define(t,e)}}t.Component=i,t.html=n.html,Object.defineProperty(t,"__esModule",{value:!0})}));
