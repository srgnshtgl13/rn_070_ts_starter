import {useTheme} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

const CustomCard: React.FC<Props> = ({children, style}) => {
  const {colors} = useTheme();

  const borderColorStyle = {
    borderColor: colors.primary,
  };
  return (
    <View
      style={[
        {
          backgroundColor: colors.card,
        },
        styles.fixedStyle,
        borderColorStyle,
        style,
      ]}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  fixedStyle: {
    borderRadius: 5,
    borderWidth: 1,
  },
});
export default CustomCard;
