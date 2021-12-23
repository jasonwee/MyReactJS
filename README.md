ensure nodejs installation path is export

```
$ node --version
v17.3.0
$ npx --version
8.3.0
$ npm --version
8.3.0
```




create a project
```
mkdir foo
cd foo/
npm init -y
npm install babel-cli@6 babel-preset-react-app@3
mkdir src
```

convert from jsx to native javascript
```
npx babel --watch src --out-dir . --presets react-app/prod
```
