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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constans */ \"./components/constans.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextSymbol(currentMove) {\n    const nextSymbolIndex = _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER.indexOf(currentMove) + 1;\n    var _MOVES_ORDER_nextSymbolIndex;\n    return (_MOVES_ORDER_nextSymbolIndex = _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER[nextSymbolIndex]) !== null && _MOVES_ORDER_nextSymbolIndex !== void 0 ? _MOVES_ORDER_nextSymbolIndex : _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER[0];\n}\nfunction useGameState() {\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(60);\n    const [{ cells, currentSymbol }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.O\n        }));\n    const NEXT_SYMBOL = getNextSymbol(currentSymbol);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    const handleCellClick = (i)=>{\n        var _cells_i;\n        (_cells_i = cells[i]) !== null && _cells_i !== void 0 ? _cells_i : setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentSymbol: getNextSymbol(lastGameState.currentSymbol),\n                cells: lastGameState.cells.map((cell, index)=>i === index && !cell ? lastGameState.currentSymbol : cell)\n            }));\n    };\n    const resetClick = (param)=>{\n        let { cells, currentSymbol } = param;\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.O,\n                cells: new Array(19 * 19).fill(null)\n            }));\n        const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n        const secondsString = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    };\n    return {\n        cells,\n        currentSymbol,\n        NEXT_SYMBOL,\n        handleCellClick,\n        resetClick,\n        seconds,\n        setSeconds,\n        minutesString,\n        secondsString\n    };\n}\n_s(useGameState, \"Hmd+sB/lPaVG2q++N7kYNuUjkyI=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZS1nYW1lLXN0YXRlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNXO0FBRXZELFNBQVNJLGNBQWNDLFdBQVc7SUFDaEMsTUFBTUMsa0JBQWtCSCxrREFBV0EsQ0FBQ0ksT0FBTyxDQUFDRixlQUFlO1FBQ3BERjtJQUFQLE9BQU9BLENBQUFBLCtCQUFBQSxrREFBVyxDQUFDRyxnQkFBZ0IsY0FBNUJILDBDQUFBQSwrQkFBZ0NBLGtEQUFXLENBQUMsRUFBRTtBQUN2RDtBQUNPLFNBQVNLOztJQUNkLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUMsRUFBRVUsS0FBSyxFQUFFQyxhQUFhLEVBQUUsRUFBRUMsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQyxJQUFPO1lBQ2pFVSxPQUFPLElBQUlHLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7WUFDL0JILGVBQWVWLG1EQUFZQSxDQUFDYyxDQUFDO1FBQy9CO0lBQ0UsTUFBTUMsY0FBY2IsY0FBY1E7SUFDbEMsTUFBTU0sZ0JBQWdCQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNaLFVBQVUsS0FBS2EsUUFBUSxDQUFDLEdBQUc7SUFDbkUsTUFBTUMsZ0JBQWdCSixPQUFPQyxLQUFLQyxLQUFLLENBQUNaLFVBQVUsS0FBS2EsUUFBUSxDQUFDLEdBQUc7SUFFbkUsTUFBTUUsa0JBQWtCLENBQUNDO1lBQ3ZCZDtRQUFBQSxDQUFBQSxXQUFBQSxLQUFLLENBQUNjLEVBQUUsY0FBUmQsc0JBQUFBLFdBQ0VFLGFBQWEsQ0FBQ2EsZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQmQsZUFBZVIsY0FBY3NCLGNBQWNkLGFBQWE7Z0JBQ3hERCxPQUFPZSxjQUFjZixLQUFLLENBQUNnQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFDcENKLE1BQU1JLFNBQVMsQ0FBQ0QsT0FBT0YsY0FBY2QsYUFBYSxHQUFHZ0I7WUFFekQ7SUFDSjtJQUVBLE1BQU1FLGFBQWE7WUFBQyxFQUFFbkIsS0FBSyxFQUFFQyxhQUFhLEVBQUU7UUFDMUNDLGFBQWEsQ0FBQ2EsZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQmQsZUFBZVYsbURBQVlBLENBQUNjLENBQUM7Z0JBQzdCTCxPQUFPLElBQUlHLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7WUFDakM7UUFFQSxNQUFNRyxnQkFBZ0JDLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ1osVUFBVSxLQUFLYSxRQUFRLENBQUMsR0FBRztRQUNuRSxNQUFNQyxnQkFBZ0JKLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ1osVUFBVSxLQUFLYSxRQUFRLENBQUMsR0FBRztJQUNyRTtJQUVBLE9BQU87UUFDTFg7UUFDQUM7UUFDQUs7UUFDQU87UUFDQU07UUFDQXJCO1FBQ0FDO1FBQ0FRO1FBQ0FLO0lBQ0Y7QUFDRjtHQTNDZ0JmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlLWdhbWUtc3RhdGVzLmpzPzUwODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR0FNRV9TWU1CT0xTLCBNT1ZFU19PUkRFUiB9IGZyb20gXCIuL2NvbnN0YW5zXCI7XG5cbmZ1bmN0aW9uIGdldE5leHRTeW1ib2woY3VycmVudE1vdmUpIHtcbiAgY29uc3QgbmV4dFN5bWJvbEluZGV4ID0gTU9WRVNfT1JERVIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxO1xuICByZXR1cm4gTU9WRVNfT1JERVJbbmV4dFN5bWJvbEluZGV4XSA/PyBNT1ZFU19PUkRFUlswXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUoKSB7XG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDYwKTtcbiAgY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRTeW1ib2wgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG4gIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcbiAgY3VycmVudFN5bWJvbDogR0FNRV9TWU1CT0xTLk8sXG59KSk7XG4gIGNvbnN0IE5FWFRfU1lNQk9MID0gZ2V0TmV4dFN5bWJvbChjdXJyZW50U3ltYm9sKTtcbiAgY29uc3QgbWludXRlc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgLyA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3Qgc2Vjb25kc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgJSA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaSkgPT4ge1xuICAgIGNlbGxzW2ldID8/XG4gICAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+ICh7XG4gICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXG4gICAgICAgIGN1cnJlbnRTeW1ib2w6IGdldE5leHRTeW1ib2wobGFzdEdhbWVTdGF0ZS5jdXJyZW50U3ltYm9sKSxcbiAgICAgICAgY2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpbmRleCkgPT5cbiAgICAgICAgICBpID09PSBpbmRleCAmJiAhY2VsbCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudFN5bWJvbCA6IGNlbGwsXG4gICAgICAgICksXG4gICAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRDbGljayA9ICh7IGNlbGxzLCBjdXJyZW50U3ltYm9sIH0pID0+IHtcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+ICh7XG4gICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgY3VycmVudFN5bWJvbDogR0FNRV9TWU1CT0xTLk8sXG4gICAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXG4gICAgfSkpO1xuICAgIFxuICAgIGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgY29uc3Qgc2Vjb25kc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgJSA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNlbGxzLFxuICAgIGN1cnJlbnRTeW1ib2wsXG4gICAgTkVYVF9TWU1CT0wsXG4gICAgaGFuZGxlQ2VsbENsaWNrLFxuICAgIHJlc2V0Q2xpY2ssXG4gICAgc2Vjb25kcyxcbiAgICBzZXRTZWNvbmRzLFxuICAgIG1pbnV0ZXNTdHJpbmcsXG4gICAgc2Vjb25kc1N0cmluZ1xuICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR0FNRV9TWU1CT0xTIiwiTU9WRVNfT1JERVIiLCJnZXROZXh0U3ltYm9sIiwiY3VycmVudE1vdmUiLCJuZXh0U3ltYm9sSW5kZXgiLCJpbmRleE9mIiwidXNlR2FtZVN0YXRlIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJjZWxscyIsImN1cnJlbnRTeW1ib2wiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJPIiwiTkVYVF9TWU1CT0wiLCJtaW51dGVzU3RyaW5nIiwiU3RyaW5nIiwiTWF0aCIsImZsb29yIiwicGFkU3RhcnQiLCJzZWNvbmRzU3RyaW5nIiwiaGFuZGxlQ2VsbENsaWNrIiwiaSIsImxhc3RHYW1lU3RhdGUiLCJtYXAiLCJjZWxsIiwiaW5kZXgiLCJyZXNldENsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/use-game-states.js\n"));

/***/ })

});