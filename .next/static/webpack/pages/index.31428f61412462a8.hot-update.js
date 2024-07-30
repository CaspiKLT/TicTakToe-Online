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

/***/ "./components/use-game-states.js":
/*!***************************************!*\
  !*** ./components/use-game-states.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constans */ \"./components/constans.js\");\n/* harmony import */ var _Game_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game/model */ \"./components/Game/model.js\");\nvar _s = $RefreshSig$();\n\n\n\nfunction useGameState() {\n    _s();\n    const [{ cells, currentSymbol, seconds, playersAmount }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.X,\n            seconds: 60\n        }));\n    const NEXT_SYMBOL = (0,_Game_model__WEBPACK_IMPORTED_MODULE_2__.getNextSymbol)(currentSymbol);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    const handleCellClick = (i)=>{\n        var _cells_i;\n        (_cells_i = cells[i]) !== null && _cells_i !== void 0 ? _cells_i : setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentSymbol: (0,_Game_model__WEBPACK_IMPORTED_MODULE_2__.getNextSymbol)(lastGameState.currentSymbol),\n                cells: lastGameState.cells.map((cell, index)=>i === index && !cell ? lastGameState.currentSymbol : cell)\n            }));\n    };\n    const resetClick = (param)=>{\n        let { cells, currentSymbol, seconds } = param;\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                cells: new Array(19 * 19).fill(null),\n                currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.X,\n                seconds: 60\n            }));\n    };\n    let winner = (0,_Game_model__WEBPACK_IMPORTED_MODULE_2__.computeWinner)(cells, 19, 5);\n    return {\n        setGameState,\n        cells,\n        currentSymbol,\n        NEXT_SYMBOL,\n        handleCellClick,\n        resetClick,\n        seconds,\n        minutesString,\n        secondsString,\n        winner\n    };\n}\n_s(useGameState, \"iDzX0PtdnTBizY7cCbuUF1l0Z/8=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZS1nYW1lLXN0YXRlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDUztBQUNrQjtBQUdyRCxTQUFTSTs7SUFDZCxNQUFNLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRUMsYUFBYSxFQUFFLEVBQUVDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsSUFBTztZQUN2RkssT0FBTyxJQUFJSyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1lBQy9CTCxlQUFlTCxtREFBWUEsQ0FBQ1csQ0FBQztZQUM3QkwsU0FBUztRQUNYO0lBRUEsTUFBTU0sY0FBY1gsMERBQWFBLENBQUNJO0lBQ2xDLE1BQU1RLGdCQUFnQkMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDVixVQUFVLEtBQUtXLFFBQVEsQ0FBQyxHQUFHO0lBQ25FLE1BQU1DLGdCQUFnQkosT0FBT0MsS0FBS0MsS0FBSyxDQUFDVixVQUFVLEtBQUtXLFFBQVEsQ0FBQyxHQUFHO0lBR25FLE1BQU1FLGtCQUFrQixDQUFDQztZQUN2QmhCO1FBQUFBLENBQUFBLFdBQUFBLEtBQUssQ0FBQ2dCLEVBQUUsY0FBUmhCLHNCQUFBQSxXQUNFSSxhQUFhLENBQUNhLGdCQUFtQjtnQkFDL0IsR0FBR0EsYUFBYTtnQkFDaEJoQixlQUFlSiwwREFBYUEsQ0FBQ29CLGNBQWNoQixhQUFhO2dCQUN4REQsT0FBT2lCLGNBQWNqQixLQUFLLENBQUNrQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFDcENKLE1BQU1JLFNBQVMsQ0FBQ0QsT0FBT0YsY0FBY2hCLGFBQWEsR0FBR2tCO1lBRXpEO0lBQ0o7SUFFQSxNQUFNRSxhQUFhO1lBQUMsRUFBRXJCLEtBQUssRUFBRUMsYUFBYSxFQUFFQyxPQUFPLEVBQUU7UUFDbkRFLGFBQWEsQ0FBQ2EsZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQmpCLE9BQU8sSUFBSUssTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztnQkFDL0JMLGVBQWVMLG1EQUFZQSxDQUFDVyxDQUFDO2dCQUM3QkwsU0FBUztZQUNYO0lBQ0Y7SUFFQSxJQUFJb0IsU0FBU3hCLDBEQUFhQSxDQUFDRSxPQUFPLElBQUk7SUFFdEMsT0FBTztRQUNMSTtRQUNBSjtRQUNBQztRQUNBTztRQUNBTztRQUNBTTtRQUNBbkI7UUFDQU87UUFDQUs7UUFDQVE7SUFDRjtBQUNGO0dBOUNnQnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlLWdhbWUtc3RhdGVzLmpzPzUwODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gXCIuL2NvbnN0YW5zXCI7XG5pbXBvcnQgeyBnZXROZXh0U3ltYm9sLCBjb21wdXRlV2lubmVyIH0gZnJvbSBcIi4vR2FtZS9tb2RlbFwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUoKSB7XG4gIGNvbnN0IFt7IGNlbGxzLCBjdXJyZW50U3ltYm9sLCBzZWNvbmRzLCBwbGF5ZXJzQW1vdW50IH0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoe1xuICAgIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcbiAgICBjdXJyZW50U3ltYm9sOiBHQU1FX1NZTUJPTFMuWCxcbiAgICBzZWNvbmRzOiA2MCxcbiAgfSkpO1xuXG4gIGNvbnN0IE5FWFRfU1lNQk9MID0gZ2V0TmV4dFN5bWJvbChjdXJyZW50U3ltYm9sKTtcbiAgY29uc3QgbWludXRlc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgLyA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3Qgc2Vjb25kc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgJSA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblxuXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpKSA9PiB7XG4gICAgY2VsbHNbaV0gPz9cbiAgICAgIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcbiAgICAgICAgY3VycmVudFN5bWJvbDogZ2V0TmV4dFN5bWJvbChsYXN0R2FtZVN0YXRlLmN1cnJlbnRTeW1ib2wpLFxuICAgICAgICBjZWxsczogbGFzdEdhbWVTdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGluZGV4KSA9PlxuICAgICAgICAgIGkgPT09IGluZGV4ICYmICFjZWxsID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50U3ltYm9sIDogY2VsbCxcbiAgICAgICAgKSxcbiAgICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCByZXNldENsaWNrID0gKHsgY2VsbHMsIGN1cnJlbnRTeW1ib2wsIHNlY29uZHMgfSkgPT4ge1xuICAgIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXG4gICAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXG4gICAgICBjdXJyZW50U3ltYm9sOiBHQU1FX1NZTUJPTFMuWCxcbiAgICAgIHNlY29uZHM6IDYwLFxuICAgIH0pKTtcbiAgfTtcblxuICBsZXQgd2lubmVyID0gY29tcHV0ZVdpbm5lcihjZWxscywgMTksIDUpO1xuXG4gIHJldHVybiB7XG4gICAgc2V0R2FtZVN0YXRlLFxuICAgIGNlbGxzLFxuICAgIGN1cnJlbnRTeW1ib2wsXG4gICAgTkVYVF9TWU1CT0wsXG4gICAgaGFuZGxlQ2VsbENsaWNrLFxuICAgIHJlc2V0Q2xpY2ssXG4gICAgc2Vjb25kcyxcbiAgICBtaW51dGVzU3RyaW5nLFxuICAgIHNlY29uZHNTdHJpbmcsXG4gICAgd2lubmVyLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiR0FNRV9TWU1CT0xTIiwiZ2V0TmV4dFN5bWJvbCIsImNvbXB1dGVXaW5uZXIiLCJ1c2VHYW1lU3RhdGUiLCJjZWxscyIsImN1cnJlbnRTeW1ib2wiLCJzZWNvbmRzIiwicGxheWVyc0Ftb3VudCIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIlgiLCJORVhUX1NZTUJPTCIsIm1pbnV0ZXNTdHJpbmciLCJTdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJwYWRTdGFydCIsInNlY29uZHNTdHJpbmciLCJoYW5kbGVDZWxsQ2xpY2siLCJpIiwibGFzdEdhbWVTdGF0ZSIsIm1hcCIsImNlbGwiLCJpbmRleCIsInJlc2V0Q2xpY2siLCJ3aW5uZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/use-game-states.js\n"));

/***/ })

});