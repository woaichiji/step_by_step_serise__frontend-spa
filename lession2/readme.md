1  如果有个公共的函数库，怎么样去引用

   i 在index.html  全局进行引用

   ii 在需要模块html中进行引用。例如：page1 、 about1 的html 中进行引用 或者 ，

  iii 在需要模块js中进行引用。例如在about.js中

      loadScript('functions.js',function(){
         loadScript('B.js',function(){
           var About = function(){
                .....
           };
           var about  = new About();
           about.init();
      });


带来的问题：

- 未知的加载顺序

- 多个库之间存在相互依赖

- 多个库之间可能存在变量冲突


angular  + vue

router



js 文件 1 2 3
commonjs nodejs

var xxx = require('asdfadsf');
var xxx2 = require('2222');

AMD

UMD

webpack2


grunt

gulp

nodejs npm libs

browserfy

es6 es2015 es5  html <nav> bsie






