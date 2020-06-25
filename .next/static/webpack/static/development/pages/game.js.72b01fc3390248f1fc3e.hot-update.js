webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/MyMenu.js":
/*!******************************!*\
  !*** ./components/MyMenu.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyMenu; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rules */ "./components/Rules.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/home/anwesha/Desktop/screencast/components/MyMenu.js";

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
function MyMenu() {
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
    console.log("2");
    setLog(localStorage.getItem("email"));
    console.log(Log);
  }, []);

  var logout = function logout() {
    //FB.logout();
    clearTimeout(localStorage.getItem("interval_id"));
    localStorage.clear();
    next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/");
  };

  return __jsx("div", {
    className: "jsx-2373310373",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-controls": "fade-menu",
    style: {
      color: "white"
    },
    "aria-haspopup": "true",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "fade-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: open,
    onClose: handleClose,
    TransitionComponent: _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_8__["default"],
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
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "Home")), __jsx(_Rules__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 16
    }
  }, "Rules")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/leaderboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLogout"], {
    render: function render(renderProps) {
      return __jsx("div", {
        className: "jsx-2373310373" + " " + (classes.root || ""),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  })) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/game",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, ".jsx-2373310373{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L2NvbXBvbmVudHMvTXlNZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIa0IsQUFFa0IsU0FDQyxVQUNaIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L2NvbXBvbmVudHMvTXlNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgUnVsZXMgZnJvbSAnLi9SdWxlcydcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcbmltcG9ydCBGYWRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWRlXCI7XG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XG5cblxuXG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IEdvb2dsZUxvZ291dCB9IGZyb20gXCJyZWFjdC1nb29nbGUtbG9naW5cIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBcIiYgPiAqXCI6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeU1lbnUoKSB7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IFtMb2csIHNldExvZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiMlwiKTtcbiAgICBzZXRMb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKSk7XG4gICAgY29uc29sZS5sb2coTG9nKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHsgICAgXG4gICAgLy9GQi5sb2dvdXQoKTtcbiAgICBjbGVhclRpbWVvdXQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbnRlcnZhbF9pZFwiKSk7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgYXJpYS1jb250cm9scz1cImZhZGUtbWVudVwiXG4gICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgID5cbiAgICAgICAgPE1lbnVJY29uIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxNZW51XG4gICAgICAgIGlkPVwiZmFkZS1tZW51XCJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17RmFkZX1cbiAgICAgICAgbWFyZ2luVGhyZXNob2xkPVwiMHB4XCJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcImxlZnRcIiB9fVxuICAgICAgICBhbmNob3JQb3NpdGlvbj17eyBsZWZ0OiBcIjBcIiwgdG9wOiBcIjBcIiB9fVxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgdG9wOiBcIjBweFwiLCBsZWZ0OiBcIjBweFwiIH19XG4gICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiJ0JhcmxvdycsIHNhbnMtc2VyaWZcIiB9fVxuICAgICAgICBQYXBlclByb3BzPXt7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2NjMDA0NFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIwXCIsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBbXCIwcHhcIl0sXG4gICAgICAgICAgICB3aWR0aDogXCI0MDBweFwiLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+SG9tZTwvTWVudUl0ZW0+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFJ1bGVzPjxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+UnVsZXM8L01lbnVJdGVtPjwvUnVsZXM+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPExpbmsgaHJlZj1cIi9sZWFkZXJib2FyZFwiPlxuICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TGVhZGVyYm9hcmQ8L01lbnVJdGVtPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHtMb2cgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyRGV0YWlscy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8R29vZ2xlTG9nb3V0XG4gICAgICAgICAgICAgICAgcmVuZGVyPXsocmVuZGVyUHJvcHMpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtsb2dvdXR9PkxvZ291dDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgb25Mb2dvdXRTdWNjZXNzPXtsb2dvdXR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhbmRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FtZVwiPlxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5HYW1lPC9NZW51SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICl9XG4gICAgICAgXG4gICAgICA8L01lbnU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/components/MyMenu.js */"));
}

/***/ })

})
//# sourceMappingURL=game.js.72b01fc3390248f1fc3e.hot-update.js.map