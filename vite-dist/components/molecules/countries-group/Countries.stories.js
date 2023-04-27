System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./Countries"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, Countries_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (Countries_1_1) {
                Countries_1 = Countries_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: Countries_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/molecules/Countries'
            });
            exports_1("Default", Default = () => {
                return (_jsx(Countries_1.default, { tagCountries: [
                        {
                            tagName: 'Armenia',
                            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                        },
                        {
                            tagName: 'Armenia',
                            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                        },
                        {
                            tagName: 'Armenia',
                            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                        },
                        {
                            tagName: 'Armenia',
                            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                        },
                        {
                            tagName: 'Armenia',
                            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                        },
                        {
                            tagName: 'Armenia',
                            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                        },
                        {
                            tagName: 'Armenia',
                            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                        },
                        {
                            tagName: 'Armenia',
                            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                        },
                        {
                            tagName: 'Armenia',
                            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                        },
                        {
                            tagName: 'Armenia',
                            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/1024px-Flag_of_Armenia.svg.png'
                        }
                    ] }));
            });
        }
    };
});
