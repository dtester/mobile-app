const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const isProd = process.env.MODE == 'production'

const config = {
  mode: process.env.MODE,
  entry: path.resolve('src/entry/client.js'),
  output: {
    filename: 'js/bundle.[hash].js',
    path: path.resolve('dist')
  },
  performance: {
    hints: false
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/static/index.html'),
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve('src/static'),
          to: path.resolve('dist')
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          (isProd ? MiniCssExtractPlugin.loader : 'style-loader'),
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ]
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    port: 3000,
    hot: true,
    inline: true,
    clientLogLevel: 'none'
  }
}

if (isProd) {
  config.optimization.minimize = true
  config.optimization.minimizer = [
    new OptimizeCssWebpackPlugin(),
    new TerserWebpackPlugin()
  ]
}

module.exports = config