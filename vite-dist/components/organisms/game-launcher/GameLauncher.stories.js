System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./GameLauncher"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, GameLauncher_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (GameLauncher_1_1) {
                GameLauncher_1 = GameLauncher_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: GameLauncher_1.GameLauncher,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/organisms/Game Launcher'
            });
            exports_1("Default", Default = () => {
                return (_jsx(GameLauncher_1.GameLauncher, { gameBackgroundUrl: null, iframeUrl: 'https://partnerapi.sportdigi.com/GamesLaunch/Launch?gameid=5935&playMode=demo&deviceType=1&lang=EN&operatorId=DB6D2EB9&mainDomain=totogaming697.ru' }));
            });
        }
    };
});
