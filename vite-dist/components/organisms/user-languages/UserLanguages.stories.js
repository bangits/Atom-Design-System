System.register(["react/jsx-runtime", "@my-ui/core", "@storybook/addon-actions", "@storybook/addon-knobs", "./UserLanguages"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, addon_actions_1, addon_knobs_1, UserLanguages_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (addon_actions_1_1) {
                addon_actions_1 = addon_actions_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (UserLanguages_1_1) {
                UserLanguages_1 = UserLanguages_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/User Languages',
                component: UserLanguages_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(UserLanguages_1.default, { onDefaultLanguageChange: addon_actions_1.action('onDefaultLanguageChange'), 
                    // onDefaultBallanceChange={action('onDefaultBallanceChange')}
                    tableLoadingRowIds: [2], translations: {
                        add: 'Add',
                        id: 'ID',
                        other: 'Other',
                        code: 'code',
                        isDefault: 'default',
                        languageTag: 'Language ID',
                        name: 'Language Name'
                    }, languages: [
                        {
                            id: 1,
                            isDefault: true,
                            languageId: 1,
                            code: 'ENG',
                            name: 'English'
                        },
                        {
                            id: 2,
                            isDefault: false,
                            languageId: 1,
                            code: 'ARM',
                            name: 'Armenian',
                        },
                        {
                            id: 3,
                            isDefault: false,
                            languageId: 3,
                            code: 'RUS',
                            name: 'Russian',
                        }
                    ], renderLanguagesSelect: (changeOpenedLanguagesSelect) => (_jsx(core_1.Select, { options: [
                            {
                                label: 'English',
                                value: 1
                            },
                            {
                                label: 'Russian',
                                value: 2
                            }
                        ], onChange: () => changeOpenedLanguagesSelect(false) })) }));
            });
        }
    };
});
