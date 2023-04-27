System.register(["react/jsx-runtime", "@/atom-design-system", "@/components/molecules/name-and-id", "@/icons", "classnames", "react", "../document-status", "./DocumentCard.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, name_and_id_1, icons_1, classnames_1, react_1, document_status_1, DocumentCard_module_scss_1, DocumentCard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (name_and_id_1_1) {
                name_and_id_1 = name_and_id_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (document_status_1_1) {
                document_status_1 = document_status_1_1;
            },
            function (DocumentCard_module_scss_1_1) {
                DocumentCard_module_scss_1 = DocumentCard_module_scss_1_1;
            }
        ],
        execute: function () {
            DocumentCard = ({ createdDate, verifiedDate, title, col, noDataText, icon, logo, statusLabel, variant, id, pageQuantity, pageLabel, menuItems }) => {
                const [height, setHeight] = react_1.useState();
                const [isOpenMenu, setIsOpenMenu] = react_1.useState(false);
                const containerRef = react_1.useRef();
                react_1.useLayoutEffect(() => {
                    const height = containerRef.current.scrollHeight;
                    // Using setTimeout for setting the height after first render
                    setHeight(height);
                }, [containerRef]);
                return (_jsxs("div", { onClick: (e) => {
                        e.stopPropagation();
                        setIsOpenMenu(false);
                    }, style: { position: 'relative' }, children: [_jsx("div", { style: { transform: 'scale(1.2)', position: 'absolute', zIndex: 1000, right: '-15px', top: '55px' }, children: isOpenMenu && _jsx(atom_design_system_1.Options, { onOutsideClick: () => setIsOpenMenu(false), data: menuItems }) }), _jsxs("div", { ref: containerRef, className: classnames_1.default(DocumentCard_module_scss_1.default.DocumentCardWrapper, {
                                [DocumentCard_module_scss_1.default[`DocumentCardWrapper--${col}`]]: col
                            }), children: [_jsxs("div", { className: DocumentCard_module_scss_1.default.CardHeader, children: [_jsxs("div", { style: { display: 'flex' }, children: [_jsx("div", { style: { marginRight: '10px', marginTop: '0.5rem' }, children: logo }), _jsx("div", { children: _jsx(name_and_id_1.NameAndId, { name: title || noDataText, id: id || noDataText }) })] }), _jsx("div", { children: _jsx(icons_1.OptionsIcon, { className: DocumentCard_module_scss_1.default[`DocumentCardWrapper--menu_button`], onClick: (e) => {
                                                    e.stopPropagation();
                                                    setIsOpenMenu((prev) => !prev);
                                                } }) })] }), _jsxs("div", { className: DocumentCard_module_scss_1.default.TitleContent, children: [_jsx(name_and_id_1.NameAndId, { defaultColors: true, name: createdDate.label || noDataText, id: createdDate.value || noDataText }), _jsx(name_and_id_1.NameAndId, { defaultColors: true, name: verifiedDate.label || noDataText, id: verifiedDate.value || noDataText })] }), _jsx("div", { className: DocumentCard_module_scss_1.default.GameWrapper, children: _jsx("div", { className: DocumentCard_module_scss_1.default.GamesContent }) })] }), _jsx("div", { ref: containerRef, className: DocumentCard_module_scss_1.default[`DocumentCardWrapper--footer`], children: _jsx(document_status_1.DocumentStatus, { pageQuantity: pageQuantity, pageLabel: pageLabel, startIcon: 'MessageIcon', variant: variant, statusLabel: statusLabel }) })] }));
            };
            exports_1("default", DocumentCard);
        }
    };
});
