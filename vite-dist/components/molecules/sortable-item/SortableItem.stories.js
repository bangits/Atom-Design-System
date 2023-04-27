System.register(["react/jsx-runtime", "@/components/organisms/sortable-list", "@my-ui/core", "@storybook/addon-knobs", "./SortableItem"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, sortable_list_1, core_1, addon_knobs_1, SortableItem_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (sortable_list_1_1) {
                sortable_list_1 = sortable_list_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (SortableItem_1_1) {
                SortableItem_1 = SortableItem_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: SortableItem_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/SortableItem'
            });
            exports_1("Default", Default = () => {
                return (_jsxs(sortable_list_1.SortableList, { children: [_jsxs(SortableItem_1.default, { index: 1, children: [_jsx(core_1.TextInput, {}), _jsx("div", { children: "Test" }), _jsx(core_1.TextInput, {})] }), _jsxs(SortableItem_1.default, { index: 2, children: [_jsx(core_1.TextInput, {}), _jsx(core_1.TextInput, {})] }), _jsxs(SortableItem_1.default, { index: 3, children: [_jsx(core_1.TextInput, {}), _jsx(core_1.TextInput, {})] })] }));
            });
        }
    };
});
