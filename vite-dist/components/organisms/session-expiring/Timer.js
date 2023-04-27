System.register(["react/jsx-runtime", "react"], function (exports_1, context_1) {
    "use strict";
    var jsx_runtime_1, react_1, Timer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (jsx_runtime_1_1) {
                jsx_runtime_1 = jsx_runtime_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            Timer = () => {
                const calculateTimeLeft = () => {
                    const year = new Date().getFullYear();
                    const difference = +new Date(`${year}-02-20`) - +new Date();
                    let timeLeft = {};
                    if (difference > 0) {
                        timeLeft = {
                            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                            minutes: Math.floor((difference / 1000 / 60) % 60),
                            seconds: Math.floor((difference / 1000) % 60)
                        };
                    }
                    return timeLeft;
                };
                const [timeLeft, setTimeLeft] = react_1.useState(calculateTimeLeft());
                const [year] = react_1.useState(new Date().getFullYear());
                react_1.useEffect(() => {
                    setTimeout(() => {
                        setTimeLeft(calculateTimeLeft());
                    }, 1000);
                });
                const timerComponents = [];
                Object.keys(timeLeft).forEach((interval) => {
                    if (!timeLeft[interval]) {
                        return;
                    }
                    timerComponents.push(_jsxs("div", { className: 'expire-timer__numbers', children: [_jsx("div", { className: 'num-cell', children: timeLeft[interval] }), _jsx("div", { className: 'dotted-cell', children: ":" })] }));
                });
                return (_jsx(_Fragment, { children: _jsx("div", { className: 'expire-timer', children: _jsx("div", { className: 'timer-group', children: timerComponents.length ? timerComponents : _jsx("span", { children: "Time's up!" }) }) }) }));
            };
            exports_1("default", Timer);
        }
    };
});
