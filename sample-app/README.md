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
```


react
```
touch src/index.js
touch src/App.js
touch src/App.css
```
