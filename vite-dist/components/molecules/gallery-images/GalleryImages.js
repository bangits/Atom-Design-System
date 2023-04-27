System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "classnames", "react", "react-sortable-hoc", "./GalleryImages.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, classnames_1, react_1, react_sortable_hoc_1, GalleryImages_module_scss_1, SortableComponent, GalleryImages;
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
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_sortable_hoc_1_1) {
                react_sortable_hoc_1 = react_sortable_hoc_1_1;
            },
            function (GalleryImages_module_scss_1_1) {
                GalleryImages_module_scss_1 = GalleryImages_module_scss_1_1;
            }
        ],
        execute: function () {
            SortableComponent = react_sortable_hoc_1.SortableElement(({ imgSrc, active, onClick, onDeleteClick }) => (_jsxs("div", { className: classnames_1.default(GalleryImages_module_scss_1.default.GalleryImages__Img, {
                    [GalleryImages_module_scss_1.default['GalleryImages__Img--Active']]: active
                }), onClick: onClick, children: [_jsx("img", { src: imgSrc, onDragStart: (e) => e.preventDefault() }), _jsx("span", { className: classnames_1.default(GalleryImages_module_scss_1.default.GalleryImages__Sort, 'DnD-SortIcon'), children: _jsx(atom_design_system_1.Icons.SortIcon, {}) }), _jsx("span", { children: _jsx(atom_design_system_1.Icons.TrashIndicator, { onClick: onDeleteClick, className: classnames_1.default(GalleryImages_module_scss_1.default.GalleryImages__Trash) }) })] })));
            GalleryImages = ({ addButtonProps, saveButtonProps, images, activeImgId, onImageClick, onImagesListChange }) => {
                const [imagesList, setImagesList] = react_1.useState(images);
                const isSorted = react_1.useMemo(() => JSON.stringify(images) !== JSON.stringify(imagesList), [imagesList, images]);
                react_1.useEffect(() => setImagesList(images), [images]);
                react_1.useEffect(() => onImagesListChange?.(imagesList), [imagesList]);
                return (_jsxs("div", { className: GalleryImages_module_scss_1.default.GalleryImages, children: [_jsx(core_1.Scroll, { height: '47rem', children: _jsxs(atom_design_system_1.SortableList, { axis: 'xy', helperClass: GalleryImages_module_scss_1.default.GalleryImages__List, onSortEnd: (sortInfo) => setImagesList([...atom_design_system_1.arrayMoveMutable(imagesList, sortInfo.oldIndex, sortInfo.newIndex)]), children: [addButtonProps && (_jsx("div", { className: GalleryImages_module_scss_1.default.GalleryImages__Add, children: _jsxs(atom_design_system_1.Button, { variant: 'link', ...addButtonProps, children: [_jsx(atom_design_system_1.Icons.PlusCircleLarge, {}), addButtonProps.children] }) })), imagesList.map((image, index) => (_jsx(SortableComponent, { onDeleteClick: image.onDeleteClick, active: activeImgId === image.id, index: index, imgSrc: image.src, onClick: () => onImageClick(image.id) }, image.id)))] }) }), saveButtonProps && isSorted && (_jsx("div", { className: GalleryImages_module_scss_1.default.GalleryImages__Buttons, children: _jsx(atom_design_system_1.Button, { ...saveButtonProps }) }))] }));
            };
            exports_1("default", GalleryImages);
        }
    };
});
