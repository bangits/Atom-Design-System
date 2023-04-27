System.register(["react/jsx-runtime", "../document-card", "./DocumentCards.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, document_card_1, DocumentCards_module_scss_1, DocumentCards;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (document_card_1_1) {
                document_card_1 = document_card_1_1;
            },
            function (DocumentCards_module_scss_1_1) {
                DocumentCards_module_scss_1 = DocumentCards_module_scss_1_1;
            }
        ],
        execute: function () {
            DocumentCards = ({ documents, title }) => {
                return (_jsxs("div", { style: { display: 'block' }, className: DocumentCards_module_scss_1.default['DocumentCards'], children: [_jsx("div", { className: DocumentCards_module_scss_1.default['DocumentCards--title'], children: title }), _jsx("div", { style: {
                                marginRight: '35px',
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'flex-start',
                                flexWrap: 'wrap',
                                gap: '20px'
                            }, children: documents.map((document) => (_jsx(_Fragment, { children: _jsx(document_card_1.DocumentCard, { id: document.id, noDataText: document.noDataText, createdDate: {
                                        label: document.createdDate.label,
                                        value: document.createdDate.value || document.noDataText
                                    }, verifiedDate: {
                                        label: document.verifiedDate.label,
                                        value: document.verifiedDate.value || document.noDataText
                                    }, col: 4, title: document.title, logo: document.logo, icon: document.icon, variant: document.variant, statusLabel: document.statusLabel, pageLabel: document.pageLabel, pageQuantity: document.pageQuantity, menuItems: document.menuItems }) }))) })] }));
            };
            exports_1("default", DocumentCards);
        }
    };
});
