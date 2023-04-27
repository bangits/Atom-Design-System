System.register(["react/jsx-runtime", "@my-ui/core"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, Select;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            exports_1("Select", Select = (props) => {
                return _jsx(core_1.Select, { ...props });
            });
        }
    };
});
