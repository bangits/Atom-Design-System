System.register(["react/jsx-runtime", "./DetailsPage"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, DetailsPage_1, Template, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (DetailsPage_1_1) {
                DetailsPage_1 = DetailsPage_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/DetailsPage',
                component: DetailsPage_1.default
            });
            Template = (args) => (_jsx(DetailsPage_1.default, { breadCrumbLinks: [
                    {
                        label: 'Player management'
                    },
                    {
                        label: 'Player details'
                    }
                ], sidebarContent: 'Sidebar content', children: "Content" }));
            exports_1("Default", Default = Template.bind({}));
        }
    };
});
