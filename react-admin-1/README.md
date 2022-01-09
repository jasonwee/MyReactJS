# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.


## project initialize
```bash
mkdir react-admin-1
cd react-admin-1
npm create umi
? Select the boilerplate type ant-design-pro
? 🤓 Which language do you want to use? JavaScript
? 🚀 Do you need all the blocks or a simple scaffold? simple
```

## Environment Prepare

Install `node_modules`:

```bash
npm install
```


## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
# for node v17.3.0, need to export node options
$ export NODE_OPTIONS=--openssl-legacy-provider
$ npm start
```

### how to add page

```bash
cd src/pages/
touch NewPage.js NewPage.less
cd ../../
vim config/routes.js
  {
    name: 'newPage',
    icon: 'home',
    path:'/new',
    component:'./NewPage',
  },
```

### how to add graph

```

npm install @ant-design/charts --save


config/config.js
  scripts: [
  'https://unpkg.com/react@17/umd/react.production.min.js',
  'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
  'https://unpkg.com/@ant-design/charts@1.0.5/dist/charts.min.js',
  //Use organization chart, flowchart, capital flow chart, indentation tree chart to use
  'https://unpkg.com/@ant-design/charts@1.0.5/dist/charts_g6.min.js',
  ],
  externals: {
    react:'React',
    'react-dom':'ReactDOM',
    "@ant-design/charts": "charts"
  },

then add the code to your page

```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).
