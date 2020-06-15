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
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Answer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Answer */ "./components/Answer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_AnsAlert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AnsAlert */ "./components/AnsAlert.js");
/* harmony import */ var _components_AnsAlert__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_18__);







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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "keypress", function (event) {
      //not done
      if (event.key === "Enter") {
        console.log("jo" + _this.state.answer);

        _this.checkAnswer(_this.state.answer);

        console.log("jo" + _this.state.answer);
      }
    });

    _this.state = {
      answer: "",
      questions: "",
      qsNo: 1,
      correct: 0,
      alert_title: "",
      alert_text: "hola",
      open: false,
      isLoggedIn: false,
      hint: "",
      ans_alert: false
    };
    _this.submit = _this.submit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.change = _this.change.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.checkAns = _this.checkAns.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.getQuestions = _this.getQuestions.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.keypress = _this.keypress.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
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
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
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
          lineNumber: 148,
          columnNumber: 13
        }
      }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 13
        }
      }), __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_12__["default"], {
        qs: this.state.questions,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 13
        }
      }), __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        change: this.change,
        press: this.keypress,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 13
        }
      }), __jsx(_components_Submit__WEBPACK_IMPORTED_MODULE_14__["default"], {
        submit: this.submit,
        correct: this.correct,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 13
        }
      }), ans_alert, " ?", __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }
      }, __jsx(Dialog, {
        open: open,
        onClose: handleClose,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }
      }, __jsx(DialogTitle, {
        id: "alert-dialog-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 21
        }
      }, "Use Google's location service?"), __jsx(DialogContent, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 21
        }
      }, __jsx(DialogContentText, {
        id: "alert-dialog-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }
      })), __jsx(DialogActions, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }
      }, __jsx(Button, {
        onClick: handleClose,
        color: "primary",
        autoFocus: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }
      }, "OK")))), ":", __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "jsx-1891829302",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 13
        }
      }, __jsx(_components_Hint__WEBPACK_IMPORTED_MODULE_13__["default"], {
        hint: this.state.hint,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 17
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1891829302",
        __self: this
      }, "div.jsx-1891829302{text-align:center;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd040QixBQUcwQixrQkFDUCxXQUNkIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSdheGlvcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUXVlc3Rpb24nXG5pbXBvcnQgSGludCBmcm9tICcuLi9jb21wb25lbnRzL0hpbnQnXG5pbXBvcnQgU3VibWl0IGZyb20gJy4uL2NvbXBvbmVudHMvU3VibWl0J1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnO1xuaW1wb3J0IEFuc3dlciBmcm9tICcuLi9jb21wb25lbnRzL0Fuc3dlcic7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBBbnNBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL0Fuc0FsZXJ0J1xuXG5cblxuY2xhc3MgZ2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAgICB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBhbnN3ZXI6XCJcIixcbiAgICAgICAgICAgIHF1ZXN0aW9uczpcIlwiLFxuICAgICAgICAgICAgcXNObzoxLFxuICAgICAgICAgICAgY29ycmVjdDowLFxuICAgICAgICAgICAgYWxlcnRfdGl0bGU6XCJcIixcbiAgICAgICAgICAgIGFsZXJ0X3RleHQ6XCJob2xhXCIsXG4gICAgICAgICAgICBvcGVuOmZhbHNlLFxuICAgICAgICAgICAgaXNMb2dnZWRJbjpmYWxzZSxcbiAgICAgICAgICAgIGhpbnQ6XCJcIixcbiAgICAgICAgICAgIGFuc19hbGVydDpmYWxzZVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1Ym1pdD10aGlzLnN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZT10aGlzLmNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrQW5zPXRoaXMuY2hlY2tBbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnM9dGhpcy5nZXRRdWVzdGlvbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5rZXlwcmVzcz10aGlzLmtleXByZXNzLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKS8vYXQgdGhlIGJlZ2lubmluZyBzZXRzIHRoZSBxc1xuICAgIHsvL2FmdGVyIGdldHRpbmcgYXBwcm9waWF0ZSBkYXRhIGZyb20gYmFja2VuZCBhYm91dCB0aGF0IGVtYWlsIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5xc05vKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJykpOy8vZW1haWwgYXZhaWxhYmxlIGhlcmVcblxuICAgICAgICAvKiAgIGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzL2VtYWlsPz1OYXRoYW5AeWVzZW5pYS5uZXQnKS50aGVuKChyZXNwb25zZSk9PlxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInllc3Nzc3NcIit0aGlzLnN0YXRlLnFzTm8rcmVzcG9uc2UuanNvbik7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZT0+e1xuICAgICAgICAgICAgICAgIHJldHVybnsgLi4ucHJldlN0YXRlLCBxdWVzdGlvbnM6cmVzcG9uc2UuZGF0YS5pZH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgKSovXG5cbiAgICAgICAgLy9uZXh0IHFzL2NvbXBsZXRlZC9lcnJvclxuXG4gICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBnZXRRdWVzdGlvbnMoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5xc05vKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJZT1wiKTsvL2dldCBxdWVzdGlvbnMgZnJvbSBhcGkgYW5kIHVwZGF0ZXMgc3RhdGVcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJyt0aGlzLnN0YXRlLnFzTm8pLnRoZW4oKHJlc3BvbnNlKT0+XG4gICAgICAgIHtcbiAgICAgICAgICBsZXQgcj1yZXNwb25zZS5kYXRhLnRpdGxlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlPT57XG4gICAgICAgICAgICByZXR1cm57IC4uLnByZXZTdGF0ZSwgcXVlc3Rpb25zOnIsaGludDpyZXNwb25zZS5kYXRhLmJvZHl9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgXG5cbiAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJtaXQ9KCk9PnsvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgICAgICB0aGlzLmNoZWNrQW5zKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICAgICAgXG4gICAgICAgIH1cblxuICAgIGNoYW5nZT0oZXZlbnQpPT57Ly9rZWVwIHVwZGF0aW5nIGFuc3dlclxuICAgICAgICBsZXQgZT0gZXZlbnQudGFyZ2V0LnZhbHVlOyBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGU9PiB7XG4gICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgYW5zd2VyOmUgfVxuICAgIH0pO1xuICAgIH1cblxuICAgIGtleXByZXNzPShldmVudCk9PnsvL25vdCBkb25lXG4gICAgICAgIGlmKGV2ZW50LmtleT09PVwiRW50ZXJcIilcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJqb1wiK3RoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBbnN3ZXIodGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJqb1wiK3RoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICBcblxuICAgIGNoZWNrQW5zKGFuc3dlcikvL2NoZWNrIGFuc3dlciBmcm9tIGFwaSBhbmQgc2VuZCBmb3IgY29ycmVjdCBhbGVydFxuICAgIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGFuc3dlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucXNObylcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJyt0aGlzLnN0YXRlLnFzTm8pLnRoZW4oKHJlc3BvbnNlKT0+XG4gICAgICAgIHtcbiAgICAgICAgICAgICBsZXQgcj1yZXNwb25zZS5kYXRhLmlkO1xuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5xc05vIDwgNSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoYW5zd2VyPT1yKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybnsgLi4ucHJldlN0YXRlLCBxc05vOnByZXZTdGF0ZS5xc05vKzEsY29ycmVjdDoxfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybnsgLi4ucHJldlN0YXRlLGNvcnJlY3Q6MH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jb3JyZWN0KVxuICAgIH0pO1xuXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpXG4gICAge1xuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxQYXJ0aWNsZXNcblxuICAgICAgICAgICAgICAgIHBhcmFtcz17e1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlX2FyZWE6IDkwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbJyNjYzAwMDAnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYWEwMDQ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IFwiLTEwXCJcblxuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAgPFF1ZXN0aW9uIHFzPXt0aGlzLnN0YXRlLnF1ZXN0aW9uc30gLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEFuc3dlciBjaGFuZ2U9e3RoaXMuY2hhbmdlfSBwcmVzcz17dGhpcy5rZXlwcmVzc30gLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8U3VibWl0IHN1Ym1pdD17dGhpcy5zdWJtaXR9IGNvcnJlY3Q9e3RoaXMuY29ycmVjdH0vPlxuICAgICAgICAgICAgeyBhbnNfYWxlcnQgfSA/XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxEaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImFsZXJ0LWRpYWxvZy10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiYWxlcnQtZGlhbG9nLXRpdGxlXCI+e1wiVXNlIEdvb2dsZSdzIGxvY2F0aW9uIHNlcnZpY2U/XCJ9PC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dCBpZD1cImFsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIiBhdXRvRm9jdXM+XG4gICAgICAgICAgICAgICAgICAgICAgICBPS1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPEhpbnQgaGludD17dGhpcy5zdGF0ZS5oaW50fS8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgIGRpdntcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIG1hcmdpbjo1cHg7XG4gICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDwvZGl2ID5cbiAgICApO1xufVxufVxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcblxuXG4iXX0= */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/game.js */")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 13
        }
      }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
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
//# sourceMappingURL=game.js.1a407be729450afd840a.hot-update.js.map