const path = require('path');

module.exports = {
  entry: './search.js',
  mode: 'development',
  devtool: false,
  output: {
    filename: 'search.dist.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // externals: {
  //   '@workspaces/common': 'workspacesCommon',
  // },
};
