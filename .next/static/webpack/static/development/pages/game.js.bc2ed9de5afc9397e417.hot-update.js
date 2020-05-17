webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/Submit.js":
/*!******************************!*\
  !*** ./components/Submit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");

var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Submit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Submit() {
  var _useState = useState(""),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      answer = _useState2[0],
      setAnswer = _useState2[1];

  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "btnSubmit",
    variant: "contained",
    color: "primary",
    disableElevation: true,
    href: "/",
    onClick: function onClick(e) {
      return setAnswer(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "Submit");
}

/* harmony default export */ __webpack_exports__["default"] = (Submit);

/***/ })

})
//# sourceMappingURL=game.js.bc2ed9de5afc9397e417.hot-update.js.map