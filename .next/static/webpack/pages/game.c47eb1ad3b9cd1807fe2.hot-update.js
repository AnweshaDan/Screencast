webpackHotUpdate_N_E("pages/game",{

/***/ "./components/Hint.js":
/*!****************************!*\
  !*** ./components/Hint.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimplePopover; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");


var _jsxFileName = "/home/rishav4101/Screencast/components/Hint.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    typography: {
      padding: theme.spacing(2)
    }
  };
});
function SimplePopover(props) {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var open = Boolean(anchorEl);
  var id = open ? "simple-popover" : undefined;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "btnSubmit",
    variant: "contained",
    color: "primary",
    elevation: 3,
    onClick: props.submit,
    style: {
      backgroundColor: "rgb(32, 32, 177)",
      border: "0px solid white",
      height: "40px",
      width: "100px",
      borderTopRightRadius: "16px",
      borderBottomLeftRadius: "16px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Submit"), "\xA0\xA0\xA0\xA0", __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "btnSubmit",
    "aria-describedby": id,
    variant: "contained",
    color: "secondary",
    elevation: 3,
    onClick: handleClick,
    style: {
      backgroundColor: "#ff2483",
      border: "0px solid white",
      height: "40px",
      width: "100px",
      borderTopLeftRadius: "16px",
      borderBottomRightRadius: "16px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "Hint"), __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.typography,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, props.hint)));
}

_s(SimplePopover, "vXA32r6EXukv831dcFOknrOnVCE=", false, function () {
  return [useStyles];
});

_c = SimplePopover;

var _c;

$RefreshReg$(_c, "SimplePopover");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaW50LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInR5cG9ncmFwaHkiLCJwYWRkaW5nIiwic3BhY2luZyIsIlNpbXBsZVBvcG92ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJvcGVuIiwiQm9vbGVhbiIsImlkIiwidW5kZWZpbmVkIiwic3VibWl0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJoaW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsY0FBVSxFQUFFO0FBQ1ZDLGFBQU8sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQURDO0FBRDJCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBTWUsU0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDM0MsTUFBTUMsT0FBTyxHQUFHUixTQUFTLEVBQXpCOztBQUQyQyx3QkFFWFMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FGVztBQUFBO0FBQUEsTUFFcENDLFFBRm9DO0FBQUEsTUFFMUJDLFdBRjBCOztBQUkzQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDN0JGLGVBQVcsQ0FBQ0UsS0FBSyxDQUFDQyxhQUFQLENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJKLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1LLElBQUksR0FBR0MsT0FBTyxDQUFDUCxRQUFELENBQXBCO0FBQ0EsTUFBTVEsRUFBRSxHQUFHRixJQUFJLEdBQUcsZ0JBQUgsR0FBc0JHLFNBQXJDO0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBQyxXQURaO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLGFBQVMsRUFBRSxDQUpiO0FBS0UsV0FBTyxFQUFFYixLQUFLLENBQUNjLE1BTGpCO0FBTUUsU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUUsa0JBQW5CO0FBQXVDQyxZQUFNLEVBQUUsaUJBQS9DO0FBQWtFQyxZQUFNLEVBQUUsTUFBMUU7QUFBa0ZDLFdBQUssRUFBRSxPQUF6RjtBQUFrR0MsMEJBQW9CLEVBQUUsTUFBeEg7QUFBZ0lDLDRCQUFzQixFQUFFO0FBQXhKLEtBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLHNCQVlFLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUMsV0FEWjtBQUVFLHdCQUFrQlIsRUFGcEI7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUlFLFNBQUssRUFBQyxXQUpSO0FBS0UsYUFBUyxFQUFFLENBTGI7QUFNRSxXQUFPLEVBQUVOLFdBTlg7QUFPRSxTQUFLLEVBQUU7QUFBRVMscUJBQWUsRUFBRSxTQUFuQjtBQUE4QkMsWUFBTSxFQUFFLGlCQUF0QztBQUF5REMsWUFBTSxFQUFFLE1BQWpFO0FBQXlFQyxXQUFLLEVBQUUsT0FBaEY7QUFBeUZHLHlCQUFtQixFQUFFLE1BQTlHO0FBQXNIQyw2QkFBdUIsRUFBRTtBQUEvSSxLQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixFQXdCRSxNQUFDLGlFQUFEO0FBQ0UsTUFBRSxFQUFFVixFQUROO0FBRUUsUUFBSSxFQUFFRixJQUZSO0FBR0UsWUFBUSxFQUFFTixRQUhaO0FBSUUsV0FBTyxFQUFFSyxXQUpYO0FBS0UsZ0JBQVksRUFBRTtBQUNaYyxjQUFRLEVBQUUsUUFERTtBQUVaQyxnQkFBVSxFQUFFO0FBRkEsS0FMaEI7QUFTRSxtQkFBZSxFQUFFO0FBQ2ZELGNBQVEsRUFBRSxLQURLO0FBRWZDLGdCQUFVLEVBQUU7QUFGRyxLQVRuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBY0UsTUFBQyxvRUFBRDtBQUFZLGFBQVMsRUFBRXZCLE9BQU8sQ0FBQ0wsVUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSxLQUFLLENBQUN5QixJQURULENBZEYsQ0F4QkYsQ0FERjtBQTZDRDs7R0E1RHVCMUIsYTtVQUNOTixTOzs7S0FETU0sYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYW1lLmM0N2ViMWFkM2I5Y2QxODA3ZmUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVQb3BvdmVyKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcbiAgY29uc3QgaWQgPSBvcGVuID8gXCJzaW1wbGUtcG9wb3ZlclwiIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuU3VibWl0XCJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIGVsZXZhdGlvbj17M31cbiAgICAgICAgb25DbGljaz17cHJvcHMuc3VibWl0fVxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDMyLCAzMiwgMTc3KVwiLCBib3JkZXI6IFwiMHB4IHNvbGlkIHdoaXRlXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjEwMHB4XCIsIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjE2cHhcIiwgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogXCIxNnB4XCIgfX1cbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0blN1Ym1pdFwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2lkfVxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICBlbGV2YXRpb249ezN9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmMjQ4M1wiLCBib3JkZXI6IFwiMHB4IHNvbGlkIHdoaXRlXCIsIGhlaWdodDogXCI0MHB4XCIsIHdpZHRoOiBcIjEwMHB4XCIsIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiMTZweFwiLCBib3JkZXJCb3R0b21SaWdodFJhZGl1czogXCIxNnB4XCIgfX1cbiAgICAgID5cbiAgICAgICAgSGludFxuICAgICAgPC9CdXR0b24+XG5cbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgdmVydGljYWw6IFwiYm90dG9tXCIsXG4gICAgICAgICAgaG9yaXpvbnRhbDogXCJjZW50ZXJcIixcbiAgICAgICAgfX1cbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XG4gICAgICAgICAgdmVydGljYWw6IFwidG9wXCIsXG4gICAgICAgICAgaG9yaXpvbnRhbDogXCJjZW50ZXJcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9ncmFwaHl9PlxuICAgICAgICAgIHtwcm9wcy5oaW50fVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1BvcG92ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9