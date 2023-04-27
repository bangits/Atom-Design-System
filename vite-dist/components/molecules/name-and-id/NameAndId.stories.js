System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./NameAndId"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, NameAndId_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (NameAndId_1_1) {
                NameAndId_1 = NameAndId_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/molecules/Name And Id',
                component: NameAndId_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return _jsx(NameAndId_1.default, { name: 'Albatros', id: 'ID 1234567' });
            });
        }
    };
});
