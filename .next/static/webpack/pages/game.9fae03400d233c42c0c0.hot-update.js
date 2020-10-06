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





var _jsxFileName = "/home/rishav4101/Screencast/components/Answer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 //import TextField from "@material-ui/core/TextField";

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
      width: "85%",
      maxWidth: "400px",
      height: "50px",
      outline: "none",
      border: "none",
      // borderTopRightRadius: "30px",
      // borderBottomLeftRadius: "30px",
      borderRadius: "6px",
      backgroundColor: "rgb(32, 32, 177)",
      boxShadow: "1px 1px 2px rgba(10, 10, 10, 0.9)",
      margin: "10px auto",
      textAlign: "center",
      fontSize: "17px",
      color: "white",
      '&::placeholder': {
        color: "#eee"
      }
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
          lineNumber: 48,
          columnNumber: 7
        }
      }, __jsx("form", {
        className: classes.ansdiv,
        noValidate: true,
        autoComplete: "off",
        onSubmit: this.props.submit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, __jsx("input", {
        className: classes.ans,
        placeholder: "Answer",
        onChange: this.props.change,
        value: this.props.answer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwiYW5zdHlwZSIsImFuc2RpdiIsImFucyIsIm1heFdpZHRoIiwiaGVpZ2h0Iiwib3V0bGluZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiY29sb3IiLCJBbnN3ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJzdWJtaXQiLCJjaGFuZ2UiLCJhbnN3ZXIiLCJDb21wb25lbnQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUM1QkMsUUFBSSxFQUFFO0FBQ0osZUFBUztBQUNQQyxjQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FERDtBQUVQQyxhQUFLLEVBQUU7QUFGQSxPQURMO0FBS0pDLGFBQU8sRUFBRTtBQUNQRCxhQUFLLEVBQUU7QUFEQSxPQUxMO0FBUUpFLFlBQU0sRUFBRTtBQUNORixhQUFLLEVBQUU7QUFERDtBQVJKLEtBRHNCO0FBYzVCRyxPQUFHLEVBQUM7QUFDRkgsV0FBSyxFQUFDLEtBREo7QUFFRkksY0FBUSxFQUFFLE9BRlI7QUFHRkMsWUFBTSxFQUFFLE1BSE47QUFJRkMsYUFBTyxFQUFFLE1BSlA7QUFLRkMsWUFBTSxFQUFFLE1BTE47QUFNRjtBQUNBO0FBQ0FDLGtCQUFZLEVBQUUsS0FSWjtBQVNGQyxxQkFBZSxFQUFFLGtCQVRmO0FBVUZDLGVBQVMsRUFBRSxtQ0FWVDtBQVdGWixZQUFNLEVBQUMsV0FYTDtBQVlGYSxlQUFTLEVBQUUsUUFaVDtBQWFGQyxjQUFRLEVBQUMsTUFiUDtBQWNGQyxXQUFLLEVBQUMsT0FkSjtBQWVGLHdCQUFpQjtBQUNmQSxhQUFLLEVBQUM7QUFEUztBQWZmO0FBZHdCLEdBQVo7QUFBQSxDQUFsQjs7SUFtQ01DLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUFBLFVBQ0NDLE9BREQsR0FDYSxLQUFLRCxLQURsQixDQUNDQyxPQUREO0FBRVAsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTSxpQkFBUyxFQUFFQSxPQUFPLENBQUNkLE1BQXpCO0FBQWlDLGtCQUFVLE1BQTNDO0FBQTRDLG9CQUFZLEVBQUMsS0FBekQ7QUFBK0QsZ0JBQVEsRUFBRSxLQUFLYSxLQUFMLENBQVdFLE1BQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FXRTtBQUFPLGlCQUFTLEVBQUVELE9BQU8sQ0FBQ2IsR0FBMUI7QUFBK0IsbUJBQVcsRUFBQyxRQUEzQztBQUFvRCxnQkFBUSxFQUFFLEtBQUtZLEtBQUwsQ0FBV0csTUFBekU7QUFFRSxhQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXSSxNQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBWEYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZEYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZkYsQ0FERixDQURGO0FBc0JEOzs7O0VBN0JrQkMsK0M7O0FBK0JOQywwSUFBVSxDQUFDMUIsU0FBRCxDQUFWLENBQXNCbUIsTUFBdEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYW1lLjlmYWUwMzQwMGQyMzNjNDJjMGMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuLy9pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgXCImID4gKlwiOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCksXG4gICAgICB3aWR0aDogXCIxMHB4XCIsXG4gICAgfSxcbiAgICBhbnN0eXBlOiB7XG4gICAgICB3aWR0aDogXCI2MDBweFwiXG4gICAgfSxcbiAgICBhbnNkaXY6IHtcbiAgICAgIHdpZHRoOiBcIjYwMHB4XCJcbiAgICB9XG5cbiAgfSxcbiAgYW5zOntcbiAgICB3aWR0aDpcIjg1JVwiLFxuICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXG4gICAgaGVpZ2h0OiBcIjUwcHhcIixcbiAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIC8vIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjMwcHhcIixcbiAgICAvLyBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBcIjMwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigzMiwgMzIsIDE3NylcIixcbiAgICBib3hTaGFkb3c6IFwiMXB4IDFweCAycHggcmdiYSgxMCwgMTAsIDEwLCAwLjkpXCIsXG4gICAgbWFyZ2luOlwiMTBweCBhdXRvXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGZvbnRTaXplOlwiMTdweFwiLFxuICAgIGNvbG9yOlwid2hpdGVcIixcbiAgICAnJjo6cGxhY2Vob2xkZXInOntcbiAgICAgIGNvbG9yOlwiI2VlZVwiXG4gICAgfVxuICB9XG59KTtcblxuY2xhc3MgQW5zd2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuYW5zZGl2fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXt0aGlzLnByb3BzLnN1Ym1pdH0+XG4gICAgICAgICAgey8qIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGlkPVwiZmlsbGVkLWJhc2ljXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVHlwZSB5b3VyIGFuc3dlciBoZXJlLlwiXG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYW5zd2VyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFuc3R5cGV9XG4gICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCI2MDBweFwiLCB3aWR0aDogXCI4MCVcIiwgfX1cbiAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbGFzc2VzLmFuc30gcGxhY2Vob2xkZXI9XCJBbnN3ZXJcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2V9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFuc3dlcn0vPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXModXNlU3R5bGVzKShBbnN3ZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==