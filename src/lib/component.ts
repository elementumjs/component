import Data from '@elementumjs/listenable-data';
import { Template, html, render } from '@elementumjs/template';

/** @private */
const funcNameDel: string = '(';
/** @private */
const eventPrefix: string = 'on-';

interface Component extends HTMLElement {
    /**
     * constructor contains the current class instancer reference of 
     * {@link Component} that allows to access to the definition values safely.
     *
     * @type {typeof Component}
     * @memberof Component
     */
    constructor: typeof Component,
}

/**
 * Component class has the basic methods to control the component lifecycle,
 * mapping the properties and hot rendering the component template on properties
 * updates.
 *
 * @class Component
 * @extends {HTMLElement}
 * @noInheritDoc
 */
abstract class Component extends HTMLElement {
    /**
     * Creates an instance of {@link Component}, attaching the shadowRoot if it 
     * is not already attached, and initializing the compontent properties for 
     * {@link Component.data} and {@link Component.attributes}.
     *
     * @type {typeof Component}
     * @memberof Component
     */
    public open: boolean = true;

    /**
     * Before the component inicialization occurs, data property contains a 
     * function that returns the inital data definition. When the component is 
     * initialized, data property can be used as common mutable object, filled 
     * with initial data and with the required listeners to render the template 
     * when those values updates.
     * 
     * @type {Function}
     * @memberof Component
     */
    public data: typeof Data | any;
    /**
     * Before the component inicialization occurs, attrs property contains a 
     * function that returns the inital attributes definition. When the 
     * component is initialized, attrs property can be used as common mutable 
     * object, filled with initial attributes and with the required listeners 
     * to render the template when those values updates.
     *
     * @type {Data}
     * @memberof Component
     */
    public attrs: typeof Data | any;

    /**
     * template function returns the component template definition using the 
     * html string tag provided. Inside that function {@link Component.data} and 
     * {@link Component.attrs} are accesible via `this` variable, as well as 
     * others properties defined by the user into the component definition.
     *
     * @return {*} 
     * @memberof Component
     */
    abstract template(): typeof Template;
    
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
    styles(): string | void {};
    
    /**
     * created method is called when the component initialization is finished 
     * and data containers are created and initialized with provided definitions.
     *
     * @memberof Component
     */
    created(): void {};

    /**
     * rendered method is called when the component renderization (template and 
     * styles) is finished and the listeners are setted.
     *
     * @memberof Component
     */
    rendered(): void {};

    /**
     * destroyed method is called when the component is detached and the 
     * listeners are dismissed.
     *
     * @memberof Component
     */
    destroyed(): void {};

    /**
     * host getter returns the host element of the current custom component if
     * it is a nested component. If it is the root one, the host getter returns
     * undefined.
     *
     * @readonly
     * @type {Element}
     * @memberof Component
     */
    public get host(): Element {
        return (this.getRootNode() as ShadowRoot).host; 
    }

