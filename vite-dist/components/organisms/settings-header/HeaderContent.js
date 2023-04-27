System.register(["react/jsx-runtime", "@/atom-design-system", "@/components", "@my-ui/core", "./HeaderContent.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, components_1, core_1, HeaderContent_module_scss_1, HeaderContent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (HeaderContent_module_scss_1_1) {
                HeaderContent_module_scss_1 = HeaderContent_module_scss_1_1;
            }
        ],
        execute: function () {
            HeaderContent = ({ links, title }) => {
                return (_jsx("div", { className: HeaderContent_module_scss_1.default.HeaderContent, children: _jsx(components_1.LabelGroup, { title: title, totalLabel: links.length.toString(), children: _jsx(components_1.CurrencyGroup, { currencies: links.map((l, index) => ({
                                title: l.name,
                                value: index + 1,
                                ...(l.isLink
                                    ? {
                                        closeIcon: true,
                                        endIcon: (_jsx(core_1.Tooltip, { text: l.url, children: _jsx(atom_design_system_1.Icons.LinkIcon, { onClick: () => window.open(l.url, '_blank') }) }))
                                    }
                                    : {})
                            })) }) }) }));
            };
            exports_1("default", HeaderContent);
        }
    };
});
