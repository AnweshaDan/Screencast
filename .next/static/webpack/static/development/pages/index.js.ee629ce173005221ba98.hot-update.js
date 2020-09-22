webpackHotUpdate("static/development/pages/index.js",{

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
    padding: "60px",
    position: 'center',
    type: 'success',
    title: 'Yay',
    text: 'Successfully registered !',
    showConfirmButton: false
  });
  if (isCorrect === 1) sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    padding: "60px",
    position: 'center',
    icon: 'success',
    type: 'success',
    title: 'You gave the correct answer',
    showConfirmButton: false
  });
  if (isCorrect === 0) sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    padding: "60px",
    position: 'center',
    icon: 'error',
    title: 'Oops! Wrong answer.',
    text: 'Try again',
    showConfirmButton: false
  });
  if (isCorrect === 9) sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    padding: "60px",
    position: 'center',
    icon: 'error',
    title: 'Times up!',
    text: 'Ahaaa sorry!',
    showConfirmButton: false
  });
  if (isCorrect === 8) sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    padding: "60px",
    position: 'center',
    icon: 'info',
    title: 'Erro',
    text: 'Ahaaa sorry!',
    showConfirmButton: false
  });
});

/***/ })

})
//# sourceMappingURL=index.js.ee629ce173005221ba98.hot-update.js.map