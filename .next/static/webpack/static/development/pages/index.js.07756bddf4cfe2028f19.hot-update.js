webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-compound-timer/build/components/Timer/Timer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-compound-timer/build/components/Timer/Timer.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var TimerModel_1 = __webpack_require__(/*! ../../lib/models/TimerModel */ "./node_modules/react-compound-timer/build/lib/models/TimerModel.js");
var TimerContext = react_1.default.createContext({
    ms: 0,
    s: 0,
    m: 0,
    h: 0,
    d: 0,
    formatValue: function (value) { return String(value); },
});
var TimerValue = function (_a) {
    var unit = _a.unit, formatValue = _a.formatValue;
    return (react_1.default.createElement(Timer.Consumer, null, function (props) {
        var format = formatValue || props.formatValue;
        return format(props[unit]) || null;
    }));
};
var Milliseconds = function (props) { return (react_1.default.createElement(TimerValue, __assign({ unit: "ms" }, props))); };
var Seconds = function (props) { return (react_1.default.createElement(TimerValue, __assign({ unit: "s" }, props))); };
var Minutes = function (props) { return (react_1.default.createElement(TimerValue, __assign({ unit: "m" }, props))); };
var Hours = function (props) { return (react_1.default.createElement(TimerValue, __assign({ unit: "h" }, props))); };
var Days = function (props) { return (react_1.default.createElement(TimerValue, __assign({ unit: "d" }, props))); };
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    function Timer(props) {
        var _this = _super.call(this, props) || this;
        var _a = _this.props, initialTime = _a.initialTime, direction = _a.direction, timeToUpdate = _a.timeToUpdate, lastUnit = _a.lastUnit, checkpoints = _a.checkpoints;
        _this.timer = new TimerModel_1.TimerModel({
            initialTime: initialTime,
            direction: direction,
            timeToUpdate: timeToUpdate,
            lastUnit: lastUnit,
            checkpoints: checkpoints,
            onChange: _this.setState.bind(_this),
        });
        _this.state = __assign({}, _this.timer.timeParts, { timerState: 'INITED' });
        _this.start = _this.start.bind(_this);
        _this.pause = _this.pause.bind(_this);
        _this.resume = _this.resume.bind(_this);
        _this.stop = _this.stop.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.setTime = _this.setTime.bind(_this);
        _this.getTime = _this.getTime.bind(_this);
        _this.getTimerState = _this.getTimerState.bind(_this);
        _this.setDirection = _this.setDirection.bind(_this);
        _this.setCheckpoints = _this.setCheckpoints.bind(_this);
        return _this;
    }
    Timer.getUI = function (children, renderProps) {
        if (children === null) {
            return null;
        }
        if (Array.isArray(children) || react_1.default.isValidElement(children)) {
            return children;
        }
        if (children.prototype && children.prototype.isReactComponent) {
            return react_1.default.createElement(children, renderProps);
        }
        if (typeof children === 'function') {
            return children(renderProps);
        }
        throw new Error('Please use one of the supported APIs for children');
    };
    Timer.prototype.componentDidMount = function () {
        var startImmediately = this.props.startImmediately;
        startImmediately && this.timer.start();
    };
    Timer.prototype.componentWillUnmount = function () {
        this.timer.stop();
    };
    Timer.prototype.render = function () {
        var _a = this, start = _a.start, pause = _a.pause, resume = _a.resume, stop = _a.stop, reset = _a.reset, getTime = _a.getTime, getTimerState = _a.getTimerState, setTime = _a.setTime, setDirection = _a.setDirection, setCheckpoints = _a.setCheckpoints;
        var _b = this.state, ms = _b.ms, s = _b.s, m = _b.m, h = _b.h, d = _b.d, timerState = _b.timerState;
        var _c = this.props, formatValue = _c.formatValue, children = _c.children;
        return (react_1.default.createElement(TimerContext.Provider, { value: { ms: ms, s: s, m: m, h: h, d: d, formatValue: formatValue } }, Timer.getUI(children, {
            start: start,
            resume: resume,
            pause: pause,
            stop: stop,
            reset: reset,
            getTime: getTime,
            getTimerState: getTimerState,
            setTime: setTime,
            setDirection: setDirection,
            setCheckpoints: setCheckpoints,
            timerState: timerState,
        })));
    };
    Timer.prototype.setTime = function (time) {
        this.timer.setTime(time);
    };
    Timer.prototype.getTime = function () {
        return this.timer.getTime();
    };
    Timer.prototype.getTimerState = function () {
        return this.timer.state;
    };
    Timer.prototype.setDirection = function (direction) {
        this.timer.setDirection(direction);
    };
    Timer.prototype.setCheckpoints = function (checkpoints) {
        this.timer.setCheckpoints(checkpoints);
    };
    Timer.prototype.start = function () {
        this.timer.start();
        this.props.onStart();
    };
    Timer.prototype.stop = function () {
        this.timer.stop();
        this.props.onStop();
    };
    Timer.prototype.pause = function () {
        this.timer.pause();
        this.props.onPause();
    };
    Timer.prototype.reset = function () {
        this.timer.reset();
        this.props.onReset();
    };
    Timer.prototype.resume = function () {
        this.timer.resume();
        this.props.onResume();
    };
    Timer.Consumer = TimerContext.Consumer;
    Timer.Milliseconds = Milliseconds;
    Timer.Seconds = Seconds;
    Timer.Minutes = Minutes;
    Timer.Hours = Hours;
    Timer.Days = Days;
    Timer.defaultProps = {
        timeToUpdate: 1000,
        direction: 'forward',
        initialTime: 0,
        startImmediately: true,
        lastUnit: 'd',
        checkpoints: [],
        children: null,
        formatValue: function (value) { return String(value); },
        onStart: function () { },
        onResume: function () { },
        onPause: function () { },
        onStop: function () { },
        onReset: function () { },
    };
    return Timer;
}(react_1.default.PureComponent));
exports.default = Timer;
//# sourceMappingURL=Timer.js.map

