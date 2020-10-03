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
      borderTopRightRadius: "30px",
      borderBottomLeftRadius: "30px",
      backgroundColor: "rgba(60, 3, 65, 0.8)",
      boxShadow: "10px 10px 7px rgba(10, 10, 10, 0.9)",
      margin: "10px auto",
      textAlign: "center",
      color: "white",
      '&::placeholder': {
        color: "#aaa"
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
          lineNumber: 47,
          columnNumber: 7
        }
      }, __jsx("form", {
        className: classes.ansdiv,
        noValidate: true,
        autoComplete: "off",
        onSubmit: this.props.submit2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
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
          lineNumber: 59,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwiYW5zdHlwZSIsImFuc2RpdiIsImFucyIsIm1heFdpZHRoIiwiaGVpZ2h0Iiwib3V0bGluZSIsImJvcmRlciIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInRleHRBbGlnbiIsImNvbG9yIiwiQW5zd2VyIiwicHJvcHMiLCJjbGFzc2VzIiwic3VibWl0MiIsImNoYW5nZSIsImFuc3dlciIsIkNvbXBvbmVudCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzVCQyxRQUFJLEVBQUU7QUFDSixlQUFTO0FBQ1BDLGNBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUREO0FBRVBDLGFBQUssRUFBRTtBQUZBLE9BREw7QUFLSkMsYUFBTyxFQUFFO0FBQ1BELGFBQUssRUFBRTtBQURBLE9BTEw7QUFRSkUsWUFBTSxFQUFFO0FBQ05GLGFBQUssRUFBRTtBQUREO0FBUkosS0FEc0I7QUFjNUJHLE9BQUcsRUFBQztBQUNGSCxXQUFLLEVBQUMsS0FESjtBQUVGSSxjQUFRLEVBQUUsT0FGUjtBQUdGQyxZQUFNLEVBQUUsTUFITjtBQUlGQyxhQUFPLEVBQUUsTUFKUDtBQUtGQyxZQUFNLEVBQUUsTUFMTjtBQU1GQywwQkFBb0IsRUFBRSxNQU5wQjtBQU9GQyw0QkFBc0IsRUFBRSxNQVB0QjtBQVFGQyxxQkFBZSxFQUFFLHNCQVJmO0FBU0ZDLGVBQVMsRUFBRSxxQ0FUVDtBQVVGYixZQUFNLEVBQUMsV0FWTDtBQVdGYyxlQUFTLEVBQUUsUUFYVDtBQVlGQyxXQUFLLEVBQUMsT0FaSjtBQWFGLHdCQUFpQjtBQUNmQSxhQUFLLEVBQUM7QUFEUztBQWJmO0FBZHdCLEdBQVo7QUFBQSxDQUFsQjs7SUFpQ01DLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUFBLFVBQ0NDLE9BREQsR0FDYSxLQUFLRCxLQURsQixDQUNDQyxPQUREO0FBRVAsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTSxpQkFBUyxFQUFFQSxPQUFPLENBQUNkLE1BQXpCO0FBQWlDLGtCQUFVLE1BQTNDO0FBQTRDLG9CQUFZLEVBQUMsS0FBekQ7QUFBK0QsZ0JBQVEsRUFBRSxLQUFLYSxLQUFMLENBQVdFLE9BQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FXRTtBQUFPLGlCQUFTLEVBQUVELE9BQU8sQ0FBQ2IsR0FBMUI7QUFBK0IsbUJBQVcsRUFBQyxRQUEzQztBQUFvRCxnQkFBUSxFQUFFLEtBQUtZLEtBQUwsQ0FBV0csTUFBekU7QUFFRSxhQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXSSxNQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBWEYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZEYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZkYsQ0FERixDQURGO0FBc0JEOzs7O0VBN0JrQkMsK0M7O0FBK0JOQywwSUFBVSxDQUFDMUIsU0FBRCxDQUFWLENBQXNCbUIsTUFBdEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYW1lLjQwNGVlOWFhNTY5YzM1YTMwMzBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgXCImID4gKlwiOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCksXG4gICAgICB3aWR0aDogXCIxMHB4XCIsXG4gICAgfSxcbiAgICBhbnN0eXBlOiB7XG4gICAgICB3aWR0aDogXCI2MDBweFwiXG4gICAgfSxcbiAgICBhbnNkaXY6IHtcbiAgICAgIHdpZHRoOiBcIjYwMHB4XCJcbiAgICB9XG5cbiAgfSxcbiAgYW5zOntcbiAgICB3aWR0aDpcIjkwJVwiLFxuICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXG4gICAgaGVpZ2h0OiBcIjUwcHhcIixcbiAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjMwcHhcIixcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBcIjMwcHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg2MCwgMywgNjUsIDAuOClcIixcbiAgICBib3hTaGFkb3c6IFwiMTBweCAxMHB4IDdweCByZ2JhKDEwLCAxMCwgMTAsIDAuOSlcIixcbiAgICBtYXJnaW46XCIxMHB4IGF1dG9cIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgY29sb3I6XCJ3aGl0ZVwiLFxuICAgICcmOjpwbGFjZWhvbGRlcic6e1xuICAgICAgY29sb3I6XCIjYWFhXCJcbiAgICB9XG4gIH1cbn0pO1xuXG5jbGFzcyBBbnN3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbnNkaXZ9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e3RoaXMucHJvcHMuc3VibWl0Mn0+XG4gICAgICAgICAgey8qIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGlkPVwiZmlsbGVkLWJhc2ljXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVHlwZSB5b3VyIGFuc3dlciBoZXJlLlwiXG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYW5zd2VyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFuc3R5cGV9XG4gICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCI2MDBweFwiLCB3aWR0aDogXCI4MCVcIiwgfX1cbiAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtjbGFzc2VzLmFuc30gcGxhY2Vob2xkZXI9XCJBbnN3ZXJcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2V9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFuc3dlcn0vPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXModXNlU3R5bGVzKShBbnN3ZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==