System.register(["react/jsx-runtime", "@/icons", "@storybook/addon-actions", "@storybook/addon-knobs", "./ProjectCard"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, addon_actions_1, addon_knobs_1, ProjectCard_1, Default, Large;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (addon_actions_1_1) {
                addon_actions_1 = addon_actions_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (ProjectCard_1_1) {
                ProjectCard_1 = ProjectCard_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                component: ProjectCard_1.default,
                decorators: [addon_knobs_1.withKnobs],
                title: 'components/organisms/ProjectCard'
            });
            exports_1("Default", Default = () => {
                return (_jsx(ProjectCard_1.default, { col: 6, color: 'purple', mode: 'small', title: 'Products', onArrowClick: addon_actions_1.action('onArrowClick'), logo: _jsx(icons_1.ProductsIcon, {}), maxCount: 100, viewLessLabel: 'View Less', viewMoreLabel: 'View More', items: [
                        {
                            title: 'Game',
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            title: 'Game',
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            title: 'Game',
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            title: 'Game',
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            title: 'Game',
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            title: 'Game',
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/setting_DLmoLdALw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643722017268&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                    ] }));
            });
            exports_1("Large", Large = () => {
                return (_jsx(ProjectCard_1.default, { col: 6, color: 'purple', mode: 'large', title: 'Products', onArrowClick: addon_actions_1.action('onArrowClick'), logo: _jsx(icons_1.ProductsIcon, {}), maxCount: 100, viewLessLabel: 'View Less', viewMoreLabel: 'View More', items: [
                        {
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        },
                        {
                            imgSrc: 'https://ik.imagekit.io/gv8ct9uwhf8/Stripe_tZbsZ5FOz_U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643724914092&tr=w-360%2Ch-360%2Cfo-center%2Cc-at_max'
                        }
                    ] }));
            });
        }
    };
});
