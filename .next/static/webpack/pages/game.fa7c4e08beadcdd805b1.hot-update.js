webpackHotUpdate_N_E("pages/game",{

/***/ "./components/Question.js":
/*!********************************!*\
  !*** ./components/Question.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Question; });
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
var _jsxFileName = "/home/rishav4101/Screencast/components/Question.js",
    _s = $RefreshSig$();

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
  _s();

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
      color: "#fff"
    },
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Question ", props.qsNo), props.image ? __jsx(_ImageHint__WEBPACK_IMPORTED_MODULE_9__["default"], {
    src: _env_json__WEBPACK_IMPORTED_MODULE_6__.api + props.image,
    width: 1200,
    height: 800,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.pos,
    color: "#f0f0f0",
    style: {
      fontSize: "17px",
      fontFamily: "'Barlow', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, props.qs), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 88,
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
      lineNumber: 89,
      columnNumber: 13
    }
  })) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  })));
}

_s(Question, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Question;

var _c;

$RefreshReg$(_c, "Question");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWVzdGlvbi5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1pbldpZHRoIiwibWF4d2lkdGgiLCJidWxsZXQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIm1lZGlhIiwiaGVpZ2h0Iiwid2lkdGgiLCJvYmplY3RGaXQiLCJRdWVzdGlvbiIsInByb3BzIiwiY2xhc3NlcyIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJkYXkiLCJjb2xvciIsInFzTm8iLCJpbWFnZSIsImRhdGEiLCJhcGkiLCJxcyIsImF1ZGlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFLEdBRE47QUFFSkMsWUFBUSxFQUFFO0FBRk4sR0FEcUI7QUFLM0JDLFFBQU0sRUFBRTtBQUNOQyxXQUFPLEVBQUUsY0FESDtBQUVOQyxVQUFNLEVBQUUsT0FGRjtBQUdOQyxhQUFTLEVBQUU7QUFITCxHQUxtQjtBQVUzQkMsT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRTtBQURMLEdBVm9CO0FBYTNCQyxLQUFHLEVBQUU7QUFDSEMsZ0JBQVksRUFBRTtBQURYLEdBYnNCO0FBZ0IzQkMsT0FBSyxFQUFFO0FBQ0xDLFVBQU0sRUFBRSxHQURIO0FBRUxDLFNBQUssRUFBRSxNQUZGO0FBR0xDLGFBQVMsRUFBQztBQUhMO0FBaEJvQixDQUFELENBQTVCO0FBMEJlLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3RDLE1BQU1DLE9BQU8sR0FBR25CLFNBQVMsRUFBekI7QUFFQSxTQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxvQkFEWjtBQUVFLFNBQUssRUFBRTtBQUNMb0IsZUFBUyxFQUFFLFFBRE47QUFFTFYsY0FBUSxFQUFFLE1BRkw7QUFHTFcsZ0JBQVUsRUFBRTtBQUhQLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQU0sYUFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBaUNILEtBQUssQ0FBQ0ksR0FBdkMsQ0FSRixDQURGLENBREYsRUFjRSxNQUFDLHFFQUFEO0FBQWEsYUFBUyxFQUFDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxFQUFFSCxPQUFPLENBQUNWLEtBRHJCO0FBRUUsU0FBSyxFQUFFO0FBQUVZLGdCQUFVLEVBQUUsMEJBQWQ7QUFBeUNFLFdBQUssRUFBQztBQUEvQyxLQUZUO0FBSUUsZ0JBQVksTUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU1ZTCxLQUFLLENBQUNNLElBTmxCLENBREYsRUFVR04sS0FBSyxDQUFDTyxLQUFOLEdBQ0MsTUFBQyxrREFBRDtBQUNBLE9BQUcsRUFBRUMsc0NBQUksQ0FBQ0MsR0FBTCxHQUFXVCxLQUFLLENBQUNPLEtBRHRCO0FBRUEsU0FBSyxFQUFHLElBRlI7QUFHQSxVQUFNLEVBQUcsR0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FPRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJOLEVBb0JFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLEVBQUVOLE9BQU8sQ0FBQ1IsR0FEckI7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLFNBQUssRUFBRTtBQUFFRCxjQUFRLEVBQUUsTUFBWjtBQUFvQlcsZ0JBQVUsRUFBRTtBQUFoQyxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR0gsS0FBSyxDQUFDVSxFQU5ULENBcEJGLEVBOEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkYsRUErQkdWLEtBQUssQ0FBQ1csS0FBTixHQUNDO0FBQUssU0FBSyxFQUFFO0FBQUVULGVBQVMsRUFBRSxRQUFiO0FBQXVCYixZQUFNLEVBQUU7QUFBL0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUNFLFNBQUssRUFBRTtBQUFFYSxlQUFTLEVBQUUsUUFBYjtBQUF1QmIsWUFBTSxFQUFFO0FBQS9CLEtBRFQ7QUFFRSxTQUFLLEVBQUVtQixzQ0FBSSxDQUFDQyxHQUFMLEdBQVdULEtBQUssQ0FBQ1csS0FGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREQsR0FRRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkNOLENBZEYsQ0FGRjtBQTRERDs7R0EvRHVCWixRO1VBQ05qQixTOzs7S0FETWlCLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZS5mYTdjNGUwOGJlYWRjZGQ4MDViMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBkYXRhIGZyb20gJy4uL2Vudi5qc29uJztcbmltcG9ydCBBdWRpb0hpbnQgZnJvbSBcIi4vQXVkaW9IaW50XCI7XG5pbXBvcnQgeyBEYXRhIH0gZnJvbSBcInJlYWN0LWYvbGliL3NyYy9mb3JtXCI7XG5pbXBvcnQgUmVzcG9uc2l2ZUltYWdlIGZyb20gJy4vSW1hZ2VIaW50J1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBtaW5XaWR0aDogMjc1LFxuICAgIG1heHdpZHRoOiAzNDUsXG4gIH0sXG4gIGJ1bGxldDoge1xuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgbWFyZ2luOiBcIjAgMnB4XCIsXG4gICAgdHJhbnNmb3JtOiBcInNjYWxlKDAuOClcIixcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogMjEsXG4gIH0sXG4gIHBvczoge1xuICAgIG1hcmdpbkJvdHRvbTogMTIsXG4gIH0sXG4gIG1lZGlhOiB7XG4gICAgaGVpZ2h0OiAzMDAsXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgIG9iamVjdEZpdDonY29udGFpbidcbiAgICBcbiAgfSxcbiAgXG4gXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVlc3Rpb24ocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbmVvbi1ib3hcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIyOXB4XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIidSdXNzbyBPbmUnLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsaWNrZXJcIj5ST1VORCB7cHJvcHMuZGF5fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInF1ZXN0aW9uXCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmXCIsY29sb3I6XCIjZmZmXCJ9fVxuICAgICAgICAgIFxuICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICA+XG4gICAgICAgICAgUXVlc3Rpb24ge3Byb3BzLnFzTm99XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICB7cHJvcHMuaW1hZ2UgPyAoXG4gICAgICAgICAgPFJlc3BvbnNpdmVJbWFnZVxuICAgICAgICAgIHNyYz17ZGF0YS5hcGkgKyBwcm9wcy5pbWFnZX1cbiAgICAgICAgICB3aWR0aD17IDEyMDAgfVxuICAgICAgICAgIGhlaWdodD17IDgwMCB9IC8+XG5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N9XG4gICAgICAgICAgY29sb3I9XCIjZjBmMGYwXCJcbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxN3B4XCIsIGZvbnRGYW1pbHk6IFwiJ0JhcmxvdycsIHNhbnMtc2VyaWZcIiB9fVxuXG4gICAgICAgID5cbiAgICAgICAgICB7cHJvcHMucXN9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgXG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtwcm9wcy5hdWRpbyA/IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PlxuICAgICAgICAgICAgPEF1ZGlvSGludFxuICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgICBhdWRpbz17ZGF0YS5hcGkgKyBwcm9wcy5hdWRpb31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9