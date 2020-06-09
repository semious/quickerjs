const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  // 指定编译后是否生成source-map，这里判断如果是生产打包环境则不生产source-map devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map", // 这里使用webpack-dev-server，进行本地开发调试 
  devServer: {
    contentBase: "./dist", 
    stats: "errors-only", 
    compress: false, 
    host: "localhost", 
    port: 8089 
  },
  devtool: 'inline-source-map',
  plugins: [
    // 这里在编译之前先删除dist文件夹 
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["./dist"] }),
    // 这里我们指定编译需要用模板，模板文件是./src/template/index.html，所以接下来我们要创建一个index.html文件 
    new HtmlWebpackPlugin({ template: "./web/template/index.html" })
  ]
});