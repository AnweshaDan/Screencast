webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/Question.js":
/*!********************************!*\
  !*** ./components/Question.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Question; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _env_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../env.json */ "./env.json");
var _env_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../env.json */ "./env.json", 1);
/* harmony import */ var _AudioHint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AudioHint */ "./components/AudioHint.js");
/* harmony import */ var react_f_lib_src_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-f/lib/src/form */ "./node_modules/react-f/lib/src/form/index.js");
/* harmony import */ var react_f_lib_src_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_f_lib_src_form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ImageHint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImageHint */ "./components/ImageHint.js");
var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Question.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










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
    height: 300,
    width: "auto",
    objectFit: 'contain'
  }
});
function Question(props) {
  var classes = useStyles();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "ROUND ", props.day))), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "question",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.title,
    style: {
      fontFamily: "'Montserrat', sans-serif",
      color: "rgb(196, 175, 153)"
    },
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Question ", props.qsNo), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.pos,
    color: "#f0f0f0",
    style: {
      fontSize: "17px",
      fontFamily: "'Barlow', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, props.qs), props.image ? __jsx(_ImageHint__WEBPACK_IMPORTED_MODULE_9__["default"], {
    src: _env_json__WEBPACK_IMPORTED_MODULE_6__.api + props.image,
    width: 1200,
    height: 800,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx(_AudioHint__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      textAlign: "center",
      margin: "0 auto"
    },
    audio: _env_json__WEBPACK_IMPORTED_MODULE_6__.api + props.audio,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  })) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  })));
}
/*<CardMedia
            className={classes.media}
            style={{ textAlign: "center", margin: "0 auto" }}
            image={data.api + props.image}
            title="Image Hint"
          />*/

/***/ })

})
//# sourceMappingURL=game.js.892b0325999f82f13e19.hot-update.js.map