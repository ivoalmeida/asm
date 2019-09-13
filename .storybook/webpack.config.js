const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');

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
        isDevelopment ? require.resolve('style-loader') : MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            sourceMap: isDevelopment,
            localsConvention: 'camelCase',
            import: true,
            modules: {
              localIdentName: isDevelopment ? '[path][name]__[local]' : '[hash:base64]',
            },
          },
        },
        {
          loader: 'resolve-url-loader',
          options: {
            engine: 'postcss',
            sourceMap: true,
          },
        },
        {
          loader: require.resolve('sass-loader'),
          options: {
            sourceMap: true,
          },
        },
      ],
    },
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
