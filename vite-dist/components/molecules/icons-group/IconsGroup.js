System.register(["react/jsx-runtime", "classnames", "./IconsGroup.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, classnames_1, IconsGroup_module_scss_1, IconsGroup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (IconsGroup_module_scss_1_1) {
                IconsGroup_module_scss_1 = IconsGroup_module_scss_1_1;
            }
        ],
        execute: function () {
            IconsGroup = ({ icons }) => {
                return (_jsx("div", { className: classnames_1.default(IconsGroup_module_scss_1.default.IconsGroupBase), children: icons &&
                        icons.map((i, index) => (_jsx("div", { className: classnames_1.default(IconsGroup_module_scss_1.default['IconsGroupBase--icon'], {
                                [IconsGroup_module_scss_1.default['IconsGroupBase--active']]: i.isActive
                            }), children: i.icon }, index))) }));
            };
            exports_1("default", IconsGroup);
        }
    };
});
