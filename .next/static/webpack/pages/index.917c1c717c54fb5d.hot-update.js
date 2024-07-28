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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constans */ \"./components/constans.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextSymbol(currentMove) {\n    const nextSymbolIndex = _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER.indexOf(currentMove) + 1;\n    var _MOVES_ORDER_nextSymbolIndex;\n    return (_MOVES_ORDER_nextSymbolIndex = _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER[nextSymbolIndex]) !== null && _MOVES_ORDER_nextSymbolIndex !== void 0 ? _MOVES_ORDER_nextSymbolIndex : _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER[0];\n}\nfunction useGameState() {\n    _s();\n    // const [seconds, setSeconds] = useState(60);\n    const [{ cells, currentSymbol, seconds }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.O,\n            seconds: 60\n        }));\n    const NEXT_SYMBOL = getNextSymbol(currentSymbol);\n    const handleCellClick = (i)=>{\n        var _cells_i;\n        (_cells_i = cells[i]) !== null && _cells_i !== void 0 ? _cells_i : setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentSymbol: getNextSymbol(lastGameState.currentSymbol),\n                cells: lastGameState.cells.map((cell, index)=>i === index && !cell ? lastGameState.currentSymbol : cell)\n            }));\n    };\n    const resetClick = (param)=>{\n        let { cells, currentSymbol, seconds } = param;\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                cells: new Array(19 * 19).fill(null),\n                currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.O,\n                seconds: 60\n            }));\n    };\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    return {\n        setGameState,\n        cells,\n        currentSymbol,\n        NEXT_SYMBOL,\n        handleCellClick,\n        resetClick,\n        seconds,\n        minutesString,\n        secondsString\n    };\n}\n_s(useGameState, \"V3knAvnnknNnz3UZ0G5KpaklLco=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZS1nYW1lLXN0YXRlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNXO0FBRXZELFNBQVNJLGNBQWNDLFdBQVc7SUFDaEMsTUFBTUMsa0JBQWtCSCxrREFBV0EsQ0FBQ0ksT0FBTyxDQUFDRixlQUFlO1FBQ3BERjtJQUFQLE9BQU9BLENBQUFBLCtCQUFBQSxrREFBVyxDQUFDRyxnQkFBZ0IsY0FBNUJILDBDQUFBQSwrQkFBZ0NBLGtEQUFXLENBQUMsRUFBRTtBQUN2RDtBQUNPLFNBQVNLOztJQUNkLDhDQUE4QztJQUU5QyxNQUFNLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRSxFQUFFQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDLElBQU87WUFDMUVRLE9BQU8sSUFBSUksTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztZQUMvQkosZUFBZVIsbURBQVlBLENBQUNhLENBQUM7WUFDN0JKLFNBQVM7UUFDVDtJQUVBLE1BQU1LLGNBQWNaLGNBQWNNO0lBRWxDLE1BQU1PLGtCQUFrQixDQUFDQztZQUN2QlQ7UUFBQUEsQ0FBQUEsV0FBQUEsS0FBSyxDQUFDUyxFQUFFLGNBQVJULHNCQUFBQSxXQUNFRyxhQUFhLENBQUNPLGdCQUFtQjtnQkFDL0IsR0FBR0EsYUFBYTtnQkFDaEJULGVBQWVOLGNBQWNlLGNBQWNULGFBQWE7Z0JBQ3hERCxPQUFPVSxjQUFjVixLQUFLLENBQUNXLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUNwQ0osTUFBTUksU0FBUyxDQUFDRCxPQUFPRixjQUFjVCxhQUFhLEdBQUdXO1lBRXpEO0lBQ0o7SUFFQSxNQUFNRSxhQUFhO1lBQUMsRUFBQ2QsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBQztRQUNqREMsYUFBYSxDQUFDTyxnQkFBbUI7Z0JBQy9CLEdBQUdBLGFBQWE7Z0JBQ2hCVixPQUFPLElBQUlJLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7Z0JBQy9CSixlQUFlUixtREFBWUEsQ0FBQ2EsQ0FBQztnQkFDN0JKLFNBQVM7WUFDWDtJQUNGO0lBRUEsTUFBTWEsZ0JBQWdCQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNoQixVQUFVLEtBQUtpQixRQUFRLENBQUMsR0FBRztJQUNuRSxNQUFNQyxnQkFBZ0JKLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ2hCLFVBQVUsS0FBS2lCLFFBQVEsQ0FBQyxHQUFHO0lBRW5FLE9BQU87UUFDTGhCO1FBQ0FIO1FBQ0FDO1FBQ0FNO1FBQ0FDO1FBQ0FNO1FBQ0FaO1FBQ0FhO1FBQ0FLO0lBQ0Y7QUFDRjtHQTdDZ0JyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZS1nYW1lLXN0YXRlcy5qcz81MDg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdBTUVfU1lNQk9MUywgTU9WRVNfT1JERVIgfSBmcm9tIFwiLi9jb25zdGFuc1wiO1xuXG5mdW5jdGlvbiBnZXROZXh0U3ltYm9sKGN1cnJlbnRNb3ZlKSB7XG4gIGNvbnN0IG5leHRTeW1ib2xJbmRleCA9IE1PVkVTX09SREVSLmluZGV4T2YoY3VycmVudE1vdmUpICsgMTtcbiAgcmV0dXJuIE1PVkVTX09SREVSW25leHRTeW1ib2xJbmRleF0gPz8gTU9WRVNfT1JERVJbMF07XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKCkge1xuICAvLyBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSg2MCk7XG5cbiAgY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRTeW1ib2wsIHNlY29uZHMgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG4gIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcbiAgY3VycmVudFN5bWJvbDogR0FNRV9TWU1CT0xTLk8sXG4gIHNlY29uZHM6IDYwLFxuICB9KSk7XG5cbiAgY29uc3QgTkVYVF9TWU1CT0wgPSBnZXROZXh0U3ltYm9sKGN1cnJlbnRTeW1ib2wpO1xuXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpKSA9PiB7XG4gICAgY2VsbHNbaV0gPz9cbiAgICAgIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4gKHtcbiAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcbiAgICAgICAgY3VycmVudFN5bWJvbDogZ2V0TmV4dFN5bWJvbChsYXN0R2FtZVN0YXRlLmN1cnJlbnRTeW1ib2wpLFxuICAgICAgICBjZWxsczogbGFzdEdhbWVTdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGluZGV4KSA9PlxuICAgICAgICAgIGkgPT09IGluZGV4ICYmICFjZWxsID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50U3ltYm9sIDogY2VsbCxcbiAgICAgICAgKSxcbiAgICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCByZXNldENsaWNrID0gKHtjZWxscywgY3VycmVudFN5bWJvbCwgc2Vjb25kc30pID0+IHtcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+ICh7XG4gICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgICAgY3VycmVudFN5bWJvbDogR0FNRV9TWU1CT0xTLk8sXG4gICAgICBzZWNvbmRzOiA2MCxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgbWludXRlc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgLyA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3Qgc2Vjb25kc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgJSA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblxuICByZXR1cm4ge1xuICAgIHNldEdhbWVTdGF0ZSxcbiAgICBjZWxscyxcbiAgICBjdXJyZW50U3ltYm9sLFxuICAgIE5FWFRfU1lNQk9MLFxuICAgIGhhbmRsZUNlbGxDbGljayxcbiAgICByZXNldENsaWNrLFxuICAgIHNlY29uZHMsXG4gICAgbWludXRlc1N0cmluZyxcbiAgICBzZWNvbmRzU3RyaW5nXG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJNT1ZFU19PUkRFUiIsImdldE5leHRTeW1ib2wiLCJjdXJyZW50TW92ZSIsIm5leHRTeW1ib2xJbmRleCIsImluZGV4T2YiLCJ1c2VHYW1lU3RhdGUiLCJjZWxscyIsImN1cnJlbnRTeW1ib2wiLCJzZWNvbmRzIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiTyIsIk5FWFRfU1lNQk9MIiwiaGFuZGxlQ2VsbENsaWNrIiwiaSIsImxhc3RHYW1lU3RhdGUiLCJtYXAiLCJjZWxsIiwiaW5kZXgiLCJyZXNldENsaWNrIiwibWludXRlc1N0cmluZyIsIlN0cmluZyIsIk1hdGgiLCJmbG9vciIsInBhZFN0YXJ0Iiwic2Vjb25kc1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/use-game-states.js\n"));

/***/ })

});