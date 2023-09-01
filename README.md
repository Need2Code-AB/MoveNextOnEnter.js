# MoveNextOnEnter Script Documentation
## Meta Information

- **Creator**: Anders Elmén
- **Company**: Need2Code AB
- **Contact**: [anders@need2code.se](mailto:anders@need2code.se)
- **Part of WMS**: Pineapple

## A Note from the Creator

I've decided to share this script as a token of gratitude to the open-source community. I've been on the consuming end of open-source for a long time and have benefitted immensely from the contributions of developers worldwide. Open-source is a symbiotic relationship, and sharing this script is my way of giving back. I hope it serves you as well as the open-source community has served me. 

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
    <button id="autosubmit" type="submit">Auto Submit</button>
</form>

<!-- Example Form 2 -->
<form id="exampleForm2">
    <input type="number" id="numField1" />
    <select id="selectField">
        <option value="1">One</option>
        <option value="2">Two</option>
    </select>
    <button id="autosubmit" type="submit">Auto Submit</button>
</form>
```
## jQuery Example

```javascript
$(function() {
  // Initialize the MoveNextOnEnter script
  MoveNextOnEnter.init();

  // Add custom element to the sequence
  MoveNextOnEnter.addElement('#customElement');

  // Use an event to trigger MoveNextOnEnter on 'Enter' press
  $('#yourInput').keydown(function(e) {
    if (e.keyCode === 13) {
      MoveNextOnEnter.setFocus(this);
    }
  });
});
```
## Contribution

Feel free to contribute to this script as it's part of the open-source community. Any improvements or suggestions are welcome.
