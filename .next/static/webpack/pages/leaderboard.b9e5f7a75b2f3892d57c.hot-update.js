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
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Navbar.module.css */ "./components/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Loader */ "./components/Loader.js");
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
        backgroundColor: "rgba(0,0,0,0.6)",
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
    maxWidth: "900px",
    position: "relative",
    marginBottom: "0px"
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
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_env_json__WEBPACK_IMPORTED_MODULE_9__.api + "/api/leaderboard"
    /*, {
    headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
    },
    }*/
    ).then(function (response) {
      setRankList(response.data);
      console.log(response.data);
      console.log(RankList);
    }).then(function () {
      setloaded(true);
    });
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, loaded === true ? __jsx("div", {
    className: "rtable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.table,
    "aria-label": "customized table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx(StyledTableCell, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, "Rank"), __jsx(StyledTableCell, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, "Player"), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, "Points"))), RankList.length ? __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      fontFamily: "'Barlow', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
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
        lineNumber: 107,
        columnNumber: 17
      }
    }, __jsx(StyledTableCell, {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 19
      }
    }, row.rank, "."), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      alt: name,
      src: row.imgurl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    })), __jsx(StyledTableCell, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }
    }, row.name), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 19
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
      lineNumber: 129,
      columnNumber: 13
    }
  }, "\xA0\xA0\xA0Loading..."))) : __jsx(_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }));
}

