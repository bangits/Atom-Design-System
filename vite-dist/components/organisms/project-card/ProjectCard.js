System.register(["react/jsx-runtime", "@/icons", "@my-ui/core", "classnames", "react", "./ProjectCard.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, icons_1, core_1, classnames_1, react_1, ProjectCard_module_scss_1, ProjectCard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
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
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (ProjectCard_module_scss_1_1) {
                ProjectCard_module_scss_1 = ProjectCard_module_scss_1_1;
            }
        ],
        execute: function () {
            ProjectCard = ({ col, maxCount = 0, title, logo, items = [], onArrowClick, viewMoreLabel, viewLessLabel, mode, color = 'purple' }) => {
                const [isOpenedCollapse, setOpenedCollapse] = react_1.useState(false);
                const [height, setHeight] = react_1.useState();
                const viewMoreClassNames = core_1.useStyles({
                    open: {
                        paddingBottom: '24px',
                        height: (data) => data.height + 24,
                        minHeight: 228
                    },
                    closed: {
                        height: 228
                    },
                    iconTransform: {
                        transform: 'rotate(180deg)',
                        transition: '.5s'
                    }
                }, { height });
                const handleViewClick = react_1.useCallback(() => {
                    setOpenedCollapse(!isOpenedCollapse);
                }, [isOpenedCollapse]);
                const containerRef = react_1.useRef();
                react_1.useLayoutEffect(() => {
                    const height = containerRef.current.scrollHeight;
                    // Using setTimeout for setting the height after first render
                    setHeight(height);
                }, [containerRef]);
                return (_jsxs("div", { ref: containerRef, className: classnames_1.default(ProjectCard_module_scss_1.default.ProjectCardWrapper, {
                        [ProjectCard_module_scss_1.default[`ProjectCardWrapper--${col}`]]: col,
                        [ProjectCard_module_scss_1.default[`ProjectCardWrapper--${col}`]]: col,
                        [viewMoreClassNames.closed]: !isOpenedCollapse,
                        [viewMoreClassNames.open]: isOpenedCollapse
                    }), children: [_jsxs("div", { className: ProjectCard_module_scss_1.default.CardHeader, children: [_jsx("div", { children: logo }), _jsx("div", { children: _jsx(icons_1.ArrowRightIcon, { onClick: onArrowClick }) })] }), _jsxs("div", { className: ProjectCard_module_scss_1.default.TitleContent, children: [_jsx("div", { children: _jsx(core_1.Typography, { variant: 'p4', component: 'h2', children: title }) }), _jsx("div", { children: _jsxs(core_1.Typography, { variant: 'p3', component: 'p', className: ProjectCard_module_scss_1.default[`TitleContent--${color}-color`], children: [_jsx("span", { children: items.length }), "/ ", maxCount] }) })] }), _jsx("hr", { className: ProjectCard_module_scss_1.default.Divider }), _jsx("div", { className: ProjectCard_module_scss_1.default.GameWrapper, children: _jsx("div", { className: ProjectCard_module_scss_1.default.GamesContent, children: items.map((item, key) => mode === 'small' ? (_jsxs("div", { className: ProjectCard_module_scss_1.default.Game, children: [_jsx("div", { className: ProjectCard_module_scss_1.default.GameImg, children: _jsx("img", { src: item.imgSrc }) }), _jsx("div", { className: ProjectCard_module_scss_1.default.GameLabel, children: _jsx(core_1.Typography, { variant: 'p4', component: 'span', children: item.title }) })] }, key)) : (_jsx("div", { className: ProjectCard_module_scss_1.default.OnlyImg, children: _jsx("div", { className: ProjectCard_module_scss_1.default.ImgContent, children: _jsx("img", { src: item.imgSrc }) }) }, key))) }) }), height > 228 && (_jsxs("div", { onClick: handleViewClick, className: classnames_1.default(ProjectCard_module_scss_1.default['ProjectCardWrapper--viewMore'], 'HELLLO WORLD'), children: [_jsx("div", { className: classnames_1.default({
                                        [viewMoreClassNames.iconTransform]: isOpenedCollapse
                                    }), children: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', children: _jsxs("g", { id: 'Group_24108', transform: 'translate(-555 -465)', children: [_jsxs("g", { id: 'Group_24107', transform: 'translate(0 6)', children: [_jsx("path", { id: 'Icon_ionic-ios-arrow-down', d: 'M11.189,14.739l3.781-3.309a.786.786,0,0,1,1.009,0,.576.576,0,0,1,0,.885L11.7,16.064a.789.789,0,0,1-.985.018L6.4,12.318a.574.574,0,0,1,0-.885.786.786,0,0,1,1.009,0Z', transform: 'translate(555.813 459.753)', fill: 'currentColor' }), _jsx("path", { id: 'Icon_ionic-ios-arrow-down-2', d: 'M11.189,14.739l3.781-3.309a.786.786,0,0,1,1.009,0,.576.576,0,0,1,0,.885L11.7,16.064a.789.789,0,0,1-.985.018L6.4,12.318a.574.574,0,0,1,0-.885.786.786,0,0,1,1.009,0Z', transform: 'translate(555.813 455.753)', fill: 'currentColor' })] }), _jsx("rect", { id: 'Rectangle_11242', width: '24', height: '24', transform: 'translate(555 465)', fill: 'none' })] }) }) }), _jsx("span", { children: isOpenedCollapse ? viewLessLabel : viewMoreLabel })] }))] }));
            };
            exports_1("default", ProjectCard);
        }
    };
});
