webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _Test__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Test */ "./components/Test.js");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Navbar.module.css */ "./components/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/home/rishav4101/Screencast/components/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 0,
      backgroundColor: "#000044",
      width: "100%",
      padding: 0
    },
    menuButton: {
      marginRight: theme.spacing(0)
    },
    title: {
      flexGrow: 0
    },
    ava: {
      flexGrow: 0,
      marginLeft: "auto"
    }
  };
});
function Navbar(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var open = Boolean(anchorEl); //to display avatar in logged in state

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isSignedIn = _useState[0],
      setIsSigned = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      image = _useState3[0],
      setImage = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log("Nav mounted");

    if (localStorage.getItem("email")) {
      setIsSigned(true);
      setName(localStorage.getItem("name"));
      setImage(localStorage.getItem("image"));
    }
  });
  console.log("Just b4 return of nav");
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "fixed",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navv,
    style: {
      padding: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navcontent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "white",
    "aria-label": "menu",
    style: {
      padding: "0"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(_Test__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h6",
    className: classes.title,
    style: {
      fontFamily: "'Russo One', sans-serif",
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "\xA0\xA0\xA0SCREENCAST 2020"), __jsx("div", {
    className: classes.ava,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, isSignedIn ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "right",
    alt: name,
    src: image,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.ava,
    style: {
      textAlign: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  })) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  })))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.2e84abc1bca8ac76c9b0.hot-update.js.map