    /**
     * root getter returns the shadow root document from the current element.
     *
     * @readonly
     * @type {ShadowRoot}
     * @memberof Component
     */
    public get root(): ShadowRoot {
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
    public static get attrs(): Object { return {}; }

    public static get data(): Object { return {}; }

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
    private static get observedAttributes(): Array<string> { return Object.keys(this.attrs); }

    constructor() {
        super();

        // Check if shadowRoot is created and attatch it.
        if (!this.shadowRoot) this.attachShadow({ mode: this.open ? 'open' : 'closed' });

        // Init componentand fire 'created' function.
        this.initData();
        this.initAttrs();
        this.fireMethod('created');
    }

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
    private fireMethod(name: string, ...args: Array<any>): any {
        // Check if current definition has the method and call it passing the 
        // arguments.
        if (this[name] as Function === undefined) throw new Error('The method called does not exist.');
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
    private initData(): void {
        // Init component data
        try {
            const tempData = (
                this.constructor.hasOwnProperty('data') && 
                typeof this.constructor.data == 'object' && 
                this.constructor.data !== null
            ) ? Object.assign({}, this.constructor.data) : {};
            this.data = new Data(tempData);
        } catch { this.data = new Data({}); }
    }

    private castAttr(from, to): Number | Boolean | String {
        if (typeof from !== 'string') throw new Error('Only can cast string values.'); 
        
        switch (typeof to) {
            case 'number':
                return Number(from);
            case 'boolean':
                return Boolean(from);
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
    private initAttrs(): void {
        // Get custom attributes first, then complete them with the attributes 
        // of the HTMLElement definition.
        const tempAttrs = (
            this.constructor.hasOwnProperty('attrs') && 
            typeof this.constructor.attrs == 'object' && 
            this.constructor.attrs !== null
        ) ? Object.assign({}, this.constructor.attrs) : {};

        const attrNames = Object.keys(tempAttrs);
        const numOfCustomAttrs = attrNames.length;
        for (let i = 0; i < numOfCustomAttrs; i++) {
            const name = attrNames[i];
            const value = tempAttrs[name];
            if (!this.hasAttribute(name)) this.setAttribute(name, value);
        }
        
        const { attributes } = (<HTMLElement>this);
        const numOfAttrs = attributes.length;
        for (let i = 0; i < numOfAttrs; i++) {
            const { nodeName, nodeValue } = attributes[i];
            if (tempAttrs.hasOwnProperty(nodeName)) {
                tempAttrs[nodeName] = this.castAttr(nodeValue, tempAttrs[nodeName]);
            }
        }
        
        this.attrs = new Data(tempAttrs);
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
    private listenUpdates(): void {
        // Set listener to re-render the template on data change.
        this.data.listenAll(() => this.renderTemplate());

        // Set listener to update element attributes
        this.attrs.listenAll((val: any, _: any, ref: string) => {
            if (this.getAttribute(ref) === val) return;
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
    private dismissListeners(): void {
        // Dismiss listeners for data and attributes
        this.data.dismissAll();
        this.attrs.dismissAll();
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
    private listenEvents(): void {
        // Create iterator to loop over all component elements searching for 
        // event listeners definition.
        const iterator: NodeIterator = document.createNodeIterator(
            this.shadowRoot,
            NodeFilter.SHOW_ELEMENT
        );

        // Iterate over elements checking if contains any attribute which name
        // starts with eventPrefix.
        let current: Element;
        while (current = iterator.nextNode() as Element) {
            const attributes = current.attributes;
            const { length } = attributes;
            for (let i = 0; i < length; i++) {
                const attribute: Attr = attributes.item(i);
                if (attribute && attribute.name.startsWith(eventPrefix)) {
                    // Get event and listener function and set event listener
                    // over the element that has the attribute.
                    const event: string = attribute.name.split(eventPrefix)[1];
                    const listenerName: string = attribute.value.split(funcNameDel)[0];
                    const listener: Function = this[listenerName] as Function;
                    
                    if (listener !== undefined) {
                        current.addEventListener(event, (e: Event) => listener.call(this, e));
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
    private renderTemplate(): void {
        // Get template computed definition and call to render function with 
        // the shadowRoot as target.
        const template = this.fireMethod('template');
        if (template) render(template, this.shadowRoot);
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
    private renderStyles(): void {
        // If the component has a defined styles, get the definition.
        const styles = this.fireMethod('styles');
        if (styles) {
            const style = document.createElement('style');
            style.innerHTML = styles;

            // If styles are already appended update it, else create it.
            const current = this.shadowRoot.querySelector('style');
            if (current) current.innerHTML = style.innerHTML;
            else this.shadowRoot.appendChild(style);
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
    private connectedCallback() {
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
    private disconnectedCallback() {
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
    private attributeChangedCallback(ref: string, old: any, val: any) {
        // Catch the attribute component change, cast the value and updates the 
        // component attrs value, then re-render the template.
        if (this.attrs) {
            const casted = this.castAttr(val, this.attrs[ref])
            if (val === old && casted === this.attrs[ref]) return;
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
    public static attach(tag: string, definition: typeof HTMLElement): void {
        // Check the component tag and the prototype of the definition provided 
        // as arguments
        if (!definition) throw new Error('The component definition must be provided');
        if (!tag || tag === '') throw new Error('The component tag must be provided.');
        if (Object.getPrototypeOf(definition).name !== this.name) throw new Error('The component must extend Component class');
        
        // Call Window attach function to register the custom element.
        window.customElements.define(tag, definition);
    }
}

export { Component, html };