webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/GoogleLog3.js":
/*!**********************************!*\
  !*** ./components/GoogleLog3.js ***!
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/home/anwesha/Desktop/screencast/components/GoogleLog3.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var useStyles = function useStyles(theme) {
  return {
    root: {
      "& > *": {
        margin: theme.spacing(0)
      }
    }
  };
};

var GoogleLog3 = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(GoogleLog3, _React$Component);

  var _super = _createSuper(GoogleLog3);

  function GoogleLog3() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GoogleLog3);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "refresh", function (a, r) {
      console.log(r);
      localStorage.setItem("token", a);
      console.log(localStorage.getItem("token"));
      var t = setInterval(function () {
        axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("https://screencast20.azurewebsites.net/api/refresh", {
          refresh: r
        }).then(function (re) {
          alert("Refreshing");
          console.log(re);
          localStorage.setItem("token", re.data.access);
          console.log(localStorage.getItem("token"));
        });
      }, 5000);
      localStorage.setItem("interval_id", t);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "responseGoogle", function (response) {
      console.log(response);
      localStorage.setItem('token', response.tokenObj.access_token);
      console.log(localStorage.getItem('token'));

      _this.setState({
        userDetails: response.profileObj,
        isUserLoggedIn: true,
        access: response.tokenObj.access_token
      });

      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("https://screencast20.azurewebsites.net/api/googlelogin", {
        token: response.tokenObj.access_token
      }).then(function (res) {
        console.log(res);
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem('ref_token', res.data.refresh_token);

        _this.setState({
          access: res.data.access_token
        });

        _this.refresh(res.data.access_token, res.data.refresh_token);

        console.log(localStorage.getItem("token"));
        console.log(_this.state.access);
        next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/game");
      });
      console.log(typeof response.profileObj.name); //string

      localStorage.setItem("email", response.profileObj.email);
      localStorage.setItem("name", response.profileObj.name);
      localStorage.setItem("image", response.profileObj.imageUrl);
    });

    _this.state = {
      userDetails: {},
      isUserLoggedIn: false,
      access: ""
    };
    _this.refresh = _this.refresh.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GoogleLog3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("YES");

      if (localStorage.getItem("email")) {
        this.refresh;
        next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/game");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return __jsx("div", {
        className: "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
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
              lineNumber: 96,
              columnNumber: 15
            }
          }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
            variant: "contained",
            color: "secondary",
            className: "button",
            onClick: renderProps.onClick,
            href: "/game",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }
          }, "LogIn with Google"));
        },
        onSuccess: this.responseGoogle //isSignedIn ??
        ,
        onFailure: this.responseGoogle //handle later
        ,
        cookiePolicy: "single_host_origin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      }));
    }
  }]);

  return GoogleLog3;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(useStyles)(GoogleLog3));

/***/ })

})
//# sourceMappingURL=index.js.13ea4a2086f0ac3ed74b.hot-update.js.map