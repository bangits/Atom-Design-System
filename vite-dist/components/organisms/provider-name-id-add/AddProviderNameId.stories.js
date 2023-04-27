System.register(["react/jsx-runtime", "@storybook/addon-actions", "@storybook/addon-knobs", "./AddProviderNameId"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_actions_1, addon_knobs_1, AddProviderNameId_1, Default;
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
            function (AddProviderNameId_1_1) {
                AddProviderNameId_1 = AddProviderNameId_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Add Provider Name Id',
                component: AddProviderNameId_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(AddProviderNameId_1.default, { tooltipTitle: 'Add Provider', invalidTooltipTitle: 'Please fill fields', onChange: addon_actions_1.action('onChange'), fromToProps: {
                        toInputProps: {
                            explanation: 'Add Provider',
                            color: 'danger',
                            placeholder: 'Provider Id'
                        },
                        fromInputProps: {
                            placeholder: 'Provider Name'
                        }
                    } }));
            });
        }
    };
});
