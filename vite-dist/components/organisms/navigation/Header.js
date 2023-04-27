System.register(["react/jsx-runtime", "@/atom-design-system", "@/components", "@my-ui/core", "react", "./Header.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, atom_design_system_1, components_1, core_1, react_1, Header_module_scss_1, Header;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (atom_design_system_1_1) {
                atom_design_system_1 = atom_design_system_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (Header_module_scss_1_1) {
                Header_module_scss_1 = Header_module_scss_1_1;
            }
        ],
        execute: function () {
            exports_1("Header", Header = ({ money, currency, minimumFractionDigits, speed, localTime, dateConverter, isOffline, onCorrectBalanceClick, correctBalanceLabel, ...props }) => {
                const [date, setDate] = react_1.useState(new Date());
                react_1.useEffect(() => {
                    const timer = setInterval(() => setDate(new Date()), 1000);
                    return () => clearInterval(timer);
                });
                const headerContent = react_1.useMemo(() => (_jsxs(_Fragment, { children: [onCorrectBalanceClick && (_jsxs(core_1.Button, { variant: 'ghost', style: { marginRight: 10 }, onClick: onCorrectBalanceClick, children: [_jsx(atom_design_system_1.Icons.BalanceIcon, { width: '1.5rem', style: { marginRight: 10 } }), " ", correctBalanceLabel] })), _jsx("div", { className: Header_module_scss_1.default.LocalTime, children: _jsx(components_1.LabelEndMark, { label: localTime, text: dateConverter(date) }) }), _jsx("div", { className: Header_module_scss_1.default.Balance, children: _jsx(components_1.Balance, { minimumFractionDigits: minimumFractionDigits, money: money, currency: currency }) }), _jsx("div", { className: Header_module_scss_1.default.InternetSpeed, children: _jsx(components_1.SpeedIndicator, { speed: speed, isOffline: isOffline }) })] })), [money, currency, minimumFractionDigits, speed, localTime, date, dateConverter, isOffline]);
                return (_jsx(_Fragment, { children: _jsx(core_1.Header, { ...props, headerContent: headerContent }) }));
            });
        }
    };
});
