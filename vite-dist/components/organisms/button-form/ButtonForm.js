System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "react", "react-transition-group", "./ButtonForm.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, react_1, react_transition_group_1, ButtonForm_module_scss_1, ButtonForm;
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
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_transition_group_1_1) {
                react_transition_group_1 = react_transition_group_1_1;
            },
            function (ButtonForm_module_scss_1_1) {
                ButtonForm_module_scss_1 = ButtonForm_module_scss_1_1;
            }
        ],
        execute: function () {
            ButtonForm = ({ renderOpenElement, children, getContainerProps, className, showPosition: showPositionProp }) => {
                const [showPosition, setShowPosition] = react_1.useState(showPositionProp);
                const buttonFormContainerRef = react_1.useRef(null);
                const [isOpenedForm, setOpenedForm] = react_1.useState(false);
                const buttonFormRenderArguments = react_1.useMemo(() => ({
                    open: () => setOpenedForm(true),
                    close: () => setOpenedForm(false),
                    opened: isOpenedForm
                }), [setOpenedForm]);
                const { subscribe, unsubscribe } = core_1.useOutsideClickEvent(`.${ButtonForm_module_scss_1.default.ButtonForm}`);
                react_1.useEffect(() => {
                    subscribe(() => setOpenedForm(false));
                    return () => unsubscribe();
                }, [subscribe, unsubscribe]);
                return (_jsxs("div", { ...(getContainerProps?.(buttonFormRenderArguments) || {}), className: classnames_1.default(ButtonForm_module_scss_1.default.ButtonForm, className), ref: buttonFormContainerRef, children: [renderOpenElement(buttonFormRenderArguments), _jsx(react_transition_group_1.CSSTransition, { in: isOpenedForm, timeout: 300, classNames: {
                                enter: ButtonForm_module_scss_1.default['ButtonForm__content--open'],
                                enterActive: ButtonForm_module_scss_1.default['ButtonForm__content--open'],
                                enterDone: ButtonForm_module_scss_1.default['ButtonForm__content--open']
                            }, unmountOnExit: true, children: _jsx(core_1.Card, { className: classnames_1.default(ButtonForm_module_scss_1.default['ButtonForm__content'], {
                                    [ButtonForm_module_scss_1.default[`ButtonForm__content--${showPosition}`]]: showPosition
                                }), children: _jsx("div", { ref: (element) => {
                                        if (!element)
                                            return;
                                        const scrollContainer = element.closest('[data-scroll-container]');
                                        if (!scrollContainer)
                                            return;
                                        const { right: scrollContainerRight } = scrollContainer.getBoundingClientRect();
                                        const { right: elementRight, width: elementWidth } = element.getBoundingClientRect();
                                        if (elementRight + elementWidth > scrollContainerRight)
                                            setShowPosition('right');
                                    }, children: typeof children === 'function' ? children(buttonFormRenderArguments) : children }) }) })] }));
            };
            exports_1("default", ButtonForm);
        }
    };
});
