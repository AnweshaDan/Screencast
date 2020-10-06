webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FbLog2.js":
/*!******************************!*\
  !*** ./components/FbLog2.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var social_media_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! social-media-icons-react */ "./node_modules/social-media-icons-react/dist/index.js");
/* harmony import */ var social_media_icons_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(social_media_icons_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-facebook-login/dist/facebook-login-render-props */ "./node_modules/react-facebook-login/dist/facebook-login-render-props.js");
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/AnsAlert */ "./components/AnsAlert.js");
/* harmony import */ var _env_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../env.json */ "./env.json");
var _env_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../env.json */ "./env.json", 1);








var _this = undefined,
    _jsxFileName = "/home/rishav4101/Screencast/components/FbLog2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var LoginButton = function LoginButton(_ref) {
  var _jsx;

  var facebookResponse = _ref.facebookResponse;
  return __jsx(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_9___default.a, (_jsx = {
    appId: "365959954585586",
    autoload: true,
    fields: "name,email,picture",
    callback: facebookResponse,
    isMobile: false,
    disableMobileRedirect: true
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "disableMobileRedirect", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "redirectUri", "https://screencast.trennds.com/"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "render", function render(renderProps) {
    return __jsx("button", {
      style: {
        backgroundColor: "rgba(0,0,0,0)",
        border: "none"
      },
      onClick: renderProps.onClick,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, __jsx(social_media_icons_react__WEBPACK_IMPORTED_MODULE_8__["SocialMediaIconsReact"], {
      borderColor: "rgba(0,0,0,0.25)",
      borderWidth: "3",
      borderStyle: "inset",
      icon: "facebook",
      iconColor: "rgba(255,255,255,1)",
      backgroundColor: "rgba(28,149,223,1)",
      iconSize: "6",
      roundness: "29%",
      size: "54",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }));
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }), _jsx));
};

_c = LoginButton;

var FbLog2 = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FbLog2, _React$Component);

  var _super = _createSuper(FbLog2);

  function FbLog2() {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FbLog2);

    _this2 = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "facebookResponse", function (response) {
      localStorage.setItem("email", response.email);
      localStorage.setItem("name", response.name);
      localStorage.setItem("image", response.picture.data.url);
      localStorage.setItem('token', response.accessToken);
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(_env_json__WEBPACK_IMPORTED_MODULE_13__.api + "/api/facebooklogin", {
        accesstoken: response.accessToken,
        expiration_time: response.data_access_expiration_time,
        userID: response.userID
      }).then(function (res) {
        localStorage.setItem('token', res.data.access_token);

        _this2.setState({
          result: res.data.quiz_finished,
          user: response,
          isSignedIn: true,
          access: res.data.access_token
        }, function () {
          if (localStorage.getItem('start') <= Date.now()) {
            if (!res.data.quiz_finished && localStorage.getItem('end') > Date.now()) next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/game');else if (res.data.quiz_finished && localStorage.getItem('end') > Date.now()) {
              next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/finale');
            } else if (res.data.error === "No active quizes") {
              next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/finale');
            } else {
              next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/error');
            }
          } else next_router__WEBPACK_IMPORTED_MODULE_10___default.a.reload();
        });
      })["catch"](function (err) {
        console.log(err);
      });
    });

    _this2.state = {
      user: false,
      isSignedIn: false,
      access: "",
      result: false
    };
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FbLog2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // if(localStorage.getItem("email"))
      // {
      //   this.setState({isSignedIn:true},()=>{
      //     if((localStorage.getItem('start') <= Date.now()))
      //       Router.push("/game");
      //     else 
      //       {
      //         AnsAlert(-1);
      //       }
      //   })
      // }    
      if (localStorage.getItem('day') == 3 && localStorage.getItem('end') < Date.now()) next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/finale');else {
        if (localStorage.getItem("email")) {
          this.setState({
            isUserLoggedIn: true
          }, function () {});
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 7
        }
      }, !this.state.isSignedIn && __jsx("div", {
        style: {
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "0px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }
      }, __jsx(LoginButton, {
        facebookResponse: this.facebookResponse,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }
      })));
    }
  }]);

  return FbLog2;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FbLog2);

