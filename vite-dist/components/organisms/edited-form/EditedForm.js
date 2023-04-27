System.register(["react/jsx-runtime", "@/helpers", "@/icons", "@my-ui/core", "classnames", "react", "./EditedForm.module.scss", "./EditedFormOptions"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, helpers_1, icons_1, core_1, classnames_1, react_1, EditedForm_module_scss_1, EditedFormOptions_1, EditedForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
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
            function (EditedForm_module_scss_1_1) {
                EditedForm_module_scss_1 = EditedForm_module_scss_1_1;
            },
            function (EditedFormOptions_1_1) {
                EditedFormOptions_1 = EditedFormOptions_1_1;
            }
        ],
        execute: function () {
            EditedForm = ({ title, tooltipText, noDataText = 'N/A', options, viewMoreLabel = 'View More', viewLessLabel = 'View Less', onToggle, editButtonTooltipText, children, col, showDeleteButton, deleteButtonTooltipText, onDelete, showEditIcons = true, removeCard, startJustify, disableEditButton = false, showEditButton = true, removeShadow, topPart, actions, actionsInside, height: heightProp = 248, inRedirectClick }) => {
                const containerRef = react_1.useRef();
                const [isOpenedCollapse, setOpenedCollapse] = react_1.useState(false);
                // eslint-disable-next-line prefer-const
                let [height, setHeight] = react_1.useState();
                const containerHeight = containerRef.current?.scrollHeight;
                if (height !== containerHeight)
                    height = containerHeight;
                const viewMoreClassNames = core_1.useStyles({
                    open: {
                        paddingBottom: '24px',
                        height: (data) => data.height + 24,
                        minHeight: 248
                    },
                    closed: {
                        height: (data) => data.heightProp
                    },
                    iconTransform: {
                        transform: 'rotate(180deg)',
                        transition: '.5s'
                    }
                }, { height, heightProp });
                const handleViewClick = react_1.useCallback(() => {
                    setOpenedCollapse(!isOpenedCollapse);
                }, [isOpenedCollapse]);
                react_1.useLayoutEffect(() => {
                    const height = containerRef.current?.scrollHeight;
                    if (height !== undefined)
                        setHeight(height);
                }, [containerRef, children]);
                if (removeCard)
                    return _jsx(_Fragment, { children: children });
                return (_jsxs("div", { className: classnames_1.default(EditedForm_module_scss_1.default.EditedFormBase, {
                        [EditedForm_module_scss_1.default[`EditedFormBase--${col}`]]: col,
                        [EditedForm_module_scss_1.default[`EditedFormBase--${col}`]]: col
                    }), style: { opacity: height || heightProp === 'auto' ? 1 : 0 }, children: [_jsxs("div", { className: classnames_1.default(EditedForm_module_scss_1.default['EditedFormBase--control'], {
                                [EditedForm_module_scss_1.default['EditedFormBase--actions-inside']]: actionsInside
                            }), children: [topPart, title && (_jsxs("span", { className: EditedForm_module_scss_1.default['EditedFormBase--control-title'], children: [title, tooltipText && (_jsx(core_1.Tooltip, { text: tooltipText, children: _jsx(icons_1.InfoTooltipIcon, { className: EditedForm_module_scss_1.default['EditedFormBase--control-tooltip'], width: '1.5rem', height: '1.5rem' }) }))] })), showEditIcons && (_jsxs("div", { className: classnames_1.default(EditedForm_module_scss_1.default['EditedFormBase--control-button']), children: [actions, showEditButton && (_jsx(core_1.Tooltip, { showEvent: 'hover', text: editButtonTooltipText, children: _jsx("div", { children: _jsx(core_1.IconButton, { disabled: disableEditButton, icon: _jsx(icons_1.PenIcon, {}), onClick: onToggle }) }) })), showDeleteButton && (_jsx(core_1.Tooltip, { showEvent: 'hover', text: deleteButtonTooltipText, children: _jsx(core_1.IconButton, { icon: _jsx(icons_1.DustbinIcon, {}), onClick: onDelete }) }))] }))] }), _jsx(core_1.Card, { borderRadius: 1.6, className: classnames_1.default(EditedForm_module_scss_1.default['EditedFormBase--card-content'], {
                                [EditedForm_module_scss_1.default['EditedFormBase--remove-shadow']]: removeShadow
                            }), children: _jsxs("div", { className: classnames_1.default(EditedForm_module_scss_1.default['EditedFormBase--content'], {
                                    [viewMoreClassNames.closed]: !isOpenedCollapse,
                                    [viewMoreClassNames.open]: isOpenedCollapse,
                                    [EditedForm_module_scss_1.default['EditedFormBase--content-children']]: children,
                                    [EditedForm_module_scss_1.default['EditedFormBase--content-start-justify']]: startJustify
                                }), ref: containerRef, children: [children || _jsx(EditedFormOptions_1.default, { options: options, noDataText: noDataText }), height > 248 && heightProp !== 'auto' && (_jsxs("div", { onClick: handleViewClick, className: EditedForm_module_scss_1.default['EditedFormBase--viewMore'], children: [_jsx("div", { className: classnames_1.default({
                                                    [viewMoreClassNames.iconTransform]: isOpenedCollapse
                                                }), children: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', children: _jsxs("g", { id: 'Group_24108', transform: 'translate(-555 -465)', children: [_jsxs("g", { id: 'Group_24107', transform: 'translate(0 6)', children: [_jsx("path", { id: 'Icon_ionic-ios-arrow-down', d: 'M11.189,14.739l3.781-3.309a.786.786,0,0,1,1.009,0,.576.576,0,0,1,0,.885L11.7,16.064a.789.789,0,0,1-.985.018L6.4,12.318a.574.574,0,0,1,0-.885.786.786,0,0,1,1.009,0Z', transform: 'translate(555.813 459.753)', fill: 'currentColor' }), _jsx("path", { id: 'Icon_ionic-ios-arrow-down-2', d: 'M11.189,14.739l3.781-3.309a.786.786,0,0,1,1.009,0,.576.576,0,0,1,0,.885L11.7,16.064a.789.789,0,0,1-.985.018L6.4,12.318a.574.574,0,0,1,0-.885.786.786,0,0,1,1.009,0Z', transform: 'translate(555.813 455.753)', fill: 'currentColor' })] }), _jsx("rect", { id: 'Rectangle_11242', width: '24', height: '24', transform: 'translate(555 465)', fill: 'none' })] }) }) }), _jsx("span", { children: isOpenedCollapse ? viewLessLabel : viewMoreLabel })] }))] }) })] }));
            };
            exports_1("default", helpers_1.typedMemo(EditedForm));
        }
    };
});
