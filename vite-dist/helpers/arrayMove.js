System.register(["react-sortable-hoc"], function (exports_1, context_1) {
    "use strict";
    var react_sortable_hoc_1;
    var __moduleName = context_1 && context_1.id;
    function arrayMoveMutable(array, fromIndex, toIndex) {
        // const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;
        // if (startIndex >= 0 && startIndex < array.length) {
        //   const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;
        //   const [item] = array.splice(fromIndex, 1);
        //   array.splice(endIndex, 0, item);
        // }
        return react_sortable_hoc_1.arrayMove(array, fromIndex, toIndex);
    }
    exports_1("arrayMoveMutable", arrayMoveMutable);
    function arrayMoveImmutable(array, fromIndex, toIndex) {
        array = [...array];
        arrayMoveMutable(array, fromIndex, toIndex);
    }
    exports_1("arrayMoveImmutable", arrayMoveImmutable);
    return {
        setters: [
            function (react_sortable_hoc_1_1) {
                react_sortable_hoc_1 = react_sortable_hoc_1_1;
            }
        ],
        execute: function () {
        }
    };
});
