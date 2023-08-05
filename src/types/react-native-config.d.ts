declare module 'react-native-config' {
  export interface NativeConfig {
    FAKE_SENSITIVE_VALUE: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
