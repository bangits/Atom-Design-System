System.register(["react/jsx-runtime", "@storybook/addon-actions", "@storybook/addon-knobs", "./CheckableInput"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_actions_1, addon_knobs_1, CheckableInput_1, Default;
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
            function (CheckableInput_1_1) {
                CheckableInput_1 = CheckableInput_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: CheckableInput_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/CheckableInput'
            });
            exports_1("Default", Default = () => {
                return (_jsx(_Fragment, { children: _jsx(CheckableInput_1.default, { value: '', label: 'Add UserName', explanation: 'Add UserName', color: 'success', applyCheck: () => { }, tooltipTitle: 'Add Provider', invalidTooltipTitle: 'Please fill fields', onChange: addon_actions_1.action('onChange'), values: [
                            { id: 1452, userName: 'Ruben' },
                            { id: 45, userName: 'Tetst' }
                        ] }) }));
            });
        }
    };
});
