module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@context': './src/context',
          '@global': './src/global',
        },
      },
    ],
  ],
};
