System.register(["react/jsx-runtime", "@storybook/addon-knobs", "./FileUploader", "react", "./enums"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, addon_knobs_1, FileUploader_1, react_1, enums_1, InputFileUploader, LinkFileUploader;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (addon_knobs_1_1) {
                addon_knobs_1 = addon_knobs_1_1;
            },
            function (FileUploader_1_1) {
                FileUploader_1 = FileUploader_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (enums_1_1) {
                enums_1 = enums_1_1;
            }
        ],
        execute: function () {
            exports_1("default", {
                title: 'components/organisms/FileUploader',
                component: FileUploader_1.FileUploader,
                decorators: [addon_knobs_1.withKnobs]
            });
            exports_1("InputFileUploader", InputFileUploader = () => {
                const [error, setError] = react_1.useState(null);
                const [file, setFile] = react_1.useState();
                const [src, setSrc] = react_1.useState('');
                const [percent, setPercent] = react_1.useState(0);
                const onChange = react_1.useCallback((file) => {
                    setError(null);
                    if (file) {
                        setTimeout(() => {
                            setFile(file);
                            setSrc('https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80');
                            setPercent(100);
                        }, 1000);
                    }
                }, []);
                const onRemove = react_1.useCallback(() => {
                    setPercent(0);
                    setFile(null);
                }, []);
                return (_jsx(FileUploader_1.FileUploader, { browseText: file?.name || 'Attach', imageSrc: src, variant: enums_1.FileUploaderVariants.input, onRemove: onRemove, onChange: onChange, loadingPercent: percent, onError: (e) => setError(e), errorMessage: error?.type, labelProps: {
                        optional: true,
                        optionalText: '(optional)',
                        text: 'Company logotype'
                    }, tooltipProps: {
                        tooltipText: 'How to upload file?'
                    } }));
            });
            exports_1("LinkFileUploader", LinkFileUploader = () => {
                const [error, setError] = react_1.useState(null);
                const [file, setFile] = react_1.useState();
                const [src, setSrc] = react_1.useState('');
                const [percent, setPercent] = react_1.useState(0);
                const onChange = react_1.useCallback((file) => {
                    setError(null);
                    if (file) {
                        setTimeout(() => {
                            setFile(file);
                            setSrc('https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80');
                            setPercent(100);
                        }, 1000);
                    }
                }, []);
                const onRemove = react_1.useCallback(() => {
                    setPercent(0);
                    setFile(null);
                }, []);
                return (_jsx("div", { style: { marginLeft: '5em', marginTop: '3em' }, children: _jsx(FileUploader_1.FileUploader, { browseText: file?.name || 'Attach', imageSrc: src, variant: enums_1.FileUploaderVariants.link, onRemove: onRemove, onChange: onChange, loadingPercent: percent, onError: (e) => setError(e), errorMessage: error?.type }) }));
            });
        }
    };
});
