System.register(["react/jsx-runtime", "@my-ui/core", "./enums"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, enums_1, variantsMap, renderEl;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (enums_1_1) {
                enums_1 = enums_1_1;
            }
        ],
        execute: function () {
            exports_1("variantsMap", variantsMap = {
                [enums_1.FileUploaderVariants.link]: core_1.LinkFileUploader,
                [enums_1.FileUploaderVariants.input]: core_1.InputFileUploader
            });
            exports_1("renderEl", renderEl = (variant, props) => {
                const CurrentVariant = variantsMap[variant];
                return _jsx(CurrentVariant, { ...props });
            });
        }
    };
});
