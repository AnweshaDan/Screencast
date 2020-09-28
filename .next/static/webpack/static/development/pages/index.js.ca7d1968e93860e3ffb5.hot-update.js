webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/GoogleLog.js":
/*!*********************************!*\
  !*** ./components/GoogleLog.js ***!
  \*********************************/
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
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var social_media_icons_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! social-media-icons-react */ "./node_modules/social-media-icons-react/dist/index.js");
/* harmony import */ var social_media_icons_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(social_media_icons_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_AnsAlert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/AnsAlert */ "./components/AnsAlert.js");
/* harmony import */ var _env_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../env.json */ "./env.json");
var _env_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../env.json */ "./env.json", 1);







var _jsxFileName = "/home/anwesha/Desktop/screencast/components/GoogleLog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var useStyles = function useStyles(theme) {
  return {
    root: {
      "& > *": {
        margin: theme.spacing(0)
      }
    }
  };
};

var GoogleLog = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(GoogleLog, _React$Component);

  var _super = _createSuper(GoogleLog);

  function GoogleLog() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GoogleLog);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "responseGoogle", function (response) {
      console.log(response); //localStorage.setItem('token', response.tokenObj.access_token)

      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(_env_json__WEBPACK_IMPORTED_MODULE_16__.api + "/api/googlelogin", {
        token: response.tokenObj.access_token
      }).then(function (res) {
        console.log(res);
        console.log("jajajaj");
        localStorage.setItem('token', res.data.access_token); //localStorage.setItem('ref_token', res.data.refresh_token)

        localStorage.setItem("email", response.profileObj.email);
        localStorage.setItem("name", response.profileObj.name);
        localStorage.setItem("image", response.profileObj.imageUrl);

        _this.setState({
          result: res.data.quiz_finished,
          access: res.data.access_token,
          userDetails: response.profileObj,
          isUserLoggedIn: true
        }, function () {
          if (localStorage.getItem('start') <= Date.now()) {
            if (!res.data.quiz_finished) next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/game');else {
              next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/finale');
            }
          } else next_router__WEBPACK_IMPORTED_MODULE_14___default.a.reload();
        }); //this.refresh(res.data.access_token,res.data.refresh_token);

        /* if ((localStorage.getItem('start') <= Date.now()))
          Router.push("/game");*/

      });
    });

    _this.state = {
      userDetails: {},
      isUserLoggedIn: false,
      access: "",
      result: false
    }; //this.refresh=this.refresh.bind(this);

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GoogleLog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //this.responseGoogle(this.state.result)
      if (localStorage.getItem("email")) {
        //this.responseGoogle(this.state.result)
        this.setState({
          isUserLoggedIn: true
        });
        console.log('mounted' + this.state.result); //if((localStorage.getItem('start') < Date.now())) Router.push("/game");
      }
      /*if (localStorage.getItem("email") && ((localStorage.getItem('start') <= Date.now()))) {
        //this.refresh(localStorage.getItem('token'),localStorage.getItem('ref_token'))
        console.log("email yes timer yes")
        //Router.push("/game");
      }
      else
      {
        console.log("timer no");
        //Router.push('/');  
      }*/

    }
    /*refresh=(a,r)=>{
      console.log(r)
      localStorage.setItem("token",a);
      console.log(localStorage.getItem("token"));
       const t=setInterval(()=>{
        
        axios.post("https://https://screencast2020.herokuapp.com/api/refresh",{
          refresh:r
        }).then((re)=>{
          
          console.log(re);
          localStorage.setItem("token",re.data.access);
          this.setState({access:re.data.access})
          console.log(localStorage.getItem("token"));
      
        })
      },50000)
      localStorage.setItem("interval_id",t);
      
    }*/

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log("render of google");
      var classes = this.props.classes;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 9
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 9
        }
      }, !this.state.isUserLoggedIn && __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_8___default.a, {
        clientId: "1091948986515-evn13uscvig9k6olefvrkdk3q374iumi.apps.googleusercontent.com",
        render: function render(renderProps) {
          return __jsx("div", {
            className: classes.root,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 17
            }
          }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
            style: {
              backgroundColor: "rgba(0,0,0,0)",
              padding: "0"
            },
            variant: "contained",
            color: "secondary",
            className: "button",
            onClick: renderProps.onClick,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 19
            }
          }, __jsx(social_media_icons_react__WEBPACK_IMPORTED_MODULE_13__["SocialMediaIconsReact"], {
            borderColor: "rgba(0,0,0,0.25)",
            borderWidth: "4",
            borderStyle: "inset",
            icon: "googleplus",
            iconColor: "rgba(255,255,255,1)",
            backgroundColor: "rgba(223,48,28,1)",
            iconSize: "7",
            roundness: "29%",
            size: "53",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 21
            }
          })));
        },
        onSuccess: this.responseGoogle //isSignedIn ??
        ,
        onFailure: this.responseGoogle //handle later
        ,
        cookiePolicy: "single_host_origin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }
      })));
    }
  }]);

  return GoogleLog;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(useStyles)(GoogleLog));

/***/ })

})
//# sourceMappingURL=index.js.ca7d1968e93860e3ffb5.hot-update.js.map