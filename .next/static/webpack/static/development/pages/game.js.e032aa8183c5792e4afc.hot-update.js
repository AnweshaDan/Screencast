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
/* harmony import */ var _components_Answer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Answer */ "./components/Answer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _env_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../env.json */ "./env.json");
var _env_json__WEBPACK_IMPORTED_MODULE_17___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../env.json */ "./env.json", 1);







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
      hint: "",
      day: "",
      end: ""
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
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_env_json__WEBPACK_IMPORTED_MODULE_17__.api + "/api/status").then(function (response) {
        console.log(response);
        localStorage.setItem('end', new Date(response.data.end_time).getTime());
        var temp = localStorage.getItem('end') - Date.now();
        localStorage.setItem("start", new Date(response.data.start_time).getTime());
        localStorage.setItem("day", response.data.current_day);
        console.log(temp);
        console.log(localStorage.getItem('end'));
        console.log(localStorage.getItem('day'));
        var v = setTimeout(function () {
          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_14__["default"])(9);
          if (localStorage.getItem('day') == 3 || response.data.error) next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push('/game_finale');else next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push('/finale2');
        }, temp);
        console.log(localStorage.getItem('end'));

        _this2.setState({
          day: localStorage.getItem('day'),
          end: localStorage.getItem('end')
        }, function () {
          console.log(_this2.state.day + _this2.state.end);

          if (!localStorage.getItem("email")) {
            next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push('/');
          } else if (!(localStorage.getItem('start') <= Date.now())) {
            localStorage.clear();
            next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push("/");
          } else {
            _this2.getQuestions();
          }
        });
      });
    }
  }, {
    key: "getQuestions",
    value: function getQuestions() {
      var _this3 = this;

      console.log(this.state.qsNo);
      console.log(localStorage.getItem("token")); //get questions from api and updates state

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_env_json__WEBPACK_IMPORTED_MODULE_17__.api + "/api/question", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(function (response) {
        console.log(response); //if (response.data.error) Router.push("/finale2");

        if (response.data.quiz_finished) next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push("/finale");

        _this3.setState(function (prevState) {
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
      var _this4 = this;

      console.log(ans);
      console.log(this.state.qsNo);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_env_json__WEBPACK_IMPORTED_MODULE_17__.api + "/api/checkanswer", {
        answer: ans
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(function (response) {
        var r = response.data.result;
        console.log(response);

        if (r && !response.data.quiz_finished) {
          _this4.setState(function (prevState) {
            return _objectSpread({}, prevState, {
              qsNo: prevState.qsNo + 1,
              answer: ""
            });
          });

          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_14__["default"])(1); //where does the effing control go after this?

          console.log("SANTA");

          _this4.setState({
            answer: ""
          });

          _this4.getQuestions();
        } else if (r && response.data.quiz_finished) {
          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_14__["default"])(1);
          next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push("/finale");
        } else {
          _this4.setState({
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
          textAlign: "center",
          minHeight: "100vh-100px"
        },
        questions: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 7
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 9
        }
      }), __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_12__["default"], {
        qs: this.state.questions,
        qsNo: this.state.qsNo,
        audio: this.state.audio,
        image: this.state.image,
        day: this.state.day,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-4141458270",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 9
        }
      }, __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        change: this.change,
        answer: this.state.answer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }
      }), __jsx(_components_Hint__WEBPACK_IMPORTED_MODULE_13__["default"], {
        hint: this.state.hint,
        submit: this.submit,
        submit2: this.submit2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4141458270",
        __self: this
      }, "div.jsx-4141458270{text-align:center;margin:5px;margin-bottom:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ01zQixBQUdpQyxrQkFDUCxXQUNRLG9CQUNyQiIsImZpbGUiOiIvaG9tZS9hbndlc2hhL0Rlc2t0b3Avc2NyZWVuY2FzdC9wYWdlcy9nYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBIaW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hpbnRcIjtcbmltcG9ydCBBbnNBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnNBbGVydFwiXG5pbXBvcnQgQW5zd2VyIGZyb20gXCIuLi9jb21wb25lbnRzL0Fuc3dlclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBkYXRhIGZyb20gJy4uL2Vudi5qc29uJztcblxuXG5jbGFzcyBnYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFuc3dlcjogXCJcIixcbiAgICAgIHF1ZXN0aW9uczogXCJcIixcbiAgICAgIHFzTm86IDEsXG4gICAgICBhdWRpbzogXCJcIixcbiAgICAgIGltYWdlOiBcIlwiLFxuICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICBoaW50OiBcIlwiLFxuICAgICAgZGF5OiBcIlwiLFxuICAgICAgZW5kOlwiXCJcbiAgICB9O1xuXG4gICAgdGhpcy5zdWJtaXQgPSB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3VibWl0MiA9IHRoaXMuc3VibWl0Mi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrQW5zID0gdGhpcy5jaGVja0Fucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UXVlc3Rpb25zID0gdGhpcy5nZXRRdWVzdGlvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGRhdGEuYXBpK1wiL2FwaS9zdGF0dXNcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VuZCcsKG5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuZW5kX3RpbWUpKS5nZXRUaW1lKCkpXG4gICAgICAgICAgICBsZXQgdGVtcD1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJyktRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhcnRcIiwgKG5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuc3RhcnRfdGltZSkpLmdldFRpbWUoKSk7XG4gICAgICAgIFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXlcIixyZXNwb25zZS5kYXRhLmN1cnJlbnRfZGF5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSk7XG4gICAgICAgICAgICBsZXQgdj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgIEFuc0FsZXJ0KDkpO1xuICAgICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF5Jyk9PTMgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9nYW1lX2ZpbmFsZScpXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9maW5hbGUyJyk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSx0ZW1wKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF5OmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSwgZW5kOmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKX0sKCk9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRheSt0aGlzLnN0YXRlLmVuZCk7XG4gICAgICAgICAgICAgIGlmICghKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmICghKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpIDw9IERhdGUubm93KCkpKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIFxuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucXNObyk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7IC8vZ2V0IHF1ZXN0aW9ucyBmcm9tIGFwaSBhbmQgdXBkYXRlcyBzdGF0ZVxuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoZGF0YS5hcGkrXCIvYXBpL3F1ZXN0aW9uXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAvL2lmIChyZXNwb25zZS5kYXRhLmVycm9yKSBSb3V0ZXIucHVzaChcIi9maW5hbGUyXCIpO1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSBSb3V0ZXIucHVzaChcIi9maW5hbGVcIik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICBxdWVzdGlvbnM6IHJlc3BvbnNlLmRhdGEucXVlc3Rpb24sXG4gICAgICAgICAgICBoaW50OiByZXNwb25zZS5kYXRhLmhpbnQsXG4gICAgICAgICAgICBxc05vOiByZXNwb25zZS5kYXRhLnF1ZXN0aW9uX25vLFxuICAgICAgICAgICAgYXVkaW86IHJlc3BvbnNlLmRhdGEuYXVkaW8sXG4gICAgICAgICAgICBpbWFnZTogcmVzcG9uc2UuZGF0YS5pbWFnZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XG4gIH1cblxuICBzdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgICAgY29uc29sZS5sb2coXCJKT0pPSk9KT0pPSlwiKTtcbiAgICAgIHRoaXMuY2hlY2tBbnModGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgIH1cbiAgfTtcbiAgc3VibWl0MiA9ICgpID0+IHtcbiAgICAvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuXG4gICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gIH07XG5cbiAgY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgLy9rZWVwIHVwZGF0aW5nIGFuc3dlclxuICAgIGxldCBlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBhbnN3ZXI6IGUgfTtcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0FucyhcbiAgICBhbnMgLy9jaGVjayBhbnN3ZXIgZnJvbSBhcGkgYW5kIHNlbmQgZm9yIGNvcnJlY3QgYWxlcnRcbiAgKSB7XG4gICAgY29uc29sZS5sb2coYW5zKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgZGF0YS5hcGkrXCIvYXBpL2NoZWNrYW5zd2VyXCIsXG4gICAgICAgIHsgYW5zd2VyOiBhbnMgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbGV0IHIgPSByZXNwb25zZS5kYXRhLnJlc3VsdDtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICAgIGlmIChyICYmICFyZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgcXNObzogcHJldlN0YXRlLnFzTm8gKyAxLCBhbnN3ZXI6IFwiXCIgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBBbnNBbGVydCgxKTsgLy93aGVyZSBkb2VzIHRoZSBlZmZpbmcgY29udHJvbCBnbyBhZnRlciB0aGlzP1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0FOVEFcIik7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICAgICAgICB9IGVsc2UgaWYgKHIgJiYgcmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSB7XG4gICAgICAgICAgQW5zQWxlcnQoMSk7XG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZmluYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYW5zd2VyOiBcIlwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgQW5zQWxlcnQoMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcImF1dG9cIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWluSGVpZ2h0OiBcIjEwMHZoLTEwMHB4XCIgfX1cbiAgICAgICAgcXVlc3Rpb25zXG4gICAgICA+XG5cblxuICAgICAgICA8TmF2YmFyIC8+XG5cbiAgICAgICAgPFF1ZXN0aW9uIHFzPXt0aGlzLnN0YXRlLnF1ZXN0aW9uc30gcXNObz17dGhpcy5zdGF0ZS5xc05vfSBhdWRpbz17dGhpcy5zdGF0ZS5hdWRpb30gaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2V9IGRheT17dGhpcy5zdGF0ZS5kYXl9IC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFuc3dlclxuICAgICAgICAgICAgY2hhbmdlPXt0aGlzLmNoYW5nZX1cblxuICAgICAgICAgICAgYW5zd2VyPXt0aGlzLnN0YXRlLmFuc3dlcn1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEhpbnQgaGludD17dGhpcy5zdGF0ZS5oaW50fVxuICAgICAgICAgICAgc3VibWl0PXt0aGlzLnN1Ym1pdH1cbiAgICAgICAgICAgIHN1Ym1pdDI9e3RoaXMuc3VibWl0Mn1cblxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEZvb3RlciAvPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcbiJdfQ== */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/game.js */")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 9
        }
      }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
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
//# sourceMappingURL=game.js.e032aa8183c5792e4afc.hot-update.js.map