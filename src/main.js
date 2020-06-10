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

// 使用 import 语法导入css样式表
import './css/style.css'
// 注意：webpack 默认只能打包处理 js 类型的文件，无法处理其他的非 js 类型的文件
// 如果要处理非 js 类型的文件，我们需要手动安装一些 合适的 第三方 loader 加载器
// 1.如果想要打包处理 css 文件，需要安装 cnpm i style-loader css-loader -D 俩个包
// 2.打开 webpack.config.js 这个配置文件，在里面新增一个配置节点，叫做 module 这是一个对象，在这个对象里面有个rules
//   属性，这个 rules 属性是一个数组，这个数组中，存放了所有第三方文件的匹配和处理规则；

// webpack 处理第三方文件类型的总结和过程：
// 1.发现这个要处理的文件不是js文件，然后就去配置文件(webpack.config.js)中去查找有没有对应的第三方 loader 规则
// 2.如果能找到对应的规则，就会调用 对应的 loader 处理这种文件类型；
// 3.在调用loader的时候，是从右往左调用的(css-loader ---> style-loader)
// 4.当最后一个 loader 调用完毕，会把处理结果直接交给 webpack 进行打包合并，最终输出到 bundle.js 中去

// 要安装 cnpm i less-loader -D 和 cnpm i less -D
import './css/style.less'
// 要安装 cnpm i sass-loader -D 和 cnpm i node-sass -D 和 cnpm i sass -D 和 cnpm i fibers -D
import './css/style.scss'



// const $ = require('jquery')就和这个 node 语法类似

$(function () {
    $('li:odd').css('backgroundColor','lightblue');
    $('li:even').css('backgroundColor',function () {
        return '#' + '6c6af4'
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

// 方法1见上面  webpack 要打包的文件的路径 打包好的文件存放的路径

// 方法2见 webpack.config.js 文件  只有输入webpack就能打包

// 方法3 使用 webpack-dev-server 这个工具，来实现自动打包编译的功能

// 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖

// 2. 安装完成之后，这个工具的用法，和 webpack 命令的用法完全一样

// 3. 由于我们是在项目中，本地安装(项目)的 webpack-dev-server，所以，无法把它当做 脚本命令，在 powershell 终端中直接运行(只有那些 安装到 全局 -g 的工具，才能在 终端中 正常执行)

// 4. 注意：webpack-dev-server 这个工具，如果想要正常运行，要求在本地项目中，必须安装 webpack 即使你全局安装了webpack，你也要在本地中再安装一个

// 5. 注意：webpack-dev-server 这个工具打包好的 bundle.js 并不是放在dist文件夹里的，不是 ../dist/bundle.js 这个，所以
//    引用 ../dist/bundle.js 页面显示没变化

// 6. 注意：webpack-dev-server 这个工具帮我们打包生成的 bundle.js 文件，并没有存放到 实际的 物理磁盘上 (但是你访问http://localhost:8080/bundle.js却是存在的)
//    而是直接托管到了 电脑的内存中 ，所以，我们在 项目根目录中 ，找不到这个打包好的 bundle.js 文件

// 7. 注意：在 package.json 文件中 找到 scripts 中的 dev 后面的参数 变化 --open(表示运行完之后直接打开浏览器)
//    --port 端口号(表示你自己想要哪个端口号) --contentBase 文件夹名称(表示你打开的时候默认哪个文件夹为根目录)
//    --hot(表示热更新，局部刷新页面，如果是修改css代码，则页面不会刷新)



