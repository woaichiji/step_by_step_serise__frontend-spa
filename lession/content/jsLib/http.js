define(['zepto'], function () {
    var getData = function (url, params, method) {
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
    };

    return {
        post: getData
    }
});