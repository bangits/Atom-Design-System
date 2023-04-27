System.register(["react/jsx-runtime", "@/icons", "@my-ui/core"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, core_1, ExportButton;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            exports_1("ExportButton", ExportButton = ({ disabled, tooltipText, ...props }) => {
                return (_jsx(core_1.Tooltip, { text: tooltipText, children: _jsx(icons_1.ExportIcon, { ...props, width: '1.5rem', height: '1.5rem', style: { opacity: disabled ? 0.4 : 1, cursor: 'pointer' }, onClick: (...args) => {
                            if (!disabled)
                                props.onClick(...args);
                        } }) }));
            });
        }
    };
});
