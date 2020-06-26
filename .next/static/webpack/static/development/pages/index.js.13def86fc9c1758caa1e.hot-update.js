webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Timer.js":
/*!*****************************!*\
  !*** ./components/Timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown-circle-timer */ "./node_modules/react-countdown-circle-timer/lib/index.js");
/* harmony import */ var react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "/home/anwesha/Desktop/screencast/components/Timer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var minuteSeconds = 60;
var hourSeconds = 3600;
var daySeconds = 86400;
var timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

var renderTime = function renderTime(dimension, time) {
  return __jsx("div", {
    className: "time-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "time",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, time), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, dimension));
};

var getTimeSeconds = function getTimeSeconds(time) {
  return minuteSeconds - time / 1000 | 0;
};

var getTimeMinutes = function getTimeMinutes(time) {
  return time % hourSeconds / minuteSeconds | 0;
};

var getTimeHours = function getTimeHours(time) {
  return time % daySeconds / hourSeconds | 0;
};

var getTimeDays = function getTimeDays(time) {
  return time / daySeconds | 0;
};

function Timer() {
  var stratTime = Date.now(); // use UNIX timestamp in seconds

  var endTime = stratTime + 243248; // use UNIX timestamp in seconds

  var remainingTime = endTime - stratTime;
  var days = Math.ceil(remainingTime / daySeconds);
  var daysDuration = days * daySeconds;
  return __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__["CountdownCircleTimer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, timerProps, {
    colors: [["#7E2E84"]],
    duration: daysDuration,
    initialRemainingTime: remainingTime,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), function (_ref) {
    var elapsedTime = _ref.elapsedTime;
    return renderTime("days", getTimeDays(daysDuration - elapsedTime / 1000));
  }), __jsx(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__["CountdownCircleTimer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, timerProps, {
    colors: [["#D14081"]],
    duration: daySeconds,
    initialRemainingTime: remainingTime % daySeconds,
    onComplete: function onComplete(totalElapsedTime) {
      return [remainingTime - totalElapsedTime > hourSeconds];
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), function (_ref2) {
    var elapsedTime = _ref2.elapsedTime;
    return renderTime("hours", getTimeHours(daySeconds - elapsedTime / 1000));
  }), __jsx(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__["CountdownCircleTimer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, timerProps, {
    colors: [["#EF798A"]],
    duration: hourSeconds,
    initialRemainingTime: remainingTime % hourSeconds,
    onComplete: function onComplete(totalElapsedTime) {
      return [remainingTime - totalElapsedTime > minuteSeconds];
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), function (_ref3) {
    var elapsedTime = _ref3.elapsedTime;
    return renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime / 1000));
  }), __jsx(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_2__["CountdownCircleTimer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, timerProps, {
    colors: [["#218380"]],
    duration: minuteSeconds,
    initialRemainingTime: remainingTime % minuteSeconds,
    onComplete: function onComplete(totalElapsedTime) {
      return [remainingTime - totalElapsedTime > 0];
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), function (_ref4) {
    var elapsedTime = _ref4.elapsedTime;
    return renderTime("seconds", getTimeSeconds(elapsedTime));
  }));
}

/***/ }),

