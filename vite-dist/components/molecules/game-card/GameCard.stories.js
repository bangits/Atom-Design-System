System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./GameCard"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, GameCard_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (GameCard_1_1) {
                GameCard_1 = GameCard_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: GameCard_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/GameCard'
            });
            exports_1("Default", Default = () => {
                return (_jsx("div", { style: { width: 164, height: 100 }, children: _jsx(GameCard_1.default, { checkboxProps: {
                            onChange: () => console.log('asd')
                        }, id: 1, name: 'Double Joker', icon: 'https://storageaccountatom.blob.core.windows.net/dev-storage/8c904504-3827-49f6-92de-42694ab77305_file', playDemo: 'Play Demo' }) }));
            });
        }
    };
});
