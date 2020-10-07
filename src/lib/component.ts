import Data from '@elementumjs/listenable-data';
import { html, render } from '@elementumjs/template';

interface Attribute {
    name: string,
    value?: any
}

interface Component extends HTMLElement {
    constructor: typeof Component,
    data: any,
    attrs: any,
    template(any?): any,
    styles(): void,
    created(): void,
    rendered(): void,
    destroyed(): void
}

class Component extends HTMLElement {
    public get host(): Element { return this.shadowRoot.host; }
    public static get attrs(): Array<Attribute> { return []; }

    public static get observedAttributes() {
        if (this.attrs.length === 0) return [];
        return this.attrs.map(attr => attr.name);
    }

    constructor() {
        super();
        // Check if shadowRoot is created and attatch it.
        if (!this.shadowRoot) this.attachShadow({ mode: "open" });

        // Init componentand fire 'created' function.
        this.initData();
        this.initAttrs();
        this.callMethod("created");
    }

    private callMethod(name: string, ...args: Array<any>): any {
        // Check if current definition has the method and call it passing the 
        // arguments.
        if (this[name] as Function === undefined) return null;
        return this[name].call(this, ...args);
    }

    private initData(): void {
        // Init component data
        let tempData: Object = this.callMethod("data");
        if (tempData) this.data = new Data(tempData);
        else this.data = new Data({});
    }

    private initAttrs(): void {
        // Init component attributes.
        if (
            this.constructor.hasOwnProperty("attrs") && 
            this.constructor.attrs instanceof Array && 
            this.constructor.attrs.length > 0    
        ) {
            // Fill element attributes with the initial attributes.
            let tempAttrs = {}
            this.constructor.attrs.forEach(attr => {
                tempAttrs[attr.name] = attr.value;
                if (!this.hasAttribute(attr.name)) this.setAttribute(attr.name, attr.value);
            });
            this.attrs = new Data(tempAttrs);
        } else this.attrs = new Data({});
    }

    private listenUpdates(): void {
        // Set listener to re-render the template on data change.
        this.data.listenAll(() => this.renderTemplate());

        // Set listener to update element attributes
        this.attrs.listenAll((val: any, _: any, ref: string) => {
            if (this.getAttribute(ref) !== val) this.setAttribute(ref, val);
        });
    }

    private dismissListeners(): void {
        // Dismiss listeners for data and attributes
        this.data.dismissAll();
        this.attrs.dismissAll();
    }

    private renderTemplate(): void {
        let template = this.callMethod("template");
        if (template) render(template, this.shadowRoot);
    }

    private renderStyles(): void {
        // If the component has a defined styles, get the definition.
        let styles = this.callMethod("styles");
        if (styles) {
            let style = document.createElement("style");
            style.innerHTML = styles;

            // If styles are already appended update it, else create it.
            let current = this.shadowRoot.querySelector("style");
            if (current) current.innerHTML = style.innerHTML;
            else this.shadowRoot.appendChild(style);
        }
    }

    public connectedCallback() {
        // Set data listeners
        this.listenUpdates();

        // Init render process and fire 'rendered' function.
        this.renderTemplate();
        this.renderStyles();
        this.callMethod("rendered");
    }

    public disconnectedCallback() {
        // Dismiss listeners and fire 'destroyed' function.
        this.dismissListeners();
        this.callMethod("destroyed");
    }

    public attributeChangedCallback(ref, old, val) {
        this.attrs[ref] = val;
        this.renderTemplate();
    }

    public static attach(tag: string, definition: any): void {
        if (!tag || tag === "") throw new Error("The component tag must be provided.");

        window.customElements.define(tag, definition);
    }
}

export { Component, html };