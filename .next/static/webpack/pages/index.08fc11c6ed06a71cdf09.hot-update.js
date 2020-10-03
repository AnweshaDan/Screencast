webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_GoogleLog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GoogleLog */ "./components/GoogleLog.js");
/* harmony import */ var _components_FbLog2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FbLog2 */ "./components/FbLog2.js");
/* harmony import */ var _components_Timer2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Timer2 */ "./components/Timer2.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _env_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../env.json */ "./env.json");
var _env_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../env.json */ "./env.json", 1);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
var _jsxFileName = "/home/rishav4101/Screencast/pages/index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Date.now()),
      end = _useState[0],
      setEnd = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Date.now() + 2000),
      start = _useState2[0],
      setStart = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      day = _useState3[0],
      setDay = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loading = _useState4[0],
      setloading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('index mounted');
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_env_json__WEBPACK_IMPORTED_MODULE_6__.api + "/api/status").then(function (response) {
      console.log(response);
      if (response.data.status == 404) next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/error');
      var temp = new Date(response.data.start_time);
      setStart(temp.getTime() + temp.getTimezoneOffset() * 60000);
      var temp2 = new Date(response.data.end_time);
      setEnd(temp2.getTime() + temp2.getTimezoneOffset() * 60000);
      setDay(response.data.current_day);
      localStorage.setItem("start", start);
      localStorage.setItem("end", end);
      localStorage.setItem("day", day); //if(localStorage.getItem('email'))

      console.log(localStorage.getItem('end'));
      console.log(localStorage.getItem('day') == 3 && localStorage.getItem('end') < Date.now());
      console.log(localStorage.getItem('email') && localStorage.getItem('start') < Date.now() && end > Date.now());
      if (localStorage.getItem('day') == 3 && localStorage.getItem('end') < Date.now()) next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/finale');

      if (localStorage.getItem('email') && localStorage.getItem('start') < Date.now() && localStorage.getItem('end') > Date.now()) {
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/game'); //console.log(Date.now()+"    "+localStorage.getItem('start'))
        //Router.push('/game')
      } //if(localStorage.getItem('end') < Date.now()) Router.push('/finale2');

    }) // .then(() => {
    //   setloading(true)
    // })
    ["catch"](function (err) {
      console.log(err);
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/error');
    });
    setloading(true);
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 1
    }
  }, loading === true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      textAlign: "center",
      backgroundColor: "rgba(3, 3, 65, 0.5)",
      boxShadow: "5px 5px 7px rgba(10, 10, 10, 0.9)",
      width: "92%",
      maxWidth: "600px",
      borderTopLeftRadius: "50px",
      borderBottomRightRadius: "50px",
      margin: "0 auto",
      marginTop: "100px",
      paddingTop: "30px",
      paddingBottom: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(_components_Timer2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    start: start,
    end: end,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "sign",
    style: {
      marginTop: "40px",
      marginBottom: "20px",
      fontFamily: "'Russo One', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "fast-flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "screen"), "cast", " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "2020 ")), __jsx("div", {
    className: "login-head",
    style: {
      marginBottom: "60px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "Ready to play ?"))), __jsx("div", {
    className: "rowC",
    style: {
      margin: "0 auto",
      paddingBottom: '40px',
      textAlign: "center",
      width: "100%",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(_components_GoogleLog__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }), __jsx(_components_FbLog2__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }))), __jsx("div", {
    className: "footerBuff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  })) : __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 3
    }
  }));
}

_s(index, "G3l+5vfKwQzD7oBFHJEnyGX6/38=");

