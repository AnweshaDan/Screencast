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
    type: 'success',
    title: 'Completed',
    text: 'Congrats!!!',
    showConfirmButton: false,
    timer: 1500
  });
  if (isCorrect === 1) sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    position: 'top-end',
    type: 'success',
    title: 'You Gave the correct Answer',
    showConfirmButton: false,
    timer: 1500
  });
  if (isCorrect === 0) sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    position: 'top-end',
    title: 'You Gave the Wrong answer',
    text: 'Read the question carefully',
    type: 'error',
    showConfirmButton: false
  });
});

/***/ })

})
//# sourceMappingURL=game.js.a67d8d36f4b85538b476.hot-update.js.map