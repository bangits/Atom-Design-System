System.register(["react/jsx-runtime", "@/atom-design-system", "./ImageGalleries.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, ImageGalleries_module_scss_1, ImageGalleries;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (ImageGalleries_module_scss_1_1) {
                ImageGalleries_module_scss_1 = ImageGalleries_module_scss_1_1;
            }
        ],
        execute: function () {
            ImageGalleries = ({ children, isAllImagesLoaded, isLoading, onPageChange }) => {
                return (_jsx(atom_design_system_1.ScrollableView, { onPageChange: onPageChange, disableOnPageChange: isAllImagesLoaded || isLoading, showLoader: isLoading, className: ImageGalleries_module_scss_1.default.GamesScroll, children: _jsx("div", { className: ImageGalleries_module_scss_1.default.ImageGalleries, children: children }) }));
            };
            exports_1("default", ImageGalleries);
        }
    };
});
