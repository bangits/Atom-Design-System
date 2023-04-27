System.register(["./Form", "./FormFieldTypes", "./getFormField", "./FormFields"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var exportedNames_1 = {
        "Form": true,
        "getFormField": true,
        "FormFields": true
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
            function (Form_1_1) {
                exports_1({
                    "Form": Form_1_1["default"]
                });
            },
            function (FormFieldTypes_1_1) {
                exportStar_1(FormFieldTypes_1_1);
            },
            function (getFormField_1_1) {
                exports_1({
                    "getFormField": getFormField_1_1["default"]
                });
            },
            function (FormFields_1_1) {
                exports_1({
                    "FormFields": FormFields_1_1["default"]
                });
            }
        ],
        execute: function () {
        }
    };
});
