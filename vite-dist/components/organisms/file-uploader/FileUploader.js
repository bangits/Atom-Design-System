System.register(["react/jsx-runtime", "@/atom-design-system", "@/components/atoms", "@my-ui/core", "classnames", "./FileUploader.module.scss", "./enums", "./vaiantMapings"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, atoms_1, core_1, classnames_1, FileUploader_module_scss_1, enums_1, vaiantMapings_1, FileUploader;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (atoms_1_1) {
                atoms_1 = atoms_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                exports_1({
                    "FileUploaderErrors": core_1_1["FileUploaderErrors"],
                    "LinkFileUploader": core_1_1["LinkFileUploader"],
                    "InputFileUploader": core_1_1["InputFileUploader"]
                });
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (FileUploader_module_scss_1_1) {
                FileUploader_module_scss_1 = FileUploader_module_scss_1_1;
            },
            function (enums_1_1) {
                enums_1 = enums_1_1;
            },
            function (vaiantMapings_1_1) {
                vaiantMapings_1 = vaiantMapings_1_1;
            }
        ],
        execute: function () {
            exports_1("FileUploader", FileUploader = ({ errorMessage, labelProps, tooltipProps, variant = enums_1.FileUploaderVariants.input, ...fileUploaderProps }) => {
                const { fullWidth, disabled } = fileUploaderProps;
                const TooltipIcon = tooltipProps && atom_design_system_1.Icons[tooltipProps.icon || 'InformationIcon'];
                return (_jsxs(_Fragment, { children: [_jsxs("div", { className: classnames_1.default(FileUploader_module_scss_1.default.FileUploaderLabelContainer, {
                                [FileUploader_module_scss_1.default['FileUploaderLabelContainer--fullWidth']]: fullWidth,
                                [FileUploader_module_scss_1.default['FileUploaderLabelContainer--disabled']]: disabled
                            }), children: [labelProps && _jsx(atoms_1.Label, { ...labelProps }), tooltipProps && (_jsx(core_1.Tooltip, { showEvent: 'hover', text: tooltipProps.tooltipText, placement: 'top', children: _jsx("div", { className: FileUploader_module_scss_1.default.FileUploaderTooltipIcon, children: _jsx(TooltipIcon, {}) }) }))] }), _jsxs("div", { className: classnames_1.default(FileUploader_module_scss_1.default.FileUploaderErrorMessage, {
                                [FileUploader_module_scss_1.default['FileUploaderErrorMessage--sameLineError']]: variant === enums_1.FileUploaderVariants.link,
                                [FileUploader_module_scss_1.default['FileUploaderErrorMessage--fullWidth']]: fullWidth
                            }), children: [_jsx(core_1.FileUploader, { ...fileUploaderProps, renderEl: (props) => vaiantMapings_1.renderEl(variant, props) }), errorMessage && (_jsx(core_1.Typography, { className: classnames_1.default(FileUploader_module_scss_1.default.FileUploaderErrorMessage, {
                                        [FileUploader_module_scss_1.default['FileUploaderErrorMessage--fullWidth']]: fullWidth,
                                        [FileUploader_module_scss_1.default['FileUploaderErrorMessage--disabled']]: disabled,
                                        [FileUploader_module_scss_1.default['FileUploaderErrorMessage--marginLeft']]: variant === enums_1.FileUploaderVariants.link
                                    }), color: 'danger', variant: 'p5', children: errorMessage }))] })] }));
            });
        }
    };
});
