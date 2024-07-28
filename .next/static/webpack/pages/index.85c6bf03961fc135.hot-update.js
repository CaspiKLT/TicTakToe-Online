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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constans */ \"./components/constans.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextSymbol(currentMove) {\n    const nextSymbolIndex = _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER.indexOf(currentMove) + 1;\n    var _MOVES_ORDER_nextSymbolIndex;\n    return (_MOVES_ORDER_nextSymbolIndex = _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER[nextSymbolIndex]) !== null && _MOVES_ORDER_nextSymbolIndex !== void 0 ? _MOVES_ORDER_nextSymbolIndex : _constans__WEBPACK_IMPORTED_MODULE_1__.MOVES_ORDER[0];\n}\nfunction computeWinner(cells) {\n    let fieldsize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 19, lengthSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    const gap = Math.floor(lengthSize / 2);\n    function compareElements(indexs) {\n        let res = true;\n        for(let i = 1; i < indexs.length; i++){\n            res && (res = !!cells[indexs[i]]);\n            res && (res = cells[indexs[i]] === cells[indexs[i - 1]]);\n        }\n        return res;\n    }\n    function getResults(i) {\n        const winnerConditions = [\n            [],\n            [],\n            [],\n            [] // \\\n        ];\n        for(let j = 0; j < lengthSize; j++){\n            winnerConditions[0].push(j - gap + i);\n            winnerConditions[1].push(fieldsize * (j - gap) + i);\n            winnerConditions[2].push(-fieldsize * (j - gap) + (j - gap));\n            winnerConditions[3].push(fieldsize * (j - gap) + (j - gap));\n        }\n        return winnerConditions;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            const indexRows = getResults(i);\n            const winnerIndexs = indexRows.find((row)=>compareElements(row));\n            if (winnerIndexs) {\n                return winnerIndexs;\n            }\n        }\n    }\n    return undefined;\n}\nfunction useGameState() {\n    _s();\n    const [{ cells, currentSymbol, seconds }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.O,\n            seconds: 60\n        }));\n    const NEXT_SYMBOL = getNextSymbol(currentSymbol);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    const handleCellClick = (i)=>{\n        var _cells_i;\n        (_cells_i = cells[i]) !== null && _cells_i !== void 0 ? _cells_i : setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentSymbol: getNextSymbol(lastGameState.currentSymbol),\n                cells: lastGameState.cells.map((cell, index)=>i === index && !cell ? lastGameState.currentSymbol : cell)\n            }));\n    };\n    const resetClick = (param)=>{\n        let { cells, currentSymbol, seconds } = param;\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                cells: new Array(19 * 19).fill(null),\n                currentSymbol: _constans__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.O,\n                seconds: 60\n            }));\n    };\n    console.log(computeWinner(cells));\n    return {\n        setGameState,\n        cells,\n        currentSymbol,\n        NEXT_SYMBOL,\n        handleCellClick,\n        resetClick,\n        seconds,\n        minutesString,\n        secondsString\n    };\n}\n_s(useGameState, \"sa8Rq1ATsoU+icHXGDKPfO3u98c=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZS1nYW1lLXN0YXRlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNzQjtBQUV2RCxTQUFTRyxjQUFjQyxXQUFXO0lBQ2hDLE1BQU1DLGtCQUFrQkgsa0RBQVdBLENBQUNJLE9BQU8sQ0FBQ0YsZUFBZTtRQUNwREY7SUFBUCxPQUFPQSxDQUFBQSwrQkFBQUEsa0RBQVcsQ0FBQ0csZ0JBQWdCLGNBQTVCSCwwQ0FBQUEsK0JBQWdDQSxrREFBVyxDQUFDLEVBQUU7QUFDdkQ7QUFFQSxTQUFTSyxjQUFjQyxLQUFLO1FBQUVDLFlBQUFBLGlFQUFZLElBQUlDLGFBQUFBLGlFQUFhO0lBQ3pELE1BQU1DLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ0gsYUFBYTtJQUVwQyxTQUFTSSxnQkFBZ0JDLE1BQU07UUFDN0IsSUFBSUMsTUFBTTtRQUVWLElBQUksSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixPQUFPRyxNQUFNLEVBQUVELElBQUk7WUFDcENELFFBQUFBLE1BQVEsQ0FBQyxDQUFDUixLQUFLLENBQUNPLE1BQU0sQ0FBQ0UsRUFBRSxDQUFDO1lBQzFCRCxRQUFBQSxNQUFRUixLQUFLLENBQUNPLE1BQU0sQ0FBQ0UsRUFBRSxDQUFDLEtBQUtULEtBQUssQ0FBQ08sTUFBTSxDQUFDRSxJQUFJLEVBQUUsQ0FBQztRQUNuRDtRQUVBLE9BQU9EO0lBQ1Q7SUFFQSxTQUFTRyxXQUFXRixDQUFDO1FBQ25CLE1BQU1HLG1CQUFtQjtZQUN2QixFQUFFO1lBQ0YsRUFBRTtZQUNGLEVBQUU7WUFDRixFQUFFLENBQUMsSUFBSTtTQUNSO1FBRUQsSUFBSSxJQUFJQyxJQUFJLEdBQUdBLElBQUlYLFlBQVlXLElBQUk7WUFDakNELGdCQUFnQixDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDRCxJQUFJVixNQUFNTTtZQUNuQ0csZ0JBQWdCLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNiLFlBQWFZLENBQUFBLElBQUlWLEdBQUUsSUFBS007WUFDakRHLGdCQUFnQixDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLENBQUNiLFlBQWFZLENBQUFBLElBQUlWLEdBQUUsSUFBTVUsQ0FBQUEsSUFBSVYsR0FBRTtZQUN6RFMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNiLFlBQWFZLENBQUFBLElBQUlWLEdBQUUsSUFBTVUsQ0FBQUEsSUFBSVYsR0FBRTtRQUMxRDtRQUVBLE9BQU9TO0lBQ1Q7SUFHRSxJQUFLLElBQUlILElBQUksR0FBR0EsSUFBSVQsTUFBTVUsTUFBTSxFQUFFRCxJQUFJO1FBQ3BDLElBQUlULEtBQUssQ0FBQ1MsRUFBRSxFQUFFO1lBQ1osTUFBTU0sWUFBWUosV0FBV0Y7WUFDN0IsTUFBTU8sZUFBZUQsVUFBVUUsSUFBSSxDQUFDQyxDQUFBQSxNQUFPWixnQkFBZ0JZO1lBQzNELElBQUdGLGNBQWM7Z0JBQ2YsT0FBT0E7WUFDVDtRQUNGO0lBQ0Y7SUFDQSxPQUFPRztBQUNYO0FBQ08sU0FBU0M7O0lBQ2QsTUFBTSxDQUFDLEVBQUVwQixLQUFLLEVBQUVxQixhQUFhLEVBQUVDLE9BQU8sRUFBRSxFQUFFQyxhQUFhLEdBQUcvQiwrQ0FBUUEsQ0FBQyxJQUFPO1lBQ3hFUSxPQUFPLElBQUl3QixNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1lBQy9CSixlQUFlNUIsbURBQVlBLENBQUNpQyxDQUFDO1lBQzdCSixTQUFTO1FBQ1g7SUFFQSxNQUFNSyxjQUFjaEMsY0FBYzBCO0lBQ2xDLE1BQU1PLGdCQUFnQkMsT0FBT3pCLEtBQUtDLEtBQUssQ0FBQ2lCLFVBQVUsS0FBS1EsUUFBUSxDQUFDLEdBQUc7SUFDbkUsTUFBTUMsZ0JBQWdCRixPQUFPekIsS0FBS0MsS0FBSyxDQUFDaUIsVUFBVSxLQUFLUSxRQUFRLENBQUMsR0FBRztJQUduRSxNQUFNRSxrQkFBa0IsQ0FBQ3ZCO1lBQ3ZCVDtRQUFBQSxDQUFBQSxXQUFBQSxLQUFLLENBQUNTLEVBQUUsY0FBUlQsc0JBQUFBLFdBQ0V1QixhQUFhLENBQUNVLGdCQUFtQjtnQkFDL0IsR0FBR0EsYUFBYTtnQkFDaEJaLGVBQWUxQixjQUFjc0MsY0FBY1osYUFBYTtnQkFDeERyQixPQUFPaUMsY0FBY2pDLEtBQUssQ0FBQ2tDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUNwQzNCLE1BQU0yQixTQUFTLENBQUNELE9BQU9GLGNBQWNaLGFBQWEsR0FBR2M7WUFFekQ7SUFDSjtJQUVBLE1BQU1FLGFBQWE7WUFBQyxFQUFFckMsS0FBSyxFQUFFcUIsYUFBYSxFQUFFQyxPQUFPLEVBQUU7UUFDbkRDLGFBQWEsQ0FBQ1UsZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQmpDLE9BQU8sSUFBSXdCLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7Z0JBQy9CSixlQUFlNUIsbURBQVlBLENBQUNpQyxDQUFDO2dCQUM3QkosU0FBUztZQUNYO0lBQ0Y7SUFDQWdCLFFBQVFDLEdBQUcsQ0FBQ3hDLGNBQWNDO0lBRTFCLE9BQU87UUFDTHVCO1FBQ0F2QjtRQUNBcUI7UUFDQU07UUFDQUs7UUFDQUs7UUFDQWY7UUFDQU07UUFDQUc7SUFDRjtBQUNGO0dBNUNnQlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2UtZ2FtZS1zdGF0ZXMuanM/NTA4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR0FNRV9TWU1CT0xTLCBNT1ZFU19PUkRFUiB9IGZyb20gXCIuL2NvbnN0YW5zXCI7XG5cbmZ1bmN0aW9uIGdldE5leHRTeW1ib2woY3VycmVudE1vdmUpIHtcbiAgY29uc3QgbmV4dFN5bWJvbEluZGV4ID0gTU9WRVNfT1JERVIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxO1xuICByZXR1cm4gTU9WRVNfT1JERVJbbmV4dFN5bWJvbEluZGV4XSA/PyBNT1ZFU19PUkRFUlswXTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVdpbm5lcihjZWxscywgZmllbGRzaXplID0gMTksIGxlbmd0aFNpemUgPSA1KXtcbiAgY29uc3QgZ2FwID0gTWF0aC5mbG9vcihsZW5ndGhTaXplIC8gMik7XG5cbiAgZnVuY3Rpb24gY29tcGFyZUVsZW1lbnRzKGluZGV4cyl7XG4gICAgbGV0IHJlcyA9IHRydWU7XG5cbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgaW5kZXhzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHJlcyAmJj0gISFjZWxsc1tpbmRleHNbaV1dO1xuICAgICAgcmVzICYmPSBjZWxsc1tpbmRleHNbaV1dID09PSBjZWxsc1tpbmRleHNbaSAtIDFdXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVzdWx0cyhpKXtcbiAgICBjb25zdCB3aW5uZXJDb25kaXRpb25zID0gW1xuICAgICAgW10sIC8vIC1cbiAgICAgIFtdLCAvLyB8XG4gICAgICBbXSwgLy8gL1xuICAgICAgW10gLy8gXFxcbiAgICBdXG5cbiAgICBmb3IobGV0IGogPSAwOyBqIDwgbGVuZ3RoU2l6ZTsgaisrKXtcbiAgICAgIHdpbm5lckNvbmRpdGlvbnNbMF0ucHVzaChqIC0gZ2FwICsgaSk7XG4gICAgICB3aW5uZXJDb25kaXRpb25zWzFdLnB1c2goZmllbGRzaXplICogKGogLSBnYXApICsgaSk7XG4gICAgICB3aW5uZXJDb25kaXRpb25zWzJdLnB1c2goLWZpZWxkc2l6ZSAqIChqIC0gZ2FwKSArIChqIC0gZ2FwKSk7XG4gICAgICB3aW5uZXJDb25kaXRpb25zWzNdLnB1c2goZmllbGRzaXplICogKGogLSBnYXApICsgKGogLSBnYXApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2lubmVyQ29uZGl0aW9ucztcbiAgfVxuXG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICBpZiAoY2VsbHNbaV0pIHtcbiAgICAgICAgY29uc3QgaW5kZXhSb3dzID0gZ2V0UmVzdWx0cyhpKTtcbiAgICAgICAgY29uc3Qgd2lubmVySW5kZXhzID0gaW5kZXhSb3dzLmZpbmQocm93ID0+IGNvbXBhcmVFbGVtZW50cyhyb3cpKTtcbiAgICAgICAgaWYod2lubmVySW5kZXhzKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbm5lckluZGV4cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZSgpIHtcbiAgY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRTeW1ib2wsIHNlY29uZHMgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG4gICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgIGN1cnJlbnRTeW1ib2w6IEdBTUVfU1lNQk9MUy5PLFxuICAgIHNlY29uZHM6IDYwLFxuICB9KSk7XG5cbiAgY29uc3QgTkVYVF9TWU1CT0wgPSBnZXROZXh0U3ltYm9sKGN1cnJlbnRTeW1ib2wpO1xuICBjb25zdCBtaW51dGVzU3RyaW5nID0gU3RyaW5nKE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBjb25zdCBzZWNvbmRzU3RyaW5nID0gU3RyaW5nKE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuXG5cbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGkpID0+IHtcbiAgICBjZWxsc1tpXSA/P1xuICAgICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiAoe1xuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgICBjdXJyZW50U3ltYm9sOiBnZXROZXh0U3ltYm9sKGxhc3RHYW1lU3RhdGUuY3VycmVudFN5bWJvbCksXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaW5kZXgpID0+XG4gICAgICAgICAgaSA9PT0gaW5kZXggJiYgIWNlbGwgPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRTeW1ib2wgOiBjZWxsLFxuICAgICAgICApLFxuICAgICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0Q2xpY2sgPSAoeyBjZWxscywgY3VycmVudFN5bWJvbCwgc2Vjb25kcyB9KSA9PiB7XG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiAoe1xuICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcbiAgICAgIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcbiAgICAgIGN1cnJlbnRTeW1ib2w6IEdBTUVfU1lNQk9MUy5PLFxuICAgICAgc2Vjb25kczogNjAsXG4gICAgfSkpO1xuICB9O1xuICBjb25zb2xlLmxvZyhjb21wdXRlV2lubmVyKGNlbGxzKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRHYW1lU3RhdGUsXG4gICAgY2VsbHMsXG4gICAgY3VycmVudFN5bWJvbCxcbiAgICBORVhUX1NZTUJPTCxcbiAgICBoYW5kbGVDZWxsQ2xpY2ssXG4gICAgcmVzZXRDbGljayxcbiAgICBzZWNvbmRzLFxuICAgIG1pbnV0ZXNTdHJpbmcsXG4gICAgc2Vjb25kc1N0cmluZyxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdBTUVfU1lNQk9MUyIsIk1PVkVTX09SREVSIiwiZ2V0TmV4dFN5bWJvbCIsImN1cnJlbnRNb3ZlIiwibmV4dFN5bWJvbEluZGV4IiwiaW5kZXhPZiIsImNvbXB1dGVXaW5uZXIiLCJjZWxscyIsImZpZWxkc2l6ZSIsImxlbmd0aFNpemUiLCJnYXAiLCJNYXRoIiwiZmxvb3IiLCJjb21wYXJlRWxlbWVudHMiLCJpbmRleHMiLCJyZXMiLCJpIiwibGVuZ3RoIiwiZ2V0UmVzdWx0cyIsIndpbm5lckNvbmRpdGlvbnMiLCJqIiwicHVzaCIsImluZGV4Um93cyIsIndpbm5lckluZGV4cyIsImZpbmQiLCJyb3ciLCJ1bmRlZmluZWQiLCJ1c2VHYW1lU3RhdGUiLCJjdXJyZW50U3ltYm9sIiwic2Vjb25kcyIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIk8iLCJORVhUX1NZTUJPTCIsIm1pbnV0ZXNTdHJpbmciLCJTdHJpbmciLCJwYWRTdGFydCIsInNlY29uZHNTdHJpbmciLCJoYW5kbGVDZWxsQ2xpY2siLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiY2VsbCIsImluZGV4IiwicmVzZXRDbGljayIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/use-game-states.js\n"));

/***/ })

});