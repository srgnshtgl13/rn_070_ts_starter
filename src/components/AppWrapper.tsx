import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleProp,
  useColorScheme,
  ViewStyle,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import GlobalStyles from '@global/styles';

type AppWrapperProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle> | StyleProp<ViewStyle[]>;
};

const AppWrapper: React.FC<AppWrapperProps> = ({children, style}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const passedStyle = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <SafeAreaView
      style={[backgroundStyle, GlobalStyles.SafeAreaContainer(1), passedStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
};

export default AppWrapper;
