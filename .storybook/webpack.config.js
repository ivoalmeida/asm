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
    {
      // !This is should only be here during first stages of development. Assets like fonts will be hosted on a CDN
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          // Limit at 50k. Above that it emits separate files
          limit: 50000,
          mimetype: 'application/font-woff',
          name: './fonts/[name].[ext]',
        },
      },
    },
  );
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
