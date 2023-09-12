import React, {useRef, useState} from 'react';

import {
  Animated,
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
/**
 * App component
 */
function App(): React.JSX.Element {
  const screenHeight = Dimensions.get('window').height;
  const drawerTranslateY = useRef(new Animated.Value(0)).current;
  const [isExpanded, setIsExpanded] = useState(false);
  const animateDrawer = () => {
    const targetValue = isExpanded ? 0 : screenHeight - 50;

    Animated.timing(drawerTranslateY, {
      toValue: targetValue,
      duration: 500, // 5 seconds for testing
      useNativeDriver: true,
    }).start(() => setIsExpanded(!isExpanded)); // Update state when animation finishes
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Start Animation" onPress={animateDrawer} />

      <Animated.View
        pointerEvents="none"
        style={[
          styles.overlay,
          {
            opacity: drawerTranslateY.interpolate({
              extrapolate: 'clamp',
              inputRange: [0, screenHeight - 50],
              outputRange: [0.7, 0],
            }),
          },
        ]}>
        <BlurView
          blurAmount={20} // Static blurAmount
          blurType="light"
        />
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
export default App;
