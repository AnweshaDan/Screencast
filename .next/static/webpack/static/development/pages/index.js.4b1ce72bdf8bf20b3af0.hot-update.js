webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/GoogleLog2.js":
/*!**********************************!*\
  !*** ./components/GoogleLog2.js ***!
  \**********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");







var _jsxFileName = "/home/anwesha/Desktop/screencast/components/GoogleLog2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

//using this






var useStyles = function useStyles(theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  };
};

var GoogleLog2 = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(GoogleLog2, _React$Component);

  var _super = _createSuper(GoogleLog2);

  function GoogleLog2() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GoogleLog2);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "responseGoogle", function (response) {
      console.log;

      _this.setState({
        userDetails: response.profileObj,
        isUserLoggedIn: true
      }); //Router.push('/game')//use href with button later

    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "logout", function () {
      _this.setState({
        isUserLoggedIn: false
      });
    });

    _this.state = {
      userDetails: {},
      isUserLoggedIn: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GoogleLog2, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return __jsx("div", {
        className: "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 7
        }
      }, !this.state.isUserLoggedIn && __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_8___default.a, {
        clientId: "1091948986515-evn13uscvig9k6olefvrkdk3q374iumi.apps.googleusercontent.com",
        render: function render(renderProps) {
          return __jsx("div", {
            className: classes.root,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }
          }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
            variant: "contained",
            color: "secondary",
            className: "button",
            onClick: renderProps.onClick,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }
          }, "Log In with Google"));
        },
        onSuccess: this.responseGoogle,
        isSignedIn: true,
        onFailure: this.responseGoogle //handle later
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }), this.state.isUserLoggedIn && __jsx("div", {
        className: "userDetails-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "details-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }
      }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLogout"], {
        render: function render(renderProps) {
          return __jsx("div", {
            className: classes.root,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }
          }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
            variant: "contained",
            color: "secondary",
            className: "logout-button",
            onClick: renderProps.onClick,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 19
            }
          }, "Log Out"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
            variant: "contained",
            color: "secondary",
            href: "/game",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 19
            }
          }, "Play"));
        },
        onLogoutSuccess: this.logout,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: this.state.userDetails.imageUrl,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: "name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 15
        }
      }, "Welcome ", this.state.userDetails.givenName, " ", this.state.userDetails.familyName), __jsx("div", {
        className: "email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }
      }, __jsx("i", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 38
        }
      }, this.state.userDetails.email))), __jsx("div", {
        className: "bar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "stand",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }
      })));
    }
  }]);

  return GoogleLog2;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(useStyles)(GoogleLog2));

/***/ })

})
//# sourceMappingURL=index.js.4b1ce72bdf8bf20b3af0.hot-update.js.map