$('document').ready(function () {
    var showAuthorInfo = function () {
        console.log("showAuthorInfo");
    };
    var listBooks = function () {
        console.log("listBooks");
    };
    var allroutes = function () {
        var route = window.location.hash.slice(2),
            sections = $('section'),
            section;
        if ((section = sections.filter('[data-route=' + route + ']')).length) {
            sections.hide(250);
            section.show(250);
        }
    };

    var routes = {
        '/author': showAuthorInfo,
        '/books': listBooks
    };

    var router = Router(routes);

    router.configure({
        on: allroutes
    });
    router.init();
});