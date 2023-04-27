System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "react", "./ListViewMore.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, react_1, ListViewMore_module_scss_1, ListViewMore;
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
            function (ListViewMore_module_scss_1_1) {
                ListViewMore_module_scss_1 = ListViewMore_module_scss_1_1;
            }
        ],
        execute: function () {
            ListViewMore = ({ children, lessLabel, getMoreLabel }) => {
                const listRef = react_1.useRef(null);
                const [showMoreBtn, setShowMoreBtn] = react_1.useState(false);
                const [isViewMoreButtonClicked, setIsViewMoreButtonClicked] = react_1.useState(false);
                const [remaindChildsCount, setRemaindChildsCount] = react_1.useState(0);
                react_1.useEffect(() => {
                    const listElementWidth = listRef.current.clientWidth;
                    // Getting css gap style and convert to number
                    const listGap = +getComputedStyle(listRef.current).gap.split('px')[0];
                    let elementsTotalWidth = 0;
                    let visibleChildsCount = 0;
                    const childrenList = listRef.current.children;
                    // Using for, because we need break
                    for (let i = 0; i < childrenList.length; i++) {
                        const child = childrenList[i];
                        elementsTotalWidth += child.clientWidth + listGap;
                        if (elementsTotalWidth > listElementWidth) {
                            // i counting from 0, for that don't need to subtract 1
                            visibleChildsCount = i;
                            break;
                        }
                    }
                    setRemaindChildsCount(childrenList.length - visibleChildsCount);
                    if (listRef.current.clientHeight !== listRef.current.scrollHeight)
                        setShowMoreBtn(true);
                }, []);
                return (_jsxs("div", { className: classnames_1.default(ListViewMore_module_scss_1.default.ListViewMore, {
                        [ListViewMore_module_scss_1.default['ListViewMore--ViewMoreClicked']]: isViewMoreButtonClicked
                    }), children: [_jsx("div", { className: ListViewMore_module_scss_1.default.ListViewMore__List, ref: listRef, children: children }), showMoreBtn && (_jsx(core_1.Button, { variant: 'link', onClick: () => setIsViewMoreButtonClicked(!isViewMoreButtonClicked), children: !isViewMoreButtonClicked ? `${getMoreLabel(remaindChildsCount)}` : lessLabel }))] }));
            };
            exports_1("default", ListViewMore);
        }
    };
});
