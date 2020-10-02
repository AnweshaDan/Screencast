webpackHotUpdate_N_E("pages/game",{

/***/ "./pages/game.js":
/*!***********************!*\
  !*** ./pages/game.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
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
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Question */ "./components/Question.js");
/* harmony import */ var _components_Hint__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Hint */ "./components/Hint.js");
/* harmony import */ var _components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/AnsAlert */ "./components/AnsAlert.js");
/* harmony import */ var _components_Answer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Answer */ "./components/Answer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _env_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../env.json */ "./env.json");
var _env_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../env.json */ "./env.json", 1);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");







var _jsxFileName = "/home/rishav4101/Screencast/pages/game.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

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
        return _objectSpread(_objectSpread({}, prevState), {}, {
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

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_env_json__WEBPACK_IMPORTED_MODULE_15__.api + "/api/status").then(function (response) {
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
            Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(9);

            if (localStorage.getItem('day') == 3 || response.data.error) {
              next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/game_finale');
            } else {
              next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/finale2');
            }
          }, temp)
        });

        console.log(localStorage.getItem('end'));

        _this2.setState({
          day: localStorage.getItem('day'),
          end: localStorage.getItem('end')
        }, function () {
          if (localStorage.getItem('day') == 3 && localStorage.getItem('end') < Date.now()) next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/game_finale');
          console.log(_this2.state.day + _this2.state.end);

          if (!localStorage.getItem("email")) {
            Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(8);
            next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/');
          } else if (!(localStorage.getItem('start') <= Date.now())) {
            Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(8);
            next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push("/");
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

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_env_json__WEBPACK_IMPORTED_MODULE_15__.api + "/api/question", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(function (response) {
        console.log("YOOO+" + response); //if (response.data.error) Router.push("/finale2");

        if (response.data.quiz_finished) {
          clearTimeout(_this3.state.v);
          next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push("/finale");
        }

        _this3.setState(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, {
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
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_env_json__WEBPACK_IMPORTED_MODULE_15__.api + "/api/checkanswer", {
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
            return _objectSpread(_objectSpread({}, prevState), {}, {
              qsNo: prevState.qsNo + 1,
              answer: ""
            });
          });

          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(1); //where does the effing control go after this?

          console.log("SANTA");

          _this4.setState({
            answer: ""
          });

          _this4.getQuestions();
        } else if (r && response.data.quiz_finished) {
          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(1);
          clearTimeout(_this4.state.v);
          next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push("/finale");
        } else {
          /*this.setState({
            answer: ""
          });*/
          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(0);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 18
        }
      }, __jsx("div", {
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
          lineNumber: 188,
          columnNumber: 13
        }
      }, __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_10__["default"], {
        qs: this.state.questions,
        qsNo: this.state.qsNo,
        audio: this.state.audio,
        image: this.state.image,
        day: this.state.day,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 13
        }
      }), " ", __jsx("div", {
        className: "jsx-4141458270",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 16
        }
      }, __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        change: this.change,
        answer: this.state.answer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 13
        }
      }), __jsx(_components_Hint__WEBPACK_IMPORTED_MODULE_11__["default"], {
        hint: this.state.hint,
        submit: this.submit,
        submit2: this.submit2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 13
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4141458270",
        __self: this
      }, "div.jsx-4141458270{text-align:center;margin:5px;margin-bottom:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jpc2hhdjQxMDEvU2NyZWVuY2FzdC9wYWdlcy9nYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNOMEIsQUFHaUMsa0JBQ1AsV0FDUSxvQkFDckIiLCJmaWxlIjoiL2hvbWUvcmlzaGF2NDEwMS9TY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBIaW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hpbnRcIjtcbmltcG9ydCBBbnNBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnNBbGVydFwiXG5pbXBvcnQgQW5zd2VyIGZyb20gXCIuLi9jb21wb25lbnRzL0Fuc3dlclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBkYXRhIGZyb20gJy4uL2Vudi5qc29uJztcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNsYXNzIGdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFuc3dlcjogXCJcIixcbiAgICAgICAgICAgIHF1ZXN0aW9uczogXCJcIixcbiAgICAgICAgICAgIHFzTm86IDEsXG4gICAgICAgICAgICBhdWRpbzogXCJcIixcbiAgICAgICAgICAgIGltYWdlOiBcIlwiLFxuICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgICBoaW50OiBcIlwiLFxuICAgICAgICAgICAgZGF5OiBcIlwiLFxuICAgICAgICAgICAgZW5kOiBcIlwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgICAgICAgIHY6IFwiXCJcblxuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdWJtaXQgPSB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1Ym1pdDIgPSB0aGlzLnN1Ym1pdDIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrQW5zID0gdGhpcy5jaGVja0Fucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucyA9IHRoaXMuZ2V0UXVlc3Rpb25zLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLmdldChkYXRhLmFwaSArIFwiL2FwaS9zdGF0dXNcIilcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcDMgPSBuZXcgRGF0ZShyZXNwb25zZS5kYXRhLnN0YXJ0X3RpbWUpO1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wMiA9IG5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuZW5kX3RpbWUpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbmQnLCB0ZW1wMi5nZXRUaW1lKCkgKyAodGVtcDIuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKSlcblxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhcnRcIiwgdGVtcDMuZ2V0VGltZSgpICsgKHRlbXAzLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpIC0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRheVwiLCByZXNwb25zZS5kYXRhLmN1cnJlbnRfZGF5KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHY6IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBbnNBbGVydCg5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF5JykgPT0gMyB8fCByZXNwb25zZS5kYXRhLmVycm9yKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2dhbWVfZmluYWxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZTInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgfSwgdGVtcClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF5OiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF5JyksIGVuZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSA9PSAzICYmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykgPCBEYXRlLm5vdygpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZ2FtZV9maW5hbGUnKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRheSArIHRoaXMuc3RhdGUuZW5kKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFuc0FsZXJ0KDgpXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCEobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0JykgPD0gRGF0ZS5ub3coKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFuc0FsZXJ0KDgpXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIllPT09PT09PXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgZ2V0UXVlc3Rpb25zKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKTsgLy9nZXQgcXVlc3Rpb25zIGZyb20gYXBpIGFuZCB1cGRhdGVzIHN0YXRlXG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5nZXQoZGF0YS5hcGkgKyBcIi9hcGkvcXVlc3Rpb25cIiwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZT09PK1wiICsgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIC8vaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3IpIFJvdXRlci5wdXNoKFwiL2ZpbmFsZTJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdGF0ZS52KTtcblxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9maW5hbGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zOiByZXNwb25zZS5kYXRhLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGludDogcmVzcG9uc2UuZGF0YS5oaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcXNObzogcmVzcG9uc2UuZGF0YS5xdWVzdGlvbl9ubyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvOiByZXNwb25zZS5kYXRhLmF1ZGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHJlc3BvbnNlLmRhdGEuaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKTtcbiAgICB9XG5cbiAgICBzdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy9zZW5kIGZpbmFsIGFuc3dlciBmb3IgY2hlY2tpbmdcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSk9KT0pPSk9KT0pcIik7XG4gICAgICAgIHRoaXMuY2hlY2tBbnModGhpcy5zdGF0ZS5hbnN3ZXIpO1xuXG4gICAgfTtcbiAgICBzdWJtaXQyID0gKCkgPT4ge1xuICAgICAgICAvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VyKTtcblxuICAgICAgICB0aGlzLmNoZWNrQW5zKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICB9O1xuXG4gICAgY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8va2VlcCB1cGRhdGluZyBhbnN3ZXJcbiAgICAgICAgbGV0IGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2U3RhdGUsIGFuc3dlcjogZSB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY2hlY2tBbnMoXG4gICAgICAgIGFucyAvL2NoZWNrIGFuc3dlciBmcm9tIGFwaSBhbmQgc2VuZCBmb3IgY29ycmVjdCBhbGVydFxuICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhhbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXG4gICAgICAgICAgICAgICAgZGF0YS5hcGkgKyBcIi9hcGkvY2hlY2thbnN3ZXJcIiwgeyBhbnN3ZXI6IGFucyB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgciA9IHJlc3BvbnNlLmRhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIGlmIChyICYmICFyZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gey4uLnByZXZTdGF0ZSwgcXNObzogcHJldlN0YXRlLnFzTm8gKyAxLCBhbnN3ZXI6IFwiXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIEFuc0FsZXJ0KDEpOyAvL3doZXJlIGRvZXMgdGhlIGVmZmluZyBjb250cm9sIGdvIGFmdGVyIHRoaXM/XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0FOVEFcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAociAmJiByZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQW5zQWxlcnQoMSk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnYpO1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9maW5hbGVcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLyp0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSk7Ki9cbiAgICAgICAgICAgICAgICAgICAgQW5zQWxlcnQoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKCA8XG4gICAgICAgICAgICBMYXlvdXQgPlxuICAgICAgICAgICAgPFxuICAgICAgICAgICAgZGl2IHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHsgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtaW5IZWlnaHQ6IFwiMTAwdmgtMTAwcHhcIiB9IH1cbiAgICAgICAgICAgIHF1ZXN0aW9ucyA+XG5cbiAgICAgICAgICAgIDxcbiAgICAgICAgICAgIFF1ZXN0aW9uIHFzID0geyB0aGlzLnN0YXRlLnF1ZXN0aW9ucyB9XG4gICAgICAgICAgICBxc05vID0geyB0aGlzLnN0YXRlLnFzTm8gfVxuICAgICAgICAgICAgYXVkaW8gPSB7IHRoaXMuc3RhdGUuYXVkaW8gfVxuICAgICAgICAgICAgaW1hZ2UgPSB7IHRoaXMuc3RhdGUuaW1hZ2UgfVxuICAgICAgICAgICAgZGF5ID0geyB0aGlzLnN0YXRlLmRheSB9XG4gICAgICAgICAgICAvPiA8XG4gICAgICAgICAgICBkaXYgPlxuICAgICAgICAgICAgPFxuICAgICAgICAgICAgQW5zd2VyIGNoYW5nZSA9IHsgdGhpcy5jaGFuZ2UgfVxuXG4gICAgICAgICAgICBhbnN3ZXIgPSB7IHRoaXMuc3RhdGUuYW5zd2VyIH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxcbiAgICAgICAgICAgIEhpbnQgaGludCA9IHsgdGhpcy5zdGF0ZS5oaW50IH1cbiAgICAgICAgICAgIHN1Ym1pdCA9IHsgdGhpcy5zdWJtaXQgfVxuICAgICAgICAgICAgc3VibWl0MiA9IHsgdGhpcy5zdWJtaXQyIH1cblxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFxuICAgICAgICAgICAgc3R5bGUganN4ID4geyBgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGAgfSA8IC9zdHlsZT4gPFxuICAgICAgICAgICAgL2Rpdj4gPFxuICAgICAgICAgICAgZGl2IGNsYXNzTmFtZSA9ICdmb290ZXJCdWZmJyA+XG5cbiAgICAgICAgICAgIDxcbiAgICAgICAgICAgIC9kaXY+IDxcbiAgICAgICAgICAgIC9kaXY+IDxcbiAgICAgICAgICAgIC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZ2FtZTsiXX0= */\n/*@ sourceURL=/home/rishav4101/Screencast/pages/game.js */"), " "), " ", __jsx("div", {
        className: "footerBuff",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 19
        }
      }), " "), " ");
    }
  }]);

  return game;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (game);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS5qcyJdLCJuYW1lcyI6WyJnYW1lIiwicHJvcHMiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImFuc3dlciIsImNoZWNrQW5zIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJxdWVzdGlvbnMiLCJxc05vIiwiYXVkaW8iLCJpbWFnZSIsImlzTG9nZ2VkSW4iLCJoaW50IiwiZGF5IiwiZW5kIiwibWVzc2FnZSIsInYiLCJzdWJtaXQiLCJiaW5kIiwic3VibWl0MiIsImNoYW5nZSIsImdldFF1ZXN0aW9ucyIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsImFwaSIsInRoZW4iLCJyZXNwb25zZSIsInRlbXAzIiwiRGF0ZSIsInN0YXJ0X3RpbWUiLCJ0ZW1wMiIsImVuZF90aW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInRlbXAiLCJnZXRJdGVtIiwibm93IiwiY3VycmVudF9kYXkiLCJzZXRUaW1lb3V0IiwiQW5zQWxlcnQiLCJlcnJvciIsIlJvdXRlciIsInB1c2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInF1aXpfZmluaXNoZWQiLCJjbGVhclRpbWVvdXQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uX25vIiwiYW5zIiwicG9zdCIsInIiLCJyZXN1bHQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJ0ZXh0QWxpZ24iLCJtaW5IZWlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSTs7Ozs7QUFDRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURl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RUgsTUFDQSwyREFEQTtBQUNPLGNBQU0sRUFBSyxLQUFLTyxNQUR2QjtBQUdBLGNBQU0sRUFBSyxLQUFLckIsS0FBTCxDQUFXQyxNQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkcsRUFRSCxNQUNBLHlEQURBO0FBQ0ssWUFBSSxFQUFLLEtBQUtELEtBQUwsQ0FBV2EsSUFEekI7QUFFQSxjQUFNLEVBQUssS0FBS0ssTUFGaEI7QUFHQSxlQUFPLEVBQUssS0FBS0UsT0FIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJHO0FBQUE7QUFBQTtBQUFBLGc0VUFYSCxPQWtDTTtBQUNGLGlCQUFTLEVBQUcsWUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBbENOLE1BRkssTUFBVDtBQTRDSDs7OztFQTNOY3lDLDRDQUFLLENBQUNDLFM7O0FBNk5WbkUsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FtZS44YjE4ZDk3ZjYzZjI1OTEwMDQ2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1F1ZXN0aW9uXCI7XG5pbXBvcnQgSGludCBmcm9tIFwiLi4vY29tcG9uZW50cy9IaW50XCI7XG5pbXBvcnQgQW5zQWxlcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQW5zQWxlcnRcIlxuaW1wb3J0IEFuc3dlciBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnN3ZXJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9lbnYuanNvbic7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jbGFzcyBnYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCIsXG4gICAgICAgICAgICBxdWVzdGlvbnM6IFwiXCIsXG4gICAgICAgICAgICBxc05vOiAxLFxuICAgICAgICAgICAgYXVkaW86IFwiXCIsXG4gICAgICAgICAgICBpbWFnZTogXCJcIixcbiAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICAgICAgaGludDogXCJcIixcbiAgICAgICAgICAgIGRheTogXCJcIixcbiAgICAgICAgICAgIGVuZDogXCJcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCIsXG4gICAgICAgICAgICB2OiBcIlwiXG5cblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5zdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJtaXQyID0gdGhpcy5zdWJtaXQyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja0FucyA9IHRoaXMuY2hlY2tBbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMgPSB0aGlzLmdldFF1ZXN0aW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5nZXQoZGF0YS5hcGkgKyBcIi9hcGkvc3RhdHVzXCIpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXAzID0gbmV3IERhdGUocmVzcG9uc2UuZGF0YS5zdGFydF90aW1lKTtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcDIgPSBuZXcgRGF0ZShyZXNwb25zZS5kYXRhLmVuZF90aW1lKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW5kJywgdGVtcDIuZ2V0VGltZSgpICsgKHRlbXAyLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpXG5cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXJ0XCIsIHRlbXAzLmdldFRpbWUoKSArICh0ZW1wMy5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKTtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKSAtIERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXlcIiwgcmVzcG9uc2UuZGF0YS5jdXJyZW50X2RheSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVtcCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF5JykpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB2OiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQW5zQWxlcnQoOSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpID09IDMgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9nYW1lX2ZpbmFsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9maW5hbGUyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIH0sIHRlbXApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRheTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpLCBlbmQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKSB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF5JykgPT0gMyAmJiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpIDwgRGF0ZS5ub3coKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2dhbWVfZmluYWxlJylcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXkgKyB0aGlzLnN0YXRlLmVuZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBbnNBbGVydCg4KVxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpIDw9IERhdGUubm93KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBbnNBbGVydCg4KVxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZT09PT09PT1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGdldFF1ZXN0aW9ucygpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5xc05vKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7IC8vZ2V0IHF1ZXN0aW9ucyBmcm9tIGFwaSBhbmQgdXBkYXRlcyBzdGF0ZVxuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KGRhdGEuYXBpICsgXCIvYXBpL3F1ZXN0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWU9PTytcIiArIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAvL2lmIChyZXNwb25zZS5kYXRhLmVycm9yKSBSb3V0ZXIucHVzaChcIi9maW5hbGUyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudik7XG5cbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvZmluYWxlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uczogcmVzcG9uc2UuZGF0YS5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IHJlc3BvbnNlLmRhdGEuaGludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHFzTm86IHJlc3BvbnNlLmRhdGEucXVlc3Rpb25fbm8sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdWRpbzogcmVzcG9uc2UuZGF0YS5hdWRpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZXNwb25zZS5kYXRhLmltYWdlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XG4gICAgfVxuXG4gICAgc3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vc2VuZCBmaW5hbCBhbnN3ZXIgZm9yIGNoZWNraW5nXG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkpPSk9KT0pPSk9KXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQW5zKHRoaXMuc3RhdGUuYW5zd2VyKTtcblxuICAgIH07XG4gICAgc3VibWl0MiA9ICgpID0+IHtcbiAgICAgICAgLy9zZW5kIGZpbmFsIGFuc3dlciBmb3IgY2hlY2tpbmdcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFuc3dlcik7XG5cbiAgICAgICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gICAgfTtcblxuICAgIGNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICAvL2tlZXAgdXBkYXRpbmcgYW5zd2VyXG4gICAgICAgIGxldCBlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7Li4ucHJldlN0YXRlLCBhbnN3ZXI6IGUgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNoZWNrQW5zKFxuICAgICAgICBhbnMgLy9jaGVjayBhbnN3ZXIgZnJvbSBhcGkgYW5kIHNlbmQgZm9yIGNvcnJlY3QgYWxlcnRcbiAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coYW5zKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5xc05vKTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KFxuICAgICAgICAgICAgICAgIGRhdGEuYXBpICsgXCIvYXBpL2NoZWNrYW5zd2VyXCIsIHsgYW5zd2VyOiBhbnMgfSwge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHIgPSByZXNwb25zZS5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAociAmJiAhcmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5wcmV2U3RhdGUsIHFzTm86IHByZXZTdGF0ZS5xc05vICsgMSwgYW5zd2VyOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBBbnNBbGVydCgxKTsgLy93aGVyZSBkb2VzIHRoZSBlZmZpbmcgY29udHJvbCBnbyBhZnRlciB0aGlzP1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNBTlRBXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcjogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHIgJiYgcmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIEFuc0FsZXJ0KDEpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdGF0ZS52KTtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvZmluYWxlXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8qdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgYW5zd2VyOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0pOyovXG4gICAgICAgICAgICAgICAgICAgIEFuc0FsZXJ0KDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICggPFxuICAgICAgICAgICAgTGF5b3V0ID5cbiAgICAgICAgICAgIDxcbiAgICAgICAgICAgIGRpdiBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB7IG1hcmdpblJpZ2h0OiBcImF1dG9cIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWluSGVpZ2h0OiBcIjEwMHZoLTEwMHB4XCIgfSB9XG4gICAgICAgICAgICBxdWVzdGlvbnMgPlxuXG4gICAgICAgICAgICA8XG4gICAgICAgICAgICBRdWVzdGlvbiBxcyA9IHsgdGhpcy5zdGF0ZS5xdWVzdGlvbnMgfVxuICAgICAgICAgICAgcXNObyA9IHsgdGhpcy5zdGF0ZS5xc05vIH1cbiAgICAgICAgICAgIGF1ZGlvID0geyB0aGlzLnN0YXRlLmF1ZGlvIH1cbiAgICAgICAgICAgIGltYWdlID0geyB0aGlzLnN0YXRlLmltYWdlIH1cbiAgICAgICAgICAgIGRheSA9IHsgdGhpcy5zdGF0ZS5kYXkgfVxuICAgICAgICAgICAgLz4gPFxuICAgICAgICAgICAgZGl2ID5cbiAgICAgICAgICAgIDxcbiAgICAgICAgICAgIEFuc3dlciBjaGFuZ2UgPSB7IHRoaXMuY2hhbmdlIH1cblxuICAgICAgICAgICAgYW5zd2VyID0geyB0aGlzLnN0YXRlLmFuc3dlciB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8XG4gICAgICAgICAgICBIaW50IGhpbnQgPSB7IHRoaXMuc3RhdGUuaGludCB9XG4gICAgICAgICAgICBzdWJtaXQgPSB7IHRoaXMuc3VibWl0IH1cbiAgICAgICAgICAgIHN1Ym1pdDIgPSB7IHRoaXMuc3VibWl0MiB9XG5cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxcbiAgICAgICAgICAgIHN0eWxlIGpzeCA+IHsgYFxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgIH0gPCAvc3R5bGU+IDxcbiAgICAgICAgICAgIC9kaXY+IDxcbiAgICAgICAgICAgIGRpdiBjbGFzc05hbWUgPSAnZm9vdGVyQnVmZicgPlxuXG4gICAgICAgICAgICA8XG4gICAgICAgICAgICAvZGl2PiA8XG4gICAgICAgICAgICAvZGl2PiA8XG4gICAgICAgICAgICAvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGdhbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==