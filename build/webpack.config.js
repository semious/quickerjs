
const path = require('path');

module.exports = {
  // 指定入口文件 // 这里我们在src文件夹下创建一个index.ts 
  entry: "./src/index.ts", // 指定输出文件名 
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd', // 采用通用模块定义
    library: 'quickerjs', // 库名称
    libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
    globalObject: 'this' // 兼容node和浏览器运行，避免window is not undefined情况
  },
  resolve: {
    // 自动解析一下拓展，当我们要引入src/index.ts的时候，只需要写src/index即可
    // 后面我们讲TS模块解析的时候，写src也可以 
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    // 配置以.ts/.tsx结尾的文件都用ts-loader解析 // 这里我们用到ts-loader，所以要安装一下 
    // npm install ts-loader -D 
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }
    ]
  },
};
