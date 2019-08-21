const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  mode: 'production',

  entry: './src/index.tsx',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js',
  },

  devtool: 'sourcemap',

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
        // or in case you want to use parameters:
        // loader: 'typed-css-modules?outDir=/tmp'
        // or in case you want to use noEmit:
        // loader: 'typed-css-modules?noEmit'
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
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
