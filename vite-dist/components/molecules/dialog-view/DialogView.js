System.register(["react/jsx-runtime", "@/helpers", "@my-ui/core", "react"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, helpers_1, core_1, react_1, DialogView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            DialogView = ({ children, containerWidth, yPosition, xPosition, ...dialogProps }) => {
                const containerHeight = 205;
                const memoizedPositions = react_1.useRef(null);
                const dialogViewClasses = core_1.useStyles({
                    root: {
                        position: 'fixed',
                        top: (data) => (window.innerHeight > data.containerHeight + data.yPosition ? data.yPosition : 'initial'),
                        bottom: (data) => (window.innerHeight > data.containerHeight + data.yPosition ? 'initial' : 0),
                        maxWidth: (data) => data.containerWidth,
                        textAlign: 'left',
                        padding: 0,
                        transform: 'translateY(0)',
                        minHeight: 'initial',
                        left: (data) => data.xPosition
                    }
                }, {
                    containerWidth,
                    yPosition: yPosition || memoizedPositions.current?.y,
                    xPosition: xPosition || memoizedPositions.current?.x,
                    containerHeight
                });
                react_1.useEffect(() => {
                    if (yPosition || xPosition)
                        memoizedPositions.current = {
                            y: yPosition,
                            x: xPosition
                        };
                }, [yPosition, xPosition]);
                return (_jsx(core_1.Dialog, { ...dialogProps, className: dialogViewClasses.root, children: children }));
            };
            exports_1("default", helpers_1.typedMemo(DialogView));
        }
    };
});
