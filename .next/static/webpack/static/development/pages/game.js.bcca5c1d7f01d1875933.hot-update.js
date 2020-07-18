webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/MyMenu.js":
/*!******************************!*\
  !*** ./components/MyMenu.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rules from "./Rules";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import MenuIcon from "@material-ui/icons/Menu";

import Link from "next/link";
import Router from "next/router";

import { GoogleLogout } from "react-google-login";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function MyMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const [Log, setLog] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log("2");
    setLog(localStorage.getItem("email"));
    console.log(Log);
  }, []);

  const logout = () => {
    //FB.logout();
    clearTimeout(localStorage.getItem("interval_id"));
    localStorage.clear();
    Router.push("/");
  };

  return (
    <div>
      <Button
        aria-controls="fade-menu"
        style={{ color: "white" }}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        marginThreshold="0px"
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        anchorPosition={{ left: "0", top: "0" }}
        transformOrigin={{ top: "0px", left: "0px" }}
        style={{ fontFamily: "'Barlow', sans-serif" }}
        PaperProps={{
          style: {
            top: 0,
            left: 0,
            backgroundColor: "#cc0044",
            borderRadius: "6px",
            color: "white",
            marginTop: "0",
            paddingTop: ["0px"],
            width: "400px",
            maxHeight: "100%",
          },
        }}
      >
        <Link href="/">
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <Rules>Rules</Rules>
        </MenuItem>

        <Link href="/leaderboard">
          <MenuItem onClick={handleClose}>Leaderboard</MenuItem>
        </Link>
        {Log ? (
          <div className="userDetails-wrapper">
            <div className="details-wrapper">
              <GoogleLogout
                render={(renderProps) => (
                  <div className={classes.root}>
                    <Link href="/">
                      <MenuItem onClick={logout}>Logout</MenuItem>
                    </Link>
                  </div>
                )}
                onLogoutSuccess={logout}
              />
            </div>
            <div className="bar" />
            <div className="stand" />
          </div>
        ) : (
          <Link href="/game">
            <MenuItem onClick={handleClick}>Game</MenuItem>
          </Link>
        )}
      </Menu>
      <style jsx>{`
        margin: 0;
        padding: 0;
      `}</style>
    </div>
  );
}*/

/***/ }),

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
/* harmony import */ var _MyMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MyMenu */ "./components/MyMenu.js");
/* harmony import */ var _MyMenu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_MyMenu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Rules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Rules */ "./components/Rules.js");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Navbar.module.css */ "./components/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 0,
      backgroundColor: "#000033"
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
    if (localStorage.getItem("email")) {
      setIsSigned(true);
      setName(localStorage.getItem("name"));
      setImage(localStorage.getItem("image"));
    }
  });
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "static",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.navv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.navcontent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    edge: "start",
    className: classes.menuButton,
    color: "white",
    "aria-label": "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(_Test__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h6",
    className: classes.title,
    style: {
      fontFamily: "'Russo One', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "SCREENCAST 2020"), __jsx("div", {
    className: classes.ava,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, isSignedIn ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "right",
    alt: name,
    src: image,
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.ava,
    style: {
      textAlign: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  })) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  })))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=game.js.bcca5c1d7f01d1875933.hot-update.js.map