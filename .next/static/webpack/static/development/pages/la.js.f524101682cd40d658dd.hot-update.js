webpackHotUpdate("static/development/pages/la.js",{

/***/ "./pages/la.js":
/*!*********************!*\
  !*** ./pages/la.js ***!
  \*********************/
/*! exports provided: MatTable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTable", function() { return MatTable; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "/home/anwesha/Desktop/screencast/pages/la.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var MatTable = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MatTable, _Component);

  var _super = _createSuper(MatTable);

  function MatTable(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTable);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), 9, void 0);

    _this.state = {
      RankList: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_15___default.a.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
        console.log(response.data);

        _this2.setState({
          RankList: response.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log(this.state.RankList);
      return __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14__["default"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 7
        }
      }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
        stickyHeader: true,
        "aria-label": "sticky table",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 15
        }
      }, "Id"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
        align: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }
      }, "Name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
        align: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }
      }, "Age"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
        align: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }
      }, "Address"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
        align: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 15
        }
      }, "City"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
        align: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }
      }, "ContactNum"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
        align: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 15
        }
      }, "Salary"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          paddingRight: "60px"
        },
        align: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }
      }, "Department"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }, this.state.RankList.map(function (p, index) {
        return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
          key: index,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 24
          }
        }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
          component: "th",
          scope: "row",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 19
          }
        }, p.Id), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
          align: "right",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 19
          }
        }, p.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
          align: "right",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 16
          }
        }, p.username), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
          align: "right",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 19
          }
        }, p.email), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: {
            paddingRight: "114px"
          },
          align: "right",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 19
          }
        }, p.phone));
      }))));
    }
  }]);

  return MatTable;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (MatTable);

/***/ })

})
//# sourceMappingURL=la.js.f524101682cd40d658dd.hot-update.js.map