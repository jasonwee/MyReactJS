

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
