/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    'ios.dev.debug': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Debug-iphonesimulator/ReactNativeStarterkit-Development.app',
      build:
        'xcodebuild -workspace ios/ReactNativeStarterkit.xcworkspace -scheme ReactNativeStarterkit-Development -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'ios.dev.release': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Release-iphonesimulator/ReactNativeStarterkit-Development.app',
      build:
        'xcodebuild -workspace ios/ReactNativeStarterkit-Development.xcworkspace -scheme ReactNativeStarterkit-Development -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.dev.debug': {
      type: 'android.apk',
      binaryPath:
        'android/app/build/outputs/apk/Development/debug/app-Development-debug.apk',
      build:
        'cd android && ENVFILE=.env.dev ./gradlew assembleDevelopment assembleAndroidTest -DtestBuildType=debug',
      reversePorts: [8081],
    },
    'android.dev.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build:
        'cd android && ENVFILE=.env.dev ./gradlew assembleRelease assembleAndroidTest  -DtestBuildType=release',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 12',
      },
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_6_Pro_API_33',
      },
    },
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.dev.debug',
    },
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.dev.release',
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.dev.debug',
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.dev.release',
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.dev.debug',
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.dev.release',
    },
  },
};
