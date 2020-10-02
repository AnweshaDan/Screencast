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
      border: "none"
    }
  };
})(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"]);
var StyledTableRow = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "rgba(255,255,255,0.5)",
        color: "#000"
      },
      "&:nth-of-type(even)": {
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white"
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      RankList = _useState[0],
      setRankList = _useState[1];

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
    });
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "rtable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.table,
    "aria-label": "customized table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(StyledTableCell, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Rank"), __jsx(StyledTableCell, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, "Player"), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, "Points"))), RankList.length ? __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      fontFamily: "'Barlow', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
        lineNumber: 89,
        columnNumber: 17
      }
    }, __jsx(StyledTableCell, {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 19
      }
    }, row.rank, "."), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      alt: name,
      src: row.imgurl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    })), __jsx(StyledTableCell, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, row.name), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
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
      lineNumber: 111,
      columnNumber: 13
    }
  }, "\xA0\xA0\xA0Loading..."))));
}

_s(Leadertable, "1G8/aO6V87q6UDrL4l4VNidnfz0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZWFkZXJ0YWJsZS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRUYWJsZUNlbGwiLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJib2R5IiwiVGFibGVDZWxsIiwiU3R5bGVkVGFibGVSb3ciLCJyb290IiwiVGFibGVSb3ciLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGFibGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5IiwibWF4V2lkdGgiLCJwb3NpdGlvbiIsIm1hcmdpbkJvdHRvbSIsIkxlYWRlcnRhYmxlIiwidXNlU3RhdGUiLCJSYW5rTGlzdCIsInNldFJhbmtMaXN0IiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsImFwaSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJyb3ciLCJpbmRleCIsInJhbmsiLCJuYW1lIiwiaW1ndXJsIiwic2NvcmUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxlQUFlLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDN0NDLFFBQUksRUFBRTtBQUNKQyxxQkFBZSxFQUFFLFNBRGI7QUFFSkMsV0FBSyxFQUFFLE9BRkg7QUFHSkMsWUFBTSxFQUFFLE1BSEo7QUFJSkMsZ0JBQVUsRUFBQyxXQUpQO0FBS0pDLGNBQVEsRUFBRTtBQUxOLEtBRHVDO0FBUTdDQyxRQUFJLEVBQUU7QUFDSkYsZ0JBQVUsRUFBQyxXQURQO0FBRUpDLGNBQVEsRUFB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QTtBQUFBO0FBQUE7QUFBQSxPQUlFLE1BQUMsZUFBRDtBQUFpQixlQUFTLEVBQUMsSUFBM0I7QUFBZ0MsV0FBSyxFQUFDLEtBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2lDLEdBQUcsQ0FBQ0UsSUFEUCxNQUpGLEVBT0UsTUFBQyxlQUFEO0FBQWlCLFdBQUssRUFBQyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUUsTUFBQyxpRUFBRDtBQUVGLFNBQUcsRUFBRUMsSUFGSDtBQUdGLFNBQUcsRUFBRUgsR0FBRyxDQUFDSSxNQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQVBGLEVBZ0JBLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWtCSixHQUFHLENBQUNHLElBQXRCLENBaEJBLEVBaUJFLE1BQUMsZUFBRDtBQUFpQixXQUFLLEVBQUMsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQkgsR0FBRyxDQUFDSyxLQUFuQyxDQWpCRixDQURZO0FBQUEsR0FBYixDQURILENBREQsR0F5QkMsTUFBQyxvRUFBRDtBQUNJLFdBQU8sRUFBQyxJQURaO0FBRUksYUFBUyxFQUFFakIsT0FBTyxDQUFDa0IsS0FGdkI7QUFHSSxTQUFLLEVBQUU7QUFBRXZDLGdCQUFVLEVBQUUseUJBQWQ7QUFBeUNDLGNBQVEsRUFBQyxFQUFsRDtBQUFzREgsV0FBSyxFQUFDO0FBQTVELEtBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFwQ0osQ0FERixDQURGLENBREY7QUFxREQ7O0dBdkV1Qm1CLFc7VUFFTlYsUzs7O0tBRk1VLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGVhZGVyYm9hcmQuNDdmMzY3YzBmNzc1ZGY4Mzk3OWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBkYXRhIGZyb20gJy4uL2Vudi5qc29uJztcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9OYXZiYXIubW9kdWxlLmNzc1wiO1xuY29uc3QgU3R5bGVkVGFibGVDZWxsID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XG4gIGhlYWQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDA0NFwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBmb250RmFtaWx5OlwiUnVzc28gT25lXCIsXG4gICAgZm9udFNpemU6IDE2XG4gIH0sXG4gIGJvZHk6IHtcbiAgICBmb250RmFtaWx5OlwiUnVzc28gT25lXCIsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gIH0sXG59KSkoVGFibGVDZWxsKTtcblxuY29uc3QgU3R5bGVkVGFibGVSb3cgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIFwiJjpudGgtb2YtdHlwZShvZGQpXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIixcbiAgICAgIGNvbG9yOlwiIzAwMFwiXG4gICAgfSxcbiAgICBcIiY6bnRoLW9mLXR5cGUoZXZlbilcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC41KVwiLFxuICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICB9LFxuICB9LFxufSkpKFRhYmxlUm93KTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHRhYmxlOiB7XG4gICAgbWFyZ2luVG9wOiBcIjE1cHhcIixcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgZGlzcGxheTogXCJhdXRvXCIsXG4gICAgbWF4V2lkdGg6IFwiOTAwcHhcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIwcHhcIlxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlYWRlcnRhYmxlKCkge1xuICBjb25zdCBbUmFua0xpc3QsIHNldFJhbmtMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoZGF0YS5hcGkrXCIvYXBpL2xlYWRlcmJvYXJkXCIvKiwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICB9LFxuICAgICAgfSovKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldFJhbmtMaXN0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coUmFua0xpc3QpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ0YWJsZVwiPlxuICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwiY3VzdG9taXplZCB0YWJsZVwiPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3c+XG5cbiAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD5SYW5rPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+PC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+UGxheWVyPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+UG9pbnRzPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuXG4gICAgICAgICAge1JhbmtMaXN0Lmxlbmd0aCA/IChcbiAgICAgICAgICAgIDxUYWJsZUJvZHkgc3R5bGU9e3sgZm9udEZhbWlseTogXCInQmFybG93Jywgc2Fucy1zZXJpZlwiIH19PlxuICAgICAgICAgICAgICB7UmFua0xpc3QubWFwKChyb3csIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlUm93XG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCInQmFybG93Jywgc2Fucy1zZXJpZlwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIHtyb3cucmFua30uXG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAgIHNyYz17cm93LmltZ3VybH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLz48L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPntyb3cubmFtZX08L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+e3Jvdy5zY29yZX08L1N0eWxlZFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZFRhYmxlUm93PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiJ1J1c3NvIE9uZScsIHNhbnMtc2VyaWZcIiwgZm9udFNpemU6MTgsIGNvbG9yOid3aGl0ZSd9fVxuICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDtMb2FkaW5nLi4uXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==