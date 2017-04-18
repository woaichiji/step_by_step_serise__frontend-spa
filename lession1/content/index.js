function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) { //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback(script);
            }
        };
    } else { //Others
        script.onload = function () {
            callback(script);
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}


function getData(url, params, method) {
    method = method || 'get';
    url = location.href + url;
    return new Promise(function (resolve, reject) {
        $[method](url, params, function (ret) {
            if (ret) {
                resolve(ret);
            } else {
                reject('出错了')
            }
        }, 'json');
    });
}


$(function () {
    $('ul > li').each(function () {
        $(this).on('click', function () {
            var url = $(this).attr('data-url');
            var base = location.href;
            var js = base + 'content/js/' + url + '.js';
            var view = base + 'content/views/' + url + '.html';
            $.get(view, function (content) {
                $('#container').html(content);
                //获取js
                //  $.get(js, function (jsContent) {});
                loadScript(js, function (el) {});
            });
        });
    });
});