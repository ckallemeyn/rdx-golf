const path = require('path');

module.exports = {
  entry: './client/src/components/Index.jsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test:/\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
