System.register(["react/jsx-runtime", "@/components", "@my-ui/core", "classnames", "react", "./Prioritizations.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, core_1, classnames_1, react_1, Prioritizations_module_scss_1, Prioritizations;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
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
            function (Prioritizations_module_scss_1_1) {
                Prioritizations_module_scss_1 = Prioritizations_module_scss_1_1;
            }
        ],
        execute: function () {
            Prioritizations = ({ children, lessLabel, searchInputProps, getMoreLabel, options, hasTasks, isTabLoading, searchLabel, onChange, searchInputMaxLength, isAllItemsLoaded, isLoadingItems, onPageChange, buttons, itemsWidthAuto, pagination, emptyFormText, tabOnChange, defaultTabValue, ...categoryItemsProps }) => {
                const latestSearchValue = react_1.useRef('');
                const [searchValue, setSearchValue] = react_1.useState('');
                const [currentPage, setCurrentPage] = react_1.useState(1);
                const childrenArray = react_1.useMemo(() => react_1.Children.toArray(children), [children]);
                const scrollProps = react_1.useMemo(() => ({
                    autoHide: true,
                    autoHeightMin: '50rem',
                    height: '50rem'
                }), []);
                const currentPageRef = react_1.useRef(1);
                return (_jsx(_Fragment, { children: _jsxs(core_1.Card, { className: Prioritizations_module_scss_1.default['CategoryItems__card'], children: [_jsx("div", { className: 'mb-4', children: _jsx(core_1.Scroll, { showHorizontalScroll: true, onScroll: (e) => console.log('onScroll'), children: _jsx(core_1.Tab, { options: options || [], defaultValue: defaultTabValue, variant: 'bordered', onChange: (e) => tabOnChange(e) }) }) }), !isTabLoading ? (_jsx(components_1.TextInput, { label: searchLabel, endIcon: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '16px', style: { fill: '#8ea6c1', cursor: 'pointer', opacity: '0.5' }, viewBox: '0 0 512 512', onClick: () => {
                                        if (!(latestSearchValue.current && !searchValue.length) && searchValue.length < 3)
                                            return;
                                        latestSearchValue.current = searchValue;
                                        setCurrentPage(1);
                                        onChange(searchValue);
                                    }, children: _jsx("path", { d: 'm503.6 463.2-96.7-96.4C438.1 327.1 455 278 455 227.5 455 101.8 353.1 0 227.5 0 101.8 0 0 101.8 0 227.5 0 353.1 101.8 455 227.5 455c50.5.1 99.6-16.9 139.3-48.1l96.4 96.7c11.1 11.1 29.1 11.2 40.2.2l.2-.2c11.1-11.1 11.2-29.1.2-40.2l-.2-.2zM56.9 227.5c0-94.2 76.4-170.6 170.6-170.6 94.2 0 170.6 76.4 170.6 170.6 0 94.2-76.4 170.6-170.6 170.6-94.3 0-170.6-76.4-170.6-170.6z' }) }), value: searchValue, onChange: (e) => setSearchValue(e.target.value), maxLength: searchInputMaxLength })) : null, _jsx(core_1.Scroll, { ...scrollProps, onScroll: (e) => {
                                    if (isAllItemsLoaded || isLoadingItems)
                                        return;
                                    const isScrolledToBottom = e.target.offsetHeight + e.target.scrollTop >=
                                        e.target.scrollHeight;
                                    if (isScrolledToBottom) {
                                        onPageChange?.(currentPageRef.current + 1);
                                        currentPageRef.current = currentPageRef.current + 1;
                                    }
                                }, children: _jsxs("div", { className: Prioritizations_module_scss_1.default['CategoryItems__list'], children: [childrenArray.length ? (childrenArray.map((c) => (_jsx("div", { className: classnames_1.default(Prioritizations_module_scss_1.default['CategoryItems__item'], {
                                                [Prioritizations_module_scss_1.default['CategoryItems__item--width-auto']]: itemsWidthAuto
                                            }), children: c })))) : (_jsx(components_1.EmptyForm, { children: emptyFormText })), isLoadingItems && (_jsx("div", { className: Prioritizations_module_scss_1.default['CategoryItems__loader'], children: _jsx(core_1.Loader, {}) }))] }) }), buttons?.length && _jsx("div", { className: Prioritizations_module_scss_1.default['CategoryItems__buttons'], children: buttons }), pagination && _jsx("div", { className: Prioritizations_module_scss_1.default['CategoryItems__pagination'], children: pagination })] }) }));
            };
            exports_1("default", Prioritizations);
        }
    };
});
