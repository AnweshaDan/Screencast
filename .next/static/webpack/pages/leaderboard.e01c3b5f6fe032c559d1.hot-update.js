webpackHotUpdate_N_E("pages/leaderboard",{

/***/ "./components/Leadertable.js":
/*!***********************************!*\
  !*** ./components/Leadertable.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Leadertable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _env_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../env.json */ "./env.json");
var _env_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../env.json */ "./env.json", 1);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loader */ "./components/Loader.js");
var _jsxFileName = "/home/rishav4101/Screencast/components/Leadertable.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var StyledTableCell = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    head: {
      backgroundColor: "#000044",
      color: "white",
      border: "none",
      fontFamily: "Russo One",
      fontSize: 16
    },
    body: {
      fontFamily: "Russo One",
      fontSize: 13,
      color: "#fff",
      border: "none",
      padding: "5px"
    }
  };
})(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"]);
var StyledTableRow = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    root: {
      "&:nth-of-type(1)": {
        backgroundColor: "rgba(0,200,0,0.4) !important",
        color: "#000 !important"
      },
      "&:nth-of-type(2)": {
        backgroundColor: "rgba(0,200,0,0.4) !important",
        color: "#000 !important"
      },
      "&:nth-of-type(3)": {
        backgroundColor: "rgba(0,200,0,0.4) !important",
        color: "#000 !important"
      },
      "&:nth-of-type(odd)": {
        backgroundColor: "rgba(55,55,100,0.3)",
        color: "#000 !important"
      },
      "&:nth-of-type(even)": {
        backgroundColor: "rgba(0,0,0,0.7)",
        color: "white !important"
      }
    }
  };
})(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"]);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  table: {
    margin: "15px auto",
    maxWidth: "900px",
    width: "90%",
    overflowX: "hidden"
  }
});
function Leadertable() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      RankList = _useState[0],
      setRankList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      loaded = _useState2[0],
      setloaded = _useState2[1];

  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_env_json__WEBPACK_IMPORTED_MODULE_9__.api + "/api/leaderboard").then(function (response) {
      setRankList(response.data);
    }).then(function () {
      setloaded(true);
    });
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, loaded === true ? __jsx("div", {
    className: "rtable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.table,
    "aria-label": "customized table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx(StyledTableCell, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, "Rank"), __jsx(StyledTableCell, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "Player"), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, "Points"))), RankList.length ? __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      fontFamily: "'Barlow', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, RankList.map(function (row, index) {
    return __jsx(StyledTableRow, {
      key: index,
      style: {
        fontFamily: "'Barlow', sans-serif"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 19
      }
    }, __jsx(StyledTableCell, {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }, row.rank, "."), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      alt: name,
      src: row.imgurl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 23
      }
    })), __jsx(StyledTableCell, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }
    }, row.name), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }
    }, row.score));
  })) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6",
    className: classes.title,
    style: {
      fontFamily: "'Russo One', sans-serif",
      fontSize: 18,
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, "\xA0\xA0\xA0Loading..."))) : __jsx(_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }));
}

_s(Leadertable, "FH5TXe+kcNb+HemBqCKUBRcmAbg=", false, function () {
  return [useStyles];
});

_c = Leadertable;

var _c;

