import React, {ReactNode} from 'react';
import {
  Text,
  StyleSheet,
  TextStyle,
  useColorScheme,
  StyleProp,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
type CustomTextProps = {
  children?: ReactNode;
  textType?: 'bold' | 'light' | 'medium' | 'regular' | 'semibold';
  style?: StyleProp<TextStyle> | StyleProp<TextStyle[]> | undefined;
};

const CustomText: React.FC<CustomTextProps> = ({children, textType, style}) => {
  const isDarkMode = useColorScheme() === 'dark';
  let textStyle = {};
  switch (textType) {
    case 'bold':
      textStyle = styles.bold;
      break;
    case 'light':
      textStyle = styles.light;
      break;
    case 'medium':
      textStyle = styles.medium;
      break;
    case 'regular':
      textStyle = styles.regular;
      break;
    case 'semibold':
      textStyle = styles.semibold;
      break;
    default:
      textStyle = styles.regular;
      break;
  }
  const passedStyle = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return (
    <Text
      style={[
        textStyle,
        {
          ...passedStyle,
          color: isDarkMode ? Colors.white : Colors.black,
        },
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  light: {
    fontFamily: 'Poppins-Light',
  },
  medium: {
    fontFamily: 'Poppins-Medium',
  },
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  semibold: {
    fontFamily: 'Poppins-Semibold',
  },
});

export default CustomText;
