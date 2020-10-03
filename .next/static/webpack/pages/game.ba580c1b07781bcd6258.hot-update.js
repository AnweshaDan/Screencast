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
      console.log(_this.state.answer);

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
          lineNumber: 206,
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
          lineNumber: 207,
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
          lineNumber: 212,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-4141458270",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 9
        }
      }, __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        change: this.change,
        answer: this.state.answer,
        submit: this.submit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }
      }), __jsx(_components_Hint__WEBPACK_IMPORTED_MODULE_11__["default"], {
        hint: this.state.hint,
        submit: this.submit // submit2={this.submit2}
        ,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4141458270",
        __self: this
      }, "div.jsx-4141458270{text-align:center;margin:5px;margin-bottom:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jpc2hhdjQxMDEvU2NyZWVuY2FzdC9wYWdlcy9nYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlPc0IsQUFHaUMsa0JBQ1AsV0FDUSxvQkFDckIiLCJmaWxlIjoiL2hvbWUvcmlzaGF2NDEwMS9TY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBIaW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hpbnRcIjtcbmltcG9ydCBBbnNBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnNBbGVydFwiO1xuaW1wb3J0IEFuc3dlciBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnN3ZXJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9lbnYuanNvbic7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcblxuY2xhc3MgZ2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbnN3ZXI6IFwiXCIsXG4gICAgICBxdWVzdGlvbnM6IFwiXCIsXG4gICAgICBxc05vOiAxLFxuICAgICAgYXVkaW86IFwiXCIsXG4gICAgICBpbWFnZTogXCJcIixcbiAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgaGludDogXCJcIixcbiAgICAgIGRheTogXCJcIixcbiAgICAgIGVuZDpcIlwiLFxuICAgICAgbWVzc2FnZTpcIlwiLFxuICAgICAgdjpcIlwiLFxuICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5zdWJtaXQgPSB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuc3VibWl0MiA9IHRoaXMuc3VibWl0Mi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrQW5zID0gdGhpcy5jaGVja0Fucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UXVlc3Rpb25zID0gdGhpcy5nZXRRdWVzdGlvbnMuYmluZCh0aGlzKTtcbiAgfVxuICBcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBcbiAgICBheGlvc1xuICAgICAgLmdldChkYXRhLmFwaStcIi9hcGkvc3RhdHVzXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHZhciB0ZW1wMz1uZXcgRGF0ZShyZXNwb25zZS5kYXRhLnN0YXJ0X3RpbWUpO1xuICAgICAgICAgICAgbGV0IHRlbXAyID0gbmV3IERhdGUocmVzcG9uc2UuZGF0YS5lbmRfdGltZSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW5kJyx0ZW1wMi5nZXRUaW1lKCkgKyAodGVtcDIuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RhcnRcIiwgdGVtcDMuZ2V0VGltZSgpICsgKHRlbXAzLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xuICAgICAgICAgICAgbGV0IHRlbXA9bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpLURhdGUubm93KCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRheVwiLHJlc3BvbnNlLmRhdGEuY3VycmVudF9kYXkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGVtcCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Y6c2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICBBbnNBbGVydCg5KTtcbiAgICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpPT0zIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9maW5hbGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSx0ZW1wKX0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXk6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpLCBlbmQ6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpfSwoKT0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKT09MyAmJiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpIDwgRGF0ZS5ub3coKSkpXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZ2FtZV9maW5hbGUnKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRheSt0aGlzLnN0YXRlLmVuZCk7XG4gICAgICAgICAgICAgIGlmICghKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpKSB7XG4gICAgICAgICAgICAgICAgQW5zQWxlcnQoOClcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYgKCEobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0JykgPD0gRGF0ZS5ub3coKSkpIHtcbiAgICAgICAgICAgICAgICBBbnNBbGVydCg4KVxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIllPT09PT09PXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZWQ6IHRydWV9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvZXJyb3InKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgXG4gIH1cblxuICBnZXRRdWVzdGlvbnMoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5xc05vKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKTsgLy9nZXQgcXVlc3Rpb25zIGZyb20gYXBpIGFuZCB1cGRhdGVzIHN0YXRlXG5cbiAgICBheGlvc1xuICAgICAgLmdldChkYXRhLmFwaStcIi9hcGkvcXVlc3Rpb25cIiwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIllPT08rXCIrcmVzcG9uc2UpO1xuICAgICAgICAvL2lmIChyZXNwb25zZS5kYXRhLmVycm9yKSBSb3V0ZXIucHVzaChcIi9maW5hbGUyXCIpO1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKVxuICAgICAgICB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudik7XG4gICAgICAgICAgXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZmluYWxlXCIpO1xuICAgICAgICB9IFxuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgcXVlc3Rpb25zOiByZXNwb25zZS5kYXRhLnF1ZXN0aW9uLFxuICAgICAgICAgICAgaGludDogcmVzcG9uc2UuZGF0YS5oaW50LFxuICAgICAgICAgICAgcXNObzogcmVzcG9uc2UuZGF0YS5xdWVzdGlvbl9ubyxcbiAgICAgICAgICAgIGF1ZGlvOiByZXNwb25zZS5kYXRhLmF1ZGlvLFxuICAgICAgICAgICAgaW1hZ2U6IHJlc3BvbnNlLmRhdGEuaW1hZ2VcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yJylcbiAgICAgIH0pO1xuICAgICAgXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XG4gIH1cblxuICBzdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuXG4gICAgICB0aGlzLmNoZWNrQW5zKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGFuc3dlcjogXCJcIiB9O1xuICAgICAgfSk7XG4gICAgXG4gIH07XG4gIC8vIHN1Ym1pdDIgPSAoKSA9PiB7XG4gIC8vICAgLy9zZW5kIGZpbmFsIGFuc3dlciBmb3IgY2hlY2tpbmdcblxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VyKTtcblxuICAvLyAgIHRoaXMuY2hlY2tBbnModGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAvLyB9O1xuXG4gIGNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIC8va2VlcCB1cGRhdGluZyBhbnN3ZXJcbiAgICBsZXQgZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgYW5zd2VyOiBlIH07XG4gICAgfSk7XG4gIH07XG5cbiAgY2hlY2tBbnMoXG4gICAgYW5zIC8vY2hlY2sgYW5zd2VyIGZyb20gYXBpIGFuZCBzZW5kIGZvciBjb3JyZWN0IGFsZXJ0XG4gICkge1xuICAgIGNvbnNvbGUubG9nKGFucyk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5xc05vKTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoXG4gICAgICAgIGRhdGEuYXBpK1wiL2FwaS9jaGVja2Fuc3dlclwiLFxuICAgICAgICB7IGFuc3dlcjogYW5zIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIiksXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGxldCByID0gcmVzcG9uc2UuZGF0YS5yZXN1bHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICBpZiAociAmJiAhcmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIHFzTm86IHByZXZTdGF0ZS5xc05vICsgMSwgYW5zd2VyOiBcIlwiIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgQW5zQWxlcnQoMSk7IC8vd2hlcmUgZG9lcyB0aGUgZWZmaW5nIGNvbnRyb2wgZ28gYWZ0ZXIgdGhpcz9cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNBTlRBXCIpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYW5zd2VyOiBcIlwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyICYmIHJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZCkge1xuICAgICAgICAgIEFuc0FsZXJ0KDEpO1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnYpO1xuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2ZpbmFsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFuc3dlcjogXCJcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIEFuc0FsZXJ0KDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIHsgKHRoaXMuc3RhdGUubG9hZGVkID09PSB0cnVlKSA/XG4gICAgICA8TGF5b3V0PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCJhdXRvXCIsIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1pbkhlaWdodDogXCIxMDB2aC0xMDBweFwiIH19XG4gICAgICAgIHF1ZXN0aW9uc1xuICAgICAgPlxuXG4gICAgICAgIDxRdWVzdGlvbiBxcz17dGhpcy5zdGF0ZS5xdWVzdGlvbnN9IHFzTm89e3RoaXMuc3RhdGUucXNOb30gYXVkaW89e3RoaXMuc3RhdGUuYXVkaW99IGltYWdlPXt0aGlzLnN0YXRlLmltYWdlfSBkYXk9e3RoaXMuc3RhdGUuZGF5fSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBbnN3ZXJcbiAgICAgICAgICAgIGNoYW5nZT17dGhpcy5jaGFuZ2V9XG4gICAgICAgICAgICBhbnN3ZXI9e3RoaXMuc3RhdGUuYW5zd2VyfVxuICAgICAgICAgICAgc3VibWl0PXt0aGlzLnN1Ym1pdH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEhpbnQgaGludD17dGhpcy5zdGF0ZS5oaW50fVxuICAgICAgICAgICAgc3VibWl0PXt0aGlzLnN1Ym1pdH1cbiAgICAgICAgICAgIC8vIHN1Ym1pdDI9e3RoaXMuc3VibWl0Mn1cblxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJCdWZmJz5cbiAgICAgIFxuICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDogPExvYWRlci8+IH1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGdhbWU7Il19 */\n/*@ sourceURL=/home/rishav4101/Screencast/pages/game.js */")), __jsx("div", {
        className: "footerBuff",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 9
        }
      }))) : __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS5qcyJdLCJuYW1lcyI6WyJnYW1lIiwicHJvcHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiYW5zd2VyIiwiY2hlY2tBbnMiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInF1ZXN0aW9ucyIsInFzTm8iLCJhdWRpbyIsImltYWdlIiwiaXNMb2dnZWRJbiIsImhpbnQiLCJkYXkiLCJlbmQiLCJtZXNzYWdlIiwidiIsImxvYWRlZCIsInN1Ym1pdCIsImJpbmQiLCJjaGFuZ2UiLCJnZXRRdWVzdGlvbnMiLCJheGlvcyIsImdldCIsImRhdGEiLCJhcGkiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZW1wMyIsIkRhdGUiLCJzdGFydF90aW1lIiwidGVtcDIiLCJlbmRfdGltZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRUaW1lIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ0ZW1wIiwiZ2V0SXRlbSIsIm5vdyIsImN1cnJlbnRfZGF5Iiwic2V0VGltZW91dCIsIkFuc0FsZXJ0IiwiZXJyb3IiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJxdWl6X2ZpbmlzaGVkIiwiY2xlYXJUaW1lb3V0IiwicXVlc3Rpb24iLCJxdWVzdGlvbl9ubyIsImFucyIsInBvc3QiLCJyIiwicmVzdWx0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwidGV4dEFsaWduIiwibWluSGVpZ2h0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1F1ZXN0aW9uXCI7XG5pbXBvcnQgSGludCBmcm9tIFwiLi4vY29tcG9uZW50cy9IaW50XCI7XG5pbXBvcnQgQW5zQWxlcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQW5zQWxlcnRcIjtcbmltcG9ydCBBbnN3ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQW5zd2VyXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZW52Lmpzb24nO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5cbmNsYXNzIGdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW5zd2VyOiBcIlwiLFxuICAgICAgcXVlc3Rpb25zOiBcIlwiLFxuICAgICAgcXNObzogMSxcbiAgICAgIGF1ZGlvOiBcIlwiLFxuICAgICAgaW1hZ2U6IFwiXCIsXG4gICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgIGhpbnQ6IFwiXCIsXG4gICAgICBkYXk6IFwiXCIsXG4gICAgICBlbmQ6XCJcIixcbiAgICAgIG1lc3NhZ2U6XCJcIixcbiAgICAgIHY6XCJcIixcbiAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMuc3VibWl0ID0gdGhpcy5zdWJtaXQuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLnN1Ym1pdDIgPSB0aGlzLnN1Ym1pdDIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0FucyA9IHRoaXMuY2hlY2tBbnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFF1ZXN0aW9ucyA9IHRoaXMuZ2V0UXVlc3Rpb25zLmJpbmQodGhpcyk7XG4gIH1cbiAgXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoZGF0YS5hcGkrXCIvYXBpL3N0YXR1c1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB2YXIgdGVtcDM9bmV3IERhdGUocmVzcG9uc2UuZGF0YS5zdGFydF90aW1lKTtcbiAgICAgICAgICAgIGxldCB0ZW1wMiA9IG5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuZW5kX3RpbWUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VuZCcsdGVtcDIuZ2V0VGltZSgpICsgKHRlbXAyLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXJ0XCIsIHRlbXAzLmdldFRpbWUoKSArICh0ZW1wMy5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKTtcbiAgICAgICAgICAgIGxldCB0ZW1wPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKS1EYXRlLm5vdygpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXlcIixyZXNwb25zZS5kYXRhLmN1cnJlbnRfZGF5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2OnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgQW5zQWxlcnQoOSk7XG4gICAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKT09MyB8fCByZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9maW5hbGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZmluYWxlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sdGVtcCl9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF5OmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSwgZW5kOmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKX0sKCk9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF5Jyk9PTMgJiYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKSA8IERhdGUubm93KCkpKVxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2dhbWVfZmluYWxlJylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXkrdGhpcy5zdGF0ZS5lbmQpO1xuICAgICAgICAgICAgICBpZiAoIShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpKSkge1xuICAgICAgICAgICAgICAgIEFuc0FsZXJ0KDgpXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmICghKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpIDw9IERhdGUubm93KCkpKSB7XG4gICAgICAgICAgICAgICAgQW5zQWxlcnQoOClcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZT09PT09PT1wiKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGVkOiB0cnVlfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Vycm9yJylcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIFxuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucXNObyk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7IC8vZ2V0IHF1ZXN0aW9ucyBmcm9tIGFwaSBhbmQgdXBkYXRlcyBzdGF0ZVxuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoZGF0YS5hcGkrXCIvYXBpL3F1ZXN0aW9uXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJZT09PK1wiK3Jlc3BvbnNlKTtcbiAgICAgICAgLy9pZiAocmVzcG9uc2UuZGF0YS5lcnJvcikgUm91dGVyLnB1c2goXCIvZmluYWxlMlwiKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZClcbiAgICAgICAge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnYpO1xuICAgICAgICAgIFxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2ZpbmFsZVwiKTtcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIHF1ZXN0aW9uczogcmVzcG9uc2UuZGF0YS5xdWVzdGlvbixcbiAgICAgICAgICAgIGhpbnQ6IHJlc3BvbnNlLmRhdGEuaGludCxcbiAgICAgICAgICAgIHFzTm86IHJlc3BvbnNlLmRhdGEucXVlc3Rpb25fbm8sXG4gICAgICAgICAgICBhdWRpbzogcmVzcG9uc2UuZGF0YS5hdWRpbyxcbiAgICAgICAgICAgIGltYWdlOiByZXNwb25zZS5kYXRhLmltYWdlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgUm91dGVyLnB1c2goJy9lcnJvcicpXG4gICAgICB9KTtcbiAgICAgIFxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpO1xuICB9XG5cbiAgc3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgLy9zZW5kIGZpbmFsIGFuc3dlciBmb3IgY2hlY2tpbmdcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VyKTtcblxuICAgICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBhbnN3ZXI6IFwiXCIgfTtcbiAgICAgIH0pO1xuICAgIFxuICB9O1xuICAvLyBzdWJtaXQyID0gKCkgPT4ge1xuICAvLyAgIC8vc2VuZCBmaW5hbCBhbnN3ZXIgZm9yIGNoZWNraW5nXG5cbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFuc3dlcik7XG5cbiAgLy8gICB0aGlzLmNoZWNrQW5zKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgLy8gfTtcblxuICBjaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAvL2tlZXAgdXBkYXRpbmcgYW5zd2VyXG4gICAgbGV0IGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGFuc3dlcjogZSB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGNoZWNrQW5zKFxuICAgIGFucyAvL2NoZWNrIGFuc3dlciBmcm9tIGFwaSBhbmQgc2VuZCBmb3IgY29ycmVjdCBhbGVydFxuICApIHtcbiAgICBjb25zb2xlLmxvZyhhbnMpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucXNObyk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFxuICAgICAgICBkYXRhLmFwaStcIi9hcGkvY2hlY2thbnN3ZXJcIixcbiAgICAgICAgeyBhbnN3ZXI6IGFucyB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBsZXQgciA9IHJlc3BvbnNlLmRhdGEucmVzdWx0O1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgaWYgKHIgJiYgIXJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBxc05vOiBwcmV2U3RhdGUucXNObyArIDEsIGFuc3dlcjogXCJcIiB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIEFuc0FsZXJ0KDEpOyAvL3doZXJlIGRvZXMgdGhlIGVmZmluZyBjb250cm9sIGdvIGFmdGVyIHRoaXM/XG4gICAgICAgICAgY29uc29sZS5sb2coXCJTQU5UQVwiKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFuc3dlcjogXCJcIlxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgIH0gZWxzZSBpZiAociAmJiByZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpIHtcbiAgICAgICAgICBBbnNBbGVydCgxKTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdGF0ZS52KTtcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9maW5hbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBBbnNBbGVydCgwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICB7ICh0aGlzLnN0YXRlLmxvYWRlZCA9PT0gdHJ1ZSkgP1xuICAgICAgPExheW91dD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtaW5IZWlnaHQ6IFwiMTAwdmgtMTAwcHhcIiB9fVxuICAgICAgICBxdWVzdGlvbnNcbiAgICAgID5cblxuICAgICAgICA8UXVlc3Rpb24gcXM9e3RoaXMuc3RhdGUucXVlc3Rpb25zfSBxc05vPXt0aGlzLnN0YXRlLnFzTm99IGF1ZGlvPXt0aGlzLnN0YXRlLmF1ZGlvfSBpbWFnZT17dGhpcy5zdGF0ZS5pbWFnZX0gZGF5PXt0aGlzLnN0YXRlLmRheX0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QW5zd2VyXG4gICAgICAgICAgICBjaGFuZ2U9e3RoaXMuY2hhbmdlfVxuICAgICAgICAgICAgYW5zd2VyPXt0aGlzLnN0YXRlLmFuc3dlcn1cbiAgICAgICAgICAgIHN1Ym1pdD17dGhpcy5zdWJtaXR9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxIaW50IGhpbnQ9e3RoaXMuc3RhdGUuaGludH1cbiAgICAgICAgICAgIHN1Ym1pdD17dGhpcy5zdWJtaXR9XG4gICAgICAgICAgICAvLyBzdWJtaXQyPXt0aGlzLnN1Ym1pdDJ9XG5cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyQnVmZic+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgICA6IDxMb2FkZXIvPiB9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBnYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=