import {useTheme} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import {Colors as NewAppScreenColors} from 'react-native/Libraries/NewAppScreen';
import CustomText from './CustomText';
import GlobalStyles from 'global/styles';
interface CustomPressableProps extends PressableProps {
  label?: string;
  labelTextType?: 'bold' | 'light' | 'medium' | 'regular' | 'semibold';
  labelStyle?: StyleProp<TextStyle> | StyleProp<TextStyle[]> | undefined;
  containerStyle?: StyleProp<ViewStyle> | StyleProp<ViewStyle[]> | undefined;
  pending?: boolean;
  variant?: 'primary' | 'link';
  children?: ReactNode;
}

const PrimaryButton: React.FC<CustomPressableProps> = ({
  label,
  labelTextType = 'bold',
  labelStyle = {fontSize: 16},
  containerStyle,
  pending = false,
  variant = 'primary',
  children = null,
  ...props
}) => {
  const {colors} = useTheme();
  const passedContainerStyle = Array.isArray(containerStyle)
    ? Object.assign({}, ...containerStyle)
    : containerStyle;
  const passedLabelStyle = Array.isArray(labelStyle)
    ? Object.assign({}, ...labelStyle)
    : labelStyle;
  const getBgColor = variant === 'primary' ? colors.primary : 'transparent';
  const getBorderColor = getBgColor;
  const getTextColor =
    variant === 'link' ? colors.primary : NewAppScreenColors.lighter;
  return (
    <Pressable
      style={({pressed}) => [
        styles.mainStyle,
        {
          borderColor: getBorderColor,
          backgroundColor: getBgColor,
          ...styles.border,
        },
        pressed && {opacity: 0.8},
        pending && {backgroundColor: 'transparent', borderColor: 'transparent'},
        GlobalStyles.pd('4%'),
        passedContainerStyle,
      ]}
      disabled={pending}
      {...props}>
      {children && children}
      {label && (
        <CustomText
          textType={labelTextType}
          style={[
            passedLabelStyle,
            {color: getTextColor},
            pending && {color: NewAppScreenColors.darker},
          ]}>
          {pending ? 'Loading...' : label}
        </CustomText>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderWidth: 2,
    borderRadius: 50,
  },
});

export default PrimaryButton;
