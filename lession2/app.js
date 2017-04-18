define(['zepto', 'cache', 'router'], function (zepto, cache, router) {
    console.log('I am App file');
    //原始方法，点击之后获取相应的页面，TODO//改变hash 值，然后根据刷新后的hash 出发对应的事件
    // $('ul > li').each(function () {
    //     $(this).on('click', function () {
    //         var url = $(this).attr('data-url');
    //         var base = location.href;
    //         var js = base + 'content/js/' + url + '.js';
    //         var view = base + 'content/views/' + url + '.html';
    //
    //         var cacheKey = "view_page_content" + url;
    //         var cacheValue = cache.get(cacheKey);
    //         var contentHtml = '';
    //         if (!cacheValue || !cacheValue.length) {
    //             $.get(view, function (content) {
    //                 cacheValue = contentHtml = content;
    //                 cache.put(cacheKey, cacheValue);
    //                 $('#container').html(cacheValue);
    //                 // loadScript(js,function (script) {
    //                 //     console.log(script);
    //                 // });
    //                 loadJsWithRequireJs(url);
    //             });
    //         } else {
    //             $('#container').html(cacheValue);
    //             // loadJsWithRequireJs(url);
    //         }
    //     });
    // });

    console.log(router);

    var enterHandler = function () {
        //路由进入时触发的回调，如果返回false，则handler不触发
    };
    var handler = function () {
        //路由回调
        var current = router.getCurrentFragment();
        console.log(current);
        loadJsWithRequireJs(current);
    };
    var exitHandler = function (e) {
        //路由退出时触发的回调
    };

    router.init({
        mode: 'hash',
        root: '/'
    });

    var routeList = ['about', 'page1'].map(function (item) {
        return {
            path: item, //可以使用正则表达式，每一个()匹配将会作为参数传入enterHandler、handler和exitHandler
            params: [item],  //初始参数，enterHandler、handler和exitHandler的参数包含params和path中匹配的参数
            enterHandler: enterHandler,
            handler: handler,
            exitHandler: exitHandler
        };
    });

    for (var x in routeList) {
        var item = routeList[x];
        router.add(item);
    }
    router.listen();
    var currentFragment = router.getCurrentFragment();
    console.log(currentFragment);
    router.go(currentFragment);
    loadJsWithRequireJs(currentFragment);
});

// function define2(){
//     console.log('define2',arguments);
// }

function loadJsWithRequireJs(url) {
    var view = 'text!content/views/' + url + '.html';
    require([view, url], function () {
        var html = arguments[0];
        var args = arguments[1];
        $('#container').html(html);
        var func = args[args.length - 1];
        func();
    });
}