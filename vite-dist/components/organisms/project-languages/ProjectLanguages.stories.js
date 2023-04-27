System.register(["react/jsx-runtime", "@my-ui/core", "@storybook/addon-knobs", "./ProjectLanguages"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, addon_knobs_1, ProjectLanguages_1, Default;
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
            function (ProjectLanguages_1_1) {
                ProjectLanguages_1 = ProjectLanguages_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Project Languages',
                component: ProjectLanguages_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(ProjectLanguages_1.default, { renderLanguagesSelect: (changeOpenedCustomSelect) => (_jsx(core_1.Select, { options: [
                            {
                                label: 'AM',
                                value: 1
                            },
                            {
                                label: 'EN',
                                value: 2
                            },
                            {
                                label: 'RU',
                                value: 3
                            },
                        ], onChange: () => changeOpenedCustomSelect(false) })), translations: {
                        add: "Add",
                        default: "Default",
                        supported: "Supported",
                        tableHeaders: {
                            language: "Language",
                            languageTag: "Language Tag",
                            type: "Type"
                        }
                    }, tableLoadingRowIds: ['EN'], shouldShowAddWalletButton: true, languages: [
                        {
                            isDefault: true,
                            language: "Armenian",
                            languageTag: "AM",
                        },
                        {
                            isDefault: false,
                            language: "Russian",
                            languageTag: "RU",
                        },
                        {
                            isDefault: false,
                            language: "English",
                            languageTag: "EN",
                        },
                    ] }));
            });
        }
    };
});
