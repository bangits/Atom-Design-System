System.register(["react"], function (exports_1, context_1) {
    "use strict";
    var react_1, typedMemo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            exports_1("typedMemo", typedMemo = react_1.memo);
        }
    };
});
