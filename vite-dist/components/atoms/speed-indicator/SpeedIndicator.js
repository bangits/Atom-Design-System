System.register(["react/jsx-runtime", "classnames", "./SpeedIndicator.module.scss"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, classnames_1, SpeedIndicator_module_scss_1, SpeedIndicator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (classnames_1_1) {
                classnames_1 = classnames_1_1;
            },
            function (SpeedIndicator_module_scss_1_1) {
                SpeedIndicator_module_scss_1 = SpeedIndicator_module_scss_1_1;
            }
        ],
        execute: function () {
            SpeedIndicator = ({ speed, isOffline }) => {
                return (_jsx("div", { className: classnames_1.default(SpeedIndicator_module_scss_1.default.SpeedIndicatorBase, {
                        [SpeedIndicator_module_scss_1.default['SpeedIndicatorBase--offline']]: isOffline
                    }), children: _jsxs("svg", { width: '2.2rem', viewBox: '0 0 22 18', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [_jsx("path", { className: classnames_1.default({
                                    [SpeedIndicator_module_scss_1.default['SpeedIndicatorBase--opacity']]: speed !== 3 && speed <= 2
                                }), d: 'M11.1589 0.00405754C14.6618 -0.0781486 17.8496 1.0941 20.7538 3.03557C20.9944 3.19659 21.2355 3.35705 21.4697 3.52557C22.0464 3.94043 22.1646 4.57916 21.7657 5.0981C21.3897 5.58738 20.6726 5.7028 20.0782 5.35997C18.7117 4.57179 17.3135 3.83294 15.7809 3.35834C11.7539 2.11208 7.85379 2.46294 4.0798 4.21179C3.37171 4.54005 2.68661 4.90674 2.01074 5.28838C1.30387 5.6874 0.615117 5.59094 0.211945 5.04204C-0.180014 4.50853 -0.0196374 3.88239 0.621089 3.43433C2.85944 1.86817 5.30499 0.710902 8.09482 0.239521L8.09497 0.239379C9.10448 0.0638044 10.131 -0.0151545 11.1584 0.00405733L11.1589 0.00405754Z', fill: '#6667AB' }), _jsx("path", { className: classnames_1.default({
                                    [SpeedIndicator_module_scss_1.default['SpeedIndicatorBase--opacity']]: speed !== 2 && speed <= 1
                                }), d: 'M11.0112 5.02539C13.335 4.98583 15.3702 5.75311 17.2693 6.90401C17.5701 7.08593 17.8709 7.26476 18.1593 7.46279C18.6976 7.83542 18.8038 8.41199 18.4395 8.87711C18.0802 9.33392 17.4512 9.40989 16.8925 9.08757C12.9567 6.81741 9.01887 6.81459 5.0779 9.07924C4.4918 9.41584 3.86182 9.33589 3.5047 8.85776C3.14758 8.37962 3.28431 7.79979 3.85537 7.42803C5.33912 6.46216 6.8882 5.6175 8.68935 5.24531C9.45515 5.08823 10.2316 5.03414 11.0112 5.02538L11.0112 5.02539Z', fill: '#6667AB' }), _jsx("path", { className: classnames_1.default({
                                    [SpeedIndicator_module_scss_1.default['SpeedIndicatorBase--opacity']]: speed !== 1 && speed <= 1
                                }), d: 'M11.2715 9.79132C12.4635 9.79768 13.7349 10.3323 14.8648 11.1894C15.2649 11.4928 15.3301 11.9709 15.0651 12.3616C14.8072 12.7405 14.3054 12.8897 13.8284 12.7148C13.4727 12.5843 13.1249 12.4379 12.773 12.2971C11.5299 11.8067 10.2936 11.851 9.06337 12.3366C8.74538 12.4624 8.43339 12.6016 8.11154 12.7191H8.11139C7.89224 12.8029 7.6476 12.8115 7.42216 12.7434C7.19672 12.6752 7.00536 12.5348 6.88286 12.3478C6.75763 12.1612 6.71128 11.9388 6.75241 11.7226C6.79369 11.5065 6.91954 11.3119 7.10631 11.1756C8.23261 10.3375 9.48861 9.79415 11.2716 9.79133L11.2715 9.79132Z', fill: '#6667AB' }), _jsx("path", { d: 'M10.9567 17.9999C9.90698 17.996 9.04618 17.1951 9.04834 16.2233C9.04742 15.7454 9.25522 15.2873 9.62509 14.952C9.9948 14.6167 10.4957 14.4324 11.0147 14.4404C12.095 14.4464 12.9248 15.2314 12.9158 16.2424C12.905 17.2263 12.0384 18.0039 10.9568 17.9999H10.9567Z', fill: '#6667AB' })] }) }));
            };
            exports_1("default", SpeedIndicator);
        }
    };
});
