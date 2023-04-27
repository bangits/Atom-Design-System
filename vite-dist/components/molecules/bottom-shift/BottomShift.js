System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "react-transition-group", "./BottomShift.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, react_transition_group_1, BottomShift_module_scss_1, BottomShift;
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
            function (react_transition_group_1_1) {
                react_transition_group_1 = react_transition_group_1_1;
            },
            function (BottomShift_module_scss_1_1) {
                BottomShift_module_scss_1 = BottomShift_module_scss_1_1;
            }
        ],
        execute: function () {
            BottomShift = ({ children, opened, onClose }) => {
                return (_jsx(react_transition_group_1.CSSTransition, { in: opened, timeout: 300, unmountOnExit: true, children: (status) => {
                        const isOpened = status !== 'exited' && status !== 'exiting';
                        return (_jsx(core_1.Portal, { children: _jsxs(core_1.Card, { className: classnames_1.default(BottomShift_module_scss_1.default.BottomShift, {
                                    [BottomShift_module_scss_1.default['BottomShift--open']]: isOpened
                                }), children: [children, _jsx(core_1.IconButton, { onClick: onClose, icon: _jsx(core_1.Icons.CloseIcon, {}), className: classnames_1.default(BottomShift_module_scss_1.default['BottomShift__close'], {
                                            [BottomShift_module_scss_1.default['BottomShift__close--open']]: isOpened
                                        }) })] }) }));
                    } }));
            };
            exports_1("default", BottomShift);
        }
    };
});
