System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "./UserView.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, UserView_module_scss_1, UserView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (UserView_module_scss_1_1) {
                UserView_module_scss_1 = UserView_module_scss_1_1;
            }
        ],
        execute: function () {
            UserView = ({ userInfo }) => {
                return (_jsxs(core_1.Card, { borderRadius: 1.6, className: classnames_1.default(UserView_module_scss_1.default.UserView, UserView_module_scss_1.default['UserView--user']), children: [_jsxs("div", { className: classnames_1.default(UserView_module_scss_1.default['UserView--user-detailsContainer']), children: [_jsx("div", { className: classnames_1.default(UserView_module_scss_1.default['UserView--user-avatarContainer']), children: _jsx(core_1.AvatarCard, { avatarImg: 'https://cdn.celebsagewiki.com/images/22/tatul-avoyan.jpg', imageSize: 'sm', variant: 'online' }) }), _jsxs("div", { className: classnames_1.default(UserView_module_scss_1.default['UserView--user-details']), children: [_jsx("span", { children: userInfo.title }), _jsx("span", { children: userInfo.id })] })] }), _jsx("div", { className: classnames_1.default(UserView_module_scss_1.default['UserView--user-info']) })] }));
            };
            exports_1("default", UserView);
        }
    };
});
