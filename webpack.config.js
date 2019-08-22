const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  mode: 'production',

  entry: './src/index.tsx',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js',
  },

  devtool: isDevelopment && 'sourcemap',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['source-map-loader'],
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
                localIdentName: isDevelopment
                  ? '[path][name]__[local]--[hash:base64:5]'
                  : '[hash:base64]',
              },
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
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.WatchIgnorePlugin([/scss\.d\.ts$/]),
  ],
};
