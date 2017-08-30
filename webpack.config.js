var webpack = require('webpack');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {version} = require('./src/app/mark.js')
const path = require('path')
module.exports = {
  entry: {
    app: './src/app.js',
    vendors: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'react-router-redux']
  },
  output: {
    path: path.resolve(__dirname, './build/' + version),
    filename: '[name].js',
    chunkFilename: '[name].js' //注意这里，用[name]可以自动生成路由名称对应的js文件
  },
//   devtool: false,
  devtool: 'inline-source-map', //报错信息指向源文件
  devServer: {
    inline: true,
    port: 1234
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015", "react"]
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style!css'),
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
    }, {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=50000&name=[path][name].[ext]'
    }]
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
           // favicon:'./src/img/favicon.ico', //favicon路径
           filename:'src/index.html',    //生成的html存放路径，相对于 path
           template:'./src/app/template.js',    //html模板路径
           title: '后台模板',
           cache: true,
           inject:true,    //允许插件修改哪些内容，包括head与body
           hash:true,    //为静态资源生成hash值
           minify:{    //压缩HTML文件
               removeComments:true,    //移除HTML中的注释
                 collapseWhitespace:false    //删除空白符与换行符
           }
     }),
     new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  lessPlugins: [
    new LessPluginAutoPrefix({
      browsers: ['last 3 version']
    })
  ]

};
