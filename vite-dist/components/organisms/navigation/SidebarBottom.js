System.register(["react/jsx-runtime", "classnames", "./Sidebar.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, classnames_1, Sidebar_module_scss_1, SidebarBottom;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (Sidebar_module_scss_1_1) {
                Sidebar_module_scss_1 = Sidebar_module_scss_1_1;
            }
        ],
        execute: function () {
            SidebarBottom = ({ title, logoSrc, isSidebarClosed }) => {
                return (_jsxs("div", { className: classnames_1.default(Sidebar_module_scss_1.default.BottomContainer, {
                        [Sidebar_module_scss_1.default['BottomContainer--closed']]: isSidebarClosed
                    }), children: [_jsx("div", { className: classnames_1.default(Sidebar_module_scss_1.default['BottomContainer--img'], {
                                [Sidebar_module_scss_1.default['BottomContainer--img-closed']]: isSidebarClosed
                            }), children: _jsx("img", { src: logoSrc, alt: 'Logo' }) }), !isSidebarClosed && _jsx("span", { className: Sidebar_module_scss_1.default['BottomContainer--title'], children: title })] }));
            };
            exports_1("default", SidebarBottom);
        }
    };
});
