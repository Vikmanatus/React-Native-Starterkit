import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {fakeComplexFunction} from './utils';

function App(): React.JSX.Element {
  useEffect(() => {
    const test = fakeComplexFunction();
  }, []);
  return (
    <SafeAreaView>
      <Text>Welcome to ReaclmlktNative Starterkit</Text>
    </SafeAreaView>
  );
}

export default App;
