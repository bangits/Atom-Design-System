System.register(["react/jsx-runtime", "@/atom-design-system", "@my-ui/core", "react", "./GameList.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, core_1, react_1, GameList_module_scss_1, GameList;
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
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (GameList_module_scss_1_1) {
                GameList_module_scss_1 = GameList_module_scss_1_1;
            }
        ],
        execute: function () {
            GameList = ({ games, playDemo, isLoadingGames, isAllGamesLoaded, onChange, onGameDetailsClick, onActivateOrDeactivateClick, onGameClick, updateWebText, updateText, isShowActivateOrDeactivateButton, updateWebContentButtonClick, updateContentButtonClick, isDisabled, isProvider, bulkActionsClick, selectedGameIds, setSelectedItemIds, bulkTrasnlationTexts }) => {
                const selectedGameIdsHashMap = react_1.useMemo(() => selectedGameIds
                    ? Object.values(selectedGameIds).reduce((acc, id) => ({
                        ...acc,
                        [id]: true
                    }), {})
                    : {}, [selectedGameIds]);
                const gamesHashMap = react_1.useMemo(() => Object.values(games).reduce((acc, game) => ({
                    ...acc,
                    [game.id]: game
                }), {}), [games]);
                const createItemSelectHandler = react_1.useCallback((itemId) => () => {
                    if (!selectedGameIdsHashMap[itemId]) {
                        setSelectedItemIds((prevSelectedItemIds) => [...prevSelectedItemIds, itemId]);
                        return;
                    }
                    setSelectedItemIds((prevSelectedItemIds) => prevSelectedItemIds.filter((id) => id !== itemId));
                }, [selectedGameIdsHashMap, selectedGameIds]);
                const selectedGamesLength = Object.keys(selectedGameIdsHashMap).length;
                const firstGameStatus = selectedGameIds && selectedGameIds[0] && gamesHashMap[selectedGameIds[0]]?.status;
                const isEveryGameWithSameStatus = react_1.useMemo(() => firstGameStatus && selectedGameIds.every((gameId) => gamesHashMap[gameId].status === firstGameStatus), [selectedGameIds, gamesHashMap, firstGameStatus]);
                return (_jsxs(atom_design_system_1.ScrollableView, { onPageChange: onChange, disableOnPageChange: isAllGamesLoaded || isLoadingGames, showLoader: isLoadingGames, className: GameList_module_scss_1.default.GamesScroll, children: [_jsxs("div", { style: { display: 'flex' }, children: [updateWebText && (_jsx(core_1.Button, { onClick: updateWebContentButtonClick, variant: 'link', startIcon: _jsx(atom_design_system_1.Icons.ExchangeIcon, {}), children: updateWebText })), updateText && (_jsx(core_1.Button, { className: isDisabled && GameList_module_scss_1.default.UpdateButton, disabled: isDisabled, onClick: updateContentButtonClick, variant: 'link', startIcon: _jsx(atom_design_system_1.Icons.ExchangeIcon, {}), children: updateText })), selectedGamesLength > 1 && (_jsxs(_Fragment, { children: [_jsx(atom_design_system_1.Divider, { showDivider: true }), _jsxs(core_1.Typography, { className: 'size-medium form-color mt-2', children: [bulkTrasnlationTexts.selected, ":", ' ', _jsxs("span", { className: 'italic', children: [selectedGamesLength, " ", bulkTrasnlationTexts.games] })] }), _jsx(atom_design_system_1.Divider, { showDivider: true }), _jsx(core_1.Button, { className: isDisabled && GameList_module_scss_1.default.UpdateButton, disabled: isDisabled, onClick: () => setSelectedItemIds([]), variant: 'link', children: bulkTrasnlationTexts.clearSelection }), isEveryGameWithSameStatus && _jsx(atom_design_system_1.Divider, { showDivider: true }), isEveryGameWithSameStatus && (_jsx(core_1.Tooltip, { text: firstGameStatus === 'Inactive' ? bulkTrasnlationTexts.activate : bulkTrasnlationTexts.inactivate, showEvent: 'hover', children: _jsx(core_1.IconButton, { icon: firstGameStatus !== 'Inactive' ? (_jsx(atom_design_system_1.Icons.BlockButtonIcon, { width: '1.8rem' })) : (_jsx(atom_design_system_1.Icons.ActivateIcon, { className: GameList_module_scss_1.default.ActivateIcon, width: '1.8rem' })), onClick: () => bulkActionsClick({ selectedGamesLength, firstGameStatus }) }) }))] }))] }), _jsx("div", { className: GameList_module_scss_1.default.GamesContainer, children: games.map((game) => (_jsx("div", { className: GameList_module_scss_1.default.GameCard, children: _jsx(atom_design_system_1.GameCard, { checkboxProps: {
                                        onChange: createItemSelectHandler(game.id),
                                        checked: !!selectedGameIdsHashMap[game.id]
                                    }, isProvider: isProvider, isShowActivateOrDeactivateButton: isShowActivateOrDeactivateButton, isActivate: game.status === 'Inactive' ? true : false, onGameClick: onGameClick, onActivateOrDeactivateClick: onActivateOrDeactivateClick, onGameDetailsClick: onGameDetailsClick, ...game, isPlayIconShow: !!playDemo, playDemo: playDemo, providerName: game.providerName }) }, game.id))) })] }));
            };
            exports_1("default", GameList);
        }
    };
});
