webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _glug_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glug.png */ "./glug.png");
/* harmony import */ var _glug_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_glug_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_GoogleLog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/GoogleLog */ "./components/GoogleLog.js");
/* harmony import */ var _components_FbLog2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FbLog2 */ "./components/FbLog2.js");
/* harmony import */ var _components_Timer2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Timer2 */ "./components/Timer2.js");
var _jsxFileName = "/home/anwesha/Desktop/screencast/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










function index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Date.now()),
      end = _useState[0],
      setEnd = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Date.now()),
      start = _useState2[0],
      setStart = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      day = _useState3[0],
      setDay = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(Date.now());
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://screencast2020.herokuapp.com/api/status").then(function (response) {
      console.log(new Date(response.data.start_time).getTime());
      setStart(new Date(response.data.start_time).getTime());
      setEnd(new Date(response.data.end_time).getTime());
      setDay(response.data.current_day); //localStorage.setItem("day", day);
    });
  });
  return __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2094082217",
    __self: this
  }, "div.jsx-2094082217{text-align:center;content-align:center;margin:0px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Da0IsQUFHNkIsa0JBQ0cscUJBQ0wsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2dsdWcucG5nXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IEdvb2dsZUxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Hb29nbGVMb2dcIjtcbmltcG9ydCBGYkxvZzIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmJMb2cyXCI7XG5pbXBvcnQgVGltZXIyIGZyb20gXCIuLi9jb21wb25lbnRzL1RpbWVyMlwiXG5cblxuZnVuY3Rpb24gaW5kZXgoKSB7XG5cbiAgXG4gIGNvbnN0IFtlbmQsIHNldEVuZF0gPSB1c2VTdGF0ZShEYXRlLm5vdygpKTtcbiAgY29uc3QgW3N0YXJ0LCBzZXRTdGFydF0gPSB1c2VTdGF0ZShEYXRlLm5vdygpKTtcbiAgY29uc3QgW2RheSwgc2V0RGF5XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coRGF0ZS5ub3coKSk7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwczovL3NjcmVlbmNhc3QyMDIwLmhlcm9rdWFwcC5jb20vYXBpL3N0YXR1c1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyggKG5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuc3RhcnRfdGltZSkpLmdldFRpbWUoKSk7XG4gICAgICAgIHNldFN0YXJ0KChuZXcgRGF0ZShyZXNwb25zZS5kYXRhLnN0YXJ0X3RpbWUpKS5nZXRUaW1lKCkpXG4gICAgICAgIHNldEVuZCgobmV3IERhdGUocmVzcG9uc2UuZGF0YS5lbmRfdGltZSkpLmdldFRpbWUoKSlcbiAgICAgICAgc2V0RGF5KHJlc3BvbnNlLmRhdGEuY3VycmVudF9kYXkpXG4gICAgICAgIC8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXlcIiwgZGF5KTtcbiAgICAgIH0pO1xuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29udGVudC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgey8qIDxQYXJ0aWNsZXNcbiAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgcGFydGljbGVzOiB7XG4gICAgICAgICAgICBudW1iZXI6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IDQwLFxuICAgICAgICAgICAgICBkZW5zaXR5OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZV9hcmVhOiA1MDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFtcIiNjYzAwMDBcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2FhMDA0NFwiLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgaW5kZXg6IFwiLTEwXCIsXG4gICAgICAgIH19XG4gICAgICAvPiAqL31cblxuICAgICAgPGRpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBzaHJpbmstdG8tZml0Om5vXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGl0bGU+U2NyZWVuY2FzdCA8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJxdWVzdGlvbi5jc3NcIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgIDxUaW1lcjIgc3RhcnQ9e3N0YXJ0fSAvPlxuXG5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZ25cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogXCInUnVzc28gT25lJywgc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXN0LWZsaWNrZXJcIj5zY3JlZW48L3NwYW4+Y2FzdHtcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsaWNrZXJcIj4yMDIwIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWhlYWRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNjBweFwiIH19PlxuICAgICAgICAgICAgPGgxPkxvZ2luIHRvIHBsYXkgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dDJz5cbiAgICAgICAgPEdvb2dsZUxvZyAvPlxuICAgICAgICA8RmJMb2cyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgYm90dG9tOiBcIjI1cHhcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17TG9nb31cbiAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjkwcHhcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwcHhcIlxuXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19IC8+XG5cbiAgICA8L2Rpdj5cblxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/index.js */"), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit:no",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }), __jsx("title", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Screencast "), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "question.css",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx(_components_Timer2__WEBPACK_IMPORTED_MODULE_9__["default"], {
    start: start,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      marginTop: "40px",
      marginBottom: "20px",
      fontFamily: "'Russo One', sans-serif"
    },
    className: "jsx-2094082217" + " " + "sign",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-2094082217" + " " + "fast-flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "screen"), "cast", " ", __jsx("span", {
    className: "jsx-2094082217" + " " + "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "2020 ")), __jsx("div", {
    style: {
      marginBottom: "60px"
    },
    className: "jsx-2094082217" + " " + "login-head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Login to play "))), __jsx("div", {
    className: "jsx-2094082217" + " " + 'rowC',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx(_components_GoogleLog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }), __jsx(_components_FbLog2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }))), __jsx("div", {
    style: {
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%",
      bottom: "25px",
      position: "fixed",
      textAlign: "center"
    },
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _glug_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "logo",
    style: {
      marginTop: "90px",
      width: "50px"
    },
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.f531a9c7653f1a7e62bb.hot-update.js.map