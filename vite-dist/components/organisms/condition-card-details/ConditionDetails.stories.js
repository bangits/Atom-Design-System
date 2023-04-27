System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./ConditionDetails"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, ConditionDetails_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (ConditionDetails_1_1) {
                ConditionDetails_1 = ConditionDetails_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: ConditionDetails_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/organisms/Condition Details'
            });
            exports_1("Default", Default = () => {
                return (_jsx(ConditionDetails_1.default, { col: 12, conditionDetailsLabel: 'Condition Details', addActivity: () => { }, addCriteria: () => { }, conditionDetailsSubLabel: 'Condition can be created based on Activiy or Criteria.' }));
            });
        }
    };
});
