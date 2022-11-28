module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@screens': './src/Screens',
            '@theme': './src/theme/index.ts',
            '@utils': './src/utils',
            '@components': './src/Components',
            '@type': './src/@types',
            '@routes': './src/Routes',
            '@storage': './src/storage',
          }
        }
      ]
    ]
  };
};
