define(['zepto'], function () {
    var getData = function (url, params, method) {
        method = method || 'get';
        url = '/' + url;
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
    return {getData: getData};
});
