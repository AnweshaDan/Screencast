webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/Mymenu.js":
/*!******************************!*\
  !*** ./components/Mymenu.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FadeMenu; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Mymenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function FadeMenu() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var open = Boolean(anchorEl);

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return __jsx("div", {
    className: "jsx-2057463881",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-controls": "fade-menu",
    style: {
      color: 'white'
    },
    "aria-haspopup": "true",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "fade-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: open,
    onClose: handleClose,
    TransitionComponent: _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_6__["default"],
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
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 24
    }
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/game",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 28
    }
  }, "Game")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/leaderboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 35
    }
  }, "Leaderboard"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2057463881",
    __self: this
  }, ".jsx-2057463881{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L2NvbXBvbmVudHMvTXltZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFa0IsQUFFZSxTQUNDLFVBRVQiLCJmaWxlIjoiL2hvbWUvYW53ZXNoYS9EZXNrdG9wL3NjcmVlbmNhc3QvY29tcG9uZW50cy9NeW1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmFkZU1lbnUoKSB7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QnV0dG9uIGFyaWEtY29udHJvbHM9XCJmYWRlLW1lbnVcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgPE1lbnVJY29uIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxNZW51XG5cbiAgICAgICAgaWQ9XCJmYWRlLW1lbnVcIlxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtGYWRlfVxuICAgICAgICBtYXJnaW5UaHJlc2hvbGQ9JzBweCdcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcImxlZnRcIiB9fVxuICAgICAgICBhbmNob3JQb3NpdGlvbj17eyBsZWZ0OiBcIjBcIiwgdG9wOiBcIjBcIiB9fVxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgdG9wOiBcIjBweFwiLCBsZWZ0OiBcIjBweFwiIH19XG5cbiAgICAgICAgUGFwZXJQcm9wcz17e1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2NjMDA0NCcsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICcwJyxcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFsnMHB4J10sXG4gICAgICAgICAgICB3aWR0aDogJzQwMHB4JyxcbiAgICAgICAgICAgIG1heEhlaWdodDogJzEwMCUnXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cblxuXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Ib21lPC9NZW51SXRlbT48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FtZVwiPjxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+R2FtZTwvTWVudUl0ZW0+PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2xlYWRlcmJvYXJkXCI+PE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5MZWFkZXJib2FyZDwvTWVudUl0ZW0+PC9MaW5rPlxuXG5cbiAgICAgIDwvTWVudT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG1hcmdpbjowO1xuICAgICAgcGFkZGluZzowO1xuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXYgPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/components/Mymenu.js */"));
}

/***/ })

})
//# sourceMappingURL=game.js.621b7dd8d86ced5a1260.hot-update.js.map