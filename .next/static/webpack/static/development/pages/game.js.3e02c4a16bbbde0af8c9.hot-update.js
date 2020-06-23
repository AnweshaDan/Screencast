webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/AudioHint.js":
/*!*********************************!*\
  !*** ./components/AudioHint.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var material_ui_audio_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui-audio-player */ "./node_modules/material-ui-audio-player/dist/index.js");
/* harmony import */ var material_ui_audio_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_audio_player__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/anwesha/Desktop/screencast/components/AudioHint.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var muiTheme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])({});
var useStyles = makeStyles(function (theme) {
  return {
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down('sm'), {
      width: '100%'
    }),
    loopIcon: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: '#3f51b5',
      '&.selected': {
        color: '#0921a9'
      },
      '&:hover': {
        color: '#7986cb'
      }
    }, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    playIcon: {
      color: '#f50057',
      '&:hover': {
        color: '#ff4081'
      }
    },
    replayIcon: {
      color: '#e6e600'
    },
    pauseIcon: {
      color: '#0099ff'
    },
    volumeIcon: {
      color: 'rgba(0, 0, 0, 0.54)'
    },
    volumeSlider: {
      color: 'black'
    },
    progressTime: {
      color: 'rgba(0, 0, 0, 0.54)'
    },
    mainSlider: {
      color: '#3f51b5',
      '& .MuiSlider-rail': {
        color: '#7986cb'
      },
      '& .MuiSlider-track': {
        color: '#3f51b5'
      },
      '& .MuiSlider-thumb': {
        color: '#303f9f'
      }
    }
  };
});

function AudioHint() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: muiTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(material_ui_audio_player__WEBPACK_IMPORTED_MODULE_3___default.a, {
    width: "500px",
    useStyles: useStyles,
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    loop: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  })), ";");
}

/* harmony default export */ __webpack_exports__["default"] = (AudioHint);

/***/ })

})
//# sourceMappingURL=game.js.3e02c4a16bbbde0af8c9.hot-update.js.map