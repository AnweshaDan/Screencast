webpackHotUpdate("static/development/pages/game.js",{

/***/ "./pages/game.js":
/*!***********************!*\
  !*** ./pages/game.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Question */ "./components/Question.js");
/* harmony import */ var _components_Hint__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Hint */ "./components/Hint.js");
/* harmony import */ var _components_Submit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Submit */ "./components/Submit.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Answer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Answer */ "./components/Answer.js");







var _jsxFileName = "/home/anwesha/Desktop/screencast/pages/game.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var game = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(game, _React$Component);

  var _super = _createSuper(game);

  function game(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, game);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "submit", function (event) {
      console.log;
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(game, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_13___default.a, {
        params: {
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 900
              }
            },
            color: {
              value: ['#cc0000']
            },
            line_linked: {
              color: '#aa0044',
              opacity: 1
            }
          }
        },
        style: {
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          position: "fixed",
          index: "-10"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }), __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }
      }), __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }
      }), __jsx(_components_Submit__WEBPACK_IMPORTED_MODULE_12__["default"], {
        submit: this.submit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "jsx-1891829302",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }, __jsx(_components_Hint__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1891829302",
        __self: this
      }, "div.jsx-1891829302{text-align:center;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0U0QixBQUcwQixrQkFDUCxXQUNkIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9RdWVzdGlvbidcbmltcG9ydCBIaW50IGZyb20gJy4uL2NvbXBvbmVudHMvSGludCdcbmltcG9ydCBTdWJtaXQgZnJvbSAnLi4vY29tcG9uZW50cy9TdWJtaXQnXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXBhcnRpY2xlcy1qcyc7XG5pbXBvcnQgQW5zd2VyIGZyb20gJy4uL2NvbXBvbmVudHMvQW5zd2VyJ1xuXG5cbmNsYXNzIGdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpXG4gICAge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIHN1Ym1pdD0oZXZlbnQpPT57XG4gICAgICAgIGNvbnNvbGUubG9nXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpXG4gICAge1xuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxQYXJ0aWNsZXNcblxuICAgICAgICAgICAgICAgIHBhcmFtcz17e1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlX2FyZWE6IDkwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbJyNjYzAwMDAnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYWEwMDQ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IFwiLTEwXCJcblxuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIDxRdWVzdGlvbiAvPlxuICAgICAgICAgICAgPEFuc3dlciAvPlxuICAgICAgICAgICAgPFN1Ym1pdCBzdWJtaXQ9e3RoaXMuc3VibWl0fS8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG5cblxuICAgICAgICAgICAgICAgIDxIaW50IC8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgIGRpdntcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIG1hcmdpbjo1cHg7XG4gICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDwvZGl2ID5cbiAgICApO1xufVxufVxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcblxuXG4iXX0= */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/game.js */")));
    }
  }]);

  return game;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (game);

/***/ })

})
//# sourceMappingURL=game.js.a839d5a9995b9b9f5acd.hot-update.js.map