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

/***/ "./components/Game/model.js":
/*!**********************************!*\
  !*** ./components/Game/model.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computeWinner: function() { return /* binding */ computeWinner; },\n/* harmony export */   getNextSymbol: function() { return /* binding */ getNextSymbol; },\n/* harmony export */   getPrevSymbol: function() { return /* binding */ getPrevSymbol; }\n/* harmony export */ });\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constans */ \"./components/constans.js\");\n\nfunction getNextSymbol(currentMove, amount) {\n    const currentOrder = _constans__WEBPACK_IMPORTED_MODULE_0__.MOVES_ORDER.slice(0, amount);\n    const nextSymbolIndex = currentOrder.indexOf(currentMove) + 1;\n    var _currentOrder_nextSymbolIndex;\n    return (_currentOrder_nextSymbolIndex = currentOrder[nextSymbolIndex]) !== null && _currentOrder_nextSymbolIndex !== void 0 ? _currentOrder_nextSymbolIndex : currentOrder[0];\n}\nfunction getPrevSymbol(currentMove, amount) {\n    const currentOrder = _constans__WEBPACK_IMPORTED_MODULE_0__.MOVES_ORDER.slice(0, amount);\n    const prevSymbolIndex = amount === 2 && currentOrder.indexOf(currentMove) === 0 ? 1 :  false ? 0 : 0;\n    var _currentOrder_prevSymbolIndex;\n    return (_currentOrder_prevSymbolIndex = currentOrder[prevSymbolIndex]) !== null && _currentOrder_prevSymbolIndex !== void 0 ? _currentOrder_prevSymbolIndex : currentOrder[0];\n}\nfunction computeWinner(cells, winnerMove) {\n    let fieldsize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19, lengthSize = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 5;\n    const gap = Math.floor(lengthSize / 2);\n    function compareElements(indexs) {\n        let res = true;\n        for(let i = 1; i < indexs.length; i++){\n            res && (res = !!cells[indexs[i]]);\n            res && (res = cells[indexs[i]] === cells[indexs[i - 1]]);\n        }\n        return res;\n    }\n    function getResults(i) {\n        const winnerConditions = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < lengthSize; j++){\n            winnerConditions[0].push(j - gap + i);\n            winnerConditions[1].push(fieldsize * (j - gap) + i);\n            winnerConditions[2].push(-fieldsize * (j - gap) + (j - gap) + i);\n            winnerConditions[3].push(fieldsize * (j - gap) + (j - gap) + i);\n        }\n        return winnerConditions;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            const indexRows = getResults(i);\n            const winnerIndexs = indexRows.find((row)=>compareElements(row));\n            if (winnerIndexs) {\n                return {\n                    winnerIndexs,\n                    winnerMove\n                };\n            }\n        }\n    }\n    return undefined;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvbW9kZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUVuQyxTQUFTQyxjQUFjQyxXQUFXLEVBQUVDLE1BQU07SUFDL0MsTUFBTUMsZUFBZUosa0RBQVdBLENBQUNLLEtBQUssQ0FBQyxHQUFHRjtJQUMxQyxNQUFNRyxrQkFBa0JGLGFBQWFHLE9BQU8sQ0FBQ0wsZUFBZTtRQUNyREU7SUFBUCxPQUFPQSxDQUFBQSxnQ0FBQUEsWUFBWSxDQUFDRSxnQkFBZ0IsY0FBN0JGLDJDQUFBQSxnQ0FBaUNBLFlBQVksQ0FBQyxFQUFFO0FBQ3pEO0FBRU8sU0FBU0ksY0FBY04sV0FBVyxFQUFFQyxNQUFNO0lBQy9DLE1BQU1DLGVBQWVKLGtEQUFXQSxDQUFDSyxLQUFLLENBQUMsR0FBR0Y7SUFDMUMsTUFBTU0sa0JBQWtCTixXQUFXLEtBQUtDLGFBQWFHLE9BQU8sQ0FBQ0wsaUJBQWlCLElBQUksSUFBSSxNQUFDLEdBQUdFLENBQXFDLEdBQUc7UUFDM0hBO0lBQVAsT0FBT0EsQ0FBQUEsZ0NBQUFBLFlBQVksQ0FBQ0ssZ0JBQWdCLGNBQTdCTCwyQ0FBQUEsZ0NBQWlDQSxZQUFZLENBQUMsRUFBRTtBQUN6RDtBQUVPLFNBQVNNLGNBQ2RDLEtBQUssRUFDTEMsVUFBVTtRQUNWQyxZQUFBQSxpRUFBWSxJQUNaQyxhQUFBQSxpRUFBYTtJQUViLE1BQU1DLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ0gsYUFBYTtJQUVwQyxTQUFTSSxnQkFBZ0JDLE1BQU07UUFDN0IsSUFBSUMsTUFBTTtRQUVWLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJRixPQUFPRyxNQUFNLEVBQUVELElBQUs7WUFDdENELFFBQUFBLE1BQVEsQ0FBQyxDQUFDVCxLQUFLLENBQUNRLE1BQU0sQ0FBQ0UsRUFBRSxDQUFDO1lBQzFCRCxRQUFBQSxNQUFRVCxLQUFLLENBQUNRLE1BQU0sQ0FBQ0UsRUFBRSxDQUFDLEtBQUtWLEtBQUssQ0FBQ1EsTUFBTSxDQUFDRSxJQUFJLEVBQUUsQ0FBQztRQUNuRDtRQUVBLE9BQU9EO0lBQ1Q7SUFFQSxTQUFTRyxXQUFXRixDQUFDO1FBQ25CLE1BQU1HLG1CQUFtQjtZQUN2QixFQUFFO1lBQ0YsRUFBRTtZQUNGLEVBQUU7WUFDRixFQUFFO1NBQ0g7UUFFRCxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSVgsWUFBWVcsSUFBSztZQUNuQ0QsZ0JBQWdCLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNELElBQUlWLE1BQU1NO1lBQ25DRyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQ2IsWUFBYVksQ0FBQUEsSUFBSVYsR0FBRSxJQUFLTTtZQUNqREcsZ0JBQWdCLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUMsQ0FBQ2IsWUFBYVksQ0FBQUEsSUFBSVYsR0FBRSxJQUFNVSxDQUFBQSxJQUFJVixHQUFFLElBQUtNO1lBQzlERyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQ2IsWUFBYVksQ0FBQUEsSUFBSVYsR0FBRSxJQUFNVSxDQUFBQSxJQUFJVixHQUFFLElBQUtNO1FBQy9EO1FBRUEsT0FBT0c7SUFDVDtJQUVBLElBQUssSUFBSUgsSUFBSSxHQUFHQSxJQUFJVixNQUFNVyxNQUFNLEVBQUVELElBQUs7UUFDckMsSUFBSVYsS0FBSyxDQUFDVSxFQUFFLEVBQUU7WUFDWixNQUFNTSxZQUFZSixXQUFXRjtZQUM3QixNQUFNTyxlQUFlRCxVQUFVRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUVosZ0JBQWdCWTtZQUM3RCxJQUFJRixjQUFjO2dCQUNoQixPQUFPO29CQUFFQTtvQkFBY2hCO2dCQUFXO1lBQ3BDO1FBQ0Y7SUFDRjtJQUNBLE9BQU9tQjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZS9tb2RlbC5qcz9hYWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1PVkVTX09SREVSIH0gZnJvbSBcIi4uL2NvbnN0YW5zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0U3ltYm9sKGN1cnJlbnRNb3ZlLCBhbW91bnQpIHtcbiAgY29uc3QgY3VycmVudE9yZGVyID0gTU9WRVNfT1JERVIuc2xpY2UoMCwgYW1vdW50KTtcbiAgY29uc3QgbmV4dFN5bWJvbEluZGV4ID0gY3VycmVudE9yZGVyLmluZGV4T2YoY3VycmVudE1vdmUpICsgMTtcbiAgcmV0dXJuIGN1cnJlbnRPcmRlcltuZXh0U3ltYm9sSW5kZXhdID8/IGN1cnJlbnRPcmRlclswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZTeW1ib2woY3VycmVudE1vdmUsIGFtb3VudCkge1xuICBjb25zdCBjdXJyZW50T3JkZXIgPSBNT1ZFU19PUkRFUi5zbGljZSgwLCBhbW91bnQpO1xuICBjb25zdCBwcmV2U3ltYm9sSW5kZXggPSBhbW91bnQgPT09IDIgJiYgY3VycmVudE9yZGVyLmluZGV4T2YoY3VycmVudE1vdmUpID09PSAwID8gMSA6IDAgPyBjdXJyZW50T3JkZXIuaW5kZXhPZihjdXJyZW50TW92ZSkgLSAxIDogMDtcbiAgcmV0dXJuIGN1cnJlbnRPcmRlcltwcmV2U3ltYm9sSW5kZXhdID8/IGN1cnJlbnRPcmRlclswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVXaW5uZXIoXG4gIGNlbGxzLFxuICB3aW5uZXJNb3ZlLFxuICBmaWVsZHNpemUgPSAxOSxcbiAgbGVuZ3RoU2l6ZSA9IDUsXG4pIHtcbiAgY29uc3QgZ2FwID0gTWF0aC5mbG9vcihsZW5ndGhTaXplIC8gMik7XG5cbiAgZnVuY3Rpb24gY29tcGFyZUVsZW1lbnRzKGluZGV4cykge1xuICAgIGxldCByZXMgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpbmRleHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlcyAmJj0gISFjZWxsc1tpbmRleHNbaV1dO1xuICAgICAgcmVzICYmPSBjZWxsc1tpbmRleHNbaV1dID09PSBjZWxsc1tpbmRleHNbaSAtIDFdXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmVzdWx0cyhpKSB7XG4gICAgY29uc3Qgd2lubmVyQ29uZGl0aW9ucyA9IFtcbiAgICAgIFtdLCAvLyAtXG4gICAgICBbXSwgLy8gfFxuICAgICAgW10sIC8vIC9cbiAgICAgIFtdLCAvLyBcXFxuICAgIF07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aFNpemU7IGorKykge1xuICAgICAgd2lubmVyQ29uZGl0aW9uc1swXS5wdXNoKGogLSBnYXAgKyBpKTtcbiAgICAgIHdpbm5lckNvbmRpdGlvbnNbMV0ucHVzaChmaWVsZHNpemUgKiAoaiAtIGdhcCkgKyBpKTtcbiAgICAgIHdpbm5lckNvbmRpdGlvbnNbMl0ucHVzaCgtZmllbGRzaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSk7XG4gICAgICB3aW5uZXJDb25kaXRpb25zWzNdLnB1c2goZmllbGRzaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbm5lckNvbmRpdGlvbnM7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNlbGxzW2ldKSB7XG4gICAgICBjb25zdCBpbmRleFJvd3MgPSBnZXRSZXN1bHRzKGkpO1xuICAgICAgY29uc3Qgd2lubmVySW5kZXhzID0gaW5kZXhSb3dzLmZpbmQoKHJvdykgPT4gY29tcGFyZUVsZW1lbnRzKHJvdykpO1xuICAgICAgaWYgKHdpbm5lckluZGV4cykge1xuICAgICAgICByZXR1cm4geyB3aW5uZXJJbmRleHMsIHdpbm5lck1vdmUgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiJdLCJuYW1lcyI6WyJNT1ZFU19PUkRFUiIsImdldE5leHRTeW1ib2wiLCJjdXJyZW50TW92ZSIsImFtb3VudCIsImN1cnJlbnRPcmRlciIsInNsaWNlIiwibmV4dFN5bWJvbEluZGV4IiwiaW5kZXhPZiIsImdldFByZXZTeW1ib2wiLCJwcmV2U3ltYm9sSW5kZXgiLCJjb21wdXRlV2lubmVyIiwiY2VsbHMiLCJ3aW5uZXJNb3ZlIiwiZmllbGRzaXplIiwibGVuZ3RoU2l6ZSIsImdhcCIsIk1hdGgiLCJmbG9vciIsImNvbXBhcmVFbGVtZW50cyIsImluZGV4cyIsInJlcyIsImkiLCJsZW5ndGgiLCJnZXRSZXN1bHRzIiwid2lubmVyQ29uZGl0aW9ucyIsImoiLCJwdXNoIiwiaW5kZXhSb3dzIiwid2lubmVySW5kZXhzIiwiZmluZCIsInJvdyIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/model.js\n"));

/***/ })

});