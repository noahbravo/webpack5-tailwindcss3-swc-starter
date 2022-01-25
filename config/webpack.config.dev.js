const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const mode = 'development'

module.exports = merge(baseConfig(mode), {
  mode,
  devServer: {
    port: 3000,
    open: true,
    compress: true,
    // contentBase: buildPath,
    historyApiFallback: true,
    hot: true
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.css']
  }
})
