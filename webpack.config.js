var path = require('path');

module.exports = {
  entry: "./app/index.js",
  output: {
    path: "./public",
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, '.')
  }
};
