System.register(["react/jsx-runtime", "@/components", "react", "./CompatibilityCheckboxesGroup.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, react_1, CompatibilityCheckboxesGroup_module_scss_1, CompatibilityCheckboxesGroup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (CompatibilityCheckboxesGroup_module_scss_1_1) {
                CompatibilityCheckboxesGroup_module_scss_1 = CompatibilityCheckboxesGroup_module_scss_1_1;
            }
        ],
        execute: function () {
            CompatibilityCheckboxesGroup = ({ platformCheckboxesValues, mobileCheckboxesValues, tabletCheckboxesValues, platformInitialValues, mobileInitialValues, tabletInitialValues, onPlatformChange, onMobileModeChange, onTabletModeChange, translations }) => {
                const [platform, setPlatform] = react_1.useState(platformInitialValues ?? []);
                return (_jsxs("div", { className: CompatibilityCheckboxesGroup_module_scss_1.default.CompatibilityCheckboxesGroup, children: [_jsx(components_1.CheckboxGroup, { label: translations.platform, onChange: (selectedValues) => {
                                setPlatform(selectedValues);
                                onPlatformChange?.(selectedValues);
                            }, defaultValue: platformInitialValues, checkboxes: [
                                {
                                    label: translations.mobile,
                                    name: 'mobile',
                                    value: platformCheckboxesValues.mobile
                                },
                                {
                                    label: translations.desktop,
                                    name: 'desktop',
                                    value: platformCheckboxesValues.desktop
                                },
                                {
                                    label: translations.tablet,
                                    name: 'tablet',
                                    value: platformCheckboxesValues.tablet
                                }
                            ] }), _jsx(components_1.CheckboxGroup, { label: translations.mobileScreenMode, onChange: (selectedValues) => {
                                onMobileModeChange?.(selectedValues);
                            }, defaultValue: mobileInitialValues || [], checkboxes: [
                                {
                                    label: translations.portrait,
                                    disabled: !platform.includes(platformCheckboxesValues.mobile),
                                    value: mobileCheckboxesValues.portrait,
                                    name: 'portrait',
                                },
                                {
                                    label: translations.landscape,
                                    value: mobileCheckboxesValues.landscape,
                                    disabled: !platform.includes(platformCheckboxesValues.mobile),
                                    name: 'landscape',
                                }
                            ] }), _jsx(components_1.CheckboxGroup, { label: translations.tabletScreenMode, defaultValue: tabletInitialValues || [], onChange: (selectedValues) => {
                                onTabletModeChange?.(selectedValues);
                            }, checkboxes: [
                                {
                                    label: translations.portrait,
                                    value: tabletCheckboxesValues.portrait,
                                    disabled: !platform.includes(platformCheckboxesValues.tablet),
                                    name: 'port',
                                },
                                {
                                    label: translations.landscape,
                                    value: mobileCheckboxesValues.landscape,
                                    disabled: !platform.includes(platformCheckboxesValues.tablet),
                                    name: 'land',
                                }
                            ] })] }));
            };
            exports_1("default", CompatibilityCheckboxesGroup);
        }
    };
});
