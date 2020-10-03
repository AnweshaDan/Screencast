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

 // import FacebookLogin from "react-facebook-login";


 //import Router from 'next/dist/next-server/server/router';






var LoginButton = function LoginButton(_ref) {
  var facebookResponse = _ref.facebookResponse;
  return __jsx(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
          lineNumber: 19,
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
          lineNumber: 20,
          columnNumber: 9
        }
      }));
    } // cssClass="fbbutton"
    // icon={<SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="inset" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,149,223,1)" iconSize="6" roundness="29%"  size="54" />}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
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
          lineNumber: 90,
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
          lineNumber: 92,
          columnNumber: 11
        }
      }, __jsx(LoginButton, {
        facebookResponse: this.facebookResponse,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
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

/***/ }),

/***/ "./node_modules/react-facebook-login/dist/facebook-login-render-props.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-facebook-login/dist/facebook-login-render-props.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(4)},function(e,t,o){e.exports=o(6)()},function(t,o){t.exports=e},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(2),d=n(u),l=o(1),p=n(l),f=o(5),b=n(f),y=o(3),h=n(y),g=function(){var e=!1;try{e=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch(t){}return e},k=function(e){function t(){var e,o,n,s;r(this,t);for(var c=arguments.length,u=Array(c),d=0;d<c;d++)u[d]=arguments[d];return o=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={isSdkLoaded:!1,isProcessing:!1},n.responseApi=function(e){window.FB.api("/me",{locale:n.props.language,fields:n.props.fields},function(t){a(t,e),n.props.callback(t)})},n.checkLoginState=function(e){n.setStateIfMounted({isProcessing:!1}),e.authResponse?n.responseApi(e.authResponse):n.props.onFailure?n.props.onFailure({status:e.status}):n.props.callback({status:e.status})},n.checkLoginAfterRefresh=function(e){"connected"===e.status?n.checkLoginState(e):window.FB.login(function(e){return n.checkLoginState(e)},!0)},n.click=function(e){if(n.state.isSdkLoaded&&!n.state.isProcessing&&!n.props.isDisabled){n.setState({isProcessing:!0});var t=n.props,o=t.scope,r=t.appId,i=t.onClick,s=t.returnScopes,a=t.responseType,c=t.redirectUri,u=t.disableMobileRedirect,d=t.authType,l=t.state;if("function"!=typeof i||(i(e),!e.defaultPrevented)){var p={client_id:r,redirect_uri:c,state:l,return_scopes:s,scope:o,response_type:a,auth_type:d};if(n.props.isMobile&&!u)window.location.href="https://www.facebook.com/dialog/oauth"+(0,b["default"])(p);else{if(!window.FB)return void(n.props.onFailure&&n.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(n.checkLoginState,{scope:o,return_scopes:s,auth_type:p.auth_type})}}}},s=o,i(n,s)}return s(t,e),c(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))return void this.sdkLoaded();this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||(e=document.createElement("div"),e.id="fb-root",document.body.appendChild(e))}},{key:"componentWillReceiveProps",value:function(e){this.state.isSdkLoaded&&e.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(e){this._isMounted&&this.setState(e)}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,o=t.appId,n=t.xfbml,r=t.cookie,i=t.version,s=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:o,xfbml:n,cookie:r}),e.setStateIfMounted({isSdkLoaded:!0}),(s||e.isRedirectedFromFb())&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var e=window.location.search;return(0,h["default"])(e,"code")||(0,h["default"])(e,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=this.props.language;!function(t,o,n){var r=t.getElementsByTagName(o)[0],i=r,s=r;t.getElementById(n)||(s=t.createElement(o),s.id=n,s.src="https://connect.facebook.net/"+e+"/sdk.js",i.parentNode.insertBefore(s,i))}(document,"script","facebook-jssdk")}},{key:"render",value:function o(){var o=this.props.render;if(!o)throw new Error("ReactFacebookLogin requires a render prop to render");var e={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(e)}}]),t}(d["default"].Component);k.propTypes={isDisabled:p["default"].bool,callback:p["default"].func.isRequired,appId:p["default"].string.isRequired,xfbml:p["default"].bool,cookie:p["default"].bool,authType:p["default"].string,scope:p["default"].string,state:p["default"].string,responseType:p["default"].string,returnScopes:p["default"].bool,redirectUri:p["default"].string,autoLoad:p["default"].bool,disableMobileRedirect:p["default"].bool,isMobile:p["default"].bool,fields:p["default"].string,version:p["default"].string,language:p["default"].string,onClick:p["default"].func,onFailure:p["default"].func,render:p["default"].func.isRequired},k.defaultProps={redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:g(),onFailure:null,state:"facebookdirect",responseType:"code"},t["default"]=k},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){return"?"+Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}},function(e,t,o){"use strict";function n(){}var r=o(7);e.exports=function(){function e(e,t,o,n,i,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return o.checkPropTypes=n,o.PropTypes=o,o}},function(e,t){"use strict";var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=o}])});

