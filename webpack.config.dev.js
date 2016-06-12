var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
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
    }),
    new ExtractTextPlugin('styles/styles.css', {publicPath: '/styles/'})
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url'
      }
    ]
  }
}
