const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),  
    filename: 'dist/index.js', 
    library: 'ajs-homework-1.3.1',
    libraryTarget: 'umd', 
    libraryExport: 'default', 
    globalObject: 'this', 
  },
  target: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};