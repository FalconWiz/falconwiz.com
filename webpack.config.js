var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'FalconWiz.com',
      template: 'src/index.html'
    })
  ],
  module: {
    loaders: [
    // js
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        query: {
          presets: ['es2016', 'stage-0', 'react']
        },
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      // CSS
      {
        test: /(\.css|\.scss)$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url'
      }
    ]
  }
}
