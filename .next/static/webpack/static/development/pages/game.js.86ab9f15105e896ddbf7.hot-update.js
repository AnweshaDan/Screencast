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
      console.log(localStorage.getItem('token')); //get questions from api and updates state

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://screencast20.azurewebsites.net/api/question', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(function (response) {
        console.log(response);
        if (response.data.quiz_finished) next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push('/finale');

        _this2.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            questions: response.data.question,
            hint: response.data.hint,
            qsNo: response.data.question_no
          });
        });
      });
      console.log(localStorage.getItem('token'));
    }
  }, {
    key: "checkAns",
    value: function checkAns(ans) //check answer from api and send for correct alert
    {
      var _this3 = this;

      console.log(ans);
      console.log(this.state.qsNo);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('https://screencast20.azurewebsites.net/api/checkanswer', {
        answer: ans
      }, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
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
          next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push('/finale');
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
          lineNumber: 180,
          columnNumber: 9
        }
      }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_14___default.a, {
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
          lineNumber: 183,
          columnNumber: 13
        }
      }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }
      }), __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_12__["default"], {
        qs: this.state.questions,
        qsNo: this.state.qsNo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }
      }), __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        change: this.change,
        submit: this.submit,
        submit2: this.submit2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "jsx-1891829302",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 13
        }
      }, __jsx(_components_Hint__WEBPACK_IMPORTED_MODULE_13__["default"], {
        hint: this.state.hint,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 13
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1891829302",
        __self: this
      }, "div.jsx-1891829302{text-align:center;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcU80QixBQUcwQixrQkFDUCxXQUNkIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSdheGlvcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUXVlc3Rpb24nXG5pbXBvcnQgSGludCBmcm9tICcuLi9jb21wb25lbnRzL0hpbnQnXG5cbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSAncmVhY3QtcGFydGljbGVzLWpzJztcbmltcG9ydCBBbnN3ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9BbnN3ZXInO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuXG5cbmNsYXNzIGdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpXG4gICAge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgYW5zd2VyOlwiXCIsXG4gICAgICAgICAgICBxdWVzdGlvbnM6XCJcIixcbiAgICAgICAgICAgIHFzTm86MSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlzTG9nZ2VkSW46ZmFsc2UsXG4gICAgICAgICAgICBoaW50OlwiXCJcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJtaXQ9dGhpcy5zdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJtaXQyPXRoaXMuc3VibWl0Mi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYW5nZT10aGlzLmNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrQW5zPXRoaXMuY2hlY2tBbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnM9dGhpcy5nZXRRdWVzdGlvbnMuYmluZCh0aGlzKTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKS8vYXQgdGhlIGJlZ2lubmluZyBzZXRzIHRoZSBxc1xuICAgIHsvL2FmdGVyIGdldHRpbmcgYXBwcm9waWF0ZSBkYXRhIGZyb20gYmFja2VuZCBhYm91dCB0aGF0IGVtYWlsIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5xc05vKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJykpOy8vZW1haWwgYXZhaWxhYmxlIGhlcmVcblxuICAgICAgICAvKiAgIGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzL2VtYWlsPz1OYXRoYW5AeWVzZW5pYS5uZXQnKS50aGVuKChyZXNwb25zZSk9PlxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInllc3Nzc3NcIit0aGlzLnN0YXRlLnFzTm8rcmVzcG9uc2UuanNvbik7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZT0+e1xuICAgICAgICAgICAgICAgIHJldHVybnsgLi4ucHJldlN0YXRlLCBxdWVzdGlvbnM6cmVzcG9uc2UuZGF0YS5pZH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgKSovXG5cbiAgICAgICAgLy9uZXh0IHFzL2NvbXBsZXRlZC9lcnJvclxuXG4gICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICBnZXRRdWVzdGlvbnMoKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5xc05vKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpOy8vZ2V0IHF1ZXN0aW9ucyBmcm9tIGFwaSBhbmQgdXBkYXRlcyBzdGF0ZVxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwczovL3NjcmVlbmNhc3QyMC5henVyZXdlYnNpdGVzLm5ldC9hcGkvcXVlc3Rpb24nLHtcbiAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnK2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfVxuICAgICAgICB9XG4gICAgICAgICkudGhlbigocmVzcG9uc2UpPT5cbiAgICAgICAge1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9maW5hbGUnKTtcbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZT0+e1xuICAgICAgICAgICAgcmV0dXJueyAuLi5wcmV2U3RhdGUsIHF1ZXN0aW9uczpyZXNwb25zZS5kYXRhLnF1ZXN0aW9uLGhpbnQ6cmVzcG9uc2UuZGF0YS5oaW50LHFzTm86cmVzcG9uc2UuZGF0YS5xdWVzdGlvbl9ub31cbiAgICAgICAgICB9KTtcbiAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBcblxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKTtcbiAgICB9XG5cbiAgICBzdWJtaXQ9KGV2ZW50KT0+ey8vc2VuZCBmaW5hbCBhbnN3ZXIgZm9yIGNoZWNraW5nXG4gICAgICAgIGlmKGV2ZW50LmtleT09PVwiRW50ZXJcIilcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJKT0pPSk9KT0pPSlwiKTtcbiAgICAgICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgc3VibWl0Mj0oKT0+ey8vc2VuZCBmaW5hbCBhbnN3ZXIgZm9yIGNoZWNraW5nXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2hlY2tBbnModGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICBjaGFuZ2U9KGV2ZW50KT0+ey8va2VlcCB1cGRhdGluZyBhbnN3ZXJcbiAgICAgICAgbGV0IGU9IGV2ZW50LnRhcmdldC52YWx1ZTsgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlPT4ge1xuICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGFuc3dlcjplIH1cbiAgICAgICAgXG4gICAgfSk7XG4gICAgXG4gICAgfVxuXG4gICAgXG4gICAgIFxuICAgXG5cbiAgICBjaGVja0FucyhhbnMpLy9jaGVjayBhbnN3ZXIgZnJvbSBhcGkgYW5kIHNlbmQgZm9yIGNvcnJlY3QgYWxlcnRcbiAgICB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhhbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHBzOi8vc2NyZWVuY2FzdDIwLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9jaGVja2Fuc3dlcicse2Fuc3dlcjphbnN9LHtcbiAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnK2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfVxuICAgICAgICB9LFxuICAgICAgICBcblxuICAgICAgICApLnRoZW4oKHJlc3BvbnNlKT0+XG4gICAgICAgIHtcbiAgICAgICAgICAgICBsZXQgcj1yZXNwb25zZS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKHIgJiYgIXJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZCApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJueyAuLi5wcmV2U3RhdGUsIHFzTm86cHJldlN0YXRlLnFzTm8rMX1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkNvcnJlY3RcIik7Ly93aGVyZSBkb2VzIHRoZSBlZmZpbmcgY29udHJvbCBnbyBhZnRlciB0aGlzP1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0FOVEFcIik7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHIgJiYgcmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJDb21wbGV0ZWQhISFcIik7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmluYWxlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJXcm9uZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9KTtcblxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKVxuICAgIHtcblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcImF1dG9cIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fXF1ZXN0aW9uc1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPFBhcnRpY2xlc1xuXG4gICAgICAgICAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zaXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVfYXJlYTogOTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFsnI2NjMDAwMCddXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNhYTAwNDQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogXCItMTBcIlxuXG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8UXVlc3Rpb24gcXM9e3RoaXMuc3RhdGUucXVlc3Rpb25zfSBxc05vPXt0aGlzLnN0YXRlLnFzTm99Lz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEFuc3dlciBjaGFuZ2U9e3RoaXMuY2hhbmdlfSBzdWJtaXQ9e3RoaXMuc3VibWl0fSBzdWJtaXQyPXt0aGlzLnN1Ym1pdDJ9IC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPEhpbnQgaGludD17dGhpcy5zdGF0ZS5oaW50fS8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgIGRpdntcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIG1hcmdpbjo1cHg7XG4gICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDwvZGl2ID5cbiAgICApO1xufVxufVxuZXhwb3J0IGRlZmF1bHQgZ2FtZTsiXX0= */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/game.js */")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 13
        }
      }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
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
//# sourceMappingURL=game.js.86ab9f15105e896ddbf7.hot-update.js.map