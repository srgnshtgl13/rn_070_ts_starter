import {ViewStyle, Dimensions, TextStyle} from 'react-native';

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

interface Styles {
  viewStyle: ViewStyle | ViewStyle[];
  textStyle: TextStyle | TextStyle[];
}

function SafeAreaContainer(
  flexNum: number | undefined = 1,
): Styles['viewStyle'] | Styles['textStyle'] {
  return {
    width: deviceWidth,
    height: deviceHeight,
    ...Flex(flexNum),
  };
}

function Flex(
  value?: number | undefined,
): Styles['viewStyle'] | Styles['textStyle'] {
  return {
    flex: value,
  };
}

function pd(
  value?: number | string | undefined,
  from?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'vertical'
    | 'horizontal'
    | undefined,
): Styles['viewStyle'] | Styles['textStyle'] {
  if (from === 'left') {
    return {paddingLeft: value};
  }
  if (from === 'right') {
    return {paddingRight: value};
  }
  if (from === 'top') {
    return {paddingTop: value};
  }
  if (from === 'bottom') {
    return {paddingBottom: value};
  }
  if (from === 'vertical') {
    return {paddingVertical: value};
  }
  if (from === 'horizontal') {
    return {paddingHorizontal: value};
  }
  return {padding: value || 0};
}

const margin = (
  value?: number | string | undefined,
  from?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'vertical'
    | 'horizontal'
    | undefined,
): Styles['viewStyle'] | Styles['textStyle'] => {
  if (from === 'left') {
    return {marginLeft: value};
  }
  if (from === 'right') {
    return {marginRight: value};
  }
  if (from === 'top') {
    return {marginTop: value};
  }
  if (from === 'bottom') {
    return {marginBottom: value};
  }
  if (from === 'vertical') {
    return {marginVertical: value};
  }
  if (from === 'horizontal') {
    return {marginHorizontal: value};
  }
  return {margin: value || 0};
};

const alignSelf = (
  pos:
    | 'auto'
    | 'baseline'
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'stretch' = 'center',
): Styles['viewStyle'] | Styles['textStyle'] => {
  return {
    alignSelf: pos,
  };
};

const flexDirection = (
  direction: 'column' | 'row' | 'column-reverse' | 'row-reverse' = 'column',
): Styles['viewStyle'] | Styles['textStyle'] => {
  return {
    flexDirection: direction,
  };
};

const fontSize = (size: number | undefined = 14): Styles['textStyle'] => {
  return {
    fontSize: size,
  };
};

const GlobalStyles = {
  Flex,
  SafeAreaContainer,
  pd,
  margin,
  alignSelf,
  flexDirection,
  fontSize,
};
export default GlobalStyles;
