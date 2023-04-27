System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./DocumentStatus"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, DocumentStatus_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (DocumentStatus_1_1) {
                DocumentStatus_1 = DocumentStatus_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Status View',
                component: DocumentStatus_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(DocumentStatus_1.default, { startIcon: 'CircleIcon', variant: 'active', statusLabel: 'Validated', pageLabel: 'page', pageQuantity: 3, actions: [
                        {
                            onClick: () => {
                                console.log;
                            },
                            buttonVariant: 'dark',
                            iconName: 'ClearIcon'
                        }
                    ] }));
            });
        }
    };
});
