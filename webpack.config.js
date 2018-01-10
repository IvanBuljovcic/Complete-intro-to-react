const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  devtool: 'cheap-eval-source-map',
  devServer: {
    historyApiFallback: true,
    publicPath: '/public/',
    hot: true
  },
  entry: ['webpack-hot-middleware/client?path=__webpack_hmr&timeout=2000', './js/ClientApp.jsx'],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [path.resolve('js'), path.resolve('node_modules/preact-compat/src')]
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/' // Same as `publicPath` in `devServer`
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  }
};

if (process.env.NODE_ENV === 'production') {
  config.entry = './js/ClientApp.jsx';
  config.devtool = false;
  config.plugins = [];
}

module.exports = config;
