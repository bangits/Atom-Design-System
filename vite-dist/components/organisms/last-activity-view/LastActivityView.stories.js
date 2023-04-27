System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./LastActivityView"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, LastActivityView_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (LastActivityView_1_1) {
                LastActivityView_1 = LastActivityView_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Last Activity View',
                component: LastActivityView_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(LastActivityView_1.default, { lastActivity: addon_knobs_1.object('lastActivity', {
                        title: 'Last Activity',
                        info: [
                            {
                                label: 'Last login',
                                date: '12.09.2021 12:08:03'
                            },
                            {
                                label: 'Last game session',
                                date: '12.09.2021 12:08:03'
                            }
                        ]
                    }) }));
            });
        }
    };
});
