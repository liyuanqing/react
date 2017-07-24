const path = require('path');
const webpack = require('webpack');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  //context:path.join(__dirname,''),
  entry: {
    app: './src/app.js',
    vendors: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'react-router-redux']
  },
  output: {
    //path: path.join(__dirname,'dist'),
    path: './build',
    filename: 'index.js',
    //publicPath: '/',
    //sourceMapFilename: 'index.js.map',
    //chunkFilename: '[id].js',
  },
  devtol: 'cheap-module-eval-source-map',
  devServer: {
      inline: true,
      port: 7777
   },

   module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', '!css-loader!postcss-loader'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style!css'),
      },
      {
        test: /\.less$/,

        loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  lessPlugins: [
    new LessPluginAutoPrefix({browsers: ['last 3 version']})
  ]

};

//module.exports = config;
