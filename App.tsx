/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import RootStack from '@navigators/RootStack';

/* const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <CustomText style={styles.sectionTitle}>{title}</CustomText>
      <CustomText style={styles.sectionDescription}>{children}</CustomText>
    </View>
  );
}; */
const App = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
