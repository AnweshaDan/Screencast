webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/Mymenu2.js":
/*!*******************************!*\
  !*** ./components/Mymenu2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mymenu2; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/home/rishav/Screencast/components/Mymenu2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  };
});
function Mymenu2() {
  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var open = Boolean(anchorEl);
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      Log = _useState[0],
      setLog = _useState[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setLog(localStorage.getItem("email"));
    console.log(Log);
  }, []);

  var logout = function logout() {
    console.log(localStorage.getItem("email"));
    localStorage.removeItem("email");
    localStorage.removeItem("name"); //FB.logout();

    console.log(localStorage.getItem("interval_id"));
    clearTimeout(localStorage.getItem("interval_id"));
    localStorage.clear();
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/");
  };

  return __jsx("div", {
    className: "jsx-2373310373",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-controls": "fade-menu",
    style: {
      color: "white"
    },
    "aria-haspopup": "true",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "fade-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: open,
    onClose: handleClose,
    TransitionComponent: _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_7__["default"],
    marginThreshold: "0px",
    anchorOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: {
      left: "0",
      top: "0"
    },
    transformOrigin: {
      top: "0px",
      left: "0px"
    },
    style: {
      fontFamily: "'Barlow', sans-serif"
    },
    PaperProps: {
      style: {
        top: 0,
        left: 0,
        backgroundColor: "#cc0044",
        borderRadius: "6px",
        color: "white",
        marginTop: "0",
        paddingTop: ["0px"],
        width: "400px",
        maxHeight: "100%"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/leaderboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "Leaderboard")), Log ? __jsx("div", {
    className: "jsx-2373310373" + " " + "userDetails-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2373310373" + " " + "details-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLogout"], {
    render: function render(renderProps) {
      return __jsx("div", {
        className: "jsx-2373310373" + " " + (classes.root || ""),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: logout,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 23
        }
      }, "Logout")));
    },
    onLogoutSuccess: logout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-2373310373" + " " + "bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2373310373" + " " + "stand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  })) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/game",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "Game"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2373310373",
    __self: this
  }, ".jsx-2373310373{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jpc2hhdi9TY3JlZW5jYXN0L2NvbXBvbmVudHMvTXltZW51Mi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SGtCLEFBRWtCLFNBQ0MsVUFDWiIsImZpbGUiOiIvaG9tZS9yaXNoYXYvU2NyZWVuY2FzdC9jb21wb25lbnRzL015bWVudTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xuaW1wb3J0IEZhZGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIjtcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgR29vZ2xlTG9nb3V0IH0gZnJvbSBcInJlYWN0LWdvb2dsZS1sb2dpblwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIFwiJiA+ICpcIjoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15bWVudTIoKSB7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IFtMb2csIHNldExvZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpKTtcbiAgICBjb25zb2xlLmxvZyhMb2cpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJlbWFpbFwiKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIm5hbWVcIik7XG5cbiAgICAvL0ZCLmxvZ291dCgpO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW50ZXJ2YWxfaWRcIikpO1xuICAgIGNsZWFyVGltZW91dChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImludGVydmFsX2lkXCIpKTtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZmFkZS1tZW51XCJcbiAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgPlxuICAgICAgICA8TWVudUljb24gLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPE1lbnVcbiAgICAgICAgaWQ9XCJmYWRlLW1lbnVcIlxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtGYWRlfVxuICAgICAgICBtYXJnaW5UaHJlc2hvbGQ9XCIwcHhcIlxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwibGVmdFwiIH19XG4gICAgICAgIGFuY2hvclBvc2l0aW9uPXt7IGxlZnQ6IFwiMFwiLCB0b3A6IFwiMFwiIH19XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbj17eyB0b3A6IFwiMHB4XCIsIGxlZnQ6IFwiMHB4XCIgfX1cbiAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCInQmFybG93Jywgc2Fucy1zZXJpZlwiIH19XG4gICAgICAgIFBhcGVyUHJvcHM9e3tcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjY2MwMDQ0XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjBcIixcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFtcIjBweFwiXSxcbiAgICAgICAgICAgIHdpZHRoOiBcIjQwMHB4XCIsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Ib21lPC9NZW51SXRlbT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbGVhZGVyYm9hcmRcIj5cbiAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PkxlYWRlcmJvYXJkPC9NZW51SXRlbT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7TG9nID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlckRldGFpbHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPEdvb2dsZUxvZ291dFxuICAgICAgICAgICAgICAgIHJlbmRlcj17KHJlbmRlclByb3BzKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG9uTG9nb3V0U3VjY2Vzcz17bG9nb3V0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YW5kXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8TGluayBocmVmPVwiL2dhbWVcIj5cbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbGlja30+R2FtZTwvTWVudUl0ZW0+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgPC9NZW51PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/rishav/Screencast/components/Mymenu2.js */"));
}

/***/ })

})
//# sourceMappingURL=game.js.bb2435313b300f3f9a90.hot-update.js.map