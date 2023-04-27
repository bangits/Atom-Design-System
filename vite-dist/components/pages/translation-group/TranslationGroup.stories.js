System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "@storybook/addon-knobs", "./TranslationGroup"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, addon_knobs_1, TranslationGroup_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (TranslationGroup_1_1) {
                TranslationGroup_1 = TranslationGroup_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: TranslationGroup_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/pages/TranslationGroup'
            });
            exports_1("Default", Default = () => {
                return (_jsx(TranslationGroup_1.default, { leftElements: [_jsx(core_1.TextInput, {}, 0), _jsx(core_1.TextInput, {}, 1)], rightElements: [_jsx(core_1.Button, { children: "Button" }, 0), _jsx(core_1.Button, { children: "Button" }, 1)], rows: [
                        {
                            title: 'English (default)',
                            content: _jsx(_Fragment, { children: "This is content" }),
                            icon: _jsx(atom_design_system_1.Icons.PhotoCamIcon, {})
                        },
                        {
                            title: 'Germany',
                            content: _jsx(_Fragment, { children: "This is content" }),
                            icon: _jsx(atom_design_system_1.Icons.PhotoCamIcon, {})
                        },
                        {
                            title: 'Russian',
                            content: _jsx(_Fragment, { children: "This is content" }),
                            icon: _jsx(atom_design_system_1.Icons.PhotoCamIcon, {})
                        },
                        {
                            title: 'Armenian',
                            content: _jsx(_Fragment, { children: "This is content" }),
                            icon: _jsx(atom_design_system_1.Icons.PhotoCamIcon, {})
                        },
                        {
                            title: 'French',
                            content: _jsx(_Fragment, { children: "This is content" }),
                            icon: _jsx(atom_design_system_1.Icons.PhotoCamIcon, {})
                        },
                        {
                            title: 'Spanish',
                            content: _jsx(_Fragment, { children: "This is content" }),
                            icon: _jsx(atom_design_system_1.Icons.PhotoCamIcon, {})
                        }
                    ] }));
            });
        }
    };
});
