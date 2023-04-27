System.register([], function (exports_1, context_1) {
    "use strict";
    var addQueryString;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("addQueryString", addQueryString = (queryString) => {
                if (history.pushState) {
                    const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + queryString;
                    window.history.pushState({ path: newurl }, '', newurl);
                }
            });
        }
    };
});
