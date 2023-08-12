import React, {useEffect, useState} from 'react';
import {Button, Linking, SafeAreaView, Text} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import ServicesManager from './modules/services/ServicesManager';
import {LoginScreen} from './modules/login';
import {ALLOWED_LINKS} from './types';
import {ProfileScreen} from './modules/profile';
import {NewsScreen} from './modules/news';

function App(): React.JSX.Element {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);
  const [isAppLink, setIsAppLink] = useState<boolean>(false);
  const [isLoginRequired, setIsLoginRequired] = useState<boolean>(false);
  const [isProfileRequired, setIsProfileRequired] = useState<boolean>(false);
  const [isNewsRequired, setIsNewsRequired] = useState<boolean>(false);
  useEffect(() => {
    new ServicesManager().init().then(() => {
      setIsAppReady(true);
      crashlytics().log('App mounted and business services initialized.');
    });
  }, []);
  useEffect(() => {
    Linking.getInitialURL().then(result => {
      if (result) {
        setIsAppLink(true);
        switch (result) {
          case ALLOWED_LINKS.AUTH_ENDPOINT:
            setIsLoginRequired(true);
            break;
          case ALLOWED_LINKS.PROFILE_ENDPOINT:
            setIsProfileRequired(true);
            break;
          case ALLOWED_LINKS.NEWS_ENDPOINT:
            setIsNewsRequired(true);
            break;
        }
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
  if (isAppReady && isAppLink && isLoginRequired) {
    return <LoginScreen />;
  }
  if (isAppReady && isAppLink && isProfileRequired) {
    return <ProfileScreen />;
  }
  if (isAppReady && isAppLink && isNewsRequired) {
    return <NewsScreen />;
  }
  return (
    <SafeAreaView>
      <Text>Welcome to React-Native Starterkit</Text>
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />
    </SafeAreaView>
  );
}

export default App;
