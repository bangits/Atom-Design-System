System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./LicensesAdd"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, LicensesAdd_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (LicensesAdd_1_1) {
                LicensesAdd_1 = LicensesAdd_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: LicensesAdd_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/organisms/Licenses Add'
            });
            exports_1("Default", Default = () => {
                return (_jsx(LicensesAdd_1.default, { addCardProps: {
                        addLicense: 'Add License',
                        clickHere: 'Click here',
                        toDoSomething: 'to add license'
                    }, editFormProps: {
                        fields: [
                            {
                                type: 'input',
                                name: 'name'
                            },
                            {
                                type: 'input',
                                name: 'name'
                            },
                            {
                                type: 'input',
                                name: 'name'
                            },
                            {
                                type: 'input',
                                name: 'name'
                            },
                            {
                                type: 'input',
                                name: 'name'
                            }
                        ],
                        renderInputs: (Component) => _jsx(Component, {})
                    }, col: 6 }));
            });
        }
    };
});
