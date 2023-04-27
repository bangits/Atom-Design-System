System.register(["react/jsx-runtime", "./Chip.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, Chip_module_scss_1, Chip;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (Chip_module_scss_1_1) {
                Chip_module_scss_1 = Chip_module_scss_1_1;
            }
        ],
        execute: function () {
            Chip = ({ children, component: Component = 'div' }) => {
                return _jsx(Component, { className: Chip_module_scss_1.default.Chip, children: children });
            };
            exports_1("default", Chip);
        }
    };
});
