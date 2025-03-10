import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@zjkuang/react-native-dot-env' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ReactNativeDotEnv = NativeModules.ReactNativeDotEnv
  ? NativeModules.ReactNativeDotEnv
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return ReactNativeDotEnv.multiply(a, b);
}

export function pwd(): Promise<string> {
  return ReactNativeDotEnv.pwd();
}

export function ls(path: string): Promise<any> {
  return ReactNativeDotEnv.ls(path);
}
