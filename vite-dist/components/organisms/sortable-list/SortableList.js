System.register(["react/jsx-runtime", "@/components", "react", "react-sortable-hoc"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, components_1, react_1, react_sortable_hoc_1, SortableDnDItem, getSortableComponent;
    var __moduleName = context_1 && context_1.id;
    function SortableList(props) {
        const SortableComponent = react_1.useMemo(() => getSortableComponent(props), [props]);
        return (_jsx(SortableComponent, { ...props, shouldCancelStart: (event) => {
                const typedEventTarget = event.target;
                return !(typedEventTarget.classList.contains('DnD-SortIcon') || !!typedEventTarget.closest('.DnD-SortIcon'));
            } }));
    }
    exports_1("default", SortableList);
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_sortable_hoc_1_1) {
                react_sortable_hoc_1 = react_sortable_hoc_1_1;
            }
        ],
        execute: function () {
            exports_1("SortableDnDItem", SortableDnDItem = react_sortable_hoc_1.SortableElement(components_1.DnDItem));
            getSortableComponent = ({ axis, helperClass }) => react_sortable_hoc_1.SortableContainer((({ children }) => {
                // TODO: Must be removed to css
                return (_jsx("div", { className: helperClass, style: { display: 'flex', flexDirection: axis === 'x' || axis === 'xy' ? 'row' : 'column', flexWrap: 'wrap' }, children: children }));
            }));
        }
    };
});
