System.register([], function (exports_1, context_1) {
    "use strict";
    var trim;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("trim", trim = (value) => (typeof value === 'string' ? value.trim() : value));
        }
    };
});
