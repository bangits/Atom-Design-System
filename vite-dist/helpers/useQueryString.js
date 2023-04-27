System.register(["query-string", "react"], function (exports_1, context_1) {
    "use strict";
    var query_string_1, react_1, useQueryString;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (query_string_1_1) {
                query_string_1 = query_string_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            exports_1("useQueryString", useQueryString = () => {
                const parsedQueries = react_1.useMemo(() => query_string_1.default.parse(window.location.search), [window.location.search]);
                return parsedQueries;
            });
        }
    };
});
