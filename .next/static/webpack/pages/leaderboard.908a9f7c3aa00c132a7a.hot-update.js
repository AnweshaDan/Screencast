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
      lineNumber: 82,
      columnNumber: 5
    }
  }, loaded === true ? __jsx("div", {
    className: "rtable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.table,
    "aria-label": "customized table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx(StyledTableCell, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "Rank"), __jsx(StyledTableCell, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "Player"), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "Points"))), RankList.length ? __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      fontFamily: "'Barlow', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
        lineNumber: 97,
        columnNumber: 19
      }
    }, __jsx(StyledTableCell, {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, row.rank, "."), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      alt: name,
      src: row.imgurl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 23
      }
    })), __jsx(StyledTableCell, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, row.name), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
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
      lineNumber: 115,
      columnNumber: 17
    }
  }, "\xA0\xA0\xA0Loading..."))) : __jsx(_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZWFkZXJ0YWJsZS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRUYWJsZUNlbGwiLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJib2R5IiwiVGFibGVDZWxsIiwiU3R5bGVkVGFibGVSb3ciLCJyb290IiwiVGFibGVSb3ciLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGFibGUiLCJtYXJnaW4iLCJtYXhXaWR0aCIsIndpZHRoIiwib3ZlcmZsb3dYIiwiTGVhZGVydGFibGUiLCJ1c2VTdGF0ZSIsIlJhbmtMaXN0Iiwic2V0UmFua0xpc3QiLCJsb2FkZWQiLCJzZXRsb2FkZWQiLCJjbGFzc2VzIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwiYXBpIiwidGhlbiIsInJlc3BvbnNlIiwibGVuZ3RoIiwibWFwIiwicm93IiwiaW5kZXgiLCJyYW5rIiwibmFtZSIsImltZ3VybCIsInNjb3JlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDN0NDLFFBQUksRUFBRTtBQUNKQyxxQkFBZSxFQUFFLFNBRGI7QUFFSkMsV0FBSyxFQUFFLE9BRkg7QUFHSkMsWUFBTSxFQUFFLE1BSEo7QUFJSkMsZ0JBQVUsRUFBRSxXQUpSO0FBS0pDLGNBQVEsRUFBRTtBQUxOLEtBRHVDO0FBUTdDQyxRQUFJLEVBQUU7QUFDSkYsZ0JBQVUsRUFBRSxXQURSO0FBRUpDLGNBQVEsRUFBRSxFQUZOO0FBR0pILFdBQUssRUFBRSxNQUhIO0FBSUpDLFlBQU0sRUFB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QkE5Qk4sQ0FERixDQURBLEdBMENFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNDTixDQURGO0FBK0NEOztHQWhFdUJnQixXO1VBR05QLFM7OztLQUhNTyxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xlYWRlcmJvYXJkLjkwOGE5ZjdjM2FhMDBjMTMyYTdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIjtcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIjtcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9lbnYuanNvbic7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vTG9hZGVyXCI7XG5cbmNvbnN0IFN0eWxlZFRhYmxlQ2VsbCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBoZWFkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwNDRcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgZm9udEZhbWlseTogXCJSdXNzbyBPbmVcIixcbiAgICBmb250U2l6ZTogMTZcbiAgfSxcbiAgYm9keToge1xuICAgIGZvbnRGYW1pbHk6IFwiUnVzc28gT25lXCIsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICB9LFxufSkpKFRhYmxlQ2VsbCk7XG5cbmNvbnN0IFN0eWxlZFRhYmxlUm93ID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBcIiY6bnRoLW9mLXR5cGUoMSlcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwyMDAsMCwwLjQpICFpbXBvcnRhbnRcIixcbiAgICAgIGNvbG9yOiBcIiMwMDAgIWltcG9ydGFudFwiXG4gICAgfSxcbiAgICBcIiY6bnRoLW9mLXR5cGUoMilcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwyMDAsMCwwLjQpICFpbXBvcnRhbnRcIixcbiAgICAgIGNvbG9yOiBcIiMwMDAgIWltcG9ydGFudFwiXG4gICAgfSxcbiAgICBcIiY6bnRoLW9mLXR5cGUoMylcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwyMDAsMCwwLjQpICFpbXBvcnRhbnRcIixcbiAgICAgIGNvbG9yOiBcIiMwMDAgIWltcG9ydGFudFwiXG4gICAgfSxcbiAgICBcIiY6bnRoLW9mLXR5cGUob2RkKVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg1NSw1NSwxMDAsMC4zKVwiLFxuICAgICAgY29sb3I6IFwiIzAwMCAhaW1wb3J0YW50XCJcbiAgICB9LFxuICAgIFwiJjpudGgtb2YtdHlwZShldmVuKVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLjcpXCIsXG4gICAgICBjb2xvcjogXCJ3aGl0ZSAhaW1wb3J0YW50XCIsXG4gICAgfSxcbiAgfSxcbn0pKShUYWJsZVJvdyk7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB0YWJsZToge1xuICAgIG1hcmdpbjpcIjE1cHggYXV0b1wiLFxuICAgIG1heFdpZHRoOiBcIjkwMHB4XCIsXG4gICAgd2lkdGg6XCI5MCVcIixcbiAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVhZGVydGFibGUoKSB7XG4gIGNvbnN0IFtSYW5rTGlzdCwgc2V0UmFua0xpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGVkLCBzZXRsb2FkZWRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChkYXRhLmFwaSArIFwiL2FwaS9sZWFkZXJib2FyZFwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldFJhbmtMaXN0KHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRsb2FkZWQodHJ1ZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsgKGxvYWRlZCA9PT0gdHJ1ZSkgP1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ0YWJsZVwiPlxuICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJjdXN0b21pemVkIHRhYmxlXCI+XG4gICAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD5SYW5rPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD48L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlBsYXllcjwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+UG9pbnRzPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgIHtSYW5rTGlzdC5sZW5ndGggPyAoXG4gICAgICAgICAgICAgIDxUYWJsZUJvZHkgc3R5bGU9e3sgZm9udEZhbWlseTogXCInQmFybG93Jywgc2Fucy1zZXJpZlwiIH19PlxuICAgICAgICAgICAgICAgIHtSYW5rTGlzdC5tYXAoKHJvdywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZVJvd1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIidCYXJsb3cnLCBzYW5zLXNlcmlmXCIgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Jvdy5yYW5rfS5cbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cm93LmltZ3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAvPjwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cubmFtZX08L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj57cm93LnNjb3JlfTwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCInUnVzc28gT25lJywgc2Fucy1zZXJpZlwiLCBmb250U2l6ZTogMTgsIGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7TG9hZGluZy4uLlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgOiA8TG9hZGVyIC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==