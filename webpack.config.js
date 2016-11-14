const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs')

const TARGET = process.env.npm_lifecycle_event;
console.log('Target is ' + TARGET);

const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

var dashboard = new Dashboard();

const PATHS = {
  app: path.join(__dirname, '/aem/src'),
  build: path.join(__dirname, '/aem/dist'),
};

const common = {
  quiet: true,
  entry: {
    index: PATHS.app,
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  output: {
    path: PATHS.build,
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app,
      },
    ],
  },
};

//
// Developmemt configuration
//
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    debug: true,
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      // stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: 'style!css!sass',
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new DashboardPlugin(dashboard.setData),
    ],
  });
}

//
// Production configuration
//
if (TARGET === 'build') {
  module.exports = merge(common, {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!sass'),
        },
      ],
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'index',
        minChunks: 2,
      }),
      new ExtractTextPlugin('[name].css', {
        allChunks: true,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
        },
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      }),
    ],
  });
}
