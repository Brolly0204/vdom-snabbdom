const {
  resolve
} = require('path')

module.exports = {
  entry: './vdom01.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }]
  }
}