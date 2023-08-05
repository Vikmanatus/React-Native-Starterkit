declare module 'react-native-config' {
  export interface NativeConfig {
    FAKE_SENSITIVE_VALUE: string;
    ANDROID_PACKAGE_IDENTIFIER: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
