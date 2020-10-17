'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmNqcy5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL0BlbGVtZW50dW1qcy9saXN0ZW5hYmxlLWRhdGEvZGlzdC9saXN0ZW5hYmxlLWRhdGEuY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbGVtZW50dW1qcy90ZW1wbGF0ZS9kaXN0L3RlbXBsYXRlLmNqcy5qcyIsIi4uL3NyYy9saWIvY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5mdW5jdGlvbiB0KCl7Zm9yKHZhciB0PTAsZT0wLHI9YXJndW1lbnRzLmxlbmd0aDtlPHI7ZSsrKXQrPWFyZ3VtZW50c1tlXS5sZW5ndGg7dmFyIG49QXJyYXkodCkscz0wO2ZvcihlPTA7ZTxyO2UrKylmb3IodmFyIG89YXJndW1lbnRzW2VdLGk9MCxsPW8ubGVuZ3RoO2k8bDtpKysscysrKW5bc109b1tpXTtyZXR1cm4gbn1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7cmV0dXJuIHRoaXNbXCI6Omxpc3RlbmVyc1wiXT17fSxPYmplY3QuYXNzaWduKHRoaXMsdCksdGhpcy5fb2JzZXJ2YWJsZSgpfXJldHVybiBlLnByb3RvdHlwZS5saXN0ZW49ZnVuY3Rpb24odCxlKXt0aGlzW1wiOjpsaXN0ZW5lcnNcIl1bdF09ZX0sZS5wcm90b3R5cGUubGlzdGVuQWxsPWZ1bmN0aW9uKHQpe3RoaXNbXCI6Omxpc3RlbmVyc1wiXVtcIipcIl09dH0sZS5wcm90b3R5cGUuZGlzbWlzcz1mdW5jdGlvbih0KXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXNbXCI6Omxpc3RlbmVyc1wiXSx0KSl0aHJvdyBuZXcgRXJyb3IoXCJ0aGUgcmVmZXJlbmNlIHByb3ZpZGVkIGhhcyBub3QgYW55IGxpc3RlbmVyIHJlZ2lzdGVyZWQuXCIpO2RlbGV0ZSB0aGlzW1wiOjpsaXN0ZW5lcnNcIl1bdF19LGUucHJvdG90eXBlLmRpc21pc3NBbGw9ZnVuY3Rpb24oKXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXNbXCI6Omxpc3RlbmVyc1wiXSxcIipcIikpdGhyb3cgbmV3IEVycm9yKFwibGlzdGVuYWJsZSBkYXRhIGhhcyBub3QgYW55IGdsb2JhbCBsaXN0ZW5lciByZWdpc3RlcmVkLlwiKTtkZWxldGUgdGhpc1tcIjo6bGlzdGVuZXJzXCJdW1wiKlwiXX0sZS5wcm90b3R5cGUuY29udGFpbnM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMucmVmcygpLmluY2x1ZGVzKHQpfSxlLnByb3RvdHlwZS5yZWZzPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPWZ1bmN0aW9uKHIpe2Zvcih2YXIgbj1bXSxzPU9iamVjdC5rZXlzKHIpLG89cy5sZW5ndGgsaT0wO2k8bztpKyspe3ZhciBsPXNbaV07aWYoIWwuc3RhcnRzV2l0aChcIjo6XCIpKXt2YXIgYT1yW2xdO2lmKG4ucHVzaChbbF0pLFwib2JqZWN0XCI9PXR5cGVvZiBhJiZudWxsIT09YSlmb3IodmFyIGg9ZShhKSxwPWgubGVuZ3RoLHU9MDt1PHA7dSsrKW4ucHVzaCh0KFtsXSxoW3VdKSl9fXJldHVybiBufSxyPVtdLG49ZSh0aGlzKSxzPW4ubGVuZ3RoLG89MDtvPHM7bysrKXIucHVzaChuW29dLmpvaW4oXCIuXCIpKTtyZXR1cm4gcn0sZS5wcm90b3R5cGUuX2hhbmRsZXI9ZnVuY3Rpb24odCxlLHIpe09iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzW1wiOjpsaXN0ZW5lcnNcIl0sdCkmJigwLHRoaXNbXCI6Omxpc3RlbmVyc1wiXVt0XSkoZSxyKTtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpc1tcIjo6bGlzdGVuZXJzXCJdLFwiKlwiKSYmKDAsdGhpc1tcIjo6bGlzdGVuZXJzXCJdW1wiKlwiXSkoZSxyLHQpfSxlLnByb3RvdHlwZS5fb2JzZXJ2YWJsZT1mdW5jdGlvbigpe3ZhciBlPXRoaXMscj1mdW5jdGlvbihuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49W10pLHtnZXQ6ZnVuY3Rpb24oZSxzLG8pe3RyeXtpZihzLnN0YXJ0c1dpdGgoXCI6OlwiKSl0aHJvdyBudWxsO3JldHVybiBuZXcgUHJveHkoZVtzXSxyKHQobixbc10pKSl9Y2F0Y2godCl7cmV0dXJuIFJlZmxlY3QuZ2V0KGUscyxvKX19LGRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKHIscyxvKXt2YXIgaT10KG4sW3NdKS5qb2luKFwiLlwiKSxsPW8udmFsdWUsYT1yW3NdLGg9UmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShyLHMsbyk7cmV0dXJuIGUuX2hhbmRsZXIuY2FsbChlLGksbCxhKSxofX19O3JldHVybiBuZXcgUHJveHkoZSxyKCkpfSxlfSgpO2V4cG9ydHMuZGVmYXVsdD1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHQ9ZnVuY3Rpb24odCl7cmV0dXJuXCJcXHgzYyEtLVwiK3QrXCItLVxceDNlXCJ9LGU9L1xccyhcXFMrKVxcPVtcXFwiXFwnXShbXlxcXCJdKikkLyxzPS9eKFteXFxcIl0qKVtcXFwifFxcJ11bXFxzfFxcPl0vLHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiByKHQsZSl7dm9pZCAwPT09ZSYmKGU9W10pLHRoaXMuc3RyaW5ncz10LHRoaXMuc2xvdHM9W10sdGhpcy5wcmVwYXJlKGUpfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoci5wcm90b3R5cGUsXCJodG1sXCIse2dldDpmdW5jdGlvbigpe2Zvcih2YXIgZT1cIlwiLHM9dGhpcy5zdHJpbmdzLmxlbmd0aC0xLHI9MDtyPHM7cisrKXt2YXIgbj10aGlzLnNsb3RzW3JdLGk9bi5hdHRyLGw9bi52YWx1ZTtlKz10aGlzLnN0cmluZ3Nbcl0rbCxudWxsPT09aSYmKGUrPXQoXCItXCIpKX1yZXR1cm4gZSt0aGlzLnN0cmluZ3Nbc119LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksci5wcm90b3R5cGUucHJlcGFyZT1mdW5jdGlvbihyKXtmb3IodmFyIG49MCxpPXRoaXMuc3RyaW5ncy5sZW5ndGgtMSxsPTA7bDxpO2wrKyl7dmFyIG89dGhpcy5zdHJpbmdzW2xdLGE9cltsXSx1PWUuZXhlYyhvKTtpZihudWxsIT09dSl7dmFyIGg9by5sYXN0SW5kZXhPZihcIjxcIik7aWYoLTEhPWgmJm4rKywwPT09aCl0aGlzLnN0cmluZ3NbbF09dChuKStvO2Vsc2UgaWYoaD4wKXt2YXIgYz1vLnN1YnN0cmluZygwLGgtMSkscD1vLnN1YnN0cmluZyhoKTt0aGlzLnN0cmluZ3NbbF09Yyt0KG4pK3B9dmFyIGc9dVsxXSxkPXVbMl0sZj10aGlzLnN0cmluZ3NbbF0ubGVuZ3RoLWQubGVuZ3RoO3RoaXMuc3RyaW5nc1tsXT10aGlzLnN0cmluZ3NbbF0uc2xpY2UoMCxmKTtmb3IodmFyIHY9XCJcIixtPXRoaXMuc3RyaW5nc1tsKzFdLHg9cy5leGVjKG0pO251bGw9PT14Oyl2Kz1tK3JbbCsxXSx0aGlzLnN0cmluZ3Muc3BsaWNlKGwrMSwxKSxyLnNwbGljZShsKzEsMSksaS0tLG09dGhpcy5zdHJpbmdzW2wrMV0seD1zLmV4ZWMobSk7dmFyIE49eFsxXTt0aGlzLnN0cmluZ3NbbCsxXT1tLnNsaWNlKE4ubGVuZ3RoKSx0aGlzLnNsb3RzLnB1c2goe3Nsb3RJbmRleDpuLGF0dHI6Zyx2YWx1ZTpkK2ErditOfSl9ZWxzZSBuKyssdGhpcy5zdHJpbmdzW2xdPW8rdChuKSx0aGlzLnNsb3RzLnB1c2goe3Nsb3RJbmRleDpuLGF0dHI6bnVsbCx2YWx1ZTphfSl9fSxyfSgpLG49ZnVuY3Rpb24odCl7dmFyIGU9dC5ub2RlVHlwZSxzPXQubm9kZVZhbHVlO3JldHVybiBlPT09Tm9kZS5DT01NRU5UX05PREUmJnBhcnNlSW50KHMpP05vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVDpOb2RlRmlsdGVyLkZJTFRFUl9SRUpFQ1R9LGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7dGhpcy50ZW1wbGF0ZT10LHRoaXMuY29udGFpbmVyPWV9cmV0dXJuIHQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIodGhpcy5jb250YWluZXIsTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQse2FjY2VwdE5vZGU6bn0sITEpLGU9dC5uZXh0Tm9kZSgpO2lmKG51bGwhPT1lKWZvcig7ZTspe3ZhciBzPWUubm9kZVZhbHVlLHI9cGFyc2VJbnQocyk7dGhpcy5jb21taXROb2RlKGUubmV4dFNpYmxpbmcsciksZT10Lm5leHROb2RlKCl9ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCh0aGlzLnRlbXBsYXRlLmh0bWwpO3RoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGkpfX0sdC5wcm90b3R5cGUuY29tbWl0Tm9kZT1mdW5jdGlvbih0LGUpe2Zvcih2YXIgcz10aGlzLnRlbXBsYXRlLnNsb3RzLmxlbmd0aCxyPTA7cjxzO3IrKyl7aWYodGhpcy50ZW1wbGF0ZS5zbG90c1tyXS5zbG90SW5kZXg9PT1lKXt2YXIgbj10aGlzLnRlbXBsYXRlLnNsb3RzW3JdLGk9bi5hdHRyLGw9bi52YWx1ZTtpZihudWxsIT09aSl0LmdldEF0dHJpYnV0ZShpKSE9PWwmJnQuc2V0QXR0cmlidXRlKGksbCk7ZWxzZSB0Lm5vZGVWYWx1ZSE9bCYmKHQubm9kZVZhbHVlPWwpfX19LHR9KCk7ZXhwb3J0cy5UZW1wbGF0ZT1yLGV4cG9ydHMuaHRtbD1mdW5jdGlvbih0KXtmb3IodmFyIGU9W10scz0xO3M8YXJndW1lbnRzLmxlbmd0aDtzKyspZVtzLTFdPWFyZ3VtZW50c1tzXTtyZXR1cm4gbmV3IHIodC5yYXcuc2xpY2UoMCksZSl9LGV4cG9ydHMucmVuZGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG5ldyBpKHQsZSkucmVuZGVyKCl9O1xuIixudWxsXSwibmFtZXMiOlsicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7Ozs7QUNmMzJELE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxH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
