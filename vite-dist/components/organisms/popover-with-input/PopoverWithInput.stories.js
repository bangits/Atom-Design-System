System.register(["react/jsx-runtime", "@my-ui/core", "@storybook/addon-knobs", "./PopoverWithInput"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, addon_knobs_1, PopoverWithInput_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (PopoverWithInput_1_1) {
                PopoverWithInput_1 = PopoverWithInput_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: PopoverWithInput_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/templates/PopoverWithInput'
            });
            exports_1("Default", Default = () => {
                return (_jsx(PopoverWithInput_1.default, { buttonLabel: 'Save', title: 'Position Change', totalCount: '1-20', renderOpenElement: ({ open }) => (_jsx(core_1.Tooltip, { text: 'Tooltip', showEvent: 'hover', children: _jsx(core_1.IconButton, { icon: _jsx(core_1.Icons.RecalculateIcon, { width: '100%' }), onClick: open }) })) }));
            });
        }
    };
});
