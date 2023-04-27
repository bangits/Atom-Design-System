System.register(["react/jsx-runtime", "@/helpers", "@/icons", "classnames", "react", "./GameLauncher.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, helpers_1, icons_1, classnames_1, react_1, GameLauncher_module_scss_1, GameLauncher;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
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
            function (GameLauncher_module_scss_1_1) {
                GameLauncher_module_scss_1 = GameLauncher_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("GameLauncher", GameLauncher = ({ iframeUrl, gameBackgroundUrl, onCloseButtonClick }) => {
                const [isFullScreen, setFullScreenMode] = react_1.useState(false);
                const toggleFullScreen = react_1.useCallback(() => {
                    setFullScreenMode((prevFullScreenMode) => {
                        if (prevFullScreenMode)
                            helpers_1.closeFullScreen();
                        else
                            helpers_1.openFullScreen();
                        return !prevFullScreenMode;
                    });
                }, []);
                const checkForClosingFullScreen = react_1.useCallback(() => {
                    if (!document.fullscreenElement)
                        setFullScreenMode(false);
                }, []);
                react_1.useEffect(() => {
                    document.addEventListener('fullscreenchange', checkForClosingFullScreen);
                    /* Firefox */
                    document.addEventListener('mozfullscreenchange', checkForClosingFullScreen);
                    /* Chrome, Safari and Opera */
                    document.addEventListener('webkitfullscreenchange', checkForClosingFullScreen);
                    /* IE / Edge */
                    document.addEventListener('msfullscreenchange', checkForClosingFullScreen);
                }, []);
                return (_jsxs("aside", { className: classnames_1.default(GameLauncher_module_scss_1.default['GameLauncher'], 'GameLauncher'), children: [!isFullScreen && (_jsx("div", { className: classnames_1.default(GameLauncher_module_scss_1.default['GameLauncher__Header'], 'GameLauncher__Header'), children: _jsxs("div", { className: classnames_1.default(GameLauncher_module_scss_1.default['GameLauncher__Tools-Cell'], 'GameLauncher__Tools-Cell'), children: [_jsx("span", { onClick: toggleFullScreen, className: classnames_1.default(GameLauncher_module_scss_1.default['IconSpace'], GameLauncher_module_scss_1.default['GameLauncherIcons'], GameLauncher_module_scss_1.default['GameLauncherIcon--Wide'], 'IconSpace', 'GameLauncherIcons', 'GameLauncherIcons--Wide'), children: _jsx(icons_1.FullScreenIcon, { width: '2rem' }) }), _jsx("span", { onClick: onCloseButtonClick, className: classnames_1.default(GameLauncher_module_scss_1.default['IconSpace'], GameLauncher_module_scss_1.default['GameLauncherIcons'], GameLauncher_module_scss_1.default['GameLauncherIcons--Close'], 'IconSpace', 'GameLauncherIcons', 'GameLauncherIcons--Close'), children: _jsx(icons_1.CloseWidePopUp, { width: '1rem' }) })] }) })), _jsxs("div", { className: classnames_1.default(GameLauncher_module_scss_1.default['GameLauncher__Body'], 'GameLauncher__Body'), children: [gameBackgroundUrl && (_jsx("div", { className: classnames_1.default(GameLauncher_module_scss_1.default['ScreenCover']), children: _jsx("img", { src: gameBackgroundUrl, alt: '' }) })), _jsx("div", { className: classnames_1.default(GameLauncher_module_scss_1.default['GameLauncher__Content'], 'GameLauncher__Content'), children: _jsx("div", { className: classnames_1.default(GameLauncher_module_scss_1.default['GameLauncher__Content-Inner'], 'GameLauncher__Content-Inner'), children: _jsx("iframe", { width: '100%', height: '315', src: iframeUrl, title: 'Game Launcher', frameBorder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', className: classnames_1.default({
                                                [GameLauncher_module_scss_1.default.FullScreenIFrame]: isFullScreen
                                            }) }) }) })] })] }));
            });
        }
    };
});