/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VTdGF0ZSIsIkRhdGUiLCJub3ciLCJlbmQiLCJzZXRFbmQiLCJzdGFydCIsInNldFN0YXJ0IiwiZGF5Iiwic2V0RGF5IiwibG9hZGluZyIsInNldGxvYWRpbmciLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwiYXBpIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiUm91dGVyIiwicHVzaCIsInRlbXAiLCJzdGFydF90aW1lIiwiZ2V0VGltZSIsImdldFRpbWV6b25lT2Zmc2V0IiwidGVtcDIiLCJlbmRfdGltZSIsImN1cnJlbnRfZGF5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJlcnIiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJ3aWR0aCIsIm1heFdpZHRoIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwibWFyZ2luIiwibWFyZ2luVG9wIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Cb3R0b20iLCJmb250RmFtaWx5IiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUVPQyxzREFBUSxDQUFDQyxJQUFJLENBQUNDLEdBQUwsRUFBRCxDQUZmO0FBQUEsTUFFUkMsR0FGUTtBQUFBLE1BRUhDLE1BRkc7O0FBQUEsbUJBR1dKLHNEQUFRLENBQUNDLElBQUksQ0FBQ0MsR0FBTCxLQUFXLElBQVosQ0FIbkI7QUFBQSxNQUdSRyxLQUhRO0FBQUEsTUFHREMsUUFIQzs7QUFBQSxtQkFJT04sc0RB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LENBREYsRUFjRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLFNBQUssRUFBRTtBQUFFRCxrQkFBWSxFQUFFO0FBQWhCLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBZEYsQ0FIRixFQXNCRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQXNCLFNBQUssRUFBRTtBQUFFSixZQUFNLEVBQUUsUUFBVjtBQUFvQkcsbUJBQWEsRUFBRSxNQUFuQztBQUEyQ1YsZUFBUyxFQUFFLFFBQXREO0FBQWdFRyxXQUFLLEVBQUUsTUFBdkU7QUFBK0VVLG9CQUFjLEVBQUU7QUFBL0YsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0F0QkYsQ0FESixFQTRCSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QkosQ0FERSxHQWlDQSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQ0YsQ0FERTtBQXVDRDs7R0EzRlFoRCxLOztBQTZGTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDhmYzExYzZlZDA2YTcxY2RmMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgR29vZ2xlTG9nIGZyb20gXCIuLi9jb21wb25lbnRzL0dvb2dsZUxvZ1wiO1xuaW1wb3J0IEZiTG9nMiBmcm9tIFwiLi4vY29tcG9uZW50cy9GYkxvZzJcIjtcbmltcG9ydCBUaW1lcjIgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGltZXIyXCJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9lbnYuanNvbic7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG5cbiAgY29uc3QgW2VuZCwgc2V0RW5kXSA9IHVzZVN0YXRlKERhdGUubm93KCkpO1xuICBjb25zdCBbc3RhcnQsIHNldFN0YXJ0XSA9IHVzZVN0YXRlKERhdGUubm93KCkrMjAwMCk7XG4gIGNvbnN0IFtkYXksIHNldERheV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpbmRleCBtb3VudGVkJylcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KGRhdGEuYXBpK1wiL2FwaS9zdGF0dXNcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3RhdHVzPT00MDQpXG4gICAgICAgIFJvdXRlci5wdXNoKCcvZXJyb3InKVxuICAgICAgICB2YXIgdGVtcD1uZXcgRGF0ZShyZXNwb25zZS5kYXRhLnN0YXJ0X3RpbWUpO1xuICAgICAgICBzZXRTdGFydCh0ZW1wLmdldFRpbWUoKSArICh0ZW1wLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpOyAgICAgICAgXG4gICAgICAgIGxldCB0ZW1wMiA9IG5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuZW5kX3RpbWUpO1xuICAgICAgICBzZXRFbmQodGVtcDIuZ2V0VGltZSgpICsgKHRlbXAyLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xuICAgICAgICBzZXREYXkocmVzcG9uc2UuZGF0YS5jdXJyZW50X2RheSlcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXJ0XCIsIHN0YXJ0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbmRcIiwgZW5kKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXlcIixkYXkpO1xuICAgICAgICAvL2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpKVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykgKVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF5Jyk9PTMgJiYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKSA8IERhdGUubm93KCkpIClcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJykgJiYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpIDwgRGF0ZS5ub3coKSkgJiYgZW5kID5EYXRlLm5vdygpKVxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF5Jyk9PTMgJiYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKSA8IERhdGUubm93KCkpIClcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9maW5hbGUnKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKSAmJiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0JykgPCBEYXRlLm5vdygpKSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykgPkRhdGUubm93KCkpXG4gICAgICAgIHtcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2dhbWUnKVxuICAgICAgICAgIC8vY29uc29sZS5sb2coRGF0ZS5ub3coKStcIiAgICBcIitsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhcnQnKSlcbiAgICAgICAgICAvL1JvdXRlci5wdXNoKCcvZ2FtZScpXG4gICAgICAgIH1cbiAgICAgICAgLy9pZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykgPCBEYXRlLm5vdygpKSBSb3V0ZXIucHVzaCgnL2ZpbmFsZTInKTtcbiAgICAgIH0pXG4gICAgICAvLyAudGhlbigoKSA9PiB7XG4gICAgICAvLyAgIHNldGxvYWRpbmcodHJ1ZSlcbiAgICAgIC8vIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yJylcbiAgICAgIH0pO1xuICAgICAgc2V0bG9hZGluZyh0cnVlKVxuICAgICAgXG4gIH0pXG5cbiAgcmV0dXJuIChcbjxMYXlvdXQ+XG5cbnsgKGxvYWRpbmcgPT09IHRydWUpID9cbjw+XG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsICBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDMsIDMsIDY1LCAwLjUpXCIsYm94U2hhZG93OiBcIjVweCA1cHggN3B4IHJnYmEoMTAsIDEwLCAxMCwgMC45KVwiLCB3aWR0aDpcIjkyJVwiLCBtYXhXaWR0aDpcIjYwMHB4XCIsIGJvcmRlclRvcExlZnRSYWRpdXM6XCI1MHB4XCIsYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6XCI1MHB4XCIsIG1hcmdpbjpcIjAgYXV0b1wiLCBtYXJnaW5Ub3A6XCIxMDBweFwiLCBwYWRkaW5nVG9wOlwiMzBweFwiLCBwYWRkaW5nQm90dG9tOlwiMHB4XCJ9fT5cbiAgICAgIDxUaW1lcjIgc3RhcnQ9e3N0YXJ0fSBlbmQ9e2VuZH0gLz5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNpZ25cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNDBweFwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiJ1J1c3NvIE9uZScsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzdC1mbGlja2VyXCI+c2NyZWVuPC9zcGFuPmNhc3R7XCIgXCJ9XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGlja2VyXCI+MjAyMCA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4taGVhZFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI2MHB4XCIgfX0+XG4gICAgICAgICAgPGgxPlJlYWR5IHRvIHBsYXkgPzwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dDJyBzdHlsZT17eyBtYXJnaW46IFwiMCBhdXRvXCIsIHBhZGRpbmdCb3R0b206ICc0MHB4JywgdGV4dEFsaWduOiBcImNlbnRlclwiLCB3aWR0aDogXCIxMDAlXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxuICAgICAgICA8R29vZ2xlTG9nIC8+XG4gICAgICAgIDxGYkxvZzIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJCdWZmJz5cbiAgICAgIFxuICAgIDwvZGl2PlxuICAgIDwvPlxuOiA8TG9hZGVyLz4gfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=