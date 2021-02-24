'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
function t(t,e){for(var r=0,n=e.length,s=t.length;r<n;r++,s++)t[s]=e[r];return t}var e=function(){function e(t){return this["::listeners"]={},Object.assign(this,t),this._observable()}return e.prototype.listen=function(t,e){this["::listeners"][t]=e;},e.prototype.listenAll=function(t){this["::listeners"]["*"]=t;},e.prototype.dismiss=function(t){if(!Object.prototype.hasOwnProperty.call(this["::listeners"],t))throw new Error("the reference provided has not any listener registered.");delete this["::listeners"][t];},e.prototype.dismissAll=function(){if(!Object.prototype.hasOwnProperty.call(this["::listeners"],"*"))throw new Error("listenable data has not any global listener registered.");delete this["::listeners"]["*"];},e.prototype.contains=function(t){return this.refs().includes(t)},e.prototype.refs=function(){for(var e=function(r){for(var n=[],s=Object.keys(r),o=s.length,i=0;i<o;i++){var l=s[i];if(!l.startsWith("::")){var h=r[l];if(n.push([l]),"object"==typeof h&&null!==h)for(var a=e(h),p=a.length,u=0;u<p;u++)n.push(t([l],a[u]));}}return n},r=[],n=e(this),s=n.length,o=0;o<s;o++)r.push(n[o].join("."));return r},e.prototype._handler=function(t,e,r){Object.prototype.hasOwnProperty.call(this["::listeners"],t)&&(0, this["::listeners"][t])(e,r);Object.prototype.hasOwnProperty.call(this["::listeners"],"*")&&(0, this["::listeners"]["*"])(e,r,t);},e.prototype._observable=function(){var e=this,r=function(n){return void 0===n&&(n=[]),{get:function(e,s,o){try{if(s.startsWith("::"))throw null;return new Proxy(e[s],r(t(t([],n),[s])))}catch(t){return Reflect.get(e,s,o)}},defineProperty:function(r,s,o){var i=t(t([],n),[s]).join("."),l=o.value,h=r[s],a=Reflect.defineProperty(r,s,o);return e._handler.call(e,i,l,h),a}}};return new Proxy(e,r())},e}();var _default=e;

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var template_cjs = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});var t=function(t){return "\x3c!--"+t+"--\x3e"},e=/\s(\S+)\=[\"\']([^\"]*)$/,s=/^([^\"]*)[\"|\'][\s|\>]/,r=function(){function r(t,e){void 0===e&&(e=[]),this.strings=t,this.slots=[],this.prepare(e);}return Object.defineProperty(r.prototype,"html",{get:function(){for(var e="",s=this.strings.length-1,r=0;r<s;r++){var n=this.slots[r],i=n.attr,o=n.value;e+=this.strings[r]+o,null===i&&(e+=t("-"));}return e+this.strings[s]},enumerable:!1,configurable:!0}),r.prototype.prepare=function(r){for(var n=0,i=this.strings.length-1,o=0;o<i;o++){var l=this.strings[o],a=r[o],u=e.exec(l);if(null!==u){var h=l.lastIndexOf("<");if(-1!=h&&n++,0===h)this.strings[o]=t(n)+l;else if(h>0){var c=l.substring(0,h-1),p=l.substring(h);this.strings[o]=c+t(n)+p;}var d=u[1],g=u[2],f=this.strings[o].length-g.length;this.strings[o]=this.strings[o].slice(0,f);for(var v="",m=this.strings[o+1],x=s.exec(m);null===x;)v+=m+r[o+1],this.strings.splice(o+1,1),r.splice(o+1,1),i--,m=this.strings[o+1],x=s.exec(m);var N=x[1];this.strings[o+1]=m.slice(N.length),this.slots.push({slotIndex:n,attr:d,value:g+a+v+N});}else n++,this.strings[o]=l+t(n),this.slots.push({slotIndex:n,attr:null,value:a});}},r}(),n=function(t){var e=t.nodeType,s=t.nodeValue;return e===Node.COMMENT_NODE&&parseInt(s)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},i=function(){function t(t,e){this.template=t,this.container=e;}return t.prototype.render=function(){var t=document.createNodeIterator(this.container,NodeFilter.SHOW_COMMENT,{acceptNode:n}),e=t.nextNode();if(null!==e)for(;e;){var s=e.nodeValue,r=parseInt(s);this.commitNode(e.nextSibling,r),e=t.nextNode();}else {var i=document.createRange().createContextualFragment(this.template.html);this.container.appendChild(i);}},t.prototype.commitNode=function(t,e){for(var s=this.template.slots.length,r=0;r<s;r++){if(this.template.slots[r].slotIndex===e){var n=this.template.slots[r],i=n.attr,o=n.value;if(null!==i)t.getAttribute(i)!==o&&t.setAttribute(i,o);else t.nodeValue!==o&&(t.nodeType!==Node.COMMENT_NODE?t.nodeValue=o:t.parentNode.insertBefore(document.createTextNode(o),t));}}},t}();exports.Template=r,exports.html=function(t){for(var e=[],s=1;s<arguments.length;s++)e[s-1]=arguments[s];return new r(t.raw.slice(0),e)},exports.render=function(t,e){return new i(t,e).render()};
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
    constructor() {
        super();
        /**
         * Creates an instance of {@link Component}, attaching the shadowRoot if it
         * is not already attached, and initializing the compontent properties for
         * {@link Component.data} and {@link Component.attributes}.
         *
         * @type {typeof Component}
         * @memberof Component
         */
        this.open = true;
        // Check if shadowRoot is created and attatch it.
        if (!this.shadowRoot)
            this.attachShadow({ mode: this.open ? "open" : "closed" });
        // Init componentand fire 'created' function.
        this.initData();
        this.initAttrs();
        this.fireMethod("created");
    }
    /**
     * styles function returns the component style definition as string. The
     * definition must be CSS code and can contain properties like
     * {@link Component.data} and {@link Component.attrs} but the styles are not
     * updates-reactive, so if you need to change the appearance of the
     * component dynamically use {@link Component.attrs} to update the element
     * class.
     *
     * @memberof Component
     */
    styles() { }
    ;
    /**
     * created method is called when the component initialization is finished
     * and data containers are created and initialized with provided definitions.
     *
     * @memberof Component
     */
    created() { }
    ;
    /**
     * rendered method is called when the component renderization (template and
     * styles) is finished and the listeners are setted.
     *
     * @memberof Component
     */
    rendered() { }
    ;
    /**
     * destroyed method is called when the component is detached and the
     * listeners are dismissed.
     *
     * @memberof Component
     */
    destroyed() { }
    ;
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
     * fireMethod tries to fire a component method if it is defined in the
     * custom component definition, aplying the current instance and passing the
     * rest of the arguments provided as parameters.
     *
     * @private
     * @param {string} name Method name as string.
     * @param {...Array<any>} args Arguments to the method called.
     * @return {*} The result of executing the function.
     * @memberof Component
     */
    fireMethod(name, ...args) {
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
        const tempData = this.fireMethod("data");
        if (tempData)
            this.data = new _default(tempData);
        else
            this.data = new _default({});
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
            const { length } = this.constructor.attrs;
            for (let i = 0; i < length; i++) {
                const attr = this.constructor.attrs[i];
                tempAttrs[attr.name] = attr.value;
                if (!this.hasAttribute(attr.name))
                    this.setAttribute(attr.name, attr.value);
            }
            this.attrs = new _default(tempAttrs);
        }
        else
            this.attrs = new _default({});
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
            const { length } = attributes;
            for (let i = 0; i < length; i++) {
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
     * {@link Component.fireMethod} function, and fires the render template
     * function providing the current shadowRoot as target.
     *
     * @private
     * @memberof Component
     */
    renderTemplate() {
        // Get template computed definition and call to render function with 
        // the shadowRoot as target.
        const template = this.fireMethod("template");
        if (template)
            template_cjs.render(template, this.shadowRoot);
    }
    /**
     * renderStyles method gets the computed styles from the component
     * definition calling "styles" method using {@link Component.fireMethod}
     * function. If the shadowRoot has not a style element, it is created and
     * the styles definition is appended to it then.
     *
     * @private
     * @memberof Component
     */
    renderStyles() {
        // If the component has a defined styles, get the definition.
        const styles = this.fireMethod("styles");
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
        this.fireMethod("rendered");
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
        this.fireMethod("destroyed");
    }
    /**
     * attributeChangedCallback method handles any attribute value update. It
     * updates the current {@link Component.attrs} definition and fires the
     * template render process call {@link Component.renderTemplate} method.
     *
     * @param {string} ref The attribute updated name.
     * @param {*} old The previous value of the attribute.
     * @param {*} val The attribute value to update.
     * @override
     * @memberof Component
     */
    attributeChangedCallback(ref, old, val) {
        // Catch the attribute component change and updates the component
        // attrs value, then re-render the template.
        if (val === old && val === this.attrs[ref])
            return;
        this.attrs[ref] = val;
        this.renderTemplate();
    }
    /**
     * attach method defines the custom element by the definition provided as
     * argument associated to the tag provided too.
     *
     * @static
     * @param {string} tag
     * @param {typeof HTMLElement} definition
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmNqcy5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL0BlbGVtZW50dW1qcy9saXN0ZW5hYmxlLWRhdGEvZGlzdC9saXN0ZW5hYmxlLWRhdGEuY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbGVtZW50dW1qcy90ZW1wbGF0ZS9kaXN0L3RlbXBsYXRlLmNqcy5qcyIsIi4uL3NyYy9saWIvY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5mdW5jdGlvbiB0KHQsZSl7Zm9yKHZhciByPTAsbj1lLmxlbmd0aCxzPXQubGVuZ3RoO3I8bjtyKysscysrKXRbc109ZVtyXTtyZXR1cm4gdH1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7cmV0dXJuIHRoaXNbXCI6Omxpc3RlbmVyc1wiXT17fSxPYmplY3QuYXNzaWduKHRoaXMsdCksdGhpcy5fb2JzZXJ2YWJsZSgpfXJldHVybiBlLnByb3RvdHlwZS5saXN0ZW49ZnVuY3Rpb24odCxlKXt0aGlzW1wiOjpsaXN0ZW5lcnNcIl1bdF09ZX0sZS5wcm90b3R5cGUubGlzdGVuQWxsPWZ1bmN0aW9uKHQpe3RoaXNbXCI6Omxpc3RlbmVyc1wiXVtcIipcIl09dH0sZS5wcm90b3R5cGUuZGlzbWlzcz1mdW5jdGlvbih0KXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXNbXCI6Omxpc3RlbmVyc1wiXSx0KSl0aHJvdyBuZXcgRXJyb3IoXCJ0aGUgcmVmZXJlbmNlIHByb3ZpZGVkIGhhcyBub3QgYW55IGxpc3RlbmVyIHJlZ2lzdGVyZWQuXCIpO2RlbGV0ZSB0aGlzW1wiOjpsaXN0ZW5lcnNcIl1bdF19LGUucHJvdG90eXBlLmRpc21pc3NBbGw9ZnVuY3Rpb24oKXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXNbXCI6Omxpc3RlbmVyc1wiXSxcIipcIikpdGhyb3cgbmV3IEVycm9yKFwibGlzdGVuYWJsZSBkYXRhIGhhcyBub3QgYW55IGdsb2JhbCBsaXN0ZW5lciByZWdpc3RlcmVkLlwiKTtkZWxldGUgdGhpc1tcIjo6bGlzdGVuZXJzXCJdW1wiKlwiXX0sZS5wcm90b3R5cGUuY29udGFpbnM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMucmVmcygpLmluY2x1ZGVzKHQpfSxlLnByb3RvdHlwZS5yZWZzPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPWZ1bmN0aW9uKHIpe2Zvcih2YXIgbj1bXSxzPU9iamVjdC5rZXlzKHIpLG89cy5sZW5ndGgsaT0wO2k8bztpKyspe3ZhciBsPXNbaV07aWYoIWwuc3RhcnRzV2l0aChcIjo6XCIpKXt2YXIgaD1yW2xdO2lmKG4ucHVzaChbbF0pLFwib2JqZWN0XCI9PXR5cGVvZiBoJiZudWxsIT09aClmb3IodmFyIGE9ZShoKSxwPWEubGVuZ3RoLHU9MDt1PHA7dSsrKW4ucHVzaCh0KFtsXSxhW3VdKSl9fXJldHVybiBufSxyPVtdLG49ZSh0aGlzKSxzPW4ubGVuZ3RoLG89MDtvPHM7bysrKXIucHVzaChuW29dLmpvaW4oXCIuXCIpKTtyZXR1cm4gcn0sZS5wcm90b3R5cGUuX2hhbmRsZXI9ZnVuY3Rpb24odCxlLHIpe09iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzW1wiOjpsaXN0ZW5lcnNcIl0sdCkmJigwLHRoaXNbXCI6Omxpc3RlbmVyc1wiXVt0XSkoZSxyKTtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpc1tcIjo6bGlzdGVuZXJzXCJdLFwiKlwiKSYmKDAsdGhpc1tcIjo6bGlzdGVuZXJzXCJdW1wiKlwiXSkoZSxyLHQpfSxlLnByb3RvdHlwZS5fb2JzZXJ2YWJsZT1mdW5jdGlvbigpe3ZhciBlPXRoaXMscj1mdW5jdGlvbihuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49W10pLHtnZXQ6ZnVuY3Rpb24oZSxzLG8pe3RyeXtpZihzLnN0YXJ0c1dpdGgoXCI6OlwiKSl0aHJvdyBudWxsO3JldHVybiBuZXcgUHJveHkoZVtzXSxyKHQodChbXSxuKSxbc10pKSl9Y2F0Y2godCl7cmV0dXJuIFJlZmxlY3QuZ2V0KGUscyxvKX19LGRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKHIscyxvKXt2YXIgaT10KHQoW10sbiksW3NdKS5qb2luKFwiLlwiKSxsPW8udmFsdWUsaD1yW3NdLGE9UmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShyLHMsbyk7cmV0dXJuIGUuX2hhbmRsZXIuY2FsbChlLGksbCxoKSxhfX19O3JldHVybiBuZXcgUHJveHkoZSxyKCkpfSxlfSgpO2V4cG9ydHMuZGVmYXVsdD1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHQ9ZnVuY3Rpb24odCl7cmV0dXJuXCJcXHgzYyEtLVwiK3QrXCItLVxceDNlXCJ9LGU9L1xccyhcXFMrKVxcPVtcXFwiXFwnXShbXlxcXCJdKikkLyxzPS9eKFteXFxcIl0qKVtcXFwifFxcJ11bXFxzfFxcPl0vLHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiByKHQsZSl7dm9pZCAwPT09ZSYmKGU9W10pLHRoaXMuc3RyaW5ncz10LHRoaXMuc2xvdHM9W10sdGhpcy5wcmVwYXJlKGUpfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoci5wcm90b3R5cGUsXCJodG1sXCIse2dldDpmdW5jdGlvbigpe2Zvcih2YXIgZT1cIlwiLHM9dGhpcy5zdHJpbmdzLmxlbmd0aC0xLHI9MDtyPHM7cisrKXt2YXIgbj10aGlzLnNsb3RzW3JdLGk9bi5hdHRyLG89bi52YWx1ZTtlKz10aGlzLnN0cmluZ3Nbcl0rbyxudWxsPT09aSYmKGUrPXQoXCItXCIpKX1yZXR1cm4gZSt0aGlzLnN0cmluZ3Nbc119LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksci5wcm90b3R5cGUucHJlcGFyZT1mdW5jdGlvbihyKXtmb3IodmFyIG49MCxpPXRoaXMuc3RyaW5ncy5sZW5ndGgtMSxvPTA7bzxpO28rKyl7dmFyIGw9dGhpcy5zdHJpbmdzW29dLGE9cltvXSx1PWUuZXhlYyhsKTtpZihudWxsIT09dSl7dmFyIGg9bC5sYXN0SW5kZXhPZihcIjxcIik7aWYoLTEhPWgmJm4rKywwPT09aCl0aGlzLnN0cmluZ3Nbb109dChuKStsO2Vsc2UgaWYoaD4wKXt2YXIgYz1sLnN1YnN0cmluZygwLGgtMSkscD1sLnN1YnN0cmluZyhoKTt0aGlzLnN0cmluZ3Nbb109Yyt0KG4pK3B9dmFyIGQ9dVsxXSxnPXVbMl0sZj10aGlzLnN0cmluZ3Nbb10ubGVuZ3RoLWcubGVuZ3RoO3RoaXMuc3RyaW5nc1tvXT10aGlzLnN0cmluZ3Nbb10uc2xpY2UoMCxmKTtmb3IodmFyIHY9XCJcIixtPXRoaXMuc3RyaW5nc1tvKzFdLHg9cy5leGVjKG0pO251bGw9PT14Oyl2Kz1tK3JbbysxXSx0aGlzLnN0cmluZ3Muc3BsaWNlKG8rMSwxKSxyLnNwbGljZShvKzEsMSksaS0tLG09dGhpcy5zdHJpbmdzW28rMV0seD1zLmV4ZWMobSk7dmFyIE49eFsxXTt0aGlzLnN0cmluZ3NbbysxXT1tLnNsaWNlKE4ubGVuZ3RoKSx0aGlzLnNsb3RzLnB1c2goe3Nsb3RJbmRleDpuLGF0dHI6ZCx2YWx1ZTpnK2ErditOfSl9ZWxzZSBuKyssdGhpcy5zdHJpbmdzW29dPWwrdChuKSx0aGlzLnNsb3RzLnB1c2goe3Nsb3RJbmRleDpuLGF0dHI6bnVsbCx2YWx1ZTphfSl9fSxyfSgpLG49ZnVuY3Rpb24odCl7dmFyIGU9dC5ub2RlVHlwZSxzPXQubm9kZVZhbHVlO3JldHVybiBlPT09Tm9kZS5DT01NRU5UX05PREUmJnBhcnNlSW50KHMpP05vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVDpOb2RlRmlsdGVyLkZJTFRFUl9SRUpFQ1R9LGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7dGhpcy50ZW1wbGF0ZT10LHRoaXMuY29udGFpbmVyPWV9cmV0dXJuIHQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcih0aGlzLmNvbnRhaW5lcixOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCx7YWNjZXB0Tm9kZTpufSksZT10Lm5leHROb2RlKCk7aWYobnVsbCE9PWUpZm9yKDtlOyl7dmFyIHM9ZS5ub2RlVmFsdWUscj1wYXJzZUludChzKTt0aGlzLmNvbW1pdE5vZGUoZS5uZXh0U2libGluZyxyKSxlPXQubmV4dE5vZGUoKX1lbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHRoaXMudGVtcGxhdGUuaHRtbCk7dGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoaSl9fSx0LnByb3RvdHlwZS5jb21taXROb2RlPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBzPXRoaXMudGVtcGxhdGUuc2xvdHMubGVuZ3RoLHI9MDtyPHM7cisrKXtpZih0aGlzLnRlbXBsYXRlLnNsb3RzW3JdLnNsb3RJbmRleD09PWUpe3ZhciBuPXRoaXMudGVtcGxhdGUuc2xvdHNbcl0saT1uLmF0dHIsbz1uLnZhbHVlO2lmKG51bGwhPT1pKXQuZ2V0QXR0cmlidXRlKGkpIT09byYmdC5zZXRBdHRyaWJ1dGUoaSxvKTtlbHNlIHQubm9kZVZhbHVlIT09byYmKHQubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERT90Lm5vZGVWYWx1ZT1vOnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobyksdCkpfX19LHR9KCk7ZXhwb3J0cy5UZW1wbGF0ZT1yLGV4cG9ydHMuaHRtbD1mdW5jdGlvbih0KXtmb3IodmFyIGU9W10scz0xO3M8YXJndW1lbnRzLmxlbmd0aDtzKyspZVtzLTFdPWFyZ3VtZW50c1tzXTtyZXR1cm4gbmV3IHIodC5yYXcuc2xpY2UoMCksZSl9LGV4cG9ydHMucmVuZGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG5ldyBpKHQsZSkucmVuZGVyKCl9O1xuIixudWxsXSwibmFtZXMiOlsiRGF0YSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUF3RCxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQWUsQ0FBQyxDQUFDOzs7Ozs7OztBQ2ZqeEQsTUFBTSxDQUFDLGNBQWMsU0FBUyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFFLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxhQUFhLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJ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
