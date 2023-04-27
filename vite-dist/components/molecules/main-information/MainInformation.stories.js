System.register(["react/jsx-runtime", "@my-ui/core", "@storybook/addon-knobs", "./MainInformation"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, addon_knobs_1, MainInformation_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (MainInformation_1_1) {
                MainInformation_1 = MainInformation_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/molecules/MainInformation',
                component: MainInformation_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return _jsx(MainInformation_1.default, { idLabel: 'ID', name: 'Albatros', id: '1234567', addCopyButton: true, icon: _jsx(core_1.Icons.DustbinIcon, {}) });
            });
        }
    };
});
