System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "@/icons", "classnames", "./GameCard.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, atom_design_system_2, icons_1, classnames_1, GameCard_module_scss_1, GameCard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
                atom_design_system_2 = atom_design_system_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (GameCard_module_scss_1_1) {
                GameCard_module_scss_1 = GameCard_module_scss_1_1;
            }
        ],
        execute: function () {
            GameCard = ({ id, name, status, icon, onGameClick, onGameDetailsClick, playDemo, onActivateOrDeactivateClick, isShowActivateOrDeactivateButton = true, isActivate = true, isPlayIconShow = true, isProvider = false, providerName, checkboxProps, }) => {
                return (_jsxs("span", { className: classnames_1.default(isProvider ? GameCard_module_scss_1.default['HoverBox-Main-Provider'] : GameCard_module_scss_1.default['HoverBox-Main']), children: [!isActivate && _jsx("div", { className: classnames_1.default(GameCard_module_scss_1.default['HoverBox-Indicator']) }), !isProvider && checkboxProps && (_jsx(core_1.Checkbox, { ...checkboxProps, style: { zIndex: 1 }, className: classnames_1.default(GameCard_module_scss_1.default['HoverBox-CheckBox']) })), _jsx(core_1.CardImg, { title: _jsxs(_Fragment, { children: [name, providerName && _jsx("span", { className: GameCard_module_scss_1.default['ProviderName'], children: providerName })] }), image: icon || 'https://i.ibb.co/c2yqT5q/image.png', className: classnames_1.default(GameCard_module_scss_1.default['CardContainer'], {
                                [GameCard_module_scss_1.default['CardContainer--with-provider']]: providerName
                            }), hoverComponent: _jsxs("span", { className: classnames_1.default(GameCard_module_scss_1.default['HoverBox'], 'HoverBox'), children: [_jsx(atom_design_system_2.GameLaunchBtns, { onDemoPlayBtnClick: () => onGameClick?.(id, true), onPlayBtnClick: () => onGameClick?.(id, false), playDemoText: playDemo, showDemoPlayBtn: !!playDemo, showPlayBtn: isPlayIconShow }), isShowActivateOrDeactivateButton && (_jsx(_Fragment, { children: _jsx("button", { type: 'button', role: 'button', style: { marginTop: '20px' }, className: classnames_1.default(GameCard_module_scss_1.default['HoverBox-ActivateIcon'], GameCard_module_scss_1.default['HoverBox-ViewIcon'], 'HoverBox-ViewIcon'), onClick: () => isActivate
                                                ? onActivateOrDeactivateClick?.({ id, name, status })
                                                : onActivateOrDeactivateClick?.({ id, name, status }), children: isActivate ? _jsx(atom_design_system_1.Icons.ActivateIcon, { width: '100%' }) : _jsx(atom_design_system_1.Icons.DeActivateIcon, { width: '100%' }) }) })), _jsx("button", { type: 'button', role: 'button', className: classnames_1.default(GameCard_module_scss_1.default['HoverBox-ViewIcon'], 'HoverBox-ViewIcon'), onClick: () => onGameDetailsClick?.(id), children: _jsx(icons_1.ViewCardImageIcon, { width: '100%' }) }), _jsx("span", { className: classnames_1.default(GameCard_module_scss_1.default['HoverBox-OpacityLayer'], 'HoverBox-OpacityLayer') })] }) })] }));
            };
            exports_1("default", core_1.typedMemo(GameCard));
        }
    };
});
