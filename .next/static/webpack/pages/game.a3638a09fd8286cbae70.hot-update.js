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
      width: "85%",
      maxWidth: "400px",
      height: "50px",
      outline: "none",
      border: "none",
      borderTopRightRadius: "30px",
      borderBottomLeftRadius: "30px",
      backgroundColor: "#ff2483",
      boxShadow: "5px 5px 7px rgba(10, 10, 10, 0.9)",
      margin: "10px auto",
      textAlign: "center",
      fontSize: "17px",
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
          lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwiYW5zdHlwZSIsImFuc2RpdiIsImFucyIsIm1heFdpZHRoIiwiaGVpZ2h0Iiwib3V0bGluZSIsImJvcmRlciIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiY29sb3IiLCJBbnN3ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJzdWJtaXQyIiwiY2hhbmdlIiwiYW5zd2VyIiwiQ29tcG9uZW50Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDNUJDLFFBQUksRUFBRTtBQUNKLGVBQVM7QUFDUEMsY0FBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUEMsYUFBSyxFQUFFO0FBRkEsT0FETDtBQUtKQyxhQUFPLEVBQUU7QUFDUEQsYUFBSyxFQUFFO0FBREEsT0FMTDtBQVFKRSxZQUFNLEVBQUU7QUFDTkYsYUFBSyxFQUFFO0FBREQ7QUFSSixLQURzQjtBQWM1QkcsT0FBRyxFQUFDO0FBQ0ZILFdBQUssRUFBQyxLQURKO0FBRUZJLGNBQVEsRUFBRSxPQUZSO0FBR0ZDLFlBQU0sRUFBRSxNQUhOO0FBSUZDLGFBQU8sRUFBRSxNQUpQO0FBS0ZDLFlBQU0sRUFBRSxNQUxOO0FBTUZDLDBCQUFvQixFQUFFLE1BTnBCO0FBT0ZDLDRCQUFzQixFQUFFLE1BUHRCO0FBUUZDLHFCQUFlLEVBQUUsU0FSZjtBQVNGQyxlQUFTLEVBQUUsbUNBVFQ7QUFVRmIsWUFBTSxFQUFDLFdBVkw7QUFXRmMsZUFBUyxFQUFFLFFBWFQ7QUFZRkMsY0FBUSxFQUFDLE1BWlA7QUFhRkMsV0FBSyxFQUFDLE9BYko7QUFjRix3QkFBaUI7QUFDZkEsYUFBSyxFQUFDO0FBRFM7QUFkZjtBQWR3QixHQUFaO0FBQUEsQ0FBbEI7O0lBa0NNQyxNOzs7OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFBQSxVQUNDQyxPQURELEdBQ2EsS0FBS0QsS0FEbEIsQ0FDQ0MsT0FERDtBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBRUEsT0FBTyxDQUFDZixNQUF6QjtBQUFpQyxrQkFBVSxNQUEzQztBQUE0QyxvQkFBWSxFQUFDLEtBQXpEO0FBQStELGdCQUFRLEVBQUUsS0FBS2MsS0FBTCxDQUFXRSxPQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBV0U7QUFBTyxpQkFBUyxFQUFFRCxPQUFPLENBQUNkLEdBQTFCO0FBQStCLG1CQUFXLEVBQUMsUUFBM0M7QUFBb0QsZ0JBQVEsRUFBRSxLQUFLYSxLQUFMLENBQVdHLE1BQXpFO0FBRUUsYUFBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV0ksTUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVhGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWRGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWZGLENBREYsQ0FERjtBQXNCRDs7OztFQTdCa0JDLCtDOztBQStCTkMsMElBQVUsQ0FBQzNCLFNBQUQsQ0FBVixDQUFzQm9CLE1BQXRCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZS5hMzYzOGEwOWZkODI4NmNiYWU3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIFwiJiA+ICpcIjoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDApLFxuICAgICAgd2lkdGg6IFwiMTBweFwiLFxuICAgIH0sXG4gICAgYW5zdHlwZToge1xuICAgICAgd2lkdGg6IFwiNjAwcHhcIlxuICAgIH0sXG4gICAgYW5zZGl2OiB7XG4gICAgICB3aWR0aDogXCI2MDBweFwiXG4gICAgfVxuXG4gIH0sXG4gIGFuczp7XG4gICAgd2lkdGg6XCI4NSVcIixcbiAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxuICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCIzMHB4XCIsXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogXCIzMHB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZjI0ODNcIixcbiAgICBib3hTaGFkb3c6IFwiNXB4IDVweCA3cHggcmdiYSgxMCwgMTAsIDEwLCAwLjkpXCIsXG4gICAgbWFyZ2luOlwiMTBweCBhdXRvXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGZvbnRTaXplOlwiMTdweFwiLFxuICAgIGNvbG9yOlwid2hpdGVcIixcbiAgICAnJjo6cGxhY2Vob2xkZXInOntcbiAgICAgIGNvbG9yOlwiI2FhYVwiXG4gICAgfVxuICB9XG59KTtcblxuY2xhc3MgQW5zd2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuYW5zZGl2fSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXt0aGlzLnByb3BzLnN1Ym1pdDJ9PlxuICAgICAgICAgIHsvKiA8VGV4dEZpZWxkXG4gICAgICAgICAgICBpZD1cImZpbGxlZC1iYXNpY1wiXG4gICAgICAgICAgICBsYWJlbD1cIlR5cGUgeW91ciBhbnN3ZXIgaGVyZS5cIlxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2V9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmFuc3dlcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbnN0eXBlfVxuICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNjAwcHhcIiwgd2lkdGg6IFwiODAlXCIsIH19XG4gICAgICAgICAgLz4gKi99XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbnN9IHBsYWNlaG9sZGVyPVwiQW5zd2VyXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5hbnN3ZXJ9Lz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHVzZVN0eWxlcykoQW5zd2VyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=