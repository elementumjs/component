(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Component = {}));
}(this, (function (exports) { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var listenableData_cjs = createCommonjsModule(function (module, exports) {
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
	function t(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),s=0;for(e=0;e<r;e++)for(var o=arguments[e],i=0,l=o.length;i<l;i++,s++)n[s]=o[i];return n}Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(t){return this["::listeners"]={},Object.assign(this,t),this._observable()}return e.prototype.listen=function(t,e){this["::listeners"][t]=e;},e.prototype.listenAll=function(t){this["::listeners"]["*"]=t;},e.prototype.dismiss=function(t){if(!Object.prototype.hasOwnProperty.call(this["::listeners"],t))throw new Error("the reference provided has not any listener registered.");delete this["::listeners"][t];},e.prototype.dismissAll=function(){if(!Object.prototype.hasOwnProperty.call(this["::listeners"],"*"))throw new Error("listenable data has not any global listener registered.");delete this["::listeners"]["*"];},e.prototype.contains=function(t){return this.refs().includes(t)},e.prototype.refs=function(){for(var e=function(r){for(var n=[],s=Object.keys(r),o=s.length,i=0;i<o;i++){var l=s[i];if(!l.startsWith("::")){var a=r[l];if(n.push([l]),"object"==typeof a&&null!==a)for(var h=e(a),p=h.length,u=0;u<p;u++)n.push(t([l],h[u]));}}return n},r=[],n=e(this),s=n.length,o=0;o<s;o++)r.push(n[o].join("."));return r},e.prototype._handler=function(t,e,r){Object.prototype.hasOwnProperty.call(this["::listeners"],t)&&(0, this["::listeners"][t])(e,r);Object.prototype.hasOwnProperty.call(this["::listeners"],"*")&&(0, this["::listeners"]["*"])(e,r,t);},e.prototype._observable=function(){var e=this,r=function(n){return void 0===n&&(n=[]),{get:function(e,s,o){try{if(s.startsWith("::"))throw null;return new Proxy(e[s],r(t(n,[s])))}catch(t){return Reflect.get(e,s,o)}},defineProperty:function(r,s,o){var i=t(n,[s]).join("."),l=o.value,a=r[s],h=Reflect.defineProperty(r,s,o);return e._handler.call(e,i,l,a),h}}};return new Proxy(e,r())},e}();exports.default=e;
	});

	var Data = /*@__PURE__*/getDefaultExportFromCjs(listenableData_cjs);

	var template_cjs = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports,"__esModule",{value:!0});var t=function(t){return "\x3c!--"+t+"--\x3e"},e=/\s(\S+)\=[\"\']([^\"]*)$/,s=/^([^\"]*)[\"|\'][\s|\>]/,r=function(){function r(t,e){void 0===e&&(e=[]),this.strings=t,this.slots=[],this.prepare(e);}return Object.defineProperty(r.prototype,"html",{get:function(){for(var e="",s=this.strings.length-1,r=0;r<s;r++){var n=this.slots[r],i=n.attr,l=n.value;e+=this.strings[r]+l,null===i&&(e+=t("-"));}return e+this.strings[s]},enumerable:!1,configurable:!0}),r.prototype.prepare=function(r){for(var n=0,i=this.strings.length-1,l=0;l<i;l++){var o=this.strings[l],a=r[l],u=e.exec(o);if(null!==u){var h=o.lastIndexOf("<");if(-1!=h&&n++,0===h)this.strings[l]=t(n)+o;else if(h>0){var c=o.substring(0,h-1),p=o.substring(h);this.strings[l]=c+t(n)+p;}var g=u[1],d=u[2],f=this.strings[l].length-d.length;this.strings[l]=this.strings[l].slice(0,f);for(var v="",m=this.strings[l+1],x=s.exec(m);null===x;)v+=m+r[l+1],this.strings.splice(l+1,1),r.splice(l+1,1),i--,m=this.strings[l+1],x=s.exec(m);var N=x[1];this.strings[l+1]=m.slice(N.length),this.slots.push({slotIndex:n,attr:g,value:d+a+v+N});}else n++,this.strings[l]=o+t(n),this.slots.push({slotIndex:n,attr:null,value:a});}},r}(),n=function(t){var e=t.nodeType,s=t.nodeValue;return e===Node.COMMENT_NODE&&parseInt(s)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},i=function(){function t(t,e){this.template=t,this.container=e;}return t.prototype.render=function(){var t=document.createTreeWalker(this.container,NodeFilter.SHOW_COMMENT,{acceptNode:n},!1),e=t.nextNode();if(null!==e)for(;e;){var s=e.nodeValue,r=parseInt(s);this.commitNode(e.nextSibling,r),e=t.nextNode();}else {var i=document.createRange().createContextualFragment(this.template.html);this.container.appendChild(i);}},t.prototype.commitNode=function(t,e){for(var s=this.template.slots.length,r=0;r<s;r++){if(this.template.slots[r].slotIndex===e){var n=this.template.slots[r],i=n.attr,l=n.value;if(null!==i)t.getAttribute(i)!==l&&t.setAttribute(i,l);else t.nodeValue!=l&&(t.nodeValue=l);}}},t}();exports.Template=r,exports.html=function(t){for(var e=[],s=1;s<arguments.length;s++)e[s-1]=arguments[s];return new r(t.raw.slice(0),e)},exports.render=function(t,e){return new i(t,e).render()};
	});

	/** @private */
	const funcNameDel = "(";
	/** @private */
	const eventPrefix = "on-";
	/**
	 * Component class has the basic methods to control the component lifecycle,
	 * mapping the properties and hot rendering the component template on properties
	 * updates.
	 *
	 * @class Component
	 * @extends {HTMLElement}
	 * @noInheritDoc
	 */
	class Component extends HTMLElement {
	    /**
	     * Creates an instance of {@link Component}, attaching the shadowRoot if it
	     * is not already attached, and initializing the compontent properties for
	     * {@link Component.data} and {@link Component.attributes}.
	     * @memberof Component
	     */
	    constructor() {
	        super();
	        this.open = true;
	        // Check if shadowRoot is created and attatch it.
	        if (!this.shadowRoot)
	            this.attachShadow({ mode: this.open ? "open" : "closed" });
	        // Init componentand fire 'created' function.
	        this.initData();
	        this.initAttrs();
	        this.callMethod("created");
	    }
	    /**
	     * host getter returns the host element of the current custom component if
	     * it is a nested component. If it is the root one, the host getter returns
	     * undefined.
	     *
	     * @readonly
	     * @type {Element}
	     * @memberof Component
	     */
	    get host() {
	        return this.getRootNode().host;
	    }
	    /**
	     * attrs getter returns by default an empty object. Developers can overwrite
	     * this static getter to return their component attribute definition. Like
	     * with the vanilla syntax, the attributes must be defined before component
	     * implementation occurs. It is because the attribute definition is required
	     * to be mappend on {@link Component.observedAttributes} and to listen for
	     * changes on it using {@link Component.attributeChangedCallback}.
	     *
	     * @readonly
	     * @static
	     * @type {Array<Attribute>}
	     * @memberof Component
	     */
	    static get attrs() { return {}; }
	    /**
	     * observedAttributes constructs an array of attributes names with the keys
	     * provided by {@link Component.attrs} getter. The updates on these
	     * attributes will be handled by {@link Component.attributeChangedCallback}.
	     *
	     * @readonly
	     * @static
	     * @override
	     * @memberof Component
	     */
	    static get observedAttributes() { return Object.keys(this.attrs); }
	    /**
	     * callMethod tries to fire a component method if it is defined in the
	     * custom component definition, aplying the current instance and passing the
	     * rest of the arguments provided as parameters.
	     *
	     * @private
	     * @param {string} name Method name as string.
	     * @param {...Array<any>} args Arguments to the method called.
	     * @return {*} The result of executing the function.
	     * @memberof Component
	     */
	    callMethod(name, ...args) {
	        // Check if current definition has the method and call it passing the 
	        // arguments.
	        if (this[name] === undefined)
	            return null;
	        return this[name].call(this, ...args);
	    }
	    /**
	     * initData gets the initial data value calling data method of custom
	     * component definition instance and creates a {@link Data} instance with
	     * it.
	     *
	     * @private
	     * @memberof Component
	     */
	    initData() {
	        // Init component data
	        const tempData = this.callMethod("data");
	        if (tempData)
	            this.data = new Data(tempData);
	        else
	            this.data = new Data({});
	    }
	    /**
	     * initAttrs gets the initial data value calling attrs method of custom
	     * component definition instance and creates a {@link Data} instance with
	     * it. Alse checks if the attributes are already defined on the HTML and
	     * gets theirs values.
	     *
	     * @private
	     * @memberof Component
	     */
	    initAttrs() {
	        // Init component attributes.
	        if (this.constructor.hasOwnProperty("attrs") &&
	            this.constructor.attrs instanceof Array &&
	            this.constructor.attrs.length > 0) {
	            // Fill element attributes with the initial attributes.
	            const tempAttrs = {};
	            this.constructor.attrs.forEach(attr => {
	                tempAttrs[attr.name] = attr.value;
	                if (!this.hasAttribute(attr.name))
	                    this.setAttribute(attr.name, attr.value);
	            });
	            this.attrs = new Data(tempAttrs);
	        }
	        else
	            this.attrs = new Data({});
	    }
	    /**
	     * listenUpdates method registers the handlers to listen the data or
	     * attributes changes. Any data change fires the template render function.
	     * Any attribute change, updates the {@link HTMLElement} attributes to fire
	     * {@link Component.attributeChangedCallback}. If the current value of the
	     * attribute has already updated, prevent the listener action.
	     *
	     * @private
	     * @memberof Component
	     */
	    listenUpdates() {
	        // Set listener to re-render the template on data change.
	        this.data.listenAll(() => this.renderTemplate());
	        // Set listener to update element attributes
	        this.attrs.listenAll((val, _, ref) => {
	            if (this.getAttribute(ref) === val)
	                return;
	            this.setAttribute(ref, val);
	        });
	    }
	    /**
	     * dismissListeners cancels the listeners over the component data and
	     * attributes {@link Data} instances.
	     *
	     * @private
	     * @memberof Component
	     */
	    dismissListeners() {
	        // Dismiss listeners for data and attributes
	        this.data.dismissAll();
	        this.attrs.dismissAll();
	    }
	    /**
	     * listEvents method iterates over all the child elements of the current
	     * {@link ShadowRoot} checking if any of them has an event listener defined
	     * by an attribute that starts with "on-" followed by the event to listen.
	     * If any of the childs has an event listener defined, the function gets the
	     * listener defined and set as event listener of the element.
	     *
	     * @private
	     * @memberof Component
	     */
	    listenEvents() {
	        // Create iterator to loop over all component elements searching for 
	        // event listeners definition.
	        const iterator = document.createNodeIterator(this.shadowRoot, NodeFilter.SHOW_ELEMENT);
	        // Iterate over elements checking if contains any attribute which name
	        // starts with eventPrefix.
	        let current;
	        while (current = iterator.nextNode()) {
	            const attributes = current.attributes;
	            for (let i = 0; i < attributes.length; i++) {
	                const attribute = attributes.item(i);
	                if (attribute.name.startsWith(eventPrefix)) {
	                    // Get event and listener function and set event listener
	                    // over the element that has the attribute.
	                    const event = attribute.name.split(eventPrefix)[1];
	                    const listenerName = attribute.value.split(funcNameDel)[0];
	                    const listener = this[listenerName];
	                    if (listener !== undefined) {
	                        current.addEventListener(event, (e) => listener.call(this, e));
	                    }
	                }
	            }
	        }
	    }
	    /**
	     * renderTemplate method gets the template defined into the component
	     * definition calling to the method "template" using
	     * {@link Component.callMethod} function, and fires the render template
	     * function providing the current shadowRoot as target.
	     *
	     * @private
	     * @memberof Component
	     */
	    renderTemplate() {
	        // Get template computed definition and call to render function with 
	        // the shadowRoot as target.
	        const template = this.callMethod("template");
	        if (template)
	            template_cjs.render(template, this.shadowRoot);
	    }
	    /**
	     * renderStyles method gets the computed styles from the component
	     * definition calling "styles" method using {@link Component.callMethod}
	     * function. If the shadowRoot has not a style element, it is created and
	     * the styles definition is appended to it then.
	     *
	     * @private
	     * @memberof Component
	     */
	    renderStyles() {
	        // If the component has a defined styles, get the definition.
	        const styles = this.callMethod("styles");
	        if (styles) {
	            const style = document.createElement("style");
	            style.innerHTML = styles;
	            // If styles are already appended update it, else create it.
	            const current = this.shadowRoot.querySelector("style");
	            if (current)
	                current.innerHTML = style.innerHTML;
	            else
	                this.shadowRoot.appendChild(style);
	        }
	    }
	    /**
	     * connectedCallback method is fired when the custom component is attached
	     * to the target element. It starts the render of the template and the
	     * styles, sets the listeners for component properties updates and child
	     * elements events and then, call component definition method "created" if
	     * it exists.
	     *
	     * @override
	     * @memberof Component
	     */
	    connectedCallback() {
	        // Init render process.
	        this.renderTemplate();
	        this.renderStyles();
	        // Set data and events listeners and fire 'rendered' function.
	        this.listenUpdates();
	        this.listenEvents();
	        this.callMethod("rendered");
	    }
	    /**
	     * disconnectedCallback method is fired when the custom component is
	     * dettached from the target element. It dismiss de listeners over the
	     * component properties and call component definition method "destroyed" if
	     * it exists.
	     *
	     * @override
	     * @memberof Component
	     */
	    disconnectedCallback() {
	        // Dismiss listeners and fire 'destroyed' function.
	        this.dismissListeners();
	        this.callMethod("destroyed");
	    }
	    /**
	     * attributeChangedCallback method handles any attribute value update. It
	     * updates the current {@link Component.attrs} definition and fires the
	     * template render process call {@link Component.renderTemplate} method.
	     *
	     * @param {string} ref
	     * @param {*} old
	     * @param {*} val
	     * @override
	     * @memberof Component
	     */
	    attributeChangedCallback(ref, _, val) {
	        // Catch the attribute component change and updates the component
	        // attrs value, then re-render the template.
	        this.attrs[ref] = val;
	        this.renderTemplate();
	    }
	    /**
	     * attach method defines the custom element by the definition provided as
	     * argument associated to the tag provided too.
	     *
	     * @static
	     * @param {string} tag
	     * @param {*} definition
	     * @memberof Component
	     */
	    static attach(tag, definition) {
	        // Check the component tag and the prototype of the definition provided 
	        // as arguments
	        if (!tag || tag === "")
	            throw new Error("The component tag must be provided.");
	        if (Object.getPrototypeOf(definition).name !== this.name)
	            throw new Error("The component must extend Component class");
	        // Call Window attach function to register the custom element.
	        window.customElements.define(tag, definition);
	    }
	}

	exports.Component = Component;
	exports.html = template_cjs.html;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LnVtZC5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL0BlbGVtZW50dW1qcy9saXN0ZW5hYmxlLWRhdGEvZGlzdC9saXN0ZW5hYmxlLWRhdGEuY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbGVtZW50dW1qcy90ZW1wbGF0ZS9kaXN0L3RlbXBsYXRlLmNqcy5qcyIsIi4uL3NyYy9saWIvY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5mdW5jdGlvbiB0KCl7Zm9yKHZhciB0PTAsZT0wLHI9YXJndW1lbnRzLmxlbmd0aDtlPHI7ZSsrKXQrPWFyZ3VtZW50c1tlXS5sZW5ndGg7dmFyIG49QXJyYXkodCkscz0wO2ZvcihlPTA7ZTxyO2UrKylmb3IodmFyIG89YXJndW1lbnRzW2VdLGk9MCxsPW8ubGVuZ3RoO2k8bDtpKysscysrKW5bc109b1tpXTtyZXR1cm4gbn1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7cmV0dXJuIHRoaXNbXCI6Omxpc3RlbmVyc1wiXT17fSxPYmplY3QuYXNzaWduKHRoaXMsdCksdGhpcy5fb2JzZXJ2YWJsZSgpfXJldHVybiBlLnByb3RvdHlwZS5saXN0ZW49ZnVuY3Rpb24odCxlKXt0aGlzW1wiOjpsaXN0ZW5lcnNcIl1bdF09ZX0sZS5wcm90b3R5cGUubGlzdGVuQWxsPWZ1bmN0aW9uKHQpe3RoaXNbXCI6Omxpc3RlbmVyc1wiXVtcIipcIl09dH0sZS5wcm90b3R5cGUuZGlzbWlzcz1mdW5jdGlvbih0KXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXNbXCI6Omxpc3RlbmVyc1wiXSx0KSl0aHJvdyBuZXcgRXJyb3IoXCJ0aGUgcmVmZXJlbmNlIHByb3ZpZGVkIGhhcyBub3QgYW55IGxpc3RlbmVyIHJlZ2lzdGVyZWQuXCIpO2RlbGV0ZSB0aGlzW1wiOjpsaXN0ZW5lcnNcIl1bdF19LGUucHJvdG90eXBlLmRpc21pc3NBbGw9ZnVuY3Rpb24oKXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXNbXCI6Omxpc3RlbmVyc1wiXSxcIipcIikpdGhyb3cgbmV3IEVycm9yKFwibGlzdGVuYWJsZSBkYXRhIGhhcyBub3QgYW55IGdsb2JhbCBsaXN0ZW5lciByZWdpc3RlcmVkLlwiKTtkZWxldGUgdGhpc1tcIjo6bGlzdGVuZXJzXCJdW1wiKlwiXX0sZS5wcm90b3R5cGUuY29udGFpbnM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMucmVmcygpLmluY2x1ZGVzKHQpfSxlLnByb3RvdHlwZS5yZWZzPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPWZ1bmN0aW9uKHIpe2Zvcih2YXIgbj1bXSxzPU9iamVjdC5rZXlzKHIpLG89cy5sZW5ndGgsaT0wO2k8bztpKyspe3ZhciBsPXNbaV07aWYoIWwuc3RhcnRzV2l0aChcIjo6XCIpKXt2YXIgYT1yW2xdO2lmKG4ucHVzaChbbF0pLFwib2JqZWN0XCI9PXR5cGVvZiBhJiZudWxsIT09YSlmb3IodmFyIGg9ZShhKSxwPWgubGVuZ3RoLHU9MDt1PHA7dSsrKW4ucHVzaCh0KFtsXSxoW3VdKSl9fXJldHVybiBufSxyPVtdLG49ZSh0aGlzKSxzPW4ubGVuZ3RoLG89MDtvPHM7bysrKXIucHVzaChuW29dLmpvaW4oXCIuXCIpKTtyZXR1cm4gcn0sZS5wcm90b3R5cGUuX2hhbmRsZXI9ZnVuY3Rpb24odCxlLHIpe09iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzW1wiOjpsaXN0ZW5lcnNcIl0sdCkmJigwLHRoaXNbXCI6Omxpc3RlbmVyc1wiXVt0XSkoZSxyKTtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpc1tcIjo6bGlzdGVuZXJzXCJdLFwiKlwiKSYmKDAsdGhpc1tcIjo6bGlzdGVuZXJzXCJdW1wiKlwiXSkoZSxyLHQpfSxlLnByb3RvdHlwZS5fb2JzZXJ2YWJsZT1mdW5jdGlvbigpe3ZhciBlPXRoaXMscj1mdW5jdGlvbihuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49W10pLHtnZXQ6ZnVuY3Rpb24oZSxzLG8pe3RyeXtpZihzLnN0YXJ0c1dpdGgoXCI6OlwiKSl0aHJvdyBudWxsO3JldHVybiBuZXcgUHJveHkoZVtzXSxyKHQobixbc10pKSl9Y2F0Y2godCl7cmV0dXJuIFJlZmxlY3QuZ2V0KGUscyxvKX19LGRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKHIscyxvKXt2YXIgaT10KG4sW3NdKS5qb2luKFwiLlwiKSxsPW8udmFsdWUsYT1yW3NdLGg9UmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShyLHMsbyk7cmV0dXJuIGUuX2hhbmRsZXIuY2FsbChlLGksbCxhKSxofX19O3JldHVybiBuZXcgUHJveHkoZSxyKCkpfSxlfSgpO2V4cG9ydHMuZGVmYXVsdD1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHQ9ZnVuY3Rpb24odCl7cmV0dXJuXCJcXHgzYyEtLVwiK3QrXCItLVxceDNlXCJ9LGU9L1xccyhcXFMrKVxcPVtcXFwiXFwnXShbXlxcXCJdKikkLyxzPS9eKFteXFxcIl0qKVtcXFwifFxcJ11bXFxzfFxcPl0vLHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiByKHQsZSl7dm9pZCAwPT09ZSYmKGU9W10pLHRoaXMuc3RyaW5ncz10LHRoaXMuc2xvdHM9W10sdGhpcy5wcmVwYXJlKGUpfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoci5wcm90b3R5cGUsXCJodG1sXCIse2dldDpmdW5jdGlvbigpe2Zvcih2YXIgZT1cIlwiLHM9dGhpcy5zdHJpbmdzLmxlbmd0aC0xLHI9MDtyPHM7cisrKXt2YXIgbj10aGlzLnNsb3RzW3JdLGk9bi5hdHRyLGw9bi52YWx1ZTtlKz10aGlzLnN0cmluZ3Nbcl0rbCxudWxsPT09aSYmKGUrPXQoXCItXCIpKX1yZXR1cm4gZSt0aGlzLnN0cmluZ3Nbc119LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksci5wcm90b3R5cGUucHJlcGFyZT1mdW5jdGlvbihyKXtmb3IodmFyIG49MCxpPXRoaXMuc3RyaW5ncy5sZW5ndGgtMSxsPTA7bDxpO2wrKyl7dmFyIG89dGhpcy5zdHJpbmdzW2xdLGE9cltsXSx1PWUuZXhlYyhvKTtpZihudWxsIT09dSl7dmFyIGg9by5sYXN0SW5kZXhPZihcIjxcIik7aWYoLTEhPWgmJm4rKywwPT09aCl0aGlzLnN0cmluZ3NbbF09dChuKStvO2Vsc2UgaWYoaD4wKXt2YXIgYz1vLnN1YnN0cmluZygwLGgtMSkscD1vLnN1YnN0cmluZyhoKTt0aGlzLnN0cmluZ3NbbF09Yyt0KG4pK3B9dmFyIGc9dVsxXSxkPXVbMl0sZj10aGlzLnN0cmluZ3NbbF0ubGVuZ3RoLWQubGVuZ3RoO3RoaXMuc3RyaW5nc1tsXT10aGlzLnN0cmluZ3NbbF0uc2xpY2UoMCxmKTtmb3IodmFyIHY9XCJcIixtPXRoaXMuc3RyaW5nc1tsKzFdLHg9cy5leGVjKG0pO251bGw9PT14Oyl2Kz1tK3JbbCsxXSx0aGlzLnN0cmluZ3Muc3BsaWNlKGwrMSwxKSxyLnNwbGljZShsKzEsMSksaS0tLG09dGhpcy5zdHJpbmdzW2wrMV0seD1zLmV4ZWMobSk7dmFyIE49eFsxXTt0aGlzLnN0cmluZ3NbbCsxXT1tLnNsaWNlKE4ubGVuZ3RoKSx0aGlzLnNsb3RzLnB1c2goe3Nsb3RJbmRleDpuLGF0dHI6Zyx2YWx1ZTpkK2ErditOfSl9ZWxzZSBuKyssdGhpcy5zdHJpbmdzW2xdPW8rdChuKSx0aGlzLnNsb3RzLnB1c2goe3Nsb3RJbmRleDpuLGF0dHI6bnVsbCx2YWx1ZTphfSl9fSxyfSgpLG49ZnVuY3Rpb24odCl7dmFyIGU9dC5ub2RlVHlwZSxzPXQubm9kZVZhbHVlO3JldHVybiBlPT09Tm9kZS5DT01NRU5UX05PREUmJnBhcnNlSW50KHMpP05vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVDpOb2RlRmlsdGVyLkZJTFRFUl9SRUpFQ1R9LGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7dGhpcy50ZW1wbGF0ZT10LHRoaXMuY29udGFpbmVyPWV9cmV0dXJuIHQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIodGhpcy5jb250YWluZXIsTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQse2FjY2VwdE5vZGU6bn0sITEpLGU9dC5uZXh0Tm9kZSgpO2lmKG51bGwhPT1lKWZvcig7ZTspe3ZhciBzPWUubm9kZVZhbHVlLHI9cGFyc2VJbnQocyk7dGhpcy5jb21taXROb2RlKGUubmV4dFNpYmxpbmcsciksZT10Lm5leHROb2RlKCl9ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCh0aGlzLnRlbXBsYXRlLmh0bWwpO3RoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGkpfX0sdC5wcm90b3R5cGUuY29tbWl0Tm9kZT1mdW5jdGlvbih0LGUpe2Zvcih2YXIgcz10aGlzLnRlbXBsYXRlLnNsb3RzLmxlbmd0aCxyPTA7cjxzO3IrKyl7aWYodGhpcy50ZW1wbGF0ZS5zbG90c1tyXS5zbG90SW5kZXg9PT1lKXt2YXIgbj10aGlzLnRlbXBsYXRlLnNsb3RzW3JdLGk9bi5hdHRyLGw9bi52YWx1ZTtpZihudWxsIT09aSl0LmdldEF0dHJpYnV0ZShpKSE9PWwmJnQuc2V0QXR0cmlidXRlKGksbCk7ZWxzZSB0Lm5vZGVWYWx1ZSE9bCYmKHQubm9kZVZhbHVlPWwpfX19LHR9KCk7ZXhwb3J0cy5UZW1wbGF0ZT1yLGV4cG9ydHMuaHRtbD1mdW5jdGlvbih0KXtmb3IodmFyIGU9W10scz0xO3M8YXJndW1lbnRzLmxlbmd0aDtzKyspZVtzLTFdPWFyZ3VtZW50c1tzXTtyZXR1cm4gbmV3IHIodC5yYXcuc2xpY2UoMCksZSl9LGV4cG9ydHMucmVuZGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG5ldyBpKHQsZSkucmVuZGVyKCl9O1xuIixudWxsXSwibmFtZXMiOlsicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7Q0FDQTtBQUNBO0NBQ0E7Q0FDQTtBQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7OztDQ2YzMkQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFD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
