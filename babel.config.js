module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@global': './src/global',
          '@screens': './src/screens',
          '@navigators': './src/navigators',
          '@store': './src/store',
          '@config': './src/config',
          '@icons': './src/icons',
          '@services': './src/services',
        },
      },
    ],
  ],
};
