System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "./ImageGallery.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, ImageGallery_module_scss_1, ImageGallery;
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
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (ImageGallery_module_scss_1_1) {
                ImageGallery_module_scss_1 = ImageGallery_module_scss_1_1;
            }
        ],
        execute: function () {
            ImageGallery = ({ imageSources, galleryName, maxImagesCount = 8, onViewButtonClick }) => {
                const maxImageSources = imageSources.slice(0, maxImagesCount);
                return (_jsxs("div", { className: ImageGallery_module_scss_1.default.ImageGallery, children: [_jsxs("div", { className: ImageGallery_module_scss_1.default.ImageGallery__Images, children: [[...maxImageSources, ...new Array(maxImagesCount - maxImageSources.length).fill(null)].map((src, index) => src ? (_jsx("img", { src: src, className: ImageGallery_module_scss_1.default.ImageGallery__Image }, src)) : (_jsx(atom_design_system_1.Icons.CameraIcon, { className: classnames_1.default(ImageGallery_module_scss_1.default.ImageGallery__Image, ImageGallery_module_scss_1.default['ImageGallery__Image--Empty']) }, index))), imageSources.length >= maxImagesCount && _jsx("span", { className: ImageGallery_module_scss_1.default.ImageGallery__Rest, children: "..." }), _jsx("div", { className: ImageGallery_module_scss_1.default.ImageGallery__Layer, children: _jsx("button", { type: 'button', className: ImageGallery_module_scss_1.default.ImageGallery__View, onClick: onViewButtonClick, children: _jsx(atom_design_system_1.Icons.ViewIcon, {}) }) })] }), _jsx(core_1.TextWithTooltip, { displayText: galleryName, className: ImageGallery_module_scss_1.default.ImageGallery__Name, children: galleryName })] }));
            };
            exports_1("default", atom_design_system_1.typedMemo(ImageGallery));
        }
    };
});
