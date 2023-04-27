System.register(["react", "react/jsx-runtime", "@/atom-design-system", "@/components", "@/icons", "@my-ui/core", "classnames", "./ProviderDetails.module.scss"], function (exports_1, context_1) {
    "use strict";
    var react_1, jsx_runtime_1, atom_design_system_1, components_1, icons_1, core_1, classnames_1, react_2, ProviderDetails_module_scss_1, ProviderGames;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
                react_2 = react_1_1;
            },
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
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
            function (ProviderDetails_module_scss_1_1) {
                ProviderDetails_module_scss_1 = ProviderDetails_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("ProviderGames", ProviderGames = ({ translations, gameTypes, games, onGameClick, searchInputMaxLength, onChange, onAddGameClick, isLoadingGames, isAllGamesLoaded, isTabLoading, hasGames, shouldShowAddGameButton = true, onGameDetailsClick }) => {
                const [searchValue, setSearchValue] = react_2.useState('');
                const latestSearchValue = react_2.useRef('');
                const [selectedGameType, setSelectedGameType] = react_2.useState(null);
                const [currentPage, setCurrentPage] = react_2.useState(1);
                return (_jsxs("div", { className: classnames_1.default(ProviderDetails_module_scss_1.default['GamesList'], 'GamesList'), children: [_jsxs("div", { className: classnames_1.default(ProviderDetails_module_scss_1.default['GamesList__Header'], 'GamesList__Header'), children: [_jsx("div", { className: classnames_1.default(ProviderDetails_module_scss_1.default['GamesList__Header-1'], 'GamesList__Header-1'), children: hasGames && !isTabLoading ? (_jsx(components_1.TextInput, { label: translations.search, endIcon: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '16px', style: { fill: '#8ea6c1', cursor: 'pointer', opacity: '0.5' }, viewBox: '0 0 512 512', onClick: () => {
                                                if (!(latestSearchValue.current && !searchValue.length) && searchValue.length < 3)
                                                    return;
                                                latestSearchValue.current = searchValue;
                                                setCurrentPage(1);
                                                onChange(selectedGameType, searchValue, 1);
                                            }, children: _jsx("path", { d: 'm503.6 463.2-96.7-96.4C438.1 327.1 455 278 455 227.5 455 101.8 353.1 0 227.5 0 101.8 0 0 101.8 0 227.5 0 353.1 101.8 455 227.5 455c50.5.1 99.6-16.9 139.3-48.1l96.4 96.7c11.1 11.1 29.1 11.2 40.2.2l.2-.2c11.1-11.1 11.2-29.1.2-40.2l-.2-.2zM56.9 227.5c0-94.2 76.4-170.6 170.6-170.6 94.2 0 170.6 76.4 170.6 170.6 0 94.2-76.4 170.6-170.6 170.6-94.3 0-170.6-76.4-170.6-170.6z' }) }), value: searchValue, onChange: (e) => setSearchValue(e.target.value), maxLength: searchInputMaxLength })) : null }), shouldShowAddGameButton && (_jsx("div", { className: classnames_1.default(ProviderDetails_module_scss_1.default['GamesList__Header-2'], 'GamesList__Header-2'), children: _jsx(core_1.Button, { type: 'button', variant: 'link', className: classnames_1.default(ProviderDetails_module_scss_1.default['GamesList__Add-Game-Btn'], 'GamesList__Add-Game-Btn'), startIcon: _jsx(atom_design_system_1.Icons.PlusCircleLarge, { onClick: () => {
                                                setCurrentPage(1);
                                                onChange(selectedGameType, searchValue, 1);
                                            } }), onClick: onAddGameClick, children: translations.addGame }) }))] }), isTabLoading ? (_jsx("div", { className: ProviderDetails_module_scss_1.default.GamesLoading, children: _jsx("div", { className: classnames_1.default(ProviderDetails_module_scss_1.default['GamesContainer__Loader'], 'GamesContainer__Loader'), children: _jsx(core_1.Loader, {}) }) })) : games && games.length ? (_jsxs("div", { className: classnames_1.default(ProviderDetails_module_scss_1.default['GamesList__Fill'], 'GamesList__Fill'), children: [_jsx("div", { className: classnames_1.default(ProviderDetails_module_scss_1.default['TagsCell'], 'TagsCell'), children: gameTypes.map((type) => (_jsx(core_1.Tag, { className: classnames_1.default(ProviderDetails_module_scss_1.default['GameDetailsBase__GameTag'], 'GameDetailsBase__GameTag'), title: `${type.name}(${type.gameCount})`, closeIcon: false, inactive: selectedGameType !== (type.id || type.name), onClick: () => {
                                            type.id
                                                ? setSelectedGameType((prevTypeId) => {
                                                    onChange(prevTypeId === type.id ? null : type.id, searchValue, 1);
                                                    return prevTypeId === type.id ? null : type.id;
                                                })
                                                : setSelectedGameType((prevTypeId) => {
                                                    onChange(prevTypeId === type.name ? null : type.name, searchValue, 1);
                                                    return prevTypeId === type.name ? null : type.name;
                                                });
                                            setCurrentPage(1);
                                        } }, type.id))) }), _jsxs(core_1.Scroll, { height: '40rem', autoHide: true, onScroll: (e) => {
                                        if (isAllGamesLoaded || isLoadingGames)
                                            return;
                                        const isScrolledToBottom = e.target.offsetHeight + e.target.scrollTop >=
                                            e.target.scrollHeight;
                                        if (isScrolledToBottom) {
                                            onChange(selectedGameType, searchValue, currentPage + 1);
                                            setCurrentPage(currentPage + 1);
                                        }
                                    }, children: [_jsx("div", { className: classnames_1.default(ProviderDetails_module_scss_1.default['GamesContainer'], 'GamesContainer'), children: games.map((game) => (_jsx("div", { className: classnames_1.default(ProviderDetails_module_scss_1.default['HoverContainer'], 'HoverContainer'), children: _createElement(atom_design_system_1.GameCard, { ...game, key: game.id, isShowActivateOrDeactivateButton: false, onGameClick: onGameClick, onGameDetailsClick: onGameDetailsClick, playDemo: translations.playDemo }) }))) }), isLoadingGames && (_jsx("div", { className: classnames_1.default(ProviderDetails_module_scss_1.default['GamesContainer__Loader'], 'GamesContainer__Loader'), children: _jsx(core_1.Loader, {}) }))] })] })) : (_jsxs("div", { className: classnames_1.default(ProviderDetails_module_scss_1.default['GamesList__Empty'], 'GamesList__Empty'), children: [_jsx("div", { className: classnames_1.default(ProviderDetails_module_scss_1.default['Empty-Page-Cell'], 'Empty-Page-Cell'), children: _jsx("span", { className: classnames_1.default(ProviderDetails_module_scss_1.default['Empty-Page-Icon-Cell'], 'Empty-Page-Icon-Cell'), children: _jsx(icons_1.EmptyGameListIcon, {}) }) }), _jsx(core_1.Typography, { component: 'p', variant: 'p3', className: classnames_1.default(ProviderDetails_module_scss_1.default['Empty-Page-Title'], 'Empty-Page-Title'), children: translations.noGames })] }))] }));
            });
        }
    };
});
