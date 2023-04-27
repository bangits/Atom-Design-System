System.register(["react/jsx-runtime", "@/icons", "@storybook/addon-knobs", "./StatusView"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, addon_knobs_1, StatusView_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (StatusView_1_1) {
                StatusView_1 = StatusView_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Status View',
                component: StatusView_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(StatusView_1.default, { label: 'Status', variant: 'active', statusLabel: 'Validated', icon: { tooltipText: 'asd', value: _jsx(icons_1.PlayersIcon, {}), label: 'Players' }, noDataText: 'asdad' }));
            });
        }
    };
});
