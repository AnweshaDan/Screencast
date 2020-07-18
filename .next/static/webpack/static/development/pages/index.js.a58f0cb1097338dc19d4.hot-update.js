webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Timer2.js":
/*!******************************!*\
  !*** ./components/Timer2.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Timer2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Timer(props) {
  var _this = this;

  console.log(props);

  var renderer = function renderer(_ref) {
    var days = _ref.days,
        hours = _ref.hours,
        minutes = _ref.minutes,
        seconds = _ref.seconds;
    return __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: {
        marginBottom: 30
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
      style: {
        textAlign: "center"
      },
      title: props.message,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      style: {
        textAlign: "center"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }
    }, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_3__["zeroPad"])(days, 3), ":", Object(react_countdown__WEBPACK_IMPORTED_MODULE_3__["zeroPad"])(hours), ":", Object(react_countdown__WEBPACK_IMPORTED_MODULE_3__["zeroPad"])(minutes), ":", Object(react_countdown__WEBPACK_IMPORTED_MODULE_3__["zeroPad"])(seconds))))));
  };

  return __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    date: new Date(props.time),
    intervalDelay: 1,
    renderer: renderer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  });
}

/***/ }),

/***/ "./node_modules/react-countdown/dist/index.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-countdown/dist/index.es.js ***!
  \*******************************************************/
