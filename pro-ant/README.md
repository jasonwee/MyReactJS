# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## In the beginning

```bash
$ yarn create umi pro-ant
yarn create v1.22.17
warning package.json: No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Installed "create-umi@0.27.0" with binaries:
      - create-umi
? Select the boilerplate type ant-design-pro
? 🤓 Which language do you want to use? JavaScript
? 🚀 Do you need all the blocks or a simple scaffold? complete
> 🙈 complete mode can only use the version of antd@4
Cloning into 'pro-ant'...
remote: Enumerating objects: 486, done.
remote: Counting objects: 100% (486/486), done.
remote: Compressing objects: 100% (412/412), done.
remote: Total 486 (delta 80), reused 273 (delta 47), pack-reused 0
Receiving objects: 100% (486/486), 248.44 KiB | 4.78 MiB/s, done.
Resolving deltas: 100% (80/80), done.
> 🚚 clone success
> [Sylvanas] Prepare js environment...
> [JS] Clean up...
> Clean up...
📋 Copied to clipboard, just use Ctrl+V
✨ File Generate Done
Done in 21.67s.
$ cd pro-ant/
$ yarn


export NODE_OPTIONS=--openssl-legacy-provider
yarn start
```

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
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
