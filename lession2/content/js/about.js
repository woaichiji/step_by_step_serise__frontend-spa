define(['zepto','http'],function (zepto,http) {
    return ['zepto','http',function () {
        var About = function () {
            About.prototype.init = function () {
                console.log('get data from remote server');
                http.getData('content/data/person.json').then(function (ret) {
                    console.log(ret);
                    var html = '<table>' + ret.map(function (person) {
                            return '<tr><td>' + person.name + '</td><td>' + person.age + '</td></tr>';
                        }).join('') + '</table>';
                    $('#about').html(html)
                }).catch(function (error) {
                    console.log(error);
                });
            };
        };
        var about = new About();
        about.init();
    }];
});