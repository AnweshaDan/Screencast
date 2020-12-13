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
      event.preventDefault();

      _this.checkAns(_this.state.answer);

      _this.setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          answer: ""
        });
      });
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
        var temp3 = new Date(response.data.start_time);
        var temp2 = new Date(response.data.end_time);
        localStorage.setItem('end', temp2.getTime() + temp2.getTimezoneOffset() * 60000);
        localStorage.setItem("start", temp3.getTime() + temp3.getTimezoneOffset() * 60000);
        var temp = localStorage.getItem('end') - Date.now();
        localStorage.setItem("day", response.data.current_day);

        _this2.setState({
          v: setTimeout(function () {
            Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(9);

            if (localStorage.getItem('day') === 3) {
              next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/finale');
            } else if (response.data.error) {
              next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/error');
            } else {
              next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/finale');
            }
          }, temp)
        });

        _this2.setState({
          day: localStorage.getItem('day'),
          end: localStorage.getItem('end')
        }, function () {
          if (localStorage.getItem('day') == 3 && localStorage.getItem('end') < Date.now()) next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/finale');

          if (!localStorage.getItem("email")) {
            Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(8);
            next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/');
          } else if (!(localStorage.getItem('start') <= Date.now())) {
            Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(8);
            next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push("/");
          } else {
            _this2.getQuestions();
          }
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

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_env_json__WEBPACK_IMPORTED_MODULE_15__.api + "/api/question", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(function (response) {
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

        window.scrollTo(0, 0);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        _this3.setState({
          loaded: true
        });
      })["catch"](function (err) {
        console.log(err);
        next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/error');
      });
    }
  }, {
    key: "checkAns",
    value: function checkAns(ans //check answer from api and send for correct alert
    ) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_env_json__WEBPACK_IMPORTED_MODULE_15__.api + "/api/checkanswer", {
        answer: ans
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(function (response) {
        var r = response.data.result;

        if (r && !response.data.quiz_finished) {
          _this4.setState(function (prevState) {
            return _objectSpread(_objectSpread({}, prevState), {}, {
              qsNo: prevState.qsNo + 1,
              answer: ""
            });
          });

          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(1);

          _this4.setState({
            answer: ""
          });

          _this4.getQuestions();
        } else if (r && response.data.quiz_finished) {
          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(1);
          clearTimeout(_this4.state.v);
          next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push("/finale");
        } else {
          _this4.setState({
            answer: ""
          });

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
          lineNumber: 181,
          columnNumber: 11
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
          lineNumber: 182,
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
          lineNumber: 186,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "jsx-4141458270",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 15
        }
      }, __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        change: this.change,
        answer: this.state.answer,
        submit: this.submit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 17
        }
      }), __jsx(_components_Hint__WEBPACK_IMPORTED_MODULE_11__["default"], {
        hint: this.state.hint,
        submit: this.submit // submit2={this.submit2}
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 17
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4141458270",
        __self: this
      }, "div.jsx-4141458270{text-align:center;margin:5px;margin-bottom:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jpc2hhdjQxMDEvU2NyZWVuY2FzdC9wYWdlcy9nYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9NNEIsQUFHaUMsa0JBQ1AsV0FDUSxvQkFDckIiLCJmaWxlIjoiL2hvbWUvcmlzaGF2NDEwMS9TY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBIaW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hpbnRcIjtcbmltcG9ydCBBbnNBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnNBbGVydFwiO1xuaW1wb3J0IEFuc3dlciBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnN3ZXJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9lbnYuanNvbic7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcblxuY2xhc3MgZ2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbnN3ZXI6IFwiXCIsXG4gICAgICBxdWVzdGlvbnM6IFwiXCIsXG4gICAgICBxc05vOiAxLFxuICAgICAgYXVkaW86IFwiXCIsXG4gICAgICBpbWFnZTogXCJcIixcbiAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgaGludDogXCJcIixcbiAgICAgIGRheTogXCJcIixcbiAgICAgIGVuZDogXCJcIixcbiAgICAgIG1lc3NhZ2U6IFwiXCIsXG4gICAgICB2OiBcIlwiLFxuICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5zdWJtaXQgPSB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuc3VibWl0MiA9IHRoaXMuc3VibWl0Mi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrQW5zID0gdGhpcy5jaGVja0Fucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UXVlc3Rpb25zID0gdGhpcy5nZXRRdWVzdGlvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGRhdGEuYXBpICsgXCIvYXBpL3N0YXR1c1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHZhciB0ZW1wMyA9IG5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuc3RhcnRfdGltZSk7XG4gICAgICAgIGxldCB0ZW1wMiA9IG5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuZW5kX3RpbWUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW5kJywgdGVtcDIuZ2V0VGltZSgpICsgKHRlbXAyLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhcnRcIiwgdGVtcDMuZ2V0VGltZSgpICsgKHRlbXAzLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xuICAgICAgICBsZXQgdGVtcCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKSAtIERhdGUubm93KCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF5XCIsIHJlc3BvbnNlLmRhdGEuY3VycmVudF9kYXkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2OiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIEFuc0FsZXJ0KDkpO1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSA9PT0gMykge1xuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHJlc3BvbnNlLmRhdGEuZXJyb3Ipe1xuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRlbXApXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXk6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSwgZW5kOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykgfSwgKCkgPT4ge1xuICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF5JykgPT0gMyAmJiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpIDwgRGF0ZS5ub3coKSkpXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpXG4gICAgICAgICAgaWYgKCEobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKSkpIHtcbiAgICAgICAgICAgIEFuc0FsZXJ0KDgpXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICghKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpIDw9IERhdGUubm93KCkpKSB7XG4gICAgICAgICAgICBBbnNBbGVydCg4KVxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yJylcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGRhdGEuYXBpICsgXCIvYXBpL3F1ZXN0aW9uXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnYpO1xuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2ZpbmFsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgcXVlc3Rpb25zOiByZXNwb25zZS5kYXRhLnF1ZXN0aW9uLFxuICAgICAgICAgICAgaGludDogcmVzcG9uc2UuZGF0YS5oaW50LFxuICAgICAgICAgICAgcXNObzogcmVzcG9uc2UuZGF0YS5xdWVzdGlvbl9ubyxcbiAgICAgICAgICAgIGF1ZGlvOiByZXNwb25zZS5kYXRhLmF1ZGlvLFxuICAgICAgICAgICAgaW1hZ2U6IHJlc3BvbnNlLmRhdGEuaW1hZ2VcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yJylcbiAgICAgIH0pO1xuICB9XG5cbiAgc3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgLy9zZW5kIGZpbmFsIGFuc3dlciBmb3IgY2hlY2tpbmdcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGFuc3dlcjogXCJcIiB9O1xuICAgIH0pO1xuICB9O1xuICAvLyBzdWJtaXQyID0gKCkgPT4ge1xuICAvLyAgIC8vc2VuZCBmaW5hbCBhbnN3ZXIgZm9yIGNoZWNraW5nXG4gIC8vICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAvLyAgIHRoaXMuY2hlY2tBbnModGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAvLyB9O1xuXG4gIGNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIC8va2VlcCB1cGRhdGluZyBhbnN3ZXJcbiAgICBsZXQgZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgYW5zd2VyOiBlIH07XG4gICAgfSk7XG4gIH07XG5cbiAgY2hlY2tBbnMoXG4gICAgYW5zIC8vY2hlY2sgYW5zd2VyIGZyb20gYXBpIGFuZCBzZW5kIGZvciBjb3JyZWN0IGFsZXJ0XG4gICkge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgZGF0YS5hcGkgKyBcIi9hcGkvY2hlY2thbnN3ZXJcIixcbiAgICAgICAgeyBhbnN3ZXI6IGFucyB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBsZXQgciA9IHJlc3BvbnNlLmRhdGEucmVzdWx0O1xuICAgICAgICBpZiAociAmJiAhcmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIHFzTm86IHByZXZTdGF0ZS5xc05vICsgMSwgYW5zd2VyOiBcIlwiIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgQW5zQWxlcnQoMSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICAgICAgICB9IGVsc2UgaWYgKHIgJiYgcmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSB7XG4gICAgICAgICAgQW5zQWxlcnQoMSk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudik7XG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZmluYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYW5zd2VyOiBcIlwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgQW5zQWxlcnQoMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7ICh0aGlzLnN0YXRlLmxvYWRlZCA9PT0gdHJ1ZSkgP1xuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcImF1dG9cIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWluSGVpZ2h0OiBcIjEwMHZoLTEwMHB4XCIgfX1cbiAgICAgICAgICAgICAgcXVlc3Rpb25zXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxRdWVzdGlvbiBxcz17dGhpcy5zdGF0ZS5xdWVzdGlvbnN9IHFzTm89e3RoaXMuc3RhdGUucXNOb30gYXVkaW89e3RoaXMuc3RhdGUuYXVkaW99IGltYWdlPXt0aGlzLnN0YXRlLmltYWdlfSBkYXk9e3RoaXMuc3RhdGUuZGF5fSAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxBbnN3ZXJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZT17dGhpcy5jaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBhbnN3ZXI9e3RoaXMuc3RhdGUuYW5zd2VyfVxuICAgICAgICAgICAgICAgICAgc3VibWl0PXt0aGlzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxIaW50IGhpbnQ9e3RoaXMuc3RhdGUuaGludH1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdD17dGhpcy5zdWJtaXR9XG4gICAgICAgICAgICAgICAgLy8gc3VibWl0Mj17dGhpcy5zdWJtaXQyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyQnVmZic+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICA6IDxMb2FkZXIgLz59XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBnYW1lOyJdfQ== */\n/*@ sourceURL=/home/rishav4101/Screencast/pages/game.js */")), __jsx("div", {
        className: "footerBuff",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 15
        }
      }))) : __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS5qcyJdLCJuYW1lcyI6WyJnYW1lIiwicHJvcHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2hlY2tBbnMiLCJzdGF0ZSIsImFuc3dlciIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicXVlc3Rpb25zIiwicXNObyIsImF1ZGlvIiwiaW1hZ2UiLCJpc0xvZ2dlZEluIiwiaGludCIsImRheSIsImVuZCIsIm1lc3NhZ2UiLCJ2IiwibG9hZGVkIiwic3VibWl0IiwiYmluZCIsImNoYW5nZSIsImdldFF1ZXN0aW9ucyIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsImFwaSIsInRoZW4iLCJyZXNwb25zZSIsInRlbXAzIiwiRGF0ZSIsInN0YXJ0X3RpbWUiLCJ0ZW1wMiIsImVuZF90aW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInRlbXAiLCJnZXRJdGVtIiwibm93IiwiY3VycmVudF9kYXkiLCJzZXRUaW1lb3V0IiwiQW5zQWxlcnQiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJxdWl6X2ZpbmlzaGVkIiwiY2xlYXJUaW1lb3V0IiwicXVlc3Rpb24iLCJxdWVzdGlvbl9ubyIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJhbnMiLCJwb3N0IiwiciIsInJlc3VsdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsInRleHRBbGlnbiIsIm1pbkhlaWdodCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVN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SyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQXZCRixDQURGLENBREEsR0E4QkUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBL0JOLENBREY7QUFtQ0Q7Ozs7RUF6TWdCaUQsNENBQUssQ0FBQ0MsUzs7QUEyTVZ6RSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYW1lLmIzYjBlY2M1M2E4ZmZkODgxYjc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBIaW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hpbnRcIjtcbmltcG9ydCBBbnNBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnNBbGVydFwiO1xuaW1wb3J0IEFuc3dlciBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnN3ZXJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9lbnYuanNvbic7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcblxuY2xhc3MgZ2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbnN3ZXI6IFwiXCIsXG4gICAgICBxdWVzdGlvbnM6IFwiXCIsXG4gICAgICBxc05vOiAxLFxuICAgICAgYXVkaW86IFwiXCIsXG4gICAgICBpbWFnZTogXCJcIixcbiAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgaGludDogXCJcIixcbiAgICAgIGRheTogXCJcIixcbiAgICAgIGVuZDogXCJcIixcbiAgICAgIG1lc3NhZ2U6IFwiXCIsXG4gICAgICB2OiBcIlwiLFxuICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5zdWJtaXQgPSB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuc3VibWl0MiA9IHRoaXMuc3VibWl0Mi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrQW5zID0gdGhpcy5jaGVja0Fucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UXVlc3Rpb25zID0gdGhpcy5nZXRRdWVzdGlvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGRhdGEuYXBpICsgXCIvYXBpL3N0YXR1c1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHZhciB0ZW1wMyA9IG5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuc3RhcnRfdGltZSk7XG4gICAgICAgIGxldCB0ZW1wMiA9IG5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuZW5kX3RpbWUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW5kJywgdGVtcDIuZ2V0VGltZSgpICsgKHRlbXAyLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhcnRcIiwgdGVtcDMuZ2V0VGltZSgpICsgKHRlbXAzLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xuICAgICAgICBsZXQgdGVtcCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKSAtIERhdGUubm93KCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF5XCIsIHJlc3BvbnNlLmRhdGEuY3VycmVudF9kYXkpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2OiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIEFuc0FsZXJ0KDkpO1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSA9PT0gMykge1xuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHJlc3BvbnNlLmRhdGEuZXJyb3Ipe1xuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRlbXApXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXk6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSwgZW5kOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykgfSwgKCkgPT4ge1xuICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF5JykgPT0gMyAmJiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpIDwgRGF0ZS5ub3coKSkpXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpXG4gICAgICAgICAgaWYgKCEobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKSkpIHtcbiAgICAgICAgICAgIEFuc0FsZXJ0KDgpXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICghKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpIDw9IERhdGUubm93KCkpKSB7XG4gICAgICAgICAgICBBbnNBbGVydCg4KVxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yJylcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGRhdGEuYXBpICsgXCIvYXBpL3F1ZXN0aW9uXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnYpO1xuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2ZpbmFsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgcXVlc3Rpb25zOiByZXNwb25zZS5kYXRhLnF1ZXN0aW9uLFxuICAgICAgICAgICAgaGludDogcmVzcG9uc2UuZGF0YS5oaW50LFxuICAgICAgICAgICAgcXNObzogcmVzcG9uc2UuZGF0YS5xdWVzdGlvbl9ubyxcbiAgICAgICAgICAgIGF1ZGlvOiByZXNwb25zZS5kYXRhLmF1ZGlvLFxuICAgICAgICAgICAgaW1hZ2U6IHJlc3BvbnNlLmRhdGEuaW1hZ2VcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRlZDogdHJ1ZSB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yJylcbiAgICAgIH0pO1xuICB9XG5cbiAgc3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgLy9zZW5kIGZpbmFsIGFuc3dlciBmb3IgY2hlY2tpbmdcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGFuc3dlcjogXCJcIiB9O1xuICAgIH0pO1xuICB9O1xuICAvLyBzdWJtaXQyID0gKCkgPT4ge1xuICAvLyAgIC8vc2VuZCBmaW5hbCBhbnN3ZXIgZm9yIGNoZWNraW5nXG4gIC8vICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAvLyAgIHRoaXMuY2hlY2tBbnModGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAvLyB9O1xuXG4gIGNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIC8va2VlcCB1cGRhdGluZyBhbnN3ZXJcbiAgICBsZXQgZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgYW5zd2VyOiBlIH07XG4gICAgfSk7XG4gIH07XG5cbiAgY2hlY2tBbnMoXG4gICAgYW5zIC8vY2hlY2sgYW5zd2VyIGZyb20gYXBpIGFuZCBzZW5kIGZvciBjb3JyZWN0IGFsZXJ0XG4gICkge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgZGF0YS5hcGkgKyBcIi9hcGkvY2hlY2thbnN3ZXJcIixcbiAgICAgICAgeyBhbnN3ZXI6IGFucyB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBsZXQgciA9IHJlc3BvbnNlLmRhdGEucmVzdWx0O1xuICAgICAgICBpZiAociAmJiAhcmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIHFzTm86IHByZXZTdGF0ZS5xc05vICsgMSwgYW5zd2VyOiBcIlwiIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgQW5zQWxlcnQoMSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICAgICAgICB9IGVsc2UgaWYgKHIgJiYgcmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSB7XG4gICAgICAgICAgQW5zQWxlcnQoMSk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudik7XG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZmluYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYW5zd2VyOiBcIlwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgQW5zQWxlcnQoMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7ICh0aGlzLnN0YXRlLmxvYWRlZCA9PT0gdHJ1ZSkgP1xuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcImF1dG9cIiwgbWFyZ2luTGVmdDogXCJhdXRvXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWluSGVpZ2h0OiBcIjEwMHZoLTEwMHB4XCIgfX1cbiAgICAgICAgICAgICAgcXVlc3Rpb25zXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxRdWVzdGlvbiBxcz17dGhpcy5zdGF0ZS5xdWVzdGlvbnN9IHFzTm89e3RoaXMuc3RhdGUucXNOb30gYXVkaW89e3RoaXMuc3RhdGUuYXVkaW99IGltYWdlPXt0aGlzLnN0YXRlLmltYWdlfSBkYXk9e3RoaXMuc3RhdGUuZGF5fSAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxBbnN3ZXJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZT17dGhpcy5jaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBhbnN3ZXI9e3RoaXMuc3RhdGUuYW5zd2VyfVxuICAgICAgICAgICAgICAgICAgc3VibWl0PXt0aGlzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxIaW50IGhpbnQ9e3RoaXMuc3RhdGUuaGludH1cbiAgICAgICAgICAgICAgICAgIHN1Ym1pdD17dGhpcy5zdWJtaXR9XG4gICAgICAgICAgICAgICAgLy8gc3VibWl0Mj17dGhpcy5zdWJtaXQyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyQnVmZic+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICA6IDxMb2FkZXIgLz59XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBnYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=