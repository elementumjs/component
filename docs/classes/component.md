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

### Methods

- [created](component.md#created)
- [destroyed](component.md#destroyed)
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

[component.ts:69](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L69)

___

### constructor

• **constructor**: typeof [`Component`](component.md)

constructor contains the current class instancer reference of
[Component](component.md) that allows to access to the definition values safely.

**`memberof`** Component

#### Defined in

[component.ts:25](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L25)

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

[component.ts:58](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L58)

___

### open

• **open**: `boolean` = `true`

Creates an instance of [Component](component.md), attaching the shadowRoot if it
is not already attached, and initializing the compontent properties for
[Component.data](component.md#data) and {@link Component.attributes}.

**`memberof`** Component

#### Defined in

[component.ts:46](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L46)

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

[component.ts:127](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L127)

___

### root

• `get` **root**(): `ShadowRoot`

root getter returns the shadow root document from the current element.

**`readonly`**

**`memberof`** Component

#### Returns

`ShadowRoot`

#### Defined in

[component.ts:138](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L138)

___

### attrs

• `Static` `get` **attrs**(): `Object`

attrs getter returns by default an empty object. Developers can overwrite
this static getter to return their component attribute definition. Like
with the vanilla syntax, the attributes must be defined before component
implementation occurs. It is because the attribute definition is required
to be mappend on {@link Component.observedAttributes} and to listen for
changes on it using {@link Component.attributeChangedCallback}.

**`readonly`**

**`static`**

**`memberof`** Component

#### Returns

`Object`

#### Defined in

[component.ts:155](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L155)

___

### data

• `Static` `get` **data**(): `Object`

#### Returns

`Object`

#### Defined in

[component.ts:157](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L157)

## Methods

### created

▸ **created**(): `void`

created method is called when the component initialization is finished
and data containers are created and initialized with provided definitions.

**`memberof`** Component

#### Returns

`void`

#### Defined in

[component.ts:100](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L100)

___

### destroyed

▸ **destroyed**(): `void`

destroyed method is called when the component is detached and the
listeners are dismissed.

**`memberof`** Component

#### Returns

`void`

#### Defined in

[component.ts:116](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L116)

___

### rendered

▸ **rendered**(): `void`

rendered method is called when the component renderization (template and
styles) is finished and the listeners are setted.

**`memberof`** Component

#### Returns

`void`

#### Defined in

[component.ts:108](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L108)

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

[component.ts:92](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L92)

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

[component.ts:80](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L80)

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

#### Returns

`void`

#### Defined in

[component.ts:463](https://github.com/elementumjs/component/blob/ab12503/src/lib/component.ts#L463)
