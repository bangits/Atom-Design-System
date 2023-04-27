System.register(["react/jsx-runtime", "@storybook/addon-actions", "@storybook/addon-knobs", "./DnDSelection"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_actions_1, addon_knobs_1, DnDSelection_1, Default;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_actions_1_1) {
                addon_actions_1 = addon_actions_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (DnDSelection_1_1) {
                DnDSelection_1 = DnDSelection_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/DnDSelection',
                component: DnDSelection_1.default,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("Default", Default = () => {
                return (_jsx(DnDSelection_1.default, { draggableItems: [
                        {
                            imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
                            indexValue: 2,
                            children: 'DndDnd Item 2Dnd Item 2Dnd Item 2Dnd Item 2Dnd Item 2Dnd Item 2Dnd Item 2Dnd Item 2 Item 2'
                        },
                        {
                            imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
                            indexValue: 3,
                            children: 'Dnd Item 3'
                        },
                        {
                            imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
                            indexValue: 4,
                            children: 'Dnd Item 4'
                        },
                        {
                            imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
                            indexValue: 5,
                            children: 'Dnd Item 5'
                        },
                        {
                            imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
                            indexValue: 6,
                            children: 'Dnd Item 6'
                        },
                        {
                            imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
                            indexValue: 7,
                            children: 'Dnd Item 7'
                        },
                        {
                            imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
                            indexValue: 8,
                            children: 'Dnd Item 8'
                        }
                    ], initialSortableItems: [
                        {
                            imgSrc: 'https://thumbs.dreamstime.com/b/playing-video-game-close-up-child-hands-th-late-night-54233429.jpg',
                            indexValue: 1,
                            children: 'Dnd Item 1'
                        }
                    ], onApplyButtonClick: addon_actions_1.action('onApplyButtonClick'), onCloseButtonClick: addon_actions_1.action('onCloseButtonClick'), draggableSectionTitle: addon_knobs_1.text('draggableSectionTitle', 'Section 1'), sortableSectionTitle: addon_knobs_1.text('sortableSectionTitleSectionTitle', 'Section 2') }));
            });
        }
    };
});
