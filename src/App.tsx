import React, {useEffect, useState} from 'react';
import {Button, Linking, SafeAreaView, Text} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import ServicesManager from './modules/services/ServicesManager';
import Config from 'react-native-config';

function App(): React.JSX.Element {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);
  const [isAppLink, setIsAppLink] = useState<boolean>(false);
  useEffect(() => {
    new ServicesManager().init().then(() => {
      setIsAppReady(true);
      crashlytics().log('App mounted and business services initialized.');
      console.log('TEST: ', Config.ANDROID_PACKAGE_IDENTIFIER);
      crashlytics().log('Env variable: ' + Config.FAKE_SENSITIVE_VALUE);
      crashlytics().log('App ready to be used and initialized');
    });
  }, []);
  useEffect(() => {
    Linking.getInitialURL().then(result => {
      console.log({result});
      setIsAppLink(true);
    });
  }, []);
  if (!isAppReady) {
    return (
      <SafeAreaView>
        <Text>Initializing application</Text>
      </SafeAreaView>
    );
  }
  if (isAppLink) {
    return (
      <SafeAreaView>
        <Text>You opened the application with a universal links</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <Text>Welcome to React-Native Starterkit</Text>
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />
    </SafeAreaView>
  );
}

export default App;
