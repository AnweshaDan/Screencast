webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./components/Leadertable.js":
/*!***********************************!*\
  !*** ./components/Leadertable.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _Leadertable_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Leadertable.module.css */ "./components/Leadertable.module.css");
/* harmony import */ var _Leadertable_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Leadertable_module_css__WEBPACK_IMPORTED_MODULE_14__);





var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Leadertable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var StyledTableCell = function StyledTableCell(theme) {
  return {
    head: {
      backgroundColor: "#000033",
      color: "white",
      border: "none"
    },
    body: {
      fontSize: 14,
      color: "white",
      border: "none"
    }
  }(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"]);
};

var StyledTableRow = function StyledTableRow(theme) {
  return {
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: "rgba(255,255,255,0.4)"
      },
      '&:nth-of-type(even)': {
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white"
      }
    }
  }(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"]);
};

function createData(Rank, Player, Points) {
  return {
    Rank: Rank,
    Player: Player,
    Points: Points
  };
}

var rows = [createData(1, 'A', 50), createData(1, 'A', 50), createData(1, 'A', 50), createData(1, 'A', 50), createData(1, 'A', 50), createData(1, 'A', 50), createData(1, 'A', 50), createData(1, 'A', 50)];
var useStyles = {
  table: {
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "auto",
    maxWidth: '700px',
    position: "relative"
  }
};

var Leadertable = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Leadertable, _React$Component);

  var _super = _createSuper(Leadertable);

  function Leadertable() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Leadertable);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Leadertable, [{
    key: "render",
    value: function render() {
      var _this = this;

      var classes = this.props.classes;
      return __jsx("div", {
        classname: classes.root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "rtable",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: classes.table,
        "aria-label": "customized table",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }, __jsx(StyledTableCell, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }
      }, "Rank"), __jsx(StyledTableCell, {
        align: "left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }
      }, "Player"), __jsx(StyledTableCell, {
        align: "left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 15
        }
      }, "Points"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }
      }, rows.map(function (row) {
        return __jsx(StyledTableRow, {
          key: row.name,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }
        }, __jsx(StyledTableCell, {
          component: "th",
          scope: "row",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 17
          }
        }, row.Rank), __jsx(StyledTableCell, {
          align: "left",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 17
          }
        }, row.Player), __jsx(StyledTableCell, {
          align: "left",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 17
          }
        }, row.Points));
      })))));
    }
  }]);

  return Leadertable;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(useStyles)(Leadertable));

/***/ })

})
//# sourceMappingURL=leaderboard.js.e849864f8f0d92697be7.hot-update.js.map