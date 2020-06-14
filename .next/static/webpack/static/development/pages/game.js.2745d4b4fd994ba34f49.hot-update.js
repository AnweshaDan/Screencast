webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/AnsAlert.js":
/*!********************************!*\
  !*** ./components/AnsAlert.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (isCorrect) {
  if (isCorrect == -1) Swal.fire({
    position: 'top-end',
    type: 'error',
    title: 'Something Went Wrong',
    text: 'Please refresh the page',
    showConfirmButton: false,
    timer: 1500
  });
  if (isCorrect === 1) Swal.fire({
    position: 'top-end',
    type: 'success',
    title: 'You Gave the correct Answer',
    showConfirmButton: false,
    timer: 1500
  });
  if (isCorrect === 0) Swal.fire({
    position: 'top-end',
    title: 'You Gave the Wrong answer',
    text: 'Read the question carefully',
    type: 'error',
    showConfirmButton: false
  });
});

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
false

})
//# sourceMappingURL=game.js.2745d4b4fd994ba34f49.hot-update.js.map