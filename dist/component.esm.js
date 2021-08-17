var listenableData_cjs = {};

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
function t$1(t,e){for(var r=0,n=e.length,s=t.length;r<n;r++,s++)t[s]=e[r];return t}Object.defineProperty(listenableData_cjs,"__esModule",{value:!0});var e$1=function(){function e(t){return this["::listeners"]={},Object.assign(this,t),this._observable()}return e.prototype.listen=function(t,e){this["::listeners"][t]=e;},e.prototype.listenAll=function(t){this["::listeners"]["*"]=t;},e.prototype.dismiss=function(t){if(!Object.prototype.hasOwnProperty.call(this["::listeners"],t))throw new Error("the reference provided has not any listener registered.");delete this["::listeners"][t];},e.prototype.dismissAll=function(){if(!Object.prototype.hasOwnProperty.call(this["::listeners"],"*"))throw new Error("listenable data has not any global listener registered.");delete this["::listeners"]["*"];},e.prototype.contains=function(t){return this.refs().includes(t)},e.prototype.refs=function(){for(var e=function(r){for(var n=[],s=Object.keys(r),o=s.length,i=0;i<o;i++){var l=s[i];if(!l.startsWith("::")){var h=r[l];if(n.push([l]),"object"==typeof h&&null!==h)for(var a=e(h),p=a.length,u=0;u<p;u++)n.push(t$1([l],a[u]));}}return n},r=[],n=e(this),s=n.length,o=0;o<s;o++)r.push(n[o].join("."));return r},e.prototype._handler=function(t,e,r){Object.prototype.hasOwnProperty.call(this["::listeners"],t)&&(0, this["::listeners"][t])(e,r);Object.prototype.hasOwnProperty.call(this["::listeners"],"*")&&(0, this["::listeners"]["*"])(e,r,t);},e.prototype._observable=function(){var e=this,r=function(n){return void 0===n&&(n=[]),{get:function(e,s,o){try{if(s.startsWith("::"))throw null;return new Proxy(e[s],r(t$1(t$1([],n),[s])))}catch(t){return Reflect.get(e,s,o)}},defineProperty:function(r,s,o){var i=t$1(t$1([],n),[s]).join("."),l=o.value,h=r[s],a=Reflect.defineProperty(r,s,o);return e._handler.call(e,i,l,h),a}}};return new Proxy(e,r())},e}();var _default = listenableData_cjs.default=e$1;

var template_cjs = {};

