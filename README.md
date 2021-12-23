ensure nodejs installation path is export

```
$ node --version
v17.3.0
$ npx --version
8.3.0
$ npm --version
8.3.0
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

deploy to production
```
npm run build
# then check in build folder
```




convert from jsx to native javascript
```
mkdir foo
cd foo/
npm init -y
npm install babel-cli@6 babel-preset-react-app@3
mkdir src
npx babel --watch src --out-dir . --presets react-app/prod
```
