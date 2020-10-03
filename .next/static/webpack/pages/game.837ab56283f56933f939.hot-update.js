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
      borderRadius: "20px",
      backgroundColor: "rgba(3, 3, 65, 0.8)",
      margin: "10px auto",
      textAlign: "center",
      color: "white"
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
          lineNumber: 42,
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
          lineNumber: 43,
          columnNumber: 9
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
          columnNumber: 11
        }
      }), __jsx("input", {
        className: classes.ans,
        placeholder: "Answer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbnN3ZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwiYW5zdHlwZSIsImFuc2RpdiIsImFucyIsIm1heFdpZHRoIiwiaGVpZ2h0Iiwib3V0bGluZSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsImNvbG9yIiwiQW5zd2VyIiwicHJvcHMiLCJjbGFzc2VzIiwic3VibWl0MiIsImNoYW5nZSIsImFuc3dlciIsIkNvbXBvbmVudCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzVCQyxRQUFJLEVBQUU7QUFDSixlQUFTO0FBQ1BDLGNBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUREO0FBRVBDLGFBQUssRUFBRTtBQUZBLE9BREw7QUFLSkMsYUFBTyxFQUFFO0FBQ1BELGFBQUssRUFBRTtBQURBLE9BTEw7QUFRSkUsWUFBTSxFQUFFO0FBQ05GLGFBQUssRUFBRTtBQUREO0FBUkosS0FEc0I7QUFjNUJHLE9BQUcsRUFBQztBQUNGSCxXQUFLLEVBQUMsS0FESjtBQUVGSSxjQUFRLEVBQUUsT0FGUjtBQUdGQyxZQUFNLEVBQUUsTUFITjtBQUlGQyxhQUFPLEVBQUUsTUFKUDtBQUtGQyxZQUFNLEVBQUUsTUFMTjtBQU1GQyxrQkFBWSxFQUFFLE1BTlo7QUFPRkMscUJBQWUsRUFBRSxxQkFQZjtBQVFGWCxZQUFNLEVBQUMsV0FSTDtBQVNGWSxlQUFTLEVBQUUsUUFUVDtBQVVGQyxXQUFLLEVBQUM7QUFWSjtBQWR3QixHQUFaO0FBQUEsQ0FBbEI7O0lBNEJNQyxNOzs7OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFBQSxVQUNDQyxPQURELEdBQ2EsS0FBS0QsS0FEbEIsQ0FDQ0MsT0FERDtBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBRUEsT0FBTyxDQUFDWixNQUF6QjtBQUFpQyxrQkFBVSxNQUEzQztBQUE0QyxvQkFBWSxFQUFDLEtBQXpEO0FBQStELGdCQUFRLEVBQUUsS0FBS1csS0FBTCxDQUFXRSxPQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxtRUFBRDtBQUNFLFVBQUUsRUFBQyxjQURMO0FBRUUsYUFBSyxFQUFDLHdCQUZSO0FBR0UsZUFBTyxFQUFDLFFBSFY7QUFJRSxnQkFBUSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0csTUFKdkI7QUFNRSxhQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXSSxNQU5wQjtBQU9FLGlCQUFTLEVBQUVILE9BQU8sQ0FBQ2IsT0FQckI7QUFRRSxhQUFLLEVBQUU7QUFBRUcsa0JBQVEsRUFBRSxPQUFaO0FBQXFCSixlQUFLLEVBQUU7QUFBNUIsU0FSVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFXRTtBQUFPLGlCQUFTLEVBQUVjLE9BQU8sQ0FBQ1gsR0FBMUI7QUFBK0IsbUJBQVcsRUFBQyxRQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBWEYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBWkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBYkYsQ0FERixDQURGO0FBb0JEOzs7O0VBM0JrQmUsK0M7O0FBNkJOQywwSUFBVSxDQUFDeEIsU0FBRCxDQUFWLENBQXNCaUIsTUFBdEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYW1lLjgzN2FiNTYyODNmNTY5MzNmOTM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgXCImID4gKlwiOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCksXG4gICAgICB3aWR0aDogXCIxMHB4XCIsXG4gICAgfSxcbiAgICBhbnN0eXBlOiB7XG4gICAgICB3aWR0aDogXCI2MDBweFwiXG4gICAgfSxcbiAgICBhbnNkaXY6IHtcbiAgICAgIHdpZHRoOiBcIjYwMHB4XCJcbiAgICB9XG5cbiAgfSxcbiAgYW5zOntcbiAgICB3aWR0aDpcIjkwJVwiLFxuICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXG4gICAgaGVpZ2h0OiBcIjUwcHhcIixcbiAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMywgMywgNjUsIDAuOClcIixcbiAgICBtYXJnaW46XCIxMHB4IGF1dG9cIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgY29sb3I6XCJ3aGl0ZVwiXG4gIH1cbn0pO1xuXG5jbGFzcyBBbnN3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbnNkaXZ9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e3RoaXMucHJvcHMuc3VibWl0Mn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgaWQ9XCJmaWxsZWQtYmFzaWNcIlxuICAgICAgICAgICAgbGFiZWw9XCJUeXBlIHlvdXIgYW5zd2VyIGhlcmUuXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5hbnN3ZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYW5zdHlwZX1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjYwMHB4XCIsIHdpZHRoOiBcIjgwJVwiLCB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbnN9IHBsYWNlaG9sZGVyPVwiQW5zd2VyXCIvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXModXNlU3R5bGVzKShBbnN3ZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==