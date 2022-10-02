https://www.sitepoint.com/react-with-typescript-best-practices/

see sample project my-app
```
npx create-react-app my-app --template typescript
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react --dev
yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev

```


# tslint.json
TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors. It is widely supported across modern editors & build systems and can be customized with your own lint rules, configurations, and formatters.

https://palantir.github.io/tslint/usage/configuration/


# webpack.config.js
this is webpack configuration file. this file is optional as it has default config and its value. if you want to override those default value, create this file and place at the root project, it will be automatically read.

documentation for the config definition : https://webpack.js.org/configuration/


# typescript online editor
https://www.typescriptlang.org/play


# TypeScript Compiler
The TypeScript compiler is itself a .ts file compiled down to JavaScript (.js) file. The TSC (TypeScript Compiler) is a source-to-source compiler (transcompiler / transpiler).

```
app.ts ---> tsc app.ts ---> app.js
```

