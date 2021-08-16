<img src="https://raw.githubusercontent.com/elementumjs/component/master/assets/header.svg"/>

[![CDN](https://img.shields.io/badge/CDN-jsDelivr-blueviolet)][1]
[![package_version](https://img.shields.io/npm/v/@elementumjs/component)][2]
[![production](https://github.com/elementumjs/component/workflows/production/badge.svg)][3]
[![reference](https://img.shields.io/badge/docs-REFERENCE-blue)][4]
[![license](https://img.shields.io/github/license/elementumjs/component)][5]

`@elementumjs/component` is the simplest tiny framework to work with vanilla WebComponents. Vue.js inspired syntax.

- [📝 How to use it][6]
    - [Component registration][7]
    - [Component definition][8]
        - [Component metadata: `data` & `attrs`][9]
            - [Watch data][10]
        - [Component structure: `template` & `styles`][11]
            - [Accesing to component metadata and event binding][12]
    - [Component life-cycle: `created`, `rendered` & `destroyed`][13]
    - [Communication between nested components][14]
- [🧪 Full example][15]
- [⚙️ Installation][16]
    - [Import from CDN as ES Module][17]
    - [Or install the package locally][18]
    - [Other import methods][19]

---

<img src="https://raw.githubusercontent.com/elementumjs/component/master/assets/how-to-use-it.svg"/>

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

#### Component metadata: `data` & `attrs`

##### Watch data

#### Component structure: `template` & `styles`

##### Accesing to component metadata and event binding

### Component life-cycle: `created`, `rendered` & `destroyed`

### Communication between nested components

<img src="https://raw.githubusercontent.com/elementumjs/component/master/assets/full-example.svg"/>

## Full example

<img src="https://raw.githubusercontent.com/elementumjs/component/master/assets/demo.gif" width="350"/>


Parent component definition: `award-component.js`.

```javascript
import { Component, html } from '@elementumjs/component';
import './get-points-component.js';

Component.attach('award-component', class extends Component {
    data() {
        return {
            points: 0,
        }
    }
    styles() {
        return `
            p {
                font-weight: bold;
                font-size: 16px;
            }
        `;
    }
    template() {
        return html`<div>
            <span>You got ${this.data.points} points!</span>
            <get-points-component initial="${this.data.points}"></get-points-component>
            <p>${ this.data.points >= 3 ? "Winner!" : "" }</p>
        </div>`;
    }
});
```

Child component definition: `get-points-component.js`.

```javascript
import { Component, html } from '@elementumjs/component';

Component.attach('get-points-component', class extends Component {
    static get attrs() {
        return { initial: null };
    }
    template() {
        return html`
            <input type="button" on-click="${this.updatePoints}" value="Get points!"/>
        `;
    }
    updatePoints() {
        this.host.data.points++;
    }
});
```

<img src="https://raw.githubusercontent.com/elementumjs/component/master/assets/installation.svg"/>

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

[4]: docs/globals.md

[5]: LICENSE

[6]: #how-to-use-it

[7]: #component-registration

[8]: #component-definition

[9]: #component-metadata-data-&-attrs

[10]: #watch-data

[11]: #component-structure-template-&-styles

[12]: #accesing-to-component-metadata-and-event-binding

[13]: #component-life-cycle-created-rendered-&-destroyed

[14]: #communication-between-nested-components

[15]: #full-example

[16]: #installation

[17]: #import-from-cdn-as-es.module

[18]: #or-install-the-package-locally

[19]: #other-import-methods