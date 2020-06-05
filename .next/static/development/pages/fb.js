(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/fb.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ffb&absolutePagePath=%2Fhome%2Fanwesha%2FDesktop%2Fscreencast%2Fpages%2Ffb.js!./":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ffb&absolutePagePath=%2Fhome%2Fanwesha%2FDesktop%2Fscreencast%2Fpages%2Ffb.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/fb", function() {
      var mod = __webpack_require__(/*! ./pages/fb.js */ "./pages/fb.js")
      if(true) {
        module.hot.accept(/*! ./pages/fb.js */ "./pages/fb.js", function() {
          if(!next.router.components["/fb"]) return
          var updatedPage = __webpack_require__(/*! ./pages/fb.js */ "./pages/fb.js")
          next.router.update("/fb", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-facebook-login/dist/facebook-login-with-button.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(8)},function(e,t,o){e.exports=o(6)()},function(t,o){t.exports=e},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(2),l=n(u),f=o(1),p=n(f),d=o(5),b=n(d),y=o(3),h=n(y),g=function(){var e=!1;try{e=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch(t){}return e},m=function(e){function t(){var e,o,n,a;r(this,t);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return o=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={isSdkLoaded:!1,isProcessing:!1},n.responseApi=function(e){window.FB.api("/me",{locale:n.props.language,fields:n.props.fields},function(t){s(t,e),n.props.callback(t)})},n.checkLoginState=function(e){n.setStateIfMounted({isProcessing:!1}),e.authResponse?n.responseApi(e.authResponse):n.props.onFailure?n.props.onFailure({status:e.status}):n.props.callback({status:e.status})},n.checkLoginAfterRefresh=function(e){"connected"===e.status?n.checkLoginState(e):window.FB.login(function(e){return n.checkLoginState(e)},!0)},n.click=function(e){if(n.state.isSdkLoaded&&!n.state.isProcessing&&!n.props.isDisabled){n.setState({isProcessing:!0});var t=n.props,o=t.scope,r=t.appId,i=t.onClick,a=t.returnScopes,s=t.responseType,c=t.redirectUri,u=t.disableMobileRedirect,l=t.authType,f=t.state;if("function"!=typeof i||(i(e),!e.defaultPrevented)){var p={client_id:r,redirect_uri:c,state:f,return_scopes:a,scope:o,response_type:s,auth_type:l};if(n.props.isMobile&&!u)window.location.href="https://www.facebook.com/dialog/oauth"+(0,b["default"])(p);else{if(!window.FB)return void(n.props.onFailure&&n.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(n.checkLoginState,{scope:o,return_scopes:a,auth_type:p.auth_type})}}}},a=o,i(n,a)}return a(t,e),c(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))return void this.sdkLoaded();this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||(e=document.createElement("div"),e.id="fb-root",document.body.appendChild(e))}},{key:"componentWillReceiveProps",value:function(e){this.state.isSdkLoaded&&e.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(e){this._isMounted&&this.setState(e)}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,o=t.appId,n=t.xfbml,r=t.cookie,i=t.version,a=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:o,xfbml:n,cookie:r}),e.setStateIfMounted({isSdkLoaded:!0}),(a||e.isRedirectedFromFb())&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var e=window.location.search;return(0,h["default"])(e,"code")||(0,h["default"])(e,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=this.props.language;!function(t,o,n){var r=t.getElementsByTagName(o)[0],i=r,a=r;t.getElementById(n)||(a=t.createElement(o),a.id=n,a.src="https://connect.facebook.net/"+e+"/sdk.js",i.parentNode.insertBefore(a,i))}(document,"script","facebook-jssdk")}},{key:"render",value:function o(){var o=this.props.render;if(!o)throw new Error("ReactFacebookLogin requires a render prop to render");var e={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(e)}}]),t}(l["default"].Component);m.propTypes={isDisabled:p["default"].bool,callback:p["default"].func.isRequired,appId:p["default"].string.isRequired,xfbml:p["default"].bool,cookie:p["default"].bool,authType:p["default"].string,scope:p["default"].string,state:p["default"].string,responseType:p["default"].string,returnScopes:p["default"].bool,redirectUri:p["default"].string,autoLoad:p["default"].bool,disableMobileRedirect:p["default"].bool,isMobile:p["default"].bool,fields:p["default"].string,version:p["default"].string,language:p["default"].string,onClick:p["default"].func,onFailure:p["default"].func,render:p["default"].func.isRequired},m.defaultProps={redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:g(),onFailure:null,state:"facebookdirect",responseType:"code"},t["default"]=m},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){return"?"+Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}},function(e,t,o){"use strict";function n(){}var r=o(7);e.exports=function(){function e(e,t,o,n,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return o.checkPropTypes=n,o.PropTypes=o,o}},function(e,t){"use strict";var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=o},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(2),l=n(u),f=o(1),p=n(f),d=o(9),b=n(d),y=o(4),h=n(y),g=function(e){return["button","input","select","textarea","optgroup","option","fieldset"].indexOf((e+"").toLowerCase())>=0},m=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"style",value:function(){var e=this.constructor.defaultProps.cssClass;return this.props.cssClass===e&&l["default"].createElement("style",{dangerouslySetInnerHTML:{__html:b["default"]}})}},{key:"containerStyle",value:function(e){var t=e.isProcessing,o=e.isSdkLoaded,n=e.isDisabled,r={transition:"opacity 0.5s"};return(t||!o||n)&&(r.opacity=.6),s(r,this.props.containerStyle)}},{key:"renderOwnButton",value:function(e){var t=this.props,o=t.cssClass,n=t.size,r=t.icon,i=t.textButton,a=t.typeButton,c=t.buttonStyle,u=e.onClick,f=e.isDisabled,p="string"==typeof r,d={};return f&&g(this.props.tag)&&(d.disabled=!0),l["default"].createElement("span",{style:this.containerStyle(e)},p&&l["default"].createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),l["default"].createElement(this.props.tag,s({type:a,className:o+" "+n,style:c,onClick:u},d),r&&p&&l["default"].createElement("i",{className:"fa "+r}),r&&!p&&r,i),this.style())}},{key:"render",value:function(){var e=this;return l["default"].createElement(h["default"],s({},this.props,{render:function(t){return e.renderOwnButton(t)}}))}}]),t}(l["default"].Component);m.propTypes={textButton:p["default"].string,typeButton:p["default"].string,size:p["default"].string,cssClass:p["default"].string,icon:p["default"].any,containerStyle:p["default"].object,buttonStyle:p["default"].object,tag:p["default"].oneOfType([p["default"].node,p["default"].func])},m.defaultProps={textButton:"Login with Facebook",typeButton:"button",size:"metro",fields:"name",cssClass:"kep-login-facebook",tag:"button"},t["default"]=m},function(e,t,o){t=e.exports=o(10)(),t.push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}}])});

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/fb.js":
/*!*********************!*\
  !*** ./pages/fb.js ***!
  \*********************/
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
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-facebook-login */ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_8__);








