webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Timer.js":
/*!*****************************!*\
  !*** ./components/Timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown-circle-timer */ "./node_modules/react-countdown-circle-timer/lib/index.js");
/* harmony import */ var react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "/home/anwesha/Desktop/screencast/components/Timer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var minuteSeconds = 60;
var hourSeconds = 3600;
var daySeconds = 86400;
var timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

var renderTime = function renderTime(dimension, time) {
  return __jsx("div", {
    className: "time-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "time",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, time), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, dimension));
};

var getTimeSeconds = function getTimeSeconds(time) {
  return minuteSeconds - time / 1000 | 0;
};

var getTimeMinutes = function getTimeMinutes(time) {
  return time % hourSeconds / minuteSeconds | 0;
};

var getTimeHours = function getTimeHours(time) {
  return time % daySeconds / hourSeconds | 0;
};

var getTimeDays = function getTimeDays(time) {
  return time / daySeconds | 0;
};

function Timer() {
  var stratTime = Date.now(); // use UNIX timestamp in seconds

  var endTime = stratTime + 243248; // use UNIX timestamp in seconds

  var remainingTime = endTime - stratTime;
  var days = Math.ceil(remainingTime / daySeconds);
  var daysDuration = days * daySeconds;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, remainingTime ? __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__["CountdownCircleTimer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, timerProps, {
    colors: [["#7E2E84"]],
    duration: daysDuration,
    initialRemainingTime: remainingTime,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), function (_ref) {
    var elapsedTime = _ref.elapsedTime;
    return renderTime("days", getTimeDays(daysDuration - elapsedTime / 1000));
  }), __jsx(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__["CountdownCircleTimer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, timerProps, {
    colors: [["#D14081"]],
    duration: daySeconds,
    initialRemainingTime: remainingTime % daySeconds,
    onComplete: function onComplete(totalElapsedTime) {
      return [remainingTime - totalElapsedTime > hourSeconds];
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), function (_ref2) {
    var elapsedTime = _ref2.elapsedTime;
    return renderTime("hours", getTimeHours(daySeconds - elapsedTime / 1000));
  }), __jsx(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__["CountdownCircleTimer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, timerProps, {
    colors: [["#EF798A"]],
    duration: hourSeconds,
    initialRemainingTime: remainingTime % hourSeconds,
    onComplete: function onComplete(totalElapsedTime) {
      return [remainingTime - totalElapsedTime > minuteSeconds];
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), function (_ref3) {
    var elapsedTime = _ref3.elapsedTime;
    return renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime / 1000));
  }), __jsx(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__["CountdownCircleTimer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, timerProps, {
    colors: [["#218380"]],
    duration: minuteSeconds,
    initialRemainingTime: remainingTime % minuteSeconds,
    onComplete: function onComplete(totalElapsedTime) {
      return [remainingTime - totalElapsedTime > 0];
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }), function (_ref4) {
    var elapsedTime = _ref4.elapsedTime;
    return renderTime("seconds", getTimeSeconds(elapsedTime));
  })) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.c3b45f85c81001c9e97f.hot-update.js.map