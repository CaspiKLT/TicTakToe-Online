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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constans */ \"./components/constans.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextSymbol(currentMove) {\n    const nextSymbolIndex = _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER.indexOf(currentMove) + 1;\n    var _MOVES_ORDER_nextSymbolIndex;\n    return (_MOVES_ORDER_nextSymbolIndex = _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER[nextSymbolIndex]) !== null && _MOVES_ORDER_nextSymbolIndex !== void 0 ? _MOVES_ORDER_nextSymbolIndex : _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER[0];\n}\nfunction useGameState() {\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(60);\n    const [{ cells, currentSymbol }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.O\n        }));\n    const NEXT_SYMBOL = getNextSymbol(currentSymbol);\n    const handleCellClick = (i)=>{\n        var _cells_i;\n        (_cells_i = cells[i]) !== null && _cells_i !== void 0 ? _cells_i : setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentSymbol: getNextSymbol(lastGameState.currentSymbol),\n                cells: lastGameState.cells.map((cell, index)=>i === index && !cell ? lastGameState.currentSymbol : cell)\n            }));\n    };\n    const resetClick = (param)=>{\n        let { cells, currentSymbol } = param;\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.O,\n                cells: new Array(19 * 19).fill(null)\n            }));\n        setSeconds((prevTime)=>prevTime = 60);\n    };\n    return {\n        cells,\n        currentSymbol,\n        NEXT_SYMBOL,\n        handleCellClick,\n        resetClick,\n        seconds,\n        setSeconds\n    };\n}\n_s(useGameState, \"Hmd+sB/lPaVG2q++N7kYNuUjkyI=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZS1nYW1lLXN0YXRlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNXO0FBRXZELFNBQVNJLGNBQWNDLFdBQVc7SUFDaEMsTUFBTUMsa0JBQWtCSCxrREFBV0EsQ0FBQ0ksT0FBTyxDQUFDRixlQUFlO1FBQ3BERjtJQUFQLE9BQU9BLENBQUFBLCtCQUFBQSxrREFBVyxDQUFDRyxnQkFBZ0IsY0FBNUJILDBDQUFBQSwrQkFBZ0NBLGtEQUFXLENBQUMsRUFBRTtBQUN2RDtBQUNPLFNBQVNLOztJQUNkLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUMsRUFBRVUsS0FBSyxFQUFFQyxhQUFhLEVBQUUsRUFBRUMsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQyxJQUFPO1lBQ2pFVSxPQUFPLElBQUlHLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7WUFDL0JILGVBQWVWLG1EQUFZQSxDQUFDYyxDQUFDO1FBQy9CO0lBQ0UsTUFBTUMsY0FBY2IsY0FBY1E7SUFFbEMsTUFBTU0sa0JBQWtCLENBQUNDO1lBQ3ZCUjtRQUFBQSxDQUFBQSxXQUFBQSxLQUFLLENBQUNRLEVBQUUsY0FBUlIsc0JBQUFBLFdBQ0VFLGFBQWEsQ0FBQ08sZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQlIsZUFBZVIsY0FBY2dCLGNBQWNSLGFBQWE7Z0JBQ3hERCxPQUFPUyxjQUFjVCxLQUFLLENBQUNVLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUNwQ0osTUFBTUksU0FBUyxDQUFDRCxPQUFPRixjQUFjUixhQUFhLEdBQUdVO1lBRXpEO0lBQ0o7SUFFQSxNQUFNRSxhQUFhO1lBQUMsRUFBRWIsS0FBSyxFQUFFQyxhQUFhLEVBQUM7UUFDekNDLGFBQWEsQ0FBQ08sZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQlIsZUFBZVYsbURBQVlBLENBQUNjLENBQUM7Z0JBQzdCTCxPQUFPLElBQUlHLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7WUFDakM7UUFFQUwsV0FBVyxDQUFDZSxXQUFhQSxXQUFXO0lBQ3RDO0lBRUEsT0FBTztRQUNMZDtRQUNBQztRQUNBSztRQUNBQztRQUNBTTtRQUNBZjtRQUNBQztJQUNGO0FBQ0Y7R0F0Q2dCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZS1nYW1lLXN0YXRlcy5qcz81MDg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdBTUVfU1lNQk9MUywgTU9WRVNfT1JERVIgfSBmcm9tIFwiLi9jb25zdGFuc1wiO1xuXG5mdW5jdGlvbiBnZXROZXh0U3ltYm9sKGN1cnJlbnRNb3ZlKSB7XG4gIGNvbnN0IG5leHRTeW1ib2xJbmRleCA9IE1PVkVTX09SREVSLmluZGV4T2YoY3VycmVudE1vdmUpICsgMTtcbiAgcmV0dXJuIE1PVkVTX09SREVSW25leHRTeW1ib2xJbmRleF0gPz8gTU9WRVNfT1JERVJbMF07XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKCkge1xuICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSg2MCk7XG4gIGNvbnN0IFt7IGNlbGxzLCBjdXJyZW50U3ltYm9sIH0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoe1xuICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXG4gIGN1cnJlbnRTeW1ib2w6IEdBTUVfU1lNQk9MUy5PLFxufSkpO1xuICBjb25zdCBORVhUX1NZTUJPTCA9IGdldE5leHRTeW1ib2woY3VycmVudFN5bWJvbCk7XG5cbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGkpID0+IHtcbiAgICBjZWxsc1tpXSA/P1xuICAgICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgICBjdXJyZW50U3ltYm9sOiBnZXROZXh0U3ltYm9sKGxhc3RHYW1lU3RhdGUuY3VycmVudFN5bWJvbCksXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaW5kZXgpID0+XG4gICAgICAgICAgaSA9PT0gaW5kZXggJiYgIWNlbGwgPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRTeW1ib2wgOiBjZWxsLFxuICAgICAgICApLFxuICAgICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0Q2xpY2sgPSAoeyBjZWxscywgY3VycmVudFN5bWJvbH0pID0+IHtcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+ICh7XG4gICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgY3VycmVudFN5bWJvbDogR0FNRV9TWU1CT0xTLk8sXG4gICAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXG4gICAgfSkpO1xuXG4gICAgc2V0U2Vjb25kcygocHJldlRpbWUpID0+IHByZXZUaW1lID0gNjApO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2VsbHMsXG4gICAgY3VycmVudFN5bWJvbCxcbiAgICBORVhUX1NZTUJPTCxcbiAgICBoYW5kbGVDZWxsQ2xpY2ssXG4gICAgcmVzZXRDbGljayxcbiAgICBzZWNvbmRzLFxuICAgIHNldFNlY29uZHNcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkdBTUVfU1lNQk9MUyIsIk1PVkVTX09SREVSIiwiZ2V0TmV4dFN5bWJvbCIsImN1cnJlbnRNb3ZlIiwibmV4dFN5bWJvbEluZGV4IiwiaW5kZXhPZiIsInVzZUdhbWVTdGF0ZSIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwiY2VsbHMiLCJjdXJyZW50U3ltYm9sIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiTyIsIk5FWFRfU1lNQk9MIiwiaGFuZGxlQ2VsbENsaWNrIiwiaSIsImxhc3RHYW1lU3RhdGUiLCJtYXAiLCJjZWxsIiwiaW5kZXgiLCJyZXNldENsaWNrIiwicHJldlRpbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/use-game-states.js\n"));

/***/ })

});