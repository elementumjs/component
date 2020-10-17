<img src="https://raw.githubusercontent.com/elementumjs/component/master/assets/header.svg"/>

[![CDN](https://img.shields.io/badge/CDN-jsDelivr-blueviolet)][1]
[![package_version](https://img.shields.io/github/package-json/v/elementumjs/component)][2]
[![production](https://github.com/elementumjs/component/workflows/production/badge.svg)][3]
[![reference](https://img.shields.io/badge/docs-REFERENCE-blue)][4]
[![license](https://img.shields.io/github/license/elementumjs/component)][5]

`@elementumjs/component` is the simplest tiny framework to work with vanilla WebComponents. Vue.js inspired syntax.

- [📝 How to use it][6]
  - [Define a component][7]
    - [Component `data` & `attrs`][8]
    - [Component structure: `template` & `styles`][9]
  - [Component life-cycle: `created`, `rendered` & `destroyed`][10]
  - [Communication between nested components][11]
- [🧪 Full example][12]
- [⚙️ Installation][13]
  - [Import from CDN as ES Module][14]
  - [Or install the package locally][15]
  - [Other import methods][16]

---

<img src="https://raw.githubusercontent.com/elementumjs/component/master/assets/how-to-use-it.svg"/>

### How to use it

#### Define a component

The new component definition should extend the `Component` class and use the `attach` static function to register the component with a associated HTML tag to use them on HTML files:

```javascript
    // import Component class

    class AwardComponent extends Component {
        // ...
    }

    Component.attach("award-component", AwardComponent);
```

Or using shorter syntax:

```javascript
    // import Component class

    Component.attach("award-component", class extends Component {
        // ...
    });
```

##### Component `data` & `attrs`

##### Component structure: `template` & `styles`

#### Component life-cycle: `created`, `rendered` & `destroyed`

#### Communication between nested components

<img src="https://raw.githubusercontent.com/elementumjs/component/master/assets/full-example.svg"/>

### Full example

<img src="https://raw.githubusercontent.com/elementumjs/component/master/assets/installation.svg"/>

### Installation

#### Import from CDN as ES Module

Import from [jsDelivr CDN](https://www.jsdelivr.com/):

```javascript
    import Component from "https://cdn.jsdelivr.net/gh/elementumjs/component/dist/component.esm.js";
```

#### Or install the package locally

##### Add Github Packages to your registry

Create or edit the `.npmrc` file in the same directory as your `package.json` and include the following line:

```
    registry=https://npm.pkg.github.com/elementumjs
```

##### Download the package

Install via `npm`:

```sh
    npm install @elementumjs/component
```

##### Import as ES Module

[ES Module](http://exploringjs.com/es6/ch_modules.html) builds are intended for use with modern bundlers like [webpack 2](https://webpack.js.org) or [rollup](http://rollupjs.org/). Use it with ES6 JavaScript `import`:
  
```javascript
    import Component from '@elementumjs/component';
```

#### Other import methods

Checkout other import methods in [`dist/README.md`](./dist/README.md).

[1]: https://cdn.jsdelivr.net/gh/elementumjs/component/dist/component.umd.js

[2]: https://github.com/elementumjs/component/packages/

[3]: https://github.com/elementumjs/component/actions?query=workflow%3Aproduction

[4]: docs/globals.md

[5]: LICENSE

[6]: #how-to-use-it

[7]: #define-a-component

[8]: #component-data-&-attrs

[9]: #component-structure-template-&-styles

[10]: #component-life-cycle-created-rendered-&-destroyed

[11]: #communication-between-nested-components

[12]: #full-example

[13]: #installation

[14]: #import-from-cdn-as-es.module

[15]: #or-install-the-package-locally

[16]: #other-import-methods
