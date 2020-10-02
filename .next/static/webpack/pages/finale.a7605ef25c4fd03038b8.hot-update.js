webpackHotUpdate_N_E("pages/finale",{

/***/ "./pages/finale.js":
/*!*************************!*\
  !*** ./pages/finale.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/home/rishav4101/Screencast/pages/finale.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function finale() {
  var goback = function goback() {
    localStorage.removeItem('email');
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 14
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      textAlign: "center",
      fontSize: "22px",
      fontFamily: "'Russo One', sans-serif",
      margin: "190px auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, " Congratulations "), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 63
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, " You have completed all Questions "), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 80
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, " More exciting ones on the way! "), " ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 78
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), " ", __jsx("div", {
    style: {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "btnSubmit",
    variant: "contained",
    color: "primary",
    elevation: 3,
    onClick: goback,
    style: {
      backgroundColor: '#000044',
      border: "0px solid white",
      height: "40px",
      width: "100px",
      borderRadius: "7px",
      display: 'block',
      margin: '0 auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Logout / Go back "), " "), " "), " ", __jsx("div", {
    style: {
      paddingTop: '220px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (finale);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmluYWxlLmpzIl0sIm5hbWVzIjpbImZpbmFsZSIsImdvYmFjayIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFFZCxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCQyxnQkFBWSxDQUFDQyxVQUFiLENBQXdCLE9BQXhCO0FBQ0FDLHNEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0gsR0FIRDs7QUFLQSxTQUFTLE1BQ0wsMERBREs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQTtBQUNJLFNBQUssRUFDTDtBQUNJQyxlQUFTLEVBQUUsUUFEZjtBQUVJQyxjQUFRLEVBQUUsTUFGZDtBQUdJQyxnQkFBVSxFQUFFLHlCQUhoQjtBQUlJQyxZQUFNLEVBQUU7QUFKWixLQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTQTtBQUNLLGFBQVMsRUFBRyxTQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVRBLE9BVXNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWdEQsRUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkEsRUFjQTtBQUNLLGFBQVMsRUFBRyxTQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQWRBLE9BZXVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmdkUsRUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCQSxFQW1CQTtBQUNLLGFBQVMsRUFBRyxTQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQW5CQSxPQW9CcUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCckUsRUFzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCQSxFQXdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEJBLENBRkEsT0E2Qk07QUFDRixTQUFLLEVBQ0wsRUFGRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR04sTUFDQSxnRUFEQTtBQUNPLGFBQVMsRUFBRyxXQURuQjtBQUVBLFdBQU8sRUFBRyxXQUZWO0FBR0EsU0FBSyxFQUFHLFNBSFI7QUFLQSxhQUFTLEVBQUssQ0FMZDtBQU1BLFdBQU8sRUFBS1IsTUFOWjtBQU9BLFNBQUssRUFDRDtBQUFFUyxxQkFBZSxFQUFFLFNBQW5CO0FBQThCQyxZQUFNLEVBQUUsaUJBQXRDO0FBQXlEQyxZQUFNLEVBQUUsTUFBakU7QUFBeUVDLFdBQUssRUFBRSxPQUFoRjtBQUF5RkMsa0JBQVksRUFBRSxLQUF2RztBQUE4R0MsYUFBTyxFQUFFLE9BQXZIO0FBQWdJTixZQUFNLEVBQUU7QUFBeEksS0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhNLE1BN0JOLE1BRkssT0E4Q0M7QUFDRixTQUFLLEVBQ0w7QUFBRU8sZ0JBQVUsRUFBRTtBQUFkLEtBRkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlDRCxDQUFUO0FBd0RIOztBQUVjaEIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmluYWxlLmE3NjA1ZWYyNWM0ZmQwMzAzOGI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5mdW5jdGlvbiBmaW5hbGUoKSB7XG5cbiAgICBjb25zdCBnb2JhY2sgPSAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdlbWFpbCcpO1xuICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgIH1cblxuICAgIHJldHVybiAoIDxcbiAgICAgICAgTGF5b3V0ID5cbiAgICAgICAgPFxuICAgICAgICBkaXYgPlxuICAgICAgICA8XG4gICAgICAgIGRpdiBzdHlsZSA9IHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjJweFwiLFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiJ1J1c3NvIE9uZScsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTkwcHggYXV0b1wiLFxuICAgICAgICAgICAgfVxuICAgICAgICB9ID5cbiAgICAgICAgPFxuICAgICAgICBzcGFuIGNsYXNzTmFtZSA9IFwiZmxpY2tlclwiID4gQ29uZ3JhdHVsYXRpb25zIDwgL3NwYW4+IDxcbiAgICAgICAgYnIgLyA+XG4gICAgICAgIDxcbiAgICAgICAgYnIgLyA+XG4gICAgICAgIDxcbiAgICAgICAgc3BhbiBjbGFzc05hbWUgPSBcImZsaWNrZXJcIiA+IFlvdSBoYXZlIGNvbXBsZXRlZCBhbGwgUXVlc3Rpb25zIDwgL3NwYW4+IDxcbiAgICAgICAgYnIgLyA+XG4gICAgICAgIDxcbiAgICAgICAgYnIgLyA+XG4gICAgICAgIDxcbiAgICAgICAgc3BhbiBjbGFzc05hbWUgPSBcImZsaWNrZXJcIiA+IE1vcmUgZXhjaXRpbmcgb25lcyBvbiB0aGUgd2F5ISA8IC9zcGFuPiA8XG4gICAgICAgIGJyIC8gPlxuICAgICAgICA8XG4gICAgICAgIGJyIC8gPlxuICAgICAgICA8XG4gICAgICAgIGJyIC8gPlxuICAgICAgICA8XG4gICAgICAgIC9kaXY+IDxcbiAgICAgICAgZGl2IHN0eWxlID0ge1xuICAgICAgICAgICAge30gfSA+XG4gICAgICAgIDxcbiAgICAgICAgQnV0dG9uIGNsYXNzTmFtZSA9IFwiYnRuU3VibWl0XCJcbiAgICAgICAgdmFyaWFudCA9IFwiY29udGFpbmVkXCJcbiAgICAgICAgY29sb3IgPSBcInByaW1hcnlcIlxuXG4gICAgICAgIGVsZXZhdGlvbiA9IHsgMyB9XG4gICAgICAgIG9uQ2xpY2sgPSB7IGdvYmFjayB9XG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgeyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDQ0JywgYm9yZGVyOiBcIjBweCBzb2xpZCB3aGl0ZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCIxMDBweFwiLCBib3JkZXJSYWRpdXM6IFwiN3B4XCIsIGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbjogJzAgYXV0bycsIH0gfSA+XG4gICAgICAgIExvZ291dCAvIEdvIGJhY2sgPFxuICAgICAgICAvQnV0dG9uPiA8XG4gICAgICAgIC9kaXY+IDxcbiAgICAgICAgL2Rpdj4gPFxuICAgICAgICBkaXYgc3R5bGUgPSB7XG4gICAgICAgICAgICB7IHBhZGRpbmdUb3A6ICcyMjBweCcgfSB9ID5cblxuICAgICAgICA8XG4gICAgICAgIC9kaXY+XG5cbiAgICAgICAgPFxuICAgICAgICAvTGF5b3V0PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmFsZTsiXSwic291cmNlUm9vdCI6IiJ9