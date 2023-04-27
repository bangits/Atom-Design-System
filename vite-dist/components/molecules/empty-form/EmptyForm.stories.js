System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./EmptyForm"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, EmptyForm_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (EmptyForm_1_1) {
                EmptyForm_1 = EmptyForm_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: EmptyForm_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/EmptyForm'
            });
            exports_1("Default", Default = () => {
                return (_jsx(EmptyForm_1.default, { buttonProps: {
                        children: 'Add Navbar'
                    }, children: "There is no added games yet" }));
            });
        }
    };
});
