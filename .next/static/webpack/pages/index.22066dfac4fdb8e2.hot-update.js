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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/header */ \"./components/Header/header.jsx\");\n/* harmony import */ var _components_Game_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Game/index */ \"./components/Game/index.js\");\n/* harmony import */ var _components_use_game_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/use-game-states */ \"./components/use-game-states.js\");\n/* harmony import */ var _components_constans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/constans */ \"./components/constans.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    const { players, cells, currentSymbol, NEXT_SYMBOL, handleCellClick, resetClick, winner } = (0,_components_use_game_states__WEBPACK_IMPORTED_MODULE_3__.useGameState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-100 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_header__WEBPACK_IMPORTED_MODULE_1__.Header, {\n                player: _components_constans__WEBPACK_IMPORTED_MODULE_4__.PLAYERS[0]\n            }, void 0, false, {\n                fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/pages/index.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"max-w-[616px] pt-6 flex flex-col mx-auto gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game_index__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {\n                        playersAmount: players,\n                        timeForTurn: 1,\n                        className: \"ml-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/pages/index.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game_index__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                        playersAmount: players,\n                        currentSymbol: currentSymbol,\n                        winnerSymbol: winner.winnerMove !== undefined ? winner.winnerMove : null\n                    }, void 0, false, {\n                        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/pages/index.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game_index__WEBPACK_IMPORTED_MODULE_2__.GameField, {\n                        className: \"bg-white mb-8 max-w-[616px] self-center\",\n                        current: currentSymbol,\n                        nextSymbol: NEXT_SYMBOL,\n                        reset: resetClick,\n                        click: handleCellClick,\n                        arr: cells,\n                        winner: winner\n                    }, void 0, false, {\n                        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/pages/index.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/pages/index.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/pages/index.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"lNR2awqXCJTnsD4huNPwG43x+/w=\", false, function() {\n    return [\n        _components_use_game_states__WEBPACK_IMPORTED_MODULE_3__.useGameState\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ3FCO0FBQ2I7QUFDWjtBQUVsQyxTQUFTTTs7SUFDdEIsTUFBTSxFQUNKQyxPQUFPLEVBQ1BDLEtBQUssRUFDTEMsYUFBYSxFQUNiQyxXQUFXLEVBQ1hDLGVBQWUsRUFDZkMsVUFBVSxFQUNWQyxNQUFNLEVBQ1AsR0FBR1QseUVBQVlBO0lBRWhCLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2YsNkRBQU1BO2dCQUFDZ0IsUUFBUVgseURBQU8sQ0FBQyxFQUFFOzs7Ozs7MEJBQzFCLDhEQUFDWTtnQkFBS0YsV0FBVTs7a0NBQ2QsOERBQUNiLDZEQUFTQTt3QkFBQ2dCLGVBQWVYO3dCQUFTWSxhQUFhO3dCQUFHSixXQUFXOzs7Ozs7a0NBQzlELDhEQUFDZCw0REFBUUE7d0JBQ1BpQixlQUFlWDt3QkFDZkUsZUFBZUE7d0JBQ2ZXLGNBQ0VQLE9BQU9RLFVBQVUsS0FBS0MsWUFBWVQsT0FBT1EsVUFBVSxHQUFHOzs7Ozs7a0NBRzFELDhEQUFDbEIsNkRBQVNBO3dCQUNSWSxXQUFXO3dCQUNYUSxTQUFTZDt3QkFDVGUsWUFBWWQ7d0JBQ1plLE9BQU9iO3dCQUNQYyxPQUFPZjt3QkFDUGdCLEtBQUtuQjt3QkFDTEssUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQjtHQW5Dd0JQOztRQVNsQkYscUVBQVlBOzs7S0FUTUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlclwiO1xuaW1wb3J0IHsgR2FtZUluZm8sIEdhbWVUaXRsZSwgR2FtZUZpZWxkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FtZS9pbmRleFwiO1xuaW1wb3J0IHsgdXNlR2FtZVN0YXRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlLWdhbWUtc3RhdGVzXCI7XG5pbXBvcnQgeyBQTEFZRVJTIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29uc3RhbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IHtcbiAgICBwbGF5ZXJzLFxuICAgIGNlbGxzLFxuICAgIGN1cnJlbnRTeW1ib2wsXG4gICAgTkVYVF9TWU1CT0wsXG4gICAgaGFuZGxlQ2VsbENsaWNrLFxuICAgIHJlc2V0Q2xpY2ssXG4gICAgd2lubmVyLFxuICB9ID0gdXNlR2FtZVN0YXRlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTEwMCBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxIZWFkZXIgcGxheWVyPXtQTEFZRVJTWzBdfSAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctWzYxNnB4XSBwdC02IGZsZXggZmxleC1jb2wgbXgtYXV0byBnYXAtMTBcIj5cbiAgICAgICAgPEdhbWVUaXRsZSBwbGF5ZXJzQW1vdW50PXtwbGF5ZXJzfSB0aW1lRm9yVHVybj17MX0gY2xhc3NOYW1lPXtcIm1sLTJcIn0gLz5cbiAgICAgICAgPEdhbWVJbmZvXG4gICAgICAgICAgcGxheWVyc0Ftb3VudD17cGxheWVyc31cbiAgICAgICAgICBjdXJyZW50U3ltYm9sPXtjdXJyZW50U3ltYm9sfVxuICAgICAgICAgIHdpbm5lclN5bWJvbD17XG4gICAgICAgICAgICB3aW5uZXIud2lubmVyTW92ZSAhPT0gdW5kZWZpbmVkID8gd2lubmVyLndpbm5lck1vdmUgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8R2FtZUZpZWxkXG4gICAgICAgICAgY2xhc3NOYW1lPXtcImJnLXdoaXRlIG1iLTggbWF4LXctWzYxNnB4XSBzZWxmLWNlbnRlclwifVxuICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnRTeW1ib2x9XG4gICAgICAgICAgbmV4dFN5bWJvbD17TkVYVF9TWU1CT0x9XG4gICAgICAgICAgcmVzZXQ9e3Jlc2V0Q2xpY2t9XG4gICAgICAgICAgY2xpY2s9e2hhbmRsZUNlbGxDbGlja31cbiAgICAgICAgICBhcnI9e2NlbGxzfVxuICAgICAgICAgIHdpbm5lcj17d2lubmVyfVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIkdhbWVJbmZvIiwiR2FtZVRpdGxlIiwiR2FtZUZpZWxkIiwidXNlR2FtZVN0YXRlIiwiUExBWUVSUyIsIkhvbWVQYWdlIiwicGxheWVycyIsImNlbGxzIiwiY3VycmVudFN5bWJvbCIsIk5FWFRfU1lNQk9MIiwiaGFuZGxlQ2VsbENsaWNrIiwicmVzZXRDbGljayIsIndpbm5lciIsImRpdiIsImNsYXNzTmFtZSIsInBsYXllciIsIm1haW4iLCJwbGF5ZXJzQW1vdW50IiwidGltZUZvclR1cm4iLCJ3aW5uZXJTeW1ib2wiLCJ3aW5uZXJNb3ZlIiwidW5kZWZpbmVkIiwiY3VycmVudCIsIm5leHRTeW1ib2wiLCJyZXNldCIsImNsaWNrIiwiYXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});