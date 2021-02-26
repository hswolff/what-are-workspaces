const path = require('path');

module.exports = {
  entry: './common.js',
  mode: 'development',
  devtool: false,
  output: {
    filename: 'common.dist.js',
    path: path.resolve(__dirname, 'dist'),
    // library: 'workspacesCommon',
    // libraryTarget: 'umd',
  },
};
