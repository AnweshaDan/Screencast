webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/Question.js":
/*!********************************!*\
  !*** ./components/Question.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OutlinedCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _AudioHint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AudioHint */ "./components/AudioHint.js");
var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Question.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var muiTheme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["createMuiTheme"])({});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    minWidth: 275,
    maxwidth: 345
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 21
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 140,
    width: "auto"
  }
});
function OutlinedCard(props) {
  var classes = useStyles();

  var bull = __jsx("span", {
    className: classes.bullet,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 16
    }
  }, "\u2022");

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container neon-box",
    style: {
      textAlign: "center",
      fontSize: "29px",
      fontFamily: "'Russo One', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "ROUND 1"))), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "question",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.title,
    style: {
      fontFamily: "'Barlow', sans-serif"
    },
    color: "white",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Question ", props.qsNo), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.pos,
    color: "#f0f0f0",
    style: {
      fontSize: "17px",
      fontFamily: "'Barlow', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, props.qs), props.image ? __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.media,
    style: {
      textAlign: "center",
      margin: "0 auto"
    },
    image: "https://screencast2020.herokuapp.com" + props.image,
    title: "Image Hint",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), props.audio ? __jsx("div", {
    style: {
      textAlign: "center",
      margin: "0 auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(_AudioHint__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      textAlign: "center",
      margin: "0 auto"
    },
    audio: "https://screencast2020.herokuapp.com" + props.audio,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  })) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  })));
}

/***/ })

})
//# sourceMappingURL=game.js.d054b5615fcdf06689e0.hot-update.js.map