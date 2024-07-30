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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constans */ \"./components/constans.js\");\n/* harmony import */ var _Game_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game/model */ \"./components/Game/model.js\");\nvar _s = $RefreshSig$();\n\n\n\nfunction useGameState() {\n    _s();\n    const [{ cells, currentSymbol, seconds }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.X,\n            seconds: 60\n        }));\n    const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    const NEXT_SYMBOL = (0,_Game_model__WEBPACK_IMPORTED_MODULE_2__.getNextSymbol)(currentSymbol);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    const handleCellClick = (i)=>{\n        var _cells_i;\n        (_cells_i = cells[i]) !== null && _cells_i !== void 0 ? _cells_i : setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentSymbol: (0,_Game_model__WEBPACK_IMPORTED_MODULE_2__.getNextSymbol)(lastGameState.currentSymbol),\n                cells: lastGameState.cells.map((cell, index)=>i === index && !cell ? lastGameState.currentSymbol : cell)\n            }));\n    };\n    const resetClick = (param)=>{\n        let { cells, currentSymbol, seconds } = param;\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                cells: new Array(19 * 19).fill(null),\n                currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.X,\n                seconds: 60\n            }));\n    };\n    let winner = (0,_Game_model__WEBPACK_IMPORTED_MODULE_2__.computeWinner)(cells, 19, 5);\n    return {\n        setGameState,\n        players,\n        cells,\n        currentSymbol,\n        NEXT_SYMBOL,\n        handleCellClick,\n        resetClick,\n        seconds,\n        minutesString,\n        secondsString,\n        winner\n    };\n}\n_s(useGameState, \"/DVUnOWYEgqGH/nwP9ceKTXnO/Q=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZS1nYW1lLXN0YXRlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDUztBQUNrQjtBQUdyRCxTQUFTSTs7SUFDZCxNQUFNLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRSxFQUFFQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDLElBQU87WUFDeEVLLE9BQU8sSUFBSUksTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztZQUMvQkosZUFBZUwsbURBQVlBLENBQUNVLENBQUM7WUFDN0JKLFNBQVM7UUFDWDtJQUVBLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNYyxjQUFjWiwwREFBYUEsQ0FBQ0k7SUFDbEMsTUFBTVMsZ0JBQWdCQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNYLFVBQVUsS0FBS1ksUUFBUSxDQUFDLEdBQUc7SUFDbkUsTUFBTUMsZ0JBQWdCSixPQUFPQyxLQUFLQyxLQUFLLENBQUNYLFVBQVUsS0FBS1ksUUFBUSxDQUFDLEdBQUc7SUFHbkUsTUFBTUUsa0JBQWtCLENBQUNDO1lBQ3ZCakI7UUFBQUEsQ0FBQUEsV0FBQUEsS0FBSyxDQUFDaUIsRUFBRSxjQUFSakIsc0JBQUFBLFdBQ0VHLGFBQWEsQ0FBQ2UsZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQmpCLGVBQWVKLDBEQUFhQSxDQUFDcUIsY0FBY2pCLGFBQWE7Z0JBQ3hERCxPQUFPa0IsY0FBY2xCLEtBQUssQ0FBQ21CLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUNwQ0osTUFBTUksU0FBUyxDQUFDRCxPQUFPRixjQUFjakIsYUFBYSxHQUFHbUI7WUFFekQ7SUFDSjtJQUVBLE1BQU1FLGFBQWE7WUFBQyxFQUFFdEIsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRTtRQUNuREMsYUFBYSxDQUFDZSxnQkFBbUI7Z0JBQy9CLEdBQUdBLGFBQWE7Z0JBQ2hCbEIsT0FBTyxJQUFJSSxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO2dCQUMvQkosZUFBZUwsbURBQVlBLENBQUNVLENBQUM7Z0JBQzdCSixTQUFTO1lBQ1g7SUFDRjtJQUVBLElBQUlxQixTQUFTekIsMERBQWFBLENBQUNFLE9BQU8sSUFBSTtJQUV0QyxPQUFPO1FBQ0xHO1FBQ0FJO1FBQ0FQO1FBQ0FDO1FBQ0FRO1FBQ0FPO1FBQ0FNO1FBQ0FwQjtRQUNBUTtRQUNBSztRQUNBUTtJQUNGO0FBQ0Y7R0FqRGdCeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2UtZ2FtZS1zdGF0ZXMuanM/NTA4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSBcIi4vY29uc3RhbnNcIjtcbmltcG9ydCB7IGdldE5leHRTeW1ib2wsIGNvbXB1dGVXaW5uZXIgfSBmcm9tIFwiLi9HYW1lL21vZGVsXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZSgpIHtcbiAgY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRTeW1ib2wsIHNlY29uZHMgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG4gICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgIGN1cnJlbnRTeW1ib2w6IEdBTUVfU1lNQk9MUy5YLFxuICAgIHNlY29uZHM6IDYwLFxuICB9KSk7XG5cbiAgY29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgTkVYVF9TWU1CT0wgPSBnZXROZXh0U3ltYm9sKGN1cnJlbnRTeW1ib2wpO1xuICBjb25zdCBtaW51dGVzU3RyaW5nID0gU3RyaW5nKE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBjb25zdCBzZWNvbmRzU3RyaW5nID0gU3RyaW5nKE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuXG5cbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGkpID0+IHtcbiAgICBjZWxsc1tpXSA/P1xuICAgICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgICBjdXJyZW50U3ltYm9sOiBnZXROZXh0U3ltYm9sKGxhc3RHYW1lU3RhdGUuY3VycmVudFN5bWJvbCksXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaW5kZXgpID0+XG4gICAgICAgICAgaSA9PT0gaW5kZXggJiYgIWNlbGwgPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRTeW1ib2wgOiBjZWxsLFxuICAgICAgICApLFxuICAgICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0Q2xpY2sgPSAoeyBjZWxscywgY3VycmVudFN5bWJvbCwgc2Vjb25kcyB9KSA9PiB7XG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiAoe1xuICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcbiAgICAgIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcbiAgICAgIGN1cnJlbnRTeW1ib2w6IEdBTUVfU1lNQk9MUy5YLFxuICAgICAgc2Vjb25kczogNjAsXG4gICAgfSkpO1xuICB9O1xuXG4gIGxldCB3aW5uZXIgPSBjb21wdXRlV2lubmVyKGNlbGxzLCAxOSwgNSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRHYW1lU3RhdGUsXG4gICAgcGxheWVycyxcbiAgICBjZWxscyxcbiAgICBjdXJyZW50U3ltYm9sLFxuICAgIE5FWFRfU1lNQk9MLFxuICAgIGhhbmRsZUNlbGxDbGljayxcbiAgICByZXNldENsaWNrLFxuICAgIHNlY29uZHMsXG4gICAgbWludXRlc1N0cmluZyxcbiAgICBzZWNvbmRzU3RyaW5nLFxuICAgIHdpbm5lcixcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdBTUVfU1lNQk9MUyIsImdldE5leHRTeW1ib2wiLCJjb21wdXRlV2lubmVyIiwidXNlR2FtZVN0YXRlIiwiY2VsbHMiLCJjdXJyZW50U3ltYm9sIiwic2Vjb25kcyIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIlgiLCJwbGF5ZXJzIiwic2V0UGxheWVycyIsIk5FWFRfU1lNQk9MIiwibWludXRlc1N0cmluZyIsIlN0cmluZyIsIk1hdGgiLCJmbG9vciIsInBhZFN0YXJ0Iiwic2Vjb25kc1N0cmluZyIsImhhbmRsZUNlbGxDbGljayIsImkiLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiY2VsbCIsImluZGV4IiwicmVzZXRDbGljayIsIndpbm5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/use-game-states.js\n"));

/***/ })

});