System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./DetailsMainInfo"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, DetailsMainInfo_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (DetailsMainInfo_1_1) {
                DetailsMainInfo_1 = DetailsMainInfo_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: DetailsMainInfo_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/Details Main Info'
            });
            exports_1("Default", Default = () => {
                return (_jsx(DetailsMainInfo_1.default, { label: addon_knobs_1.text('label', 'Shining Crown'), id: addon_knobs_1.text('id', 'ID1234567'), src: addon_knobs_1.text('src', 'https://novomatic.com/sites/default/files/2017-05/Logo_N-Shortbrand.png') }));
            });
        }
    };
});
