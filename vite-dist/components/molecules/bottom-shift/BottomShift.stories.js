System.register(["react/jsx-runtime", "@my-ui/core", "@storybook/addon-knobs", "react", "./BottomShift"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, addon_knobs_1, react_1, BottomShift_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (BottomShift_1_1) {
                BottomShift_1 = BottomShift_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: BottomShift_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/BottomShift'
            });
            exports_1("Default", Default = () => {
                const [openedBottomShift, setOpenedBottomShift] = react_1.useState(false);
                return (_jsxs(_Fragment, { children: [_jsx(core_1.Button, { onClick: () => setOpenedBottomShift(!openedBottomShift), children: "Open bottom shift" }), _jsx(BottomShift_1.default, { opened: openedBottomShift, onClose: () => setOpenedBottomShift(false), children: "Bottom Shift" })] }));
            });
        }
    };
});
