webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/AnsAlert.js":
/*!********************************!*\
  !*** ./components/AnsAlert.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/home/anwesha/Desktop/screencast/components/AnsAlert.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (isCorrect) {
  if (isCorrect == 1) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, " ");
  if (isCorrect === -1) sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
    position: 'top-end',
    type: 'success',
    title: 'You Gave the correct Answer',
    showConfirmButton: false,
    timer: 1500
  });
  if (isCorrect === 0) sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
    position: 'top-end',
    title: 'You Gave the Wrong answer',
    text: 'Read the question carefully',
    type: 'error',
    showConfirmButton: false
  });
});

/***/ })

})
//# sourceMappingURL=game.js.ca7c435299025d573260.hot-update.js.map