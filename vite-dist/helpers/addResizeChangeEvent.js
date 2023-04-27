System.register(["./calculateRootFontSize"], function (exports_1, context_1) {
    "use strict";
    var calculateRootFontSize_1, addResizeChangeEvent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (calculateRootFontSize_1_1) {
                calculateRootFontSize_1 = calculateRootFontSize_1_1;
            }
        ],
        execute: function () {
            exports_1("addResizeChangeEvent", addResizeChangeEvent = () => {
                const onResize = () => {
                    setTimeout(() => {
                        const fontSize = calculateRootFontSize_1.calculateRootFontSize();
                        const MAX_FONT_SIZE = 10.5;
                        document.documentElement.style.fontSize = `${fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize}px`;
                    }, 100);
                };
                onResize();
                window.addEventListener('resize', onResize);
            });
        }
    };
});
