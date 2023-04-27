System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "./AddConditionCard.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, AddConditionCard_module_scss_1, AddConditionCard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (AddConditionCard_module_scss_1_1) {
                AddConditionCard_module_scss_1 = AddConditionCard_module_scss_1_1;
            }
        ],
        execute: function () {
            AddConditionCard = ({ addButtonProps, addCard, disabled }) => {
                const content = (_jsx("div", { className: classnames_1.default(AddConditionCard_module_scss_1.default['AddConditionCard__Border'], {
                        [AddConditionCard_module_scss_1.default['AddConditionCard__Border--disabled']]: disabled
                    }), children: _jsx(core_1.Button, { startIcon: _jsx(atom_design_system_1.Icons.PlusCircleLarge, {}), variant: 'link', ...addButtonProps, onClick: (...args) => !disabled && addButtonProps.onClick?.(...args), className: classnames_1.default(AddConditionCard_module_scss_1.default['AddConditionCard__Button'], addButtonProps?.className) }) }));
                return addCard ? (_jsx(core_1.Card, { borderRadius: 1.6, className: AddConditionCard_module_scss_1.default.AddConditionCard, children: content })) : (content);
            };
            exports_1("default", AddConditionCard);
        }
    };
});
