System.register(["react/jsx-runtime", "@/icons", "@my-ui/core", "classnames", "./LicensesCard.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, core_1, classnames_1, LicensesCard_module_scss_1, LicensesCard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (LicensesCard_module_scss_1_1) {
                LicensesCard_module_scss_1 = LicensesCard_module_scss_1_1;
            }
        ],
        execute: function () {
            LicensesCard = ({ addLicense, clickHere, toDoSomething, col, onClick }) => {
                return (_jsxs("div", { className: classnames_1.default(LicensesCard_module_scss_1.default.LicensesCard, {
                        [LicensesCard_module_scss_1.default[`LicensesCard--col-${col}`]]: col
                    }), children: [_jsx("div", { className: LicensesCard_module_scss_1.default['LicensesCard--icon'], children: _jsx(icons_1.AddCircleIcon, {}) }), _jsx(core_1.Typography, { className: LicensesCard_module_scss_1.default['LicensesCard--title'], variant: 'p3', children: addLicense }), _jsxs("p", { onClick: onClick, className: LicensesCard_module_scss_1.default['LicensesCard--click'], children: [_jsx("span", { children: clickHere }), " ", toDoSomething] })] }));
            };
            exports_1("default", LicensesCard);
        }
    };
});
