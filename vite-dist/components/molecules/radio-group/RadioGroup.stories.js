System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./RadioGroup"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, RadioGroup_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (RadioGroup_1_1) {
                RadioGroup_1 = RadioGroup_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: RadioGroup_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/Radio Group'
            });
            exports_1("Default", Default = () => {
                return (_jsx(RadioGroup_1.default, { disabled: false, label: addon_knobs_1.text('label', 'Radio Group'), radios: addon_knobs_1.object('radios', [
                        {
                            label: 'Male',
                            value: 1
                        },
                        {
                            label: 'Female',
                            value: 2
                        }
                    ]) }));
            });
        }
    };
});
