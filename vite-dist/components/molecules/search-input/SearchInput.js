System.register(["react/jsx-runtime", "@my-ui/core"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, SearchInput;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            SearchInput = (textInputProps) => {
                return (_jsx(core_1.TextInput, { startIcon: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '16px', style: { fill: '#8ea6c1', cursor: 'pointer', opacity: '0.5' }, viewBox: '0 0 512 512', children: _jsx("path", { d: 'm503.6 463.2-96.7-96.4C438.1 327.1 455 278 455 227.5 455 101.8 353.1 0 227.5 0 101.8 0 0 101.8 0 227.5 0 353.1 101.8 455 227.5 455c50.5.1 99.6-16.9 139.3-48.1l96.4 96.7c11.1 11.1 29.1 11.2 40.2.2l.2-.2c11.1-11.1 11.2-29.1.2-40.2l-.2-.2zM56.9 227.5c0-94.2 76.4-170.6 170.6-170.6 94.2 0 170.6 76.4 170.6 170.6 0 94.2-76.4 170.6-170.6 170.6-94.3 0-170.6-76.4-170.6-170.6z' }) }), ...textInputProps }));
            };
            exports_1("default", SearchInput);
        }
    };
});
