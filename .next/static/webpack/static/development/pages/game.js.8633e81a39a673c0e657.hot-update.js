webpackHotUpdate("static/development/pages/game.js",{

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
/* harmony import */ var _Mymenu2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Mymenu2 */ "./components/Mymenu2.js");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Navbar.module.css */ "./components/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_9__);

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
    }
  };
});
function Navbar(props) {
  var classes = useStyles(); // console.log(props.sign)//available state of signin

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var open = Boolean(anchorEl);

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isSigned = _useState2[0],
      setIsSigned = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = useState(""),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      image = _useState6[0],
      setImage = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (localStorage.getItem('email')) {
      setIsSigned(true);
      setName(localStorage.getItem('name'));
      setImage(localStorage.getItem('image'));
    }
  });
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "static",
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.navcontent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(_Mymenu2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h6",
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "SCREENCAST 2020"))));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Avatar/Avatar.js ***!
  \*************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _internal_svg_icons_Person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/svg-icons/Person */ "./node_modules/@material-ui/core/esm/internal/svg-icons/Person.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: '50%',
      overflow: 'hidden',
      userSelect: 'none'
    },

    /* Styles applied to the root element if not `src` or `srcSet`. */
    colorDefault: {
      color: theme.palette.background.default,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },

    /* Styles applied to the root element if `variant="circle"`. */
    circle: {},

    /* Styles applied to the root element if `variant="rounded"`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="square"`. */
    square: {
      borderRadius: 0
    },

    /* Styles applied to the img element if either `src` or `srcSet` is defined. */
    img: {
      width: '100%',
      height: '100%',
      textAlign: 'center',
      // Handle non-square image. The property isn't supported by IE 11.
      objectFit: 'cover',
      // Hide alt text.
      color: 'transparent',
      // Hide the image broken icon, only works on Chrome.
      textIndent: 10000
    },

    /* Styles applied to the fallback icon */
    fallback: {
      width: '75%',
      height: '75%'
    }
  };
};

function useLoaded(_ref) {
  var src = _ref.src,
      srcSet = _ref.srcSet;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      loaded = _React$useState[0],
      setLoaded = _React$useState[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (!src && !srcSet) {
      return undefined;
    }

    setLoaded(false);
    var active = true;
    var image = new Image();
    image.src = src;
    image.srcSet = srcSet;

    image.onload = function () {
      if (!active) {
        return;
      }

      setLoaded('loaded');
    };

    image.onerror = function () {
      if (!active) {
        return;
      }

      setLoaded('error');
    };

    return function () {
      active = false;
    };
  }, [src, srcSet]);
  return loaded;
}

var Avatar = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Avatar(props, ref) {
  var alt = props.alt,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      imgProps = props.imgProps,
      sizes = props.sizes,
      src = props.src,
      srcSet = props.srcSet,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'circle' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["alt", "children", "classes", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"]);

  var children = null; // Use a hook instead of onError on the img element to support server-side rendering.

  var loaded = useLoaded({
    src: src,
    srcSet: srcSet
  });
  var hasImg = src || srcSet;
  var hasImgNotFailing = hasImg && loaded !== 'error';

  if (hasImgNotFailing) {
    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      className: classes.img
    }, imgProps));
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_Person__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.fallback
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes.system, classes[variant], className, !hasImgNotFailing && classes.colorDefault),
    ref: ref
  }, other), children);
});
 true ? Avatar.propTypes = {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * Attributes applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   */
  imgProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The `src` attribute for the `img` element.
   */
  src: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The shape of the avatar.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['circle', 'rounded', 'square'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiAvatar'
})(Avatar));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Avatar/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Avatar/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Avatar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/Person.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/Person.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person'));

/***/ })

})
//# sourceMappingURL=game.js.8633e81a39a673c0e657.hot-update.js.map