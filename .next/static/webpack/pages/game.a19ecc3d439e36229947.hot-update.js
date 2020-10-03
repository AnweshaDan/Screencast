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
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");







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

      _this.checkAns(_this.state.answer);

      event.target.reset();
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
      v: "",
      loaded: false
    };
    _this.submit = _this.submit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // this.submit2 = this.submit2.bind(this);

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
              next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/finale');
            } else {
              next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/finale');
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
      }).then(function () {
        _this2.setState({
          loaded: true
        });
      })["catch"](function (err) {
        console.log(err);
        next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/error');
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
      })["catch"](function (err) {
        console.log(err);
        next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/error');
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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, this.state.loaded === true ? __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 7
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
          lineNumber: 205,
          columnNumber: 7
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
          lineNumber: 210,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-4141458270",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 9
        }
      }, __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        change: this.change,
        answer: this.state.answer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 11
        }
      }), __jsx(_components_Hint__WEBPACK_IMPORTED_MODULE_11__["default"], {
        hint: this.state.hint,
        submit: this.submit // submit2={this.submit2}
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4141458270",
        __self: this
      }, "div.jsx-4141458270{text-align:center;margin:5px;margin-bottom:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jpc2hhdjQxMDEvU2NyZWVuY2FzdC9wYWdlcy9nYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThOc0IsQUFHaUMsa0JBQ1AsV0FDUSxvQkFDckIiLCJmaWxlIjoiL2hvbWUvcmlzaGF2NDEwMS9TY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBIaW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hpbnRcIjtcbmltcG9ydCBBbnNBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnNBbGVydFwiXG5pbXBvcnQgQW5zd2VyIGZyb20gXCIuLi9jb21wb25lbnRzL0Fuc3dlclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBkYXRhIGZyb20gJy4uL2Vudi5qc29uJztcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRlclwiXG5cbmNsYXNzIGdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW5zd2VyOiBcIlwiLFxuICAgICAgcXVlc3Rpb25zOiBcIlwiLFxuICAgICAgcXNObzogMSxcbiAgICAgIGF1ZGlvOiBcIlwiLFxuICAgICAgaW1hZ2U6IFwiXCIsXG4gICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgIGhpbnQ6IFwiXCIsXG4gICAgICBkYXk6IFwiXCIsXG4gICAgICBlbmQ6XCJcIixcbiAgICAgIG1lc3NhZ2U6XCJcIixcbiAgICAgIHY6XCJcIixcbiAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMuc3VibWl0ID0gdGhpcy5zdWJtaXQuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLnN1Ym1pdDIgPSB0aGlzLnN1Ym1pdDIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0FucyA9IHRoaXMuY2hlY2tBbnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFF1ZXN0aW9ucyA9IHRoaXMuZ2V0UXVlc3Rpb25zLmJpbmQodGhpcyk7XG4gIH1cbiAgXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoZGF0YS5hcGkrXCIvYXBpL3N0YXR1c1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB2YXIgdGVtcDM9bmV3IERhdGUocmVzcG9uc2UuZGF0YS5zdGFydF90aW1lKTtcbiAgICAgICAgICAgIGxldCB0ZW1wMiA9IG5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuZW5kX3RpbWUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VuZCcsdGVtcDIuZ2V0VGltZSgpICsgKHRlbXAyLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXJ0XCIsIHRlbXAzLmdldFRpbWUoKSArICh0ZW1wMy5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKTtcbiAgICAgICAgICAgIGxldCB0ZW1wPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKS1EYXRlLm5vdygpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXlcIixyZXNwb25zZS5kYXRhLmN1cnJlbnRfZGF5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2OnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgQW5zQWxlcnQoOSk7XG4gICAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKT09MyB8fCByZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9maW5hbGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmluYWxlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sdGVtcCl9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF5OmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSwgZW5kOmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKX0sKCk9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF5Jyk9PTMgJiYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKSA8IERhdGUubm93KCkpKVxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2dhbWVfZmluYWxlJylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXkrdGhpcy5zdGF0ZS5lbmQpO1xuICAgICAgICAgICAgICBpZiAoIShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpKSkge1xuICAgICAgICAgICAgICAgIEFuc0FsZXJ0KDgpXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmICghKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpIDw9IERhdGUubm93KCkpKSB7XG4gICAgICAgICAgICAgICAgQW5zQWxlcnQoOClcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZT09PT09PT1wiKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGVkOiB0cnVlfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yJylcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIFxuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucXNObyk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7IC8vZ2V0IHF1ZXN0aW9ucyBmcm9tIGFwaSBhbmQgdXBkYXRlcyBzdGF0ZVxuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoZGF0YS5hcGkrXCIvYXBpL3F1ZXN0aW9uXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJZT09PK1wiK3Jlc3BvbnNlKTtcbiAgICAgICAgLy9pZiAocmVzcG9uc2UuZGF0YS5lcnJvcikgUm91dGVyLnB1c2goXCIvZmluYWxlMlwiKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZClcbiAgICAgICAge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnYpO1xuICAgICAgICAgIFxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2ZpbmFsZVwiKTtcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIHF1ZXN0aW9uczogcmVzcG9uc2UuZGF0YS5xdWVzdGlvbixcbiAgICAgICAgICAgIGhpbnQ6IHJlc3BvbnNlLmRhdGEuaGludCxcbiAgICAgICAgICAgIHFzTm86IHJlc3BvbnNlLmRhdGEucXVlc3Rpb25fbm8sXG4gICAgICAgICAgICBhdWRpbzogcmVzcG9uc2UuZGF0YS5hdWRpbyxcbiAgICAgICAgICAgIGltYWdlOiByZXNwb25zZS5kYXRhLmltYWdlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgUm91dGVyLnB1c2goJy9lcnJvcicpXG4gICAgICB9KTtcbiAgICAgIFxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpO1xuICB9XG5cbiAgc3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgLy9zZW5kIGZpbmFsIGFuc3dlciBmb3IgY2hlY2tpbmdcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VyKTtcblxuICAgICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gICAgICBldmVudC50YXJnZXQucmVzZXQoKTtcbiAgICBcbiAgfTtcbiAgLy8gc3VibWl0MiA9ICgpID0+IHtcbiAgLy8gICAvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuXG4gIC8vICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuXG4gIC8vICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gIC8vIH07XG5cbiAgY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgLy9rZWVwIHVwZGF0aW5nIGFuc3dlclxuICAgIGxldCBlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBhbnN3ZXI6IGUgfTtcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0FucyhcbiAgICBhbnMgLy9jaGVjayBhbnN3ZXIgZnJvbSBhcGkgYW5kIHNlbmQgZm9yIGNvcnJlY3QgYWxlcnRcbiAgKSB7XG4gICAgY29uc29sZS5sb2coYW5zKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgZGF0YS5hcGkrXCIvYXBpL2NoZWNrYW5zd2VyXCIsXG4gICAgICAgIHsgYW5zd2VyOiBhbnMgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbGV0IHIgPSByZXNwb25zZS5kYXRhLnJlc3VsdDtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICAgIGlmIChyICYmICFyZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgcXNObzogcHJldlN0YXRlLnFzTm8gKyAxLCBhbnN3ZXI6IFwiXCIgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBBbnNBbGVydCgxKTsgLy93aGVyZSBkb2VzIHRoZSBlZmZpbmcgY29udHJvbCBnbyBhZnRlciB0aGlzP1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0FOVEFcIik7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICAgICAgICB9IGVsc2UgaWYgKHIgJiYgcmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSB7XG4gICAgICAgICAgQW5zQWxlcnQoMSk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudik7XG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZmluYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCJcbiAgICAgICAgICB9KTsqL1xuICAgICAgICAgIEFuc0FsZXJ0KDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIHsgKHRoaXMuc3RhdGUubG9hZGVkID09PSB0cnVlKSA/XG4gICAgICA8TGF5b3V0PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCJhdXRvXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1pbkhlaWdodDogXCIxMDB2aC0xMDBweFwiIH19XG4gICAgICAgIHF1ZXN0aW9uc1xuICAgICAgPlxuXG4gICAgICAgIDxRdWVzdGlvbiBxcz17dGhpcy5zdGF0ZS5xdWVzdGlvbnN9IHFzTm89e3RoaXMuc3RhdGUucXNOb30gYXVkaW89e3RoaXMuc3RhdGUuYXVkaW99IGltYWdlPXt0aGlzLnN0YXRlLmltYWdlfSBkYXk9e3RoaXMuc3RhdGUuZGF5fSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBbnN3ZXJcbiAgICAgICAgICAgIGNoYW5nZT17dGhpcy5jaGFuZ2V9XG4gICAgICAgICAgICBhbnN3ZXI9e3RoaXMuc3RhdGUuYW5zd2VyfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8SGludCBoaW50PXt0aGlzLnN0YXRlLmhpbnR9XG4gICAgICAgICAgICBzdWJtaXQ9e3RoaXMuc3VibWl0fVxuICAgICAgICAgICAgLy8gc3VibWl0Mj17dGhpcy5zdWJtaXQyfVxuXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3RlckJ1ZmYnPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgOiA8TG9hZGVyLz4gfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZ2FtZTsiXX0= */\n/*@ sourceURL=/home/rishav4101/Screencast/pages/game.js */")), __jsx("div", {
        className: "footerBuff",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 9
        }
      }))) : __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 9
        }
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS5qcyJdLCJuYW1lcyI6WyJnYW1lIiwicHJvcHMiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImFuc3dlciIsImNoZWNrQW5zIiwidGFyZ2V0IiwicmVzZXQiLCJlIiwidmFsdWUiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInF1ZXN0aW9ucyIsInFzTm8iLCJhdWRpbyIsImltYWdlIiwiaXNMb2dnZWRJbiIsImhpbnQiLCJkYXkiLCJlbmQiLCJtZXNzYWdlIiwidiIsImxvYWRlZCIsInN1Ym1pdCIsImJpbmQiLCJjaGFuZ2UiLCJnZXRRdWVzdGlvbnMiLCJheGlvcyIsImdldCIsImRhdGEiLCJhcGkiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZW1wMyIsIkRhdGUiLCJzdGFydF90aW1lIiwidGVtcDIiLCJlbmRfdGltZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRUaW1lIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ0ZW1wIiwiZ2V0SXRlbSIsIm5vdyIsImN1cnJlbnRfZGF5Iiwic2V0VGltZW91dCIsIkFuc0FsZXJ0IiwiZXJyb3IiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJxdWl6X2ZpbmlzaGVkIiwiY2xlYXJUaW1lb3V0IiwicXVlc3Rpb24iLCJxdWVzdGlvbl9ubyIsImFucyIsInBvc3QiLCJyIiwicmVzdWx0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwidGV4dEFsaWduIiwibWluSGVpZ2h0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLGlOQXdIVixVQUFDQyxLQUFELEVBQVc7QUFDbEI7QUFFRUMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBS0MsS0FBTCxDQUFXQyxNQUF2Qjs7QUFFQSxZQUFLQyxRQUFMLENBQWMsTUFBS0YsS0FBTCxDQUFXQyxNQUF6Qjs7QUFDQUosV0FBSyxDQUFDTSxNQUFOLENBQWFDLEtBQWI7QUFFSCxLQWhJa0I7O0FBQUEsaU5BeUlWLFVBQUNQLEtBQUQsRUFBVztBQUNsQjtBQUNBLFVBQUlRLENBQUMsR0FBR1IsS0FBSyxDQUFDTSxNQUFOLENBQWFHLEtBQXJCOztBQUNBLFlBQUtDLFFBQUwsQ0FBYyxVQUFDQyxTQUFELEVBQWU7QUFDM0IsK0NBQVlBLFNBQVo7QUFBdUJQLGdCQUFNLEVBQUVJO0FBQS9CO0FBQ0QsT0FGRDtBQUdELEtBL0lrQjs7QUFFakIsVUFBS0wsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRSxFQURHO0FBRVhRLGVBQVMsRUFBRSxFQUZBO0FBR1hDLFVBQUksRUFBRSxDQUhLO0FBSVhDLFdBQUssRUFBRSxFQUpJO0FBS1hDLFdBQUssRUFBRSxFQUxJO0FBTVhDLGdCQUFVLEVBQUUsS0FORDtBQU9YQyxVQUFJLEVBQUUsRUFQSztBQVFYQyxTQUFHLEVBQUUsRUFSTTtBQVNYQyxTQUFHLEVBQUMsRUFUTztBQVVYQyxhQUFPLEVBQUMsRUFWRztBQVdYQyxPQUFDLEVBQUMsRUFYUztBQVlYQyxZQUFNLEVBQUU7QUFaRyxLQUFiO0FBZUEsVUFBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWix5R0FBZCxDQWpCaUIsQ0FrQmpCOztBQUNBLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlELElBQVoseUdBQWQ7QUFDQSxVQUFLbkIsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNtQixJQUFkLHlHQUFoQjtBQUNBLFVBQUtFLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkYsSUFBbEIseUdBQXBCO0FBckJpQjtBQXNCbEI7Ozs7d0NBR21CO0FBQUE7O0FBRWxCRyxrREFBSyxDQUNGQyxHQURILENBQ09DLHVDQUFJLENBQUNDLEdBQUwsR0FBUyxhQURoQixFQUVHQyxJQUZILENBRVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ2QvQixlQUFPLENBQUNDLEdBQVIsQ0FBWThCLFFBQVo7QUFDQSxZQUFJQyxLQUFLLEdBQUMsSUFBSUMsSUFBSixDQUFTRixRQUFRLENBQUNILElBQVQsQ0FBY00sVUFBdkIsQ0FBVjtBQUNBLFlBQUlDLEtBQUssR0FBRyxJQUFJRixJQUFKLENBQVNGLFFBQVEsQ0FBQ0gsSUFBVCxDQUFjUSxRQUF2QixDQUFaO0FBQ0FDLG9CQUFZLENBQUNDLE9BQWIsQ0FBcUIsS0FBckIsRUFBMkJILEtBQUssQ0FBQ0ksT0FBTixLQUFtQkosS0FBSyxDQUFDSyxpQkFBTixLQUE0QixLQUExRTtBQUNBSCxvQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCTixLQUFLLENBQUNPLE9BQU4sS0FBbUJQLEtBQUssQ0FBQ1EsaUJBQU4sS0FBNEIsS0FBN0U7QUFDQSxZQUFJQyxJQUFJLEdBQUNKLFlBQVksQ0FBQ0ssT0FBYixDQUFxQixLQUFyQixJQUE0QlQsSUFBSSxDQUFDVSxHQUFMLEVBQXJDO0FBQ0FOLG9CQUFZLENBQUNDLE9BQWIsQ0FBcUIsS0FBckIsRUFBMkJQLFFBQVEsQ0FBQ0gsSUFBVCxDQUFjZ0IsV0FBekM7QUFDQTVDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZd0MsSUFBWjtBQUNBekMsZUFBTyxDQUFDQyxHQUFSLENBQVlvQyxZQUFZLENBQUNLLE9BQWIsQ0FBcUIsS0FBckIsQ0FBWjtBQUNBMUMsZUFBTyxDQUFDQyxHQUFSLENBQVlvQyxZQUFZLENBQUNLLE9BQWIsQ0FBcUIsS0FBckIsQ0FBWjs7QUFDQSxjQUFJLENBQUNqQyxRQUFMLENBQWM7QUFBQ1csV0FBQyxFQUFDeUIsVUFBVSxDQUFDLFlBQVU7QUFDcENDLGlGQUFRLENBQUMsQ0FBRCxDQUFSOztBQUNBLGdCQUFHVCxZQUFZLENBQUNLLE9BQWIsQ0FBcUIsS0FBckIsS0FBNkIsQ0FBN0IsSUFBa0NYLFFBQVEsQ0FBQ0gsSUFBVCxDQUFjbUIsS0FBbkQsRUFDQTtBQUNFQyxpRUFBTSxDQUFDQyxJQUFQLENBQVksU0FBWjtBQUNELGFBSEQsTUFLQTtBQUNFRCxpRUFBTSxDQUFDQyxJQUFQLENBQVksU0FBWjtBQUNEO0FBQ0YsV0FWMEIsRUFVekJSLElBVnlCO0FBQWIsU0FBZDs7QUFXQXpDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZb0MsWUFBWSxDQUFDSyxPQUFiLENBQXFCLEtBQXJCLENBQVo7O0FBQ0EsY0FBSSxDQUFDakMsUUFBTCxDQUFjO0FBQUNRLGFBQUcsRUFBQ29CLFlBQVksQ0FBQ0ssT0FBYixDQUFxQixLQUFyQixDQUFMO0FBQWtDeEIsYUFBRyxFQUFDbUIsWUFBWSxDQUFDSyxPQUFiLENBQXFCLEtBQXJCO0FBQXRDLFNBQWQsRUFBaUYsWUFDakY7QUFDRSxjQUFHTCxZQUFZLENBQUNLLE9BQWIsQ0FBcUIsS0FBckIsS0FBNkIsQ0FBN0IsSUFBbUNMLFlBQVksQ0FBQ0ssT0FBYixDQUFxQixLQUFyQixJQUE4QlQsSUFBSSxDQUFDVSxHQUFMLEVBQXBFLEVBQ0FLLG1EQUFNLENBQUNDLElBQVAsQ0FBWSxjQUFaO0FBQ0FqRCxpQkFBTyxDQUFDQyxHQUFSLENBQVksTUFBSSxDQUFDQyxLQUFMLENBQVdlLEdBQVgsR0FBZSxNQUFJLENBQUNmLEtBQUwsQ0FBV2dCLEdBQXRDOztBQUNBLGNBQUksQ0FBRW1CLFlBQVksQ0FBQ0ssT0FBYixDQUFxQixPQUFyQixDQUFOLEVBQXNDO0FBQ3BDSSxpRkFBUSxDQUFDLENBQUQsQ0FBUjtBQUNBRSwrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNELFdBSEQsTUFJSyxJQUFJLEVBQUVaLFlBQVksQ0FBQ0ssT0FBYixDQUFxQixPQUFyQixLQUFpQ1QsSUFBSSxDQUFDVSxHQUFMLEVBQW5DLENBQUosRUFBb0Q7QUFDdkRHLGlGQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0FFLCtEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0QsV0FISSxNQUlBO0FBQ0hqRCxtQkFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjs7QUFDQSxrQkFBSSxDQUFDd0IsWUFBTDtBQUNEO0FBQ0YsU0FqQkQ7QUFrQkgsT0EzQ0wsRUE0Q0tLLElBNUNMLENBNENVLFlBQU07QUFDVixjQUFJLENBQUNyQixRQUFMLENBQWM7QUFBQ1ksZ0JBQU0sRUFBRTtBQUFULFNBQWQ7QUFDRCxPQTlDTCxXQStDVyxVQUFBNkIsR0FBRyxFQUFJO0FBQ1psRCxlQUFPLENBQUNDLEdBQVIsQ0FBWWlELEdBQVo7QUFDQUYsMkRBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDRCxPQWxETDtBQXFERDs7O21DQUVjO0FBQUE7O0FBQ2JqRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLENBQVdVLElBQXZCO0FBQ0FaLGFBQU8sQ0FBQ0MsR0FBUixDQUFZb0MsWUFBWSxDQUFDSyxPQUFiLENBQXFCLE9BQXJCLENBQVosRUFGYSxDQUUrQjs7QUFFNUNoQixrREFBSyxDQUNGQyxHQURILENBQ09DLHVDQUFJLENBQUNDLEdBQUwsR0FBUyxlQURoQixFQUNpQztBQUM3QnNCLGVBQU8sRUFBRTtBQUNQQyx1QkFBYSxFQUFFLFlBQVlmLFlBQVksQ0FBQ0ssT0FBYixDQUFxQixPQUFyQjtBQURwQjtBQURvQixPQURqQyxFQU1HWixJQU5ILENBTVEsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCL0IsZUFBTyxDQUFDQyxHQUFSLENBQVksVUFBUThCLFFBQXBCLEVBRGtCLENBRWxCOztBQUNBLFlBQUlBLFFBQVEsQ0FBQ0gsSUFBVCxDQUFjeUIsYUFBbEIsRUFDQTtBQUNFQyxzQkFBWSxDQUFDLE1BQUksQ0FBQ3BELEtBQUwsQ0FBV2tCLENBQVosQ0FBWjtBQUVBNEIsNkRBQU0sQ0FBQ0MsSUFBUCxDQUFZLFNBQVo7QUFDRDs7QUFDRCxjQUFJLENBQUN4QyxRQUFMLENBQWMsVUFBQ0MsU0FBRCxFQUFlO0FBQzNCLGlEQUNLQSxTQURMO0FBRUVDLHFCQUFTLEVBQUVvQixRQUFRLENBQUNILElBQVQsQ0FBYzJCLFFBRjNCO0FBR0V2QyxnQkFBSSxFQUFFZSxRQUFRLENBQUNILElBQVQsQ0FBY1osSUFIdEI7QUFJRUosZ0JBQUksRUFBRW1CLFFBQVEsQ0FBQ0gsSUFBVCxDQUFjNEIsV0FKdEI7QUFLRTNDLGlCQUFLLEVBQUVrQixRQUFRLENBQUNILElBQVQsQ0FBY2YsS0FMdkI7QUFNRUMsaUJBQUssRUFBRWlCLFFBQVEsQ0FBQ0gsSUFBVCxDQUFjZDtBQU52QjtBQVFELFNBVEQ7QUFVRCxPQXpCSCxXQTBCUyxVQUFBb0MsR0FBRyxFQUFJO0FBQ1psRCxlQUFPLENBQUNDLEdBQVIsQ0FBWWlELEdBQVo7QUFDQUYsMkRBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDRCxPQTdCSDtBQStCQWpELGFBQU8sQ0FBQ0MsR0FBUixDQUFZb0MsWUFBWSxDQUFDSyxPQUFiLENBQXFCLE9BQXJCLENBQVo7QUFDRDs7OzZCQTRCQ2UsRyxDQUFJO01BQ0o7QUFBQTs7QUFDQXpELGFBQU8sQ0FBQ0MsR0FBUixDQUFZd0QsR0FBWjtBQUNBekQsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsS0FBTCxDQUFXVSxJQUF2QjtBQUNBYyxrREFBSyxDQUNGZ0MsSUFESCxDQUVJOUIsdUNBQUksQ0FBQ0MsR0FBTCxHQUFTLGtCQUZiLEVBR0k7QUFBRTFCLGNBQU0sRUFBRXNEO0FBQVYsT0FISixFQUlJO0FBQ0VOLGVBQU8sRUFBRTtBQUNQQyx1QkFBYSxFQUFFLFlBQVlmLFlBQVksQ0FBQ0ssT0FBYixDQUFxQixPQUFyQjtBQURwQjtBQURYLE9BSkosRUFVR1osSUFWSCxDQVVRLFVBQUNDLFFBQUQsRUFBYztBQUNsQixZQUFJNEIsQ0FBQyxHQUFHNUIsUUFBUSxDQUFDSCxJQUFULENBQWNnQyxNQUF0QjtBQUNBNUQsZUFBTyxDQUFDQyxHQUFSLENBQVk4QixRQUFaOztBQUVBLFlBQUk0QixDQUFDLElBQUksQ0FBQzVCLFFBQVEsQ0FBQ0gsSUFBVCxDQUFjeUIsYUFBeEIsRUFBdUM7QUFDckMsZ0JBQUksQ0FBQzVDLFFBQUwsQ0FBYyxVQUFDQyxTQUFELEVBQWU7QUFDM0IsbURBQVlBLFNBQVo7QUFBdUJFLGtCQUFJLEVBQUVGLFNBQVMsQ0FBQ0UsSUFBVixHQUFpQixDQUE5QztBQUFpRFQsb0JBQU0sRUFBRTtBQUF6RDtBQUNELFdBRkQ7O0FBR0EyQywrRUFBUSxDQUFDLENBQUQsQ0FBUixDQUpxQyxDQUl4Qjs7QUFDYjlDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaOztBQUNBLGdCQUFJLENBQUNRLFFBQUwsQ0FBYztBQUNaTixrQkFBTSxFQUFFO0FBREksV0FBZDs7QUFHQSxnQkFBSSxDQUFDc0IsWUFBTDtBQUNELFNBVkQsTUFVTyxJQUFJa0MsQ0FBQyxJQUFJNUIsUUFBUSxDQUFDSCxJQUFULENBQWN5QixhQUF2QixFQUFzQztBQUMzQ1AsK0VBQVEsQ0FBQyxDQUFELENBQVI7QUFDQVEsc0JBQVksQ0FBQyxNQUFJLENBQUNwRCxLQUFMLENBQVdrQixDQUFaLENBQVo7QUFDQTRCLDZEQUFNLENBQUNDLElBQVAsQ0FBWSxTQUFaO0FBQ0QsU0FKTSxNQUlBO0FBQ0w7OztBQUdBSCwrRUFBUSxDQUFDLENBQUQsQ0FBUjtBQUNEO0FBQ0YsT0FsQ0g7QUFtQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0UsbUVBQ0csS0FBSzVDLEtBQUwsQ0FBV21CLE1BQVgsS0FBc0IsSUFBdkIsR0FDRixNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUNFLGFBQUssRUFBRTtBQUFFd0MscUJBQVcsRUFBRSxNQUFmO0FBQXVCQyxvQkFBVSxFQUFFLE1BQW5DO0FBQTJDQyxtQkFBUyxFQUFFLFFBQXREO0FBQWdFQyxtQkFBUyxFQUFFO0FBQTNFLFNBRFQ7QUFFRSxpQkFBUyxNQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLRSxNQUFDLDZEQUFEO0FBQVUsVUFBRSxFQUFFLEtBQUs5RCxLQUFMLENBQVdTLFNBQXpCO0FBQW9DLFlBQUksRUFBRSxLQUFLVCxLQUFMLENBQVdVLElBQXJEO0FBQTJELGFBQUssRUFBRSxLQUFLVixLQUFMLENBQVdXLEtBQTdFO0FBQW9GLGFBQUssRUFBRSxLQUFLWCxLQUFMLENBQVdZLEtBQXRHO0FBQTZHLFdBQUcsRUFBRSxLQUFLWixLQUFMLENBQVdlLEdBQTdIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsMkRBQUQ7QUFDRSxjQUFNLEVBQUUsS0FBS08sTUFEZjtBQUVFLGNBQU0sRUFBRSxLQUFLdEIsS0FBTCxDQUFXQyxNQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFNRSxNQUFDLHlEQUFEO0FBQU0sWUFBSSxFQUFFLEtBQUtELEtBQUwsQ0FBV2MsSUFBdkI7QUFDRSxjQUFNLEVBQUUsS0FBS00sTUFEZixDQUVFO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU5GO0FBQUE7QUFBQTtBQUFBLHU4U0FORixFQTBCRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBMUJGLENBREEsQ0FERSxHQWlDQSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFsQ0YsQ0FERjtBQXNDRDs7OztFQW5PZ0IyQyw0Q0FBSyxDQUFDQyxTOztBQXFPVnJFLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dhbWUuYTE5ZWNjM2Q0MzllMzYyMjk5NDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9RdWVzdGlvblwiO1xuaW1wb3J0IEhpbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGludFwiO1xuaW1wb3J0IEFuc0FsZXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0Fuc0FsZXJ0XCJcbmltcG9ydCBBbnN3ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQW5zd2VyXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZW52Lmpzb24nO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyXCJcblxuY2xhc3MgZ2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbnN3ZXI6IFwiXCIsXG4gICAgICBxdWVzdGlvbnM6IFwiXCIsXG4gICAgICBxc05vOiAxLFxuICAgICAgYXVkaW86IFwiXCIsXG4gICAgICBpbWFnZTogXCJcIixcbiAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgaGludDogXCJcIixcbiAgICAgIGRheTogXCJcIixcbiAgICAgIGVuZDpcIlwiLFxuICAgICAgbWVzc2FnZTpcIlwiLFxuICAgICAgdjpcIlwiLFxuICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5zdWJtaXQgPSB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuc3VibWl0MiA9IHRoaXMuc3VibWl0Mi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrQW5zID0gdGhpcy5jaGVja0Fucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UXVlc3Rpb25zID0gdGhpcy5nZXRRdWVzdGlvbnMuYmluZCh0aGlzKTtcbiAgfVxuICBcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBcbiAgICBheGlvc1xuICAgICAgLmdldChkYXRhLmFwaStcIi9hcGkvc3RhdHVzXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHZhciB0ZW1wMz1uZXcgRGF0ZShyZXNwb25zZS5kYXRhLnN0YXJ0X3RpbWUpO1xuICAgICAgICAgICAgbGV0IHRlbXAyID0gbmV3IERhdGUocmVzcG9uc2UuZGF0YS5lbmRfdGltZSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW5kJyx0ZW1wMi5nZXRUaW1lKCkgKyAodGVtcDIuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhcnRcIiwgdGVtcDMuZ2V0VGltZSgpICsgKHRlbXAzLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xuICAgICAgICAgICAgbGV0IHRlbXA9bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpLURhdGUubm93KCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRheVwiLHJlc3BvbnNlLmRhdGEuY3VycmVudF9kYXkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGVtcCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Y6c2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICBBbnNBbGVydCg5KTtcbiAgICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpPT0zIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9maW5hbGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSx0ZW1wKX0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXk6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpLCBlbmQ6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpfSwoKT0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKT09MyAmJiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpIDwgRGF0ZS5ub3coKSkpXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZ2FtZV9maW5hbGUnKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRheSt0aGlzLnN0YXRlLmVuZCk7XG4gICAgICAgICAgICAgIGlmICghKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpKSB7XG4gICAgICAgICAgICAgICAgQW5zQWxlcnQoOClcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYgKCEobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0JykgPD0gRGF0ZS5ub3coKSkpIHtcbiAgICAgICAgICAgICAgICBBbnNBbGVydCg4KVxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIllPT09PT09PXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZWQ6IHRydWV9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvZXJyb3InKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgXG4gIH1cblxuICBnZXRRdWVzdGlvbnMoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5xc05vKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKTsgLy9nZXQgcXVlc3Rpb25zIGZyb20gYXBpIGFuZCB1cGRhdGVzIHN0YXRlXG5cbiAgICBheGlvc1xuICAgICAgLmdldChkYXRhLmFwaStcIi9hcGkvcXVlc3Rpb25cIiwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIllPT08rXCIrcmVzcG9uc2UpO1xuICAgICAgICAvL2lmIChyZXNwb25zZS5kYXRhLmVycm9yKSBSb3V0ZXIucHVzaChcIi9maW5hbGUyXCIpO1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKVxuICAgICAgICB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudik7XG4gICAgICAgICAgXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZmluYWxlXCIpO1xuICAgICAgICB9IFxuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgcXVlc3Rpb25zOiByZXNwb25zZS5kYXRhLnF1ZXN0aW9uLFxuICAgICAgICAgICAgaGludDogcmVzcG9uc2UuZGF0YS5oaW50LFxuICAgICAgICAgICAgcXNObzogcmVzcG9uc2UuZGF0YS5xdWVzdGlvbl9ubyxcbiAgICAgICAgICAgIGF1ZGlvOiByZXNwb25zZS5kYXRhLmF1ZGlvLFxuICAgICAgICAgICAgaW1hZ2U6IHJlc3BvbnNlLmRhdGEuaW1hZ2VcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yJylcbiAgICAgIH0pO1xuICAgICAgXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XG4gIH1cblxuICBzdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuICAgIFxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuXG4gICAgICB0aGlzLmNoZWNrQW5zKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICAgIFxuICB9O1xuICAvLyBzdWJtaXQyID0gKCkgPT4ge1xuICAvLyAgIC8vc2VuZCBmaW5hbCBhbnN3ZXIgZm9yIGNoZWNraW5nXG5cbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFuc3dlcik7XG5cbiAgLy8gICB0aGlzLmNoZWNrQW5zKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgLy8gfTtcblxuICBjaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAvL2tlZXAgdXBkYXRpbmcgYW5zd2VyXG4gICAgbGV0IGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGFuc3dlcjogZSB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGNoZWNrQW5zKFxuICAgIGFucyAvL2NoZWNrIGFuc3dlciBmcm9tIGFwaSBhbmQgc2VuZCBmb3IgY29ycmVjdCBhbGVydFxuICApIHtcbiAgICBjb25zb2xlLmxvZyhhbnMpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucXNObyk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFxuICAgICAgICBkYXRhLmFwaStcIi9hcGkvY2hlY2thbnN3ZXJcIixcbiAgICAgICAgeyBhbnN3ZXI6IGFucyB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBsZXQgciA9IHJlc3BvbnNlLmRhdGEucmVzdWx0O1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgaWYgKHIgJiYgIXJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBxc05vOiBwcmV2U3RhdGUucXNObyArIDEsIGFuc3dlcjogXCJcIiB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIEFuc0FsZXJ0KDEpOyAvL3doZXJlIGRvZXMgdGhlIGVmZmluZyBjb250cm9sIGdvIGFmdGVyIHRoaXM/XG4gICAgICAgICAgY29uc29sZS5sb2coXCJTQU5UQVwiKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFuc3dlcjogXCJcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgIH0gZWxzZSBpZiAociAmJiByZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpIHtcbiAgICAgICAgICBBbnNBbGVydCgxKTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdGF0ZS52KTtcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9maW5hbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyp0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFuc3dlcjogXCJcIlxuICAgICAgICAgIH0pOyovXG4gICAgICAgICAgQW5zQWxlcnQoMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgeyAodGhpcy5zdGF0ZS5sb2FkZWQgPT09IHRydWUpID9cbiAgICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcImF1dG9cIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWluSGVpZ2h0OiBcIjEwMHZoLTEwMHB4XCIgfX1cbiAgICAgICAgcXVlc3Rpb25zXG4gICAgICA+XG5cbiAgICAgICAgPFF1ZXN0aW9uIHFzPXt0aGlzLnN0YXRlLnF1ZXN0aW9uc30gcXNObz17dGhpcy5zdGF0ZS5xc05vfSBhdWRpbz17dGhpcy5zdGF0ZS5hdWRpb30gaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2V9IGRheT17dGhpcy5zdGF0ZS5kYXl9IC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFuc3dlclxuICAgICAgICAgICAgY2hhbmdlPXt0aGlzLmNoYW5nZX1cbiAgICAgICAgICAgIGFuc3dlcj17dGhpcy5zdGF0ZS5hbnN3ZXJ9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxIaW50IGhpbnQ9e3RoaXMuc3RhdGUuaGludH1cbiAgICAgICAgICAgIHN1Ym1pdD17dGhpcy5zdWJtaXR9XG4gICAgICAgICAgICAvLyBzdWJtaXQyPXt0aGlzLnN1Ym1pdDJ9XG5cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyQnVmZic+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgICA6IDxMb2FkZXIvPiB9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBnYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=