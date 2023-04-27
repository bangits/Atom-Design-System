System.register(["react/jsx-runtime", "@/atom-design-system", "classnames", "react", "./Card.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, classnames_1, react_1, Card_module_scss_1, Card;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (Card_module_scss_1_1) {
                Card_module_scss_1 = Card_module_scss_1_1;
            }
        ],
        execute: function () {
            Card = ({ component: Component = 'div', actions, height = '14.5rem', children, index }) => {
                const [openViewMoreCollapse, setOpenViewMoreCollapse] = react_1.useState(false);
                const cardContentElRef = react_1.useRef(null);
                const showViewMoreBtnRef = react_1.useRef(false);
                const toggleViewMoreCollapse = react_1.useCallback(() => setOpenViewMoreCollapse((prev) => !prev), [setOpenViewMoreCollapse]);
                // Only first time check if need to show view more
                react_1.useLayoutEffect(() => {
                    showViewMoreBtnRef.current =
                        cardContentElRef.current && cardContentElRef.current.scrollHeight > cardContentElRef.current.offsetHeight;
                }, [cardContentElRef]);
                return (_jsxs(Component, { className: classnames_1.default(Card_module_scss_1.default.Card, {
                        [Card_module_scss_1.default['Card--WithActions']]: actions,
                        [Card_module_scss_1.default['Card--CollapseOpened']]: openViewMoreCollapse,
                        [Card_module_scss_1.default['Card--WithCollapse']]: showViewMoreBtnRef.current
                    }), children: [index && (_jsx(atom_design_system_1.Typography, { variant: 'p4', className: Card_module_scss_1.default.Card__Index, children: index })), _jsxs("div", { className: Card_module_scss_1.default.Card__Wrapper, children: [_jsx("div", { className: Card_module_scss_1.default.Card__Content, ref: cardContentElRef, style: { height: openViewMoreCollapse ? cardContentElRef.current?.scrollHeight : height }, children: children }), _jsx("div", { className: Card_module_scss_1.default.Card__Actions, children: actions }), showViewMoreBtnRef.current && (_jsxs("button", { className: Card_module_scss_1.default.Card__Btn, type: 'button', onClick: toggleViewMoreCollapse, children: [openViewMoreCollapse ? 'View Less' : 'View More', _jsx(atom_design_system_1.Icons.ViewMoreArrowIcon, {})] }))] })] }));
            };
            exports_1("default", Card);
        }
    };
});
