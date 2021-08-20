import { Component, html } from "../component";
import Data from '@elementumjs/listenable-data';

// Bind window object
const open = jest.fn();
Object.defineProperty(window, 'open', open);

// Definition of base component with basic implementation to test the 
// main funcitonallity
class TestComponent extends Component {
    static get attrs() {
        return { 
            number: 0,
            bool: false,
            str: "foo"
        };
    }
    static get data() { return { text: 'Hello world!' }; }

    created() { return; }
    rendered() { return; }
    destroyed() { return; }

    styles() { return `button { font-weight: bold; }` }

    template() { 
        return html`<button number="${this.attrs.number}" on-click="${this.testMethod}">${this.data.text}</button>`;
    }

    testMethod(e?: Event) { 
        this.attrs.number++;
        return true; 
    }
}

test('Component.attach', () => {
    // Test get undefined component
    expect(window.customElements.get('undefined-component')).toBeUndefined();

    // Test null component attachment
    expect(() => Component.attach('wrong-component', null)).toThrow();
    // Test untagged component attachment
    expect(() => Component.attach('', TestComponent)).toThrow();
    // Test non Component definition attachment
    expect(() => Component.attach('wrong-component', class extends HTMLElement {})).toThrow();

    // Test success component attachment
    Component.attach('test-component', TestComponent);
    const expected = window.customElements.get('test-component');
    expect(expected).toBe(TestComponent);

    // Test component creation
    document.body.innerHTML = '<test-component></test-component>';
    document.querySelector('test-component');
    const component = document.querySelector('test-component') as TestComponent;
    expect(component).toBeDefined();
});

test('Component.fireMethod', () => {
    const component = document.querySelector('test-component') as TestComponent;
    // Test that a method called via fireMethod has the same result that the 
    // same method called directly
    expect(component['fireMethod']('testMethod')).toBe(component.testMethod());
});

test('Component.initData', () => {
    const data = new Data({ text: 'Hello world!' });
    data.listenAll(expect.any(Function));
    
    // Check the current component data with a mocked one
    const component = document.querySelector('test-component') as TestComponent;
    expect(component.data).toMatchObject(data);
});

test('Component.castAttr', () => {
    const component = document.querySelector('test-component') as TestComponent;
    const fn = component['castAttr'];

    // Check all posibles cases (4 correct and 1 wrong)
    expect(fn('12.3', 0)).toBe(12.3);
    expect(fn('true', true)).toBe(true);
    expect(fn('false', true)).toBe(false);
    expect(fn('{ text: \'test\' }', {})).toBe('{ text: \'test\' }');
    expect(() => fn('1', true)).toThrow();
});

test('Component.initAttrs', () => {
    let attrs = new Data({ 
        number: 0,
        bool: false,
        str: "foo"
    });
    attrs.listenAll(expect.any(Function));

    // Reset and test default attributes numbers
    document.body.innerHTML = '<test-component></test-component>';
    let component = document.querySelector('test-component') as TestComponent;
    expect(component.attrs).toMatchObject(attrs);

    document.body.innerHTML = '<test-component number="200" bool="true" str="bar"></test-component>';
    document.querySelector('test-component');
    component = document.querySelector('test-component') as TestComponent;

    attrs = new Data({ 
        number: 200,
        bool: true,
        str: "bar"
    });
    attrs.listenAll(expect.any(Function));
    expect(component.attrs).toMatchObject(attrs);
});

test('Component.listenUpdates', () => {
    const component = document.querySelector('test-component') as TestComponent;
    expect(component.data['::listeners']['*']).toBeDefined();

    const renderHandler = jest.spyOn(component as any, 'renderTemplate');
    component.data.text = 'Bye!';
    expect(renderHandler).toHaveBeenCalled();

    const attrsHandler = jest.spyOn(component as any, 'getAttribute');
    component.attrs.number++;
    expect(attrsHandler).toHaveBeenCalled();
});

test('Component.dismissListeners', () => {
    const component = document.querySelector('test-component') as TestComponent;

    const dataHandler = jest.spyOn(component.data as any, 'dismissAll');
    const attrsHandler = jest.spyOn(component.attrs as any, 'dismissAll');
    component['dismissListeners']();
    expect(dataHandler).toHaveBeenCalled();
    expect(attrsHandler).toHaveBeenCalled();
});

test('Component.listenEvents', () => {
    // Reset component and check event listeners simulating mouse event
    document.body.innerHTML = '<test-component></test-component>';
    const component = document.querySelector('test-component') as TestComponent;

    const child = component.root.querySelector('button');
    child.dispatchEvent(new Event('click'));
    expect(component.attrs.number).toBe(1);
    child.dispatchEvent(new Event('mouseover'));
    expect(component.attrs.number).toBe(1);
});

test('Component.renderTemplate', () => {
    const component = document.querySelector('test-component') as TestComponent;
    const renderHandler = jest.spyOn(component as any, 'renderTemplate');
    
    // Test render template cycles performing changes over the component data 
    // and attributes
    component.data.text = 'Bye!';
    component.attrs.number++;
    component.setAttribute('number', '10');
    expect(renderHandler).toHaveBeenCalledTimes(3);
});

test('Component.renderStyles', () => {
    document.body.innerHTML = '';
    
    const component = new TestComponent();
    const renderHandler = jest.spyOn(component as any, 'renderStyles');

    document.body.appendChild(component);
    expect(renderHandler).toHaveBeenCalled();
});

test('Component.connectedCallback', () => {
    document.body.innerHTML = '';
    
    const component = new TestComponent();
    const connectedCallback = jest.spyOn(component as any, 'rendered');
    
    document.body.appendChild(component);
    expect(connectedCallback).toHaveBeenCalled();
});

test('Component.disconnectedCallback', () => {
    const component = document.querySelector('test-component') as TestComponent;
    const disconnectedCallback = jest.spyOn(component as any, 'destroyed');
    
    document.body.removeChild(component);
    expect(disconnectedCallback).toHaveBeenCalled();
});

test('Component.attributeChangedCallback', () => {
    document.body.innerHTML = '';

    const component = new TestComponent();
    document.body.appendChild(component);

    component.attrs.number++;
    expect(component.getAttribute('number')).toBe('1');
    component.setAttribute('number', '10');
    expect(component.attrs.number).toBe(10);
});