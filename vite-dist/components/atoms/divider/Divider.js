System.register(["react/jsx-runtime", "classnames", "./Divider.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, classnames_1, Divider_module_scss_1, Divider;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (Divider_module_scss_1_1) {
                Divider_module_scss_1 = Divider_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("Divider", Divider = ({ children, showDivider = true, className, variant = false, large = false }) => {
                if (!showDivider)
                    return _jsx(_Fragment, { children: children });
                return (_jsx("div", { className: classnames_1.default(className, {
                        [Divider_module_scss_1.default[`Divider`]]: !variant,
                        [Divider_module_scss_1.default[`VerticalDivider`]]: variant === 'horizontal',
                        [Divider_module_scss_1.default[`Large`]]: large
                    }), children: children }));
            });
        }
    };
});
