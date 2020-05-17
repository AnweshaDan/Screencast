webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/Answer.js":
/*!******************************!*\
  !*** ./components/Answer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");


var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Answer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var useStyles = function useStyles(theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    }
  };
};

var Answer = /*#__PURE__*/function () {
  function Answer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Answer);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Answer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props(),
          classes = _this$props.classes;

      return __jsx("form", {
        className: "ans-div",
        noValidate: true,
        autoComplete: "off",
        onSubmit: handleSubmi,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 5
        }
      }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "filled-basic",
        label: "Type your answer here.",
        variant: "filled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 7
        }
      }));
    }
  }]);

  return Answer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(useStyles)(App));

/***/ })

})
//# sourceMappingURL=game.js.12e26fcfe8799fb7ed30.hot-update.js.map