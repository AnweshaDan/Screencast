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
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Answer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Answer */ "./components/Answer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_ImageHint__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/ImageHint */ "./components/ImageHint.js");
/* harmony import */ var _components_AudioHint__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AudioHint */ "./components/AudioHint.js");







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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "submit", function (event) {
      //send final answer for checking
      if (event.key === "Enter") {
        console.log(_this.state.answer);
        console.log("JOJOJOJOJOJ");

        _this.checkAns(_this.state.answer);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "submit2", function () {
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
      audio: "",
      image: "",
      isLoggedIn: false,
      hint: ""
    };
    _this.submit = _this.submit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.submit2 = _this.submit2.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.change = _this.change.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.checkAns = _this.checkAns.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.getQuestions = _this.getQuestions.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(game, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //at the beginning sets the qs
      //after getting appropiate data from backend about that email in local storage
      console.log(localStorage.getItem("token"));
      console.log(this.state.qsNo);
      console.log(localStorage.getItem("email")); //email available here

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
      console.log(localStorage.getItem("token")); //get questions from api and updates state

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("https://screencast20.azurewebsites.net/api/question", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(function (response) {
        console.log(response);
        if (response.data.quiz_finished) next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push("/finale");

        _this2.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            questions: response.data.question,
            hint: response.data.hint,
            qsNo: response.data.question_no,
            audio: "https://screencast20.azurewebsites.net" + response.data.audio,
            image: "https://screencast20.azurewebsites.net" + response.data.image
          });
        });
      });
      console.log(localStorage.getItem("token"));
    }
  }, {
    key: "checkAns",
    value: function checkAns(ans //check answer from api and send for correct alert
    ) {
      var _this3 = this;

      console.log(ans);
      console.log(this.state.qsNo);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("https://screencast20.azurewebsites.net/api/checkanswer", {
        answer: ans
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(function (response) {
        var r = response.data.result;
        console.log(response);

        if (r && !response.data.quiz_finished) {
          _this3.setState(function (prevState) {
            return _objectSpread({}, prevState, {
              qsNo: prevState.qsNo + 1
            });
          });

          alert("Correct"); //where does the effing control go after this?

          console.log("SANTA");

          _this3.getQuestions();
        } else if (r && response.data.quiz_finished) {
          alert("Completed!!!");
          next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push("/finale");
        } else {
          alert("Wrong");
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: {
          marginRight: "auto",
          marginLeft: "auto",
          textAlign: "center"
        },
        questions: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 7
        }
      }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_14___default.a, {
        params: {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 400
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
          lineNumber: 148,
          columnNumber: 9
        }
      }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 9
        }
      }), __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_12__["default"], {
        qs: this.state.questions,
        qsNo: this.state.qsNo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 9
        }
      }), this.state.image ? __jsx(_components_ImageHint__WEBPACK_IMPORTED_MODULE_17__["default"], {
        image: this.state.image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 9
        }
      }) : __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 10
        }
      }), __jsx(_components_AudioHint__WEBPACK_IMPORTED_MODULE_18__["default"], {
        audio: this.state.audio,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-3751067751",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 9
        }
      }, __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        change: this.change,
        submit: this.submit,
        submit2: this.submit2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }
      }), __jsx(_components_Hint__WEBPACK_IMPORTED_MODULE_13__["default"], {
        hint: this.state.hint,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3751067751",
        __self: this
      }, "div.jsx-3751067751{text-align:center;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ01zQixBQUdpQyxrQkFDUCxXQUNiIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9RdWVzdGlvblwiO1xuaW1wb3J0IEhpbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGludFwiO1xuXG5pbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC1wYXJ0aWNsZXMtanNcIjtcbmltcG9ydCBBbnN3ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQW5zd2VyXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEltYWdlSGludCBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlSGludCdcbmltcG9ydCBBdWRpb0hpbnQgZnJvbSAnLi4vY29tcG9uZW50cy9BdWRpb0hpbnQnXG5cbmNsYXNzIGdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW5zd2VyOiBcIlwiLFxuICAgICAgcXVlc3Rpb25zOiBcIlwiLFxuICAgICAgcXNObzogMSxcbiAgICAgIGF1ZGlvOlwiXCIsXG4gICAgICBpbWFnZTpcIlwiLFxuICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICBoaW50OiBcIlwiLFxuICAgIH07XG5cbiAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuc3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJtaXQyID0gdGhpcy5zdWJtaXQyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tBbnMgPSB0aGlzLmNoZWNrQW5zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRRdWVzdGlvbnMgPSB0aGlzLmdldFF1ZXN0aW9ucy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy9hdCB0aGUgYmVnaW5uaW5nIHNldHMgdGhlIHFzXG4gICAgLy9hZnRlciBnZXR0aW5nIGFwcHJvcGlhdGUgZGF0YSBmcm9tIGJhY2tlbmQgYWJvdXQgdGhhdCBlbWFpbCBpbiBsb2NhbCBzdG9yYWdlXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5xc05vKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpKTsgLy9lbWFpbCBhdmFpbGFibGUgaGVyZVxuXG4gICAgLyogICBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy9lbWFpbD89TmF0aGFuQHllc2VuaWEubmV0JykudGhlbigocmVzcG9uc2UpPT5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5ZXNzc3NzXCIrdGhpcy5zdGF0ZS5xc05vK3Jlc3BvbnNlLmpzb24pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGU9PntcbiAgICAgICAgICAgICAgICByZXR1cm57IC4uLnByZXZTdGF0ZSwgcXVlc3Rpb25zOnJlc3BvbnNlLmRhdGEuaWR9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgICkqL1xuXG4gICAgLy9uZXh0IHFzL2NvbXBsZXRlZC9lcnJvclxuXG4gICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcbiAgfVxuXG4gIGdldFF1ZXN0aW9ucygpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpOyAvL2dldCBxdWVzdGlvbnMgZnJvbSBhcGkgYW5kIHVwZGF0ZXMgc3RhdGVcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9zY3JlZW5jYXN0MjAuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpL3F1ZXN0aW9uXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSBSb3V0ZXIucHVzaChcIi9maW5hbGVcIik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICBxdWVzdGlvbnM6IHJlc3BvbnNlLmRhdGEucXVlc3Rpb24sXG4gICAgICAgICAgICBoaW50OiByZXNwb25zZS5kYXRhLmhpbnQsXG4gICAgICAgICAgICBxc05vOiByZXNwb25zZS5kYXRhLnF1ZXN0aW9uX25vLFxuICAgICAgICAgICAgYXVkaW86XCJodHRwczovL3NjcmVlbmNhc3QyMC5henVyZXdlYnNpdGVzLm5ldFwiK3Jlc3BvbnNlLmRhdGEuYXVkaW8sXG4gICAgICAgICAgICBpbWFnZTpcImh0dHBzOi8vc2NyZWVuY2FzdDIwLmF6dXJld2Vic2l0ZXMubmV0XCIrcmVzcG9uc2UuZGF0YS5pbWFnZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XG4gIH1cblxuICBzdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgICAgY29uc29sZS5sb2coXCJKT0pPSk9KT0pPSlwiKTtcbiAgICAgIHRoaXMuY2hlY2tBbnModGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgIH1cbiAgfTtcbiAgc3VibWl0MiA9ICgpID0+IHtcbiAgICAvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuXG4gICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gIH07XG5cbiAgY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgLy9rZWVwIHVwZGF0aW5nIGFuc3dlclxuICAgIGxldCBlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBhbnN3ZXI6IGUgfTtcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0FucyhcbiAgICBhbnMgLy9jaGVjayBhbnN3ZXIgZnJvbSBhcGkgYW5kIHNlbmQgZm9yIGNvcnJlY3QgYWxlcnRcbiAgKSB7XG4gICAgY29uc29sZS5sb2coYW5zKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgXCJodHRwczovL3NjcmVlbmNhc3QyMC5henVyZXdlYnNpdGVzLm5ldC9hcGkvY2hlY2thbnN3ZXJcIixcbiAgICAgICAgeyBhbnN3ZXI6IGFucyB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBsZXQgciA9IHJlc3BvbnNlLmRhdGEucmVzdWx0O1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgaWYgKHIgJiYgIXJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBxc05vOiBwcmV2U3RhdGUucXNObyArIDEgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhbGVydChcIkNvcnJlY3RcIik7IC8vd2hlcmUgZG9lcyB0aGUgZWZmaW5nIGNvbnRyb2wgZ28gYWZ0ZXIgdGhpcz9cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNBTlRBXCIpO1xuXG4gICAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyICYmIHJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZCkge1xuICAgICAgICAgIGFsZXJ0KFwiQ29tcGxldGVkISEhXCIpO1xuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2ZpbmFsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIldyb25nXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCJhdXRvXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgICAgcXVlc3Rpb25zXG4gICAgICA+XG4gICAgICAgIDxQYXJ0aWNsZXNcbiAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgIHBhcnRpY2xlczoge1xuICAgICAgICAgICAgICBudW1iZXI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogODAsXG4gICAgICAgICAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdmFsdWVfYXJlYTogNDAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFtcIiNjYzAwMDBcIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2FhMDA0NFwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIGluZGV4OiBcIi0xMFwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICBcbiAgICAgICAgPFF1ZXN0aW9uIHFzPXt0aGlzLnN0YXRlLnF1ZXN0aW9uc30gcXNObz17dGhpcy5zdGF0ZS5xc05vfSAgLz5cbiAgICAgICAge3RoaXMuc3RhdGUuaW1hZ2U/KFxuICAgICAgICA8SW1hZ2VIaW50IGltYWdlPXt0aGlzLnN0YXRlLmltYWdlfS8+KVxuICAgICAgICA6XG4gICAgICAgICg8ZGl2PjwvZGl2Pil9XG4gICAgICAgIDxBdWRpb0hpbnQgYXVkaW89e3RoaXMuc3RhdGUuYXVkaW99Lz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QW5zd2VyXG4gICAgICAgICAgICBjaGFuZ2U9e3RoaXMuY2hhbmdlfVxuICAgICAgICAgICAgc3VibWl0PXt0aGlzLnN1Ym1pdH1cbiAgICAgICAgICAgIHN1Ym1pdDI9e3RoaXMuc3VibWl0Mn1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEhpbnQgaGludD17dGhpcy5zdGF0ZS5oaW50fSAvPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcbiJdfQ== */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/game.js */")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 9
        }
      }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }
      })));
    }
  }]);

  return game;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (game);

/***/ })

})
//# sourceMappingURL=game.js.0535d011379719bbd5f0.hot-update.js.map