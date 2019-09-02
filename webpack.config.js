
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/main.js'), // 入口文件
  output: { // 指定输出选项
    path: path.join(__dirname, './dist'), // 输出路径
    filename: 'bundle.js' // 指定输出文件的名称
  },
  plugins: [ 
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), 
      filename: 'index.html' 
    })
  ],
  module: { 
    rules: [ 
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, 
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, 
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, 
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, 
      { test: /\.vue$/, use: 'vue-loader' } 
    ]
  },
}