System.register(["./FormWithInput", "./PopoverWithInput"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var exportedNames_1 = {
        "FormWithInput": true,
        "PopoverWithInput": true
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
            function (FormWithInput_1_1) {
                exports_1({
                    "FormWithInput": FormWithInput_1_1["default"]
                });
            },
            function (PopoverWithInput_1_1) {
                exportStar_1(PopoverWithInput_1_1);
                exports_1({
                    "PopoverWithInput": PopoverWithInput_1_1["default"]
                });
            }
        ],
        execute: function () {
        }
    };
});
