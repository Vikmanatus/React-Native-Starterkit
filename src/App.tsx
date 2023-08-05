import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import dynamicLinks from '@react-native-firebase/dynamic-links';

function App(): React.JSX.Element {
  // const [isAppReady, setIsAppReady] = useState<boolean>(false);
  const [isDynamicLink, setIsDynamicLink] = useState<boolean>(false);
  // useEffect(() => {
  //   new ServicesManager().init().then(() => {
  //     setIsAppReady(true);
  //     crashlytics().log('App mounted and business services initialized.');
  //   });
  // }, []);
  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        if (link?.url === 'https://www.allocine.fr/film') {
          setIsDynamicLink(true);
          // ...set initial route as offers screen
        }
      });
  }, []);
  if (isDynamicLink) {
    return (
      <SafeAreaView>
        <Text>You have opened the app with the dynamic link</Text>
      </SafeAreaView>
    );
  }
  // if (!isAppReady) {
  //   return (
  //     <SafeAreaView>
  //       <Text>Initializing application</Text>
  //     </SafeAreaView>
  //   );
  // }
  return (
    <SafeAreaView>
      <Text>Welcome to React-Native Starterkit</Text>
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />
    </SafeAreaView>
  );
}

export default App;
