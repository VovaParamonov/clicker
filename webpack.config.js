const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public/dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['public/dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/clicker.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       }
     ]
   }
};
