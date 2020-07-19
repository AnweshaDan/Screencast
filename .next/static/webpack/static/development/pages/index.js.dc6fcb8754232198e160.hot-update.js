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
  }, "div.jsx-2094082217{text-align:center;content-align:center;margin:0px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDa0IsQUFHNkIsa0JBQ0cscUJBQ0wsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2dsdWcucG5nXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IEdvb2dsZUxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Hb29nbGVMb2dcIjtcbmltcG9ydCBGYkxvZzIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmJMb2cyXCI7XG5pbXBvcnQgVGltZXIyIGZyb20gXCIuLi9jb21wb25lbnRzL1RpbWVyMlwiXG5cblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gIFxuICBjb25zdCBbZW5kLCBzZXRFbmRdID0gdXNlU3RhdGUoRGF0ZS5ub3coKSk7XG4gIGNvbnN0IFtzdGFydCwgc2V0U3RhcnRdID0gdXNlU3RhdGUoRGF0ZS5ub3coKSk7XG4gIGNvbnN0IFtkYXksIHNldERheV0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9zY3JlZW5jYXN0MjAyMC5oZXJva3VhcHAuY29tL2FwaS9zdGF0dXNcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coIChuZXcgRGF0ZShyZXNwb25zZS5kYXRhLnN0YXJ0X3RpbWUpKS5nZXRUaW1lKCkpOy8vbWlsbGlzZWNvbmRzXG4gICAgICAgIHNldFN0YXJ0KChuZXcgRGF0ZShyZXNwb25zZS5kYXRhLnN0YXJ0X3RpbWUpKS5nZXRUaW1lKCkpXG4gICAgICAgIHNldEVuZCgobmV3IERhdGUocmVzcG9uc2UuZGF0YS5lbmRfdGltZSkpLmdldFRpbWUoKSlcbiAgICAgICAgc2V0RGF5KHJlc3BvbnNlLmRhdGEuY3VycmVudF9kYXkpXG4gICAgICAgIFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXJ0XCIsIHN0YXJ0KTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0JykpXG4gICAgICB9KTtcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbnRlbnQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cblxuICAgICAgPGRpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBzaHJpbmstdG8tZml0Om5vXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8dGl0bGU+U2NyZWVuY2FzdCA8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJxdWVzdGlvbi5jc3NcIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgIDxUaW1lcjIgc3RhcnQ9e2VuZH0gLz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaWduXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCInUnVzc28gT25lJywgc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXN0LWZsaWNrZXJcIj5zY3JlZW48L3NwYW4+Y2FzdHtcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxpY2tlclwiPjIwMjAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1oZWFkXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjYwcHhcIiB9fT5cbiAgICAgICAgICAgIDxoMT5Mb2dpbiB0byBwbGF5IDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dDJyBzdHlsZT17e21hcmdpbjpcIjAgYXV0b1wifX0+XG4gICAgICAgICAgICA8R29vZ2xlTG9nIC8+XG4gICAgICAgICAgICA8RmJMb2cyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGJvdHRvbTogXCIyNXB4XCIsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e0xvZ299XG4gICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCI5MHB4XCIsXG4gICAgICAgICAgICB3aWR0aDogXCI1MHB4XCJcblxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fSAvPlxuXG4gICAgPC9kaXY+XG5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXX0= */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/index.js */"), __jsx("div", {
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
    start: end,
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
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-2094082217" + " " + "fast-flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "screen"), "cast", " ", __jsx("span", {
    className: "jsx-2094082217" + " " + "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
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
      columnNumber: 13
    }
  }), __jsx(_components_FbLog2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
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
    style: {
      color: "white"
    },
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
//# sourceMappingURL=index.js.dc6fcb8754232198e160.hot-update.js.map