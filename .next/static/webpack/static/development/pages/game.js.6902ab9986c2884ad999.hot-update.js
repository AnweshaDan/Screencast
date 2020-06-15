webpackHotUpdate("static/development/pages/game.js",{

/***/ "./pages/game.js":
/*!***********************!*\
  !*** ./pages/game.js ***!
  \***********************/
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Question */ "./components/Question.js");
/* harmony import */ var _components_Hint__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Hint */ "./components/Hint.js");
/* harmony import */ var _components_Submit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Submit */ "./components/Submit.js");
/* harmony import */ var _components_Submit__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_Submit__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Answer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Answer */ "./components/Answer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_AnsAlert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AnsAlert */ "./components/AnsAlert.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");







var _jsxFileName = "/home/anwesha/Desktop/screencast/pages/game.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



















var game = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(game, _React$Component);

  var _super = _createSuper(game);

  function game(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, game);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClickOpen", function () {
      console.log("submitting");
      setOpen(true);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClose", function () {
      setOpen(false);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "submit", function () {
      //send final answer for checking
      console.log(_this.state.answer);

      _this.checkAns(_this.state.answer);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "change", function (event) {
      //keep updating answer
      var e = event.target.value;

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          answer: e
        });
      });
    });

    _this.state = {
      answer: "",
      questions: "",
      qsNo: 1,
      correct: 0,
      open: false,
      isLoggedIn: false,
      hint: ""
    };
    _this.submit = _this.submit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.change = _this.change.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.checkAns = _this.checkAns.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.getQuestions = _this.getQuestions.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); //this.keypress=this.keypress.bind(this);

    _this.handleClickOpen = _this.handleClickOpen.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleClose = _this.handleClose.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(game, [{
    key: "componentDidMount",
    value: function componentDidMount() //at the beginning sets the qs
    {
      //after getting appropiate data from backend about that email in local storage
      console.log(this.state.qsNo);
      console.log(localStorage.getItem('email')); //email available here

      /*   axios.get('https://jsonplaceholder.typicode.com/users/email?=Nathan@yesenia.net').then((response)=>
      {
          console.log("yesssss"+this.state.qsNo+response.json);
          this.setState(prevState=>{
              return{ ...prevState, questions:response.data.id}
            });
      }
      )*/
      //next qs/completed/error

      this.getQuestions();
    }
  }, {
    key: "getQuestions",
    value: function getQuestions() {
      var _this2 = this;

      console.log(this.state.qsNo);
      console.log("YO"); //get questions from api and updates state

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://jsonplaceholder.typicode.com/posts/' + this.state.qsNo).then(function (response) {
        var r = response.data.title;
        console.log(r);

        _this2.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            questions: r,
            hint: response.data.body
          });
        });
      });
    }
  }, {
    key: "checkAns",

    /* keypress=(event)=>{//not done
         if(event.key==="Enter")
         {
             console.log("jo"+this.state.answer);
             this.checkAnswer(this.state.answer);
             console.log("jo"+this.state.answer);
             
         }
     }*/
    value: function checkAns(answer) //check answer from api and send for correct alert
    {
      var _this3 = this;

      console.log(answer);
      console.log(this.state.qsNo);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://jsonplaceholder.typicode.com/posts/' + this.state.qsNo).then(function (response) {
        var r = response.data.id;
        console.log(r);

        if (_this3.state.qsNo < 5) {
          if (answer == r) {
            _this3.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                qsNo: prevState.qsNo + 1,
                correct: 1
              });
            });

            _this3.getQuestions();
          } else {
            _this3.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                correct: 0
              });
            });

            _this3.getQuestions();
          }
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push('/');
        }

        console.log(_this3.state.correct);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-1891829302",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 9
        }
      }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_15___default.a, {
        params: {
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 900
              }
            },
            color: {
              value: ['#cc0000']
            },
            line_linked: {
              color: '#aa0044',
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
          lineNumber: 170,
          columnNumber: 13
        }
      }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 13
        }
      }), __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_12__["default"], {
        qs: this.state.questions,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 13
        }
      }), __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        change: this.change
        /*press={this.keypress}*/
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "jsx-1891829302",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 25
        }
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
        className: "btnSubmit",
        variant: "contained",
        color: "primary",
        disableElevation: true,
        onClick: props.submit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 21
        }
      }, "Submit"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_20__["default"], {
        open: open,
        onClose: handleClose,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_24__["default"], {
        id: "alert-dialog-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 21
        }
      }, "Use Google's location service?"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_22__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_23__["default"], {
        id: "alert-dialog-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 21
        }
      }, props.correct)), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
        onClick: handleClose,
        color: "primary",
        autoFocus: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 21
        }
      }, "OK")))), __jsx(_components_Hint__WEBPACK_IMPORTED_MODULE_13__["default"], {
        hint: this.state.hint,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 17
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1891829302",
        __self: this
      }, "div.jsx-1891829302{text-align:center;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK080QixBQUcwQixrQkFDUCxXQUNkIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSdheGlvcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUXVlc3Rpb24nXG5pbXBvcnQgSGludCBmcm9tICcuLi9jb21wb25lbnRzL0hpbnQnXG5pbXBvcnQgU3VibWl0IGZyb20gJy4uL2NvbXBvbmVudHMvU3VibWl0J1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnO1xuaW1wb3J0IEFuc3dlciBmcm9tICcuLi9jb21wb25lbnRzL0Fuc3dlcic7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBBbnNBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL0Fuc0FsZXJ0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuXG5cblxuY2xhc3MgZ2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAgICB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBhbnN3ZXI6XCJcIixcbiAgICAgICAgICAgIHF1ZXN0aW9uczpcIlwiLFxuICAgICAgICAgICAgcXNObzoxLFxuICAgICAgICAgICAgY29ycmVjdDowLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBvcGVuOmZhbHNlLFxuICAgICAgICAgICAgaXNMb2dnZWRJbjpmYWxzZSxcbiAgICAgICAgICAgIGhpbnQ6XCJcIixcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1Ym1pdD10aGlzLnN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZT10aGlzLmNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrQW5zPXRoaXMuY2hlY2tBbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnM9dGhpcy5nZXRRdWVzdGlvbnMuYmluZCh0aGlzKTtcbiAgICAgICAgLy90aGlzLmtleXByZXNzPXRoaXMua2V5cHJlc3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGlja09wZW49dGhpcy5oYW5kbGVDbGlja09wZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZT10aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKS8vYXQgdGhlIGJlZ2lubmluZyBzZXRzIHRoZSBxc1xuICAgIHsvL2FmdGVyIGdldHRpbmcgYXBwcm9waWF0ZSBkYXRhIGZyb20gYmFja2VuZCBhYm91dCB0aGF0IGVtYWlsIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5xc05vKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJykpOy8vZW1haWwgYXZhaWxhYmxlIGhlcmVcblxuICAgICAgICAvKiAgIGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzL2VtYWlsPz1OYXRoYW5AeWVzZW5pYS5uZXQnKS50aGVuKChyZXNwb25zZSk9PlxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInllc3Nzc3NcIit0aGlzLnN0YXRlLnFzTm8rcmVzcG9uc2UuanNvbik7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZT0+e1xuICAgICAgICAgICAgICAgIHJldHVybnsgLi4ucHJldlN0YXRlLCBxdWVzdGlvbnM6cmVzcG9uc2UuZGF0YS5pZH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgKSovXG5cbiAgICAgICAgLy9uZXh0IHFzL2NvbXBsZXRlZC9lcnJvclxuXG4gICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgIGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdHRpbmdcIik7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgICBcbiAgfTtcblxuICAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgICBnZXRRdWVzdGlvbnMoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5xc05vKTtcbiAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcIllPXCIpOy8vZ2V0IHF1ZXN0aW9ucyBmcm9tIGFwaSBhbmQgdXBkYXRlcyBzdGF0ZVxuICAgICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8nK3RoaXMuc3RhdGUucXNObykudGhlbigocmVzcG9uc2UpPT5cbiAgICAgICAge1xuICAgICAgICAgIGxldCByPXJlc3BvbnNlLmRhdGEudGl0bGU7XG4gICAgICAgICAgY29uc29sZS5sb2cocik7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGU9PntcbiAgICAgICAgICAgIHJldHVybnsgLi4ucHJldlN0YXRlLCBxdWVzdGlvbnM6cixoaW50OnJlc3BvbnNlLmRhdGEuYm9keX1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICBcblxuICAgIH0pO1xuICAgIH1cblxuICAgIHN1Ym1pdD0oKT0+ey8vc2VuZCBmaW5hbCBhbnN3ZXIgZm9yIGNoZWNraW5nXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNoZWNrQW5zKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICAgICAgXG4gICAgICAgIH1cblxuICAgIGNoYW5nZT0oZXZlbnQpPT57Ly9rZWVwIHVwZGF0aW5nIGFuc3dlclxuICAgICAgICBsZXQgZT0gZXZlbnQudGFyZ2V0LnZhbHVlOyBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGU9PiB7XG4gICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgYW5zd2VyOmUgfVxuICAgIH0pO1xuICAgIH1cblxuICAgLyoga2V5cHJlc3M9KGV2ZW50KT0+ey8vbm90IGRvbmVcbiAgICAgICAgaWYoZXZlbnQua2V5PT09XCJFbnRlclwiKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImpvXCIrdGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0Fuc3dlcih0aGlzLnN0YXRlLmFuc3dlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImpvXCIrdGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9Ki9cblxuICAgXG5cbiAgICBjaGVja0FucyhhbnN3ZXIpLy9jaGVjayBhbnN3ZXIgZnJvbSBhcGkgYW5kIHNlbmQgZm9yIGNvcnJlY3QgYWxlcnRcbiAgICB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhhbnN3ZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLycrdGhpcy5zdGF0ZS5xc05vKS50aGVuKChyZXNwb25zZSk9PlxuICAgICAgICB7XG4gICAgICAgICAgICAgbGV0IHI9cmVzcG9uc2UuZGF0YS5pZDtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuc3RhdGUucXNObyA8IDUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGFuc3dlcj09cilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm57IC4uLnByZXZTdGF0ZSwgcXNObzpwcmV2U3RhdGUucXNObysxLGNvcnJlY3Q6MX1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGU9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJueyAuLi5wcmV2U3RhdGUsY29ycmVjdDowfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29ycmVjdClcbiAgICB9KTtcblxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKVxuICAgIHtcblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UGFydGljbGVzXG5cbiAgICAgICAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZV9hcmVhOiA5MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogWycjY2MwMDAwJ11cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2FhMDA0NCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBcIi0xMFwiXG5cblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIDxRdWVzdGlvbiBxcz17dGhpcy5zdGF0ZS5xdWVzdGlvbnN9IC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxBbnN3ZXIgY2hhbmdlPXt0aGlzLmNoYW5nZX0gLypwcmVzcz17dGhpcy5rZXlwcmVzc30qLyAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG5TdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgIGRpc2FibGVFbGV2YXRpb24gb25DbGljaz17cHJvcHMuc3VibWl0fT5cbiAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPERpYWxvZ1xuICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtZGlhbG9nLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImFsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJhbGVydC1kaWFsb2ctdGl0bGVcIj57XCJVc2UgR29vZ2xlJ3MgbG9jYXRpb24gc2VydmljZT9cIn08L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGlkPVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY29ycmVjdH1cbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiIGF1dG9Gb2N1cz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9LXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICA8SGludCBoaW50PXt0aGlzLnN0YXRlLmhpbnR9Lz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgZGl2e1xuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgbWFyZ2luOjVweDtcbiAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPC9kaXYgPlxuICAgICk7XG59XG59XG5leHBvcnQgZGVmYXVsdCBnYW1lO1xuXG5cbiJdfQ== */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/game.js */"), __jsx("div", {
        className: "jsx-1891829302",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 13
        }
      }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 17
        }
      })));
    }
  }]);

  return game;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (game);

/***/ })

})
//# sourceMappingURL=game.js.6902ab9986c2884ad999.hot-update.js.map