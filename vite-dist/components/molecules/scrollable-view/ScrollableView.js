System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "react", "./ScrollableView.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, react_1, ScrollableView_module_scss_1, ScrollableView;
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
            function (ScrollableView_module_scss_1_1) {
                ScrollableView_module_scss_1 = ScrollableView_module_scss_1_1;
            }
        ],
        execute: function () {
            ScrollableView = ({ disableOnPageChange, onPageChange, className, showLoader, height, children }) => {
                const [currentPage, setCurrentPage] = react_1.useState(1);
                return (_jsxs(core_1.Scroll, { height: height || '60rem', autoHide: true, onScroll: (e) => {
                        if (disableOnPageChange)
                            return;
                        const isScrolledToBottom = e.target.offsetHeight + e.target.scrollTop >=
                            e.target.scrollHeight;
                        if (isScrolledToBottom) {
                            onPageChange(currentPage + 1);
                            setCurrentPage(currentPage + 1);
                        }
                    }, className: classnames_1.default(ScrollableView_module_scss_1.default.ScrollableView, className), children: [children, _jsx("div", { className: ScrollableView_module_scss_1.default.LoaderContainer, children: showLoader && _jsx(core_1.Loader, {}) })] }));
            };
            exports_1("default", ScrollableView);
        }
    };
});
