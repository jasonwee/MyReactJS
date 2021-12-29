## notes
A component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method.

To "remember" things, components use state.

In JavaScript classes, you need to always call super when defining the constructor of a subclass. All React component classes that have a constructor should start with a super(props) call.

dev tools : https://chrome.google.com/webstore/detail/react-developer-tools/

In React, function components are a simpler way to write components that only contain a render method and don’t have their own state. Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered. Function components are less tedious to write than classes, and many components can be expressed this way.

A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.

class component
```
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```

function component
```
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
```

Install the Node Version Manager (NVM) for Node.js. This program helps you manage different Node.js versions on a single system.

JSX = JavaScript Xml

need 2 scripts
* react : to create element
* react-dom : to render elements to dom.

create-react-app includes built tools such as webpack, Babel, and ESLint.

ES6 stands for ECMAScript 6.

JSX follows XML rules, and therefore HTML elements must be properly closed.

The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX. Use attribute className instead.

Always use the setState() method to change the state object, it will ensure that the component knows its been updated and calls the render() method (and all the other lifecycle methods).


Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

constructor()
getDerivedStateFromProps()
render()
componentDidMount()
The render() method is required and will always be called, the others are optional and will be called if you define them.