/*! exports provided: default, calcTimeDelta, formatTimeDelta, zeroPad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcTimeDelta", function() { return calcTimeDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeDelta", function() { return formatTimeDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zeroPad", function() { return zeroPad; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function zeroPad(value) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var strValue = String(value);
  if (length === 0) return strValue;
  var match = strValue.match(/(.*?)([0-9]+)(.*)/);
  var prefix = match ? match[1] : '';
  var suffix = match ? match[3] : '';
  var strNo = match ? match[2] : strValue;
  var paddedNo = strNo.length >= length ? strNo : (_toConsumableArray(Array(length)).map(function () {
    return '0';
  }).join('') + strNo).slice(length * -1);
  return "".concat(prefix).concat(paddedNo).concat(suffix);
}
var timeDeltaFormatOptionsDefaults = {
  daysInHours: false,
  zeroPadTime: 2
};
function calcTimeDelta(date) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$now = _ref.now,
      now = _ref$now === void 0 ? Date.now : _ref$now,
      _ref$precision = _ref.precision,
      precision = _ref$precision === void 0 ? 0 : _ref$precision,
      _ref$controlled = _ref.controlled,
      controlled = _ref$controlled === void 0 ? false : _ref$controlled,
      _ref$offsetTime = _ref.offsetTime,
      offsetTime = _ref$offsetTime === void 0 ? 0 : _ref$offsetTime;

  var startTimestamp;

  if (typeof date === 'string') {
    startTimestamp = new Date(date).getTime();
  } else if (date instanceof Date) {
    startTimestamp = date.getTime();
  } else {
    startTimestamp = date;
  }

  if (!controlled) {
    startTimestamp += offsetTime;
  }

  var total = Math.round(parseFloat((Math.max(0, controlled ? startTimestamp : startTimestamp - now()) / 1000).toFixed(Math.max(0, Math.min(20, precision)))) * 1000);
  var seconds = total / 1000;
  return {
    total: total,
    days: Math.floor(seconds / (3600 * 24)),
    hours: Math.floor(seconds / 3600 % 24),
    minutes: Math.floor(seconds / 60 % 60),
    seconds: Math.floor(seconds % 60),
    milliseconds: Number((seconds % 1 * 1000).toFixed()),
    completed: total <= 0
  };
}
function formatTimeDelta(delta, options) {
  var days = delta.days,
      hours = delta.hours,
      minutes = delta.minutes,
      seconds = delta.seconds;

  var _Object$assign = Object.assign({}, timeDeltaFormatOptionsDefaults, options),
      daysInHours = _Object$assign.daysInHours,
      zeroPadTime = _Object$assign.zeroPadTime,
      _Object$assign$zeroPa = _Object$assign.zeroPadDays,
      zeroPadDays = _Object$assign$zeroPa === void 0 ? zeroPadTime : _Object$assign$zeroPa;

  var formattedHours = daysInHours ? zeroPad(hours + days * 24, zeroPadTime) : zeroPad(hours, Math.min(2, zeroPadTime));
  return {
    days: daysInHours ? '' : zeroPad(days, zeroPadDays),
    hours: formattedHours,
    minutes: zeroPad(minutes, Math.min(2, zeroPadTime)),
    seconds: zeroPad(seconds, Math.min(2, zeroPadTime))
  };
}

var Countdown = function (_React$Component) {
  _inherits(Countdown, _React$Component);

  function Countdown() {
    var _this;

    _classCallCheck(this, Countdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Countdown).apply(this, arguments));
    _this.state = {
      count: _this.props.count || 3
    };

    _this.startCountdown = function () {
      _this.interval = window.setInterval(function () {
        var count = _this.state.count - 1;

        if (count === 0) {
          _this.stopCountdown();

          _this.props.onComplete && _this.props.onComplete();
        } else {
          _this.setState(function (prevState) {
            return {
              count: prevState.count - 1
            };
          });
        }
      }, 1000);
    };

    _this.stopCountdown = function () {
      clearInterval(_this.interval);
    };

    _this.addTime = function (seconds) {
      _this.stopCountdown();

      _this.setState(function (prevState) {
        return {
          count: prevState.count + seconds
        };
      }, _this.startCountdown);
    };

    return _this;
  }

  _createClass(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCountdown();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(this.props.children, {
        count: this.state.count
      }) : null;
    }
  }]);

  return Countdown;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
Countdown.propTypes = {
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  onComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var Countdown$1 = function (_React$Component) {
  _inherits(Countdown$1, _React$Component);

  function Countdown$1(props) {
    var _this;

    _classCallCheck(this, Countdown$1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Countdown$1).call(this, props));
    _this.mounted = false;
    _this.legacyMode = false;
    _this.legacyCountdownRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

    _this.tick = function () {
      var onTick = _this.props.onTick;

      var timeDelta = _this.calcTimeDelta();

      _this.setTimeDeltaState(timeDelta);

      if (onTick && timeDelta.total > 0) {
        onTick(timeDelta);
      }
    };

    _this.start = function () {
      _this.setState(function (_ref) {
        var offsetStart = _ref.offsetStart,
            offsetTime = _ref.offsetTime;
        return {
          offsetStart: 0,
          offsetTime: offsetTime + (offsetStart ? Date.now() - offsetStart : 0)
        };
      }, function () {
        var timeDelta = _this.calcTimeDelta();

        _this.setTimeDeltaState(timeDelta);

        _this.props.onStart && _this.props.onStart(timeDelta);

        if (!_this.props.controlled) {
          _this.clearInterval();

          _this.interval = window.setInterval(_this.tick, _this.props.intervalDelay);
        }
      });
    };

    _this.pause = function () {
      _this.clearInterval();

      _this.setState({
        offsetStart: _this.calcOffsetStart()
      }, function () {
        var timeDelta = _this.calcTimeDelta();

        _this.setTimeDeltaState(timeDelta);

        _this.props.onPause && _this.props.onPause(timeDelta);
      });
    };

    _this.isPaused = function () {
      return _this.state.offsetStart > 0;
    };

    _this.isCompleted = function () {
      return _this.state.timeDelta.completed;
    };

    if (props.date) {
      _this.state = {
        timeDelta: _this.calcTimeDelta(),
        offsetStart: props.autoStart ? 0 : _this.calcOffsetStart(),
        offsetTime: 0
      };
    } else {
      _this.legacyMode = true;
    }

    return _this;
  }

  _createClass(Countdown$1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.legacyMode) {
        return;
      }

      this.mounted = true;
      this.props.autoStart && this.start();
      this.props.onMount && this.props.onMount(this.calcTimeDelta());
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.legacyMode) {
        return;
      }

      if (!this.shallowCompareProps(this.props, prevProps)) {
        this.setTimeDeltaState(this.calcTimeDelta());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.legacyMode) {
        return;
      }

      this.mounted = false;
      this.clearInterval();
    }
  }, {
    key: "calcTimeDelta",
    value: function calcTimeDelta$1() {
      var _this$props = this.props,
          date = _this$props.date,
          now = _this$props.now,
          precision = _this$props.precision,
          controlled = _this$props.controlled;
      return calcTimeDelta(date, {
        now: now,
        precision: precision,
        controlled: controlled,
        offsetTime: this.state ? this.state.offsetTime : 0
      });
    }
  }, {
    key: "calcOffsetStart",
    value: function calcOffsetStart() {
      return Date.now();
    }
  }, {
    key: "addTime",
    value: function addTime(seconds) {
      this.legacyCountdownRef.current.addTime(seconds);
    }
  }, {
    key: "clearInterval",
    value: function clearInterval() {
      window.clearInterval(this.interval);
    }
  }, {
    key: "shallowCompareProps",
    value: function shallowCompareProps(propsA, propsB) {
      var keysA = Object.keys(propsA);
      return keysA.length === Object.keys(propsB).length && !keysA.some(function (keyA) {
        var valueA = propsA[keyA];
        var valueB = propsB[keyA];
        return !propsB.hasOwnProperty(keyA) || !(valueA === valueB || valueA !== valueA && valueB !== valueB);
      });
    }
  }, {
    key: "setTimeDeltaState",
    value: function setTimeDeltaState(timeDelta) {
      var _this2 = this;

      var callback;

      if (!this.state.timeDelta.completed && timeDelta.completed) {
        this.clearInterval();

        callback = function callback() {
          return _this2.props.onComplete && _this2.props.onComplete(timeDelta);
        };
      }

      if (this.mounted) {
        return this.setState({
          timeDelta: timeDelta
        }, callback);
      }
    }
  }, {
    key: "getApi",
    value: function getApi() {
      return this.api = this.api || {
        start: this.start,
        pause: this.pause,
        isPaused: this.isPaused,
        isCompleted: this.isCompleted
      };
    }
  }, {
    key: "getRenderProps",
    value: function getRenderProps() {
      var _this$props2 = this.props,
          daysInHours = _this$props2.daysInHours,
          zeroPadTime = _this$props2.zeroPadTime,
          zeroPadDays = _this$props2.zeroPadDays;
      var timeDelta = this.state.timeDelta;
      return Object.assign({}, timeDelta, {
        api: this.getApi(),
        props: this.props,
        formatted: formatTimeDelta(timeDelta, {
          daysInHours: daysInHours,
          zeroPadTime: zeroPadTime,
          zeroPadDays: zeroPadDays
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.legacyMode) {
        var _this$props3 = this.props,
            count = _this$props3.count,
            _children = _this$props3.children,
            onComplete = _this$props3.onComplete;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Countdown, {
          ref: this.legacyCountdownRef,
          count: count,
          onComplete: onComplete
        }, _children);
      }

      var _this$props4 = this.props,
          children = _this$props4.children,
          renderer = _this$props4.renderer;
      var renderProps = this.getRenderProps();

      if (renderer) {
        return renderer(renderProps);
      }

      if (children && this.state.timeDelta.completed) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
          countdown: renderProps
        });
      }

      var _renderProps$formatte = renderProps.formatted,
          days = _renderProps$formatte.days,
          hours = _renderProps$formatte.hours,
          minutes = _renderProps$formatte.minutes,
          seconds = _renderProps$formatte.seconds;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, days, days ? ':' : '', hours, ":", minutes, ":", seconds);
    }
  }]);

  return Countdown$1;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
Countdown$1.defaultProps = Object.assign({}, timeDeltaFormatOptionsDefaults, {
  controlled: false,
  intervalDelay: 1000,
  precision: 0,
  autoStart: true
});
Countdown$1.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  daysInHours: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  zeroPadTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  zeroPadDays: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  controlled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  intervalDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  precision: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  autoStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  renderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  now: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onPause: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onTick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown$1);



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
/* harmony import */ var _components_Timer2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Timer2 */ "./components/Timer2.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/anwesha/Desktop/screencast/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










