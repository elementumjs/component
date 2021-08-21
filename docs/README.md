<img src="https://raw.githubusercontent.com/elementumjs/component/main/assets/header.svg"/>

[![CDN](https://img.shields.io/badge/CDN-jsDelivr-blueviolet)][1]
[![package_version](https://img.shields.io/npm/v/@elementumjs/component)][2]
[![production](https://github.com/elementumjs/component/workflows/production/badge.svg)][3]
[![reference](https://img.shields.io/badge/docs-REFERENCE-blue)][4]
[![license](https://img.shields.io/github/license/elementumjs/component)][5]

`@elementumjs/component` is the simplest tiny framework to work with vanilla WebComponents. Vue.js inspired syntax.

- [📝 How to use it][6]
    - [Component registration][7]
    - [Component definition][8]
        - [Component information: `data` & `attrs`][9]
            - [Watch for component information][10]
        - [Component structure: `template` & `styles`][11]
    - [Component life-cycle: `created`, `rendered` & `destroyed`][12]
    - [Communication between nested components][13]
- [🧪 Full example][14]
- [⚙️ Installation][15]
    - [Import from CDN as ES Module][16]
    - [Or install the package locally][17]
    - [Other import methods][18]

---

<img src="https://raw.githubusercontent.com/elementumjs/component/main/assets/how-to-use-it.svg"/>

## How to use it

### Component registration

The new component definition should extend the `Component` class and use the `attach` static function to register the component with a associated HTML tag to use them on HTML files:

```javascript
    class AwardComponent extends Component {
        // ...
    }

    Component.attach("award-component", AwardComponent);
```

Or using shorter syntax:

```javascript
    Component.attach("award-component", class extends Component {
        // ...
    });
```

### Component definition

#### Component information

There are two ways to initialize component information. Both of them implements [`@elementumjs/listenable-data`](https://github.com/elementumjs/listenable-data): 

 * `Component.data`: That defines the component initial data.
 * `Component.attrs`: That defines the component attributes and allows to the component to receive information reactively from parent.

##### Component data
`Component.data` getter function defines component initial data. It is accesible from other component methods using `Component.data` as an `Object`.

*Parent component*
```javascript
    class AwardComponent extends Component {
        static get data() {
            return {
                points: 0
            }
        }
        // ...
    }
```

##### Component attributes
`Component.attrs` getter function defines component attributes and allows to receive information reactively from parent component. The initial definition of `Component.attrs` also defines the type of the data that it contains. It is accesible from other component methods using `Component.attrs` as an `Object`. It must be a `static` getter:

*Child component*
```javascript
    class GetPointsComponent extends Component {
        static get attrs() {
            return {
                currentPoints: 0
            }
        }
        // ...
    }

```

*Parent component*
```javascript
    class AwardComponent extends Component {
        // ...
        template() {
            return html`<div>
                <!---->
                <get-points-component currentPoints="${this.data.points}"></get-points-component>
                <!---->
            </div>`;
        }
        // ...
    }
```

##### Watch for component information
`Component.attrs` and `Component.data` implements [`@elementumjs/listenable-data`](https://github.com/elementumjs/listenable-data) and this library allows to listen for data changes. Its API is the same for both objects:

*Parent component*
```javascript
    class AwardComponent extends Component {
        // ...
        changeListener(value, oldValue) {
            console.log(value, oldValue);
        }

        rendered() {
            this.data.listen('points', this.changeListener);
            // or this.attrs.listen(path, listener);
        }
        // ...
    }
```

#### Component structure

To define the component structure the methods `Component.styles()` and `Component.template()` must be defined in this way:

##### Component template
The `Component.template()` must return a `Template` object (from [`@elementumjs/template`](https://github.com/elementumjs/template)). In this case the template can be filled with references to `Component.attrs` and `Component.data`. To learn more about the template syntax checkout the `@elementumjs/template` [documentation](https://github.com/elementumjs/template)).

```javascript
class AwardComponent extends Component {
    // ...
    template() {
        return html`<div>
            <span>You got ${this.data.points} points!</span>
            <get-points-component currentPoints="${this.data.points}"></get-points-component>
            <p>${ this.data.points >= 3 ? "Winner!" : "" }</p>
        </div>`;
    }
}
```

##### Component styles
The `Component.styles()` must return an string with the CSS definitions:

```javascript
class AwardComponent extends Component {
    // ...
    styles() {
        return `
            p {
                font-weight: bold;
                font-size: 16px;
            }
        `;
    }
}
```

### Component life-cycle

The component life-cycle is composed by three steps:

| Step | Actions performed | Triggered by | Method fired at completion |
|:---|:---|:---|:---|
|Creation|Data and attributes initialization. `Component.data` and `Component.attrs` are ready!| `let c = new MyComponent();`| `Component.created()` |
|Renderization|Component renderization and data & events listeners registration. DOM ready via `Component.root`!|`document.body.appendChild(c);`|`Component.rendered()`|
|Destruction|Component destruction and listeners unregistration.|`document.body.removeChild(c);`|`Component.destroyed()`|

To perform actions into the component life-cycle, overload the *created*, *rendered* and *destroyed* methods:

*Parent component*
```javascript
    class AwardComponent extends Component {
        // ...
        created() { console.log('created'); }
        rendered() { console.log('rendered'); }
        destroyed() { console.log('destroyed'); }
        // ...
    }
```

### Communication between nested components

The `Parent <--> Child` communication must be done passing information to the `Child` using its attributes, and listening to its changes:

*Parent component*
```javascript
    class AwardComponent extends Component {
        // ...
        template() {
            // Injecting data to the child using its attributes
            return html`<div>
                <!---->
                <get-points-component currentPoints="${this.data.points}"></get-points-component>
                <!---->
            </div>`;
        }
        rendered() {
            // Listening for changes on the child attributes and updating the parent data
            const getPointsComponent = this.root.querySelector('get-points-component');
            getPointsComponent.attrs.listen('currentPoints', (val, old) => {
                this.data.points = val;
            });
        }
    }
```

<img src="https://raw.githubusercontent.com/elementumjs/component/main/assets/full-example.svg"/>

## Full example

<img src="https://raw.githubusercontent.com/elementumjs/component/main/assets/demo.gif" width="350"/>

Parent component definition: `award-component.js`.

```javascript
import { Component, html } from '@elementumjs/component';
import './get-points-component.js';

Component.attach('award-component', class extends Component {
    static get data() {
        return {
            points: 0,
        }
    }
    styles() {
        return `
            p {
                font-weight: bold;
                font-size: 26px;
            }
        `;
    }
    template() {
        return html`<div>
            <span>You got ${this.data.points} points!</span>
            <get-points-component currentPoints="${this.data.points}"></get-points-component>
            <p>${ this.data.points >= 3 ? "Winner!" : "" }</p>
        </div>`;
    }
    rendered() {
        const getPointsComponent = this.root.querySelector('get-points-component');
        getPointsComponent.attrs.listen('currentPoints', (val, old) => {
            this.data.points = val;
        });
    }
});
```

Child component definition: `get-points-component.js`.

```javascript
import { Component, html } from '@elementumjs/component';

Component.attach('get-points-component', class extends Component {
    static get attrs() {
        return {
            currentPoints: 0
        };
    }
    template() {
        return html`<input type="button" on-click="${this.updatePoints}" value="Get points!"/>`;
    }
    updatePoints() {
        this.attrs.currentPoints++;
    }
});
```

`index.html` definition:

```html
<!DOCTYPE html>
<html>
	<body>
		<award-component></award-component>
		
		<script type="module" src="./award-component.js"></script>
	</body>
</html>
```

<img src="https://raw.githubusercontent.com/elementumjs/component/main/assets/installation.svg"/>

## Installation

### Import from CDN as ES Module

Import from [jsDelivr CDN](https://www.jsdelivr.com/):

```javascript
    import Component from "https://cdn.jsdelivr.net/gh/elementumjs/component/dist/component.esm.js";
```

### Or install the package locally

#### Download the package

Install via `npm`:

```sh
    npm install @elementumjs/component
```

#### Import as ES Module

[ES Module](http://exploringjs.com/es6/ch_modules.html) builds are intended for use with modern bundlers like [webpack 2](https://webpack.js.org) or [rollup](http://rollupjs.org/). Use it with ES6 JavaScript `import`:
  
```javascript
    import Component from '@elementumjs/component';
```

### Other import methods

Checkout other import methods in [`dist/README.md`](./dist/README.md).

[1]: https://cdn.jsdelivr.net/gh/elementumjs/component/dist/component.umd.js

[2]: https://www.npmjs.com/package/@elementumjs/component

[3]: https://github.com/elementumjs/component/actions?query=workflow%3Aproduction

[4]: docs/modules.md

[5]: LICENSE

[6]: #how-to-use-it

[7]: #component-registration

[8]: #component-definition

[9]: #component-information

[10]: #watch-for-component-information

[11]: #component-structure

[12]: #component-life-cycle

[13]: #communication-between-nested-components

[14]: #full-example

[15]: #installation

[16]: #import-from-cdn-as-es.module

[17]: #or-install-the-package-locally

[18]: #other-import-methods
