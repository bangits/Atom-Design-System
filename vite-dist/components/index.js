System.register(["./molecules", "./organisms", "./pages", "./templates", "./atoms"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (molecules_1_1) {
                exportStar_1(molecules_1_1);
            },
            function (organisms_1_1) {
                exportStar_1(organisms_1_1);
            },
            function (pages_1_1) {
                exportStar_1(pages_1_1);
            },
            function (templates_1_1) {
                exportStar_1(templates_1_1);
            },
            function (atoms_1_1) {
                exportStar_1(atoms_1_1);
            }
        ],
        execute: function () {
        }
    };
});
