System.register(["react/jsx-runtime", "react", "@my-ui/core", "./LanguagesGroup.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, react_1, core_1, LanguagesGroup_module_scss_1, TagsGroup;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LanguagesGroup_module_scss_1_1) {
                LanguagesGroup_module_scss_1 = LanguagesGroup_module_scss_1_1;
            }
        ],
        execute: function () {
            TagsGroup = ({ tags }) => {
                return (_jsx("div", { className: LanguagesGroup_module_scss_1.default.LanguagesGroupWrapper, children: tags && tags.map((tag, idx) => _createElement(core_1.Tag, { ...tag, inactive: true, key: idx, className: LanguagesGroup_module_scss_1.default.Languages })) }));
            };
            exports_1("default", TagsGroup);
        }
    };
});
