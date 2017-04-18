console.log('I am main file');
require.config({
    paths: {
        'text': "./content/jsLib/text",
        "zepto": "./bower_components/zepto/zepto.min",
        "cache": "./content/jsLib/cache",
        "http": "./content/jsLib/http",
        "router": "./content/jsLib/router",
        "about": "./content/js/about",
        "page1": "./content/js/page1",
        "app": './app'
    },
    deps: [
        'app'
    ]
});
requirejs.onError = function (err) {
    console.log(err);
};

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