$RefreshReg$(_c, "Leadertable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZWFkZXJ0YWJsZS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRUYWJsZUNlbGwiLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJib2R5IiwicGFkZGluZyIsIlRhYmxlQ2VsbCIsIlN0eWxlZFRhYmxlUm93Iiwicm9vdCIsIlRhYmxlUm93IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRhYmxlIiwibWFyZ2luIiwibWF4V2lkdGgiLCJ3aWR0aCIsIm92ZXJmbG93WCIsIkxlYWRlcnRhYmxlIiwidXNlU3RhdGUiLCJSYW5rTGlzdCIsInNldFJhbmtMaXN0IiwibG9hZGVkIiwic2V0bG9hZGVkIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsImFwaSIsInRoZW4iLCJyZXNwb25zZSIsImxlbmd0aCIsIm1hcCIsInJvdyIsImluZGV4IiwicmFuayIsIm5hbWUiLCJpbWd1cmwiLCJzY29yZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzdDQyxRQUFJLEVBQUU7QUFDSkMscUJBQWUsRUFBRSxTQURiO0FBRUpDLFdBQUssRUFBRSxPQUZIO0FBR0pDLFlBQU0sRUFBRSxNQUhKO0FBSUpDLGdCQUFVLEVBQUUsV0FKUjtBQUtKQyxjQUFRLEVBQUU7QUFMTixLQUR1QztBQVE3Q0MsUUFBSSxFQUFFO0FBQ0pGLGdCQUFVLEVBQUUsV0FEUjtBQUVKQyxjQUFRLEVBQUUsRUFGTjtBQUdKSCxXQUFLLEVBQUUsTUFISDtBQUlK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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBOUJOLENBREYsQ0FEQSxHQTBDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQ04sQ0FERjtBQStDRDs7R0FoRXVCaUIsVztVQUdOUCxTOzs7S0FITU8sVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZWFkZXJib2FyZC5lMDFjM2I1ZjZmZTAzMmM1NTlkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCI7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZW52Lmpzb24nO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL0xvYWRlclwiO1xuXG5jb25zdCBTdHlsZWRUYWJsZUNlbGwgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgaGVhZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDQ0XCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGZvbnRGYW1pbHk6IFwiUnVzc28gT25lXCIsXG4gICAgZm9udFNpemU6IDE2XG4gIH0sXG4gIGJvZHk6IHtcbiAgICBmb250RmFtaWx5OiBcIlJ1c3NvIE9uZVwiLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBwYWRkaW5nOlwiNXB4XCJcbiAgfSxcbn0pKShUYWJsZUNlbGwpO1xuXG5jb25zdCBTdHlsZWRUYWJsZVJvdyA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgXCImOm50aC1vZi10eXBlKDEpXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMjAwLDAsMC40KSAhaW1wb3J0YW50XCIsXG4gICAgICBjb2xvcjogXCIjMDAwICFpbXBvcnRhbnRcIlxuICAgIH0sXG4gICAgXCImOm50aC1vZi10eXBlKDIpXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMjAwLDAsMC40KSAhaW1wb3J0YW50XCIsXG4gICAgICBjb2xvcjogXCIjMDAwICFpbXBvcnRhbnRcIlxuICAgIH0sXG4gICAgXCImOm50aC1vZi10eXBlKDMpXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMjAwLDAsMC40KSAhaW1wb3J0YW50XCIsXG4gICAgICBjb2xvcjogXCIjMDAwICFpbXBvcnRhbnRcIlxuICAgIH0sXG4gICAgXCImOm50aC1vZi10eXBlKG9kZClcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNTUsNTUsMTAwLDAuMylcIixcbiAgICAgIGNvbG9yOiBcIiMwMDAgIWltcG9ydGFudFwiXG4gICAgfSxcbiAgICBcIiY6bnRoLW9mLXR5cGUoZXZlbilcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC43KVwiLFxuICAgICAgY29sb3I6IFwid2hpdGUgIWltcG9ydGFudFwiLFxuICAgIH0sXG4gIH0sXG59KSkoVGFibGVSb3cpO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdGFibGU6IHtcbiAgICBtYXJnaW46XCIxNXB4IGF1dG9cIixcbiAgICBtYXhXaWR0aDogXCI5MDBweFwiLFxuICAgIHdpZHRoOlwiOTAlXCIsXG4gICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYWRlcnRhYmxlKCkge1xuICBjb25zdCBbUmFua0xpc3QsIHNldFJhbmtMaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRlZCwgc2V0bG9hZGVkXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoZGF0YS5hcGkgKyBcIi9hcGkvbGVhZGVyYm9hcmRcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzZXRSYW5rTGlzdChyZXNwb25zZS5kYXRhKTtcblxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0bG9hZGVkKHRydWUpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7IChsb2FkZWQgPT09IHRydWUpID9cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydGFibGVcIj5cbiAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwiY3VzdG9taXplZCB0YWJsZVwiPlxuICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+UmFuazwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+PC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj5QbGF5ZXI8L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlBvaW50czwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICB7UmFua0xpc3QubGVuZ3RoID8gKFxuICAgICAgICAgICAgICA8VGFibGVCb2R5IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiJ0JhcmxvdycsIHNhbnMtc2VyaWZcIiB9fT5cbiAgICAgICAgICAgICAgICB7UmFua0xpc3QubWFwKChyb3csIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVSb3dcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCInQmFybG93Jywgc2Fucy1zZXJpZlwiIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtyb3cucmFua30uXG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Jvdy5pbWd1cmx9XG4gICAgICAgICAgICAgICAgICAgICAgLz48L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93Lm5hbWV9PC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+e3Jvdy5zY29yZX08L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiJ1J1c3NvIE9uZScsIHNhbnMtc2VyaWZcIiwgZm9udFNpemU6IDE4LCBjb2xvcjogJ3doaXRlJyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO0xvYWRpbmcuLi5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDogPExvYWRlciAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=