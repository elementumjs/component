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

var html = template_cjs.html;
export { Component, html };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVzbS5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL0BlbGVtZW50dW1qcy9saXN0ZW5hYmxlLWRhdGEvZGlzdC9saXN0ZW5hYmxlLWRhdGEuY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbGVtZW50dW1qcy90ZW1wbGF0ZS9kaXN0L3RlbXBsYXRlLmNqcy5qcyIsIi4uL3NyYy9saWIvY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5mdW5jdGlvbiB0KHQsZSl7Zm9yKHZhciByPTAsbj1lLmxlbmd0aCxzPXQubGVuZ3RoO3I8bjtyKysscysrKXRbc109ZVtyXTtyZXR1cm4gdH1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7cmV0dXJuIHRoaXNbXCI6Omxpc3RlbmVyc1wiXT17fSxPYmplY3QuYXNzaWduKHRoaXMsdCksdGhpcy5fb2JzZXJ2YWJsZSgpfXJldHVybiBlLnByb3RvdHlwZS5saXN0ZW49ZnVuY3Rpb24odCxlKXt0aGlzW1wiOjpsaXN0ZW5lcnNcIl1bdF09ZX0sZS5wcm90b3R5cGUubGlzdGVuQWxsPWZ1bmN0aW9uKHQpe3RoaXNbXCI6Omxpc3RlbmVyc1wiXVtcIipcIl09dH0sZS5wcm90b3R5cGUuZGlzbWlzcz1mdW5jdGlvbih0KXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXNbXCI6Omxpc3RlbmVyc1wiXSx0KSl0aHJvdyBuZXcgRXJyb3IoXCJ0aGUgcmVmZXJlbmNlIHByb3ZpZGVkIGhhcyBub3QgYW55IGxpc3RlbmVyIHJlZ2lzdGVyZWQuXCIpO2RlbGV0ZSB0aGlzW1wiOjpsaXN0ZW5lcnNcIl1bdF19LGUucHJvdG90eXBlLmRpc21pc3NBbGw9ZnVuY3Rpb24oKXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXNbXCI6Omxpc3RlbmVyc1wiXSxcIipcIikpdGhyb3cgbmV3IEVycm9yKFwibGlzdGVuYWJsZSBkYXRhIGhhcyBub3QgYW55IGdsb2JhbCBsaXN0ZW5lciByZWdpc3RlcmVkLlwiKTtkZWxldGUgdGhpc1tcIjo6bGlzdGVuZXJzXCJdW1wiKlwiXX0sZS5wcm90b3R5cGUuY29udGFpbnM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMucmVmcygpLmluY2x1ZGVzKHQpfSxlLnByb3RvdHlwZS5yZWZzPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPWZ1bmN0aW9uKHIpe2Zvcih2YXIgbj1bXSxzPU9iamVjdC5rZXlzKHIpLG89cy5sZW5ndGgsaT0wO2k8bztpKyspe3ZhciBsPXNbaV07aWYoIWwuc3RhcnRzV2l0aChcIjo6XCIpKXt2YXIgaD1yW2xdO2lmKG4ucHVzaChbbF0pLFwib2JqZWN0XCI9PXR5cGVvZiBoJiZudWxsIT09aClmb3IodmFyIGE9ZShoKSxwPWEubGVuZ3RoLHU9MDt1PHA7dSsrKW4ucHVzaCh0KFtsXSxhW3VdKSl9fXJldHVybiBufSxyPVtdLG49ZSh0aGlzKSxzPW4ubGVuZ3RoLG89MDtvPHM7bysrKXIucHVzaChuW29dLmpvaW4oXCIuXCIpKTtyZXR1cm4gcn0sZS5wcm90b3R5cGUuX2hhbmRsZXI9ZnVuY3Rpb24odCxlLHIpe09iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzW1wiOjpsaXN0ZW5lcnNcIl0sdCkmJigwLHRoaXNbXCI6Omxpc3RlbmVyc1wiXVt0XSkoZSxyKTtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpc1tcIjo6bGlzdGVuZXJzXCJdLFwiKlwiKSYmKDAsdGhpc1tcIjo6bGlzdGVuZXJzXCJdW1wiKlwiXSkoZSxyLHQpfSxlLnByb3RvdHlwZS5fb2JzZXJ2YWJsZT1mdW5jdGlvbigpe3ZhciBlPXRoaXMscj1mdW5jdGlvbihuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49W10pLHtnZXQ6ZnVuY3Rpb24oZSxzLG8pe3RyeXtpZihzLnN0YXJ0c1dpdGgoXCI6OlwiKSl0aHJvdyBudWxsO3JldHVybiBuZXcgUHJveHkoZVtzXSxyKHQodChbXSxuKSxbc10pKSl9Y2F0Y2godCl7cmV0dXJuIFJlZmxlY3QuZ2V0KGUscyxvKX19LGRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKHIscyxvKXt2YXIgaT10KHQoW10sbiksW3NdKS5qb2luKFwiLlwiKSxsPW8udmFsdWUsaD1yW3NdLGE9UmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShyLHMsbyk7cmV0dXJuIGUuX2hhbmRsZXIuY2FsbChlLGksbCxoKSxhfX19O3JldHVybiBuZXcgUHJveHkoZSxyKCkpfSxlfSgpO2V4cG9ydHMuZGVmYXVsdD1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHQ9ZnVuY3Rpb24odCl7cmV0dXJuXCJcXHgzYyEtLVwiK3QrXCItLVxceDNlXCJ9LGU9L1xccyhcXFMrKVxcPVtcXFwiXFwnXShbXlxcXCJdKikkLyxzPS9eKFteXFxcIl0qKVtcXFwifFxcJ11bXFxzfFxcPl0vLHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiByKHQsZSl7dm9pZCAwPT09ZSYmKGU9W10pLHRoaXMuc3RyaW5ncz10LHRoaXMuc2xvdHM9W10sdGhpcy5wcmVwYXJlKGUpfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoci5wcm90b3R5cGUsXCJodG1sXCIse2dldDpmdW5jdGlvbigpe2Zvcih2YXIgZT1cIlwiLHM9dGhpcy5zdHJpbmdzLmxlbmd0aC0xLHI9MDtyPHM7cisrKXt2YXIgbj10aGlzLnNsb3RzW3JdLGk9bi5hdHRyLG89bi52YWx1ZTtlKz10aGlzLnN0cmluZ3Nbcl0rbyxudWxsPT09aSYmKGUrPXQoXCItXCIpKX1yZXR1cm4gZSt0aGlzLnN0cmluZ3Nbc119LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksci5wcm90b3R5cGUucHJlcGFyZT1mdW5jdGlvbihyKXtmb3IodmFyIG49MCxpPXRoaXMuc3RyaW5ncy5sZW5ndGgtMSxvPTA7bzxpO28rKyl7dmFyIGw9dGhpcy5zdHJpbmdzW29dLGE9cltvXSx1PWUuZXhlYyhsKTtpZihudWxsIT09dSl7dmFyIGg9bC5sYXN0SW5kZXhPZihcIjxcIik7aWYoLTEhPWgmJm4rKywwPT09aCl0aGlzLnN0cmluZ3Nbb109dChuKStsO2Vsc2UgaWYoaD4wKXt2YXIgYz1sLnN1YnN0cmluZygwLGgtMSkscD1sLnN1YnN0cmluZyhoKTt0aGlzLnN0cmluZ3Nbb109Yyt0KG4pK3B9dmFyIGQ9dVsxXSxnPXVbMl0sZj10aGlzLnN0cmluZ3Nbb10ubGVuZ3RoLWcubGVuZ3RoO3RoaXMuc3RyaW5nc1tvXT10aGlzLnN0cmluZ3Nbb10uc2xpY2UoMCxmKTtmb3IodmFyIHY9XCJcIixtPXRoaXMuc3RyaW5nc1tvKzFdLHg9cy5leGVjKG0pO251bGw9PT14Oyl2Kz1tK3JbbysxXSx0aGlzLnN0cmluZ3Muc3BsaWNlKG8rMSwxKSxyLnNwbGljZShvKzEsMSksaS0tLG09dGhpcy5zdHJpbmdzW28rMV0seD1zLmV4ZWMobSk7dmFyIE49eFsxXTt0aGlzLnN0cmluZ3NbbysxXT1tLnNsaWNlKE4ubGVuZ3RoKSx0aGlzLnNsb3RzLnB1c2goe3Nsb3RJbmRleDpuLGF0dHI6ZCx2YWx1ZTpnK2ErditOfSl9ZWxzZSBuKyssdGhpcy5zdHJpbmdzW29dPWwrdChuKSx0aGlzLnNsb3RzLnB1c2goe3Nsb3RJbmRleDpuLGF0dHI6bnVsbCx2YWx1ZTphfSl9fSxyfSgpLG49ZnVuY3Rpb24odCl7dmFyIGU9dC5ub2RlVHlwZSxzPXQubm9kZVZhbHVlO3JldHVybiBlPT09Tm9kZS5DT01NRU5UX05PREUmJnBhcnNlSW50KHMpP05vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVDpOb2RlRmlsdGVyLkZJTFRFUl9SRUpFQ1R9LGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7dGhpcy50ZW1wbGF0ZT10LHRoaXMuY29udGFpbmVyPWV9cmV0dXJuIHQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcih0aGlzLmNvbnRhaW5lcixOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCx7YWNjZXB0Tm9kZTpufSksZT10Lm5leHROb2RlKCk7aWYobnVsbCE9PWUpZm9yKDtlOyl7dmFyIHM9ZS5ub2RlVmFsdWUscj1wYXJzZUludChzKTt0aGlzLmNvbW1pdE5vZGUoZS5uZXh0U2libGluZyxyKSxlPXQubmV4dE5vZGUoKX1lbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHRoaXMudGVtcGxhdGUuaHRtbCk7dGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoaSl9fSx0LnByb3RvdHlwZS5jb21taXROb2RlPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBzPXRoaXMudGVtcGxhdGUuc2xvdHMubGVuZ3RoLHI9MDtyPHM7cisrKXtpZih0aGlzLnRlbXBsYXRlLnNsb3RzW3JdLnNsb3RJbmRleD09PWUpe3ZhciBuPXRoaXMudGVtcGxhdGUuc2xvdHNbcl0saT1uLmF0dHIsbz1uLnZhbHVlO2lmKG51bGwhPT1pKXQuZ2V0QXR0cmlidXRlKGkpIT09byYmdC5zZXRBdHRyaWJ1dGUoaSxvKTtlbHNlIHQubm9kZVZhbHVlIT09byYmKHQubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERT90Lm5vZGVWYWx1ZT1vOnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobyksdCkpfX19LHR9KCk7ZXhwb3J0cy5UZW1wbGF0ZT1yLGV4cG9ydHMuaHRtbD1mdW5jdGlvbih0KXtmb3IodmFyIGU9W10scz0xO3M8YXJndW1lbnRzLmxlbmd0aDtzKyspZVtzLTFdPWFyZ3VtZW50c1tzXTtyZXR1cm4gbmV3IHIodC5yYXcuc2xpY2UoMCksZSl9LGV4cG9ydHMucmVuZGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG5ldyBpKHQsZSkucmVuZGVyKCl9O1xuIixudWxsXSwibmFtZXMiOlsiRGF0YSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQXdELElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBZSxDQUFDLENBQUM7Ozs7Ozs7O0FDZmp4RCxNQUFNLENBQUMsY0FBYyxTQUFTLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGFBQWEsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUks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
