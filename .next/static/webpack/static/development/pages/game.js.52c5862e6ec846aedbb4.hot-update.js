webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/Answer.js":
/*!******************************!*\
  !*** ./components/Answer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasicTextFields; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Answer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var useStyles = makeStyles(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    }
  };
});
function BasicTextFields() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      answer = _useState[0],
      setAnswer = _useState[1];

  return __jsx("form", {
    className: "ans-div",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmi,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "filled-basic",
    label: "Type your answer here.",
    variant: "filled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=game.js.52c5862e6ec846aedbb4.hot-update.js.map