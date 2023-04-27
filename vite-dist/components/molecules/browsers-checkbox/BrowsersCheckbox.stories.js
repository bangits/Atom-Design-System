System.register(["react/jsx-runtime", "@/icons", "@storybook/addon-knobs", "./BrowsersCheckbox"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, addon_knobs_1, BrowsersCheckbox_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (BrowsersCheckbox_1_1) {
                BrowsersCheckbox_1 = BrowsersCheckbox_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: BrowsersCheckbox_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/BrowsersCheckbox'
            });
            exports_1("Default", Default = () => {
                return (_jsxs(_Fragment, { children: [_jsx(BrowsersCheckbox_1.default, { browserIcon: _jsx(icons_1.ChromeIcon, { width: '3rem' }) }), _jsx(BrowsersCheckbox_1.default, { browserIcon: _jsx(icons_1.EdgeIcon, { width: '3rem' }) }), _jsx(BrowsersCheckbox_1.default, { browserIcon: _jsx(icons_1.FirefoxIcon, { width: '3rem' }) }), _jsx(BrowsersCheckbox_1.default, { browserIcon: _jsx(icons_1.OperaIcon, { width: '3rem' }) }), _jsx(BrowsersCheckbox_1.default, { browserIcon: _jsx(icons_1.SafariIcon, { width: '3rem' }) })] }));
            });
        }
    };
});