/***/ }),

/***/ "./node_modules/react-compound-timer/build/hook/useTimer.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-compound-timer/build/hook/useTimer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var TimerModel_1 = __webpack_require__(/*! ../lib/models/TimerModel */ "./node_modules/react-compound-timer/build/lib/models/TimerModel.js");
var getTimeParts_1 = __importDefault(__webpack_require__(/*! ../lib/helpers/getTimeParts */ "./node_modules/react-compound-timer/build/lib/helpers/getTimeParts.js"));
function useTimer(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.initialTime, initialTime = _c === void 0 ? 0 : _c, _d = _b.direction, direction = _d === void 0 ? "forward" : _d, _e = _b.timeToUpdate, timeToUpdate = _e === void 0 ? 1000 : _e, _f = _b.startImmediately, startImmediately = _f === void 0 ? true : _f, _g = _b.lastUnit, lastUnit = _g === void 0 ? "d" : _g, _h = _b.checkpoints, checkpoints = _h === void 0 ? [] : _h, onStart = _b.onStart, onResume = _b.onResume, onPause = _b.onPause, onStop = _b.onStop, onReset = _b.onReset;
    var _j = react_1.useState(__assign({}, getTimeParts_1.default(initialTime < 0 ? 0 : initialTime, lastUnit), { state: 'INITED' })), timerValues = _j[0], setTimerValues = _j[1];
    var timer = react_1.useMemo(function () {
        return new TimerModel_1.TimerModel({
            initialTime: initialTime,
            direction: direction,
            timeToUpdate: timeToUpdate,
            lastUnit: lastUnit,
            checkpoints: checkpoints,
            onChange: function (timerValue) {
                return setTimerValues(function (state) { return (__assign({}, state, timerValue)); });
            },
        });
    }, []);
    var setTime = react_1.useCallback(function (time) { return timer.setTime(time); }, [timer]);
    var getTime = react_1.useCallback(function () { return timer.getTime(); }, [timer]);
    var getTimerState = react_1.useCallback(function () { return timer.state; }, [timer]);
    var setDirection = react_1.useCallback(function (direction) { return timer.setDirection(direction); }, [timer]);
    var setLastUnit = react_1.useCallback(function (lastUnit) { return timer.setLastUnit(lastUnit); }, [timer]);
    var setCheckpoints = react_1.useCallback(function (checkpoints) { return timer.setCheckpoints(checkpoints); }, [timer]);
    var setTimeToUpdate = react_1.useCallback(function (interval) { return timer.setTimeToUpdate(interval); }, [timer]);
    var start = react_1.useCallback(function () { timer.start(); onStart && onStart(); }, [timer, onStart]);
    var stop = react_1.useCallback(function () { timer.stop(); onStop && onStop(); }, [timer, onStop]);
    var pause = react_1.useCallback(function () { timer.pause(); onPause && onPause(); }, [timer, onPause]);
    var reset = react_1.useCallback(function () { timer.reset(); onReset && onReset(); }, [timer, onReset]);
    var resume = react_1.useCallback(function () { timer.resume(); onResume && onResume(); }, [timer, onResume]);
    var controls = react_1.useMemo(function () { return ({
        start: start,
        stop: stop,
        pause: pause,
        reset: reset,
        resume: resume,
        setTime: setTime,
        getTime: getTime,
        getTimerState: getTimerState,
        setDirection: setDirection,
        setLastUnit: setLastUnit,
        setTimeToUpdate: setTimeToUpdate,
        setCheckpoints: setCheckpoints,
    }); }, [
        start, stop, pause, reset, resume,
        setTime, getTime, getTimerState, setDirection, setLastUnit, setTimeToUpdate, setCheckpoints,
    ]);
    react_1.useEffect(function () {
        if (startImmediately) {
            start();
        }
        return function () {
            stop();
        };
    }, []);
    return {
        controls: controls,
        value: timerValues,
    };
}
exports.useTimer = useTimer;
//# sourceMappingURL=useTimer.js.map

