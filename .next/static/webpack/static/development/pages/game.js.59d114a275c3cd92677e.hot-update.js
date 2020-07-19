webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/Answer.js":
/*!******************************!*\
  !*** ./components/Answer.js ***!
  \******************************/
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
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");





var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Answer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var useStyles = function useStyles(theme) {
  return {
    root: {
      "& > *": {
        margin: theme.spacing(0),
        width: "10px"
      },
      anstype: {
        width: "600px"
      },
      ansdiv: {
        width: "600px"
      }
    }
  };
};

var Answer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Answer, _Component);

  var _super = _createSuper(Answer);

  function Answer(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Answer);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Answer, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 7
        }
      }, __jsx("form", {
        className: classes.ansdiv,
        noValidate: true,
        autoComplete: "off",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "filled-basic",
        label: "Type your answer here.",
        variant: "filled",
        onChange: this.props.change,
        onKeyDown: this.props.submit,
        value: this.props.answer,
        className: classes.anstype,
        style: {
          maxWidth: "600px",
          width: "80%"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Answer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(useStyles)(Answer));

/***/ })

})
//# sourceMappingURL=game.js.59d114a275c3cd92677e.hot-update.js.map