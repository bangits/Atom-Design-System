System.register(["react/jsx-runtime", "@/icons", "classnames", "./GameLaunchBtns.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, classnames_1, GameLaunchBtns_module_scss_1, GameLaunchBtns;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (GameLaunchBtns_module_scss_1_1) {
                GameLaunchBtns_module_scss_1 = GameLaunchBtns_module_scss_1_1;
            }
        ],
        execute: function () {
            GameLaunchBtns = ({ onDemoPlayBtnClick, onPlayBtnClick, showDemoPlayBtn, showPlayBtn, playDemoText }) => {
                return (_jsxs(_Fragment, { children: [showPlayBtn && (_jsx("button", { type: 'button', role: 'button', className: classnames_1.default(GameLaunchBtns_module_scss_1.default['HoverBox-PlayBtn'], 'HoverBox-PlayBtn'), onClick: onPlayBtnClick, children: _jsx("span", { className: classnames_1.default(GameLaunchBtns_module_scss_1.default['HoverBox-PlayBtnInner'], 'HoverBox-PlayBtnInner'), children: _jsx("span", { className: classnames_1.default(GameLaunchBtns_module_scss_1.default['HoverBox-PlayBtnIcon'], 'HoverBox-PlayBtnIcon'), children: _jsx(icons_1.PlayArrowIcon, { width: '100%' }) }) }) })), showDemoPlayBtn && (_jsx("span", { className: classnames_1.default(GameLaunchBtns_module_scss_1.default['HoverBox-Link'], 'HoverBox-Link'), children: _jsx("button", { role: 'button', onClick: onDemoPlayBtnClick, className: classnames_1.default(GameLaunchBtns_module_scss_1.default['HoverBox-Link__Text'], 'HoverBox-Link__Text'), children: playDemoText }) }))] }));
            };
            exports_1("default", GameLaunchBtns);
        }
    };
});