/***/ }),

/***/ "./node_modules/react-compound-timer/build/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-compound-timer/build/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Timer_1 = __importDefault(__webpack_require__(/*! ./components/Timer/Timer */ "./node_modules/react-compound-timer/build/components/Timer/Timer.js"));
var getTimeParts_1 = __importDefault(__webpack_require__(/*! ./lib/helpers/getTimeParts */ "./node_modules/react-compound-timer/build/lib/helpers/getTimeParts.js"));
exports.getTimeParts = getTimeParts_1.default;
var useTimer_1 = __webpack_require__(/*! ./hook/useTimer */ "./node_modules/react-compound-timer/build/hook/useTimer.js");
exports.useTimer = useTimer_1.useTimer;
exports.default = Timer_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-compound-timer/build/lib/helpers/getTimeParts.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-compound-timer/build/lib/helpers/getTimeParts.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getTimeParts(time, lastUnit) {
    var units = ['ms', 's', 'm', 'h', 'd'];
    var lastUnitIndex = units.findIndex(function (unit) { return unit === lastUnit; });
    var dividers = [1000, 60, 60, 24, 1];
    var dividersAcc = [1, 1000, 60000, 3600000, 86400000];
    var startValue = {
        ms: 0,
        s: 0,
        m: 0,
        h: 0,
        d: 0,
    };
    var output = units.reduce(function (obj, unit, index) {
        if (index > lastUnitIndex) {
            obj[unit] = 0;
        }
        else if (index === lastUnitIndex) {
            obj[unit] = Math.floor(time / dividersAcc[index]);
        }
        else {
            obj[unit] = Math.floor(time / dividersAcc[index]) % dividers[index];
        }
        return obj;
    }, startValue);
    return output;
}
exports.default = getTimeParts;
//# sourceMappingURL=getTimeParts.js.map

/***/ }),

/***/ "./node_modules/react-compound-timer/build/lib/helpers/now.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-compound-timer/build/lib/helpers/now.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function now() {
    if (typeof window === 'undefined' || !('performance' in window)) {
        return Date.now();
    }
    return performance.now();
}
exports.default = now;
//# sourceMappingURL=now.js.map

/***/ }),

