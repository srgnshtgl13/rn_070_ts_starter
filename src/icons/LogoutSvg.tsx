/* eslint-disable react/self-closing-comp */
import {useTheme} from '@react-navigation/native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

const LogoutSvg: React.FC<Props> = ({
  height = '30',
  width = '30',
  color = null,
}) => {
  const {colors} = useTheme();
  let fill = colors.primary;
  if (color) {
    fill = color;
  }
  return (
    <Svg width={width} height={height} viewBox="0 0 128 128">
      <Path
        d="M13.076 97.083a1.75 1.75 0 0 0 1.75-1.75V66.667a1.75 1.75 0 0 0-3.5 0v28.666a1.75 1.75 0 0 0 1.75 1.75zM122.38 64.97c.027-.041.046-.085.069-.128a1.037 1.037 0 0 0 .146-.348c.015-.051.035-.1.045-.152a1.755 1.755 0 0 0 0-.685c-.01-.053-.03-.1-.045-.152a1.733 1.733 0 0 0-.054-.174 1.692 1.692 0 0 0-.092-.174c-.023-.042-.042-.086-.069-.127a1.75 1.75 0 0 0-.22-.269l-12.509-12.509a1.75 1.75 0 0 0-2.475 2.475l9.524 9.523H63.424a1.75 1.75 0 0 0 0 3.5H116.7l-9.523 9.523a1.75 1.75 0 1 0 2.475 2.475l12.508-12.509a1.75 1.75 0 0 0 .22-.269z"
        fill={fill}></Path>
      <Path
        fill={fill}
        d="M95.424 72.25a1.75 1.75 0 0 0-1.75 1.75v36.9H48.633V17.1h45.041V54a1.75 1.75 0 1 0 3.5 0V15.35a1.75 1.75 0 0 0-1.75-1.75H48.633V6.5a1.75 1.75 0 0 0-2.461-1.6L6.365 22.593a1.751 1.751 0 0 0-1.039 1.6v79.615a1.751 1.751 0 0 0 1.039 1.6L46.172 123.1a1.75 1.75 0 0 0 2.461-1.6v-7.1h46.791a1.75 1.75 0 0 0 1.75-1.75V74a1.75 1.75 0 0 0-1.75-1.75zm-50.291 46.558L8.826 102.67V25.33L45.133 9.192z"></Path>
    </Svg>
  );
};

export default LogoutSvg;
