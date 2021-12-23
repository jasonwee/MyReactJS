ensure nodejs installation path is export

```
$ node --version
v17.3.0
$ npx --version
8.3.0
$ npm --version
8.3.0
```

convert reactjs to native javascript
```
mkdir foo
cd foo/
npm init -y
npm install babel-cli@6 babel-preset-react-app@3
mkdir src
```

create a reactjs project
```
npx create-react-app my-app
cd my-app
npm start
```

start the dev server
```
npm start
```

convert from jsx to native javascript
```
npx babel --watch src --out-dir . --presets react-app/prod
```
