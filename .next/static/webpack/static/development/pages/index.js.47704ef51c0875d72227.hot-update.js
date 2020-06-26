webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-countdown-clock/build/react-countdown-clock.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-countdown-clock/build/react-countdown-clock.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(window,(function(t){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Users/hugh/repos/react-countdown-clock/build",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){var i,r,s;r=n(0),i=n(2),(s=n(5)({_seconds:0,_radius:null,_fraction:null,_content:null,_canvas:null,_timeoutIds:[],_scale:window.devicePixelRatio||1,displayName:"ReactCountdownClock",componentDidUpdate:function(t){if(t.seconds!==this.props.seconds&&(this._seconds=this._startSeconds(),this._stopTimer(),this._setupTimer()),t.color!==this.props.color&&(this._drawBackground(),this._updateCanvas()),t.paused!==this.props.paused&&(this.props.paused||this._startTimer(),this.props.paused))return this._pauseTimer()},componentDidMount:function(){return this._seconds=this._startSeconds(),this._setupTimer()},componentWillUnmount:function(){return this._cancelTimer()},_startSeconds:function(){return this.props.paused?this.props.seconds:this.props.seconds-.01},_setupTimer:function(){if(this._setScale(),this._setupCanvases(),this._drawBackground(),this._drawTimer(),!this.props.paused)return this._startTimer()},_updateCanvas:function(){return this._clearTimer(),this._drawTimer()},_setScale:function(){return this._radius=this.props.size/2,this._fraction=2/this._seconds,this._tickPeriod=this._calculateTick(),this._innerRadius=this.props.weight?this._radius-this.props.weight:this._radius/1.8},_calculateTick:function(){var t;return 1.8,(t=1.8*this._seconds)>1e3?1e3:t},_setupCanvases:function(){if(!this._background||!this._timer)return this._background=this.refs.background.getContext("2d"),this._background.scale(this._scale,this._scale),this._timer=this.refs.timer.getContext("2d"),this._timer.textAlign="center",this._timer.textBaseline="middle",this._timer.scale(this._scale,this._scale),null!=this.props.onClick?this.refs.component.addEventListener("click",this.props.onClick):void 0},_startTimer:function(){return this._timeoutIds.push(setTimeout(()=>this._tick()),200)},_pauseTimer:function(){return this._stopTimer(),this._updateCanvas()},_stopTimer:function(){var t,e,n,i,r;for(i=[],t=0,e=(n=this._timeoutIds).length;t<e;t++)r=n[t],i.push(clearTimeout(r));return i},_cancelTimer:function(){if(this._stopTimer(),null!=this.props.onClick)return this.refs.component.removeEventListener("click",this.props.onClick)},_tick:function(){var t;return t=Date.now(),this._timeoutIds.push(setTimeout(()=>{var e;return e=(Date.now()-t)/1e3,this._seconds-=e,this._seconds<=0?(this._seconds=0,this._handleComplete(),this._clearTimer()):(this._updateCanvas(),this._tick())},this._tickPeriod))},_handleComplete:function(){if(this.props.onComplete)return this.props.onComplete()},_clearBackground:function(){return this._background.clearRect(0,0,this.refs.timer.width,this.refs.timer.height)},_clearTimer:function(){if(null!=this.refs.timer)return this._timer.clearRect(0,0,this.refs.timer.width,this.refs.timer.height)},_drawBackground:function(){return this._clearBackground(),this._background.beginPath(),this._background.globalAlpha=this.props.alpha/3,this._background.fillStyle=this.props.color,this._background.arc(this._radius,this._radius,this._radius,0,2*Math.PI,!1),this._background.arc(this._radius,this._radius,this._innerRadius,2*Math.PI,0,!0),this._background.closePath(),this._background.fill()},_formattedTime:function(){var t,e,n,i,r,s,o,a,c;return t=null!=(s=this._seconds<10&&this.props.showMilliseconds)?s:{1:0},"hms"===this.props.timeFormat?(n=`${e=parseInt(this._seconds/3600)%24}`,r=`${i=parseInt(this._seconds/60)%60}`,a=`${o=t?(Math.floor(10*this._seconds)/10).toFixed(t):Math.floor(this._seconds%60)}`,e<10&&(n=`0${e}`),i<10&&e>=1&&(r=`0${i}`),o<10&&(i>=1||e>=1)&&(a=`0${o}`),c=[],e>0&&c.push(n),(i>0||e>0)&&c.push(r),c.push(a),c.join(":")):(Math.floor(10*this._seconds)/10).toFixed(t)},_fontSize:function(t){var e;return"auto"===this.props.fontSize?(e=function(){switch(t.length){case 8:return 4;case 5:return 3;default:return 2}}(),`${this._radius/e}px`):this.props.fontSize},_drawTimer:function(){var t,e,n;return e=this._fraction*this._seconds+1.5,t=this._formattedTime(),n=this.props.paused&&null!=this.props.pausedText?this.props.pausedText:t,this._timer.globalAlpha=this.props.alpha,this._timer.fillStyle=this.props.color,this._timer.font=`bold ${this._fontSize(t)} ${this.props.font}`,this._timer.fillText(n,this._radius,this._radius),this._timer.beginPath(),this._timer.arc(this._radius,this._radius,this._radius,1.5*Math.PI,Math.PI*e,!1),this._timer.arc(this._radius,this._radius,this._innerRadius,Math.PI*e,1.5*Math.PI,!0),this._timer.closePath(),this._timer.fill()},render:function(){var t;return t={style:{position:"absolute",width:this.props.size,height:this.props.size},height:this.props.size*this._scale,width:this.props.size*this._scale},r.createElement("div",{ref:"component",className:"react-countdown-clock",style:{width:this.props.size,height:this.props.size}},r.createElement("canvas",Object.assign({ref:"background"},t)),r.createElement("canvas",Object.assign({ref:"timer"},t)))}})).propTypes={seconds:i.number,size:i.number,weight:i.number,color:i.string,fontSize:i.string,font:i.string,alpha:i.number,timeFormat:i.string,onComplete:i.func,onClick:i.func,showMilliseconds:i.bool,paused:i.bool,pausedText:i.string},s.defaultProps={seconds:60,size:300,color:"#000",alpha:1,timeFormat:"hms",fontSize:"auto",font:"Arial",showMilliseconds:!0,paused:!1},t.exports=s},function(t,e,n){t.exports=n(3)()},function(t,e,n){"use strict";var i=n(4);function r(){}function s(){}s.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,s,o){if(o!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:s,resetWarningCache:r};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";var i=n(0),r=n(6);if(void 0===i)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var s=(new i.Component).updater;t.exports=r(i.Component,i.isValidElement,s)},function(t,e,n){"use strict";var i=n(7),r=n(8),s=n(9),o="mixins";t.exports=function(t,e,n){var a=[],c={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},u={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},p={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)l(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=i({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=i({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=f(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=i({},t.propTypes,e)},statics:function(t,e){!function(t,e){if(!e)return;for(var n in e){var i=e[n];if(e.hasOwnProperty(n)){if(s(!(n in p),'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n),n in t){var r=u.hasOwnProperty(n)?u[n]:null;return s("DEFINE_MANY_MERGED"===r,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(t[n]=f(t[n],i))}t[n]=i}}}(t,e)},autobind:function(){}};function h(t,e){var n=c.hasOwnProperty(e)?c[e]:null;E.hasOwnProperty(e)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function l(t,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var i=t.prototype,r=i.__reactAutoBindPairs;for(var a in n.hasOwnProperty(o)&&p.mixins(t,n.mixins),n)if(n.hasOwnProperty(a)&&a!==o){var u=n[a],l=i.hasOwnProperty(a);if(h(l,a),p.hasOwnProperty(a))p[a](t,u);else{var d=c.hasOwnProperty(a);if("function"==typeof u&&!d&&!l&&!1!==n.autobind)r.push(a,u),i[a]=u;else if(l){var m=c[a];s(d&&("DEFINE_MANY_MERGED"===m||"DEFINE_MANY"===m),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",m,a),"DEFINE_MANY_MERGED"===m?i[a]=f(i[a],u):"DEFINE_MANY"===m&&(i[a]=_(i[a],u))}else i[a]=u}}}else;}function d(t,e){for(var n in s(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."),e)e.hasOwnProperty(n)&&(s(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function f(t,e){return function(){var n=t.apply(this,arguments),i=e.apply(this,arguments);if(null==n)return i;if(null==i)return n;var r={};return d(r,n),d(r,i),r}}function _(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function m(t,e){return e.bind(t)}var y={componentDidMount:function(){this.__isMounted=!0}},g={componentWillUnmount:function(){this.__isMounted=!1}},E={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},b=function(){};return i(b.prototype,t.prototype,E),function(t){var e=function(t,i,o){this.__reactAutoBindPairs.length&&function(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var i=e[n],r=e[n+1];t[i]=m(t,r)}}(this),this.props=t,this.context=i,this.refs=r,this.updater=o||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;s("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=a};for(var i in e.prototype=new b,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],a.forEach(l.bind(null,e)),l(e,y),l(e,t),l(e,g),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),s(e.prototype.render,"createClass(...): Class specification must implement a `render` method."),c)e.prototype[i]||(e.prototype[i]=null);return e}}},function(t,e,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(t){i[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,a,c=o(t),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))r.call(n,p)&&(c[p]=n[p]);if(i){a=i(n);for(var h=0;h<a.length;h++)s.call(n,a[h])&&(c[a[h]]=n[a[h]])}}return c}},function(t,e,n){"use strict";t.exports={}},function(t,e,n){"use strict";var i=function(t){};t.exports=function(t,e,n,r,s,o,a,c){if(i(e),!t){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[n,r,s,o,a,c],h=0;(u=new Error(e.replace(/%s/g,(function(){return p[h++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}}])}));
//# sourceMappingURL=react-countdown-clock.js.map

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
  }, "div.jsx-2094082217{text-align:center;content-align:center;margin:0px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IsQUFHNkIsa0JBQ0cscUJBQ0wsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vZ2x1Zy5wbmdcIjtcblxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmltcG9ydCBHb29nbGVMb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvR29vZ2xlTG9nXCI7XG5pbXBvcnQgRmJMb2cyIGZyb20gXCIuLi9jb21wb25lbnRzL0ZiTG9nMlwiO1xuaW1wb3J0IFJlYWN0Q291bnRkb3duQ2xvY2sgZnJvbSAncmVhY3QtY291bnRkb3duLWNsb2NrJ1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tIFwicmVhY3QtcGFydGljbGVzLWpzXCI7XG5cblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29udGVudC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPFBhcnRpY2xlc1xuICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICB2YWx1ZTogNDAsXG4gICAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlX2FyZWE6IDUwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICB2YWx1ZTogW1wiI2NjMDAwMFwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICBjb2xvcjogXCIjYWEwMDQ0XCIsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICBpbmRleDogXCItMTBcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBzaHJpbmstdG8tZml0Om5vXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGl0bGU+U2NyZWVuY2FzdCA8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJxdWVzdGlvbi5jc3NcIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8UmVhY3RDb3VudGRvd25DbG9jayBzZWNvbmRzPXs2MH1cbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzAwMFwiXG4gICAgICAgICAgICAgICAgICAgICBhbHBoYT17MC45fVxuICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MzAwfVxuICAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZT17bXlDYWxsYmFja30gLz5cbiAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lnblwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTQwcHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogXCInUnVzc28gT25lJywgc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXN0LWZsaWNrZXJcIj5zY3JlZW48L3NwYW4+Y2FzdHtcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsaWNrZXJcIj4yMDIwIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWhlYWRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNjBweFwiIH19PlxuICAgICAgICAgICAgPGgxPkxvZ2luIHRvIHBsYXkgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEdvb2dsZUxvZyAvPlxuICAgICAgICA8RmJMb2cyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtMb2dvfVxuICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiOTBweFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIGZsb2F0OiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjUwcHhcIixcbiAgICAgICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXX0= */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/index.js */"), __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
  }), __jsx(react_countdown_clock__WEBPACK_IMPORTED_MODULE_8___default.a, {
    seconds: 60,
    color: "#000",
    alpha: 0.9,
    size: 300,
    onComplete: myCallback,
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
      lineNumber: 76,
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
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-2094082217" + " " + "fast-flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, "screen"), "cast", " ", __jsx("span", {
    className: "jsx-2094082217" + " " + "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, "Login to play "))), __jsx(_components_GoogleLog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx(_components_FbLog2__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 96,
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
      lineNumber: 103,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.47704ef51c0875d72227.hot-update.js.map