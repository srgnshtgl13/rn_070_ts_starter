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
  error?: boolean;
};

const CustomText: React.FC<CustomTextProps> = ({
  children,
  textType,
  style,
  error = false,
}) => {
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
  const getColor = () => {
    if (error) {
      return '#dc143c';
    }
    return isDarkMode ? Colors.white : Colors.black;
  };
  return (
    <Text
      style={[
        textStyle,
        {
          color: getColor(),
          ...passedStyle,
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
