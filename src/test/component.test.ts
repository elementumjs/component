import { testEnvironment } from "../../build/jest.config";
import { Component, html } from "../component";

// Bind window object
const open = jest.fn();
Object.defineProperty(window, 'open', open);

class TestComponent extends Component {
    static get data() {
        return { text: 'Hello world!' };
    }
    
    template() {
        return html`
            <span>${this.data.text}</span>
        `;
    }
}

test('Component.initAttrs', () => {});
test('Component.fireMethod', () => {});
test('Component.initData', () => {});
test('Component.initAttrs', () => {});
test('Component.listenUpdates', () => {});
test('Component.dismissListeners', () => {});
test('Component.listenEvents', () => {});
test('Component.renderTemplate', () => {});
test('Component.renderStyles', () => {});
test('Component.connectedCallback', () => {});
test('Component.disconnectedCallback', () => {});
test('Component.attributeChangedCallback', () => {});
test('Component.attach', () => {
    expect(window.customElements.get('undefined-component')).toBeUndefined();
    Component.attach('test-component', TestComponent);
});