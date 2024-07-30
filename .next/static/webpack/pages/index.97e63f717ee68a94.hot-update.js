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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/header */ \"./components/Header/header.jsx\");\n/* harmony import */ var _components_Game_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Game/index */ \"./components/Game/index.js\");\n/* harmony import */ var _components_use_game_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/use-game-states */ \"./components/use-game-states.js\");\n/* harmony import */ var _components_constans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/constans */ \"./components/constans.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    const { setPlayers, players, cells, currentSymbol, NEXT_SYMBOL, handleCellClick, resetClick, winner } = (0,_components_use_game_states__WEBPACK_IMPORTED_MODULE_3__.useGameState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-100 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_header__WEBPACK_IMPORTED_MODULE_1__.Header, {\n                player: _components_constans__WEBPACK_IMPORTED_MODULE_4__.PLAYERS[0]\n            }, void 0, false, {\n                fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/pages/index.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"max-w-[616px] pt-6 flex flex-col mx-auto gap-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game_index__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {\n                        playersAmount: players,\n                        timeForTurn: 1,\n                        className: \"ml-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/pages/index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game_index__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                        playersAmount: players,\n                        currentSymbol: currentSymbol\n                    }, void 0, false, {\n                        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/pages/index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Game_index__WEBPACK_IMPORTED_MODULE_2__.GameField, {\n                        className: \"bg-white mb-8 max-w-[616px] self-center\",\n                        current: currentSymbol,\n                        nextSymbol: NEXT_SYMBOL,\n                        reset: resetClick,\n                        click: handleCellClick,\n                        arr: cells,\n                        winner: winner\n                    }, void 0, false, {\n                        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/pages/index.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/pages/index.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/pages/index.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"mMr7WNb2/fD7oMYKz7yEKkTQbfs=\", false, function() {\n    return [\n        _components_use_game_states__WEBPACK_IMPORTED_MODULE_3__.useGameState\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBTW5CO0FBQzJCO0FBQ1o7QUFFbEMsU0FBU087O0lBQ3RCLE1BQU0sRUFDSkMsVUFBVSxFQUNWQyxPQUFPLEVBQ1BDLEtBQUssRUFDTEMsYUFBYSxFQUNiQyxXQUFXLEVBQ1hDLGVBQWUsRUFDZkMsVUFBVSxFQUNWQyxNQUFNLEVBQ1AsR0FBR1YseUVBQVlBO0lBQ2hCLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2pCLDZEQUFNQTtnQkFBQ2tCLFFBQVFaLHlEQUFPLENBQUMsRUFBRTs7Ozs7OzBCQUMxQiw4REFBQ2E7Z0JBQUtGLFdBQVU7O2tDQUNkLDhEQUFDZCw2REFBU0E7d0JBQUNELGVBQWVPO3dCQUFTVyxhQUFhO3dCQUFHSCxXQUFXOzs7Ozs7a0NBQzlELDhEQUFDaEIsNERBQVFBO3dCQUFDQyxlQUFlTzt3QkFBU0UsZUFBZUE7Ozs7OztrQ0FDakQsOERBQUNQLDZEQUFTQTt3QkFDUmEsV0FBVzt3QkFDWEksU0FBU1Y7d0JBQ1RXLFlBQVlWO3dCQUNaVyxPQUFPVDt3QkFDUFUsT0FBT1g7d0JBQ1BZLEtBQUtmO3dCQUNMSyxRQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBN0J3QlI7O1FBVWxCRixxRUFBWUE7OztLQVZNRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyXCI7XG5pbXBvcnQge1xuICBHYW1lSW5mbyxcbiAgcGxheWVyc0Ftb3VudCxcbiAgR2FtZVRpdGxlLFxuICBHYW1lRmllbGQsXG59IGZyb20gXCIuLi9jb21wb25lbnRzL0dhbWUvaW5kZXhcIjtcbmltcG9ydCB7IHVzZUdhbWVTdGF0ZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VzZS1nYW1lLXN0YXRlc1wiO1xuaW1wb3J0IHsgUExBWUVSUyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnN0YW5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCB7XG4gICAgc2V0UGxheWVycyxcbiAgICBwbGF5ZXJzLFxuICAgIGNlbGxzLFxuICAgIGN1cnJlbnRTeW1ib2wsXG4gICAgTkVYVF9TWU1CT0wsXG4gICAgaGFuZGxlQ2VsbENsaWNrLFxuICAgIHJlc2V0Q2xpY2ssXG4gICAgd2lubmVyLFxuICB9ID0gdXNlR2FtZVN0YXRlKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS0xMDAgbWluLWgtc2NyZWVuXCI+XG4gICAgICA8SGVhZGVyIHBsYXllcj17UExBWUVSU1swXX0gLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1heC13LVs2MTZweF0gcHQtNiBmbGV4IGZsZXgtY29sIG14LWF1dG8gZ2FwLTEwXCI+XG4gICAgICAgIDxHYW1lVGl0bGUgcGxheWVyc0Ftb3VudD17cGxheWVyc30gdGltZUZvclR1cm49ezF9IGNsYXNzTmFtZT17XCJtbC0yXCJ9IC8+XG4gICAgICAgIDxHYW1lSW5mbyBwbGF5ZXJzQW1vdW50PXtwbGF5ZXJzfSBjdXJyZW50U3ltYm9sPXtjdXJyZW50U3ltYm9sfSAvPlxuICAgICAgICA8R2FtZUZpZWxkXG4gICAgICAgICAgY2xhc3NOYW1lPXtcImJnLXdoaXRlIG1iLTggbWF4LXctWzYxNnB4XSBzZWxmLWNlbnRlclwifVxuICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnRTeW1ib2x9XG4gICAgICAgICAgbmV4dFN5bWJvbD17TkVYVF9TWU1CT0x9XG4gICAgICAgICAgcmVzZXQ9e3Jlc2V0Q2xpY2t9XG4gICAgICAgICAgY2xpY2s9e2hhbmRsZUNlbGxDbGlja31cbiAgICAgICAgICBhcnI9e2NlbGxzfVxuICAgICAgICAgIHdpbm5lcj17d2lubmVyfVxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIkdhbWVJbmZvIiwicGxheWVyc0Ftb3VudCIsIkdhbWVUaXRsZSIsIkdhbWVGaWVsZCIsInVzZUdhbWVTdGF0ZSIsIlBMQVlFUlMiLCJIb21lUGFnZSIsInNldFBsYXllcnMiLCJwbGF5ZXJzIiwiY2VsbHMiLCJjdXJyZW50U3ltYm9sIiwiTkVYVF9TWU1CT0wiLCJoYW5kbGVDZWxsQ2xpY2siLCJyZXNldENsaWNrIiwid2lubmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicGxheWVyIiwibWFpbiIsInRpbWVGb3JUdXJuIiwiY3VycmVudCIsIm5leHRTeW1ib2wiLCJyZXNldCIsImNsaWNrIiwiYXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});