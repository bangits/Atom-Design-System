System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "cropperjs/dist/cropper.css", "react", "react-cropper", "./BannerUploader.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, react_1, react_cropper_1, BannerUploader_module_scss_1, BannerUploaderMode, BannerUploader;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_cropper_1_1) {
                react_cropper_1 = react_cropper_1_1;
            },
            function (BannerUploader_module_scss_1_1) {
                BannerUploader_module_scss_1 = BannerUploader_module_scss_1_1;
            }
        ],
        execute: function () {
            (function (BannerUploaderMode) {
                BannerUploaderMode[BannerUploaderMode["VIEW"] = 0] = "VIEW";
                BannerUploaderMode[BannerUploaderMode["EDIT"] = 1] = "EDIT";
            })(BannerUploaderMode || (BannerUploaderMode = {}));
            exports_1("BannerUploaderMode", BannerUploaderMode);
            exports_1("BannerUploader", BannerUploader = ({ uploadedImage: uploadedImageProps, onSave, onDelete, minCropBoxWidth = 10, minCropBoxHeight = 10, translations, children, aspectRatio, maxSize = 2000000, accept, ...fileUploaderProps }) => {
                const [uploadedImage, setUploadedImage] = react_1.useState(uploadedImageProps || '');
                const [mode, setMode] = react_1.useState(BannerUploaderMode.VIEW);
                const [cropper, setCropper] = react_1.useState();
                const [isOpenedBannerUploader, setUploaderBannerUploader] = react_1.useState(false);
                const [isCropBoxResizable, setCropBoxResizable] = react_1.useState(true);
                const fileUploadInputRef = react_1.useRef(null);
                const onFileSelection = react_1.useCallback((file) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        setUploadedImage(reader.result);
                        setMode(BannerUploaderMode.EDIT);
                    };
                }, []);
                const onFileUpload = react_1.useCallback(core_1.createHandleFileUpload({
                    ...fileUploaderProps,
                    maxSize,
                    accept: accept || 'image/*',
                    onChange: onFileSelection,
                    onError: (error) => console.log(error)
                }), [accept, onFileSelection]);
                const actions = react_1.useMemo(() => [
                    ...(uploadedImage
                        ? mode === BannerUploaderMode.VIEW
                            ? [
                                {
                                    icon: _jsx(atom_design_system_1.Icons.EditIcon, {}),
                                    label: translations.edit,
                                    onClick: () => setMode(BannerUploaderMode.EDIT),
                                    position: 'left'
                                }
                            ]
                            : [
                                {
                                    icon: _jsx(atom_design_system_1.Icons.CloseIcon, { className: BannerUploader_module_scss_1.default.CloseButton }),
                                    label: translations.cancel,
                                    onClick: () => {
                                        setMode(BannerUploaderMode.VIEW);
                                        if (uploadedImage.includes('http:'))
                                            setUploadedImage('');
                                    },
                                    position: 'left'
                                },
                                {
                                    icon: _jsx(atom_design_system_1.Icons.RotateIcon, {}),
                                    label: translations.rotate,
                                    onClick: () => cropper.rotate(90),
                                    position: 'right'
                                },
                                {
                                    icon: _jsx(atom_design_system_1.Icons.CheckIcon, { width: '1.6rem' }),
                                    label: translations.save,
                                    onClick: () => {
                                        const imageBase64Source = cropper.getCroppedCanvas().toDataURL('image/gif');
                                        setUploadedImage(imageBase64Source);
                                        setMode(BannerUploaderMode.VIEW);
                                        onSave(imageBase64Source);
                                    },
                                    position: 'right'
                                }
                            ]
                        : [
                            {
                                icon: _jsx(atom_design_system_1.Icons.CameraIcon, {}),
                                label: translations.upload,
                                onClick: () => fileUploadInputRef.current.click(),
                                position: uploadedImage ? 'left' : 'right'
                            }
                        ]),
                    ...(mode !== BannerUploaderMode.EDIT && uploadedImage
                        ? [
                            {
                                icon: _jsx(atom_design_system_1.Icons.TrashIndicator, {}),
                                label: translations.remove,
                                onClick: () => {
                                    setUploadedImage(null);
                                    if (onDelete)
                                        onDelete();
                                },
                                position: 'right'
                            }
                        ]
                        : [])
                ], [uploadedImage, mode, cropper, onSave, translations, onDelete]);
                return (_jsxs(_Fragment, { children: [_jsx(core_1.DialogWithActions, { onClose: () => {
                                setUploaderBannerUploader(false);
                                if (mode === BannerUploaderMode.VIEW) {
                                    setUploadedImage(uploadedImageProps);
                                }
                            }, title: translations.title, isOpened: isOpenedBannerUploader, mode: 'dark', size: 'md', actions: actions, children: _jsxs("div", { className: BannerUploader_module_scss_1.default.BannerUploader, children: [!uploadedImage ? (_jsx(core_1.Typography, { className: BannerUploader_module_scss_1.default.BannerUploaderDescription, children: translations.pleaseUploadThePhoto })) : mode === BannerUploaderMode.EDIT ? (_jsx(_Fragment, { children: _jsx(react_cropper_1.default, { width: '100%', style: { height: '30rem', width: '100%' }, preview: '.img-preview', aspectRatio: aspectRatio, minCropBoxHeight: minCropBoxHeight, minCropBoxWidth: minCropBoxWidth, cropBoxResizable: isCropBoxResizable, minContainerWidth: minCropBoxWidth, minContainerHeight: minCropBoxHeight, guides: false, viewMode: 1, checkOrientation: false, dragMode: 'move', src: uploadedImage, onInitialized: (instance) => {
                                                setCropper(instance);
                                                instance.rotate(180);
                                            }, data: { width: minCropBoxWidth, height: minCropBoxHeight }, crop: (event) => {
                                                const width = event.detail.width;
                                                const height = event.detail.height;
                                                setCropBoxResizable(!(width < minCropBoxWidth || height < minCropBoxHeight));
                                            } }) })) : (_jsx(_Fragment, { children: _jsx("img", { src: uploadedImage, className: BannerUploader_module_scss_1.default.BannerUploaderUploadedImage }) })), _jsx("input", { type: 'file', accept: 'image/*', hidden: true, ref: fileUploadInputRef, onChange: onFileUpload })] }) }), children(() => setUploaderBannerUploader(true))] }));
            });
        }
    };
});
