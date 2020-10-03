webpackHotUpdate_N_E("pages/game",{

/***/ "./components/Answer.js":
/*!******************************!*\
  !*** ./components/Answer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");





var _jsxFileName = "/home/rishav4101/Screencast/components/Answer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var useStyles = function useStyles(theme) {
  return {
    root: {
      "& > *": {
        margin: theme.spacing(0),
        width: "10px"
      },
      anstype: {
        width: "600px"
      },
      ansdiv: {
        width: "600px"
      }
    },
    ans: {
      width: "90%",
      maxWidth: "400px",
      height: "50px",
      outline: "none",
      border: "none",
      borderWidth: "20px",
      backgroundColor: "rgba(3, 3, 65, 0.8)"
    }
  };
};

var Answer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Answer, _Component);

  var _super = _createSuper(Answer);

  function Answer(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Answer);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Answer, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 18
        }
      }, __jsx("form", {
        className: classes.ansdiv,
        noValidate: true,
        autoComplete: "off",
        onSubmit: this.props.submit2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "filled-basic",
        label: "Type your answer here.",
        variant: "filled",
        onChange: this.props.change,
        value: this.props.answer,
        className: classes.anstype,
        style: {
          maxWidth: "600px",
          width: "80%"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }), " ", __jsx("input", {
        className: classes.ans,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 16
        }
      }), " ", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 16
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      })), " ");
    }
  }]);

  return Answer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(useStyles)(Answer));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwiYW5zdHlwZSIsImFuc2RpdiIsImFucyIsIm1heFdpZHRoIiwiaGVpZ2h0Iiwib3V0bGluZSIsImJvcmRlciIsImJvcmRlcldpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiQW5zd2VyIiwicHJvcHMiLCJjbGFzc2VzIiwic3VibWl0MiIsImNoYW5nZSIsImFuc3dlciIsIkNvbXBvbmVudCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzFCQyxRQUFJLEVBQUU7QUFDRixlQUFTO0FBQ0xDLGNBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQURIO0FBRUxDLGFBQUssRUFBRTtBQUZGLE9BRFA7QUFLRkMsYUFBTyxFQUFFO0FBQ0xELGFBQUssRUFBRTtBQURGLE9BTFA7QUFRRkUsWUFBTSxFQUFFO0FBQ0pGLGFBQUssRUFBRTtBQURIO0FBUk4sS0FEb0I7QUFjMUJHLE9BQUcsRUFBRTtBQUNESCxXQUFLLEVBQUUsS0FETjtBQUVESSxjQUFRLEVBQUUsT0FGVDtBQUdEQyxZQUFNLEVBQUUsTUFIUDtBQUlEQyxhQUFPLEVBQUUsTUFKUjtBQUtEQyxZQUFNLEVBQUUsTUFMUDtBQU1EQyxpQkFBVyxFQUFFLE1BTlo7QUFPREMscUJBQWUsRUFBRTtBQVBoQjtBQWRxQixHQUFaO0FBQUEsQ0FBbEI7O0lBeUJNQyxNOzs7OztBQUNGLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7Ozs7NkJBRVE7QUFBQSxVQUNHQyxPQURILEdBQ2UsS0FBS0QsS0FEcEIsQ0FDR0MsT0FESDtBQUVMLGFBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVMO0FBQ0ssaUJBQVMsRUFBS0EsT0FBTyxDQUFDVixNQUQzQjtBQUVBLGtCQUFVLE1BRlY7QUFFVyxvQkFBWSxFQUFHLEtBRjFCO0FBR0EsZ0JBQVEsRUFBSyxLQUFLUyxLQUFMLENBQVdFLE9BSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJQSxNQUNBLG1FQURBO0FBQ1UsVUFBRSxFQUFHLGNBRGY7QUFFQSxhQUFLLEVBQUcsd0JBRlI7QUFHQSxlQUFPLEVBQUcsUUFIVjtBQUlBLGdCQUFRLEVBQUssS0FBS0YsS0FBTCxDQUFXRyxNQUp4QjtBQU1BLGFBQUssRUFBSyxLQUFLSCxLQUFMLENBQVdJLE1BTnJCO0FBT0EsaUJBQVMsRUFBS0gsT0FBTyxDQUFDWCxPQVB0QjtBQVFBLGFBQUssRUFDRDtBQUFFRyxrQkFBUSxFQUFFLE9BQVo7QUFBcUJKLGVBQUssRUFBRTtBQUE1QixTQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFKQSxPQWNHO0FBQ0csaUJBQVMsRUFBS1ksT0FBTyxDQUFDVCxHQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZEgsT0FnQkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWhCSCxFQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBbEJBLENBRkssTUFBVDtBQTJCSDs7OztFQWxDZ0JhLCtDOztBQW9DTkMsMElBQVUsQ0FBQ3RCLFNBQUQsQ0FBVixDQUFzQmUsTUFBdEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYW1lLjBhYzNkYWViMjBiMTMxZGJhYjc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgXCImID4gKlwiOiB7XG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCksXG4gICAgICAgICAgICB3aWR0aDogXCIxMHB4XCIsXG4gICAgICAgIH0sXG4gICAgICAgIGFuc3R5cGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjYwMHB4XCJcbiAgICAgICAgfSxcbiAgICAgICAgYW5zZGl2OiB7XG4gICAgICAgICAgICB3aWR0aDogXCI2MDBweFwiXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgYW5zOiB7XG4gICAgICAgIHdpZHRoOiBcIjkwJVwiLFxuICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6IFwiMjBweFwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgzLCAzLCA2NSwgMC44KVwiXG4gICAgfVxufSk7XG5cbmNsYXNzIEFuc3dlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKCA8XG4gICAgICAgICAgICBkaXYgPlxuICAgICAgICAgICAgPFxuICAgICAgICAgICAgZm9ybSBjbGFzc05hbWUgPSB7IGNsYXNzZXMuYW5zZGl2IH1cbiAgICAgICAgICAgIG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlID0gXCJvZmZcIlxuICAgICAgICAgICAgb25TdWJtaXQgPSB7IHRoaXMucHJvcHMuc3VibWl0MiB9ID5cbiAgICAgICAgICAgIDxcbiAgICAgICAgICAgIFRleHRGaWVsZCBpZCA9IFwiZmlsbGVkLWJhc2ljXCJcbiAgICAgICAgICAgIGxhYmVsID0gXCJUeXBlIHlvdXIgYW5zd2VyIGhlcmUuXCJcbiAgICAgICAgICAgIHZhcmlhbnQgPSBcImZpbGxlZFwiXG4gICAgICAgICAgICBvbkNoYW5nZSA9IHsgdGhpcy5wcm9wcy5jaGFuZ2UgfVxuXG4gICAgICAgICAgICB2YWx1ZSA9IHsgdGhpcy5wcm9wcy5hbnN3ZXIgfVxuICAgICAgICAgICAgY2xhc3NOYW1lID0geyBjbGFzc2VzLmFuc3R5cGUgfVxuICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgeyBtYXhXaWR0aDogXCI2MDBweFwiLCB3aWR0aDogXCI4MCVcIiwgfSB9XG4gICAgICAgICAgICAvPiA8XG4gICAgICAgICAgICBpbnB1dCBjbGFzc05hbWUgPSB7IGNsYXNzZXMuYW5zIH1cbiAgICAgICAgICAgIC8+IDxcbiAgICAgICAgICAgIGJyIC8gPlxuICAgICAgICAgICAgPFxuICAgICAgICAgICAgYnIgLyA+XG5cbiAgICAgICAgICAgIDxcbiAgICAgICAgICAgIC9mb3JtPiA8XG4gICAgICAgICAgICAvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXModXNlU3R5bGVzKShBbnN3ZXIpOyJdLCJzb3VyY2VSb290IjoiIn0=