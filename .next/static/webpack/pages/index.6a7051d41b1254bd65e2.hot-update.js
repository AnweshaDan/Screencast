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
          lineNumber: 16,
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
          lineNumber: 17,
          columnNumber: 9
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
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
          lineNumber: 95,
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
          lineNumber: 97,
          columnNumber: 11
        }
      }, __jsx(LoginButton, {
        facebookResponse: this.facebookResponse,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GYkxvZzIuanMiXSwibmFtZXMiOlsiTG9naW5CdXR0b24iLCJmYWNlYm9va1Jlc3BvbnNlIiwicmVuZGVyUHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJvbkNsaWNrIiwiRmJMb2cyIiwicmVzcG9uc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZW1haWwiLCJuYW1lIiwicGljdHVyZSIsImRhdGEiLCJ1cmwiLCJhY2Nlc3NUb2tlbiIsImF4aW9zIiwicG9zdCIsImFwaSIsImFjY2Vzc3Rva2VuIiwiZXhwaXJhdGlvbl90aW1lIiwiZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lIiwidXNlcklEIiwidGhlbiIsInJlcyIsImFjY2Vzc190b2tlbiIsInNldFN0YXRlIiwicmVzdWx0IiwicXVpel9maW5pc2hlZCIsInVzZXIiLCJpc1NpZ25lZEluIiwiYWNjZXNzIiwiZ2V0SXRlbSIsIkRhdGUiLCJub3ciLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJyZWxvYWQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJpc1VzZXJMb2dnZWRJbiIsIm1hcmdpbiIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxnQkFBSCxRQUFHQSxnQkFBSDtBQUFBLFNBQ2xCLE1BQUMsNEZBQUQ7QUFDRSxTQUFLLEVBQUMsaUJBRFI7QUFFRSxZQUFRLEVBQUUsSUFGWjtBQUdFLFVBQU0sRUFBQyxvQkFIVDtBQUlFLFlBQVEsRUFBRUEsZ0JBSlo7QUFLRSxVQUFNLEVBQUUsZ0JBQUFDLFdBQVc7QUFBQSxhQUNqQjtB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QUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQUZKLENBREY7QUFhRDs7OztFQXBGa0I4Qyw0Q0FBSyxDQUFDQyxTOztBQXVGWjFDLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZhNzA1MWQ0MWIxMjU0YmQ2NWUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTb2NpYWxNZWRpYUljb25zUmVhY3QgfSBmcm9tICdzb2NpYWwtbWVkaWEtaWNvbnMtcmVhY3QnO1xuaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSAncmVhY3QtZmFjZWJvb2stbG9naW4vZGlzdC9mYWNlYm9vay1sb2dpbi1yZW5kZXItcHJvcHMnXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEFuc0FsZXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0Fuc0FsZXJ0XCJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2Vudi5qc29uJztcblxuY29uc3QgTG9naW5CdXR0b24gPSAoeyBmYWNlYm9va1Jlc3BvbnNlIH0pID0+IChcbiAgPEZhY2Vib29rTG9naW5cbiAgICBhcHBJZD1cIjM2NTk1OTk1NDU4NTU4NlwiXG4gICAgYXV0b2xvYWQ9e3RydWV9XG4gICAgZmllbGRzPVwibmFtZSxlbWFpbCxwaWN0dXJlXCJcbiAgICBjYWxsYmFjaz17ZmFjZWJvb2tSZXNwb25zZX1cbiAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcbiAgICAgIDxidXR0b24gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMClcIiwgYm9yZGVyOiBcIm5vbmVcIiB9fSBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgPFNvY2lhbE1lZGlhSWNvbnNSZWFjdCBib3JkZXJDb2xvcj1cInJnYmEoMCwwLDAsMC4yNSlcIiBib3JkZXJXaWR0aD1cIjNcIiBib3JkZXJTdHlsZT1cImluc2V0XCIgaWNvbj1cImZhY2Vib29rXCIgaWNvbkNvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwxKVwiIGJhY2tncm91bmRDb2xvcj1cInJnYmEoMjgsMTQ5LDIyMywxKVwiIGljb25TaXplPVwiNlwiIHJvdW5kbmVzcz1cIjI5JVwiIHNpemU9XCI1NFwiIC8+XG4gICAgICA8L2J1dHRvbj4pfVxuICA+XG4gIDwvRmFjZWJvb2tMb2dpbj5cbik7XG5cbmNsYXNzIEZiTG9nMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXI6IGZhbHNlLFxuICAgICAgaXNTaWduZWRJbjogZmFsc2UsXG4gICAgICBhY2Nlc3M6IFwiXCIsXG4gICAgICByZXN1bHQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpKVxuICAgIC8vIHtcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUoe2lzU2lnbmVkSW46dHJ1ZX0sKCk9PntcbiAgICAvLyAgICAgaWYoKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpIDw9IERhdGUubm93KCkpKVxuICAgIC8vICAgICAgIFJvdXRlci5wdXNoKFwiL2dhbWVcIik7XG4gICAgLy8gICAgIGVsc2UgXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgQW5zQWxlcnQoLTEpO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgIH0pXG4gICAgLy8gfSAgICBcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpID09IDMgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpIDwgRGF0ZS5ub3coKSkgUm91dGVyLnB1c2goJy9maW5hbGUnKVxuICAgIGVsc2Uge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzVXNlckxvZ2dlZEluOiB0cnVlIH0sICgpID0+IHtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGZhY2Vib29rUmVzcG9uc2UgPSAocmVzcG9uc2UpID0+IHtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgcmVzcG9uc2UuZW1haWwpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCByZXNwb25zZS5uYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImltYWdlXCIsIHJlc3BvbnNlLnBpY3R1cmUuZGF0YS51cmwpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlc3BvbnNlLmFjY2Vzc1Rva2VuKVxuXG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGRhdGEuYXBpICsgXCIvYXBpL2ZhY2Vib29rbG9naW5cIiwge1xuICAgICAgICBhY2Nlc3N0b2tlbjogcmVzcG9uc2UuYWNjZXNzVG9rZW4sXG4gICAgICAgIGV4cGlyYXRpb25fdGltZTogcmVzcG9uc2UuZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lLFxuICAgICAgICB1c2VySUQ6IHJlc3BvbnNlLnVzZXJJRFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzLmRhdGEuYWNjZXNzX3Rva2VuKVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXN1bHQ6IHJlcy5kYXRhLnF1aXpfZmluaXNoZWQsIHVzZXI6IHJlc3BvbnNlLCBpc1NpZ25lZEluOiB0cnVlLCBhY2Nlc3M6IHJlcy5kYXRhLmFjY2Vzc190b2tlbiB9LCAoKSA9PiB7XG4gICAgICAgICAgaWYgKChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhcnQnKSA8PSBEYXRlLm5vdygpKSkge1xuICAgICAgICAgICAgaWYgKCEocmVzLmRhdGEucXVpel9maW5pc2hlZCkgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpID4gRGF0ZS5ub3coKSkgUm91dGVyLnB1c2goJy9nYW1lJylcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5kYXRhLnF1aXpfZmluaXNoZWQgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpID4gRGF0ZS5ub3coKSkge1xuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgocmVzLmRhdGEuZXJyb3IpID09PSBcIk5vIGFjdGl2ZSBxdWl6ZXNcIikge1xuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9lcnJvcicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIFJvdXRlci5yZWxvYWQoKTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsgIXRoaXMuc3RhdGUuaXNTaWduZWRJbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjAgYXV0b1wiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmdUb3A6IFwiMHB4XCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TG9naW5CdXR0b24gZmFjZWJvb2tSZXNwb25zZT17dGhpcy5mYWNlYm9va1Jlc3BvbnNlfSA+PC9Mb2dpbkJ1dHRvbj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZiTG9nMjsiXSwic291cmNlUm9vdCI6IiJ9