/***/ "./node_modules/react-compound-timer/build/lib/models/TimerModel.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-compound-timer/build/lib/models/TimerModel.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getTimeParts_1 = __importDefault(__webpack_require__(/*! ../helpers/getTimeParts */ "./node_modules/react-compound-timer/build/lib/helpers/getTimeParts.js"));
var now_1 = __importDefault(__webpack_require__(/*! ../helpers/now */ "./node_modules/react-compound-timer/build/lib/helpers/now.js"));
var TimerState_1 = __importDefault(__webpack_require__(/*! ./TimerState */ "./node_modules/react-compound-timer/build/lib/models/TimerState.js"));
var TimerModel = /** @class */ (function () {
    function TimerModel(_a) {
        var initialTime = _a.initialTime, direction = _a.direction, timeToUpdate = _a.timeToUpdate, lastUnit = _a.lastUnit, checkpoints = _a.checkpoints, onChange = _a.onChange;
        this.internalTime = now_1.default();
        this.initialTime = initialTime;
        this.time = initialTime;
        this.direction = direction;
        this.timeToUpdate = timeToUpdate;
        this.lastUnit = lastUnit;
        this.checkpoints = checkpoints;
        this.innerState = new TimerState_1.default(onChange);
        this.onChange = onChange;
        this.timerId = null;
    }
    Object.defineProperty(TimerModel.prototype, "state", {
        get: function () {
            return this.innerState.getState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimerModel.prototype, "timeParts", {
        get: function () {
            return this.getTimeParts(this.computeTime());
        },
        enumerable: true,
        configurable: true
    });
    TimerModel.prototype.getTimeParts = function (time) {
        return getTimeParts_1.default(time, this.lastUnit);
    };
    TimerModel.prototype.setTime = function (time) {
        this.internalTime = now_1.default();
        this.initialTime = time;
        this.time = this.initialTime;
        this.onChange(this.getTimeParts(this.time));
    };
    TimerModel.prototype.getTime = function () {
        return this.time;
    };
    TimerModel.prototype.setLastUnit = function (lastUnit) {
        if (this.innerState.isPlaying()) {
            this.pause();
            this.lastUnit = lastUnit;
            this.resume(true);
        }
        else {
            this.lastUnit = lastUnit;
        }
    };
    TimerModel.prototype.setTimeToUpdate = function (interval) {
        if (this.innerState.isPlaying()) {
            this.pause();
            this.timeToUpdate = interval;
            this.resume();
        }
        else {
            this.timeToUpdate = interval;
        }
    };
    TimerModel.prototype.setDirection = function (direction) {
        this.direction = direction;
    };
    TimerModel.prototype.setCheckpoints = function (checkpoints) {
        this.checkpoints = checkpoints;
    };
    TimerModel.prototype.start = function () {
        if (this.innerState.setPlaying()) {
            this.setTimerInterval(true);
        }
    };
    TimerModel.prototype.resume = function (callImmediately) {
        if (callImmediately === void 0) { callImmediately = false; }
        if (!this.innerState.isStopped() && this.innerState.setPlaying()) {
            this.setTimerInterval(callImmediately);
        }
    };
    TimerModel.prototype.pause = function () {
        if (this.innerState.setPaused()) {
            clearInterval(this.timerId);
        }
    };
    TimerModel.prototype.stop = function () {
        if (this.innerState.setStopped()) {
            clearInterval(this.timerId);
        }
    };
    TimerModel.prototype.reset = function () {
        this.time = this.initialTime;
        this.onChange(this.getTimeParts(this.time));
    };
    TimerModel.prototype.setTimerInterval = function (callImmediately) {
        var _this = this;
        if (callImmediately === void 0) { callImmediately = false; }
        if (this.timerId) {
            clearInterval(this.timerId);
        }
        this.internalTime = now_1.default();
        var repeatedFunc = function () {
            var oldTime = _this.time;
            var updatedTime = _this.computeTime();
            _this.onChange(_this.getTimeParts(updatedTime));
            _this.checkpoints.map(function (_a) {
                var time = _a.time, callback = _a.callback;
                var checkForForward = time > oldTime && time <= updatedTime;
                var checkForBackward = time < oldTime && time >= updatedTime;
                var checkIntersection = _this.direction === 'backward' ?
                    checkForBackward :
                    checkForForward;
                if (checkIntersection) {
                    callback();
                }
            });
        };
        callImmediately && this.onChange(this.getTimeParts(this.time));
        this.timerId = window.setInterval(repeatedFunc, this.timeToUpdate);
    };
    TimerModel.prototype.computeTime = function () {
        if (this.innerState.isPlaying()) {
            var currentInternalTime = now_1.default();
            var delta = Math.abs(currentInternalTime - this.internalTime);
            switch (this.direction) {
                case 'forward':
                    this.time = this.time + delta;
                    this.internalTime = currentInternalTime;
                    return this.time;
                case 'backward': {
                    this.time = this.time - delta;
                    this.internalTime = currentInternalTime;
                    if (this.time < 0) {
                        this.stop();
                        return 0;
                    }
                    return this.time;
                }
                default:
                    return this.time;
            }
        }
        return this.time;
    };
    return TimerModel;
}());
exports.TimerModel = TimerModel;
//# sourceMappingURL=TimerModel.js.map

/***/ }),

