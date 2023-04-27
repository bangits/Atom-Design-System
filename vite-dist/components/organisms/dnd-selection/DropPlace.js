System.register(["react/jsx-runtime", "react", "react-dnd"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, react_1, react_dnd_1, DropPlace;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dnd_1_1) {
                react_dnd_1 = react_dnd_1_1;
            }
        ],
        execute: function () {
            DropPlace = ({ children, onDropChange }) => {
                const [{ isDropped }, drop] = react_dnd_1.useDrop(() => ({
                    accept: 'DraggableDnDItem',
                    collect: (monitor) => ({
                        isDropped: monitor.didDrop()
                    })
                }));
                react_1.useEffect(() => {
                    onDropChange?.(isDropped);
                }, [isDropped]);
                return (_jsx("div", { ref: drop, style: { width: '100%', height: '100%' }, children: children }));
            };
            exports_1("default", DropPlace);
        }
    };
});
