import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import ServicesManager from './modules/services/ServicesManager';
import Config from 'react-native-config';

function App(): React.JSX.Element {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);
  useEffect(() => {
    new ServicesManager().init().then(() => {
      setIsAppReady(true);
      crashlytics().log('App mounted and business services initialized.');
      crashlytics().log('Env variable: ' + Config.FAKE_SENSITIVE_VALUE);
    });
  }, []);
  if (!isAppReady) {
    return (
      <SafeAreaView>
        <Text>Initializing application</Text>
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
