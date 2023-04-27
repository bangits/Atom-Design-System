System.register(["react/jsx-runtime", "@storybook/addon-actions", "@storybook/addon-knobs", "./CompatibilityCheckboxesGroup"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_actions_1, addon_knobs_1, CompatibilityCheckboxesGroup_1, Default;
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
            function (CompatibilityCheckboxesGroup_1_1) {
                CompatibilityCheckboxesGroup_1 = CompatibilityCheckboxesGroup_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: CompatibilityCheckboxesGroup_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/organisms/Compatibility Checkboxes Group'
            });
            exports_1("Default", Default = () => {
                return (_jsx(CompatibilityCheckboxesGroup_1.default, { translations: {
                        desktop: 'Desktop',
                        landscape: 'Landscape',
                        mobile: 'Mobile',
                        mobileScreenMode: 'Mobile Screen Mode',
                        platform: 'Platform',
                        portrait: 'Portrait',
                        tablet: 'Tablet',
                        tabletScreenMode: 'Tablet Screen Mode'
                    }, platformInitialValues: [1, 3], mobileInitialValues: [1], tabletInitialValues: [2], onMobileModeChange: addon_actions_1.action('onMobileModeChange'), onPlatformChange: addon_actions_1.action('onPlatformModeChange'), onTabletModeChange: addon_actions_1.action('onTabletModeChange'), platformCheckboxesValues: {
                        mobile: 1,
                        desktop: 2,
                        tablet: 3
                    }, mobileCheckboxesValues: {
                        portrait: 1,
                        landscape: 2
                    }, tabletCheckboxesValues: {
                        portrait: 1,
                        landscape: 2
                    } }));
            });
        }
    };
});
