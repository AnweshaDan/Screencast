webpackHotUpdate("static/development/pages/index.js",{

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

var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Mymenu2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      '& > *': {
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
    setLog(localStorage.getItem('email'));
    console.log(Log);
  });

  var logout = function logout() {
    localStorage.clear();
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    console.log(localStorage.getItem('email'));
    FB.logout();
    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
  };

  return __jsx("div", {
    className: "jsx-2057463881",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-controls": "fade-menu",
    style: {
      color: 'white'
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
      lineNumber: 59,
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
    PaperProps: {
      style: {
        top: 0,
        left: 0,
        backgroundColor: '#cc0044',
        borderRadius: '6px',
        color: 'white',
        marginTop: '0',
        paddingTop: ['0px'],
        width: '400px',
        maxHeight: '100%'
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 24
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/leaderboard",
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
      lineNumber: 92,
      columnNumber: 35
    }
  }, "Leaderboard")), Log ? __jsx("div", {
    className: "jsx-2057463881" + " " + "userDetails-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "jsx-2057463881" + " " + "details-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLogout"], {
    render: function render(renderProps) {
      return __jsx("div", {
        className: "jsx-2057463881" + " " + (classes.root || ""),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: logout,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 32
        }
      }, "Logout")));
    },
    onLogoutSuccess: logout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-2057463881" + " " + "bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2057463881" + " " + "stand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  })) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/game",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, "Game"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2057463881",
    __self: this
  }, ".jsx-2057463881{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L2NvbXBvbmVudHMvTXltZW51Mi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSGtCLEFBRWUsU0FDQyxVQUVUIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L2NvbXBvbmVudHMvTXltZW51Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBGYWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhZGUnO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCB7IEdvb2dsZUxvZ291dCB9IGZyb20gXCJyZWFjdC1nb29nbGUtbG9naW5cIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgJyYgPiAqJzoge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0pKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeW1lbnUyKCkge1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgXG4gIGNvbnN0IFtMb2csIHNldExvZ109IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG5cblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBzZXRMb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJykpO1xuICAgIGNvbnNvbGUubG9nKExvZyk7XG4gIH0pXG4gIFxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2VtYWlsJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ25hbWUnKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKSk7XG4gICAgRkIubG9nb3V0KCk7XG4gICAgUm91dGVyLnB1c2goJy8nKVxuICAgIFxuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJ1dHRvbiBhcmlhLWNvbnRyb2xzPVwiZmFkZS1tZW51XCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gYXJpYS1oYXNwb3B1cD1cInRydWVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgICA8TWVudVxuXG4gICAgICAgIGlkPVwiZmFkZS1tZW51XCJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17RmFkZX1cbiAgICAgICAgbWFyZ2luVGhyZXNob2xkPScwcHgnXG4gICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJ0b3BcIiwgaG9yaXpvbnRhbDogXCJsZWZ0XCIgfX1cbiAgICAgICAgYW5jaG9yUG9zaXRpb249e3sgbGVmdDogXCIwXCIsIHRvcDogXCIwXCIgfX1cbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IHRvcDogXCIwcHhcIiwgbGVmdDogXCIwcHhcIiB9fVxuXG4gICAgICAgIFBhcGVyUHJvcHM9e3tcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNjYzAwNDQnLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMCcsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiBbJzBweCddLFxuICAgICAgICAgICAgd2lkdGg6ICc0MDBweCcsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJ1xuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG5cblxuICAgICAgICA8TGluayBocmVmPVwiL1wiPjxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+SG9tZTwvTWVudUl0ZW0+PC9MaW5rPlxuICAgICAgIFxuICAgICAgICA8TGluayBocmVmPVwiL2xlYWRlcmJvYXJkXCI+PE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5MZWFkZXJib2FyZDwvTWVudUl0ZW0+PC9MaW5rPlxuICAgICAgICAge0xvZyA/XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJEZXRhaWxzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8R29vZ2xlTG9nb3V0XG4gICAgICAgICAgICAgICAgcmVuZGVyPXtyZW5kZXJQcm9wcyA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48TWVudUl0ZW0gb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L01lbnVJdGVtPjwvTGluaz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIG9uTG9nb3V0U3VjY2Vzcz17bG9nb3V0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFuZFwiIC8+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDpcbiAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FtZVwiPjxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbGlja30+R2FtZTwvTWVudUl0ZW0+PC9MaW5rPlxuICAgICAgICAgfSAgICAgXG5cbiAgICAgIDwvTWVudT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG1hcmdpbjowO1xuICAgICAgcGFkZGluZzowO1xuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXYgPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/components/Mymenu2.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.6920eba3e266eb178085.hot-update.js.map