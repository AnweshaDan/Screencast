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
  if (isCorrect === 1) {
    var _timerInterval;

    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      padding: "60px",
      position: 'center',
      icon: 'success',
      type: 'success',
      title: 'You gave the correct answer',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      willOpen: function willOpen() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.showLoading();
        _timerInterval = setInterval(function () {}, 100);
      },
      onClose: function onClose() {
        clearInterval(_timerInterval);
      }
    });
  }

  if (isCorrect === 0) {
    var _timerInterval2;

    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      padding: "60px",
      position: 'center',
      icon: 'error',
      title: 'Oops! Wrong answer.',
      text: 'Try again',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      willOpen: function willOpen() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.showLoading();
        _timerInterval2 = setInterval(function () {}, 100);
      },
      onClose: function onClose() {
        clearInterval(_timerInterval2);
      }
    });
  }

  if (isCorrect === 9) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      padding: "60px",
      position: 'center',
      icon: 'error',
      title: 'Times up!',
      text: 'Ahaaa sorry!',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      willOpen: function willOpen() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.showLoading();
        timerInterval = setInterval(function () {}, 100);
      },
      onClose: function onClose() {
        clearInterval(timerInterval);
      }
    });
  }

  if (isCorrect === 8) sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
    padding: "60px",
    position: 'center',
    icon: 'info',
    title: 'Error !',
    text: 'Aha prohibited ! ;_;',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    willOpen: function willOpen() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.showLoading();
      timerInterval = setInterval(function () {}, 100);
    },
    onClose: function onClose() {
      clearInterval(timerInterval);
    }
  });
});

/***/ })

})
//# sourceMappingURL=index.js.6effc54fc32f024d2d3b.hot-update.js.map