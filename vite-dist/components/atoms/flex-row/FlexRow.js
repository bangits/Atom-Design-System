System.register(["react/jsx-runtime", "classnames", "react", "./FlexRow.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, classnames_1, react_1, FlexRow_module_scss_1, FlexRow;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (FlexRow_module_scss_1_1) {
                FlexRow_module_scss_1 = FlexRow_module_scss_1_1;
            }
        ],
        execute: function () {
            FlexRow = ({ gap = 1, children, className }) => {
                const childrenArray = react_1.useMemo(() => react_1.Children.toArray(children), [children]);
                return (_jsx("div", { className: classnames_1.default(FlexRow_module_scss_1.default.FlexRow, {
                        [FlexRow_module_scss_1.default[`FlexRow--Gap-${gap}`]]: gap
                    }, className), children: childrenArray.map((child, index) => (_jsx("div", { className: FlexRow_module_scss_1.default.FlexRow__Item, children: child }, index))) }));
            };
            exports_1("default", FlexRow);
        }
    };
});
