https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658


step
```
source env 
# if this is the new project, git add it
git init
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (sample-app) .
Sorry, name cannot start with a period.
package name: (sample-app) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /home/jason/sample-app/package.json:

{
  "name": "sample-app",
  "version": "1.0.0",
  "description": "https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes
$ tree .
.
├── package.json
└── README.md

0 directories, 2 files
$ mkdir public src
$ npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0
$ npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2
$ npm install react@16.5.2 react-dom@16.5.2
$ npm install react-hot-loader@4.3.11
$ npm audit fix --force
```


react
```
$ touch src/index.js
$ touch src/App.js
$ touch src/App.css
$ export NODE_OPTIONS=--openssl-legacy-provider
$ npm start
```

to build
```
$ export NODE_OPTIONS=--openssl-legacy-provider
$ npm run build

> sample-app@1.0.0 build
> webpack --mode production

Hash: d564f831b5331bd1776a
Version: webpack 4.46.0
Time: 972ms
Built at: 12/27/2021 10:50:10 PM
    Asset      Size  Chunks             Chunk Names
bundle.js  25.3 KiB       0  [emitted]  main
Entrypoint main = bundle.js
 [0] ./node_modules/react/index.js 190 bytes {0} [built]
 [1] ./node_modules/css-loader!./src/App.css 233 bytes {0} [built]
 [2] ./node_modules/react-hot-loader/index.js 1.55 KiB {0} [built]
 [3] ./src/index.js 3.79 KiB {0} [built]
 [4] (webpack)/buildin/harmony-module.js 573 bytes {0} [built]
 [5] ./node_modules/react/cjs/react.production.min.js 6.52 KiB {0} [built]
 [6] ./node_modules/object-assign/index.js 2.06 KiB {0} [built]
 [7] ./src/App.css 1.04 KiB {0} [built]
 [8] ./node_modules/css-loader/lib/css-base.js 2.21 KiB {0} [built]
 [9] ./node_modules/style-loader/lib/addStyles.js 10.2 KiB {0} [built]
[10] ./node_modules/style-loader/lib/urls.js 2.94 KiB {0} [built]
[11] ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js 1.08 KiB {0} [built]
```
