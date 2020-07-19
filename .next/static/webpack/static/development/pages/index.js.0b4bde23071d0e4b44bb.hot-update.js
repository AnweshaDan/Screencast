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
var _jsxFileName = "/home/rishav/Screencast/pages/index.js";

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
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://screencast2020.herokuapp.com/api/status").then(function (response) {
      console.log(new Date(response.data.start_time).getTime()); //milliseconds

      setStart(new Date(response.data.start_time).getTime());
      setEnd(new Date(response.data.end_time).getTime());
      setDay(response.data.current_day);
      localStorage.setItem("start", start);
      console.log(localStorage.getItem('start'));
    });
  });
  return __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2094082217",
    __self: this
  }, "div.jsx-2094082217{text-align:center;content-align:center;margin:0px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jpc2hhdi9TY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDa0IsQUFHNkIsa0JBQ0cscUJBQ0wsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL3Jpc2hhdi9TY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2dsdWcucG5nXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IEdvb2dsZUxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Hb29nbGVMb2dcIjtcbmltcG9ydCBGYkxvZzIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmJMb2cyXCI7XG5pbXBvcnQgVGltZXIyIGZyb20gXCIuLi9jb21wb25lbnRzL1RpbWVyMlwiXG5cblxuZnVuY3Rpb24gaW5kZXgoKSB7XG5cbiAgY29uc3QgW2VuZCwgc2V0RW5kXSA9IHVzZVN0YXRlKERhdGUubm93KCkpO1xuICBjb25zdCBbc3RhcnQsIHNldFN0YXJ0XSA9IHVzZVN0YXRlKERhdGUubm93KCkpO1xuICBjb25zdCBbZGF5LCBzZXREYXldID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9zY3JlZW5jYXN0MjAyMC5oZXJva3VhcHAuY29tL2FwaS9zdGF0dXNcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKChuZXcgRGF0ZShyZXNwb25zZS5kYXRhLnN0YXJ0X3RpbWUpKS5nZXRUaW1lKCkpOy8vbWlsbGlzZWNvbmRzXG4gICAgICAgIHNldFN0YXJ0KChuZXcgRGF0ZShyZXNwb25zZS5kYXRhLnN0YXJ0X3RpbWUpKS5nZXRUaW1lKCkpXG4gICAgICAgIHNldEVuZCgobmV3IERhdGUocmVzcG9uc2UuZGF0YS5lbmRfdGltZSkpLmdldFRpbWUoKSlcbiAgICAgICAgc2V0RGF5KHJlc3BvbnNlLmRhdGEuY3VycmVudF9kYXkpXG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGFydFwiLCBzdGFydCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGFydCcpKTtcbiAgICAgIH0pO1xuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29udGVudC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHNocmluay10by1maXQ6bm9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0aXRsZT5TY3JlZW5jYXN0IDwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cInF1ZXN0aW9uLmNzc1wiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TmF2YmFyIC8+XG5cbiAgICAgICAgPFRpbWVyMiBzdGFydD17c3RhcnR9IC8+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaWduXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiJ1J1c3NvIE9uZScsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzdC1mbGlja2VyXCI+c2NyZWVuPC9zcGFuPmNhc3R7XCIgXCJ9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGlja2VyXCI+MjAyMCA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWhlYWRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNjBweFwiIH19PlxuICAgICAgICAgICAgPGgxPkxvZ2luIHRvIHBsYXkgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvd0MnIHN0eWxlPXt7IG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cbiAgICAgICAgICA8R29vZ2xlTG9nIC8+XG4gICAgICAgICAgPEZiTG9nMiAvPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGJvdHRvbTogXCIyNXB4XCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e0xvZ299XG4gICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCI5MHB4XCIsXG4gICAgICAgICAgICB3aWR0aDogXCI1MHB4XCJcblxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cblxuICAgIDwvZGl2PlxuXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl19 */\n/*@ sourceURL=/home/rishav/Screencast/pages/index.js */"), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit:no",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx("title", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 57,
      columnNumber: 13
    }
  }))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx(_components_Timer2__WEBPACK_IMPORTED_MODULE_9__["default"], {
    start: start,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-2094082217" + " " + "fast-flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "screen"), "cast", " ", __jsx("span", {
    className: "jsx-2094082217" + " " + "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "Login to play "))), __jsx("div", {
    style: {
      margin: "0 auto"
    },
    className: "jsx-2094082217" + " " + 'rowC',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_components_GoogleLog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }), __jsx(_components_FbLog2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
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
      lineNumber: 90,
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
      lineNumber: 100,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.0b4bde23071d0e4b44bb.hot-update.js.map