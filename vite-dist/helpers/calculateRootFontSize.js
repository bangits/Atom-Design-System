System.register(["../constants"], function (exports_1, context_1) {
    "use strict";
    var constants_1, calculateRootFontSize;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }
        ],
        execute: function () {
            exports_1("calculateRootFontSize", calculateRootFontSize = () => window.innerWidth / (constants_1.BASE_DEVICE_WIDTH / constants_1.BASE_FONT_SIZE));
        }
    };
});