/***/ }),

/***/ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GYkxvZzIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1mYWNlYm9vay1sb2dpbi9kaXN0L2ZhY2Vib29rLWxvZ2luLXJlbmRlci1wcm9wcy5qcyJdLCJuYW1lcyI6WyJMb2dpbkJ1dHRvbiIsImZhY2Vib29rUmVzcG9uc2UiLCJyZW5kZXJQcm9wcyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsIm9uQ2xpY2siLCJGYkxvZzIiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZW1haWwiLCJuYW1lIiwicGljdHVyZSIsImRhdGEiLCJ1cmwiLCJhY2Nlc3NUb2tlbiIsImF4aW9zIiwicG9zdCIsImFwaSIsImFjY2Vzc3Rva2VuIiwiZXhwaXJhdGlvbl90aW1lIiwiZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lIiwidXNlcklEIiwidGhlbiIsInJlcyIsImFjY2Vzc190b2tlbiIsInNldFN0YXRlIiwidXNlciIsImlzU2lnbmVkSW4iLCJhY2Nlc3MiLCJnZXRJdGVtIiwiRGF0ZSIsIm5vdyIsIlJvdXRlciIsInB1c2giLCJyZWxvYWQiLCJzdGF0ZSIsIkFuc0FsZXJ0IiwibWFyZ2luIiwidGV4dEFsaWduIiwicGFkZGluZ1RvcCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsZ0JBQUgsUUFBR0EsZ0JBQUg7QUFBQSxTQUVsQixNQUFDLDRGQUFEO0FBQ0UsU0FBSyxFQUFDLGtCQURSO0FBRUUsWUFBUSxFQUFFLElBRlo7QUFHRSxVQUFNLEVBQUMsb0JBSFQ7QUFJRSxZQUFRLEVBQUVBLGdCQUpaO0FBS0UsVUFBTSxFQUFFLGdCQUFBQyxXQUFXO0FBQUEsYUFDakI7QUFBUSxhQUFLLEVBQUU7QUFBRUMseUJBQWUsRUFBRSxlQUFuQjtBQUFvQ0MsZ0JBQU0sRUFBRTtBQUE1QyxTQUFmO0FBQXFFLGVBQU8sRUFBRUYsV0FBVyxDQUFDRyxPQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw4RUFBRDtBQUF1QixtQkFBVyxFQUFDLGtCQUFuQztBQUFzRCxtQkFBVyxFQUFDLEdBQWxFO0FBQXNFLG1CQUFXLEVBQUMsT0FBbEY7QUFBMEYsWUFBSSxFQUFDLFVBQS9GO0FBQTBHLGlCQUFTLEVBQUMscUJBQXBIO0FBQTBJLHVCQUFlLEVBQUMsb0JBQTFKO0FBQStLLGdCQUFRLEVBQUMsR0FBeEw7QUFBNEwsaUJBQVMsRUFBQyxLQUF0TTtBQUE2TSxZQUFJLEVBQUMsSUFBbE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBRGlCO0FBQUEsS0FMckIsQ0FTRTtBQUNBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZrQjtBQUFBLENBQXBCOztLQUFNTCxXOztJQW1CQU0sTTs7Ozs7QUFDSixvQkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZLDROQTJCSyxVQUFDQyxRQUFELEVBQWM7QUFDL0JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBRUFHLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJKLFFBQVEsQ0FBQ0ssS0FBdkM7QUFDQUYsa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QkosUUFBUSxDQUFDTSxJQUF0QztBQUNBSCxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCSixRQUFRLENBQUNPLE9BQVQsQ0FBaUJDLElBQWpCLENBQXNCQyxHQUFwRDtBQUNBTixrQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCSixRQUFRLENBQUNVLFdBQXZDO0FBR0FDLG1EQUFLLENBQ0ZDLElBREgsQ0FDUUosdUNBQUksQ0FBQ0ssR0FBTCxHQUFTLG9CQURqQixFQUN1QztBQUNuQ0MsbUJBQVcsRUFBRWQsUUFBUSxDQUFDVSxXQURhO0FBRW5DSyx1QkFBZSxFQUFFZixRQUFRLENBQUNnQiwyQkFGUztBQUduQ0MsY0FBTSxFQUFFakIsUUFBUSxDQUFDaUI7QUFIa0IsT0FEdkMsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLEdBQUQsRUFBUztBQUNiaEIsb0JBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QmUsR0FBRyxDQUFDWCxJQUFKLENBQVNZLFlBQXZDO0FBQ0FuQixlQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjs7QUFDQSxlQUFLcUIsUUFBTCxDQUFjO0FBQUVDLGNBQUksRUFBRXRCLFFBQVI7QUFBa0J1QixvQkFBVSxFQUFFLElBQTlCO0FBQW1DQyxnQkFBTSxFQUFFTCxHQUFHLENBQUNYLElBQUosQ0FBU1k7QUFBcEQsU0FBZCxFQUFpRixZQUFJO0FBQ25GLGNBQUlqQixZQUFZLENBQUNzQixPQUFiLENBQXFCLE9BQXJCLEtBQWlDQyxJQUFJLENBQUNDLEdBQUwsRUFBckMsRUFDRUMsbURBQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVosRUFERixLQUdFRCxtREFBTSxDQUFDRSxNQUFQO0FBRUgsU0FORDtBQVFELE9BakJIO0FBbUJELEtBdkRhOztBQUVaLFdBQUtDLEtBQUwsR0FBYTtBQUNYVCxVQUFJLEVBQUUsS0FESztBQUVYQyxnQkFBVSxFQUFFLEtBRkQ7QUFHWEMsWUFBTSxFQUFFO0FBSEcsS0FBYjtBQUZZO0FBT2I7Ozs7d0NBQ21CO0FBR2hCLFVBQUdyQixZQUFZLENBQUNzQixPQUFiLENBQXFCLE9BQXJCLENBQUgsRUFDQTtBQUNFLGFBQUtKLFFBQUwsQ0FBYztBQUFDRSxvQkFBVSxFQUFDO0FBQVosU0FBZCxFQUFnQyxZQUFJO0FBQ2xDLGNBQUlwQixZQUFZLENBQUNzQixPQUFiLENBQXFCLE9BQXJCLEtBQWlDQyxJQUFJLENBQUNDLEdBQUwsRUFBckMsRUFDRUMsbURBQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVosRUFERixLQUdFO0FBQ0VHLGlGQUFRLENBQUMsQ0FBQyxDQUFGLENBQVI7QUFDRDtBQUVKLFNBUkQ7QUFVRDtBQUNGOzs7NkJBaUNNO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksQ0FBQyxLQUFLRCxLQUFMLENBQVdSLFVBQVosSUFDQTtBQUNFLGFBQUssRUFBRTtBQUFFVSxnQkFBTSxFQUFFLFFBQVY7QUFBb0JDLG1CQUFTLEVBQUUsUUFBL0I7QUFBeUNDLG9CQUFVLEVBQUU7QUFBckQsU0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0UsTUFBQyxXQUFEO0FBQWEsd0JBQWdCLEVBQUUsS0FBS3pDLGdCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsQ0FGSixDQURGO0FBYUQ7Ozs7RUF4RWtCMEMsNENBQUssQ0FBQ0MsUzs7QUEyRVp0QyxxRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBLGVBQWUsS0FBaUQsa0JBQWtCLG1CQUFPLENBQUMsNENBQU8sR0FBRyxTQUF1SixDQUFDLGtCQUFrQixtQkFBbUIsY0FBYyw0QkFBNEIsWUFBWSxVQUFVLGlCQUFpQixnRUFBZ0UsU0FBUywrQkFBK0Isa0JBQWtCLGVBQWUsaUJBQWlCLGlCQUFpQixlQUFlLFlBQVksZUFBZSxhQUFhLHNDQUFzQyxTQUFTLDZCQUE2QixvSkFBb0osaUJBQWlCLGFBQWEsY0FBYywwQkFBMEIsYUFBYSxnQkFBZ0IsOEVBQThFLGdCQUFnQiw0RkFBNEYsdURBQXVELGdCQUFnQiwySEFBMkgsMENBQTBDLGFBQWEsbURBQW1ELHNFQUFzRSxzQ0FBc0MsU0FBUyxFQUFFLGlDQUFpQyxZQUFZLG1CQUFtQixLQUFLLG1CQUFtQixzRUFBc0UsU0FBUyxjQUFjLGdCQUFnQixZQUFZLFdBQVcsS0FBSyxXQUFXLCtHQUErRyx1QkFBdUIsd0NBQXdDLHdFQUF3RSxTQUFTLElBQUksOEhBQThILFVBQVUsU0FBUyxlQUFlLGFBQWEsWUFBWSxVQUFVLDBDQUEwQyxJQUFJLHNCQUFzQixxR0FBcUcsK0JBQStCLDJCQUEyQixxQkFBcUIsOENBQThDLGFBQWEsMkJBQTJCLEVBQUUsK0JBQStCLHFCQUFxQixnQkFBZ0Isb0ZBQW9GLGdCQUFnQixvQkFBb0IsZ0JBQWdCLEVBQUUsc0NBQXNDLHdFQUF3RSw0QkFBNEIsS0FBSyxxQkFBcUIsb0VBQW9FLFlBQVksZ0JBQWdCLEVBQUUsaUpBQWlKLHFEQUFxRCxPQUFPLHdGQUF3Rix5R0FBeUcsS0FBSyxnRUFBZ0UsMkJBQTJCLEdBQUcsbUNBQW1DLDhDQUE4QyxLQUFLLFlBQVksb0JBQW9CLHlDQUF5Qyw2RkFBNkYsbURBQW1ELHlDQUF5QyxrRkFBa0YsRUFBRSxrREFBa0QsaUhBQWlILEVBQUUsNENBQTRDLG9CQUFvQixFQUFFLDBDQUEwQyxtQ0FBbUMsRUFBRSxzQ0FBc0MsZ0ZBQWdGLDhCQUE4QixnQkFBZ0IsdUNBQXVDLHVCQUF1QixlQUFlLG9GQUFvRixFQUFFLDBDQUEwQyw2QkFBNkIsd0VBQXdFLEVBQUUsaUNBQWlDLGVBQWUsZUFBZSxHQUFHLEVBQUUsNkNBQTZDLDBCQUEwQixpQkFBaUIsMkNBQTJDLG9JQUFvSSxzQ0FBc0MsRUFBRSxnQ0FBZ0Msd0JBQXdCLDZFQUE2RSxPQUFPLCtIQUErSCw2QkFBNkIsS0FBSyx5QkFBeUIsYUFBYSxzbEJBQXNsQixpQkFBaUIseVJBQXlSLGdCQUFnQixlQUFlLGFBQWEsc0NBQXNDLFNBQVMsMkJBQTJCLHlDQUF5QyxzQ0FBc0MsYUFBYSxpQkFBaUIsYUFBYSxjQUFjLFdBQVcscUJBQXFCLHdCQUF3QixVQUFVLG1NQUFtTSxzQ0FBc0MsYUFBYSxTQUFTLGVBQWUsT0FBTyx3SkFBd0osMkNBQTJDLGVBQWUsYUFBYSxxREFBcUQsWUFBWSxHQUFHLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTc4YzI1OTExMjVlMzVlN2MxMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gXCJyZWFjdC1mYWNlYm9vay1sb2dpblwiO1xuaW1wb3J0IHsgU29jaWFsTWVkaWFJY29uc1JlYWN0IH0gZnJvbSAnc29jaWFsLW1lZGlhLWljb25zLXJlYWN0JztcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luL2Rpc3QvZmFjZWJvb2stbG9naW4tcmVuZGVyLXByb3BzJ1xuLy9pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyJztcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQW5zQWxlcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQW5zQWxlcnRcIlxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZW52Lmpzb24nO1xuXG5jb25zdCBMb2dpbkJ1dHRvbiA9ICh7IGZhY2Vib29rUmVzcG9uc2UgfSkgPT4gKFxuXG4gIDxGYWNlYm9va0xvZ2luXG4gICAgYXBwSWQ9XCIxMjg1NDg5MjA1MTQzNzE2XCJcbiAgICBhdXRvbG9hZD17dHJ1ZX1cbiAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIlxuICAgIGNhbGxiYWNrPXtmYWNlYm9va1Jlc3BvbnNlfVxuICAgIHJlbmRlcj17cmVuZGVyUHJvcHMgPT4gKFxuICAgICAgPGJ1dHRvbiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwKVwiLCBib3JkZXI6IFwibm9uZVwiIH19IG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9PlxuICAgICAgICA8U29jaWFsTWVkaWFJY29uc1JlYWN0IGJvcmRlckNvbG9yPVwicmdiYSgwLDAsMCwwLjI1KVwiIGJvcmRlcldpZHRoPVwiM1wiIGJvcmRlclN0eWxlPVwiaW5zZXRcIiBpY29uPVwiZmFjZWJvb2tcIiBpY29uQ29sb3I9XCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCIgYmFja2dyb3VuZENvbG9yPVwicmdiYSgyOCwxNDksMjIzLDEpXCIgaWNvblNpemU9XCI2XCIgcm91bmRuZXNzPVwiMjklXCIgIHNpemU9XCI1NFwiIC8+XG4gICAgICA8L2J1dHRvbj4pfVxuICAgIC8vIGNzc0NsYXNzPVwiZmJidXR0b25cIlxuICAgIC8vIGljb249ezxTb2NpYWxNZWRpYUljb25zUmVhY3QgYm9yZGVyQ29sb3I9XCJyZ2JhKDAsMCwwLDAuMjUpXCIgYm9yZGVyV2lkdGg9XCIzXCIgYm9yZGVyU3R5bGU9XCJpbnNldFwiIGljb249XCJmYWNlYm9va1wiIGljb25Db2xvcj1cInJnYmEoMjU1LDI1NSwyNTUsMSlcIiBiYWNrZ3JvdW5kQ29sb3I9XCJyZ2JhKDI4LDE0OSwyMjMsMSlcIiBpY29uU2l6ZT1cIjZcIiByb3VuZG5lc3M9XCIyOSVcIiAgc2l6ZT1cIjU0XCIgLz59XG5cbiAgPlxuICA8L0ZhY2Vib29rTG9naW4+XG5cbik7XG5cbmNsYXNzIEZiTG9nMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXI6IGZhbHNlLFxuICAgICAgaXNTaWduZWRJbjogZmFsc2UsXG4gICAgICBhY2Nlc3M6IFwiXCJcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFxuICAgICAgXG4gICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpKVxuICAgICAge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc1NpZ25lZEluOnRydWV9LCgpPT57XG4gICAgICAgICAgaWYoKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpIDw9IERhdGUubm93KCkpKVxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvZ2FtZVwiKTtcbiAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBBbnNBbGVydCgtMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICB9ICAgIFxuICAgIH1cbiAgXG5cbiAgZmFjZWJvb2tSZXNwb25zZSA9IChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgcmVzcG9uc2UuZW1haWwpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCByZXNwb25zZS5uYW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImltYWdlXCIsIHJlc3BvbnNlLnBpY3R1cmUuZGF0YS51cmwpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlc3BvbnNlLmFjY2Vzc1Rva2VuKVxuXG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QoZGF0YS5hcGkrXCIvYXBpL2ZhY2Vib29rbG9naW5cIiwge1xuICAgICAgICBhY2Nlc3N0b2tlbjogcmVzcG9uc2UuYWNjZXNzVG9rZW4sXG4gICAgICAgIGV4cGlyYXRpb25fdGltZTogcmVzcG9uc2UuZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lLFxuICAgICAgICB1c2VySUQ6IHJlc3BvbnNlLnVzZXJJRFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzLmRhdGEuYWNjZXNzX3Rva2VuKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyOiByZXNwb25zZSwgaXNTaWduZWRJbjogdHJ1ZSxhY2Nlc3M6IHJlcy5kYXRhLmFjY2Vzc190b2tlbiB9LCgpPT57XG4gICAgICAgICAgaWYoKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpIDw9IERhdGUubm93KCkpKVxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvZ2FtZVwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIFJvdXRlci5yZWxvYWQoKTtcblxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgIH0pO1xuXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7ICF0aGlzLnN0YXRlLmlzU2lnbmVkSW4gJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIwIGF1dG9cIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nVG9wOiBcIjBweFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExvZ2luQnV0dG9uIGZhY2Vib29rUmVzcG9uc2U9e3RoaXMuZmFjZWJvb2tSZXNwb25zZX0gPjwvTG9naW5CdXR0b24+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZiTG9nMjsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KHJlcXVpcmUoXCJyZWFjdFwiKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJyZWFjdFwiXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkZhY2Vib29rTG9naW49dChyZXF1aXJlKFwicmVhY3RcIikpOmUuRmFjZWJvb2tMb2dpbj10KGUucmVhY3QpfSh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KG4pe2lmKG9bbl0pcmV0dXJuIG9bbl0uZXhwb3J0czt2YXIgcj1vW25dPXtleHBvcnRzOnt9LGlkOm4sbG9hZGVkOiExfTtyZXR1cm4gZVtuXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyx0KSxyLmxvYWRlZD0hMCxyLmV4cG9ydHN9dmFyIG89e307cmV0dXJuIHQubT1lLHQuYz1vLHQucD1cIlwiLHQoMCl9KFtmdW5jdGlvbihlLHQsbyl7ZS5leHBvcnRzPW8oNCl9LGZ1bmN0aW9uKGUsdCxvKXtlLmV4cG9ydHM9byg2KSgpfSxmdW5jdGlvbih0LG8pe3QuZXhwb3J0cz1lfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHRbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlLnJlcGxhY2UobmV3IFJlZ0V4cChcIl4oPzouKlsmXFxcXD9dXCIrZW5jb2RlVVJJQ29tcG9uZW50KHQpLnJlcGxhY2UoL1tcXC5cXCtcXCpdL2csXCJcXFxcJCZcIikrXCIoPzpcXFxcPShbXiZdKikpPyk/LiokXCIsXCJpXCIpLFwiJDFcIikpfX0sZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1mdW5jdGlvbiByKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBpKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9ZnVuY3Rpb24gcyhlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBvPWFyZ3VtZW50c1t0XTtmb3IodmFyIG4gaW4gbylPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobyxuKSYmKGVbbl09b1tuXSl9cmV0dXJuIGV9LGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBuPXRbb107bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24odCxvLG4pe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLG4mJmUodCxuKSx0fX0oKSx1PW8oMiksZD1uKHUpLGw9bygxKSxwPW4obCksZj1vKDUpLGI9bihmKSx5PW8oMyksaD1uKHkpLGc9ZnVuY3Rpb24oKXt2YXIgZT0hMTt0cnl7ZT0hISh3aW5kb3cubmF2aWdhdG9yJiZ3aW5kb3cubmF2aWdhdG9yLnN0YW5kYWxvbmV8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goXCJDcmlPU1wiKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvbW9iaWxlL2kpKX1jYXRjaCh0KXt9cmV0dXJuIGV9LGs9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe3ZhciBlLG8sbixzO3IodGhpcyx0KTtmb3IodmFyIGM9YXJndW1lbnRzLmxlbmd0aCx1PUFycmF5KGMpLGQ9MDtkPGM7ZCsrKXVbZF09YXJndW1lbnRzW2RdO3JldHVybiBvPW49aSh0aGlzLChlPXQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwuYXBwbHkoZSxbdGhpc10uY29uY2F0KHUpKSksbi5zdGF0ZT17aXNTZGtMb2FkZWQ6ITEsaXNQcm9jZXNzaW5nOiExfSxuLnJlc3BvbnNlQXBpPWZ1bmN0aW9uKGUpe3dpbmRvdy5GQi5hcGkoXCIvbWVcIix7bG9jYWxlOm4ucHJvcHMubGFuZ3VhZ2UsZmllbGRzOm4ucHJvcHMuZmllbGRzfSxmdW5jdGlvbih0KXthKHQsZSksbi5wcm9wcy5jYWxsYmFjayh0KX0pfSxuLmNoZWNrTG9naW5TdGF0ZT1mdW5jdGlvbihlKXtuLnNldFN0YXRlSWZNb3VudGVkKHtpc1Byb2Nlc3Npbmc6ITF9KSxlLmF1dGhSZXNwb25zZT9uLnJlc3BvbnNlQXBpKGUuYXV0aFJlc3BvbnNlKTpuLnByb3BzLm9uRmFpbHVyZT9uLnByb3BzLm9uRmFpbHVyZSh7c3RhdHVzOmUuc3RhdHVzfSk6bi5wcm9wcy5jYWxsYmFjayh7c3RhdHVzOmUuc3RhdHVzfSl9LG4uY2hlY2tMb2dpbkFmdGVyUmVmcmVzaD1mdW5jdGlvbihlKXtcImNvbm5lY3RlZFwiPT09ZS5zdGF0dXM/bi5jaGVja0xvZ2luU3RhdGUoZSk6d2luZG93LkZCLmxvZ2luKGZ1bmN0aW9uKGUpe3JldHVybiBuLmNoZWNrTG9naW5TdGF0ZShlKX0sITApfSxuLmNsaWNrPWZ1bmN0aW9uKGUpe2lmKG4uc3RhdGUuaXNTZGtMb2FkZWQmJiFuLnN0YXRlLmlzUHJvY2Vzc2luZyYmIW4ucHJvcHMuaXNEaXNhYmxlZCl7bi5zZXRTdGF0ZSh7aXNQcm9jZXNzaW5nOiEwfSk7dmFyIHQ9bi5wcm9wcyxvPXQuc2NvcGUscj10LmFwcElkLGk9dC5vbkNsaWNrLHM9dC5yZXR1cm5TY29wZXMsYT10LnJlc3BvbnNlVHlwZSxjPXQucmVkaXJlY3RVcmksdT10LmRpc2FibGVNb2JpbGVSZWRpcmVjdCxkPXQuYXV0aFR5cGUsbD10LnN0YXRlO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGl8fChpKGUpLCFlLmRlZmF1bHRQcmV2ZW50ZWQpKXt2YXIgcD17Y2xpZW50X2lkOnIscmVkaXJlY3RfdXJpOmMsc3RhdGU6bCxyZXR1cm5fc2NvcGVzOnMsc2NvcGU6byxyZXNwb25zZV90eXBlOmEsYXV0aF90eXBlOmR9O2lmKG4ucHJvcHMuaXNNb2JpbGUmJiF1KXdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RpYWxvZy9vYXV0aFwiKygwLGJbXCJkZWZhdWx0XCJdKShwKTtlbHNle2lmKCF3aW5kb3cuRkIpcmV0dXJuIHZvaWQobi5wcm9wcy5vbkZhaWx1cmUmJm4ucHJvcHMub25GYWlsdXJlKHtzdGF0dXM6XCJmYWNlYm9va05vdExvYWRlZFwifSkpO3dpbmRvdy5GQi5sb2dpbihuLmNoZWNrTG9naW5TdGF0ZSx7c2NvcGU6byxyZXR1cm5fc2NvcGVzOnMsYXV0aF90eXBlOnAuYXV0aF90eXBlfSl9fX19LHM9byxpKG4scyl9cmV0dXJuIHModCxlKSxjKHQsW3trZXk6XCJjb21wb25lbnREaWRNb3VudFwiLHZhbHVlOmZ1bmN0aW9uKCl7aWYodGhpcy5faXNNb3VudGVkPSEwLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmFjZWJvb2stanNzZGtcIikpcmV0dXJuIHZvaWQgdGhpcy5zZGtMb2FkZWQoKTt0aGlzLnNldEZiQXN5bmNJbml0KCksdGhpcy5sb2FkU2RrQXN5bmNocm9ub3VzbHkoKTt2YXIgZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZiLXJvb3RcIik7ZXx8KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlLmlkPVwiZmItcm9vdFwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZSkpfX0se2tleTpcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLnN0YXRlLmlzU2RrTG9hZGVkJiZlLmF1dG9Mb2FkJiYhdGhpcy5wcm9wcy5hdXRvTG9hZCYmd2luZG93LkZCLmdldExvZ2luU3RhdHVzKHRoaXMuY2hlY2tMb2dpbkFmdGVyUmVmcmVzaCl9fSx7a2V5OlwiY29tcG9uZW50V2lsbFVubW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX2lzTW91bnRlZD0hMX19LHtrZXk6XCJzZXRTdGF0ZUlmTW91bnRlZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX2lzTW91bnRlZCYmdGhpcy5zZXRTdGF0ZShlKX19LHtrZXk6XCJzZXRGYkFzeW5jSW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMucHJvcHMsbz10LmFwcElkLG49dC54ZmJtbCxyPXQuY29va2llLGk9dC52ZXJzaW9uLHM9dC5hdXRvTG9hZDt3aW5kb3cuZmJBc3luY0luaXQ9ZnVuY3Rpb24oKXt3aW5kb3cuRkIuaW5pdCh7dmVyc2lvbjpcInZcIitpLGFwcElkOm8seGZibWw6bixjb29raWU6cn0pLGUuc2V0U3RhdGVJZk1vdW50ZWQoe2lzU2RrTG9hZGVkOiEwfSksKHN8fGUuaXNSZWRpcmVjdGVkRnJvbUZiKCkpJiZ3aW5kb3cuRkIuZ2V0TG9naW5TdGF0dXMoZS5jaGVja0xvZ2luQWZ0ZXJSZWZyZXNoKX19fSx7a2V5OlwiaXNSZWRpcmVjdGVkRnJvbUZiXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT13aW5kb3cubG9jYXRpb24uc2VhcmNoO3JldHVybigwLGhbXCJkZWZhdWx0XCJdKShlLFwiY29kZVwiKXx8KDAsaFtcImRlZmF1bHRcIl0pKGUsXCJncmFudGVkX3Njb3Blc1wiKX19LHtrZXk6XCJzZGtMb2FkZWRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2V0U3RhdGUoe2lzU2RrTG9hZGVkOiEwfSl9fSx7a2V5OlwibG9hZFNka0FzeW5jaHJvbm91c2x5XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLmxhbmd1YWdlOyFmdW5jdGlvbih0LG8sbil7dmFyIHI9dC5nZXRFbGVtZW50c0J5VGFnTmFtZShvKVswXSxpPXIscz1yO3QuZ2V0RWxlbWVudEJ5SWQobil8fChzPXQuY3JlYXRlRWxlbWVudChvKSxzLmlkPW4scy5zcmM9XCJodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L1wiK2UrXCIvc2RrLmpzXCIsaS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzLGkpKX0oZG9jdW1lbnQsXCJzY3JpcHRcIixcImZhY2Vib29rLWpzc2RrXCIpfX0se2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uIG8oKXt2YXIgbz10aGlzLnByb3BzLnJlbmRlcjtpZighbyl0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdEZhY2Vib29rTG9naW4gcmVxdWlyZXMgYSByZW5kZXIgcHJvcCB0byByZW5kZXJcIik7dmFyIGU9e29uQ2xpY2s6dGhpcy5jbGljayxpc0Rpc2FibGVkOiEhdGhpcy5wcm9wcy5pc0Rpc2FibGVkLGlzUHJvY2Vzc2luZzp0aGlzLnN0YXRlLmlzUHJvY2Vzc2luZyxpc1Nka0xvYWRlZDp0aGlzLnN0YXRlLmlzU2RrTG9hZGVkfTtyZXR1cm4gdGhpcy5wcm9wcy5yZW5kZXIoZSl9fV0pLHR9KGRbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7ay5wcm9wVHlwZXM9e2lzRGlzYWJsZWQ6cFtcImRlZmF1bHRcIl0uYm9vbCxjYWxsYmFjazpwW1wiZGVmYXVsdFwiXS5mdW5jLmlzUmVxdWlyZWQsYXBwSWQ6cFtcImRlZmF1bHRcIl0uc3RyaW5nLmlzUmVxdWlyZWQseGZibWw6cFtcImRlZmF1bHRcIl0uYm9vbCxjb29raWU6cFtcImRlZmF1bHRcIl0uYm9vbCxhdXRoVHlwZTpwW1wiZGVmYXVsdFwiXS5zdHJpbmcsc2NvcGU6cFtcImRlZmF1bHRcIl0uc3RyaW5nLHN0YXRlOnBbXCJkZWZhdWx0XCJdLnN0cmluZyxyZXNwb25zZVR5cGU6cFtcImRlZmF1bHRcIl0uc3RyaW5nLHJldHVyblNjb3BlczpwW1wiZGVmYXVsdFwiXS5ib29sLHJlZGlyZWN0VXJpOnBbXCJkZWZhdWx0XCJdLnN0cmluZyxhdXRvTG9hZDpwW1wiZGVmYXVsdFwiXS5ib29sLGRpc2FibGVNb2JpbGVSZWRpcmVjdDpwW1wiZGVmYXVsdFwiXS5ib29sLGlzTW9iaWxlOnBbXCJkZWZhdWx0XCJdLmJvb2wsZmllbGRzOnBbXCJkZWZhdWx0XCJdLnN0cmluZyx2ZXJzaW9uOnBbXCJkZWZhdWx0XCJdLnN0cmluZyxsYW5ndWFnZTpwW1wiZGVmYXVsdFwiXS5zdHJpbmcsb25DbGljazpwW1wiZGVmYXVsdFwiXS5mdW5jLG9uRmFpbHVyZTpwW1wiZGVmYXVsdFwiXS5mdW5jLHJlbmRlcjpwW1wiZGVmYXVsdFwiXS5mdW5jLmlzUmVxdWlyZWR9LGsuZGVmYXVsdFByb3BzPXtyZWRpcmVjdFVyaTpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdy5sb2NhdGlvbi5ocmVmOlwiL1wiLHNjb3BlOlwicHVibGljX3Byb2ZpbGUsZW1haWxcIixyZXR1cm5TY29wZXM6ITEseGZibWw6ITEsY29va2llOiExLGF1dGhUeXBlOlwiXCIsZmllbGRzOlwibmFtZVwiLHZlcnNpb246XCIyLjNcIixsYW5ndWFnZTpcImVuX1VTXCIsZGlzYWJsZU1vYmlsZVJlZGlyZWN0OiExLGlzTW9iaWxlOmcoKSxvbkZhaWx1cmU6bnVsbCxzdGF0ZTpcImZhY2Vib29rZGlyZWN0XCIscmVzcG9uc2VUeXBlOlwiY29kZVwifSx0W1wiZGVmYXVsdFwiXT1rfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHRbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGUpe3JldHVyblwiP1wiK09iamVjdC5rZXlzKGUpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdCtcIj1cIitlbmNvZGVVUklDb21wb25lbnQoZVt0XSl9KS5qb2luKFwiJlwiKX19LGZ1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKCl7fXZhciByPW8oNyk7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsbyxuLGkscyl7aWYocyE9PXIpe3ZhciBhPW5ldyBFcnJvcihcIkNhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuIFVzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uIFJlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXNcIik7dGhyb3cgYS5uYW1lPVwiSW52YXJpYW50IFZpb2xhdGlvblwiLGF9fWZ1bmN0aW9uIHQoKXtyZXR1cm4gZX1lLmlzUmVxdWlyZWQ9ZTt2YXIgbz17YXJyYXk6ZSxib29sOmUsZnVuYzplLG51bWJlcjplLG9iamVjdDplLHN0cmluZzplLHN5bWJvbDplLGFueTplLGFycmF5T2Y6dCxlbGVtZW50OmUsaW5zdGFuY2VPZjp0LG5vZGU6ZSxvYmplY3RPZjp0LG9uZU9mOnQsb25lT2ZUeXBlOnQsc2hhcGU6dCxleGFjdDp0fTtyZXR1cm4gby5jaGVja1Byb3BUeXBlcz1uLG8uUHJvcFR5cGVzPW8sb319LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89XCJTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRFwiO2UuZXhwb3J0cz1vfV0pfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==