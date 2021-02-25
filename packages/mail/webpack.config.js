const path = require('path');

module.exports = {
  entry: './mail.js',
  mode: 'development',
  devtool: false,
  output: {
    filename: 'mail.dist.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    '@workspaces/common': 'commonjs2 fs-extra',
  },
};