function index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Date.now()),
      Stop = _useState[0],
      setStop = _useState[1];

  return __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2094082217",
    __self: this
  }, "div.jsx-2094082217{text-align:center;content-align:center;margin:0px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ca0IsQUFHNkIsa0JBQ0cscUJBQ0wsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vZ2x1Zy5wbmdcIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmltcG9ydCBHb29nbGVMb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvR29vZ2xlTG9nXCI7XG5pbXBvcnQgRmJMb2cyIGZyb20gXCIuLi9jb21wb25lbnRzL0ZiTG9nMlwiO1xuaW1wb3J0IFRpbWVyMiBmcm9tIFwiLi4vY29tcG9uZW50cy9UaW1lcjJcIlxuaW1wb3J0IFBhcnRpY2xlcyBmcm9tIFwicmVhY3QtcGFydGljbGVzLWpzXCI7XG5cblxuXG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuICBjb25zdCBbU3RvcCwgc2V0U3RvcF0gPSB1c2VTdGF0ZShEYXRlLm5vdygpKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb250ZW50LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8UGFydGljbGVzXG4gICAgICAgIHBhcmFtcz17e1xuICAgICAgICAgIHBhcnRpY2xlczoge1xuICAgICAgICAgICAgbnVtYmVyOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiA0MCxcbiAgICAgICAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWVfYXJlYTogNTAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBbXCIjY2MwMDAwXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNhYTAwNDRcIixcbiAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgIGluZGV4OiBcIi0xMFwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHNocmluay10by1maXQ6bm9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0aXRsZT5TY3JlZW5jYXN0IDwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cInF1ZXN0aW9uLmNzc1wiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxUaW1lcjIvPlxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaWduXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxNDBweFwiLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMjBweFwiLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIidSdXNzbyBPbmUnLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhc3QtZmxpY2tlclwiPnNjcmVlbjwvc3Bhbj5jYXN0e1wiIFwifVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxpY2tlclwiPjIwMjAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4taGVhZFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI2MHB4XCIgfX0+XG4gICAgICAgICAgICA8aDE+TG9naW4gdG8gcGxheSA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8R29vZ2xlTG9nIC8+XG4gICAgICAgIDxGYkxvZzIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e0xvZ299XG4gICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCI5MHB4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgZmxvYXQ6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/index.js */"), __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit:no",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("title", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
      columnNumber: 13
    }
  }))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx(_components_Timer2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-2094082217" + " " + "fast-flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "screen"), "cast", " ", __jsx("span", {
    className: "jsx-2094082217" + " " + "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "Login to play "))), __jsx(_components_GoogleLog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }), __jsx(_components_FbLog2__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 95,
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
      lineNumber: 102,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.a58f0cb1097338dc19d4.hot-update.js.map