/***/ "./node_modules/react-countdown-circle-timer/lib/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-countdown-circle-timer/lib/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){e.exports=r(3)()},function(e,t){e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=r(1)},function(e,t,r){"use strict";r.r(t),r.d(t,"useElapsedTime",(function(){return a}));var n=r(0);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.duration,i=t.onComplete,a=t.startAt,c=void 0===a?0:a,l=t.autoResetKey,f=Object(n.useState)(c),s=o(f,2),p=s[0],d=s[1],y=Object(n.useRef)(-1e3*c),m=Object(n.useRef)(null),b=Object(n.useRef)(null),v=Object(n.useRef)(null),g=Object(n.useRef)(!1),h=Object(n.useRef)(!1),O=Object(n.useRef)(0),j=Object(n.useCallback)((function(e){O.current+=1,d("number"==typeof e?e:c)}),[]),w=function e(t){var n=t/1e3;if(null===b.current)return b.current=n,void(m.current=requestAnimationFrame(e));var o=n-b.current;if(b.current=n,d((function(e){var t=e+o;return"number"!=typeof r||t<r?t:(h.current=!0,r)})),h.current){if("function"==typeof i){y.current+=1e3*r;var a=y.current/1e3,u=i(a)||{},c=u.shouldRepeat,l=void 0!==c&&c,f=u.delay,s=void 0===f?0:f,p=u.newStartAt;l&&g.current&&(v.current=setTimeout((function(){j(p)}),1e3*s))}}else m.current=requestAnimationFrame(e)},S=function(){cancelAnimationFrame(m.current),clearTimeout(v.current),b.current=null};return u((function(){return e&&(m.current=requestAnimationFrame(w)),S}),[e]),u((function(){e&&g.current&&(S(),m.current=requestAnimationFrame(w))}),[r]),u((function(){g.current&&j()}),[l]),u((function(){e&&h.current&&(S(),m.current=requestAnimationFrame(w)),h.current=!1}),[O.current]),u((function(){return g.current=!0,function(){g.current=!1}}),[]),{elapsedTime:p,reset:j}},u="undefined"==typeof window?n.useEffect:n.useLayoutEffect}])},function(e,t,r){"use strict";var n=r(4);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t),r.d(t,"CountdownCircleTimer",(function(){return L}));var n=r(1),o=r.n(n),i=function(e){return{position:"relative",width:e,height:e}},a={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},u=function(e){return"countdown-circle-timer-gradient-".concat(e||Math.random().toString(36).substring(2))},c=function(e,t){return 0===t?0:"number"==typeof e?t-e:0},l=r(0),f=r.n(l),s={duration:f.a.number.isRequired,colors:f.a.arrayOf(f.a.arrayOf((function(e,t,r,n,o){var i=e[0],a=e[1];return i.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)?void 0===a||a>=0&&a<=1?void 0:new Error("Invalid prop '".concat(o,"[1]' supplied to '").concat(r,"'. Expect a number of color transition duration with value between 0 and 1.")):new Error("Invalid prop '".concat(o,"[0]' supplied to '").concat(r,"'.Expect a color with HEX color code."))})).isRequired).isRequired,children:f.a.oneOfType([f.a.func,f.a.node]),size:f.a.number,strokeWidth:f.a.number,trailColor:f.a.string,isPlaying:f.a.bool,strokeLinecap:f.a.oneOf(["round","square"]),isLinearGradient:f.a.bool,gradientUniqueKey:f.a.string,onComplete:f.a.func,ariaLabel:f.a.string,renderAriaTime:f.a.func,initialRemainingTime:f.a.number,rotation:f.a.oneOf(["clockwise","counterclockwise"])};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=function(e){var t=e.gradientId,r=e.colors,n=e.defs,i=void 0===n?"defs":n,a=e.linearGradient,u=void 0===a?"linearGradient":a,c=e.stop,l=void 0===c?"stop":c;return o.a.createElement(i,null,o.a.createElement(u,{id:t,x1:"1",y1:"0",x2:"0",y2:"0"},function(e){if(1===e.length)return[{offset:1,stopColor:e[0][0],key:0}];var t=e.length,r=0;return[{offset:0,stopColor:e[0][0],key:0}].concat(y(e.map((function(e,n){var o=d(e,2),i=o[0],a=o[1];return r+=a,{offset:t===n+1?1:r,stopColor:i,key:n+1}}))))}(r).map((function(e){return o.a.createElement(l,p({},e,{key:e.key}))}))))},g=f.a.oneOfType([f.a.func,f.a.string]);v.propTypes={gradientId:f.a.string.isRequired,colors:s.colors,defs:g,linearGradient:g,stop:g};var h=r(2),O=function(e,t,r,n){return 0===n?r:t+r*(e/n)};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=function(e){var t=e.r,r=e.g,n=e.b,o=e.opacity;return"rgba(".concat(t,", ").concat(r,", ").concat(n,", ").concat(o,")")},T=function(e,t){var r=function(e){return e.map((function(e){var t=e[0].replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,r,n){return"#".concat(t).concat(t).concat(r).concat(r).concat(n).concat(n)})).substring(1).match(/.{2}/g).map((function(e){return parseInt(e,16)}));return[{r:t[0],g:t[1],b:t[2],opacity:1},e[1]]}))}(e);if(!t)return r;var n=0;return r.map((function(e,t){var o=r.length===t+1,i="0%";if(t>0){var a=r[t-1][1],u=Math.round(100*a);(n+=u)>100||o?(n=100,i="100%"):i="".concat(n,"%")}var c={offset:i,stopColor:P(e[0]),key:t};return[w({},e[0],{gradient:c}),e[1]]}))},A=function(e,t){if(1===e.length)return P(e[0]);var r=e.find((function(e){var r=e.colorEndTime;return t<=r}));if(void 0===r.duration)return P(r);var n=t-r.colorStartTime,o=0|O(n,r.r,r.goalR,r.duration),i=0|O(n,r.g,r.goalG,r.duration),a=0|O(n,r.b,r.goalB,r.duration);return P({r:o,g:i,b:a,opacity:r.opacity})},E={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:0,clip:"rect(0 0 0 0)",padding:0,overflow:"hidden",whiteSpace:"nowrap",wordWrap:"normal"};function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=function(e){var t=e.isPlaying,r=e.size,o=e.strokeWidth,l=e.duration,f=e.initialRemainingTime,s=e.colors,p=e.isLinearGradient,d=e.gradientUniqueKey,y=e.onComplete,m=e.rotation,b=Object(n.useRef)({duration:l,startAt:c(f,l)}).current,v=b.duration,g=b.startAt,j=Object(n.useMemo)((function(){return function(e,t,r){var n=e/2,o=t/2,i=n-o,a=2*i,u="clockwise"===r?"1,0":"0,1",c=2*Math.PI*i;return{path:"m ".concat(n,",").concat(o,"\n          a ").concat(i,",").concat(i," 0 ").concat(u," 0,").concat(a,"\n          a ").concat(i,",").concat(i," 0 ").concat(u," 0,-").concat(a),pathLength:c}}(r,o,m)}),[r,o,m]),S=j.path,P=j.pathLength,x=Object(n.useMemo)((function(){return function(e,t,r){var n=T(e,r),o=0;return n.map((function(e,r){var i=n.length===r+1;if(o>=t||i)return o=t,w({},e[0],{colorEndTime:o});var a=o,u=void 0!==e[1]?a+e[1]*t:t,c=u>=t?t:u,l=n[r+1][0],f={goalR:l.r-e[0].r,goalG:l.g-e[0].g,goalB:l.b-e[0].b};return o=c,w({},e[0],{},f,{colorStartTime:a,colorEndTime:c,duration:c-a})}))}(s,v,p)}),[s,v,p]),C=Object(n.useMemo)((function(){return u(d)}),[d]),R=Object(h.useElapsedTime)(t,{duration:v,startAt:g,onComplete:"function"==typeof y?function(){var e=y.apply(void 0,arguments)||[],t=k(e,2),r=t[0],n=void 0!==r&&r,o=t[1],i=void 0===o?0:o;return{shouldRepeat:n,delay:i/1e3,newStartAt:0}}:void 0}).elapsedTime;return{path:S,pathLength:P,gradientId:C,stroke:A(x,R),strokeDashoffset:O(R,0,P,v),timeProps:{remainingTime:Math.ceil(v-R),elapsedTime:R},styles:{wrapperStyle:i(r),timeStyle:a,visuallyHidden:E}}};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=function(e){var t=e.size,r=e.strokeWidth,n=e.trailColor,i=e.duration,a=e.isPlaying,u=e.colors,c=e.strokeLinecap,l=e.children,f=e.isLinearGradient,s=e.gradientUniqueKey,p=e.onComplete,d=e.ariaLabel,y=e.renderAriaTime,m=e.initialRemainingTime,b=e.rotation,g=C({isPlaying:a,size:t,strokeWidth:r,duration:i,initialRemainingTime:m,colors:u,isLinearGradient:f,gradientUniqueKey:s,onComplete:p,rotation:b}),h=g.path,O=g.pathLength,j=g.stroke,w=g.strokeDashoffset,S=g.gradientId,P=g.styles,T=g.timeProps;return o.a.createElement("div",{style:P.wrapperStyle,"aria-label":d},o.a.createElement("svg",{width:t,height:t,xmlns:"http://www.w3.org/2000/svg"},f&&o.a.createElement(v,{colors:u,gradientId:S}),o.a.createElement("path",{d:h,fill:"none",stroke:n,strokeWidth:r}),o.a.createElement("path",{d:h,fill:"none",stroke:f?"url(#".concat(S,")"):j,strokeLinecap:c,strokeWidth:r,strokeDasharray:O,strokeDashoffset:w})),null!==l&&o.a.createElement("div",{"aria-hidden":"true",style:I({},P.timeStyle,{color:j})},o.a.isValidElement(l)?o.a.cloneElement(o.a.Children.only(l),T):l(T)),"function"==typeof y&&o.a.createElement("div",{role:"timer","aria-live":"assertive",style:P.visuallyHidden},y(T)))};L.propTypes=s,L.defaultProps={size:180,strokeWidth:12,trailColor:"#d9d9d9",isPlaying:!1,strokeLinecap:"round",isLinearGradient:!1,ariaLabel:"Countdown timer",children:null,rotation:"clockwise"},L.displayName="CountdownCircleTimer"}]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _glug_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glug.png */ "./glug.png");
/* harmony import */ var _glug_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_glug_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_GoogleLog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GoogleLog */ "./components/GoogleLog.js");
/* harmony import */ var _components_FbLog2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FbLog2 */ "./components/FbLog2.js");
/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Timer */ "./components/Timer.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/anwesha/Desktop/screencast/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










