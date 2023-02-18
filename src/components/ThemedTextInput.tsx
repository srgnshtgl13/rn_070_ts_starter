import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';
import CustomText from './CustomText';
import GlobalStyles from 'global/styles';
interface CustomTextInputProps extends TextInputProps {
  textType?: 'bold' | 'light' | 'medium' | 'regular' | 'semibold';
  label?: string;
  containerStyle?: StyleProp<ViewStyle> | StyleProp<ViewStyle[]> | undefined;
}

const ThemedTextInput: React.FC<CustomTextInputProps> = ({
  textType,
  label,
  containerStyle,
  ...props
}) => {
  const {colors} = useTheme();
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
      textStyle = styles.bold;
      break;
  }
  const passedContainerStyle = Array.isArray(containerStyle)
    ? Object.assign({}, ...containerStyle)
    : containerStyle;
  return (
    <View
      style={[
        styles.border,
        {borderColor: colors.border},
        GlobalStyles.pd('5%', 'left'),
        GlobalStyles.pd('1%', 'top'),
        passedContainerStyle,
      ]}>
      {label && (
        <CustomText textType="regular" style={styles.silverText}>
          {label}
        </CustomText>
      )}
      <TextInput
        {...props}
        style={[
          GlobalStyles.fontSize(16),
          props.style,
          textStyle,
          {
            color: colors.text,
          },
        ]}
      />
    </View>
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
  border: {
    borderWidth: 2,
    borderRadius: 50,
  },
  silverText: {
    color: 'silver',
  },
});

export default ThemedTextInput;
