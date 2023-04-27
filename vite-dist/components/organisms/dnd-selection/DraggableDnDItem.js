System.register(["react/jsx-runtime", "@/components", "react-dnd"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, react_dnd_1, DraggableDnDItem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (react_dnd_1_1) {
                react_dnd_1 = react_dnd_1_1;
            }
        ],
        execute: function () {
            DraggableDnDItem = (props) => {
                const [_, dragRef] = react_dnd_1.useDrag(() => ({
                    type: 'DraggableDnDItem'
                }), []);
                return _jsx(components_1.DnDItem, { ...props, ref: dragRef });
            };
            exports_1("default", DraggableDnDItem);
        }
    };
});
