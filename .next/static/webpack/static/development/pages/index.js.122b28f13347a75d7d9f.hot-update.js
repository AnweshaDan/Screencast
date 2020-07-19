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
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Timer2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Timer(props) {
  var _this = this;

  console.log(props);

  var Completionist = function Completionist() {
    return __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 33
      }
    }, "You are good to go!");
  };

  var renderer = function renderer(_ref) {
    var days = _ref.days,
        hours = _ref.hours,
        minutes = _ref.minutes,
        seconds = _ref.seconds,
        completed = _ref.completed;

    if (completed) {
      return __jsx(Completionist, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 20
        }
      });
    } else {
      return __jsx("span", {
        className: "sign",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        style: {
          backgroundColor: "rgba(0,0,0,0)",
          color: "white",
          padding: "0",
          margin: "0 auto"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
        style: {
          textAlign: "center"
        },
        title: " ",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        style: {
          textAlign: "center",
          fontSize: "17px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 29
        }
      }, __jsx("h1", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 33
        }
      }, props.message, "\xA0\xA0", Object(react_countdown__WEBPACK_IMPORTED_MODULE_1__["zeroPad"])(days, 3), ":", Object(react_countdown__WEBPACK_IMPORTED_MODULE_1__["zeroPad"])(hours), ":", Object(react_countdown__WEBPACK_IMPORTED_MODULE_1__["zeroPad"])(minutes), ":", Object(react_countdown__WEBPACK_IMPORTED_MODULE_1__["zeroPad"])(seconds))))));
    }
  };

  complete;
  return __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: props.start,
    intervalDelay: 1,
    renderer: renderer,
    onComplete: complete,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  });
}

/***/ })

})
//# sourceMappingURL=index.js.122b28f13347a75d7d9f.hot-update.js.map