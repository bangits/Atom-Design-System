System.register(["react"], function (exports_1, context_1) {
    "use strict";
    var react_1, useResizeObserver;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            exports_1("useResizeObserver", useResizeObserver = (element, listener) => {
                // TODO: Check why resizeObserver not working
                // const resizeObserver = new ResizeObserver(listener);
                const elementWidthRef = react_1.useRef(element?.scrollWidth || 0);
                react_1.useEffect(() => {
                    if (!element)
                        return;
                    const intervalId = setInterval(() => {
                        if (elementWidthRef.current !== element.scrollWidth)
                            listener();
                        elementWidthRef.current = element.scrollWidth;
                    }, 300);
                    // resizeObserver.observe(element);
                    // return () => resizeObserver.disconnect();
                    return () => clearInterval(intervalId);
                }, [element]);
            });
        }
    };
});