/***/ "./node_modules/react-compound-timer/build/lib/models/TimerState.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-compound-timer/build/lib/models/TimerState.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.INITED = 'INITED';
exports.PLAYING = 'PLAYING';
exports.PAUSED = 'PAUSED';
exports.STOPPED = 'STOPPED';
var TimerState = /** @class */ (function () {
    function TimerState(onChangeStatus) {
        var _this = this;
        if (onChangeStatus === void 0) { onChangeStatus = function (obj) { }; }
        this.state = exports.INITED;
        this.onChange = function () { return onChangeStatus({ state: _this.state }); };
        this.state = exports.INITED;
    }
    TimerState.prototype.getState = function () {
        return this.state;
    };
    TimerState.prototype.setInited = function () {
        if (this.state === exports.INITED) {
            return false;
        }
        this.state = exports.INITED;
        this.onChange();
        return true;
    };
    TimerState.prototype.isInited = function () {
        return this.state === exports.INITED;
    };
    TimerState.prototype.setPlaying = function () {
        if (this.state === exports.PLAYING) {
            return false;
        }
        this.state = exports.PLAYING;
        this.onChange();
        return true;
    };
    TimerState.prototype.isPlaying = function () {
        return this.state === exports.PLAYING;
    };
    TimerState.prototype.setPaused = function () {
        if (this.state !== exports.PLAYING) {
            return false;
        }
        this.state = exports.PAUSED;
        this.onChange();
        return true;
    };
    TimerState.prototype.isPaused = function () {
        return this.state === exports.PAUSED;
    };
    TimerState.prototype.setStopped = function () {
        if (this.state === exports.INITED) {
            return false;
        }
        this.state = exports.STOPPED;
        this.onChange();
        return true;
    };
    TimerState.prototype.isStopped = function () {
        return this.state === exports.STOPPED;
    };
    return TimerState;
}());
exports.default = TimerState;
//# sourceMappingURL=TimerState.js.map

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _glug_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glug.png */ "./glug.png");
/* harmony import */ var _glug_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_glug_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_GoogleLog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GoogleLog */ "./components/GoogleLog.js");
/* harmony import */ var _components_FbLog2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FbLog2 */ "./components/FbLog2.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_compound_timer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-compound-timer */ "./node_modules/react-compound-timer/build/index.js");
/* harmony import */ var react_compound_timer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_compound_timer__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/anwesha/Desktop/screencast/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










