import React, {useEffect, useState} from 'react';
import {Button, Linking, SafeAreaView, Text} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import ServicesManager from './modules/services/ServicesManager';

function App(): React.JSX.Element {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);
  const [isAppLink, setIsAppLink] = useState<boolean>(false);
  useEffect(() => {
    new ServicesManager().init().then(() => {
      setIsAppReady(true);
      crashlytics().log('App mounted and business services initialized.');
    });
  }, []);
  useEffect(() => {
    Linking.getInitialURL().then(result => {
      console.log({result});
      if (result) {
        setIsAppLink(true);
      }
    });
  }, []);
  if (!isAppReady) {
    return (
      <SafeAreaView>
        {isAppLink ? (
          <Text>
            Thanks for using universal links, we are initializing the
            application
          </Text>
        ) : (
          <Text>Initializing application services</Text>
        )}
      </SafeAreaView>
    );
  }
  if (isAppLink && isAppReady) {
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
