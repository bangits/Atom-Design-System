System.register(["./Filter", "./Filters", "./FilterTypes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var exportedNames_1 = {
        "Filter": true,
        "Filters": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (Filter_1_1) {
                exports_1({
                    "Filter": Filter_1_1["default"]
                });
            },
            function (Filters_1_1) {
                exports_1({
                    "Filters": Filters_1_1["default"]
                });
            },
            function (FilterTypes_1_1) {
                exportStar_1(FilterTypes_1_1);
            }
        ],
        execute: function () {
        }
    };
});