function index() {
  var _this = this;

  return __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2094082217",
    __self: this
  }, "div.jsx-2094082217{text-align:center;content-align:center;margin:0px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IsQUFHNkIsa0JBQ0cscUJBQ0wsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vZ2x1Zy5wbmdcIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmltcG9ydCBHb29nbGVMb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvR29vZ2xlTG9nXCI7XG5pbXBvcnQgRmJMb2cyIGZyb20gXCIuLi9jb21wb25lbnRzL0ZiTG9nMlwiO1xuXG5pbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC1wYXJ0aWNsZXMtanNcIjtcbmltcG9ydCBUaW1lciBmcm9tICdyZWFjdC1jb21wb3VuZC10aW1lcidcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29udGVudC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPFBhcnRpY2xlc1xuICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICB2YWx1ZTogNDAsXG4gICAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlX2FyZWE6IDUwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICB2YWx1ZTogW1wiI2NjMDAwMFwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICBjb2xvcjogXCIjYWEwMDQ0XCIsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICBpbmRleDogXCItMTBcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBzaHJpbmstdG8tZml0Om5vXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGl0bGU+U2NyZWVuY2FzdCA8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJxdWVzdGlvbi5jc3NcIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8VGltZXJcbiAgICAgICAgICAgICAgaW5pdGlhbFRpbWU9ezU1MDAwfVxuICAgICAgICAgICAgICBzdGFydEltbWVkaWF0ZWx5PXtmYWxzZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsoeyBzdGFydCwgcmVzdW1lLCBwYXVzZSwgc3RvcCwgcmVzZXQsIHRpbWVyU3RhdGUgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lci5EYXlzIC8+IGRheXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVyLkhvdXJzIC8+IGhvdXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lci5NaW51dGVzIC8+IG1pbnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVyLlNlY29uZHMgLz4gc2Vjb25kc1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGltZXIuTWlsbGlzZWNvbmRzIC8+IG1pbGxpc2Vjb25kc1xuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3RpbWVyU3RhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydH0+U3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwYXVzZX0+UGF1c2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXN1bWV9PlJlc3VtZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0b3B9PlN0b3A8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldH0+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UaW1lcj5cbiAgICAgICAgXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaWduXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxNDBweFwiLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMjBweFwiLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIidSdXNzbyBPbmUnLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhc3QtZmxpY2tlclwiPnNjcmVlbjwvc3Bhbj5jYXN0e1wiIFwifVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxpY2tlclwiPjIwMjAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4taGVhZFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI2MHB4XCIgfX0+XG4gICAgICAgICAgICA8aDE+TG9naW4gdG8gcGxheSA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8R29vZ2xlTG9nIC8+XG4gICAgICAgIDxGYkxvZzIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e0xvZ299XG4gICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCI5MHB4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgZmxvYXQ6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/index.js */"), __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_8___default.a, {
    params: {
      particles: {
        number: {
          value: 40,
          density: {
            enable: false,
            value_area: 500
          }
        },
        color: {
          value: ["#cc0000"]
        },
        line_linked: {
          color: "#aa0044",
          opacity: 1
        }
      }
    },
    style: {
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      position: "fixed",
      index: "-10"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit:no",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx("title", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Screencast "), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "question.css",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx(react_compound_timer__WEBPACK_IMPORTED_MODULE_9___default.a, {
    initialTime: 55000,
    startImmediately: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, function (_ref) {
    var start = _ref.start,
        resume = _ref.resume,
        pause = _ref.pause,
        stop = _ref.stop,
        reset = _ref.reset,
        timerState = _ref.timerState;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "jsx-2094082217",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 23
      }
    }, __jsx(react_compound_timer__WEBPACK_IMPORTED_MODULE_9___default.a.Days, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 27
      }
    }), " days", __jsx(react_compound_timer__WEBPACK_IMPORTED_MODULE_9___default.a.Hours, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 27
      }
    }), " hours", __jsx(react_compound_timer__WEBPACK_IMPORTED_MODULE_9___default.a.Minutes, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 27
      }
    }), " minutes", __jsx(react_compound_timer__WEBPACK_IMPORTED_MODULE_9___default.a.Seconds, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 27
      }
    }), " seconds", __jsx(react_compound_timer__WEBPACK_IMPORTED_MODULE_9___default.a.Milliseconds, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 27
      }
    }), " milliseconds"), __jsx("div", {
      className: "jsx-2094082217",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 23
      }
    }, timerState), __jsx("br", {
      className: "jsx-2094082217",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "jsx-2094082217",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 23
      }
    }, __jsx("button", {
      onClick: start,
      className: "jsx-2094082217",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 27
      }
    }, "Start"), __jsx("button", {
      onClick: pause,
      className: "jsx-2094082217",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 27
      }
    }, "Pause"), __jsx("button", {
      onClick: resume,
      className: "jsx-2094082217",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 27
      }
    }, "Resume"), __jsx("button", {
      onClick: stop,
      className: "jsx-2094082217",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 27
      }
    }, "Stop"), __jsx("button", {
      onClick: reset,
      className: "jsx-2094082217",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 27
      }
    }, "Reset")));
  }), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      marginTop: "140px",
      marginBottom: "20px",
      fontFamily: "'Russo One', sans-serif"
    },
    className: "jsx-2094082217" + " " + "sign",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-2094082217" + " " + "fast-flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "screen"), "cast", " ", __jsx("span", {
    className: "jsx-2094082217" + " " + "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "2020 ")), __jsx("div", {
    style: {
      marginBottom: "60px"
    },
    className: "jsx-2094082217" + " " + "login-head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "Login to play "))), __jsx(_components_GoogleLog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }), __jsx(_components_FbLog2__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      marginRight: "auto",
      marginLeft: "auto",
      textAlign: "center"
    },
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _glug_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "logo",
    style: {
      marginTop: "90px",
      position: "relative",
      "float": "bottom",
      height: "50px",
      width: "auto"
    },
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.07756bddf4cfe2028f19.hot-update.js.map