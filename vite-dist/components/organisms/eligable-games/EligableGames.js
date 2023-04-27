System.register(["react/jsx-runtime", "@/atom-design-system", "react", "./EligableGames.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, react_1, EligableGames_module_scss_1, EligableGames;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (EligableGames_module_scss_1_1) {
                EligableGames_module_scss_1 = EligableGames_module_scss_1_1;
            }
        ],
        execute: function () {
            EligableGames = ({ categories, providers, lessLabel, searchInputProps, getMoreLabel, bulkActions, ...categoryItemsProps }) => {
                const cardTopPart = react_1.useMemo(() => (_jsx(_Fragment, { children: bulkActions && _jsx(atom_design_system_1.DividerList, { className: EligableGames_module_scss_1.default.EligableGames__BulkActions, children: bulkActions }) })), [lessLabel, getMoreLabel, providers, categories, searchInputProps, bulkActions]);
                const scrollProps = react_1.useMemo(() => ({
                    autoHide: true,
                    autoHeightMin: '50rem',
                    height: '50rem'
                }), []);
                return (_jsx(atom_design_system_1.CategoryItems, { fixHeight: false, scrollProps: scrollProps, itemsWidthAuto: true, ...categoryItemsProps, cardTopPart: cardTopPart }));
            };
            exports_1("default", EligableGames);
        }
    };
});
