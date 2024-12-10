# @zjkuang/react-native-dot-env

A package for managing .env file in React Native projects

## Installation

```sh
npm install @zjkuang/react-native-dot-env
```
or
```sh
yarn add @zjkuang/react-native-dot-env
```

## Usage


```js
import { multiply } from '@zjkuang/react-native-dot-env';

// ...

const result = await multiply(3, 7);
```

## Troubleshooting

### Not linked to the target app

```
The package '@zjkuang/react-native-dot-env' doesn't seem to be linked. ...
```

If your app is a monorepo project, and the `android/` and `ios/` folders are not the immediate child folders of the project's root folder, you need to `yarn add` it to the package which has `android/` and `ios/` as its immediate child folders and then from that package
```js
export * from '@zjkuang/react-native-dot-env';
```

### Can't import the module or the imported module is not typescript-ed

In your app's tsconfig.json, check the setting for `compilerOptions.moduleResolution`, and if it is `"node"`, you need to change it to `"node16"`. (`"node"`, aka `"node10"`, is outdated.)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
