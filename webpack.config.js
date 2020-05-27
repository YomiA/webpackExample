// Node语法 path 模块
const path = require('path');

// 这个配置文件，其实就是一个 JS 文件，通过 node 中的 模块操作，向外暴露了一个 配置对象
module.exports={
// 在配置文件中，需要手动指定 入口(要打包的文件) 和 出口(存放打包好的文件的目录)
    entry: path.join(__dirname,'./src/main.js'),// 入口，表示要使用 webpack 打包哪个文件
    output:{ //输出文件(出口)相关的配置
        path:path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录中去
        filename:'bundle.js' // 这是指定的输出的文件名称
    }
}

// 当我们在 控制台 直接输入 webpack 命令执行的时候，webpack 做了以下几步：
// 1.首先，webpack 发现，我们并没有通过命令的形式，给它指定 入口 和 出口；
// 2.webpack 就会去 项目的根目录 中，查找一个叫做 ‘webpack.config.js’ 的配置文件
// 3.当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中导出的 配置对象
// 4.当webpack拿到配置对象后，就拿到了配置对象中指定的 入口 和 出口，然后进行打包构建