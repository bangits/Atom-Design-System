System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./Label"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, Label_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (Label_1_1) {
                Label_1 = Label_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: Label_1.Label,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/atoms/Label'
            });
            exports_1("Default", Default = () => {
                return (_jsx(Label_1.Label, { optional: addon_knobs_1.boolean('optional', false), optionalText: addon_knobs_1.text('optionalText', '(optional)'), text: addon_knobs_1.text('text', 'Company Logotype') }));
            });
        }
    };
});
