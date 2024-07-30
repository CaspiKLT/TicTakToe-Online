"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Game/game-field.jsx":
/*!****************************************!*\
  !*** ./components/Game/game-field.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_field_comp_game_field_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-field-comp/game-field-layout */ \"./components/Game/game-field-comp/game-field-layout.jsx\");\n/* harmony import */ var _game_field_comp_game_moves_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-field-comp/game-moves-info */ \"./components/Game/game-field-comp/game-moves-info.jsx\");\n/* harmony import */ var _game_field_comp_game_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-field-comp/game-actions */ \"./components/Game/game-field-comp/game-actions.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var _game_field_comp_game_field_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-field-comp/game-field-grid */ \"./components/Game/game-field-comp/game-field-grid.jsx\");\n/* harmony import */ var _game_field_comp_game_cell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-field-comp/game-cell */ \"./components/Game/game-field-comp/game-cell.jsx\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-symbol */ \"./components/Game/game-symbol.jsx\");\n\n\n\n\n\n\n\n\nfunction GameField(param) {\n    let { className, current, nextSymbol, reset, click, arr, winner } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_field_comp_game_field_layout__WEBPACK_IMPORTED_MODULE_1__.GameFieldLayout, {\n        className: className,\n        children: [\n            winner !== undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_field_comp_game_moves_info__WEBPACK_IMPORTED_MODULE_2__.GameMovesInfo, {\n                current: current,\n                next: nextSymbol,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_field_comp_game_actions__WEBPACK_IMPORTED_MODULE_3__.GameActions, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                            size: \"md\",\n                            variant: \"primary\",\n                            onClick: ()=>{\n                                {\n                                    reset({\n                                        arr,\n                                        current\n                                    });\n                                }\n                            },\n                            children: \"Reset\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/game-field.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                            size: \"md\",\n                            variant: \"outline\",\n                            children: \"Give up\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/game-field.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/game-field.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/game-field.jsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this) : \"Winner\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_field_comp_game_field_grid__WEBPACK_IMPORTED_MODULE_5__.GameFieldGrid, {\n                children: arr.map((symbol, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_field_comp_game_cell__WEBPACK_IMPORTED_MODULE_6__.GameCell, {\n                        onClick: ()=>{\n                            {\n                                click(i);\n                            }\n                        },\n                        style: winner && [\n                            ...winner.winnerIndexs\n                        ].includes(i) ? \"bg-yellow-400 hover:bg-yellow-200\" : \"bg-white\",\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/game-field.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 24\n                        }, this)\n                    }, i, false, {\n                        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/game-field.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/game-field.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/game-field.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = GameField;\nvar _c;\n$RefreshReg$(_c, \"GameField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFDSjtBQUNMO0FBQ2Y7QUFDb0I7QUFDWDtBQUNaO0FBRXBDLFNBQVNPLFVBQVUsS0FRekI7UUFSeUIsRUFDeEJDLFNBQVMsRUFDVEMsT0FBTyxFQUNQQyxVQUFVLEVBQ1ZDLEtBQUssRUFDTEMsS0FBSyxFQUNMQyxHQUFHLEVBQ0hDLE1BQU0sRUFDUCxHQVJ5QjtJQVN4QixxQkFDRSw4REFBQ2QsK0VBQWVBO1FBQUNRLFdBQVdBOztZQUN6Qk0sV0FBV0MsMEJBQ1YsOERBQUNkLDJFQUFhQTtnQkFBQ1EsU0FBU0E7Z0JBQVNPLE1BQU1OOzBCQUNyQyw0RUFBQ1Isc0VBQVdBOztzQ0FDViw4REFBQ0Msc0RBQVFBOzRCQUNQYyxNQUFLOzRCQUNMQyxTQUFROzRCQUNSQyxTQUFTO2dDQUNQO29DQUNFUixNQUFNO3dDQUFFRTt3Q0FBS0o7b0NBQVE7Z0NBQ3ZCOzRCQUNGO3NDQUNEOzs7Ozs7c0NBR0QsOERBQUNOLHNEQUFRQTs0QkFBQ2MsTUFBSzs0QkFBS0MsU0FBUTtzQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFNMUM7MEJBRUYsOERBQUNkLDJFQUFhQTswQkFDWFMsSUFBSU8sR0FBRyxDQUFDLENBQUNDLFFBQVFDLGtCQUNoQiw4REFBQ2pCLGdFQUFRQTt3QkFFUGMsU0FBUzs0QkFDUDtnQ0FDRVAsTUFBTVU7NEJBQ1I7d0JBQ0Y7d0JBQ0FDLE9BQ0VULFVBQVU7K0JBQUlBLE9BQU9VLFlBQVk7eUJBQUMsQ0FBQ0MsUUFBUSxDQUFDSCxLQUN4QyxzQ0FDQTtrQ0FHTEQsd0JBQVUsOERBQUNmLG9EQUFVQTs0QkFBQ2UsUUFBUUE7Ozs7Ozt1QkFaMUJDOzs7Ozs7Ozs7Ozs7Ozs7O0FBa0JqQjtLQXREZ0JmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZS9nYW1lLWZpZWxkLmpzeD81MjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVGaWVsZExheW91dCB9IGZyb20gXCIuL2dhbWUtZmllbGQtY29tcC9nYW1lLWZpZWxkLWxheW91dFwiO1xuaW1wb3J0IHsgR2FtZU1vdmVzSW5mbyB9IGZyb20gXCIuL2dhbWUtZmllbGQtY29tcC9nYW1lLW1vdmVzLWluZm9cIjtcbmltcG9ydCB7IEdhbWVBY3Rpb25zIH0gZnJvbSBcIi4vZ2FtZS1maWVsZC1jb21wL2dhbWUtYWN0aW9uc1wiO1xuaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tIFwiLi4vdWlraXQvdWktYnV0dG9uXCI7XG5pbXBvcnQgeyBHYW1lRmllbGRHcmlkIH0gZnJvbSBcIi4vZ2FtZS1maWVsZC1jb21wL2dhbWUtZmllbGQtZ3JpZFwiO1xuaW1wb3J0IHsgR2FtZUNlbGwgfSBmcm9tIFwiLi9nYW1lLWZpZWxkLWNvbXAvZ2FtZS1jZWxsXCI7XG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVGaWVsZCh7XG4gIGNsYXNzTmFtZSxcbiAgY3VycmVudCxcbiAgbmV4dFN5bWJvbCxcbiAgcmVzZXQsXG4gIGNsaWNrLFxuICBhcnIsXG4gIHdpbm5lcixcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8R2FtZUZpZWxkTGF5b3V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIHt3aW5uZXIgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPEdhbWVNb3Zlc0luZm8gY3VycmVudD17Y3VycmVudH0gbmV4dD17bmV4dFN5bWJvbH0+XG4gICAgICAgICAgPEdhbWVBY3Rpb25zPlxuICAgICAgICAgICAgPFVpQnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlc2V0KHsgYXJyLCBjdXJyZW50IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgIDwvVWlCdXR0b24+XG4gICAgICAgICAgICA8VWlCdXR0b24gc2l6ZT1cIm1kXCIgdmFyaWFudD1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgICAgR2l2ZSB1cFxuICAgICAgICAgICAgPC9VaUJ1dHRvbj5cbiAgICAgICAgICA8L0dhbWVBY3Rpb25zPlxuICAgICAgICA8L0dhbWVNb3Zlc0luZm8+XG4gICAgICApIDogKFxuICAgICAgICBcIldpbm5lclwiXG4gICAgICApfVxuICAgICAgPEdhbWVGaWVsZEdyaWQ+XG4gICAgICAgIHthcnIubWFwKChzeW1ib2wsIGkpID0+IChcbiAgICAgICAgICA8R2FtZUNlbGxcbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsaWNrKGkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICB3aW5uZXIgJiYgWy4uLndpbm5lci53aW5uZXJJbmRleHNdLmluY2x1ZGVzKGkpXG4gICAgICAgICAgICAgICAgPyBcImJnLXllbGxvdy00MDAgaG92ZXI6YmcteWVsbG93LTIwMFwiXG4gICAgICAgICAgICAgICAgOiBcImJnLXdoaXRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3ltYm9sICYmIDxHYW1lU3ltYm9sIHN5bWJvbD17c3ltYm9sfSAvPn1cbiAgICAgICAgICA8L0dhbWVDZWxsPlxuICAgICAgICApKX1cbiAgICAgIDwvR2FtZUZpZWxkR3JpZD5cbiAgICA8L0dhbWVGaWVsZExheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJHYW1lRmllbGRMYXlvdXQiLCJHYW1lTW92ZXNJbmZvIiwiR2FtZUFjdGlvbnMiLCJVaUJ1dHRvbiIsIkdhbWVGaWVsZEdyaWQiLCJHYW1lQ2VsbCIsIkdhbWVTeW1ib2wiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJjdXJyZW50IiwibmV4dFN5bWJvbCIsInJlc2V0IiwiY2xpY2siLCJhcnIiLCJ3aW5uZXIiLCJ1bmRlZmluZWQiLCJuZXh0Iiwic2l6ZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwibWFwIiwic3ltYm9sIiwiaSIsInN0eWxlIiwid2lubmVySW5kZXhzIiwiaW5jbHVkZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Game/game-field.jsx\n"));

/***/ })

});