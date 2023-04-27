System.register(["react/jsx-runtime", "@/atom-design-system", "@/icons", "./DocumentCard"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, icons_1, DocumentCard_1, Template, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (DocumentCard_1_1) {
                DocumentCard_1 = DocumentCard_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/DocumentCard',
                component: DocumentCard_1.default
            });
            Template = (args) => _jsx(DocumentCard_1.default, { ...args });
            exports_1("Default", Default = Template.bind({}));
            Default.args = {
                noDataText: 'N/A',
                createdDate: {
                    label: 'Created Date',
                    value: '10/11/2021, 12:00:00'
                },
                id: 'ID564645',
                verifiedDate: {
                    label: 'Verified Date',
                    value: '10/11/2021, 12:00:00'
                },
                col: 4,
                title: 'ID Card',
                logo: _jsx(icons_1.PassportIcon, {}),
                onArrowClick: () => { },
                icon: '',
                variant: 'active',
                statusLabel: 'Verified',
                menuItems: [
                    {
                        icon: _jsx(atom_design_system_1.Icons.VerifiedIcon, {}),
                        name: 'Verify',
                        onClick: () => console.log('Verify')
                    },
                    {
                        icon: _jsx(atom_design_system_1.Icons.EyeIcon, {}),
                        name: 'Preview',
                        onClick: () => console.log('Preview')
                    },
                    {
                        icon: _jsx(atom_design_system_1.Icons.DownloadIcon, {}),
                        name: 'Download',
                        link: '/',
                        download: true
                    }
                ],
                pageQuantity: 3,
                pageLabel: 'pages'
            };
        }
    };
});
