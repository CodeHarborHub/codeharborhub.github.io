---
id: forms-in-react
title: Forms in React
sidebar_label: Forms in React
tags: [react, forms, frontend, web development, tutorial]
description: Learn how to handle forms in React comprehensively with examples covering controlled components, uncontrolled components, textarea, select, file input, and more. This extensive guide covers theory, usage, features, examples, best practices, alternatives, and advanced techniques.
---
# Adding Forms in React

You add a form with React like any other element:

```jsx title="Myform.jsx"

function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

<BrowserWindow>
    <form>
      <label htmlFor="name">Enter your name: </label>
      <input type="text" id="name" />
    </form>
</BrowserWindow>

This will work as normal, the form will submit and the page will refresh.

But this is generally not what we want to happen in React.

## Handling Forms

Handling forms is about how you handle the data when it changes value or gets submitted.

In HTML, form data is usually handled by the DOM.

In React, form data is usually handled by the components.

When the data is handled by the components, all the data is stored in the component state.

You can control changes by adding event handlers in the `onChange` attribute.

We can use the `useState` Hook to keep track of each input's value and provide a "single source of truth" for the entire application.

See the React Hooks section for more information on Hooks.

```jsx title="Myform.jsx"
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

<BrowserWindow>
    <form>
      <label htmlFor="name">Enter your name: </label>
      <input type="text" id="name" />
    </form>
</BrowserWindow>

## Forms

These docs are old and won’t be updated. Go to react.dev for the new React docs.

These new documentation pages teach modern React and include live examples:

- `<input>`
- `<select>`
- `<textarea>`

HTML form elements work a bit differently from other DOM elements in React because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.

### Controlled Components

In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components and only updated with `setState()`.

We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:

```jsx title="NameForm.jsx"
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

<BrowserWindow> 
    <form onSubmit={(event)=>{
       event.preventDefault();
        let name = event.target.elements.name.value;
        alert(`A name was submitted: ${name}`);
    }}>
      <label >Name: </label>
      <input type="text" id="name" required />
      <br />
      <input type="submit" />
    </form>
</BrowserWindow>


Since the `value` attribute is set on our form element, the displayed value will always be `this.state.value`, making the React state the source of truth. Since `handleChange` runs on every keystroke to update the React state, the displayed value will update as the user types.

With a controlled component, the input’s value is always driven by the React state. While this means you have to type a bit more code, you can now pass the value to other UI elements too or reset it from other event handlers.

### The `<textarea>` Tag

In HTML, a `<textarea>` element defines its text by its children:

```html
<textarea>
  Hello there, this is some text in a text area
</textarea>
```

In React, a `<textarea>` uses a `value` attribute instead. This way, a form using a `<textarea>` can be written very similarly to a form that uses a single-line input:

```jsx title="EssayForm"
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

<BrowserWindow> 
    <form onSubmit={(event)=>{
       event.preventDefault();
        let name = event.target.elements.name.value;
        alert(`An essay was submitted: ${name}`);
      }}>
      <div style={{display:"flex",justifyContent:"flex-start",gap:"0.5rem",alignItems:"center"}}>
          <label >Essay: </label>
          <textarea type="text" id="name" required />
      </div>
      <br />
      <input type="submit" />
    </form>
</BrowserWindow>

Notice that `this.state.value` is initialized in the constructor so that the text area starts off with some text in it.

### The `<select>` Tag

In HTML, `<select>` creates a drop-down list. For example, this HTML creates a drop-down list of flavors:

```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
```

Note that the Coconut option is initially selected because of the `selected` attribute. React, instead of using this `selected` attribute, uses a `value` attribute on the root `<select>` tag. This is more convenient in a controlled component because you only need to update it in one place. For example:

```jsx title="FlavorForm"
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return
    (  <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

<BrowserWindow> 
    <form onSubmit={(event)=>{
       event.preventDefault();
        let name = event.target.elements.name.value;
        alert(`Your favorite flavor is: ${name}`);
    }}>
      <div style={{display:"flex",justifyContent:"flex-start",gap:"0.5rem",alignItems:"center"}}>
          <label >  Pick your favorite flavor: </label>
          <select id="name" >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
      </div>
      <br />
      <input type="submit" />
    </form>
</BrowserWindow>

Overall, this makes it so that `<input type="text">`, `<textarea>`, and `<select>` all work very similarly - they all accept a `value` attribute that you can use to implement a controlled component.

### Handling Multiple Inputs

When you need to handle multiple controlled input elements, you can add a `name` attribute to each element and let the handler function choose what to do based on the value of `event.target.name`.

For example:

```jsx title="Reservation.jsx"
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```

Note how we used the ES6 computed property name syntax to update the state key corresponding to the given input name:

```jsx
this.setState({
  [name]: value
});
```

It is equivalent to this ES5 code:

```jsx
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

Also, since `setState()` automatically merges a partial state into the current state, we only needed to call it with the changed parts.

### Controlled Input Null Value

Specifying the `value` prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a `value` but the input is still editable, you may have accidentally set `value` to `undefined` or `null`.

The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)

```jsx
ReactDOM.createRoot(mountNode).render(<input value="hi" />);

setTimeout(function() {
  ReactDOM.createRoot(mountNode).render(<input value={null} />);
}, 1000);
```

### Alternatives to Controlled Components

It can sometimes be tedious to use controlled components because you need to write an event handler for every way your data can change and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out uncontrolled components, an alternative technique for implementing input forms.

### Fully-Fledged Solutions

If you’re looking for a complete solution including validation, keeping track of the visited fields, and handling form submission, Formik is one of the popular choices. However, it is built on the same principles of controlled components and managing state — so don’t neglect to learn them.

```jsx title="Myform.jsx"
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```

In this example, we're using the `useState` hook to manage the input field's value. The `name` state variable holds the value of the input field, and the `setName` function updates this state whenever the input field changes. This ensures that the input field's value is always controlled by React's state, providing a single source of truth for the form data.