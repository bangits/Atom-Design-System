System.register(["react/jsx-runtime", "@/atom-design-system", "@/icons", "@my-ui/core", "classnames", "cropperjs/dist/cropper.css", "react", "react-transition-group", "./ImagePreview.module.scss", "./Portal"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, icons_1, core_1, classnames_1, react_1, react_transition_group_1, ImagePreview_module_scss_1, Portal_1, ImagePreview;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (icons_1_1) {
                icons_1 = icons_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (_1) {
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_transition_group_1_1) {
                react_transition_group_1 = react_transition_group_1_1;
            },
            function (ImagePreview_module_scss_1_1) {
                ImagePreview_module_scss_1 = ImagePreview_module_scss_1_1;
            },
            function (Portal_1_1) {
                Portal_1 = Portal_1_1;
            }
        ],
        execute: function () {
            exports_1("ImagePreview", ImagePreview = ({ uploadedFile, onDownloadClick, translations, idInfo, opened, onClose }) => {
                const actions = react_1.useMemo(() => [
                    {
                        icon: _jsx(icons_1.DownloadIcon, { className: ImagePreview_module_scss_1.default.CloseButton }),
                        onClick: onDownloadClick,
                        label: translations.download
                    },
                    {
                        icon: _jsx(atom_design_system_1.Icons.CloseIcon, { className: ImagePreview_module_scss_1.default.CloseButton }),
                        onClick: onClose,
                        label: translations.cancel
                    }
                ], [uploadedFile, onDownloadClick, translations, onClose]);
                return (_jsxs(Portal_1.default, { wrapperId: opened ? 'Portal' : '', children: [opened && (_jsxs("div", { className: ImagePreview_module_scss_1.default.HeaderSection, children: [_jsx(core_1.Typography, { className: ImagePreview_module_scss_1.default.Infos, children: idInfo }), _jsx("div", { className: ImagePreview_module_scss_1.default.Actions, children: actions.map((action, index) => (_jsx("div", { children: _jsx(core_1.Tooltip, { text: action.label, children: _jsx(core_1.IconButton, { icon: action.icon, onClick: action.onClick }) }) }, index))) })] })), _jsx(react_transition_group_1.CSSTransition, { in: opened, timeout: 200, classNames: { exit: ImagePreview_module_scss_1.default['Dialog--exit'] }, unmountOnExit: true, children: _jsxs(_Fragment, { children: [_jsx("div", { className: ImagePreview_module_scss_1.default.ImagePreview, children: _jsx("img", { src: uploadedFile }) }), _jsx("div", { className: classnames_1.default(ImagePreview_module_scss_1.default.Overlay), tabIndex: 0, role: 'button', onClick: onClose })] }) })] }));
            });
        }
    };
});
