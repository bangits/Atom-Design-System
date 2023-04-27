System.register(["react/jsx-runtime", "@/atom-design-system", "@/components/atoms/copy-button", "classnames", "./MainInformation.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, copy_button_1, classnames_1, MainInformation_module_scss_1, MainInformation;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (copy_button_1_1) {
                copy_button_1 = copy_button_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (MainInformation_module_scss_1_1) {
                MainInformation_module_scss_1 = MainInformation_module_scss_1_1;
            }
        ],
        execute: function () {
            MainInformation = ({ addSpacings = true, name, id, addCopyButton, icon, idLabel, selectContent }) => {
                return (_jsxs("div", { className: classnames_1.default(MainInformation_module_scss_1.default.MainInformation, {
                        [MainInformation_module_scss_1.default['MainInformation--with-spacings']]: addSpacings
                    }), children: [_jsx("span", { className: MainInformation_module_scss_1.default['MainInformation__icon'], children: icon }), _jsxs("div", { className: MainInformation_module_scss_1.default['MainInformation__informations'], style: {}, children: [_jsxs("div", { className: MainInformation_module_scss_1.default['MainInformation__name'], children: [name, selectContent && _jsx(atom_design_system_1.IconDropdown, { children: selectContent })] }), _jsx("div", { className: MainInformation_module_scss_1.default['MainInformation__id_block'], children: _jsxs("div", { className: MainInformation_module_scss_1.default['MainInformation__id'], children: [idLabel, " ", id, " ", addCopyButton && _jsx(copy_button_1.CopyButton, { copyText: id })] }) })] })] }));
            };
            exports_1("default", MainInformation);
        }
    };
});
