System.register(["@my-ui/core", "./helpers", "./icons", "./sass/main.scss", "./components", "./helpers/arrayMove", "./services"], function (exports_1, context_1) {
    "use strict";
    var core_1, helpers_1, DesignSystemIcons, Icons;
    var __moduleName = context_1 && context_1.id;
    var exportedNames_1 = {
        "Icons": true,
        "AcceptionDialog": true,
        "Breadcrumb": true,
        "Button": true,
        "Checkbox": true,
        "Collapse": true,
        "Dialog": true,
        "DialogActions": true,
        "DialogBody": true,
        "DialogFooter": true,
        "DialogHeader": true,
        "DialogProvider": true,
        "DialogTypes": true,
        "DialogWithActions": true,
        "IconButton": true,
        "Loader": true,
        "Pagination": true,
        "Scroll": true,
        "Tag": true,
        "Tooltip": true,
        "typedMemo": true,
        "Typography": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
                exports_1({
                    "AcceptionDialog": core_1_1["AcceptionDialog"],
                    "Breadcrumb": core_1_1["Breadcrumb"],
                    "Button": core_1_1["Button"],
                    "Checkbox": core_1_1["Checkbox"],
                    "Collapse": core_1_1["Collapse"],
                    "Dialog": core_1_1["Dialog"],
                    "DialogActions": core_1_1["DialogActions"],
                    "DialogBody": core_1_1["DialogBody"],
                    "DialogFooter": core_1_1["DialogFooter"],
                    "DialogHeader": core_1_1["DialogHeader"],
                    "DialogProvider": core_1_1["DialogProvider"],
                    "DialogTypes": core_1_1["DialogTypes"],
                    "DialogWithActions": core_1_1["DialogWithActions"],
                    "IconButton": core_1_1["IconButton"],
                    "Loader": core_1_1["Loader"],
                    "Pagination": core_1_1["Pagination"],
                    "Scroll": core_1_1["Scroll"],
                    "Tag": core_1_1["Tag"],
                    "Tooltip": core_1_1["Tooltip"],
                    "typedMemo": core_1_1["typedMemo"],
                    "Typography": core_1_1["Typography"]
                });
            },
            function (helpers_1_1) {
                helpers_1 = helpers_1_1;
            },
            function (DesignSystemIcons_1) {
                DesignSystemIcons = DesignSystemIcons_1;
            },
            function (_1) {
            },
            function (components_1_1) {
                exportStar_1(components_1_1);
            },
            function (arrayMove_1_1) {
                exportStar_1(arrayMove_1_1);
            },
            function (services_1_1) {
                exportStar_1(services_1_1);
            }
        ],
        execute: function () {
            exports_1("Icons", Icons = { ...core_1.Icons, ...DesignSystemIcons });
            try {
                if (process.env.STORYBOOK !== 'true')
                    throw new Error('');
            }
            catch (error) {
                helpers_1.addResizeChangeEvent();
            }
        }
    };
});