var _c;

$RefreshReg$(_c, "LoginButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GYkxvZzIuanMiXSwibmFtZXMiOlsiTG9naW5CdXR0b24iLCJmYWNlYm9va1Jlc3BvbnNlIiwicmVuZGVyUHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJvbkNsaWNrIiwiRmJMb2cyIiwicmVzcG9uc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZW1haWwiLCJuYW1lIiwicGljdHVyZSIsImRhdGEiLCJ1cmwiLCJhY2Nlc3NUb2tlbiIsImF4aW9zIiwicG9zdCIsImFwaSIsImFjY2Vzc3Rva2VuIiwiZXhwaXJhdGlvbl90aW1lIiwiZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lIiwidXNlcklEIiwidGhlbiIsInJlcyIsImFjY2Vzc190b2tlbiIsInNldFN0YXRlIiwicmVzdWx0IiwicXVpel9maW5pc2hlZCIsInVzZXIiLCJpc1NpZ25lZEluIiwiYWNjZXNzIiwiZ2V0SXRlbSIsIkRhdGUiLCJub3ciLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJyZWxvYWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJpc1VzZXJMb2dnZWRJbiIsIm1hcmdpbiIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQTs7QUFBQSxNQUFHQyxnQkFBSCxRQUFHQSxnQkFBSDtBQUFBLFNBQ2xCLE1BQUMsNEZBQUQ7QUFDRSxTQUFLLEVBQUMsaUJBRFI7QUFFRSxZQUFRLEVBQUUsSUFGWjtBQUdFLFVBQU0sRUFBQyxvQkFIVDtBQUlFLFlBQVEsRUFBRUEsZ0JBSlo7QUFLRSxZQUFRLEVBQUUsS0FMWjtBQU1FLHlCQUFxQixF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QUUsS0FBSzdDLGdCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsQ0FGSixDQURGO0FBYUQ7Ozs7RUFwRmtCOEMsNENBQUssQ0FBQ0MsUzs7QUF1RloxQyxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNjc1ZTVmOWM4MzQwMDNmODU2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU29jaWFsTWVkaWFJY29uc1JlYWN0IH0gZnJvbSAnc29jaWFsLW1lZGlhLWljb25zLXJlYWN0JztcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luL2Rpc3QvZmFjZWJvb2stbG9naW4tcmVuZGVyLXByb3BzJ1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBBbnNBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnNBbGVydFwiXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9lbnYuanNvbic7XG5cbmNvbnN0IExvZ2luQnV0dG9uID0gKHsgZmFjZWJvb2tSZXNwb25zZSB9KSA9PiAoXG4gIDxGYWNlYm9va0xvZ2luXG4gICAgYXBwSWQ9XCIzNjU5NTk5NTQ1ODU1ODZcIlxuICAgIGF1dG9sb2FkPXt0cnVlfVxuICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXG4gICAgY2FsbGJhY2s9e2ZhY2Vib29rUmVzcG9uc2V9XG4gICAgaXNNb2JpbGU9e2ZhbHNlfVxuICAgIGRpc2FibGVNb2JpbGVSZWRpcmVjdD17dHJ1ZX1cbiAgICBkaXNhYmxlTW9iaWxlUmVkaXJlY3RcbiAgICByZWRpcmVjdFVyaT1cImh0dHBzOi8vc2NyZWVuY2FzdC50cmVubmRzLmNvbS9cIlxuICAgIHJlbmRlcj17cmVuZGVyUHJvcHMgPT4gKFxuICAgICAgPGJ1dHRvbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLCBib3JkZXI6IFwibm9uZVwiIH19IG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9PlxuICAgICAgICA8U29jaWFsTWVkaWFJY29uc1JlYWN0IGJvcmRlckNvbG9yPVwicmdiYSgwLDAsMCwwLjI1KVwiIGJvcmRlcldpZHRoPVwiM1wiIGJvcmRlclN0eWxlPVwiaW5zZXRcIiBpY29uPVwiZmFjZWJvb2tcIiBpY29uQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCIgYmFja2dyb3VuZENvbG9yPVwicmdiYSgyOCwxNDksMjIzLDEpXCIgaWNvblNpemU9XCI2XCIgcm91bmRuZXNzPVwiMjklXCIgc2l6ZT1cIjU0XCIgLz5cbiAgICAgIDwvYnV0dG9uPil9XG4gID5cbiAgPC9GYWNlYm9va0xvZ2luPlxuKTtcblxuY2xhc3MgRmJMb2cyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcjogZmFsc2UsXG4gICAgICBpc1NpZ25lZEluOiBmYWxzZSxcbiAgICAgIGFjY2VzczogXCJcIixcbiAgICAgIHJlc3VsdDogZmFsc2VcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpXG4gICAgLy8ge1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7aXNTaWduZWRJbjp0cnVlfSwoKT0+e1xuICAgIC8vICAgICBpZigobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0JykgPD0gRGF0ZS5ub3coKSkpXG4gICAgLy8gICAgICAgUm91dGVyLnB1c2goXCIvZ2FtZVwiKTtcbiAgICAvLyAgICAgZWxzZSBcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBBbnNBbGVydCgtMSk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgfSlcbiAgICAvLyB9ICAgIFxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF5JykgPT0gMyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykgPCBEYXRlLm5vdygpKSBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpXG4gICAgZWxzZSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNVc2VyTG9nZ2VkSW46IHRydWUgfSwgKCkgPT4ge1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgZmFjZWJvb2tSZXNwb25zZSA9IChyZXNwb25zZSkgPT4ge1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbFwiLCByZXNwb25zZS5lbWFpbCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuYW1lXCIsIHJlc3BvbnNlLm5hbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW1hZ2VcIiwgcmVzcG9uc2UucGljdHVyZS5kYXRhLnVybCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzcG9uc2UuYWNjZXNzVG9rZW4pXG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QoZGF0YS5hcGkgKyBcIi9hcGkvZmFjZWJvb2tsb2dpblwiLCB7XG4gICAgICAgIGFjY2Vzc3Rva2VuOiByZXNwb25zZS5hY2Nlc3NUb2tlbixcbiAgICAgICAgZXhwaXJhdGlvbl90aW1lOiByZXNwb25zZS5kYXRhX2FjY2Vzc19leHBpcmF0aW9uX3RpbWUsXG4gICAgICAgIHVzZXJJRDogcmVzcG9uc2UudXNlcklEXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXMuZGF0YS5hY2Nlc3NfdG9rZW4pXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc3VsdDogcmVzLmRhdGEucXVpel9maW5pc2hlZCwgdXNlcjogcmVzcG9uc2UsIGlzU2lnbmVkSW46IHRydWUsIGFjY2VzczogcmVzLmRhdGEuYWNjZXNzX3Rva2VuIH0sICgpID0+IHtcbiAgICAgICAgICBpZiAoKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpIDw9IERhdGUubm93KCkpKSB7XG4gICAgICAgICAgICBpZiAoIShyZXMuZGF0YS5xdWl6X2ZpbmlzaGVkKSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykgPiBEYXRlLm5vdygpKSBSb3V0ZXIucHVzaCgnL2dhbWUnKVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzLmRhdGEucXVpel9maW5pc2hlZCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykgPiBEYXRlLm5vdygpKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmluYWxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKChyZXMuZGF0YS5lcnJvcikgPT09IFwiTm8gYWN0aXZlIHF1aXplc1wiKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmluYWxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgUm91dGVyLnJlbG9hZCgpO1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgeyAhdGhpcy5zdGF0ZS5pc1NpZ25lZEluICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMCBhdXRvXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZ1RvcDogXCIwcHhcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMb2dpbkJ1dHRvbiBmYWNlYm9va1Jlc3BvbnNlPXt0aGlzLmZhY2Vib29rUmVzcG9uc2V9ID48L0xvZ2luQnV0dG9uPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmJMb2cyOyJdLCJzb3VyY2VSb290IjoiIn0=