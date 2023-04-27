System.register(["react/jsx-runtime", "@storybook/addon-actions", "@storybook/addon-knobs", "./CheckboxGroup"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_actions_1, addon_knobs_1, CheckboxGroup_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_actions_1_1) {
                addon_actions_1 = addon_actions_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (CheckboxGroup_1_1) {
                CheckboxGroup_1 = CheckboxGroup_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: CheckboxGroup_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/CheckboxGroup'
            });
            exports_1("Default", Default = () => {
                return (_jsx(CheckboxGroup_1.default, { label: 'Checkbox Group', onChange: addon_actions_1.action('onChange'), checkboxes: [
                        {
                            label: 'Checkbox1',
                            value: 1,
                            name: 'checkbox1',
                            defaultChecked: true
                        },
                        {
                            label: 'Checkbox2',
                            value: 2,
                            name: 'checkbox2'
                        }
                    ] }));
            });
        }
    };
});
