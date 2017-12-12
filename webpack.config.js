const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/ClientApp.jsx',
  devServer: {
    historyApiFallback: true,
    publicPath: '/dist',
    port: 8080
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
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/public'
  },
  resolve: {
    alias: {
      CSS: path.join(__dirname, '/public/css'),
      Images: path.join(__dirname, './public/images'),
      Comps: path.join(__dirname, './src/components')
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
