System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./ImagePreview"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, ImagePreview_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (ImagePreview_1_1) {
                ImagePreview_1 = ImagePreview_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/ImagePreview',
                component: ImagePreview_1.ImagePreview,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(ImagePreview_1.ImagePreview, { onClose: () => { }, opened: false, uploadedFile: 'https://s3-alpha-sig.figma.com/img/0899/32e1/fe747cc7b92ccaf3c39602ebda167498?Expires=1678060800&Signature=I04VeoDDDrQSV0g-EpBJpDmyuXSA8dV0UB0IsfN0jsqAuxOPA3jrhLucTOhaHQ-hXn-xqx1m2LKTf6w3tj4vBjeftPmQs4h1Je7fSUrVnjwZZBLPNyS1y5nhAok0wu-9j1OuMMVAh8ygw8-MP7XdjU2d-6L6HHMWeIE8qkwZ9cBO4DkJzYhEdprKLoJNzHvXLna9ukPPGygO2WHp-7qOqvo2DN~xDRVZjbL1etyXE1BrcjP~is3ONlGjt91NZWHSXbXanKNfeaQpmYsuW4buIh3xB0thn6XPAPFTdLuSkbG5dwvd74gzBuLLC-f4RKj01ow29x1g264OKPqTgF0IhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', idInfo: 'ID:123456 - Withdraw', onDownloadClick: () => { }, translations: {
                        download: 'Download',
                        cancel: 'Cancel'
                    } }));
            });
        }
    };
});
