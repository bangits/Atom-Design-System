System.register(["react/jsx-runtime", "@my-ui/core", "./SidebarBottom"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, SidebarBottom_1, Sidebar;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SidebarBottom_1_1) {
                SidebarBottom_1 = SidebarBottom_1_1;
            }
        ],
        execute: function () {
            exports_1("Sidebar", Sidebar = (props) => {
                return (_jsx(_Fragment, { children: _jsx(core_1.Sidebar, { ...props, position: 'fixed', height: '100vh', bottomContent: (isSidebarClosed) => (_jsx(SidebarBottom_1.default, { logoSrc: props.bottomLogoSrc, title: props.bottomTitle, isSidebarClosed: isSidebarClosed })) }) }));
            });
        }
    };
});
