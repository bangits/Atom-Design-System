System.register(["react/jsx-runtime", "@/atom-design-system", "@/components/atoms/copy-button", "@/helpers/typedMemo", "@/icons", "@my-ui/core", "classnames", "./ProfileBlock.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, copy_button_1, typedMemo_1, icons_1, core_1, classnames_1, ProfileBlock_module_scss_1, ProfileBlock;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (copy_button_1_1) {
                copy_button_1 = copy_button_1_1;
            },
            function (typedMemo_1_1) {
                typedMemo_1 = typedMemo_1_1;
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
            function (ProfileBlock_module_scss_1_1) {
                ProfileBlock_module_scss_1 = ProfileBlock_module_scss_1_1;
            }
        ],
        execute: function () {
            ProfileBlock = ({ onBackgroundImgClick, onMainImgClick, backgroundImgUrl, mainImgUrl, itemId, itemName, isLoadingImage, viewMode = false, addCopyButton, itemLabel, selectContent }) => {
                return (_jsx(_Fragment, { children: _jsxs(core_1.Card, { className: classnames_1.default(ProfileBlock_module_scss_1.default['ProfileBlock'], 'ProfileBlock'), borderRadius: 1.6, children: [_jsxs("div", { className: ProfileBlock_module_scss_1.default['ProfileBlock__Images'], children: [onMainImgClick !== undefined && (_jsxs("div", { className: classnames_1.default(ProfileBlock_module_scss_1.default['ProfileBlock__ImgCell'], 'ProfileBlock__ImgCell', {
                                            [ProfileBlock_module_scss_1.default['ProfileBlock__ImgCell--uploaded']]: !!mainImgUrl
                                        }), onClick: mainImgUrl ? undefined : onMainImgClick, children: [mainImgUrl && (_jsx("img", { className: classnames_1.default(ProfileBlock_module_scss_1.default['ProfileBlock__Img'], 'ProfileBlock__Img'), src: mainImgUrl })), !isLoadingImage && !viewMode && (_jsx(icons_1.PhotoCamIcon, { onClick: !mainImgUrl ? undefined : onMainImgClick, width: '2.1rem', className: classnames_1.default(ProfileBlock_module_scss_1.default['ProfileBlock__PhotoCamIcon'], 'ProfileBlock__PhotoCamIcon') }))] })), _jsxs("div", { className: classnames_1.default(ProfileBlock_module_scss_1.default['ProfileBlock__Cover'], 'ProfileBlock__Cover', {
                                            [ProfileBlock_module_scss_1.default['ProfileBlock__Cover--uploaded']]: !!backgroundImgUrl
                                        }), onClick: backgroundImgUrl ? undefined : onBackgroundImgClick, children: [backgroundImgUrl && (_jsx("img", { className: classnames_1.default(ProfileBlock_module_scss_1.default['ProfileBlock__CoverImg'], 'ProfileBlock__CoverImg', {
                                                    [ProfileBlock_module_scss_1.default['ProfileBlock__Image']]: backgroundImgUrl === 'https://nid.com.ua/wp-content/themes/realestate-7/images/no-image.png' ||
                                                        backgroundImgUrl === 'https://i.ibb.co/dMQPWnZ/no-image.png' ||
                                                        backgroundImgUrl === 'https://i.ibb.co/c2yqT5q/image.png'
                                                }), src: backgroundImgUrl })), !viewMode && (_jsx("div", { className: classnames_1.default(ProfileBlock_module_scss_1.default['ProfileBlock__CoverPhotoIconCell'], 'ProfileBlock__CoverPhotoIconCell'), onClick: !backgroundImgUrl ? undefined : onBackgroundImgClick, children: !isLoadingImage && (_jsx(icons_1.PhotoCamIcon, { width: '1rem', className: classnames_1.default(ProfileBlock_module_scss_1.default['ProfileBlock__CoverPhotoIcon'], 'ProfileBlock__CoverPhotoIcon') })) }))] })] }), _jsxs("div", { className: classnames_1.default(ProfileBlock_module_scss_1.default['ProfileBlock__Info'], 'ProfileBlock__Info', {
                                    [ProfileBlock_module_scss_1.default['ProfileBlock__Info--without-logo']]: onMainImgClick === undefined
                                }), children: [_jsxs("div", { className: classnames_1.default(ProfileBlock_module_scss_1.default['ProfileBlock__Title'], 'ProfileBlock__Title'), children: [itemName, selectContent && _jsx(atom_design_system_1.IconDropdown, { children: selectContent })] }), _jsxs("div", { className: classnames_1.default(ProfileBlock_module_scss_1.default['ProfileBlock__SubTitle'], 'ProfileBlock__SubTitle'), children: [itemLabel, " ", itemId, " ", addCopyButton && _jsx(copy_button_1.CopyButton, { copyText: itemId })] })] })] }) }));
            };
            exports_1("default", typedMemo_1.typedMemo(ProfileBlock));
        }
    };
});
