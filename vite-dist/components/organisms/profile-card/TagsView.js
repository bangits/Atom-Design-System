System.register(["react/jsx-runtime", "@my-ui/core", "classnames", "./TagsView.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, core_1, classnames_1, TagsView_module_scss_1, Tags;
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
            function (TagsView_module_scss_1_1) {
                TagsView_module_scss_1 = TagsView_module_scss_1_1;
            }
        ],
        execute: function () {
            Tags = () => {
                return (_jsxs(core_1.Card, { borderRadius: 1.6, className: classnames_1.default(TagsView_module_scss_1.default.TagsView), children: [_jsx("span", { className: classnames_1.default(TagsView_module_scss_1.default['TagsView--title']), children: "Tags" }), _jsxs("div", { className: classnames_1.default(TagsView_module_scss_1.default['TagsView--container']), children: [_jsx("div", { children: _jsx(core_1.Tag, { title: 'Lorem Ip', closeIcon: true, className: TagsView_module_scss_1.default['TagsView--tag'] }) }), _jsx("div", { children: _jsx(core_1.Tag, { title: 'Lorem Ip', closeIcon: true, className: classnames_1.default(TagsView_module_scss_1.default['TagsView--tag']) }) }), _jsx("div", { children: _jsx(core_1.Tag, { title: 'Lorem Ip', closeIcon: true, className: classnames_1.default(TagsView_module_scss_1.default['TagsView--tag']) }) }), _jsx("div", { children: _jsx(core_1.Button, { variant: 'ghost', className: TagsView_module_scss_1.default['TagsView--button'], startIcon: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '9.424', height: '9.424', viewBox: '0 0 9.424 9.424', children: _jsx("g", { id: 'Group_23677', "data-name": 'Group 23677', transform: 'translate(-717.284 -219.283)', children: _jsx("path", { id: 'close', d: 'M3.943,3.332,6.537.737a.432.432,0,0,0-.61-.61L3.332,2.722.737.127a.432.432,0,0,0-.61.61L2.722,3.332.127,5.927a.432.432,0,1,0,.61.61L3.332,3.943,5.927,6.537a.432.432,0,0,0,.61-.61Zm0,0', transform: 'translate(717.284 223.996) rotate(-45)', fill: '#6667ab' }) }) }), children: _jsx("span", { children: "Add New" }) }) })] })] }));
            };
            exports_1("default", Tags);
        }
    };
});
