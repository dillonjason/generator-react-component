let webpack = require('webpack')
let path = require('path')

let fileName = '[name].js'

let webpackBase = {
  devtool: 'eval-source-map',
  entry: {
    app: './dev/dev.js'
  },
  devServer: {
    contentBase: './dev'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dev')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
    modules: ['src', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.woff([?]?.*)$/,
        use: 'file-loader'
      },
      {
        test: /\.woff2([?]?.*)$/,
        use: 'file-loader'
      },
      {
        test: /\.ttf([?]?.*)$/,
        use: 'file-loader'
      },
      {
        test: /\.eot([?]?.*)$/,
        use: 'file-loader'
      },
      {
        test: /\.json([?]?.*)$/,
        use: 'json-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      },
      {
        test: /\.svg([?]?.*)$/,
        use: 'file-loader'
      },
      {
        test: /\.scss$|\.sass|\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [ 'env', { modules: false } ],
            'react'
          ],
          env: {
            dev: {
              plugins: [['react-transform', {
                transforms: [{
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module']
                }]
              }]]
            }
          }
        }
      }
    ]
  }
}

module.exports = webpackBase
