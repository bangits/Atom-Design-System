System.register(["react/jsx-runtime", "@/components", "@storybook/addon-knobs"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, addon_knobs_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: components_1.Stepper,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/organisms/Stepper'
            });
            exports_1("Default", Default = () => {
                return (_jsx(components_1.Stepper, { steps: [
                        {
                            title: 'First Step',
                            value: 1
                        },
                        {
                            title: 'Second Step',
                            value: 2
                        },
                        {
                            title: 'Third Step',
                            value: 3
                        }
                    ], value: 1 }));
            });
        }
    };
});
