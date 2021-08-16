import { Component, html } from "../component";

import Data from '@elementumjs/listenable-data';

// Bind window object
const open = jest.fn();
Object.defineProperty(window, 'open', open);

// Create basic component to test
class TestComponent extends Component {
    static get attrs() {
        return { value: 0 };
    }
    static get data() {
        return { text: 'Hello world!' };
    }
    testMethod() {
        return this;
    }
    styles() {
        return `button { font-weight: bold; }`
    }
    template() {
        return html`<button value="${this.attrs.value}">${this.data.text}</button>`;
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
    expect(fn('1', true)).toBe(true);
    expect(fn('{ text: \'test\' }', {})).toBe('{ text: \'test\' }');
    expect(() => fn(3, '')).toThrow();
});

test('Component.initAttrs', () => {});
test('Component.listenUpdates', () => {});
test('Component.dismissListeners', () => {});
test('Component.listenEvents', () => {});
test('Component.renderTemplate', () => {});
test('Component.renderStyles', () => {});
test('Component.connectedCallback', () => {});
test('Component.disconnectedCallback', () => {});
test('Component.attributeChangedCallback', () => {});