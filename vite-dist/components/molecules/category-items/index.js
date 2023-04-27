System.register(["./CategoryItems"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var exportedNames_1 = {
        "CategoryItems": true
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
            function (CategoryItems_1_1) {
                exportStar_1(CategoryItems_1_1);
                exports_1({
                    "CategoryItems": CategoryItems_1_1["default"]
                });
            }
        ],
        execute: function () {
        }
    };
});
