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
      console.log(_this.state.answer);
      console.log("JOJOJOJOJOJ");

      _this.checkAns(_this.state.answer);
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
      end: "",
      message: "",
      v: ""
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
        var temp3 = new Date(response.data.start_time);
        var temp2 = new Date(response.data.end_time);
        localStorage.setItem('end', temp2.getTime() + temp2.getTimezoneOffset() * 60000);
        localStorage.setItem("start", temp3.getTime() + temp3.getTimezoneOffset() * 60000);
        var temp = localStorage.getItem('end') - Date.now();
        localStorage.setItem("day", response.data.current_day);
        console.log(temp);
        console.log(localStorage.getItem('end'));
        console.log(localStorage.getItem('day'));

        _this2.setState({
          v: setTimeout(function () {
            Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_14__["default"])(9);

            if (localStorage.getItem('day') == 3 || response.data.error) {
              next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push('/game_finale');
            } else {
              next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push('/finale2');
            }
          }, temp)
        });

        console.log(localStorage.getItem('end'));

        _this2.setState({
          day: localStorage.getItem('day'),
          end: localStorage.getItem('end')
        }, function () {
          if (localStorage.getItem('day') == 3 && localStorage.getItem('end') < Date.now()) next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push('/game_finale');
          console.log(_this2.state.day + _this2.state.end);

          if (!localStorage.getItem("email")) {
            Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_14__["default"])(8);
            next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push('/');
          } else if (!(localStorage.getItem('start') <= Date.now())) {
            Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_14__["default"])(8);
            next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push("/");
          } else {
            console.log("YOOOOOOO");

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
        console.log("YOOO+" + response); //if (response.data.error) Router.push("/finale2");

        if (response.data.quiz_finished) {
          clearTimeout(_this3.state.v);
          localStorage.setItem();
          next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push("/finale");
        }

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
          clearTimeout(_this4.state.v);
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
          lineNumber: 198,
          columnNumber: 7
        }
      }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
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
          lineNumber: 206,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-4141458270",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 9
        }
      }, __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        change: this.change,
        answer: this.state.answer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }
      }), __jsx(_components_Hint__WEBPACK_IMPORTED_MODULE_13__["default"], {
        hint: this.state.hint,
        submit: this.submit,
        submit2: this.submit2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4141458270",
        __self: this
      }, "div.jsx-4141458270{text-align:center;margin:5px;margin-bottom:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMk5zQixBQUdpQyxrQkFDUCxXQUNRLG9CQUNyQiIsImZpbGUiOiIvaG9tZS9hbndlc2hhL0Rlc2t0b3Avc2NyZWVuY2FzdC9wYWdlcy9nYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBIaW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hpbnRcIjtcbmltcG9ydCBBbnNBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnNBbGVydFwiXG5pbXBvcnQgQW5zd2VyIGZyb20gXCIuLi9jb21wb25lbnRzL0Fuc3dlclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBkYXRhIGZyb20gJy4uL2Vudi5qc29uJztcblxuXG5jbGFzcyBnYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFuc3dlcjogXCJcIixcbiAgICAgIHF1ZXN0aW9uczogXCJcIixcbiAgICAgIHFzTm86IDEsXG4gICAgICBhdWRpbzogXCJcIixcbiAgICAgIGltYWdlOiBcIlwiLFxuICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICBoaW50OiBcIlwiLFxuICAgICAgZGF5OiBcIlwiLFxuICAgICAgZW5kOlwiXCIsXG4gICAgICBtZXNzYWdlOlwiXCIsXG4gICAgICB2OlwiXCJcbiAgICAgIFxuICAgICAgXG4gICAgfTtcblxuICAgIHRoaXMuc3VibWl0ID0gdGhpcy5zdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN1Ym1pdDIgPSB0aGlzLnN1Ym1pdDIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0FucyA9IHRoaXMuY2hlY2tBbnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFF1ZXN0aW9ucyA9IHRoaXMuZ2V0UXVlc3Rpb25zLmJpbmQodGhpcyk7XG4gIH1cbiAgXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoZGF0YS5hcGkrXCIvYXBpL3N0YXR1c1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB2YXIgdGVtcDM9bmV3IERhdGUocmVzcG9uc2UuZGF0YS5zdGFydF90aW1lKTtcbiAgICAgICAgICAgIGxldCB0ZW1wMiA9IG5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuZW5kX3RpbWUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VuZCcsdGVtcDIuZ2V0VGltZSgpICsgKHRlbXAyLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhcnRcIiwgdGVtcDMuZ2V0VGltZSgpICsgKHRlbXAzLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xuICAgICAgICAgICAgbGV0IHRlbXA9bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpLURhdGUubm93KCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRheVwiLHJlc3BvbnNlLmRhdGEuY3VycmVudF9kYXkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGVtcCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Y6c2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICBBbnNBbGVydCg5KTtcbiAgICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpPT0zIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2dhbWVfZmluYWxlJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9maW5hbGUyJyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LHRlbXApfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RheTpsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF5JyksIGVuZDpsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJyl9LCgpPT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpPT0zICYmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykgPCBEYXRlLm5vdygpKSlcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9nYW1lX2ZpbmFsZScpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGF5K3RoaXMuc3RhdGUuZW5kKTtcbiAgICAgICAgICAgICAgaWYgKCEobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKSkpIHtcbiAgICAgICAgICAgICAgICBBbnNBbGVydCg4KVxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZiAoIShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RhcnQnKSA8PSBEYXRlLm5vdygpKSkge1xuICAgICAgICAgICAgICAgIEFuc0FsZXJ0KDgpXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWU9PT09PT09cIilcbiAgICAgICAgICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICBcbiAgfVxuXG4gIGdldFF1ZXN0aW9ucygpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpOyAvL2dldCBxdWVzdGlvbnMgZnJvbSBhcGkgYW5kIHVwZGF0ZXMgc3RhdGVcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KGRhdGEuYXBpK1wiL2FwaS9xdWVzdGlvblwiLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIiksXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWU9PTytcIityZXNwb25zZSk7XG4gICAgICAgIC8vaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIFJvdXRlci5wdXNoKFwiL2ZpbmFsZTJcIik7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpXG4gICAgICAgIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdGF0ZS52KTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgpXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZmluYWxlXCIpO1xuICAgICAgICB9IFxuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgcXVlc3Rpb25zOiByZXNwb25zZS5kYXRhLnF1ZXN0aW9uLFxuICAgICAgICAgICAgaGludDogcmVzcG9uc2UuZGF0YS5oaW50LFxuICAgICAgICAgICAgcXNObzogcmVzcG9uc2UuZGF0YS5xdWVzdGlvbl9ubyxcbiAgICAgICAgICAgIGF1ZGlvOiByZXNwb25zZS5kYXRhLmF1ZGlvLFxuICAgICAgICAgICAgaW1hZ2U6IHJlc3BvbnNlLmRhdGEuaW1hZ2VcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpO1xuICB9XG5cbiAgc3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgLy9zZW5kIGZpbmFsIGFuc3dlciBmb3IgY2hlY2tpbmdcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiSk9KT0pPSk9KT0pcIik7XG4gICAgICB0aGlzLmNoZWNrQW5zKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICBcbiAgfTtcbiAgc3VibWl0MiA9ICgpID0+IHtcbiAgICAvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuXG4gICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gIH07XG5cbiAgY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgLy9rZWVwIHVwZGF0aW5nIGFuc3dlclxuICAgIGxldCBlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBhbnN3ZXI6IGUgfTtcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0FucyhcbiAgICBhbnMgLy9jaGVjayBhbnN3ZXIgZnJvbSBhcGkgYW5kIHNlbmQgZm9yIGNvcnJlY3QgYWxlcnRcbiAgKSB7XG4gICAgY29uc29sZS5sb2coYW5zKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgZGF0YS5hcGkrXCIvYXBpL2NoZWNrYW5zd2VyXCIsXG4gICAgICAgIHsgYW5zd2VyOiBhbnMgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbGV0IHIgPSByZXNwb25zZS5kYXRhLnJlc3VsdDtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICAgIGlmIChyICYmICFyZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgcXNObzogcHJldlN0YXRlLnFzTm8gKyAxLCBhbnN3ZXI6IFwiXCIgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBBbnNBbGVydCgxKTsgLy93aGVyZSBkb2VzIHRoZSBlZmZpbmcgY29udHJvbCBnbyBhZnRlciB0aGlzP1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0FOVEFcIik7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICAgICAgICB9IGVsc2UgaWYgKHIgJiYgcmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSB7XG4gICAgICAgICAgQW5zQWxlcnQoMSk7XG4gICAgICAgICAgXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudik7XG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZmluYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYW5zd2VyOiBcIlwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgQW5zQWxlcnQoMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcImF1dG9cIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWluSGVpZ2h0OiBcIjEwMHZoLTEwMHB4XCIgfX1cbiAgICAgICAgcXVlc3Rpb25zXG4gICAgICA+XG5cblxuICAgICAgICA8TmF2YmFyIC8+XG5cbiAgICAgICAgPFF1ZXN0aW9uIHFzPXt0aGlzLnN0YXRlLnF1ZXN0aW9uc30gcXNObz17dGhpcy5zdGF0ZS5xc05vfSBhdWRpbz17dGhpcy5zdGF0ZS5hdWRpb30gaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2V9IGRheT17dGhpcy5zdGF0ZS5kYXl9IC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFuc3dlclxuICAgICAgICAgICAgY2hhbmdlPXt0aGlzLmNoYW5nZX1cblxuICAgICAgICAgICAgYW5zd2VyPXt0aGlzLnN0YXRlLmFuc3dlcn1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEhpbnQgaGludD17dGhpcy5zdGF0ZS5oaW50fVxuICAgICAgICAgICAgc3VibWl0PXt0aGlzLnN1Ym1pdH1cbiAgICAgICAgICAgIHN1Ym1pdDI9e3RoaXMuc3VibWl0Mn1cblxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEZvb3RlciAvPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcbiJdfQ== */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/game.js */")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 9
        }
      }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
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
//# sourceMappingURL=game.js.584313fd66b4ab4aa1b4.hot-update.js.map