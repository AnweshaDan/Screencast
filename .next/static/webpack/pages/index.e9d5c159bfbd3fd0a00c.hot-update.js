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
    callback: facebookResponse // render={renderProps => (
    //   <button style={{ backgroundColor: "rgba(0,0,0,0)", border: "none" }} onClick={renderProps.onClick}>
    //     <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="inset" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,149,223,1)" iconSize="6" roundness="29%"  size="54" />
    //   </button>)}
    ,
    cssClass: "fbbutton",
    icon: __jsx(social_media_icons_react__WEBPACK_IMPORTED_MODULE_9__["SocialMediaIconsReact"], {
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
        lineNumber: 22,
        columnNumber: 11
      }
    }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GYkxvZzIuanMiXSwibmFtZXMiOlsiTG9naW5CdXR0b24iLCJmYWNlYm9va1Jlc3BvbnNlIiwiRmJMb2cyIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImVtYWlsIiwibmFtZSIsInBpY3R1cmUiLCJkYXRhIiwidXJsIiwiYWNjZXNzVG9rZW4iLCJheGlvcyIsInBvc3QiLCJhcGkiLCJhY2Nlc3N0b2tlbiIsImV4cGlyYXRpb25fdGltZSIsImRhdGFfYWNjZXNzX2V4cGlyYXRpb25fdGltZSIsInVzZXJJRCIsInRoZW4iLCJyZXMiLCJhY2Nlc3NfdG9rZW4iLCJzZXRTdGF0ZSIsInVzZXIiLCJpc1NpZ25lZEluIiwiYWNjZXNzIiwiZ2V0SXRlbSIsIkRhdGUiLCJub3ciLCJSb3V0ZXIiLCJwdXNoIiwicmVsb2FkIiwic3RhdGUiLCJBbnNBbGVydCIsIm1hcmdpbiIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsZ0JBQUgsUUFBR0EsZ0JBQUg7QUFBQSxTQUVsQixNQUFDLDJEQUFEO0FBQ0UsU0FBSyxFQUFDLGtCQURSO0FBRUUsWUFBUSxFQUFFLElBRlo7QUFHRSxVQUFNLEVBQUMsb0JBSFQ7QUFJRSxZQUFRLEVBQUVBLGdCQUpaLENBS0U7QUFDQTtBQUNBO0FBQ0E7QUFSRjtBQVNFLFlBQVEsRUFBQyxVQVRYO0FBVUUsUUFBSSxFQUFFLE1BQUMsOEVBQUQ7QUFBdUIsaUJBQVcsRUFBQyxrQkFBbkM7QUFBc0QsaUJBQVcsRUFBQyxHQUFsRTtBQUFzRSxpQkFBVyxFQUFD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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHRSxNQUFDLFdBQUQ7QUFBYSx3QkFBZ0IsRUFBRSxLQUFLckMsZ0JBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQUZKLENBREY7QUFhRDs7OztFQXhFa0JzQyw0Q0FBSyxDQUFDQyxTOztBQTJFWnRDLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU5ZDVjMTU5YmZiZDNmZDBhMDBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmFjZWJvb2tMb2dpbiBmcm9tIFwicmVhY3QtZmFjZWJvb2stbG9naW5cIjtcbmltcG9ydCB7IFNvY2lhbE1lZGlhSWNvbnNSZWFjdCB9IGZyb20gJ3NvY2lhbC1tZWRpYS1pY29ucy1yZWFjdCc7XG4vL2ltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXInO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBBbnNBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnNBbGVydFwiXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9lbnYuanNvbic7XG5cbmNvbnN0IExvZ2luQnV0dG9uID0gKHsgZmFjZWJvb2tSZXNwb25zZSB9KSA9PiAoXG5cbiAgPEZhY2Vib29rTG9naW5cbiAgICBhcHBJZD1cIjEyODU0ODkyMDUxNDM3MTZcIlxuICAgIGF1dG9sb2FkPXt0cnVlfVxuICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXG4gICAgY2FsbGJhY2s9e2ZhY2Vib29rUmVzcG9uc2V9XG4gICAgLy8gcmVuZGVyPXtyZW5kZXJQcm9wcyA9PiAoXG4gICAgLy8gICA8YnV0dG9uIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsIGJvcmRlcjogXCJub25lXCIgfX0gb25DbGljaz17cmVuZGVyUHJvcHMub25DbGlja30+XG4gICAgLy8gICAgIDxTb2NpYWxNZWRpYUljb25zUmVhY3QgYm9yZGVyQ29sb3I9XCJyZ2JhKDAsMCwwLDAuMjUpXCIgYm9yZGVyV2lkdGg9XCIzXCIgYm9yZGVyU3R5bGU9XCJpbnNldFwiIGljb249XCJmYWNlYm9va1wiIGljb25Db2xvcj1cInJnYmEoMjU1LDI1NSwyNTUsMSlcIiBiYWNrZ3JvdW5kQ29sb3I9XCJyZ2JhKDI4LDE0OSwyMjMsMSlcIiBpY29uU2l6ZT1cIjZcIiByb3VuZG5lc3M9XCIyOSVcIiAgc2l6ZT1cIjU0XCIgLz5cbiAgICAvLyAgIDwvYnV0dG9uPil9XG4gICAgY3NzQ2xhc3M9XCJmYmJ1dHRvblwiXG4gICAgaWNvbj17PFNvY2lhbE1lZGlhSWNvbnNSZWFjdCBib3JkZXJDb2xvcj1cInJnYmEoMCwwLDAsMC4yNSlcIiBib3JkZXJXaWR0aD1cIjNcIiBib3JkZXJTdHlsZT1cImluc2V0XCIgaWNvbj1cImZhY2Vib29rXCIgaWNvbkNvbG9yPVwicmdiYSgyNTUsMjU1LDI1NSwxKVwiIGJhY2tncm91bmRDb2xvcj1cInJnYmEoMjgsMTQ5LDIyMywxKVwiIGljb25TaXplPVwiNlwiIHJvdW5kbmVzcz1cIjI5JVwiICBzaXplPVwiNTRcIiAvPn1cblxuICA+XG4gIDwvRmFjZWJvb2tMb2dpbj5cblxuKTtcblxuY2xhc3MgRmJMb2cyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcjogZmFsc2UsXG4gICAgICBpc1NpZ25lZEluOiBmYWxzZSxcbiAgICAgIGFjY2VzczogXCJcIlxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgXG4gICAgICBcbiAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpXG4gICAgICB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzU2lnbmVkSW46dHJ1ZX0sKCk9PntcbiAgICAgICAgICBpZigobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0JykgPD0gRGF0ZS5ub3coKSkpXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9nYW1lXCIpO1xuICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIEFuc0FsZXJ0KC0xKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgIH0gICAgXG4gICAgfVxuICBcblxuICBmYWNlYm9va1Jlc3BvbnNlID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlbWFpbFwiLCByZXNwb25zZS5lbWFpbCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuYW1lXCIsIHJlc3BvbnNlLm5hbWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW1hZ2VcIiwgcmVzcG9uc2UucGljdHVyZS5kYXRhLnVybCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzcG9uc2UuYWNjZXNzVG9rZW4pXG5cblxuICAgIGF4aW9zXG4gICAgICAucG9zdChkYXRhLmFwaStcIi9hcGkvZmFjZWJvb2tsb2dpblwiLCB7XG4gICAgICAgIGFjY2Vzc3Rva2VuOiByZXNwb25zZS5hY2Nlc3NUb2tlbixcbiAgICAgICAgZXhwaXJhdGlvbl90aW1lOiByZXNwb25zZS5kYXRhX2FjY2Vzc19leHBpcmF0aW9uX3RpbWUsXG4gICAgICAgIHVzZXJJRDogcmVzcG9uc2UudXNlcklEXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXMuZGF0YS5hY2Nlc3NfdG9rZW4pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXI6IHJlc3BvbnNlLCBpc1NpZ25lZEluOiB0cnVlLGFjY2VzczogcmVzLmRhdGEuYWNjZXNzX3Rva2VuIH0sKCk9PntcbiAgICAgICAgICBpZigobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0JykgPD0gRGF0ZS5ub3coKSkpXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9nYW1lXCIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgUm91dGVyLnJlbG9hZCgpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgfSk7XG5cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsgIXRoaXMuc3RhdGUuaXNTaWduZWRJbiAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjAgYXV0b1wiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmdUb3A6IFwiMHB4XCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TG9naW5CdXR0b24gZmFjZWJvb2tSZXNwb25zZT17dGhpcy5mYWNlYm9va1Jlc3BvbnNlfSA+PC9Mb2dpbkJ1dHRvbj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmJMb2cyOyJdLCJzb3VyY2VSb290IjoiIn0=