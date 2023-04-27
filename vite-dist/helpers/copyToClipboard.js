System.register([], function (exports_1, context_1) {
    "use strict";
    var copyToClipboard;
    var __moduleName = context_1 && context_1.id;
    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        // Avoid scrolling to bottom
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            return Promise.resolve();
        }
        catch (err) {
            return Promise.reject(err);
        }
        finally {
            document.body.removeChild(textArea);
        }
    }
    return {
        setters: [],
        execute: function () {
            exports_1("copyToClipboard", copyToClipboard = (text) => {
                if (!navigator.clipboard) {
                    fallbackCopyTextToClipboard(text);
                    return Promise.resolve();
                }
                return navigator.clipboard.writeText(text);
            });
        }
    };
});
