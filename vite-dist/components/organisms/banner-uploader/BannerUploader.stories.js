System.register(["react/jsx-runtime", "@my-ui/core", "@storybook/addon-actions", "@storybook/addon-knobs", "./BannerUploader"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, addon_actions_1, addon_knobs_1, BannerUploader_1, Default;
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
            function (BannerUploader_1_1) {
                BannerUploader_1 = BannerUploader_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/BannerUploader',
                component: BannerUploader_1.BannerUploader,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(BannerUploader_1.BannerUploader, { translations: {
                        upload: 'Upload',
                        edit: 'Edit',
                        pleaseUploadThePhoto: 'Please upload the photo for editing',
                        title: 'Game banner',
                        save: 'Save',
                        rotate: 'Rotate',
                        remove: 'Remove',
                        cancel: 'Cancel'
                    }, onSave: addon_actions_1.action('onSave'), children: (openFn) => _jsx(core_1.Button, { onClick: openFn, children: "Open the uploader" }) }));
            });
        }
    };
});