var _this = undefined,
    _jsxFileName = "/home/anwesha/Desktop/screencast/pages/fb.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var componentClicked = function componentClicked() {
  console.log("Clicked!");
};

var LoginButton = function LoginButton(_ref) {
  var facebookResponse = _ref.facebookResponse;
  return __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_8___default.a, {
    appId: "330897641228705" // autoLoad
    ,
    fields: "name,email,picture",
    onClick: componentClicked,
    callback: facebookResponse,
    icon: "fa-facebook",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  });
};

var UserScreen = function UserScreen(_ref2) {
  var user = _ref2.user;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, "Welcome ", user.name, "!"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, user.email), __jsx("img", {
    src: user.picture.data.url,
    height: user.picture.height,
    width: user.picture.width,
    alt: "avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }));
};

var App = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this2 = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "facebookResponse", function (response) {
      console.log(response);

      _this2.setState(_objectSpread({}, _this2.state, {
        user: response,
        isSignedIn: true
      }));
    });

    _this2.state = {
      user: false,
      isSignedIn: false
    };
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: {
          margin: "auto",
          textAlign: "center",
          paddingTop: "2em"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }
      }, this.state.user ? __jsx(UserScreen, {
        user: this.state.user,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 29
        }
      }) : __jsx(LoginButton, {
        facebookResponse: this.facebookResponse,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!***************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Ffb&absolutePagePath=%2Fhome%2Fanwesha%2FDesktop%2Fscreencast%2Fpages%2Ffb.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Ffb&absolutePagePath=%2Fhome%2Fanwesha%2FDesktop%2Fscreencast%2Fpages%2Ffb.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ffb&absolutePagePath=%2Fhome%2Fanwesha%2FDesktop%2Fscreencast%2Fpages%2Ffb.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=fb.js.map