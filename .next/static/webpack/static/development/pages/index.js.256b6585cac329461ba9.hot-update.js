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
  }, []);

  var logout = function logout() {
    localStorage.clear();
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    console.log(localStorage.getItem('email')); //FB.logout();

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
  }, ".jsx-2057463881{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L2NvbXBvbmVudHMvTXltZW51Mi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSGtCLEFBRWUsU0FDQyxVQUVUIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L2NvbXBvbmVudHMvTXltZW51Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBGYWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhZGUnO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCB7IEdvb2dsZUxvZ291dCB9IGZyb20gXCJyZWFjdC1nb29nbGUtbG9naW5cIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgJyYgPiAqJzoge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0pKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeW1lbnUyKCkge1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgXG4gIGNvbnN0IFtMb2csIHNldExvZ109IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG5cblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBzZXRMb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJykpO1xuICAgIGNvbnNvbGUubG9nKExvZyk7XG4gIH0sW10pXG4gIFxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2VtYWlsJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ25hbWUnKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKSk7XG4gICAgLy9GQi5sb2dvdXQoKTtcbiAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgXG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QnV0dG9uIGFyaWEtY29udHJvbHM9XCJmYWRlLW1lbnVcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgPE1lbnVJY29uIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxNZW51XG5cbiAgICAgICAgaWQ9XCJmYWRlLW1lbnVcIlxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtGYWRlfVxuICAgICAgICBtYXJnaW5UaHJlc2hvbGQ9JzBweCdcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcImxlZnRcIiB9fVxuICAgICAgICBhbmNob3JQb3NpdGlvbj17eyBsZWZ0OiBcIjBcIiwgdG9wOiBcIjBcIiB9fVxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgdG9wOiBcIjBweFwiLCBsZWZ0OiBcIjBweFwiIH19XG5cbiAgICAgICAgUGFwZXJQcm9wcz17e1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2NjMDA0NCcsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICcwJyxcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFsnMHB4J10sXG4gICAgICAgICAgICB3aWR0aDogJzQwMHB4JyxcbiAgICAgICAgICAgIG1heEhlaWdodDogJzEwMCUnXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cblxuXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Ib21lPC9NZW51SXRlbT48L0xpbms+XG4gICAgICAgXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbGVhZGVyYm9hcmRcIj48TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PkxlYWRlcmJvYXJkPC9NZW51SXRlbT48L0xpbms+XG4gICAgICAgICB7TG9nID9cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlckRldGFpbHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxHb29nbGVMb2dvdXRcbiAgICAgICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxNZW51SXRlbSBvbkNsaWNrPXtsb2dvdXR9PkxvZ291dDwvTWVudUl0ZW0+PC9MaW5rPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgb25Mb2dvdXRTdWNjZXNzPXtsb2dvdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YW5kXCIgLz5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgOlxuICAgICAgICAgPExpbmsgaHJlZj1cIi9nYW1lXCI+PE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5HYW1lPC9NZW51SXRlbT48L0xpbms+XG4gICAgICAgICB9ICAgICBcblxuICAgICAgPC9NZW51PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgbWFyZ2luOjA7XG4gICAgICBwYWRkaW5nOjA7XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2RpdiA+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/components/Mymenu2.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.256b6585cac329461ba9.hot-update.js.map