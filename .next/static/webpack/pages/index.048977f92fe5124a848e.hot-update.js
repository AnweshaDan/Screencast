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
  var facebookResponse = _ref.facebookResponse;
  return __jsx(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_9___default.a, {
    appId: "365959954585586",
    autoload: true,
    fields: "name,email,picture",
    callback: facebookResponse,
    render: function render(renderProps) {
      return __jsx("button", {
        style: {
          backgroundColor: "rgba(0,0,0,0)",
          border: "none"
        },
        onClick: renderProps.onClick,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 30
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
          lineNumber: 19,
          columnNumber: 17
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 49
    }
  });
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
          lineNumber: 102,
          columnNumber: 30
        }
      }, " ", !this.state.isSignedIn && __jsx("div", {
        style: {
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "0px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 60
        }
      }, __jsx(LoginButton, {
        facebookResponse: this.facebookResponse,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 33
        }
      }, " ")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GYkxvZzIuanMiXSwibmFtZXMiOlsiTG9naW5CdXR0b24iLCJmYWNlYm9va1Jlc3BvbnNlIiwicmVuZGVyUHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJvbkNsaWNrIiwiRmJMb2cyIiwicmVzcG9uc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZW1haWwiLCJuYW1lIiwicGljdHVyZSIsImRhdGEiLCJ1cmwiLCJhY2Nlc3NUb2tlbiIsImF4aW9zIiwicG9zdCIsImFwaSIsImFjY2Vzc3Rva2VuIiwiZXhwaXJhdGlvbl90aW1lIiwiZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lIiwidXNlcklEIiwidGhlbiIsInJlcyIsImFjY2Vzc190b2tlbiIsInNldFN0YXRlIiwicmVzdWx0IiwicXVpel9maW5pc2hlZCIsInVzZXIiLCJpc1NpZ25lZEluIiwiYWNjZXNzIiwiZ2V0SXRlbSIsIkRhdGUiLCJub3ciLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJyZWxvYWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJpc1VzZXJMb2dnZWRJbiIsIm1hcmdpbiIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxnQkFBSCxRQUFHQSxnQkFBSDtBQUFBLFNBQTRCLE1BQ3hDLDRGQUR3QztBQUMxQixTQUFLLEVBQUcsaUJBRGtCO0FBRXhDLFlBQVEsRUFBSyxJQUYyQjtBQUd4QyxVQUFNLEVBQUcsb0JBSCtCO0FBSXhDLFlBQVEsRUFBS0EsZ0JBSjJCO0FBS3hDLFVBQU0sRUFDRixnQkFBQUMsV0FBVztB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QUFBO0FBQUE7QUFBQSxhQUgyQixDQUQ5QixDQUFUO0FBZUg7Ozs7RUFsRmdCOEMsNENBQUssQ0FBQ0MsUzs7QUFxRloxQyxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNDg5NzdmOTJmZTUxMjRhODQ4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU29jaWFsTWVkaWFJY29uc1JlYWN0IH0gZnJvbSAnc29jaWFsLW1lZGlhLWljb25zLXJlYWN0JztcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luL2Rpc3QvZmFjZWJvb2stbG9naW4tcmVuZGVyLXByb3BzJ1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBBbnNBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnNBbGVydFwiXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9lbnYuanNvbic7XG5cbmNvbnN0IExvZ2luQnV0dG9uID0gKHsgZmFjZWJvb2tSZXNwb25zZSB9KSA9PiAoIDxcbiAgICAgICAgRmFjZWJvb2tMb2dpbiBhcHBJZCA9IFwiMzY1OTU5OTU0NTg1NTg2XCJcbiAgICAgICAgYXV0b2xvYWQgPSB7IHRydWUgfVxuICAgICAgICBmaWVsZHMgPSBcIm5hbWUsZW1haWwscGljdHVyZVwiXG4gICAgICAgIGNhbGxiYWNrID0geyBmYWNlYm9va1Jlc3BvbnNlIH1cbiAgICAgICAgcmVuZGVyID0ge1xuICAgICAgICAgICAgcmVuZGVyUHJvcHMgPT4gKCA8XG4gICAgICAgICAgICAgICAgYnV0dG9uIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICB7IGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsIGJvcmRlcjogXCJub25lXCIgfSB9XG4gICAgICAgICAgICAgICAgb25DbGljayA9IHsgcmVuZGVyUHJvcHMub25DbGljayB9ID5cbiAgICAgICAgICAgICAgICA8XG4gICAgICAgICAgICAgICAgU29jaWFsTWVkaWFJY29uc1JlYWN0IGJvcmRlckNvbG9yID0gXCJyZ2JhKDAsMCwwLDAuMjUpXCJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aCA9IFwiM1wiXG4gICAgICAgICAgICAgICAgYm9yZGVyU3R5bGUgPSBcImluc2V0XCJcbiAgICAgICAgICAgICAgICBpY29uID0gXCJmYWNlYm9va1wiXG4gICAgICAgICAgICAgICAgaWNvbkNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMjgsMTQ5LDIyMywxKVwiXG4gICAgICAgICAgICAgICAgaWNvblNpemUgPSBcIjZcIlxuICAgICAgICAgICAgICAgIHJvdW5kbmVzcyA9IFwiMjklXCJcbiAgICAgICAgICAgICAgICBzaXplID0gXCI1NFwiIC8gPlxuICAgICAgICAgICAgICAgIDxcbiAgICAgICAgICAgICAgICAvYnV0dG9uPil9ID5cbiAgICAgICAgICAgICAgICA8XG4gICAgICAgICAgICAgICAgL0ZhY2Vib29rTG9naW4+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjbGFzcyBGYkxvZzIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NpZ25lZEluOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VzczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpXG4gICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLnNldFN0YXRlKHtpc1NpZ25lZEluOnRydWV9LCgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZigobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0JykgPD0gRGF0ZS5ub3coKSkpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIFJvdXRlci5wdXNoKFwiL2dhbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBlbHNlIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgQW5zQWxlcnQoLTEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gfSAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSA9PSAzICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKSA8IERhdGUubm93KCkpIFJvdXRlci5wdXNoKCcvZmluYWxlJylcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1VzZXJMb2dnZWRJbjogdHJ1ZSB9LCAoKSA9PiB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgZmFjZWJvb2tSZXNwb25zZSA9IChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgcmVzcG9uc2UuZW1haWwpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIiwgcmVzcG9uc2UubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW1hZ2VcIiwgcmVzcG9uc2UucGljdHVyZS5kYXRhLnVybCk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlc3BvbnNlLmFjY2Vzc1Rva2VuKVxuXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgICAgICAucG9zdChkYXRhLmFwaSArIFwiL2FwaS9mYWNlYm9va2xvZ2luXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3N0b2tlbjogcmVzcG9uc2UuYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvbl90aW1lOiByZXNwb25zZS5kYXRhX2FjY2Vzc19leHBpcmF0aW9uX3RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklEOiByZXNwb25zZS51c2VySURcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzLmRhdGEuYWNjZXNzX3Rva2VuKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc3VsdDogcmVzLmRhdGEucXVpel9maW5pc2hlZCwgdXNlcjogcmVzcG9uc2UsIGlzU2lnbmVkSW46IHRydWUsIGFjY2VzczogcmVzLmRhdGEuYWNjZXNzX3Rva2VuIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhcnQnKSA8PSBEYXRlLm5vdygpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmVzLmRhdGEucXVpel9maW5pc2hlZCkgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpID4gRGF0ZS5ub3coKSkgUm91dGVyLnB1c2goJy9nYW1lJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5kYXRhLnF1aXpfZmluaXNoZWQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpID4gRGF0ZS5ub3coKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmluYWxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlcy5kYXRhLmVycm9yKSA9PT0gXCJObyBhY3RpdmUgcXVpemVzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggPFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2ID4geyF0aGlzLnN0YXRlLmlzU2lnbmVkSW4gJiYgKCA8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdiBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWFyZ2luOiBcIjAgYXV0b1wiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmdUb3A6IFwiMHB4XCIgfSB9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpbkJ1dHRvbiBmYWNlYm9va1Jlc3BvbnNlID0geyB0aGlzLmZhY2Vib29rUmVzcG9uc2UgfSA+IDwgL0xvZ2luQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxcbiAgICAgICAgICAgICAgICAgICAgICAgIC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBleHBvcnQgZGVmYXVsdCBGYkxvZzI7Il0sInNvdXJjZVJvb3QiOiIifQ==