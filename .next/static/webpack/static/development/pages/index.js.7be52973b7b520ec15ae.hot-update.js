webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react_countdown_clock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-countdown-clock */ "./node_modules/react-countdown-clock/build/react-countdown-clock.js");
/* harmony import */ var react_countdown_clock__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_countdown_clock__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-countdown-circle-timer */ "./node_modules/react-countdown-circle-timer/lib/index.js");
/* harmony import */ var react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/anwesha/Desktop/screencast/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











function index() {
  return __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2094082217",
    __self: this
  }, "div.jsx-2094082217{text-align:center;content-align:center;margin:0px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IsQUFHNkIsa0JBQ0cscUJBQ0wsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vZ2x1Zy5wbmdcIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmltcG9ydCBHb29nbGVMb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvR29vZ2xlTG9nXCI7XG5pbXBvcnQgRmJMb2cyIGZyb20gXCIuLi9jb21wb25lbnRzL0ZiTG9nMlwiO1xuaW1wb3J0IFJlYWN0Q291bnRkb3duQ2xvY2sgZnJvbSAncmVhY3QtY291bnRkb3duLWNsb2NrJ1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tIFwicmVhY3QtcGFydGljbGVzLWpzXCI7XG5pbXBvcnQgQ291bnRkb3duQ2lyY2xlVGltZXIgZnJvbSAncmVhY3QtY291bnRkb3duLWNpcmNsZS10aW1lcidcblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29udGVudC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPFBhcnRpY2xlc1xuICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICB2YWx1ZTogNDAsXG4gICAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlX2FyZWE6IDUwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICB2YWx1ZTogW1wiI2NjMDAwMFwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICBjb2xvcjogXCIjYWEwMDQ0XCIsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICBpbmRleDogXCItMTBcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBzaHJpbmstdG8tZml0Om5vXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGl0bGU+U2NyZWVuY2FzdCA8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJxdWVzdGlvbi5jc3NcIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8Q291bnRkb3duQ2lyY2xlVGltZXJcbiAgICAgICAgICAgIG9uQ29tcGxldGU9eygpID0+IHtcbiAgICAgICAgICAgICAgLy8gZG8geW91ciBzdHVmZiBoZXJlXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRE9ORVwiKSAvLyByZXBlYXQgYW5pbWF0aW9uIGluIDEuNSBzZWNvbmRzXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaXNQbGF5aW5nXG4gICAgICAgICAgICBkdXJhdGlvbj17MTB9XG4gICAgICAgICAgICBjb2xvcnM9e1tbJyNBMzAwMDAnXV19XG4gICAgICAgICAgLz5cbiAgICAgICAgXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaWduXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxNDBweFwiLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMjBweFwiLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIidSdXNzbyBPbmUnLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhc3QtZmxpY2tlclwiPnNjcmVlbjwvc3Bhbj5jYXN0e1wiIFwifVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxpY2tlclwiPjIwMjAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4taGVhZFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI2MHB4XCIgfX0+XG4gICAgICAgICAgICA8aDE+TG9naW4gdG8gcGxheSA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8R29vZ2xlTG9nIC8+XG4gICAgICAgIDxGYkxvZzIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e0xvZ299XG4gICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCI5MHB4XCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgZmxvYXQ6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/index.js */"), __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("meta", {
    charset: "UTF-8",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit:no",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx("title", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 63,
      columnNumber: 13
    }
  }))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx(react_countdown_circle_timer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onComplete: function onComplete() {
      // do your stuff here
      console.log("DONE"); // repeat animation in 1.5 seconds
    },
    isPlaying: true,
    duration: 10,
    colors: [['#A30000']],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-2094082217" + " " + "fast-flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "screen"), "cast", " ", __jsx("span", {
    className: "jsx-2094082217" + " " + "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "Login to play "))), __jsx(_components_GoogleLog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx(_components_FbLog2__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 99,
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
      lineNumber: 106,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.7be52973b7b520ec15ae.hot-update.js.map