function index() {
  return __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2094082217",
    __self: this
  }, "div.jsx-2094082217{text-align:center;content-align:center;margin:0px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHNkIsa0JBQ0cscUJBQ0wsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vZ2x1Zy5wbmdcIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmltcG9ydCBHb29nbGVMb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvR29vZ2xlTG9nXCI7XG5pbXBvcnQgRmJMb2cyIGZyb20gXCIuLi9jb21wb25lbnRzL0ZiTG9nMlwiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuLi9jb21wb25lbnRzL1RpbWVyXCJcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcInJlYWN0LXBhcnRpY2xlcy1qc1wiO1xuXG5cblxuXG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb250ZW50LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8UGFydGljbGVzXG4gICAgICAgIHBhcmFtcz17e1xuICAgICAgICAgIHBhcnRpY2xlczoge1xuICAgICAgICAgICAgbnVtYmVyOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiA0MCxcbiAgICAgICAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWVfYXJlYTogNTAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBbXCIjY2MwMDAwXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNhYTAwNDRcIixcbiAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgIGluZGV4OiBcIi0xMFwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHNocmluay10by1maXQ6bm9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0aXRsZT5TY3JlZW5jYXN0IDwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cInF1ZXN0aW9uLmNzc1wiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxUaW1lci8+XG4gICAgICAgIFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lnblwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTQwcHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogXCInUnVzc28gT25lJywgc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXN0LWZsaWNrZXJcIj5zY3JlZW48L3NwYW4+Y2FzdHtcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsaWNrZXJcIj4yMDIwIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWhlYWRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNjBweFwiIH19PlxuICAgICAgICAgICAgPGgxPkxvZ2luIHRvIHBsYXkgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEdvb2dsZUxvZyAvPlxuICAgICAgICA8RmJMb2cyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtMb2dvfVxuICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiOTBweFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIGZsb2F0OiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjUwcHhcIixcbiAgICAgICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXX0= */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/index.js */"), __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_9___default.a, {
    params: {
      particles: {
        number: {
          value: 40,
          density: {
            enable: false,
            value_area: 500
          }
        },
        color: {
          value: ["#cc0000"]
        },
        line_linked: {
          color: "#aa0044",
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
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit:no",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx("title", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Screencast "), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "question.css",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx(_components_Timer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      marginTop: "140px",
      marginBottom: "20px",
      fontFamily: "'Russo One', sans-serif"
    },
    className: "jsx-2094082217" + " " + "sign",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-2094082217" + " " + "fast-flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "screen"), "cast", " ", __jsx("span", {
    className: "jsx-2094082217" + " " + "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "2020 ")), __jsx("div", {
    style: {
      marginBottom: "60px"
    },
    className: "jsx-2094082217" + " " + "login-head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "Login to play "))), __jsx(_components_GoogleLog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx(_components_FbLog2__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      marginRight: "auto",
      marginLeft: "auto",
      textAlign: "center"
    },
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _glug_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "logo",
    style: {
      marginTop: "90px",
      position: "relative",
      "float": "bottom",
      height: "50px",
      width: "auto"
    },
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.13def86fc9c1758caa1e.hot-update.js.map