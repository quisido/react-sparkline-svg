const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  externals: [
    {
      'react': {
        amd: 'react',
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React',
      },
    },
  ],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: 'index.js',
    library: 'react-sparkline-svg',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '.'),
    umdNamedDefine: true,
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
    },
  },
};
