System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "./ImageGalleryDetails.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, ImageGalleryDetails_module_scss_1, ImageGalleryDetails;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (ImageGalleryDetails_module_scss_1_1) {
                ImageGalleryDetails_module_scss_1 = ImageGalleryDetails_module_scss_1_1;
            }
        ],
        execute: function () {
            ImageGalleryDetails = ({ leftContent, rightContent, rightContentCentered, title }) => {
                return (_jsxs(core_1.Card, { className: ImageGalleryDetails_module_scss_1.default.ImageGalleryDetails, children: [_jsx(core_1.Typography, { variant: 'p3', className: ImageGalleryDetails_module_scss_1.default.ImageGalleryDetails__Title, children: title }), _jsxs("div", { className: ImageGalleryDetails_module_scss_1.default.ImageGalleryDetails__Container, children: [_jsx(core_1.Card, { className: ImageGalleryDetails_module_scss_1.default.ImageGalleryDetails__Left, children: leftContent }), _jsx(core_1.Card, { className: classnames_1.default(ImageGalleryDetails_module_scss_1.default.ImageGalleryDetails__Right, {
                                        [ImageGalleryDetails_module_scss_1.default['ImageGalleryDetails__Right--Centered']]: rightContentCentered
                                    }), children: rightContent })] })] }));
            };
            exports_1("default", ImageGalleryDetails);
        }
    };
});
