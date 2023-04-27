// @ts-nocheck
System.register([], function (exports_1, context_1) {
    "use strict";
    var openFullScreen, closeFullScreen;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {// @ts-nocheck
            exports_1("openFullScreen", openFullScreen = () => {
                const documentElement = document.documentElement;
                if (document.requestFullscreen) {
                    documentElement.requestFullscreen();
                }
                else if (documentElement.webkitRequestFullscreen) {
                    /* Safari */
                    documentElement.webkitRequestFullscreen();
                }
                else if (documentElement.msRequestFullscreen) {
                    /* IE11 */
                    documentElement.msRequestFullscreen();
                }
            });
            exports_1("closeFullScreen", closeFullScreen = () => {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
                else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            });
        }
    };
});
