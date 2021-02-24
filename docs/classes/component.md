**[@elementumjs/component](../README.md)**

# Class: Component

Component class has the basic methods to control the component lifecycle,
mapping the properties and hot rendering the component template on properties
updates.

## Hierarchy

* [HTMLElement](component.md#htmlelement)

* [HTMLElement](component.md#htmlelement)

  ↳ **Component**

## Index

### Properties

* [HTMLElement](component.md#htmlelement)
* [attrs](component.md#attrs)
* [constructor](component.md#constructor)
* [data](component.md#data)
* [open](component.md#open)
* [HTMLElement](component.md#htmlelement)

### Accessors

* [host](component.md#host)
* [attrs](component.md#attrs)
* [observedAttributes](component.md#observedattributes)

### Methods

* [attributeChangedCallback](component.md#attributechangedcallback)
* [callMethod](component.md#callmethod)
* [connectedCallback](component.md#connectedcallback)
* [created](component.md#created)
* [destroyed](component.md#destroyed)
* [disconnectedCallback](component.md#disconnectedcallback)
* [dismissListeners](component.md#dismisslisteners)
* [initAttrs](component.md#initattrs)
* [initData](component.md#initdata)
* [listenEvents](component.md#listenevents)
* [listenUpdates](component.md#listenupdates)
* [renderStyles](component.md#renderstyles)
* [renderTemplate](component.md#rendertemplate)
* [rendered](component.md#rendered)
* [styles](component.md#styles)
* [template](component.md#template)
* [attach](component.md#attach)

## Properties

### HTMLElement

•  **HTMLElement**: { constructor: () => [HTMLElement](component.md#htmlelement) ; prototype: [HTMLElement](component.md#htmlelement)  }

#### Type declaration:

Name | Type |
------ | ------ |
`constructor` | () => [HTMLElement](component.md#htmlelement) |
`prototype` | [HTMLElement](component.md#htmlelement) |

___

### attrs

• `Abstract` **attrs**: *typeof* Data \| any

Before the component inicialization occurs, attrs property contains a
function that returns the inital attributes definition. When the
component is initialized, attrs property can be used as common mutable
object, filled with initial attributes and with the required listeners
to render the template when those values updates.

**`memberof`** Component

___

### constructor

\+ **new Component**(): [Component](component.md)

constructor contains the current class instancer reference of
[Component](component.md) that allows to access to the definition values safely.

**`memberof`** Component

**Returns:** [Component](component.md)

___

### data

• `Abstract` **data**: *typeof* Data \| any

Before the component inicialization occurs, data property contains a
function that returns the inital data definition. When the component is
initialized, data property can be used as common mutable object, filled
with initial data and with the required listeners to render the template
when those values updates.

**`memberof`** Component

___

### open

•  **open**: boolean = true

Creates an instance of [Component](component.md), attaching the shadowRoot if it
is not already attached, and initializing the compontent properties for
[Component.data](component.md#data) and {@link Component.attributes}.

**`memberof`** Component

___

### HTMLElement

▪ `Static` **HTMLElement**: { constructor: () => [HTMLElement](component.md#htmlelement) ; prototype: [HTMLElement](component.md#htmlelement)  }

#### Type declaration:

Name | Type |
------ | ------ |
`constructor` | () => [HTMLElement](component.md#htmlelement) |
`prototype` | [HTMLElement](component.md#htmlelement) |

## Accessors

### host

• get **host**(): Element

host getter returns the host element of the current custom component if
it is a nested component. If it is the root one, the host getter returns
undefined.

**`readonly`** 

**`memberof`** Component

**Returns:** Element

___

### attrs

• `Static`get **attrs**(): Object

attrs getter returns by default an empty object. Developers can overwrite
this static getter to return their component attribute definition. Like
with the vanilla syntax, the attributes must be defined before component
implementation occurs. It is because the attribute definition is required
to be mappend on [Component.observedAttributes](component.md#observedattributes) and to listen for
changes on it using [Component.attributeChangedCallback](component.md#attributechangedcallback).

**`readonly`** 

**`static`** 

**`memberof`** Component

**Returns:** Object

___

### observedAttributes

• `Static` `Private`get **observedAttributes**(): Array\<string>

observedAttributes constructs an array of attributes names with the keys
provided by [Component.attrs](component.md#attrs) getter. The updates on these
attributes will be handled by [Component.attributeChangedCallback](component.md#attributechangedcallback).

**`readonly`** 

**`static`** 

**`override`** 

**`memberof`** Component

**Returns:** Array\<string>

## Methods

### attributeChangedCallback

▸ `Private`**attributeChangedCallback**(`ref`: string, `old`: any, `val`: any): void

attributeChangedCallback method handles any attribute value update. It
updates the current [Component.attrs](component.md#attrs) definition and fires the
template render process call [Component.renderTemplate](component.md#rendertemplate) method.

**`override`** 

**`memberof`** Component

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ref` | string | The attribute updated name. |
`old` | any | The previous value of the attribute. |
`val` | any | The attribute value to update. |

**Returns:** void

___

### callMethod

▸ `Private`**callMethod**(`name`: string, ...`args`: Array\<any>): any

callMethod tries to fire a component method if it is defined in the
custom component definition, aplying the current instance and passing the
rest of the arguments provided as parameters.

**`memberof`** Component

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Method name as string. |
`...args` | Array\<any> | Arguments to the method called. |

**Returns:** any

The result of executing the function.

___

### connectedCallback

▸ `Private`**connectedCallback**(): void

connectedCallback method is fired when the custom component is attached
to the target element. It starts the render of the template and the
styles, sets the listeners for component properties updates and child
elements events and then, call component definition method "created" if
it exists.

**`override`** 

**`memberof`** Component

**Returns:** void

___

### created

▸ `Abstract`**created**(): void

created method is called when the component initialization is finished
and data containers are created and initialized with provided definitions.

**`memberof`** Component

**Returns:** void

___

### destroyed

▸ `Abstract`**destroyed**(): void

destroyed method is called when the component is detached and the
listeners are dismissed.

**`memberof`** Component

**Returns:** void

___

### disconnectedCallback

▸ `Private`**disconnectedCallback**(): void

disconnectedCallback method is fired when the custom component is
dettached from the target element. It dismiss de listeners over the
component properties and call component definition method "destroyed" if
it exists.

**`override`** 

**`memberof`** Component

**Returns:** void

___

### dismissListeners

▸ `Private`**dismissListeners**(): void

dismissListeners cancels the listeners over the component data and
attributes {@link Data} instances.

**`memberof`** Component

**Returns:** void

___

### initAttrs

▸ `Private`**initAttrs**(): void

initAttrs gets the initial data value calling attrs method of custom
component definition instance and creates a {@link Data} instance with
it. Alse checks if the attributes are already defined on the HTML and
gets theirs values.

**`memberof`** Component

**Returns:** void

___

### initData

▸ `Private`**initData**(): void

initData gets the initial data value calling data method of custom
component definition instance and creates a {@link Data} instance with
it.

**`memberof`** Component

**Returns:** void

___

### listenEvents

▸ `Private`**listenEvents**(): void

listEvents method iterates over all the child elements of the current
{@link ShadowRoot} checking if any of them has an event listener defined
by an attribute that starts with "on-" followed by the event to listen.
If any of the childs has an event listener defined, the function gets the
listener defined and set as event listener of the element.

**`memberof`** Component

**Returns:** void

___

### listenUpdates

▸ `Private`**listenUpdates**(): void

listenUpdates method registers the handlers to listen the data or
attributes changes. Any data change fires the template render function.
Any attribute change, updates the [HTMLElement](component.md#htmlelement) attributes to fire
[Component.attributeChangedCallback](component.md#attributechangedcallback). If the current value of the
attribute has already updated, prevent the listener action.

**`memberof`** Component

**Returns:** void

___

### renderStyles

▸ `Private`**renderStyles**(): void

renderStyles method gets the computed styles from the component
definition calling "styles" method using [Component.callMethod](component.md#callmethod)
function. If the shadowRoot has not a style element, it is created and
the styles definition is appended to it then.

**`memberof`** Component

**Returns:** void

___

### renderTemplate

▸ `Private`**renderTemplate**(): void

renderTemplate method gets the template defined into the component
definition calling to the method "template" using
[Component.callMethod](component.md#callmethod) function, and fires the render template
function providing the current shadowRoot as target.

**`memberof`** Component

**Returns:** void

___

### rendered

▸ `Abstract`**rendered**(): void

rendered method is called when the component renderization (template and
styles) is finished and the listeners are setted.

**`memberof`** Component

**Returns:** void

___

### styles

▸ `Abstract`**styles**(): string

styles function returns the component style definition as string. The
definition must be CSS code and can contain properties like
[Component.data](component.md#data) and [Component.attrs](component.md#attrs) but the styles are not
updates-reactive, so if you need to change the appearance of the
component dynamically use [Component.attrs](component.md#attrs) to update the element
class.

**`memberof`** Component

**Returns:** string

___

### template

▸ `Abstract`**template**(): *typeof* Template

template function returns the component template definition using the
html string tag provided. Inside that function [Component.data](component.md#data) and
[Component.attrs](component.md#attrs) are accesible via `this` variable, as well as
others properties defined by the user into the component definition.

**`memberof`** Component

**Returns:** *typeof* Template

___

### attach

▸ `Static`**attach**(`tag`: string, `definition`: *typeof* [HTMLElement](component.md#htmlelement)): void

attach method defines the custom element by the definition provided as
argument associated to the tag provided too.

**`static`** 

**`memberof`** Component

#### Parameters:

Name | Type |
------ | ------ |
`tag` | string |
`definition` | *typeof* [HTMLElement](component.md#htmlelement) |

**Returns:** void
