// 这是 main.js 是我们项目的JS入口文件

// 1. 导入 jQuery 文件
// 2.这样的意思是说我从node_modules里面导入 jQuery 这个包，然后用 $ 这个变量名来接收
// 3.import *** from *** 是 ES6 中导入模块的方式
// 4.由于 ES6 代码，太高级了，浏览器解析不了，所以这一行会报错(如下错误)
// 5.Uncaught SyntaxError: Cannot use import statement outside a module 报错语法错误
// 6.所以这时候就要用到 webpack 这个东西了 用如下命令提示符执行 webpack + ' ' + 要处理的文件的位置 + ' ' + 放处理文件之后的文件
// 7.webpack 在4.0版本后 要改成 webpack ./src/main.js -o ./dist/bundle.js  中间要多加一个 -o
// 8.在 package.json 文件中加入 "dev": "webpack --mode development","build": "webpack --mode production" 是为了消除打包时的警告
import $ from 'jquery'

// const $ = require('jquery')就和这个 node 语法类似

$(function () {
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function () {
        return '#' + 'E35265'
    })
})

// 经过刚才的事情演示，webpack 可以做什么事情？？？
// 1.webpack 能够处理 js 文件的相互依赖关系；
// 2.webpack 能够处理 js 的兼容问题，把高级的 浏览器 不识别的语法 转化为 低级的浏览器能正常识别的语法

// 刚才运行的命令格式：webpack 要打包的文件的路径 打包好的文件存放的路径

// 最开始的时候 要先执行命令 npm init -y 得到 package.json 文件

// package.json文件。这是项目的配置文件，它非常重要，每个项目的根目录下面，一般都有一个package.json文件，它定义了这个项目
// 所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。当我们用npm install 命令下载包的时候，就是根据这
// 个配置文件，自动下载所需的模块。













