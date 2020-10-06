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
      fontSize: 14,
      color: "#fff",
      border: "none"
    }
  };
})(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"]);
var StyledTableRow = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    root: {
      "&:nth-of-type(1)": {
        backgroundColor: "rgba(0,255,0,0.3) !important",
        color: "#000 !important"
      },
      "&:nth-of-type(2)": {
        backgroundColor: "rgba(0,255,0,0.3) !important",
        color: "#000 !important"
      },
      "&:nth-of-type(3)": {
        backgroundColor: "rgba(0,255,0,0.3) !important",
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
    marginTop: "15px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "auto",
    width: "95%",
    maxWidth: "900px",
    position: "relative",
    marginBottom: "0px",
    overflowX: "hidden",
    padding: "10px"
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
      lineNumber: 88,
      columnNumber: 5
    }
  }, loaded === true ? __jsx("div", {
    className: "rtable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.table,
    "aria-label": "customized table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, __jsx(StyledTableCell, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, "Rank"), __jsx(StyledTableCell, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, "Player"), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, "Points"))), RankList.length ? __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      fontFamily: "'Barlow', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
        lineNumber: 103,
        columnNumber: 19
      }
    }, __jsx(StyledTableCell, {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 21
      }
    }, row.rank, "."), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      alt: name,
      src: row.imgurl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 23
      }
    })), __jsx(StyledTableCell, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }, row.name), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
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
      lineNumber: 121,
      columnNumber: 17
    }
  }, "\xA0\xA0\xA0Loading..."))) : __jsx(_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZWFkZXJ0YWJsZS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRUYWJsZUNlbGwiLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJib2R5IiwiVGFibGVDZWxsIiwiU3R5bGVkVGFibGVSb3ciLCJyb290IiwiVGFibGVSb3ciLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGFibGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5Iiwid2lkdGgiLCJtYXhXaWR0aCIsInBvc2l0aW9uIiwibWFyZ2luQm90dG9tIiwib3ZlcmZsb3dYIiwicGFkZGluZyIsIkxlYWRlcnRhYmxlIiwidXNlU3RhdGUiLCJSYW5rTGlzdCIsInNldFJhbmtMaXN0IiwibG9hZGVkIiwic2V0bG9hZGVkIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsImFwaSIsInRoZW4iLCJyZXNwb25zZSIsImxlbmd0aCIsIm1hcCIsInJvdyIsImluZGV4IiwicmFuayIsIm5hbWUiLCJpbWd1cmwiLCJzY29yZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzdDQyxRQUFJLEVBQUU7QUFDSkMscUJBQWUsRUFBRSxTQURiO0FBRUpDLFdBQUssRUFBRSxPQUZIO0FBR0pDLFlBQU0sRUFBRSxNQUhKO0FBSUpDLGdCQUFVLEVBQUUsV0FKUjtBQUtKQyxjQUFRLEVBQUU7QUFMTixLQUR1QztBQVE3Q0MsUUFBSSxFQUFFO0FB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QURILENBREQsR0FxQkcsTUFBQyxvRUFBRDtBQUNFLFdBQU8sRUFBQyxJQURWO0FBRUUsYUFBUyxFQUFFZixPQUFPLENBQUNnQixLQUZyQjtBQUdFLFNBQUssRUFBRTtBQUFFMUMsZ0JBQVUsRUFBRSx5QkFBZDtBQUF5Q0MsY0FBUSxFQUFFLEVBQW5EO0FBQXVESCxXQUFLLEVBQUU7QUFBOUQsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQTlCTixDQURGLENBREEsR0EwQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0NOLENBREY7QUErQ0Q7O0dBaEV1QnNCLFc7VUFHTmIsUzs7O0tBSE1hLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuYTRjNDkyY2FlNmYzNjg0NmM4MDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBkYXRhIGZyb20gJy4uL2Vudi5qc29uJztcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9Mb2FkZXJcIjtcblxuY29uc3QgU3R5bGVkVGFibGVDZWxsID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XG4gIGhlYWQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDA0NFwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBmb250RmFtaWx5OiBcIlJ1c3NvIE9uZVwiLFxuICAgIGZvbnRTaXplOiAxNlxuICB9LFxuICBib2R5OiB7XG4gICAgZm9udEZhbWlseTogXCJSdXNzbyBPbmVcIixcbiAgICBmb250U2l6ZTogMTQsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gIH0sXG59KSkoVGFibGVDZWxsKTtcblxuY29uc3QgU3R5bGVkVGFibGVSb3cgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIFwiJjpudGgtb2YtdHlwZSgxKVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDI1NSwwLDAuMykgIWltcG9ydGFudFwiLFxuICAgICAgY29sb3I6IFwiIzAwMCAhaW1wb3J0YW50XCJcbiAgICB9LFxuICAgIFwiJjpudGgtb2YtdHlwZSgyKVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDI1NSwwLDAuMykgIWltcG9ydGFudFwiLFxuICAgICAgY29sb3I6IFwiIzAwMCAhaW1wb3J0YW50XCJcbiAgICB9LFxuICAgIFwiJjpudGgtb2YtdHlwZSgzKVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDI1NSwwLDAuMykgIWltcG9ydGFudFwiLFxuICAgICAgY29sb3I6IFwiIzAwMCAhaW1wb3J0YW50XCJcbiAgICB9LFxuICAgIFwiJjpudGgtb2YtdHlwZShvZGQpXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDU1LDU1LDEwMCwwLjMpXCIsXG4gICAgICBjb2xvcjogXCIjMDAwICFpbXBvcnRhbnRcIlxuICAgIH0sXG4gICAgXCImOm50aC1vZi10eXBlKGV2ZW4pXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNylcIixcbiAgICAgIGNvbG9yOiBcIndoaXRlICFpbXBvcnRhbnRcIixcbiAgICB9LFxuICB9LFxufSkpKFRhYmxlUm93KTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHRhYmxlOiB7XG4gICAgbWFyZ2luVG9wOiBcIjE1cHhcIixcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgZGlzcGxheTogXCJhdXRvXCIsXG4gICAgd2lkdGg6XCI5NSVcIixcbiAgICBtYXhXaWR0aDogXCI5MDBweFwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjBweFwiLFxuICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcbiAgICBwYWRkaW5nOlwiMTBweFwiXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhZGVydGFibGUoKSB7XG4gIGNvbnN0IFtSYW5rTGlzdCwgc2V0UmFua0xpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGVkLCBzZXRsb2FkZWRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChkYXRhLmFwaSArIFwiL2FwaS9sZWFkZXJib2FyZFwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldFJhbmtMaXN0KHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRsb2FkZWQodHJ1ZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsgKGxvYWRlZCA9PT0gdHJ1ZSkgP1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ0YWJsZVwiPlxuICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XG4gICAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD5SYW5rPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD48L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlBsYXllcjwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+UG9pbnRzPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgIHtSYW5rTGlzdC5sZW5ndGggPyAoXG4gICAgICAgICAgICAgIDxUYWJsZUJvZHkgc3R5bGU9e3sgZm9udEZhbWlseTogXCInQmFybG93Jywgc2Fucy1zZXJpZlwiIH19PlxuICAgICAgICAgICAgICAgIHtSYW5rTGlzdC5tYXAoKHJvdywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZVJvd1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIidCYXJsb3cnLCBzYW5zLXNlcmlmXCIgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Jvdy5yYW5rfS5cbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cm93LmltZ3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAvPjwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cubmFtZX08L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj57cm93LnNjb3JlfTwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCInUnVzc28gT25lJywgc2Fucy1zZXJpZlwiLCBmb250U2l6ZTogMTgsIGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7TG9hZGluZy4uLlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgOiA8TG9hZGVyIC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==