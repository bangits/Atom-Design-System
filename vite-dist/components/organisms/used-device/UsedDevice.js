System.register(["react/jsx-runtime", "@/icons", "@my-ui/core", "classnames", "./UsedDevice.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, core_1, classnames_1, UsedDevice_module_scss_1, UsedDevice;
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
            function (UsedDevice_module_scss_1_1) {
                UsedDevice_module_scss_1 = UsedDevice_module_scss_1_1;
            }
        ],
        execute: function () {
            [];
            UsedDevice = ({ usedDevices, noDataText, label }) => {
                return (_jsxs(core_1.Card, { borderRadius: 1.6, className: classnames_1.default(UsedDevice_module_scss_1.default.StatusView), children: [_jsx("span", { children: label || noDataText }), usedDevices.length > 0 ? (usedDevices.map((device) => (_jsx(_Fragment, { children: _jsx("div", { className: UsedDevice_module_scss_1.default['StatusView--container'], children: _jsx("div", { className: UsedDevice_module_scss_1.default['StatusView--icon'], children: _jsx(_Fragment, { children: device.icon || _jsx(icons_1.DesktopIcon, {}) }) }) }) })))) : (_jsx("div", { className: UsedDevice_module_scss_1.default['StatusView--container'], children: _jsx("div", { className: UsedDevice_module_scss_1.default['StatusView--icon'], children: _jsx(_Fragment, { children: _jsx(icons_1.DesktopIcon, {}) }) }) }))] }));
            };
            exports_1("default", UsedDevice);
        }
    };
});
