System.register(["react/jsx-runtime", "@/atom-design-system", "@storybook/addon-knobs", "./DividerList"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, addon_knobs_1, DividerList_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (DividerList_1_1) {
                DividerList_1 = DividerList_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: DividerList_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/DividerList'
            });
            exports_1("Default", Default = () => {
                return (_jsxs(DividerList_1.default, { children: [_jsx(atom_design_system_1.CheckboxWithLabel, { label: 'Select all' }), _jsx(atom_design_system_1.PopoverWithInput, { buttonLabel: 'Save', title: 'Position Change', totalCount: '1-20', renderOpenElement: ({ open }) => (_jsx(atom_design_system_1.Tooltip, { text: 'Tooltip', showEvent: 'hover', children: _jsx("button", { type: 'button', onClick: open, children: _jsx(atom_design_system_1.Icons.RecalculateIcon, { width: '1.6rem' }) }) })) }), _jsx(atom_design_system_1.PopoverWithInput, { buttonLabel: 'Save', title: 'Position Change', totalCount: '1-20', renderOpenElement: ({ open }) => (_jsx(atom_design_system_1.Tooltip, { text: 'Tooltip', showEvent: 'hover', children: _jsx("button", { type: 'button', onClick: open, children: _jsx(atom_design_system_1.Icons.RecalculateIcon, { width: '1.6rem' }) }) })) })] }));
            });
        }
    };
});
