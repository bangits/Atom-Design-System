System.register(["react/jsx-runtime", "@/atom-design-system", "@/icons", "./DocumentCards"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, icons_1, DocumentCards_1, Template, Default;
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
            function (DocumentCards_1_1) {
                DocumentCards_1 = DocumentCards_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/Document Cards',
                component: DocumentCards_1.default
            });
            Template = (args) => _jsx(DocumentCards_1.default, { ...args });
            exports_1("Default", Default = Template.bind({}));
            Default.args = {
                noDataText: 'N/A',
                title: 'Passports',
                documents: [
                    {
                        id: 'ID56454',
                        variant: 'inactive',
                        statusLabel: 'NoValidate',
                        title: 'Document ID',
                        createdDate: {
                            value: '10/11/2021, 12:00:00',
                            label: 'Created Date'
                        },
                        verifiedDate: {
                            value: '10/11/2021, 12:00:00',
                            label: 'Verified Date'
                        },
                        icon: 'IdCardIcon',
                        logo: _jsx(icons_1.IdCardIcon, {}),
                        pageLabel: 'page',
                        pageQuantity: 3,
                        menuItems: [
                            {
                                icon: _jsx(atom_design_system_1.Icons.VerifiedIcon, {}),
                                name: 'Verify',
                                onClick: console.log('Verify')
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
                        ]
                    },
                    {
                        id: 'ID56454',
                        variant: 'active',
                        statusLabel: 'Validate',
                        createdDate: {
                            value: '10/11/2021, 12:00:00',
                            label: 'Created Date'
                        },
                        verifiedDate: {
                            value: '10/11/2021, 12:00:00',
                            label: 'Verified Date'
                        },
                        icon: 'IdCardIcon',
                        title: 'Passport',
                        logo: _jsx(icons_1.PassportIcon, {}),
                        pageLabel: 'page',
                        pageQuantity: 3,
                        menuItems: [
                            {
                                icon: _jsx(atom_design_system_1.Icons.VerifiedIcon, {}),
                                name: 'Verify',
                                onClick: console.log('Verify')
                            },
                            {
                                icon: _jsx(atom_design_system_1.Icons.EyeIcon, {}),
                                name: 'Preview',
                                onClick: () => console.log('Preview')
                            },
                            {
                                icon: _jsx(atom_design_system_1.Icons.DownloadIcon, {}),
                                name: 'Download',
                                onClick: () => console.log('Download')
                            }
                        ]
                    },
                    {
                        id: 'ID56454',
                        variant: 'active',
                        statusLabel: 'Validate',
                        createdDate: {
                            value: '10/11/2021, 12:00:00',
                            label: 'Created Date'
                        },
                        verifiedDate: {
                            value: '10/11/2021, 12:00:00',
                            label: 'Verified Date'
                        },
                        icon: 'IdCardIcon',
                        title: 'Drive License',
                        logo: _jsx(icons_1.PassportIcon, {}),
                        pageLabel: 'page',
                        pageQuantity: 1,
                        menuItems: [
                            {
                                icon: _jsx(atom_design_system_1.Icons.VerifiedIcon, {}),
                                name: 'Verify',
                                onClick: console.log('Verify')
                            },
                            {
                                icon: _jsx(atom_design_system_1.Icons.EyeIcon, {}),
                                name: 'Preview',
                                onClick: () => console.log('Preview')
                            },
                            {
                                icon: _jsx(atom_design_system_1.Icons.DownloadIcon, {}),
                                name: 'Download',
                                onClick: () => console.log('Download')
                            }
                        ]
                    }
                ]
            };
        }
    };
});
