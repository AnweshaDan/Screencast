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
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
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
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, " ROUND ", props.day, " "), " "), " "), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "question",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
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
      lineNumber: 62,
      columnNumber: 9
    }
  }, "Question ", props.qsNo, " "), props.image ? __jsx(_ImageHint__WEBPACK_IMPORTED_MODULE_9__["default"], {
    src: _env_json__WEBPACK_IMPORTED_MODULE_6__.api + props.image,
    width: 1200,
    height: 800,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, " "), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.pos,
    color: "#f0f0f0",
    style: {
      fontSize: "17px",
      fontFamily: "'Barlow', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, props.qs, " "), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), " ", props.audio ? __jsx("div", {
    style: {
      textAlign: "center",
      margin: "0 auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
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
      lineNumber: 99,
      columnNumber: 17
    }
  }), " ") : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, " "), " "), " ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWVzdGlvbi5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1pbldpZHRoIiwibWF4d2lkdGgiLCJidWxsZXQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIm1lZGlhIiwiaGVpZ2h0Iiwid2lkdGgiLCJvYmplY3RGaXQiLCJRdWVzdGlvbiIsInByb3BzIiwiY2xhc3NlcyIsInRleHRBbGlnbiIsImZvbnRGYW1pbHkiLCJkYXkiLCJjb2xvciIsInFzTm8iLCJpbWFnZSIsImRhdGEiLCJhcGkiLCJxcyIsImF1ZGlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsWUFBUSxFQUFFLEdBRFI7QUFFRkMsWUFBUSxFQUFFO0FBRlIsR0FEbUI7QUFLekJDLFFBQU0sRUFBRTtBQUNKQyxXQUFPLEVBQUUsY0FETDtBQUVKQyxVQUFNLEVBQUUsT0FGSjtBQUdKQyxhQUFTLEVBQUU7QUFIUCxHQUxpQjtBQVV6QkMsT0FBSyxFQUFFO0FBQ0hDLFlBQVEsRUFBRTtBQURQLEdBVmtCO0FBYXpCQyxLQUFHLEVBQUU7QUFDREMsZ0JBQVksRUFBRTtBQURiLEdBYm9CO0FBZ0J6QkMsT0FBSyxFQUFFO0FBQ0hDLFVBQU0sRUFBRSxHQURMO0FBRUhDLFNBQUssRUFBRSxNQUZKO0FBR0hDLGFBQVMsRUFBRTtBQUhSO0FBaEJrQixDQUFELENBQTVCO0FBMEJlLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3BDLE1BQU1DLE9BQU8sR0FBR25CLFNBQVMsRUFBekI7QUFFQSxTQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQTtBQUNJLGFBQVMsRUFBRyxNQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUE7QUFDSSxhQUFTLEVBQUcsb0JBRGhCO0FBRUEsU0FBSyxFQUNEO0FBQ0lvQixlQUFTLEVBQUUsUUFEZjtBQUVJVixjQUFRLEVBQUUsTUFGZDtBQUdJVyxnQkFBVSxFQUFFO0FBSGhCLEtBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNBO0FBQ0ssYUFBUyxFQUFHLFNBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ3FDSCxLQUFLLENBQUNJLEdBRDNDLE1BVEEsTUFGQSxNQUZBLEVBa0JBLE1BQ0EscUVBREE7QUFDWSxhQUFTLEVBQUcsVUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBLE1BQ0Esb0VBREE7QUFDVyxhQUFTLEVBQUtILE9BQU8sQ0FBQ1YsS0FEakM7QUFFQSxTQUFLLEVBQ0Q7QUFBRVksZ0JBQVUsRUFBRSwwQkFBZDtBQUEwQ0UsV0FBSyxFQUFFO0FBQWpELEtBSEo7QUFLQSxnQkFBWSxNQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTVdMLEtBQUssQ0FBQ00sSUFOakIsTUFGQSxFQVlJTixLQUFLLENBQUNPLEtBQU4sR0FBZ0IsTUFDWixrREFEWTtBQUNJLE9BQUcsRUFBS0Msc0NBQUksQ0FBQ0MsR0FBTCxHQUFXVCxLQUFLLENBQUNPLEtBRDdCO0FBRVosU0FBSyxFQUFLLElBRkU7QUFHWixVQUFNLEVBQUssR0FIQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWhCLEdBTU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWxCVixFQXVCQSxNQUNBLG9FQURBO0FBQ1csYUFBUyxFQUFLTixPQUFPLENBQUNSLEdBRGpDO0FBRUEsU0FBSyxFQUFHLFNBRlI7QUFHQSxTQUFLLEVBQ0Q7QUFBRUQsY0FBUSxFQUFFLE1BQVo7QUFBb0JXLGdCQUFVLEVBQUU7QUFBaEMsS0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0VILEtBQUssQ0FBQ1UsRUFQUixNQXZCQSxFQWtDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENBLE9Bb0NJVixLQUFLLENBQUNXLEtBQU4sR0FBZ0I7QUFDUixTQUFLLEVBQ0w7QUFBRVQsZUFBUyxFQUFFLFFBQWI7QUFBdUJiLFlBQU0sRUFBRTtBQUEvQixLQUZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHWixNQUNBLGtEQURBO0FBQ1UsU0FBSyxFQUNYO0FBQUVhLGVBQVMsRUFBRSxRQUFiO0FBQXVCYixZQUFNLEVBQUU7QUFBL0IsS0FGSjtBQUdBLFNBQUssRUFBS21CLHNDQUFJLENBQUNDLEdBQUwsR0FBV1QsS0FBSyxDQUFDVyxLQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSFksTUFBaEIsR0FTTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBN0NWLE1BbEJBLE1BRko7QUF3RUg7O0dBM0V1QlosUTtVQUNKakIsUzs7O0tBRElpQixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dhbWUuNDhiMTEzZjI5ZThjMDEzYzFmMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWFcIjtcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9lbnYuanNvbic7XG5pbXBvcnQgQXVkaW9IaW50IGZyb20gXCIuL0F1ZGlvSGludFwiO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCJyZWFjdC1mL2xpYi9zcmMvZm9ybVwiO1xuaW1wb3J0IFJlc3BvbnNpdmVJbWFnZSBmcm9tICcuL0ltYWdlSGludCdcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgbWluV2lkdGg6IDI3NSxcbiAgICAgICAgbWF4d2lkdGg6IDM0NSxcbiAgICB9LFxuICAgIGJ1bGxldDoge1xuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMCAycHhcIixcbiAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDAuOClcIixcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICAgIGZvbnRTaXplOiAyMSxcbiAgICB9LFxuICAgIHBvczoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IDEyLFxuICAgIH0sXG4gICAgbWVkaWE6IHtcbiAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgICAgb2JqZWN0Rml0OiAnY29udGFpbidcblxuICAgIH0sXG5cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1ZXN0aW9uKHByb3BzKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8XG4gICAgICAgIGRpdiA+XG4gICAgICAgIDxcbiAgICAgICAgZGl2IGNsYXNzTmFtZSA9IFwiaGVhZFwiID5cbiAgICAgICAgPFxuICAgICAgICBkaXYgY2xhc3NOYW1lID0gXCJjb250YWluZXIgbmVvbi1ib3hcIlxuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjlweFwiLFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiJ1J1c3NvIE9uZScsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA+XG4gICAgICAgIDxcbiAgICAgICAgc3BhbiBjbGFzc05hbWUgPSBcImZsaWNrZXJcIiA+IFJPVU5EIHsgcHJvcHMuZGF5IH0gPCAvc3Bhbj4gPFxuICAgICAgICAvZGl2PiA8XG4gICAgICAgIC9kaXY+XG5cbiAgICAgICAgPFxuICAgICAgICBDYXJkQ29udGVudCBjbGFzc05hbWUgPSBcInF1ZXN0aW9uXCIgPlxuICAgICAgICA8XG4gICAgICAgIFR5cG9ncmFwaHkgY2xhc3NOYW1lID0geyBjbGFzc2VzLnRpdGxlIH1cbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICB7IGZvbnRGYW1pbHk6IFwiJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmXCIsIGNvbG9yOiBcIiNmZmZcIiB9IH1cblxuICAgICAgICBndXR0ZXJCb3R0b20gPlxuICAgICAgICBRdWVzdGlvbiB7IHByb3BzLnFzTm8gfSA8XG4gICAgICAgIC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3BzLmltYWdlID8gKCA8XG4gICAgICAgICAgICAgICAgUmVzcG9uc2l2ZUltYWdlIHNyYyA9IHsgZGF0YS5hcGkgKyBwcm9wcy5pbWFnZSB9XG4gICAgICAgICAgICAgICAgd2lkdGggPSB7IDEyMDAgfVxuICAgICAgICAgICAgICAgIGhlaWdodCA9IHsgODAwIH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICApIDogKCA8XG4gICAgICAgICAgICAgICAgZGl2ID4gPCAvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgPFxuICAgICAgICBUeXBvZ3JhcGh5IGNsYXNzTmFtZSA9IHsgY2xhc3Nlcy5wb3MgfVxuICAgICAgICBjb2xvciA9IFwiI2YwZjBmMFwiXG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgeyBmb250U2l6ZTogXCIxN3B4XCIsIGZvbnRGYW1pbHk6IFwiJ0JhcmxvdycsIHNhbnMtc2VyaWZcIiB9IH1cblxuICAgICAgICA+XG4gICAgICAgIHsgcHJvcHMucXMgfSA8XG4gICAgICAgIC9UeXBvZ3JhcGh5PlxuXG5cbiAgICAgICAgPFxuICAgICAgICBiciAvID4ge1xuICAgICAgICAgICAgcHJvcHMuYXVkaW8gPyAoIDxcbiAgICAgICAgICAgICAgICBkaXYgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfSB9ID5cbiAgICAgICAgICAgICAgICA8XG4gICAgICAgICAgICAgICAgQXVkaW9IaW50IHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICB7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH0gfVxuICAgICAgICAgICAgICAgIGF1ZGlvID0geyBkYXRhLmFwaSArIHByb3BzLmF1ZGlvIH1cbiAgICAgICAgICAgICAgICAvPiA8XG4gICAgICAgICAgICAgICAgL2Rpdj5cbiAgICAgICAgICAgICkgOiAoIDxcbiAgICAgICAgICAgICAgICBkaXYgPiA8IC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gPFxuICAgICAgICAvQ2FyZENvbnRlbnQ+IDxcbiAgICAgICAgL2Rpdj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=