module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],

    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['./src'],

          alias: {
            '~src': './src',
            '~types': './types',
            '~scenes': './src/scenes',
            '~navigation': './src/navigation',
            '~template': './src/template',
            '~styles': './src/styles',
            '~components': './src/components',
            '~atoms': './src/components/atoms',
            '~molecules': './src/components/molecules',
            '~organisms': './src/components/organisms',
            '~utils': './src/shared/utils',
            '~modules': './src/modules',
            '~store': './src/store',
          },
        },
      ],
    ],
  };
};
