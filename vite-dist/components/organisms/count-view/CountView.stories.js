System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./CountView"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, CountView_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (CountView_1_1) {
                CountView_1 = CountView_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: CountView_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/CountView'
            });
            exports_1("Default", Default = () => {
                return _jsx(CountView_1.default, { title: 'Total Game Count', count: '1024' });
            });
        }
    };
});
