define(['zepto', 'router'], function ($, Router) {

    /*
     $('ul > li').each(function () {
     $(this).on('click', function () {
     var url = $(this).attr('data-url');
     var base = location.href;
     var js = base + 'content/js/' + url + '.js';
     var view = base + 'content/views/' + url + '.html';
     //OLD
     // $.get(view, function (content) {
     //     $('#container').html(content);
     //     //获取js
     //     //  $.get(js, function (jsContent) {});
     //     //loadScript(js, function (el) {});
     //     require([url], function (module) {
     //         console.log(module);
     //         var func = module[module.length - 1];
     //         if (func !== undefined) {
     //             console.log(' type is ', typeof func);
     //             func();
     //         }
     //     });
     // });

     //NEW
     require(['text!' + view, url], function (content, module) {
     $('#container').html(content);
     var func = module[module.length - 1];
     if (func !== undefined) {
     console.log(' type is ', typeof func);
     func();
     }
     })
     });
     });
     */


    Router.init({
        mode: 'hash',
        root: '/'
    });

    var handlerFunc = function () {
        var hash = Router.getCurrentFragment();
        require(['text!content/views/' + hash + '.html', hash], function (content, module) {
            $('#container').html(content);
            var func = module[module.length - 1];
            if (func !== undefined) {
                console.log(' type is ', typeof func);
                func();
            }
        });
    };

    var routerList = ['about', 'page1'].map(function (item) {
        return {
            path: item, //可以使用正则表达式，每一个()匹配将会作为参数传入enterHandler、handler和exitHandler
            params: [1, 2],  //初始参数，enterHandler、handler和exitHandler的参数包含params和path中匹配的参数
            enterHandler: function () {
                //路由进入时触发的回调，如果返回false，则handler不触发
                console.log('enter about');
            },
            handler: handlerFunc,
            exitHandler: function () {
                //路由退出时触发的回调
            }
        }
    });
    for (var x in routerList) {
        Router.add(routerList[x]);
    }
    Router.listen();
    var currentPage = Router.getCurrentFragment();

    console.log(currentPage);
    Router.go('/about/');
});
