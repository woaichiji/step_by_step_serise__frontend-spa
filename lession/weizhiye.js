console.log("weizhiye  fuck");
require.config({
    paths: {
        'text':'./bower_components/text/text',
        'zepto': './bower_components/zepto/zepto',
        'http': './content/jsLib/http',
        'router': './content/jsLib/Router',
        'about': './content/js/about',
        'page1': './content/js/page1'

    },
    deps: ['app']
});
