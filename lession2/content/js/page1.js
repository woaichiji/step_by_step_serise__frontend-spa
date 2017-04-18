define(['zepto'], function () {
    return [
        function () {
            var page = $('#page1');
            page.css({'color': 'red'});
            console.log('page1....',page);
        }
    ];
});