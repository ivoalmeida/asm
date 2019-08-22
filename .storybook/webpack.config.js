const path = require('path');
const SRC_PATH = path.join(__dirname, '../src/components');

const isDevelopment = true;

module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      include: [SRC_PATH],
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
        { loader: require.resolve('react-docgen-typescript-loader') },
        {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: { parser: 'typescript', injectDecorator: true },
        },
      ],
    },
    {
      enforce: 'pre',
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'typed-css-modules-loader',
      options: {
        camelCase: true,
        noEmit: true,
      },
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            sourceMap: isDevelopment,
            modules: true,
            localsConvention: 'camelCase',
            import: true,
          },
        },
        {
          loader: require.resolve('sass-loader'),
          options: {
            sourceMap: isDevelopment,
          },
        },
      ],
    },
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
