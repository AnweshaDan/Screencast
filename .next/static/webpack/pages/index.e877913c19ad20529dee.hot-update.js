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
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-facebook-login */ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var social_media_icons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! social-media-icons-react */ "./node_modules/social-media-icons-react/dist/index.js");
/* harmony import */ var social_media_icons_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(social_media_icons_react__WEBPACK_IMPORTED_MODULE_9__);
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



 //import Router from 'next/dist/next-server/server/router';






var LoginButton = function LoginButton(_ref) {
  var facebookResponse = _ref.facebookResponse;
  return __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_8___default.a, {
    appId: "1285489205143716",
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
          lineNumber: 18,
          columnNumber: 7
        }
      }, __jsx(social_media_icons_react__WEBPACK_IMPORTED_MODULE_9__["SocialMediaIconsReact"], {
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
          columnNumber: 9
        }
      }));
    } // cssClass="fbbutton"
    // icon={<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="inset" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,149,223,1)" iconSize="6" roundness="29%"  size="54" />}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
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
      console.log(response);
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
        console.log(response);

        _this2.setState({
          user: response,
          isSignedIn: true,
          access: res.data.access_token
        }, function () {
          if (localStorage.getItem('start') <= Date.now()) next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/game");else next_router__WEBPACK_IMPORTED_MODULE_10___default.a.reload();
        });
      });
    });

    _this2.state = {
      user: false,
      isSignedIn: false,
      access: ""
    };
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FbLog2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem("email")) {
        this.setState({
          isSignedIn: true
        }, function () {
          if (localStorage.getItem('start') <= Date.now()) next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/game");else {
            Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(-1);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
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
          lineNumber: 91,
          columnNumber: 11
        }
      }, __jsx(LoginButton, {
        facebookResponse: this.facebookResponse,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GYkxvZzIuanMiXSwibmFtZXMiOlsiTG9naW5CdXR0b24iLCJmYWNlYm9va1Jlc3BvbnNlIiwicmVuZGVyUHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJvbkNsaWNrIiwiRmJMb2cyIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImVtYWlsIiwibmFtZSIsInBpY3R1cmUiLCJkYXRhIiwidXJsIiwiYWNjZXNzVG9rZW4iLCJheGlvcyIsInBvc3QiLCJhcGkiLCJhY2Nlc3N0b2tlbiIsImV4cGlyYXRpb25fdGltZSIsImRhdGFfYWNjZXNzX2V4cGlyYXRpb25fdGltZSIsInVzZXJJRCIsInRoZW4iLCJyZXMiLCJhY2Nlc3NfdG9rZW4iLCJzZXRTdGF0ZSIsInVzZXIiLCJpc1NpZ25lZEluIiwiYWNjZXNzIiwiZ2V0SXRlbSIsIkRhdGUiLCJub3ciLCJSb3V0ZXIiLCJwdXNoIiwicmVsb2FkIiwic3RhdGUiLCJBbnNBbGVydCIsIm1hcmdpbiIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsZ0JBQUgsUUFBR0EsZ0JBQUg7QUFBQSxTQUVsQixNQUFDLDJEQUFEO0FBQ0UsU0FBSyxFQUFDLGtCQURSO0FBRUUsWUFBUSxFQUFFLElBRlo7QUFHRSxVQUFNLEVBQUMsb0JBSFQ7QUFJRSxZQUFRLEVBQUVBLGdCQUpaO0FBS0UsVUFBTSxFQUFFLGdCQUFBQyxXQUFXO0FBQUEsYUFDakI7QUFBUSxhQUFLLEVBQUU7QUFBRUMseUJBQWUsRUFBRSxlQUFuQjtBQUFvQ0Ms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RDtBQUVKLFNBUkQ7QUFVRDtBQUNGOzs7NkJBaUNNO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksQ0FBQyxLQUFLRCxLQUFMLENBQVdSLFVBQVosSUFDQTtBQUNFLGFBQUssRUFBRTtBQUFFVSxnQkFBTSxFQUFFLFFBQVY7QUFBb0JDLG1CQUFTLEVBQUUsUUFBL0I7QUFBeUNDLG9CQUFVLEVBQUU7QUFBckQsU0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0UsTUFBQyxXQUFEO0FBQWEsd0JBQWdCLEVBQUUsS0FBS3pDLGdCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsQ0FGSixDQURGO0FBYUQ7Ozs7RUF4RWtCMEMsNENBQUssQ0FBQ0MsUzs7QUEyRVp0QyxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lODc3OTEzYzE5YWQyMDUyOWRlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSBcInJlYWN0LWZhY2Vib29rLWxvZ2luXCI7XG5pbXBvcnQgeyBTb2NpYWxNZWRpYUljb25zUmVhY3QgfSBmcm9tICdzb2NpYWwtbWVkaWEtaWNvbnMtcmVhY3QnO1xuLy9pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyJztcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQW5zQWxlcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQW5zQWxlcnRcIlxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZW52Lmpzb24nO1xuXG5jb25zdCBMb2dpbkJ1dHRvbiA9ICh7IGZhY2Vib29rUmVzcG9uc2UgfSkgPT4gKFxuXG4gIDxGYWNlYm9va0xvZ2luXG4gICAgYXBwSWQ9XCIxMjg1NDg5MjA1MTQzNzE2XCJcbiAgICBhdXRvbG9hZD17dHJ1ZX1cbiAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIlxuICAgIGNhbGxiYWNrPXtmYWNlYm9va1Jlc3BvbnNlfVxuICAgIHJlbmRlcj17cmVuZGVyUHJvcHMgPT4gKFxuICAgICAgPGJ1dHRvbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLCBib3JkZXI6IFwibm9uZVwiIH19IG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9PlxuICAgICAgICA8U29jaWFsTWVkaWFJY29uc1JlYWN0IGJvcmRlckNvbG9yPVwicmdiYSgwLDAsMCwwLjI1KVwiIGJvcmRlcldpZHRoPVwiM1wiIGJvcmRlclN0eWxlPVwiaW5zZXRcIiBpY29uPVwiZmFjZWJvb2tcIiBpY29uQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCIgYmFja2dyb3VuZENvbG9yPVwicmdiYSgyOCwxNDksMjIzLDEpXCIgaWNvblNpemU9XCI2XCIgcm91bmRuZXNzPVwiMjklXCIgIHNpemU9XCI1NFwiIC8+XG4gICAgICA8L2J1dHRvbj4pfVxuICAgIC8vIGNzc0NsYXNzPVwiZmJidXR0b25cIlxuICAgIC8vIGljb249ezxTb2NpYWxNZWRpYUljb25zUmVhY3QgYm9yZGVyQ29sb3I9XCJyZ2JhKDAsMCwwLDAuMjUpXCIgYm9yZGVyV2lkdGg9XCIzXCIgYm9yZGVyU3R5bGU9XCJpbnNldFwiIGljb249XCJmYWNlYm9va1wiIGljb25Db2xvcj1cInJnYmEoMjU1LDI1NSwyNTUsMSlcIiBiYWNrZ3JvdW5kQ29sb3I9XCJyZ2JhKDI4LDE0OSwyMjMsMSlcIiBpY29uU2l6ZT1cIjZcIiByb3VuZG5lc3M9XCIyOSVcIiAgc2l6ZT1cIjU0XCIgLz59XG5cbiAgPlxuICA8L0ZhY2Vib29rTG9naW4+XG5cbik7XG5cbmNsYXNzIEZiTG9nMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXI6IGZhbHNlLFxuICAgICAgaXNTaWduZWRJbjogZmFsc2UsXG4gICAgICBhY2Nlc3M6IFwiXCJcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFxuICAgICAgXG4gICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpKVxuICAgICAge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc1NpZ25lZEluOnRydWV9LCgpPT57XG4gICAgICAgICAgaWYoKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpIDw9IERhdGUubm93KCkpKVxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvZ2FtZVwiKTtcbiAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBBbnNBbGVydCgtMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICB9ICAgIFxuICAgIH1cbiAgXG5cbiAgZmFjZWJvb2tSZXNwb25zZSA9IChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgcmVzcG9uc2UuZW1haWwpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCByZXNwb25zZS5uYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImltYWdlXCIsIHJlc3BvbnNlLnBpY3R1cmUuZGF0YS51cmwpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlc3BvbnNlLmFjY2Vzc1Rva2VuKVxuXG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QoZGF0YS5hcGkrXCIvYXBpL2ZhY2Vib29rbG9naW5cIiwge1xuICAgICAgICBhY2Nlc3N0b2tlbjogcmVzcG9uc2UuYWNjZXNzVG9rZW4sXG4gICAgICAgIGV4cGlyYXRpb25fdGltZTogcmVzcG9uc2UuZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lLFxuICAgICAgICB1c2VySUQ6IHJlc3BvbnNlLnVzZXJJRFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzLmRhdGEuYWNjZXNzX3Rva2VuKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyOiByZXNwb25zZSwgaXNTaWduZWRJbjogdHJ1ZSxhY2Nlc3M6IHJlcy5kYXRhLmFjY2Vzc190b2tlbiB9LCgpPT57XG4gICAgICAgICAgaWYoKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpIDw9IERhdGUubm93KCkpKVxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvZ2FtZVwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIFJvdXRlci5yZWxvYWQoKTtcblxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgIH0pO1xuXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7ICF0aGlzLnN0YXRlLmlzU2lnbmVkSW4gJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIwIGF1dG9cIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nVG9wOiBcIjBweFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExvZ2luQnV0dG9uIGZhY2Vib29rUmVzcG9uc2U9e3RoaXMuZmFjZWJvb2tSZXNwb25zZX0gPjwvTG9naW5CdXR0b24+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZiTG9nMjsiXSwic291cmNlUm9vdCI6IiJ9