_s(Leadertable, "OZiLzCgaP4w0dNzYErHNowQNUg8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZWFkZXJ0YWJsZS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRUYWJsZUNlbGwiLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJib2R5IiwiVGFibGVDZWxsIiwiU3R5bGVkVGFibGVSb3ciLCJyb290IiwiVGFibGVSb3ciLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGFibGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5IiwibWF4V2lkdGgiLCJwb3NpdGlvbiIsIm1hcmdpbkJvdHRvbSIsIkxlYWRlcnRhYmxlIiwidXNlU3RhdGUiLCJSYW5rTGlzdCIsInNldFJhbmtMaXN0IiwibG9hZGVkIiwic2V0bG9hZGVkIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsImFwaSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJyb3ciLCJpbmRleCIsInJhbmsiLCJuYW1lIiwiaW1ndXJsIiwic2NvcmUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxlQUFlLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDN0NDLFFBQUksRUFBRTtBQUNKQyxxQkFBZSxFQUFFLFNBRGI7QUFFSkMsV0FBSyxFQUFFLE9BRkg7QUFHSkMsWUFBTSxFQUFFLE1BSEo7QUFJSkMsZ0JBQVUsRUFBQyxXQUpQO0FBS0pDLGNBQVEsRUFBRTtBQUxOLEtBRHVDO0FBUTdDQyxRQUFJLEVBQUU7QUFDSkYsZ0JB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QWpCRixDQURZO0FBQUEsR0FBYixDQURILENBREQsR0F5QkMsTUFBQyxvRUFBRDtBQUNJLFdBQU8sRUFBQyxJQURaO0FBRUksYUFBUyxFQUFFakIsT0FBTyxDQUFDa0IsS0FGdkI7QUFHSSxTQUFLLEVBQUU7QUFBRXpDLGdCQUFVLEVBQUUseUJBQWQ7QUFBeUNDLGNBQVEsRUFBQyxFQUFsRDtBQUFzREgsV0FBSyxFQUFDO0FBQTVELEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFwQ0osQ0FERixDQURFLEdBa0RBLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5ESixDQURGO0FBdUREOztHQTdFdUJtQixXO1VBR05WLFM7OztLQUhNVSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlYWRlcmJvYXJkLmI5ZTVmN2E3NWIyZjM4OTJkNTdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIjtcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIjtcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9lbnYuanNvbic7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTmF2YmFyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vTG9hZGVyXCJcbmNvbnN0IFN0eWxlZFRhYmxlQ2VsbCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBoZWFkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwNDRcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgZm9udEZhbWlseTpcIlJ1c3NvIE9uZVwiLFxuICAgIGZvbnRTaXplOiAxNlxuICB9LFxuICBib2R5OiB7XG4gICAgZm9udEZhbWlseTpcIlJ1c3NvIE9uZVwiLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjb2xvcjpcIiNmZmZcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICB9LFxufSkpKFRhYmxlQ2VsbCk7XG5cbmNvbnN0IFN0eWxlZFRhYmxlUm93ID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBcIiY6bnRoLW9mLXR5cGUoMSlcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwyNTUsMCwwLjMpICFpbXBvcnRhbnRcIixcbiAgICAgIGNvbG9yOlwiIzAwMCAhaW1wb3J0YW50XCJcbiAgICB9LFxuICAgIFwiJjpudGgtb2YtdHlwZSgyKVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDI1NSwwLDAuMykgIWltcG9ydGFudFwiLFxuICAgICAgY29sb3I6XCIjMDAwICFpbXBvcnRhbnRcIlxuICAgIH0sXG4gICAgXCImOm50aC1vZi10eXBlKDMpXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMjU1LDAsMC4zKSAhaW1wb3J0YW50XCIsXG4gICAgICBjb2xvcjpcIiMwMDAgIWltcG9ydGFudFwiXG4gICAgfSxcbiAgICBcIiY6bnRoLW9mLXR5cGUob2RkKVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg1NSw1NSwxMDAsMC4zKVwiLFxuICAgICAgY29sb3I6XCIjMDAwICFpbXBvcnRhbnRcIlxuICAgIH0sXG4gICAgXCImOm50aC1vZi10eXBlKGV2ZW4pXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDAuNilcIixcbiAgICAgIGNvbG9yOiBcIndoaXRlICFpbXBvcnRhbnRcIixcbiAgICB9LFxuICB9LFxufSkpKFRhYmxlUm93KTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHRhYmxlOiB7XG4gICAgbWFyZ2luVG9wOiBcIjE1cHhcIixcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgZGlzcGxheTogXCJhdXRvXCIsXG4gICAgbWF4V2lkdGg6IFwiOTAwcHhcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIwcHhcIlxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYWRlcnRhYmxlKCkge1xuICBjb25zdCBbUmFua0xpc3QsIHNldFJhbmtMaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRlZCxzZXRsb2FkZWRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChkYXRhLmFwaStcIi9hcGkvbGVhZGVyYm9hcmRcIi8qLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIiksXG4gICAgICAgIH0sXG4gICAgICB9Ki8pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0UmFua0xpc3QocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhSYW5rTGlzdCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRsb2FkZWQodHJ1ZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsgKGxvYWRlZCA9PT0gdHJ1ZSkgP1xuICAgICAgPGRpdiBjbGFzc05hbWU9XCJydGFibGVcIj5cbiAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cImN1c3RvbWl6ZWQgdGFibGVcIj5cbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+UmFuazwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPjwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlBsYXllcjwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlBvaW50czwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlSGVhZD5cblxuICAgICAgICAgIHtSYW5rTGlzdC5sZW5ndGggPyAoXG4gICAgICAgICAgICA8VGFibGVCb2R5IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiJ0JhcmxvdycsIHNhbnMtc2VyaWZcIiB9fT5cbiAgICAgICAgICAgICAge1JhbmtMaXN0Lm1hcCgocm93LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZVJvd1xuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiJ0JhcmxvdycsIHNhbnMtc2VyaWZcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7cm93LnJhbmt9LlxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgICBzcmM9e3Jvdy5pbWd1cmx9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8+PC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93Lm5hbWV9PC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwibGVmdFwiPntyb3cuc2NvcmV9PC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZVJvdz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIidSdXNzbyBPbmUnLCBzYW5zLXNlcmlmXCIsIGZvbnRTaXplOjE4LCBjb2xvcjond2hpdGUnfX1cbiAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7TG9hZGluZy4uLlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDogPExvYWRlci8+IH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=