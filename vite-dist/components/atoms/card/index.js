System.register(["./Card"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var exportedNames_1 = {
        "Card": true
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
            function (Card_1_1) {
                exportStar_1(Card_1_1);
                exports_1({
                    "Card": Card_1_1["default"]
                });
            }
        ],
        execute: function () {
        }
    };
});
