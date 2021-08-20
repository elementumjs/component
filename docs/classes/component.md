# Class: Component

Component class has the basic methods to control the component lifecycle,
mapping the properties and hot rende ring the component template on properties
updates.

## Hierarchy

- `HTMLElement`

  ↳ **`Component`**

## Table of contents

### Properties

- [attrs](component.md#attrs)
- [constructor](component.md#constructor)
- [data](component.md#data)
- [open](component.md#open)

### Accessors

- [host](component.md#host)
- [root](component.md#root)
- [attrs](component.md#attrs)
- [data](component.md#data)
- [observedAttributes](component.md#observedattributes)

### Methods

- [attributeChangedCallback](component.md#attributechangedcallback)
- [castAttr](component.md#castattr)
- [connectedCallback](component.md#connectedcallback)
- [created](component.md#created)
- [destroyed](component.md#destroyed)
- [disconnectedCallback](component.md#disconnectedcallback)
- [dismissListeners](component.md#dismisslisteners)
- [fireMethod](component.md#firemethod)
- [initAttrs](component.md#initattrs)
- [initData](component.md#initdata)
- [listenEvents](component.md#listenevents)
- [listenUpdates](component.md#listenupdates)
- [renderStyles](component.md#renderstyles)
- [renderTemplate](component.md#rendertemplate)
- [rendered](component.md#rendered)
- [styles](component.md#styles)
- [template](component.md#template)
- [attach](component.md#attach)

## Properties

### attrs

• **attrs**: `any`

Before the component inicialization occurs, attrs property contains a
function that returns the inital attributes definition. When the
component is initialized, attrs property can be used as common mutable
object, filled with initial attributes and with the required listeners
to render the template when those values updates.

**`memberof`** Component

#### Defined in

[src/lib/component.ts:61](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L61)

___

### constructor

• **constructor**: typeof [`Component`](component.md)

constructor contains the current class instancer reference of
[Component](component.md) that allows to access to the definition values safely.

**`memberof`** Component

#### Defined in

[src/lib/component.ts:17](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L17)

___

### data

• **data**: `any`

Before the component inicialization occurs, data property contains a
function that returns the inital data definition. When the component is
initialized, data property can be used as common mutable object, filled
with initial data and with the required listeners to render the template
when those values updates.

**`memberof`** Component

#### Defined in

[src/lib/component.ts:50](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L50)

___

### open

• **open**: `boolean` = `true`

Creates an instance of [Component](component.md), attaching the shadowRoot if it
is not already attached, and initializing the compontent properties for
[Component.data](component.md#data) and {@link Component.attributes}.

**`memberof`** Component

#### Defined in

[src/lib/component.ts:38](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L38)

## Accessors

### host

• `get` **host**(): `Element`

host getter returns the host element of the current custom component if
it is a nested component. If it is the root one, the host getter returns
undefined.

**`readonly`**

**`memberof`** Component

#### Returns

`Element`

#### Defined in

[src/lib/component.ts:119](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L119)

___

### root

• `get` **root**(): `ShadowRoot`

root getter returns the shadow root document from the current element.

**`readonly`**

**`memberof`** Component

#### Returns

`ShadowRoot`

#### Defined in

[src/lib/component.ts:130](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L130)

___

### attrs

• `Static` `get` **attrs**(): `Object`

attrs getter returns by default an empty object. Developers can overwrite
this static getter to return their component attribute definition. Like
with the vanilla syntax, the attributes must be defined before component
implementation occurs. It is because the attribute definition is required
to be mappend on [Component.observedAttributes](component.md#observedattributes) and to listen for
changes on it using [Component.attributeChangedCallback](component.md#attributechangedcallback).

**`readonly`**

**`static`**

**`memberof`** Component

#### Returns

`Object`

#### Defined in

[src/lib/component.ts:147](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L147)

___

### data

• `Static` `get` **data**(): `Object`

#### Returns

`Object`

#### Defined in

[src/lib/component.ts:149](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L149)

___

### observedAttributes

• `Static` `Private` `get` **observedAttributes**(): `string`[]

observedAttributes constructs an array of attributes names with the keys
provided by [Component.attrs](component.md#attrs) getter. The updates on these
attributes will be handled by [Component.attributeChangedCallback](component.md#attributechangedcallback).

**`readonly`**

**`static`**

**`override`**

**`memberof`** Component

#### Returns

`string`[]

#### Defined in

[src/lib/component.ts:161](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L161)

## Methods

### attributeChangedCallback

▸ `Private` **attributeChangedCallback**(`ref`, `old`, `val`): `void`

attributeChangedCallback method handles any attribute value update. It
updates the current [Component.attrs](component.md#attrs) definition and fires the
template render process call [Component.renderTemplate](component.md#rendertemplate) method.

**`override`**

**`memberof`** Component

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `string` | The attribute updated name. |
| `old` | `any` | The previous value of the attribute. |
| `val` | `any` | The attribute value to update. |

#### Returns

`void`

#### Defined in

[src/lib/component.ts:436](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L436)

___

### castAttr

▸ `Private` **castAttr**(`from`, `to`): `String` \| `Number` \| `Boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `String` |
| `to` | `any` |

#### Returns

`String` \| `Number` \| `Boolean`

#### Defined in

[src/lib/component.ts:213](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L213)

___

### connectedCallback

▸ `Private` **connectedCallback**(): `void`

connectedCallback method is fired when the custom component is attached
to the target element. It starts the render of the template and the
styles, sets the listeners for component properties updates and child
elements events and then, call component definition method 'created' if
it exists.

**`override`**

**`memberof`** Component

#### Returns

`void`

#### Defined in

[src/lib/component.ts:398](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L398)

___

### created

▸ **created**(): `void`

created method is called when the component initialization is finished
and data containers are created and initialized with provided definitions.

**`memberof`** Component

#### Returns

`void`

#### Defined in

[src/lib/component.ts:92](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L92)

___

### destroyed

▸ **destroyed**(): `void`

destroyed method is called when the component is detached and the
listeners are dismissed.

**`memberof`** Component

#### Returns

`void`

#### Defined in

[src/lib/component.ts:108](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L108)

___

### disconnectedCallback

▸ `Private` **disconnectedCallback**(): `void`

disconnectedCallback method is fired when the custom component is
dettached from the target element. It dismiss de listeners over the
component properties and call component definition method 'destroyed' if
it exists.

**`override`**

**`memberof`** Component

#### Returns

`void`

#### Defined in

[src/lib/component.ts:419](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L419)

___

### dismissListeners

▸ `Private` **dismissListeners**(): `void`

dismissListeners cancels the listeners over the component data and
attributes {@link Data} instances.

**`memberof`** Component

#### Returns

`void`

#### Defined in

[src/lib/component.ts:298](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L298)

___

### fireMethod

▸ `Private` **fireMethod**(`name`, ...`args`): `any`

fireMethod tries to fire a component method if it is defined in the
custom component definition, aplying the current instance and passing the
rest of the arguments provided as parameters.

**`memberof`** Component

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Method name as string. |
| `...args` | `any`[] | Arguments to the method called. |

#### Returns

`any`

The result of executing the function.

#### Defined in

[src/lib/component.ts:186](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L186)

___

### initAttrs

▸ `Private` **initAttrs**(): `void`

initAttrs gets the initial data value calling attrs method of custom
component definition instance and creates a {@link Data} instance with
it. Alse checks if the attributes are already defined on the HTML and
gets theirs values.

**`memberof`** Component

#### Returns

`void`

#### Defined in

[src/lib/component.ts:239](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L239)

___

### initData

▸ `Private` **initData**(): `void`

initData gets the initial data value calling data method of custom
component definition instance and creates a {@link Data} instance with
it.

**`memberof`** Component

#### Returns

`void`

#### Defined in

[src/lib/component.ts:201](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L201)

___

### listenEvents

▸ `Private` **listenEvents**(): `void`

listEvents method iterates over all the child elements of the current
{@link ShadowRoot} checking if any of them has an event listener defined
by an attribute that starts with 'on-' followed by the event to listen.
If any of the childs has an event listener defined, the function gets the
listener defined and set as event listener of the element.

**`memberof`** Component

#### Returns

`void`

#### Defined in

[src/lib/component.ts:318](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L318)

___

### listenUpdates

▸ `Private` **listenUpdates**(): `void`

listenUpdates method registers the handlers to listen the data or
attributes changes. Any data change fires the template render function.
Any attribute change, updates the {@link HTMLElement} attributes to fire
[Component.attributeChangedCallback](component.md#attributechangedcallback). If the current value of the
attribute has already updated, prevent the listener action.

**`memberof`** Component

#### Returns

`void`

#### Defined in

[src/lib/component.ts:278](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L278)

___

### renderStyles

▸ `Private` **renderStyles**(): `void`

renderStyles method gets the computed styles from the component
definition calling 'styles' method using [Component.fireMethod](component.md#firemethod)
function. If the shadowRoot has not a style element, it is created and
the styles definition is appended to it then.

**`memberof`** Component

#### Returns

`void`

#### Defined in

[src/lib/component.ts:374](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L374)

___

### renderTemplate

▸ `Private` **renderTemplate**(): `void`

renderTemplate method gets the template defined into the component
definition calling to the method 'template' using
[Component.fireMethod](component.md#firemethod) function, and fires the render template
function providing the current shadowRoot as target.

**`memberof`** Component

#### Returns

`void`

#### Defined in

[src/lib/component.ts:358](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L358)

___

### rendered

▸ **rendered**(): `void`

rendered method is called when the component renderization (template and
styles) is finished and the listeners are setted.

**`memberof`** Component

#### Returns

`void`

#### Defined in

[src/lib/component.ts:100](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L100)

___

### styles

▸ **styles**(): `string` \| `void`

styles function returns the component style definition as string. The
definition must be CSS code and can contain properties like
[Component.data](component.md#data) and [Component.attrs](component.md#attrs) but the styles are not
updates-reactive, so if you need to change the appearance of the
component dynamically use [Component.attrs](component.md#attrs) to update the element
class.

**`memberof`** Component

#### Returns

`string` \| `void`

#### Defined in

[src/lib/component.ts:84](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L84)

___

### template

▸ `Abstract` **template**(): `any`

template function returns the component template definition using the
html string tag provided. Inside that function [Component.data](component.md#data) and
[Component.attrs](component.md#attrs) are accesible via `this` variable, as well as
others properties defined by the user into the component definition.

**`memberof`** Component

#### Returns

`any`

#### Defined in

[src/lib/component.ts:72](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L72)

___

### attach

▸ `Static` **attach**(`tag`, `definition`): `void`

attach method defines the custom element by the definition provided as
argument associated to the tag provided too.

**`static`**

**`memberof`** Component

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `definition` | `Object` |
| `definition.prototype` | `HTMLElement` |

#### Returns

`void`

#### Defined in

[src/lib/component.ts:455](https://github.com/elementumjs/component/blob/7e66a01/src/lib/component.ts#L455)
