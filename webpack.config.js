module.exports = {
  devtool: 'eval',
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
