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
/* harmony import */ var _components_AnsAlert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/AnsAlert */ "./components/AnsAlert.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Answer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Answer */ "./components/Answer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);







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
        if (response.data.quiz_finished) next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/finale");

        _this2.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            questions: response.data.question,
            hint: response.data.hint,
            qsNo: response.data.question_no,
            audio: response.data.audio,
            image: response.data.image
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
              qsNo: prevState.qsNo + 1,
              answer: ""
            });
          });

          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_14__["default"])(1); //where does the effing control go after this?

          console.log("SANTA");

          _this3.setState({
            answer: ""
          });

          _this3.getQuestions();
        } else if (r && response.data.quiz_finished) {
          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_14__["default"])(1);
          next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/finale");
        } else {
          _this3.setState({
            answer: ""
          });

          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_14__["default"])(0);
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
          lineNumber: 148,
          columnNumber: 7
        }
      }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_15___default.a, {
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
          lineNumber: 152,
          columnNumber: 9
        }
      }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 9
        }
      }), __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_12__["default"], {
        qs: this.state.questions,
        qsNo: this.state.qsNo,
        audio: this.state.audio,
        image: this.state.image,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-3751067751",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 9
        }
      }, __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        change: this.change,
        submit: this.submit,
        submit2: this.submit2,
        answer: this.state.answer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
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
      }, "div.jsx-3751067751{text-align:center;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ01zQixBQUdpQyxrQkFDUCxXQUNiIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9RdWVzdGlvblwiO1xuaW1wb3J0IEhpbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGludFwiO1xuaW1wb3J0IEFuc0FsZXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0Fuc0FsZXJ0XCJcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcInJlYWN0LXBhcnRpY2xlcy1qc1wiO1xuaW1wb3J0IEFuc3dlciBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnN3ZXJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuY2xhc3MgZ2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbnN3ZXI6IFwiXCIsXG4gICAgICBxdWVzdGlvbnM6IFwiXCIsXG4gICAgICBxc05vOiAxLFxuICAgICAgYXVkaW86XCJcIixcbiAgICAgIGltYWdlOlwiXCIsXG4gICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgIGhpbnQ6IFwiXCIsXG4gICAgfTtcblxuICAgIHRoaXMuc3VibWl0ID0gdGhpcy5zdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN1Ym1pdDIgPSB0aGlzLnN1Ym1pdDIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0FucyA9IHRoaXMuY2hlY2tBbnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFF1ZXN0aW9ucyA9IHRoaXMuZ2V0UXVlc3Rpb25zLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL2F0IHRoZSBiZWdpbm5pbmcgc2V0cyB0aGUgcXNcbiAgICAvL2FmdGVyIGdldHRpbmcgYXBwcm9waWF0ZSBkYXRhIGZyb20gYmFja2VuZCBhYm91dCB0aGF0IGVtYWlsIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpOyAvL2VtYWlsIGF2YWlsYWJsZSBoZXJlXG5cbiAgICAvKiAgIGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzL2VtYWlsPz1OYXRoYW5AeWVzZW5pYS5uZXQnKS50aGVuKChyZXNwb25zZSk9PlxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInllc3Nzc3NcIit0aGlzLnN0YXRlLnFzTm8rcmVzcG9uc2UuanNvbik7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZT0+e1xuICAgICAgICAgICAgICAgIHJldHVybnsgLi4ucHJldlN0YXRlLCBxdWVzdGlvbnM6cmVzcG9uc2UuZGF0YS5pZH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgKSovXG5cbiAgICAvL25leHQgcXMvY29tcGxldGVkL2Vycm9yXG5cbiAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucXNObyk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7IC8vZ2V0IHF1ZXN0aW9ucyBmcm9tIGFwaSBhbmQgdXBkYXRlcyBzdGF0ZVxuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwczovL3NjcmVlbmNhc3QyMC5henVyZXdlYnNpdGVzLm5ldC9hcGkvcXVlc3Rpb25cIiwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpIFJvdXRlci5wdXNoKFwiL2ZpbmFsZVwiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIHF1ZXN0aW9uczogcmVzcG9uc2UuZGF0YS5xdWVzdGlvbixcbiAgICAgICAgICAgIGhpbnQ6IHJlc3BvbnNlLmRhdGEuaGludCxcbiAgICAgICAgICAgIHFzTm86IHJlc3BvbnNlLmRhdGEucXVlc3Rpb25fbm8sXG4gICAgICAgICAgICBhdWRpbzpyZXNwb25zZS5kYXRhLmF1ZGlvLFxuICAgICAgICAgICAgaW1hZ2U6cmVzcG9uc2UuZGF0YS5pbWFnZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XG4gIH1cblxuICBzdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgICAgY29uc29sZS5sb2coXCJKT0pPSk9KT0pPSlwiKTtcbiAgICAgIHRoaXMuY2hlY2tBbnModGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgIH1cbiAgfTtcbiAgc3VibWl0MiA9ICgpID0+IHtcbiAgICAvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuXG4gICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gIH07XG5cbiAgY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgLy9rZWVwIHVwZGF0aW5nIGFuc3dlclxuICAgIGxldCBlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBhbnN3ZXI6IGUgfTtcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0FucyhcbiAgICBhbnMgLy9jaGVjayBhbnN3ZXIgZnJvbSBhcGkgYW5kIHNlbmQgZm9yIGNvcnJlY3QgYWxlcnRcbiAgKSB7XG4gICAgY29uc29sZS5sb2coYW5zKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgXCJodHRwczovL3NjcmVlbmNhc3QyMC5henVyZXdlYnNpdGVzLm5ldC9hcGkvY2hlY2thbnN3ZXJcIixcbiAgICAgICAgeyBhbnN3ZXI6IGFucyB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBsZXQgciA9IHJlc3BvbnNlLmRhdGEucmVzdWx0O1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgaWYgKHIgJiYgIXJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBxc05vOiBwcmV2U3RhdGUucXNObyArIDEsYW5zd2VyOlwiXCIgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBBbnNBbGVydCgxKTsgLy93aGVyZSBkb2VzIHRoZSBlZmZpbmcgY29udHJvbCBnbyBhZnRlciB0aGlzP1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0FOVEFcIik7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbnN3ZXI6XCJcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgIH0gZWxzZSBpZiAociAmJiByZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpIHtcbiAgICAgICAgICBBbnNBbGVydCgxKTtcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9maW5hbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbnN3ZXI6XCJcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIEFuc0FsZXJ0KDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCJhdXRvXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cbiAgICAgICAgcXVlc3Rpb25zXG4gICAgICA+XG4gICAgICAgIDxQYXJ0aWNsZXNcbiAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgIHBhcnRpY2xlczoge1xuICAgICAgICAgICAgICBudW1iZXI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogODAsXG4gICAgICAgICAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdmFsdWVfYXJlYTogNDAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFtcIiNjYzAwMDBcIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2FhMDA0NFwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIGluZGV4OiBcIi0xMFwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICBcbiAgICAgICAgPFF1ZXN0aW9uIHFzPXt0aGlzLnN0YXRlLnF1ZXN0aW9uc30gcXNObz17dGhpcy5zdGF0ZS5xc05vfSBhdWRpbz17dGhpcy5zdGF0ZS5hdWRpb30gaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2V9IC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFuc3dlclxuICAgICAgICAgICAgY2hhbmdlPXt0aGlzLmNoYW5nZX1cbiAgICAgICAgICAgIHN1Ym1pdD17dGhpcy5zdWJtaXR9XG4gICAgICAgICAgICBzdWJtaXQyPXt0aGlzLnN1Ym1pdDJ9XG4gICAgICAgICAgICBhbnN3ZXI9e3RoaXMuc3RhdGUuYW5zd2VyfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8SGludCBoaW50PXt0aGlzLnN0YXRlLmhpbnR9IC8+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBnYW1lO1xuIl19 */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/game.js */")), __jsx("div", {
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
//# sourceMappingURL=game.js.149da33701a1e3e267dc.hot-update.js.map