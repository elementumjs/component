!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).Component={})}(this,(function(e){"use strict";var n={};
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
    ***************************************************************************** */function e$1(e,n,s){if(s||2===arguments.length)for(var i,o=0,a=n.length;o<a;o++)!i&&o in n||(i||(i=Array.prototype.slice.call(n,0,o)),i[o]=n[o]);return e.concat(i||Array.prototype.slice.call(n))}Object.defineProperty(n,"__esModule",{value:!0});var s,i,o=function(){function t(e){return this["::listeners"]={},Object.assign(this,e),this._observable()}return t.prototype.isRegistered=function(e){return Object.prototype.hasOwnProperty.call(this["::listeners"],e)&&Array.isArray(this["::listeners"][e])},t.prototype.hasListener=function(e,n){return this.isRegistered(e)&&this["::listeners"][e].includes(n)},t.prototype.listen=function(e,n){this.isRegistered(e)?this["::listeners"][e].push(n):this["::listeners"][e]=[n]},t.prototype.listenAll=function(e){this.listen("*",e)},t.prototype.dismiss=function(e,n){if(void 0===n&&(n=null),!this.isRegistered(e))throw new Error("the reference provided has not any listener registered.");if(null===n)this["::listeners"][e]=[];else{if(!this.hasListener(e,n))throw new Error("the listener provided is not registered for this reference.");var s=this["::listeners"][e].indexOf(n);this["::listeners"][e].splice(s,1)}},t.prototype.dismissAll=function(e){void 0===e&&(e=null);try{this.dismiss("*",e)}catch(e){throw new Error("listenable data has not any global listener registered.")}},t.prototype.contains=function(e){return this.refs().includes(e)},t.prototype.refs=function(){for(var t=function(e){for(var n=[],s=Object.keys(e),i=s.length,o=0;o<i;o++){var a=s[o];if(!a.startsWith("::")){var l=e[a];if(n.push([a]),"object"==typeof l&&null!==l)for(var c=t(l),h=c.length,u=0;u<h;u++)n.push(e$1([a],c[u]))}}return n},e=[],n=t(this),s=n.length,i=0;i<s;i++)e.push(n[i].join("."));return e},t.prototype._handler=function(e,n,s){var i=[];this.isRegistered(e)&&i.push.apply(i,this["::listeners"][e]),this.isRegistered("*")&&i.push.apply(i,this["::listeners"]["*"]);for(var o=i.length,a=0;a<o;a++)(0,i[a])(n,s,e)},t.prototype._observable=function(){var e=this,r=function(n){return void 0===n&&(n=[]),{get:function(e,s,i){try{if(s.startsWith("::"))throw null;return new Proxy(e[s],r(e$1(e$1([],n),[s])))}catch(n){return Reflect.get(e,s,i)}},defineProperty:function(s,i,o){var a=e$1(e$1([],n),[i]).join("."),l=o.value,c=s[i],h=Reflect.defineProperty(s,i,o);return e._handler.call(e,a,l,c),h}}};return new Proxy(e,r())},t}(),a=n.default=o,l={};Object.defineProperty(l,"__esModule",{value:!0});
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
var extendStatics=function(e,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])})(e,n)};function __spreadArray(e,n,s){if(s||2===arguments.length)for(var i,o=0,a=n.length;o<a;o++)!i&&o in n||(i||(i=Array.prototype.slice.call(n,0,o)),i[o]=n[o]);return e.concat(i||Array.prototype.slice.call(n))}var markGenerator=function(e){return void 0===e&&(e="-"),"\x3c!--"+e+"--\x3e"},isEndMark=function(e){return"string"==typeof e?markGenerator()===e:e.nodeType===Node.COMMENT_NODE&&"-"===e.nodeValue},escapePart=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},c=/\s(\S+)\=[\"\']([^\"]*)$/,startAttrParser=function(e){var n=c.exec(e);return null!==n?[n[1],n[2]]:null},h=/^([^\"]*)[\"|\'][\s|\>]/,endAttrParser=function(e){var n=h.exec(e);return null!==n?n[1]:null},u={1:"injected functions cannot be inlined, reference it instead",2:"the requested slot is not found",3:"every list items must be a Template instance",4:"one slot is required at least. To create string-only elements don't use this."},p=function(e){function TemplateError(n,s,i){void 0===s&&(s=-1);var o=e.call(this,n)||this;return o.name="TemplateError",o.message=n,o.code=s,o.metadata=i,o}return function __extends(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,n),e.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)}(TemplateError,e),TemplateError.create=function(e,n){return new TemplateError(u[e],e,n)},TemplateError.INLINE_FN=1,TemplateError.NOT_SLOT=2,TemplateError.NOT_TEMPLATE=3,TemplateError.EMPTY_SLOTS=4,TemplateError}(Error),acceptNode=function(e){var n=e.nodeType,s=e.nodeValue;return n===Node.COMMENT_NODE&&parseInt(s)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},d=function(){function Processor(e,n){this.template=e,this.container=n}return Processor.prototype.getSlots=function(e){for(var n,s=[],i=this.template.slots.length,o=0;o<i;o++){var a=this.template.slots[o];a.slotIndex===e&&s.push(a)}if(0===s.length)throw n={template:this.template,slot:e},p.create(p.NOT_SLOT,n);return s},Processor.prototype.render=function(){var e=document.createNodeIterator(this.container,NodeFilter.SHOW_COMMENT,{acceptNode:acceptNode}),n=e.nextNode();if(null!==n)for(var s=0;n;){var i=parseInt(n.nodeValue);if(i>s){for(var o=this.getSlots(i),a=o.length,l=0;l<a;l++)o[l].commit(n);s=i}n=e.nextNode()}else this.container.appendChild(this.template.element)},Processor}(),f=function(){function Slot(e,n,s){this.slotIndex=e,this.attr=s,this.value=n}return Object.defineProperty(Slot.prototype,"isAttr",{get:function(){return null!==this.attr&&void 0!==this.attr},enumerable:!1,configurable:!0}),Object.defineProperty(Slot.prototype,"containsTemplate",{get:function(){return(Array.isArray(this.value)?this.value:[this.value]).every((function(e){return"object"==typeof e&&null!==e&&"Template"===e.constructor.name}))},enumerable:!1,configurable:!0}),Object.defineProperty(Slot.prototype,"stringValue",{get:function(){return Array.isArray(this.value)?this.value.join(" "):String(this.value)},enumerable:!1,configurable:!0}),Slot.prototype.commit=function(e){if(this.isAttr)this.commitAttr(e.nextSibling);else{var n=this.value;if(Array.isArray(n)&&this.containsTemplate){for(var s=[],i=e.nextSibling;!isEndMark(i);)s.push(i),i=i.nextSibling;this.commitTemplates(s,e,i)}else{var o=e.nextSibling;this.containsTemplate?this.commitTemplate(o,e):this.commitValue(o,e)}}},Slot.prototype.commitAttr=function(e){var n=[this.attr,this.stringValue],s=n[0],i=n[1];e.getAttribute(s)!==i&&e.setAttribute(s,i)},Slot.prototype.commitValue=function(e,n){var s=this.stringValue;null==e?n.parentNode.insertBefore(document.createTextNode(s),n.nextSibling):e.nodeValue!==s&&(e.nodeValue=s)},Slot.prototype.commitTemplate=function(e,n,s){var i=s||this.value;void 0===e?n.parentNode.insertBefore(i.element,n.nextSibling):isEndMark(e)?e.parentNode.insertBefore(i.element,e):i.match(e)?new d(i,e).render():e.parentNode.replaceChild(i.element,e)},Slot.prototype.commitTemplates=function(e,n,s){for(var i,o=this.value,a=o.length,l=e.length,c=a>l?a:l,h=0;h<c;h++){var u=[e[h],o[h]],d=u[0],f=u[1];if(void 0!==f){if("Template"!==f.constructor.name)throw i={node:d,template:f},p.create(p.NOT_TEMPLATE,i);this.commitTemplate(d||s,n,f)}else void 0!==d&&d.parentNode.removeChild(d)}},Slot}(),m=function(){function Template(e,n){void 0===n&&(n=[]),this.strings=e,this.slots=[],this.prepare(n)}return Object.defineProperty(Template.prototype,"regexp",{get:function(){for(var e="",n=this.strings.length-1,s=0;s<n;s++)e+=escapePart(this.strings[s])+"(.*)",this.slots[s].isAttr||(e+=escapePart(markGenerator()));return e+=escapePart(this.strings[n]),new RegExp(e)},enumerable:!1,configurable:!0}),Object.defineProperty(Template.prototype,"html",{get:function(){for(var e="",n=this.strings.length-1,s=0;s<n;s++){var i=this.slots[s].value;Array.isArray(i)&&(i=i.join("")),e+=this.strings[s]+i,this.slots[s].isAttr||(e+=markGenerator())}return e+this.strings[n]},enumerable:!1,configurable:!0}),Object.defineProperty(Template.prototype,"element",{get:function(){return document.createRange().createContextualFragment(this.html)},enumerable:!1,configurable:!0}),Template.prototype.toString=function(){return this.html},Template.prototype.match=function(e){var n=e.outerHTML;return this.regexp.test(n)},Template.prototype.prepare=function(e){for(var n,s=0,i=this.strings.length-1,o=0;o<i;o++){var a=this.strings[o],l=e[o];if("function"==typeof l){var c=l.name;if(""===c)throw n={part:a,value:l},p.create(p.INLINE_FN,n);l=c+"()"}var h=startAttrParser(a);if(null!==h){var u=a.lastIndexOf("<");if(-1!==u&&s++,0===u)this.strings[o]=markGenerator(s)+a;else if(u>0){var d=a.substring(0,u-1),m=a.substring(u);this.strings[o]=d+markGenerator(s)+m}var y=h[0],g=h[1];if(""!==g){var v=this.strings[o].length-g.length;this.strings[o]=this.strings[o].slice(0,v)}for(var b="",T=this.strings[o+1],w=endAttrParser(T);null===w;)b+=T+e[o+1],this.strings.splice(o+1,1),e.splice(o+1,1),i--,T=this.strings[o+1],w=endAttrParser(T);this.strings[o+1]=T.slice(w.length);var E=g+l+b+w;this.slots.push(new f(s,E,y))}else s++,this.strings[o]=a+markGenerator(s),this.slots.push(new f(s,l))}},Template}();l.Template=m,i=l.html=function(e){for(var n=[],s=1;s<arguments.length;s++)n[s-1]=arguments[s];return new m(__spreadArray([],e.raw,!0),n)},s=l.render=function(e,n){return new d(e,n).render()};class Component extends HTMLElement{constructor(){super(),this.open=!0,this.shadowRoot||this.attachShadow({mode:this.open?"open":"closed"}),this.initData(),this.initAttrs(),this.fireMethod("created")}styles(){}created(){}rendered(){}destroyed(){}get host(){return this.getRootNode().host}get root(){return this.shadowRoot}static get attrs(){return{}}static get data(){return{}}static get observedAttributes(){return Object.keys(this.attrs)}fireMethod(e,...n){if(void 0===this[e])throw new Error("The method called does not exist.");return this[e].call(this,...n)}initData(){try{const e=this.constructor.hasOwnProperty("data")&&"object"==typeof this.constructor.data&&null!==this.constructor.data?Object.assign({},this.constructor.data):{};this.data=new a(e)}catch(e){this.data=new a({})}}castAttr(e,n){switch(typeof n){case"number":return Number(e);case"boolean":const n=e.toLowerCase();if("true"!==n&&"false"!==n)throw new Error("Boolean attributes must be 'true' or 'false'");return"true"===n;case"string":return e;default:return String(e)}}initAttrs(){const e=this.constructor.hasOwnProperty("attrs")&&"object"==typeof this.constructor.attrs&&null!==this.constructor.attrs?Object.assign({},this.constructor.attrs):{},n=Object.keys(e),s=n.length;for(let i=0;i<s;i++){const s=n[i],o=e[s];this.hasAttribute(s)||this.setAttribute(s,o)}const{attributes:i}=this,o=i.length;for(let n=0;n<o;n++){const{nodeName:s,nodeValue:o}=i[n];e.hasOwnProperty(s)&&(e[s]=this.castAttr(o,e[s]))}this.attrs=new a(e)}listenUpdates(){this.data.listenAll((()=>this.renderTemplate())),this.attrs.listenAll(((e,n,s)=>{"function"!=typeof e&&(this.renderTemplate(),this.getAttribute(s)!==String(e)&&this.setAttribute(s,e))}))}dismissListeners(){try{this.data.dismissAll(),this.attrs.dismissAll()}catch(e){return}}listenEvents(){const e=document.createNodeIterator(this.shadowRoot,NodeFilter.SHOW_ELEMENT);let n;for(;n=e.nextNode();){const e=n.attributes,{length:s}=e;for(let i=0;i<s;i++){const s=e.item(i);if(s&&s.name.startsWith("on-")){const e=s.name.split("on-")[1],i=this[s.value.split("(")[0]];void 0!==i&&n.addEventListener(e,(e=>i.call(this,e)))}}}}renderTemplate(){const e=this.fireMethod("template");e&&s(e,this.shadowRoot)}renderStyles(){const e=this.fireMethod("styles");if(e){const n=document.createElement("style");n.innerHTML=e;const s=this.shadowRoot.querySelector("style");s?s.innerHTML=n.innerHTML:this.shadowRoot.appendChild(n)}}connectedCallback(){this.renderTemplate(),this.renderStyles(),this.listenUpdates(),this.listenEvents(),this.fireMethod("rendered")}disconnectedCallback(){this.dismissListeners(),this.fireMethod("destroyed")}attributeChangedCallback(e,n,s){if(this.attrs||s===n){const n=this.castAttr(s,this.attrs[e]);if(n===this.attrs[e])return;this.attrs[e]=n}}static attach(e,n){if(!n)throw new Error("The component definition must be provided");if(!e||""===e)throw new Error("The component tag must be provided.");if(Object.getPrototypeOf(n).name!==this.name)throw new Error("The component must extend Component class");window.customElements.define(e,n)}}e.Component=Component,e.html=function html(...e){return i(...e)},Object.defineProperty(e,"__esModule",{value:!0})}));
