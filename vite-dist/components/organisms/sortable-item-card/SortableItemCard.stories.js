System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./SortableItemCard"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, SortableItemCard_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (SortableItemCard_1_1) {
                SortableItemCard_1 = SortableItemCard_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/SortableItemCard',
                component: SortableItemCard_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(SortableItemCard_1.default, { imgSrc: 'https://storageaccountatom.blob.core.windows.net/storage/07816e5e-fa2e-41b1-926e-6f3709f4ce7f_file', index: '1', actions: _jsxs(_Fragment, { children: [_jsx("div", { children: "Action1" }), _jsx("div", { children: "Action2" })] }), title: 'Daikoku Blessings Daikoku Blessings Daikoku Blessings', subtitle: 'Wagering Reduce : 100%', checkboxProps: {
                        onChange: console.log
                    } }));
            });
        }
    };
});
