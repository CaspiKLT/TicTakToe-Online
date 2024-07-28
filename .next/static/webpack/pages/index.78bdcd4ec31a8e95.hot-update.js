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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/header */ \"./components/Header/header.jsx\");\n/* harmony import */ var _components_Game_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Game/index */ \"./components/Game/index.js\");\n/* harmony import */ var _components_constans__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/constans */ \"./components/constans.js\");\n/* harmony import */ var _components_use_game_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/use-game-states */ \"./components/use-game-states.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    const { cells, currentSymbol, NEXT_SYMBOL, handleCellClick, resetClick, seconds, minutesString, secondsString } = (0,_components_use_game_states__WEBPACK_IMPORTED_MODULE_4__.useGameState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-100 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_header__WEBPACK_IMPORTED_MODULE_1__.Header, {\n                player: _components_constans__WEBPACK_IMPORTED_MODULE_3__.player_1\n            }, void 0, false, {\n                fileName: \"/Users/tamir/Desktop/Fullstack path/pet projects/tic-tak-toe-online/pages/index.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"max-w-[616px] pt-6 flex flex-col mx-auto gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game_index__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {\n                        playersAmount: 4,\n                        timeForTurn: 1,\n                        className: \"ml-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tamir/Desktop/Fullstack path/pet projects/tic-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game_index__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game_index__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                                player: _components_constans__WEBPACK_IMPORTED_MODULE_3__.player_1,\n                                isTimerRunning: _components_constans__WEBPACK_IMPORTED_MODULE_3__.player_1.symbol === currentSymbol,\n                                minutesString: minutesString,\n                                secondsString: secondsString\n                            }, void 0, false, {\n                                fileName: \"/Users/tamir/Desktop/Fullstack path/pet projects/tic-tak-toe-online/pages/index.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game_index__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                                player: _components_constans__WEBPACK_IMPORTED_MODULE_3__.player_2,\n                                isTimerRunning: _components_constans__WEBPACK_IMPORTED_MODULE_3__.player_2.symbol === currentSymbol\n                            }, void 0, false, {\n                                fileName: \"/Users/tamir/Desktop/Fullstack path/pet projects/tic-tak-toe-online/pages/index.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game_index__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                                player: _components_constans__WEBPACK_IMPORTED_MODULE_3__.player_3,\n                                isTimerRunning: _components_constans__WEBPACK_IMPORTED_MODULE_3__.player_3.symbol === currentSymbol\n                            }, void 0, false, {\n                                fileName: \"/Users/tamir/Desktop/Fullstack path/pet projects/tic-tak-toe-online/pages/index.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game_index__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                                player: _components_constans__WEBPACK_IMPORTED_MODULE_3__.player_4,\n                                isTimerRunning: _components_constans__WEBPACK_IMPORTED_MODULE_3__.player_4.symbol === currentSymbol\n                            }, void 0, false, {\n                                fileName: \"/Users/tamir/Desktop/Fullstack path/pet projects/tic-tak-toe-online/pages/index.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tamir/Desktop/Fullstack path/pet projects/tic-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game_index__WEBPACK_IMPORTED_MODULE_2__.GameField, {\n                        className: \"bg-white mb-8 max-w-[616px] self-center\",\n                        current: currentSymbol,\n                        nextSymbol: NEXT_SYMBOL,\n                        reset: resetClick,\n                        click: handleCellClick,\n                        arr: cells,\n                        seconds: seconds\n                    }, void 0, false, {\n                        fileName: \"/Users/tamir/Desktop/Fullstack path/pet projects/tic-tak-toe-online/pages/index.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tamir/Desktop/Fullstack path/pet projects/tic-tak-toe-online/pages/index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tamir/Desktop/Fullstack path/pet projects/tic-tak-toe-online/pages/index.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"r8kwM/MHkX8rtn/j1yr8dSbLEvg=\", false, function() {\n    return [\n        _components_use_game_states__WEBPACK_IMPORTED_MODULE_4__.useGameState\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBTW5CO0FBQzhDO0FBQ25CO0FBRTlDLFNBQVNVOztJQUN0QixNQUFNLEVBQ0pDLEtBQUssRUFDTEMsYUFBYSxFQUNiQyxXQUFXLEVBQ1hDLGVBQWUsRUFDZkMsVUFBVSxFQUNWQyxPQUFPLEVBQ1BDLGFBQWEsRUFDYkMsYUFBYSxFQUNkLEdBQUdULHlFQUFZQTtJQUVoQixxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNwQiw2REFBTUE7Z0JBQUNxQixRQUFRaEIsMERBQVFBOzs7Ozs7MEJBQ3hCLDhEQUFDaUI7Z0JBQUtGLFdBQVU7O2tDQUNkLDhEQUFDbEIsNkRBQVNBO3dCQUFDcUIsZUFBZTt3QkFBR0MsYUFBYTt3QkFBR0osV0FBVzs7Ozs7O2tDQUN4RCw4REFBQ25CLDREQUFRQTs7MENBQ1AsOERBQUNHLDhEQUFVQTtnQ0FDVGlCLFFBQVFoQiwwREFBUUE7Z0NBQ2hCb0IsZ0JBQWdCcEIsMERBQVFBLENBQUNxQixNQUFNLEtBQUtkO2dDQUNwQ0ssZUFBZUE7Z0NBQ2ZDLGVBQWVBOzs7Ozs7MENBRWpCLDhEQUFDZCw4REFBVUE7Z0NBQ1RpQixRQUFRZiwwREFBUUE7Z0NBQ2hCbUIsZ0JBQWdCbkIsMERBQVFBLENBQUNvQixNQUFNLEtBQUtkOzs7Ozs7MENBRXRDLDhEQUFDUiw4REFBVUE7Z0NBQ1RpQixRQUFRZCwwREFBUUE7Z0NBQ2hCa0IsZ0JBQWdCbEIsMERBQVFBLENBQUNtQixNQUFNLEtBQUtkOzs7Ozs7MENBRXRDLDhEQUFDUiw4REFBVUE7Z0NBQ1RpQixRQUFRYiwwREFBUUE7Z0NBQ2hCaUIsZ0JBQWdCakIsMERBQVFBLENBQUNrQixNQUFNLEtBQUtkOzs7Ozs7Ozs7Ozs7a0NBR3hDLDhEQUFDVCw2REFBU0E7d0JBQ1JpQixXQUFXO3dCQUNYTyxTQUFTZjt3QkFDVGdCLFlBQVlmO3dCQUNaZ0IsT0FBT2Q7d0JBQ1BlLE9BQU9oQjt3QkFDUGlCLEtBQUtwQjt3QkFDTEssU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQjtHQWpEd0JOOztRQVVsQkQscUVBQVlBOzs7S0FWTUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlclwiO1xuaW1wb3J0IHtcbiAgR2FtZUluZm8sXG4gIEdhbWVUaXRsZSxcbiAgR2FtZUZpZWxkLFxuICBQbGF5ZXJJbmZvLFxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9HYW1lL2luZGV4XCI7XG5pbXBvcnQgeyBwbGF5ZXJfMSwgcGxheWVyXzIsIHBsYXllcl8zLCBwbGF5ZXJfNCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnN0YW5zXCI7XG5pbXBvcnQgeyB1c2VHYW1lU3RhdGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91c2UtZ2FtZS1zdGF0ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IHtcbiAgICBjZWxscyxcbiAgICBjdXJyZW50U3ltYm9sLFxuICAgIE5FWFRfU1lNQk9MLFxuICAgIGhhbmRsZUNlbGxDbGljayxcbiAgICByZXNldENsaWNrLFxuICAgIHNlY29uZHMsXG4gICAgbWludXRlc1N0cmluZyxcbiAgICBzZWNvbmRzU3RyaW5nLFxuICB9ID0gdXNlR2FtZVN0YXRlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTEwMCBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxIZWFkZXIgcGxheWVyPXtwbGF5ZXJfMX0gLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1heC13LVs2MTZweF0gcHQtNiBmbGV4IGZsZXgtY29sIG14LWF1dG8gZ2FwLTEwXCI+XG4gICAgICAgIDxHYW1lVGl0bGUgcGxheWVyc0Ftb3VudD17NH0gdGltZUZvclR1cm49ezF9IGNsYXNzTmFtZT17XCJtbC0yXCJ9IC8+XG4gICAgICAgIDxHYW1lSW5mbz5cbiAgICAgICAgICA8UGxheWVySW5mb1xuICAgICAgICAgICAgcGxheWVyPXtwbGF5ZXJfMX1cbiAgICAgICAgICAgIGlzVGltZXJSdW5uaW5nPXtwbGF5ZXJfMS5zeW1ib2wgPT09IGN1cnJlbnRTeW1ib2x9XG4gICAgICAgICAgICBtaW51dGVzU3RyaW5nPXttaW51dGVzU3RyaW5nfVxuICAgICAgICAgICAgc2Vjb25kc1N0cmluZz17c2Vjb25kc1N0cmluZ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQbGF5ZXJJbmZvXG4gICAgICAgICAgICBwbGF5ZXI9e3BsYXllcl8yfVxuICAgICAgICAgICAgaXNUaW1lclJ1bm5pbmc9e3BsYXllcl8yLnN5bWJvbCA9PT0gY3VycmVudFN5bWJvbH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQbGF5ZXJJbmZvXG4gICAgICAgICAgICBwbGF5ZXI9e3BsYXllcl8zfVxuICAgICAgICAgICAgaXNUaW1lclJ1bm5pbmc9e3BsYXllcl8zLnN5bWJvbCA9PT0gY3VycmVudFN5bWJvbH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQbGF5ZXJJbmZvXG4gICAgICAgICAgICBwbGF5ZXI9e3BsYXllcl80fVxuICAgICAgICAgICAgaXNUaW1lclJ1bm5pbmc9e3BsYXllcl80LnN5bWJvbCA9PT0gY3VycmVudFN5bWJvbH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dhbWVJbmZvPlxuICAgICAgICA8R2FtZUZpZWxkXG4gICAgICAgICAgY2xhc3NOYW1lPXtcImJnLXdoaXRlIG1iLTggbWF4LXctWzYxNnB4XSBzZWxmLWNlbnRlclwifVxuICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnRTeW1ib2x9XG4gICAgICAgICAgbmV4dFN5bWJvbD17TkVYVF9TWU1CT0x9XG4gICAgICAgICAgcmVzZXQ9e3Jlc2V0Q2xpY2t9XG4gICAgICAgICAgY2xpY2s9e2hhbmRsZUNlbGxDbGlja31cbiAgICAgICAgICBhcnI9e2NlbGxzfVxuICAgICAgICAgIHNlY29uZHM9e3NlY29uZHN9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiR2FtZUluZm8iLCJHYW1lVGl0bGUiLCJHYW1lRmllbGQiLCJQbGF5ZXJJbmZvIiwicGxheWVyXzEiLCJwbGF5ZXJfMiIsInBsYXllcl8zIiwicGxheWVyXzQiLCJ1c2VHYW1lU3RhdGUiLCJIb21lUGFnZSIsImNlbGxzIiwiY3VycmVudFN5bWJvbCIsIk5FWFRfU1lNQk9MIiwiaGFuZGxlQ2VsbENsaWNrIiwicmVzZXRDbGljayIsInNlY29uZHMiLCJtaW51dGVzU3RyaW5nIiwic2Vjb25kc1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsInBsYXllciIsIm1haW4iLCJwbGF5ZXJzQW1vdW50IiwidGltZUZvclR1cm4iLCJpc1RpbWVyUnVubmluZyIsInN5bWJvbCIsImN1cnJlbnQiLCJuZXh0U3ltYm9sIiwicmVzZXQiLCJjbGljayIsImFyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});