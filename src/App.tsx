import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import ServicesManager from './modules/services/ServicesManager';
import crashlytics from '@react-native-firebase/crashlytics';

function App(): React.JSX.Element {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    new ServicesManager().init().then(() => {
      setIsAppReady(true);
      crashlytics().log('App mounted and business services initialized.');
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
