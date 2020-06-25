webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/Rules.js":
/*!*****************************!*\
  !*** ./components/Rules.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AlertDialogSlide; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");


var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Rules.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Transition = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Transition(props, ref) {
  return __jsx(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    direction: "up",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }));
});
function AlertDialogSlide() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "outlined",
    color: "primary",
    onClick: handleClickOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Slide in alert dialog"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: open,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-slide-title",
    "aria-describedby": "alert-dialog-slide-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "alert-dialog-slide-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Use Google's location service?"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "alert-dialog-slide-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Disagree"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Agree"))));
}

__jsx(Typography, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 11
  }
}, __jsx("ol", {
  className: "p-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 11
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 15
  }
}, "The quiz comprises of 3 levels with 10 questions each."), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 15
  }
}, "Each question carries 10 marks."), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 15
  }
}, "The one who finishes the quiz first is the winner."), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 15
  }
}, "You can go to the next question only after getting the current question correct."), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 15
  }
}, "A level can be played only between its start and end timings.")));

/***/ }),

/***/ "./node_modules/@material-ui/icons/ExpandMore.js":
false

})
//# sourceMappingURL=game.js.858a088a06988462a816.hot-update.js.map