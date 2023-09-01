# MoveNextOnEnter Script Documentation
## Meta Information

- **Creator**: Anders Elmén
- **Company**: Need2Code AB
- **Contact**: [anders@need2code.se](mailto:anders@need2code.se)

## Overview

`MoveNextOnEnter` is a JavaScript object that defines behavior for navigating through form input fields. When the user presses the Enter key, focus is shifted to the next input field in a predefined sequence.

## Dependencies

- [jQuery](https://jquery.com/) (Version 3.x or later)

## Initialization

To initialize the script, use:

```javascript
MoveNextOnEnter.init();
```

You can also provide a custom selector:

```javascript
MoveNextOnEnter.init(yourCustomSelector);
```

## Properties

- `Elements`: An array containing all DOM elements matching the selector.
- `autoSubmit`: A flag determining whether the form should automatically be submitted when the last element gains focus.
- `autoSubmitSelector`: A selector for the submit button in the form.
- `nextIndex`: Index for the next element in the `Elements` array.
- `currentIndex`: Index for the current element in the `Elements` array.
- `enabled`: Enable or disable the functionality.
- `_preventDefault`: Internal flag to prevent default behavior.
- `selector`: Custom selector to determine which elements should receive this behavior.

## Methods

### `init(s)`

Initializes the script and sets up necessary event listeners.

### `focus(obj)`

Sets focus on the specified object.

### `doAutoSubmit()`

Handles auto-submitting the form if `autoSubmit` is true.

### `addElement(e)`

Adds a new element to the `Elements` array.

### `addElementAt(i, e)`

Adds an element at a specific index in the `Elements` array.

### `removeElement(e)`

Removes an element from the `Elements` array.

### `reInit(enableAutoSubmit)`

Re-initializes the script, optionally with a new `autoSubmit` flag.

### `focusLast()`

Sets focus to the last element in the array.

### `focusFirst()`

Sets focus to the first element in the array.

### `isLast()`

Checks if the current element is the last in the array.

### `setFocus(element)`

Manually set the focus on a specific element and updates `currentIndex` and `nextIndex`.

## HTML Examples

Here are some example HTML forms that use the script:

```html
<!-- Example Form 1 -->
<form id="exampleForm1">
    <input type="text" id="field1" />
    <input type="text" id="field2" />
    <input type="submit" value="Submit" />
</form>

<!-- Example Form 2 -->
<form id="exampleForm2">
    <input type="number" id="numField1" />
    <select id="selectField">
        <option value="1">One</option>
        <option value="2">Two</option>
    </select>
    <input type="submit" value="Submit" />
</form>
```
