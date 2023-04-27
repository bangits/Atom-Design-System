System.register(["react/jsx-runtime", "@/icons"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, UserMainInfo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            }
        ],
        execute: function () {
            UserMainInfo = ({ className }) => {
                return (_jsx("div", { className: className, children: _jsx(icons_1.UserMainIcon, { width: '4rem' }) }));
            };
            exports_1("default", UserMainInfo);
        }
    };
});
