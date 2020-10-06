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
    marginBottom: 4,
    margin: "0 auto",
    maxWidth: "600px"
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
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "ROUND ", props.day))), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "question",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 59,
      columnNumber: 9
    }
  }, "Question ", props.qsNo), props.image ? __jsx(_ImageHint__WEBPACK_IMPORTED_MODULE_9__["default"], {
    src: _env_json__WEBPACK_IMPORTED_MODULE_6__.api + props.image,
    width: 1200,
    height: 800,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 78,
      columnNumber: 9
    }
  }, props.qs), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 90,
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
      lineNumber: 91,
      columnNumber: 13
    }
  })) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWVzdGlvbi5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1pbldpZHRoIiwibWF4d2lkdGgiLCJidWxsZXQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIm1heFdpZHRoIiwibWVkaWEiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsIlF1ZXN0aW9uIiwicHJvcHMiLCJjbGFzc2VzIiwidGV4dEFsaWduIiwiZm9udEZhbWlseSIsImRheSIsImNvbG9yIiwicXNObyIsImltYWdlIiwiZGF0YSIsImFwaSIsInFzIiwiYXVkaW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUUsR0FETjtBQUVKQyxZQUFRLEVBQUU7QUFGTixHQURxQjtBQUszQkMsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRSxjQURIO0FBRU5DLFVBQU0sRUFBRSxPQUZGO0FBR05DLGFBQVMsRUFBRTtBQUhMLEdBTG1CO0FBVTNCQyxPQUFLLEVBQUU7QUFDTEMsWUFBUSxFQUFFO0FBREwsR0FWb0I7QUFhM0JDLEtBQUcsRUFBRTtBQUNIQyxnQkFBWSxFQUFFLENBRFg7QUFFSEwsVUFBTSxFQUFFLFFBRkw7QUFHSE0sWUFBUSxFQUFDO0FBSE4sR0Fic0I7QUFrQjNCQyxPQUFLLEVBQUU7QUFDTEMsVUFBTSxFQUFFLEdBREg7QUFFTEMsU0FBSyxFQUFFLE1BRkY7QUFHTEMsYUFBUyxFQUFDO0FBSEw7QUFsQm9CLENBQUQsQ0FBNUI7QUE0QmUsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDdEMsTUFBTUMsT0FBTyxHQUFHcEIsU0FBUyxFQUF6QjtBQUVBLFNBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLG9CQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xxQixlQUFTLEVBQUUsUUFETjtBQUVMWCxjQUFRLEVBQUUsTUFGTDtBQUdMWSxnQkFBVSxFQUFFO0FBSFAsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUU7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFpQ0gsS0FBSyxDQUFDSSxHQUF2QyxDQVJGLENBREYsQ0FERixFQWNFLE1BQUMscUVBQUQ7QUFBYSxhQUFTLEVBQUMsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLEVBQUVILE9BQU8sQ0FBQ1gsS0FEckI7QUFFRSxTQUFLLEVBQUU7QUFBRWEsZ0JBQVUsRUFBRSwwQkFBZDtBQUF5Q0UsV0FBSyxFQUFDO0FBQS9DLEtBRlQ7QUFJRSxnQkFBWSxNQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTVlMLEtBQUssQ0FBQ00sSUFObEIsQ0FERixFQVVHTixLQUFLLENBQUNPLEtBQU4sR0FDQyxNQUFDLGtEQUFEO0FBQ0EsT0FBRyxFQUFFQyxzQ0FBSSxDQUFDQyxHQUFMLEdBQVdULEtBQUssQ0FBQ08sS0FEdEI7QUFFQSxTQUFLLEVBQUcsSUFGUjtBQUdBLFVBQU0sRUFBRyxHQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxHQU9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQk4sRUFvQkUsTUFBQyxvRUFBRDtBQUNFLGFBQVMsRUFBRU4sT0FBTyxDQUFDVCxHQURyQjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsU0FBSyxFQUFFO0FBQUVELGNBQVEsRUFBRSxNQUFaO0FBQW9CWSxnQkFBVSxFQUFFO0FBQWhDLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HSCxLQUFLLENBQUNVLEVBTlQsQ0FwQkYsRUE4QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRixFQStCR1YsS0FBSyxDQUFDVyxLQUFOLEdBQ0M7QUFBSyxTQUFLLEVBQUU7QUFBRVQsZUFBUyxFQUFFLFFBQWI7QUFBdUJkLFlBQU0sRUFBRTtBQUEvQixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVjLGVBQVMsRUFBRSxRQUFiO0FBQXVCZCxZQUFNLEVBQUU7QUFBL0IsS0FEVDtBQUVFLFNBQUssRUFBRW9CLHNDQUFJLENBQUNDLEdBQUwsR0FBV1QsS0FBSyxDQUFDVyxLQUYxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERCxHQVFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2Q04sQ0FkRixDQUZGO0FBNEREOztHQS9EdUJaLFE7VUFDTmxCLFM7OztLQURNa0IsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYW1lLmNhY2ZlZGI2NGRhYTA0ZDcxODA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCI7XG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZW52Lmpzb24nO1xuaW1wb3J0IEF1ZGlvSGludCBmcm9tIFwiLi9BdWRpb0hpbnRcIjtcbmltcG9ydCB7IERhdGEgfSBmcm9tIFwicmVhY3QtZi9saWIvc3JjL2Zvcm1cIjtcbmltcG9ydCBSZXNwb25zaXZlSW1hZ2UgZnJvbSAnLi9JbWFnZUhpbnQnXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIG1pbldpZHRoOiAyNzUsXG4gICAgbWF4d2lkdGg6IDM0NSxcbiAgfSxcbiAgYnVsbGV0OiB7XG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBtYXJnaW46IFwiMCAycHhcIixcbiAgICB0cmFuc2Zvcm06IFwic2NhbGUoMC44KVwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAyMSxcbiAgfSxcbiAgcG9zOiB7XG4gICAgbWFyZ2luQm90dG9tOiA0LFxuICAgIG1hcmdpbjogXCIwIGF1dG9cIiwgXG4gICAgbWF4V2lkdGg6XCI2MDBweFwiXG4gIH0sXG4gIG1lZGlhOiB7XG4gICAgaGVpZ2h0OiAzMDAsXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgIG9iamVjdEZpdDonY29udGFpbidcbiAgICBcbiAgfSxcbiAgXG4gXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVlc3Rpb24ocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbmVvbi1ib3hcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIyOXB4XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIidSdXNzbyBPbmUnLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsaWNrZXJcIj5ST1VORCB7cHJvcHMuZGF5fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInF1ZXN0aW9uXCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmXCIsY29sb3I6XCIjZmZmXCJ9fVxuICAgICAgICAgIFxuICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICA+XG4gICAgICAgICAgUXVlc3Rpb24ge3Byb3BzLnFzTm99XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICB7cHJvcHMuaW1hZ2UgPyAoXG4gICAgICAgICAgPFJlc3BvbnNpdmVJbWFnZVxuICAgICAgICAgIHNyYz17ZGF0YS5hcGkgKyBwcm9wcy5pbWFnZX1cbiAgICAgICAgICB3aWR0aD17IDEyMDAgfVxuICAgICAgICAgIGhlaWdodD17IDgwMCB9IC8+XG5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N9XG4gICAgICAgICAgY29sb3I9XCIjZjBmMGYwXCJcbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCIxN3B4XCIsIGZvbnRGYW1pbHk6IFwiJ0JhcmxvdycsIHNhbnMtc2VyaWZcIiB9fVxuXG4gICAgICAgID5cbiAgICAgICAgICB7cHJvcHMucXN9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgXG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtwcm9wcy5hdWRpbyA/IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PlxuICAgICAgICAgICAgPEF1ZGlvSGludFxuICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgICBhdWRpbz17ZGF0YS5hcGkgKyBwcm9wcy5hdWRpb31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9