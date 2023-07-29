import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import ServicesManager from './modules/services/ServicesManager';

function App(): React.JSX.Element {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    new ServicesManager().init().then(() => {
      setIsAppReady(true);
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
    </SafeAreaView>
  );
}

export default App;
