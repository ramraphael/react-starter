const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
  devServer: {
    compress: true,
    port: 3000
  },
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["babel-plugin-styled-components"]
          }
        }
      }     
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, '/client/index.html')
  })],
  resolve: {
    extensions: ['.vue', '.js']
  }
}