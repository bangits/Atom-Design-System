System.register(["react-dom"], function (exports_1, context_1) {
    "use strict";
    var react_dom_1;
    var __moduleName = context_1 && context_1.id;
    function createWrapperAndAppendToBody(wrapperId) {
        const wrapperElement = document.createElement('div');
        wrapperElement.setAttribute('id', wrapperId);
        document.body.appendChild(wrapperElement);
        return wrapperElement;
    }
    function ReactPortal({ children, wrapperId }) {
        let element = document.getElementById(wrapperId);
        if (!element) {
            element = createWrapperAndAppendToBody(wrapperId);
        }
        return react_dom_1.createPortal(children, element);
    }
    return {
        setters: [
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            }
        ],
        execute: function () {
            exports_1("default", ReactPortal);
        }
    };
});
