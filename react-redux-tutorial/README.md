https://www.freecodecamp.org/news/how-to-use-redux-in-reactjs-with-real-life-examples-687ab4441b85/


When working with Redux, you will need three main things:

* actions: these are objects that should have two properties, one describing the type of action, and one describing what should be changed in the app state.
* reducers: these are functions that implement the behavior of the actions. They change the state of the app, based on the action description and the state change description.
* store: it brings the actions and reducers together, holding and changing the state for the whole app — there is only one store.

setup
```
source init-env-nodejs18.sh
npx create-react-app react-redux-tutorial
cd react-redux-tutorial
npm install redux react-redux
npm start
```

redux work
```
$ cd src
$ mkdir actions
$ touch actions/startAction.js
$ touch actions/stopAction.js
```

```
$ mkdir reducers
$ touch reducers/rotateReducer.js

```

```
$ touch store.js
```