var render;
var html;
Object.defineProperty(template_cjs,"__esModule",{value:!0});var t=function(t){return "\x3c!--"+t+"--\x3e"},e=/\s(\S+)\=[\"\']([^\"]*)$/,n=/^([^\"]*)[\"|\'][\s|\>]/,r=function(){function r(t,e){void 0===e&&(e=[]),this.strings=t,this.slots=[],this.prepare(e);}return Object.defineProperty(r.prototype,"html",{get:function(){for(var e="",n=this.strings.length-1,r=0;r<n;r++){var s=this.slots[r],i=s.attr,o=s.value;e+=this.strings[r]+o,null===i&&(e+=t("-"));}return e+this.strings[n]},enumerable:!1,configurable:!0}),r.prototype.prepare=function(r){for(var s=0,i=this.strings.length-1,o=0;o<i;o++){var l=this.strings[o],a=r[o];if("function"==typeof a){var u=a.name;if(""===u){throw new Error('injected functions cannot be inlined.Please define the function outside and reference it by its name. Ex.: <button onclick="${fn}">')}a=u+"()";}var c=e.exec(l);if(null!==c){var h=l.lastIndexOf("<");if(-1!=h&&s++,0===h)this.strings[o]=t(s)+l;else if(h>0){var d=l.substring(0,h-1),f=l.substring(h);this.strings[o]=d+t(s)+f;}var p=c[1],g=c[2],v=this.strings[o].length-g.length;this.strings[o]=this.strings[o].slice(0,v);for(var m="",x=this.strings[o+1],N=n.exec(x);null===N;)m+=x+r[o+1],this.strings.splice(o+1,1),r.splice(o+1,1),i--,x=this.strings[o+1],N=n.exec(x);var b=N[1];this.strings[o+1]=x.slice(b.length),this.slots.push({slotIndex:s,attr:p,value:g+a+m+b});}else s++,this.strings[o]=l+t(s),this.slots.push({slotIndex:s,attr:null,value:a});}},r}(),s=function(t){var e=t.nodeType,n=t.nodeValue;return e===Node.COMMENT_NODE&&parseInt(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},i=function(){function t(t,e){this.template=t,this.container=e;}return t.prototype.render=function(){var t=document.createNodeIterator(this.container,NodeFilter.SHOW_COMMENT,{acceptNode:s}),e=t.nextNode();if(null!==e)for(;e;){var n=e.nodeValue,r=parseInt(n);this.commitNode(e.nextSibling,r),e=t.nextNode();}else {var i=document.createRange().createContextualFragment(this.template.html);this.container.appendChild(i);}},t.prototype.commitNode=function(t,e){for(var n=this.template.slots.length,r=0;r<n;r++){if(this.template.slots[r].slotIndex===e){var s=this.template.slots[r],i=s.attr,o=s.value;if(null!==i)t.getAttribute(i)!==o&&t.setAttribute(i,o);else t.nodeValue!==o&&(t.nodeType!==Node.COMMENT_NODE?t.nodeValue=o:t.parentNode.insertBefore(document.createTextNode(o),t));}}},t}();template_cjs.Template=r,html = template_cjs.html=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new r(t.raw.slice(0),e)},render = template_cjs.render=function(t,e){return new i(t,e).render()};

/** @private */
const funcNameDel = '(';
/** @private */
const eventPrefix = 'on-';
/**
 * Component class has the basic methods to control the component lifecycle,
 * mapping the properties and hot rende ring the component template on properties
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
            this.attachShadow({ mode: this.open ? 'open' : 'closed' });
        // Init componentand fire 'created' function.
        this.initData();
        this.initAttrs();
        this.fireMethod('created');
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
     * root getter returns the shadow root document from the current element.
     *
     * @readonly
     * @type {ShadowRoot}
     * @memberof Component
     */
    get root() {
        return this.shadowRoot;
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
    static get data() { return {}; }
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
            throw new Error('The method called does not exist.');
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
        try {
            const tempData = (this.constructor.hasOwnProperty('data') &&
                typeof this.constructor.data == 'object' &&
                this.constructor.data !== null) ? Object.assign({}, this.constructor.data) : {};
            this.data = new _default(tempData);
        }
        catch (_a) {
            this.data = new _default({});
        }
    }
    castAttr(from, to) {
        switch (typeof to) {
            case 'number':
                return Number(from);
            case 'boolean':
                const bool = from.toLowerCase();
                if (bool !== 'true' && bool !== 'false')
                    throw new Error('Boolean attributes must be \'true\' or \'false\'');
                return bool === 'true';
            case 'string':
                return from;
            default:
                return String(from);
        }
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
        // Get custom attributes first, then complete them with the attributes 
        // of the HTMLElement definition.
        const tempAttrs = (this.constructor.hasOwnProperty('attrs') &&
            typeof this.constructor.attrs == 'object' &&
            this.constructor.attrs !== null) ? Object.assign({}, this.constructor.attrs) : {};
        const attrNames = Object.keys(tempAttrs);
        const numOfCustomAttrs = attrNames.length;
        for (let i = 0; i < numOfCustomAttrs; i++) {
            const name = attrNames[i];
            const value = tempAttrs[name];
            if (!this.hasAttribute(name))
                this.setAttribute(name, value);
        }
        const { attributes } = this;
        const numOfAttrs = attributes.length;
        for (let i = 0; i < numOfAttrs; i++) {
            const { nodeName, nodeValue } = attributes[i];
            if (tempAttrs.hasOwnProperty(nodeName)) {
                tempAttrs[nodeName] = this.castAttr(nodeValue, tempAttrs[nodeName]);
            }
        }
        this.attrs = new _default(tempAttrs);
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
        try {
            // Dismiss listeners for data and attributes
            this.data.dismissAll();
            this.attrs.dismissAll();
        }
        catch (error) {
            return;
        }
    }
    /**
     * listEvents method iterates over all the child elements of the current
     * {@link ShadowRoot} checking if any of them has an event listener defined
     * by an attribute that starts with 'on-' followed by the event to listen.
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
                if (attribute && attribute.name.startsWith(eventPrefix)) {
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
     * definition calling to the method 'template' using
     * {@link Component.fireMethod} function, and fires the render template
     * function providing the current shadowRoot as target.
     *
     * @private
     * @memberof Component
     */
    renderTemplate() {
        // Get template computed definition and call to render function with 
        // the shadowRoot as target.
        const template = this.fireMethod('template');
        if (template)
            render(template, this.shadowRoot);
    }
    /**
     * renderStyles method gets the computed styles from the component
     * definition calling 'styles' method using {@link Component.fireMethod}
     * function. If the shadowRoot has not a style element, it is created and
     * the styles definition is appended to it then.
     *
     * @private
     * @memberof Component
     */
    renderStyles() {
        // If the component has a defined styles, get the definition.
        const styles = this.fireMethod('styles');
        if (styles) {
            const style = document.createElement('style');
            style.innerHTML = styles;
            // If styles are already appended update it, else create it.
            const current = this.shadowRoot.querySelector('style');
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
     * elements events and then, call component definition method 'created' if
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
        this.fireMethod('rendered');
    }
    /**
     * disconnectedCallback method is fired when the custom component is
     * dettached from the target element. It dismiss de listeners over the
     * component properties and call component definition method 'destroyed' if
     * it exists.
     *
     * @override
     * @memberof Component
     */
    disconnectedCallback() {
        // Dismiss listeners and fire 'destroyed' function.
        this.dismissListeners();
        this.fireMethod('destroyed');
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
        // Catch the attribute component change, cast the value and updates the 
        // component attrs value, then re-render the template.
        if (this.attrs) {
            const casted = this.castAttr(val, this.attrs[ref]);
            if (val === old && casted === this.attrs[ref])
                return;
            this.attrs[ref] = casted;
            this.renderTemplate();
        }
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
        if (!definition)
            throw new Error('The component definition must be provided');
        if (!tag || tag === '')
            throw new Error('The component tag must be provided.');
        if (Object.getPrototypeOf(definition).name !== this.name)
            throw new Error('The component must extend Component class');
        // Call Window attach function to register the custom element.
        window.customElements.define(tag, definition);
    }
}

export { Component, html };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVzbS5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL0BlbGVtZW50dW1qcy9saXN0ZW5hYmxlLWRhdGEvZGlzdC9saXN0ZW5hYmxlLWRhdGEuY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbGVtZW50dW1qcy90ZW1wbGF0ZS9kaXN0L3RlbXBsYXRlLmNqcy5qcyIsIi4uL3NyYy9saWIvY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5mdW5jdGlvbiB0KHQsZSl7Zm9yKHZhciByPTAsbj1lLmxlbmd0aCxzPXQubGVuZ3RoO3I8bjtyKysscysrKXRbc109ZVtyXTtyZXR1cm4gdH1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7cmV0dXJuIHRoaXNbXCI6Omxpc3RlbmVyc1wiXT17fSxPYmplY3QuYXNzaWduKHRoaXMsdCksdGhpcy5fb2JzZXJ2YWJsZSgpfXJldHVybiBlLnByb3RvdHlwZS5saXN0ZW49ZnVuY3Rpb24odCxlKXt0aGlzW1wiOjpsaXN0ZW5lcnNcIl1bdF09ZX0sZS5wcm90b3R5cGUubGlzdGVuQWxsPWZ1bmN0aW9uKHQpe3RoaXNbXCI6Omxpc3RlbmVyc1wiXVtcIipcIl09dH0sZS5wcm90b3R5cGUuZGlzbWlzcz1mdW5jdGlvbih0KXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXNbXCI6Omxpc3RlbmVyc1wiXSx0KSl0aHJvdyBuZXcgRXJyb3IoXCJ0aGUgcmVmZXJlbmNlIHByb3ZpZGVkIGhhcyBub3QgYW55IGxpc3RlbmVyIHJlZ2lzdGVyZWQuXCIpO2RlbGV0ZSB0aGlzW1wiOjpsaXN0ZW5lcnNcIl1bdF19LGUucHJvdG90eXBlLmRpc21pc3NBbGw9ZnVuY3Rpb24oKXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXNbXCI6Omxpc3RlbmVyc1wiXSxcIipcIikpdGhyb3cgbmV3IEVycm9yKFwibGlzdGVuYWJsZSBkYXRhIGhhcyBub3QgYW55IGdsb2JhbCBsaXN0ZW5lciByZWdpc3RlcmVkLlwiKTtkZWxldGUgdGhpc1tcIjo6bGlzdGVuZXJzXCJdW1wiKlwiXX0sZS5wcm90b3R5cGUuY29udGFpbnM9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMucmVmcygpLmluY2x1ZGVzKHQpfSxlLnByb3RvdHlwZS5yZWZzPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPWZ1bmN0aW9uKHIpe2Zvcih2YXIgbj1bXSxzPU9iamVjdC5rZXlzKHIpLG89cy5sZW5ndGgsaT0wO2k8bztpKyspe3ZhciBsPXNbaV07aWYoIWwuc3RhcnRzV2l0aChcIjo6XCIpKXt2YXIgaD1yW2xdO2lmKG4ucHVzaChbbF0pLFwib2JqZWN0XCI9PXR5cGVvZiBoJiZudWxsIT09aClmb3IodmFyIGE9ZShoKSxwPWEubGVuZ3RoLHU9MDt1PHA7dSsrKW4ucHVzaCh0KFtsXSxhW3VdKSl9fXJldHVybiBufSxyPVtdLG49ZSh0aGlzKSxzPW4ubGVuZ3RoLG89MDtvPHM7bysrKXIucHVzaChuW29dLmpvaW4oXCIuXCIpKTtyZXR1cm4gcn0sZS5wcm90b3R5cGUuX2hhbmRsZXI9ZnVuY3Rpb24odCxlLHIpe09iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzW1wiOjpsaXN0ZW5lcnNcIl0sdCkmJigwLHRoaXNbXCI6Omxpc3RlbmVyc1wiXVt0XSkoZSxyKTtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpc1tcIjo6bGlzdGVuZXJzXCJdLFwiKlwiKSYmKDAsdGhpc1tcIjo6bGlzdGVuZXJzXCJdW1wiKlwiXSkoZSxyLHQpfSxlLnByb3RvdHlwZS5fb2JzZXJ2YWJsZT1mdW5jdGlvbigpe3ZhciBlPXRoaXMscj1mdW5jdGlvbihuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49W10pLHtnZXQ6ZnVuY3Rpb24oZSxzLG8pe3RyeXtpZihzLnN0YXJ0c1dpdGgoXCI6OlwiKSl0aHJvdyBudWxsO3JldHVybiBuZXcgUHJveHkoZVtzXSxyKHQodChbXSxuKSxbc10pKSl9Y2F0Y2godCl7cmV0dXJuIFJlZmxlY3QuZ2V0KGUscyxvKX19LGRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKHIscyxvKXt2YXIgaT10KHQoW10sbiksW3NdKS5qb2luKFwiLlwiKSxsPW8udmFsdWUsaD1yW3NdLGE9UmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShyLHMsbyk7cmV0dXJuIGUuX2hhbmRsZXIuY2FsbChlLGksbCxoKSxhfX19O3JldHVybiBuZXcgUHJveHkoZSxyKCkpfSxlfSgpO2V4cG9ydHMuZGVmYXVsdD1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHQ9ZnVuY3Rpb24odCl7cmV0dXJuXCJcXHgzYyEtLVwiK3QrXCItLVxceDNlXCJ9LGU9L1xccyhcXFMrKVxcPVtcXFwiXFwnXShbXlxcXCJdKikkLyxuPS9eKFteXFxcIl0qKVtcXFwifFxcJ11bXFxzfFxcPl0vLHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiByKHQsZSl7dm9pZCAwPT09ZSYmKGU9W10pLHRoaXMuc3RyaW5ncz10LHRoaXMuc2xvdHM9W10sdGhpcy5wcmVwYXJlKGUpfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoci5wcm90b3R5cGUsXCJodG1sXCIse2dldDpmdW5jdGlvbigpe2Zvcih2YXIgZT1cIlwiLG49dGhpcy5zdHJpbmdzLmxlbmd0aC0xLHI9MDtyPG47cisrKXt2YXIgcz10aGlzLnNsb3RzW3JdLGk9cy5hdHRyLG89cy52YWx1ZTtlKz10aGlzLnN0cmluZ3Nbcl0rbyxudWxsPT09aSYmKGUrPXQoXCItXCIpKX1yZXR1cm4gZSt0aGlzLnN0cmluZ3Nbbl19LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksci5wcm90b3R5cGUucHJlcGFyZT1mdW5jdGlvbihyKXtmb3IodmFyIHM9MCxpPXRoaXMuc3RyaW5ncy5sZW5ndGgtMSxvPTA7bzxpO28rKyl7dmFyIGw9dGhpcy5zdHJpbmdzW29dLGE9cltvXTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKXt2YXIgdT1hLm5hbWU7aWYoXCJcIj09PXUpe3Rocm93IG5ldyBFcnJvcignaW5qZWN0ZWQgZnVuY3Rpb25zIGNhbm5vdCBiZSBpbmxpbmVkLlBsZWFzZSBkZWZpbmUgdGhlIGZ1bmN0aW9uIG91dHNpZGUgYW5kIHJlZmVyZW5jZSBpdCBieSBpdHMgbmFtZS4gRXguOiA8YnV0dG9uIG9uY2xpY2s9XCIke2ZufVwiPicpfWE9dStcIigpXCJ9dmFyIGM9ZS5leGVjKGwpO2lmKG51bGwhPT1jKXt2YXIgaD1sLmxhc3RJbmRleE9mKFwiPFwiKTtpZigtMSE9aCYmcysrLDA9PT1oKXRoaXMuc3RyaW5nc1tvXT10KHMpK2w7ZWxzZSBpZihoPjApe3ZhciBkPWwuc3Vic3RyaW5nKDAsaC0xKSxmPWwuc3Vic3RyaW5nKGgpO3RoaXMuc3RyaW5nc1tvXT1kK3QocykrZn12YXIgcD1jWzFdLGc9Y1syXSx2PXRoaXMuc3RyaW5nc1tvXS5sZW5ndGgtZy5sZW5ndGg7dGhpcy5zdHJpbmdzW29dPXRoaXMuc3RyaW5nc1tvXS5zbGljZSgwLHYpO2Zvcih2YXIgbT1cIlwiLHg9dGhpcy5zdHJpbmdzW28rMV0sTj1uLmV4ZWMoeCk7bnVsbD09PU47KW0rPXgrcltvKzFdLHRoaXMuc3RyaW5ncy5zcGxpY2UobysxLDEpLHIuc3BsaWNlKG8rMSwxKSxpLS0seD10aGlzLnN0cmluZ3NbbysxXSxOPW4uZXhlYyh4KTt2YXIgYj1OWzFdO3RoaXMuc3RyaW5nc1tvKzFdPXguc2xpY2UoYi5sZW5ndGgpLHRoaXMuc2xvdHMucHVzaCh7c2xvdEluZGV4OnMsYXR0cjpwLHZhbHVlOmcrYSttK2J9KX1lbHNlIHMrKyx0aGlzLnN0cmluZ3Nbb109bCt0KHMpLHRoaXMuc2xvdHMucHVzaCh7c2xvdEluZGV4OnMsYXR0cjpudWxsLHZhbHVlOmF9KX19LHJ9KCkscz1mdW5jdGlvbih0KXt2YXIgZT10Lm5vZGVUeXBlLG49dC5ub2RlVmFsdWU7cmV0dXJuIGU9PT1Ob2RlLkNPTU1FTlRfTk9ERSYmcGFyc2VJbnQobik/Tm9kZUZpbHRlci5GSUxURVJfQUNDRVBUOk5vZGVGaWx0ZXIuRklMVEVSX1JFSkVDVH0saT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXt0aGlzLnRlbXBsYXRlPXQsdGhpcy5jb250YWluZXI9ZX1yZXR1cm4gdC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKHRoaXMuY29udGFpbmVyLE5vZGVGaWx0ZXIuU0hPV19DT01NRU5ULHthY2NlcHROb2RlOnN9KSxlPXQubmV4dE5vZGUoKTtpZihudWxsIT09ZSlmb3IoO2U7KXt2YXIgbj1lLm5vZGVWYWx1ZSxyPXBhcnNlSW50KG4pO3RoaXMuY29tbWl0Tm9kZShlLm5leHRTaWJsaW5nLHIpLGU9dC5uZXh0Tm9kZSgpfWVsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQodGhpcy50ZW1wbGF0ZS5odG1sKTt0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpKX19LHQucHJvdG90eXBlLmNvbW1pdE5vZGU9ZnVuY3Rpb24odCxlKXtmb3IodmFyIG49dGhpcy50ZW1wbGF0ZS5zbG90cy5sZW5ndGgscj0wO3I8bjtyKyspe2lmKHRoaXMudGVtcGxhdGUuc2xvdHNbcl0uc2xvdEluZGV4PT09ZSl7dmFyIHM9dGhpcy50ZW1wbGF0ZS5zbG90c1tyXSxpPXMuYXR0cixvPXMudmFsdWU7aWYobnVsbCE9PWkpdC5nZXRBdHRyaWJ1dGUoaSkhPT1vJiZ0LnNldEF0dHJpYnV0ZShpLG8pO2Vsc2UgdC5ub2RlVmFsdWUhPT1vJiYodC5ub2RlVHlwZSE9PU5vZGUuQ09NTUVOVF9OT0RFP3Qubm9kZVZhbHVlPW86dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvKSx0KSl9fX0sdH0oKTtleHBvcnRzLlRlbXBsYXRlPXIsZXhwb3J0cy5odG1sPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXSxuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyllW24tMV09YXJndW1lbnRzW25dO3JldHVybiBuZXcgcih0LnJhdy5zbGljZSgwKSxlKX0sZXhwb3J0cy5yZW5kZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gbmV3IGkodCxlKS5yZW5kZXIoKX07XG4iLG51bGxdLCJuYW1lcyI6WyJ0IiwiZSIsIkRhdGEiXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUlDLEdBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUNELEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxHQUFDLENBQUNBLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDQSxHQUFDLENBQUNBLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMseUNBQWUsQ0FBQ0MsR0FBQzs7Ozs7O0FDZmp4RCxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxxSUFBcUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxzQkFBaUIsQ0FBQyxDQUFDLENBQUMsd0JBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDRCQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7O0FDR3YvRTtBQUNBLE1BQU0sV0FBVyxHQUFXLEdBQUcsQ0FBQztBQUNoQztBQUNBLE1BQU0sV0FBVyxHQUFXLEtBQUssQ0FB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
