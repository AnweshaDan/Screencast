webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/AnsAlert.js":
/*!********************************!*\
  !*** ./components/AnsAlert.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (isCorrect) {
  if (isCorrect == -1) sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    position: 'top-end',
    type: 'error',
    title: 'Oops',
    text: 'You are not logged in',
    showConfirmButton: false
  });
  if (isCorrect === 1) sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    position: 'top-end',
    icon: 'success',
    type: 'success',
    title: 'You gave the correct answer',
    showConfirmButton: false
  });
  if (isCorrect === 0) sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    position: 'top-end',
    icon: 'error',
    title: 'You gave the wrong answer',
    text: 'Try again.',
    type: 'error',
    showConfirmButton: false
  });
});

/***/ })

})
//# sourceMappingURL=game.js.9b7a72b245adf3f6cef8.hot-update.js.map