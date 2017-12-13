const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/ClientApp.jsx'
  ],
  devServer: {
    historyApiFallback: true,
    publicPath: '/dist',
    port: 8080,
    hot: true
  },
  devtool: 'cheap-eval-source-map',
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
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js'
              }
            }
          }
        ]
      },
      {
        test: /\.(eof|woff|woff2|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist'
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
  resolve: {
    alias: {
      Comps: path.join(__dirname, './src/components'),
      CSS: path.join(__dirname, '/public/css'),
      Fonts: path.join(__dirname, '/public/fonts'),
      Images: path.join(__dirname, './public/images')
    },
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    chunks: true,
    reasons: true,
    warnings: true
  }
};
