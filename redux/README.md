https://www.javatpoint.com/react-redux-example

# step 1
```
$ npx create-react-app redux
$ cd redux
$ npm install redux react-redux --save
$ cd src
$ mkdir actions components containers reducers
```

# step 2
It uses 'type' property to inform about data that should be sent to the Store. In this folder, we will create two files: index.js and index.spec.js. Here, we have created an action creator that returns our action and sets an id for every created item.
```
$ touch src/actions/index.js
$ touch src/action/index.spec.js
```

# step 3
As we know, Actions only trigger changes in the app, and the Reducers specify those changes. The Reducer is a function which takes two parameters 'Action' and 'State' to calculate and return an updated State. It read the payloads from the 'Actions' and then updates the 'Store' via the State accordingly.

In the given files, each Reducer managing its own part of the global State. The State parameter is different for every Reducer and corresponds to the part of the 'State' it manages. When the app becomes larger, we can split the Reducers into separate files and keep them completely independent and managing different data domains.

Here, we are using 'combineReducers' helper function to add any new Reducers we might use in the future.
```
$ touch src/reducers/index.js
$ touch src/reducers/todo.js
$ touch src/reducers/todo.spec.js
$ touch src/reducers/visibilityFilter.js
```

# step 4
It is a Presentational Component, which concerned with how things look such as markup, styles. It receives data and invokes callbacks exclusively via props. It does not know where the data comes from or how to change it. It only renders what is given to them.

```
$ touch src/components/App.js
$ touch src/components/Footer.js
$ touch src/components/Link.js
$ touch src/components/Todo.js
$ touch src/components/TodoList.js
```

# step 5
It is a Container Component which concerned with how things work such as data fetching, updates State. It provides data and behavior to presentational components or other container components. It uses Redux State to read data and dispatch Redux Action for updating data.
```
$ touch src/containers/AddTodo.js
$ touch src/containers/FilterLink.js
$ touch src/containers/VisibleTodoList.js
```

# step 6
All container components need access to the Redux Store to subscribe to it. For this, we need to pass it(store) as a prop to every container component. However, it gets tedious. So we recommend using special React Redux component called which make the store available to all container components without passing it explicitly. It used once when you render the root component.
```
$ touch src/index.js
```
