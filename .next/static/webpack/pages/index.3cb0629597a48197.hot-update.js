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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constans */ \"./components/constans.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextSymbol(currentMove) {\n    const nextSymbolIndex = _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER.indexOf(currentMove) + 1;\n    var _MOVES_ORDER_nextSymbolIndex;\n    return (_MOVES_ORDER_nextSymbolIndex = _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER[nextSymbolIndex]) !== null && _MOVES_ORDER_nextSymbolIndex !== void 0 ? _MOVES_ORDER_nextSymbolIndex : _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER[0];\n}\nfunction useGameState() {\n    _s();\n    // const [seconds, setSeconds] = useState(60);\n    const [{ cells, currentSymbol, seconds }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.O,\n            seconds: 60\n        }));\n    const NEXT_SYMBOL = getNextSymbol(currentSymbol);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    const handleCellClick = (i)=>{\n        var _cells_i;\n        (_cells_i = cells[i]) !== null && _cells_i !== void 0 ? _cells_i : setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentSymbol: getNextSymbol(lastGameState.currentSymbol),\n                cells: lastGameState.cells.map((cell, index)=>i === index && !cell ? lastGameState.currentSymbol : cell)\n            }));\n    };\n    const resetClick = (param)=>{\n        let { cells, currentSymbol, seconds } = param;\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                cells: new Array(19 * 19).fill(null),\n                currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.O,\n                seconds: 60\n            }));\n    };\n    return {\n        setGameState,\n        cells,\n        currentSymbol,\n        NEXT_SYMBOL,\n        handleCellClick,\n        resetClick,\n        seconds,\n        minutesString,\n        secondsString\n    };\n}\n_s(useGameState, \"V3knAvnnknNnz3UZ0G5KpaklLco=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZS1nYW1lLXN0YXRlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNXO0FBRXZELFNBQVNJLGNBQWNDLFdBQVc7SUFDaEMsTUFBTUMsa0JBQWtCSCxrREFBV0EsQ0FBQ0ksT0FBTyxDQUFDRixlQUFlO1FBQ3BERjtJQUFQLE9BQU9BLENBQUFBLCtCQUFBQSxrREFBVyxDQUFDRyxnQkFBZ0IsY0FBNUJILDBDQUFBQSwrQkFBZ0NBLGtEQUFXLENBQUMsRUFBRTtBQUN2RDtBQUNPLFNBQVNLOztJQUNkLDhDQUE4QztJQUU5QyxNQUFNLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRSxFQUFFQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDLElBQU87WUFDMUVRLE9BQU8sSUFBSUksTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztZQUMvQkosZUFBZVIsbURBQVlBLENBQUNhLENBQUM7WUFDN0JKLFNBQVM7UUFDVDtJQUVBLE1BQU1LLGNBQWNaLGNBQWNNO0lBQ2xDLE1BQU1PLGdCQUFnQkMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDVCxVQUFVLEtBQUtVLFFBQVEsQ0FBQyxHQUFHO0lBQ25FLE1BQU1DLGdCQUFnQkosT0FBT0MsS0FBS0MsS0FBSyxDQUFDVCxVQUFVLEtBQUtVLFFBQVEsQ0FBQyxHQUFHO0lBRW5FLE1BQU1FLGtCQUFrQixDQUFDQztZQUN2QmY7UUFBQUEsQ0FBQUEsV0FBQUEsS0FBSyxDQUFDZSxFQUFFLGNBQVJmLHNCQUFBQSxXQUNFRyxhQUFhLENBQUNhLGdCQUFtQjtnQkFDL0IsR0FBR0EsYUFBYTtnQkFDaEJmLGVBQWVOLGNBQWNxQixjQUFjZixhQUFhO2dCQUN4REQsT0FBT2dCLGNBQWNoQixLQUFLLENBQUNpQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFDcENKLE1BQU1JLFNBQVMsQ0FBQ0QsT0FBT0YsY0FBY2YsYUFBYSxHQUFHaUI7WUFFekQ7SUFDSjtJQUVBLE1BQU1FLGFBQWE7WUFBQyxFQUFDcEIsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBQztRQUNqREMsYUFBYSxDQUFDYSxnQkFBbUI7Z0JBQy9CLEdBQUdBLGFBQWE7Z0JBQ2hCaEIsT0FBTyxJQUFJSSxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO2dCQUMvQkosZUFBZVIsbURBQVlBLENBQUNhLENBQUM7Z0JBQzdCSixTQUFTO1lBQ1g7SUFDRjtJQUVBLE9BQU87UUFDTEM7UUFDQUg7UUFDQUM7UUFDQU07UUFDQU87UUFDQU07UUFDQWxCO1FBQ0FNO1FBQ0FLO0lBQ0Y7QUFDRjtHQTVDZ0JkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXNlLWdhbWUtc3RhdGVzLmpzPzUwODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR0FNRV9TWU1CT0xTLCBNT1ZFU19PUkRFUiB9IGZyb20gXCIuL2NvbnN0YW5zXCI7XG5cbmZ1bmN0aW9uIGdldE5leHRTeW1ib2woY3VycmVudE1vdmUpIHtcbiAgY29uc3QgbmV4dFN5bWJvbEluZGV4ID0gTU9WRVNfT1JERVIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxO1xuICByZXR1cm4gTU9WRVNfT1JERVJbbmV4dFN5bWJvbEluZGV4XSA/PyBNT1ZFU19PUkRFUlswXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUoKSB7XG4gIC8vIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDYwKTtcblxuICBjb25zdCBbeyBjZWxscywgY3VycmVudFN5bWJvbCwgc2Vjb25kcyB9LCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoKCkgPT4gKHtcbiAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICBjdXJyZW50U3ltYm9sOiBHQU1FX1NZTUJPTFMuTyxcbiAgc2Vjb25kczogNjAsXG4gIH0pKTtcblxuICBjb25zdCBORVhUX1NZTUJPTCA9IGdldE5leHRTeW1ib2woY3VycmVudFN5bWJvbCk7XG4gIGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IHNlY29uZHNTdHJpbmcgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzICUgNjApKS5wYWRTdGFydCgyLCBcIjBcIik7XG5cbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGkpID0+IHtcbiAgICBjZWxsc1tpXSA/P1xuICAgICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgICBjdXJyZW50U3ltYm9sOiBnZXROZXh0U3ltYm9sKGxhc3RHYW1lU3RhdGUuY3VycmVudFN5bWJvbCksXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaW5kZXgpID0+XG4gICAgICAgICAgaSA9PT0gaW5kZXggJiYgIWNlbGwgPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRTeW1ib2wgOiBjZWxsLFxuICAgICAgICApLFxuICAgICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0Q2xpY2sgPSAoe2NlbGxzLCBjdXJyZW50U3ltYm9sLCBzZWNvbmRzfSkgPT4ge1xuICAgIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXG4gICAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXG4gICAgICBjdXJyZW50U3ltYm9sOiBHQU1FX1NZTUJPTFMuTyxcbiAgICAgIHNlY29uZHM6IDYwLFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldEdhbWVTdGF0ZSxcbiAgICBjZWxscyxcbiAgICBjdXJyZW50U3ltYm9sLFxuICAgIE5FWFRfU1lNQk9MLFxuICAgIGhhbmRsZUNlbGxDbGljayxcbiAgICByZXNldENsaWNrLFxuICAgIHNlY29uZHMsXG4gICAgbWludXRlc1N0cmluZyxcbiAgICBzZWNvbmRzU3RyaW5nXG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJNT1ZFU19PUkRFUiIsImdldE5leHRTeW1ib2wiLCJjdXJyZW50TW92ZSIsIm5leHRTeW1ib2xJbmRleCIsImluZGV4T2YiLCJ1c2VHYW1lU3RhdGUiLCJjZWxscyIsImN1cnJlbnRTeW1ib2wiLCJzZWNvbmRzIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiTyIsIk5FWFRfU1lNQk9MIiwibWludXRlc1N0cmluZyIsIlN0cmluZyIsIk1hdGgiLCJmbG9vciIsInBhZFN0YXJ0Iiwic2Vjb25kc1N0cmluZyIsImhhbmRsZUNlbGxDbGljayIsImkiLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiY2VsbCIsImluZGV4IiwicmVzZXRDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/use-game-states.js\n"));

/***/ })

});