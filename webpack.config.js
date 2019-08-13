const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {

    mode: 'production',

    entry: './src/index.tsx',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },

    devtool: 'sourcemap',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css']
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["source-map-loader"]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}