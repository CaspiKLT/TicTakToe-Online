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

/***/ "./components/Game/game-info.jsx":
/*!***************************************!*\
  !*** ./components/Game/game-info.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constans */ \"./components/constans.js\");\n/* harmony import */ var _player_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-info */ \"./components/Game/player-info.jsx\");\n\n\n\nfunction GameInfo(param) {\n    let { playersAmount, currentSymbol } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[616px] p-5 grid grid-cols-2 items-center justify-between rounded-2xl shadow-md bg-white\",\n        children: _constans__WEBPACK_IMPORTED_MODULE_1__.PLAYERS.map((el, i)=>i < playersAmount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_player_info__WEBPACK_IMPORTED_MODULE_2__.PlayerInfo, {\n                player: el,\n                isTimerRunning: el.symbol === currentSymbol\n            }, i, false, {\n                fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/game-info.jsx\",\n                lineNumber: 9,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false))\n    }, void 0, false, {\n        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/game-info.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = GameInfo;\nvar _c;\n$RefreshReg$(_c, \"GameInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0M7QUFDSztBQUVwQyxTQUFTRSxTQUFTLEtBQWdDO1FBQWhDLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFLEdBQWhDO0lBQ3ZCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaTiw4Q0FBT0EsQ0FBQ08sR0FBRyxDQUFDLENBQUNDLElBQUlDLElBQ2hCQSxJQUFJTiw4QkFDRiw4REFBQ0Ysb0RBQVVBO2dCQUNUUyxRQUFRRjtnQkFDUkcsZ0JBQWdCSCxHQUFHSSxNQUFNLEtBQUtSO2VBQ3pCSzs7OztxQ0FHUDs7Ozs7O0FBS1Y7S0FoQmdCUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbWUvZ2FtZS1pbmZvLmpzeD9iZDBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBMQVlFUlMgfSBmcm9tIFwiLi4vY29uc3RhbnNcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXItaW5mb1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUluZm8oeyBwbGF5ZXJzQW1vdW50LCBjdXJyZW50U3ltYm9sIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzYxNnB4XSBwLTUgZ3JpZCBncmlkLWNvbHMtMiBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBiZy13aGl0ZVwiPlxuICAgICAge1BMQVlFUlMubWFwKChlbCwgaSkgPT5cbiAgICAgICAgaSA8IHBsYXllcnNBbW91bnQgPyAoXG4gICAgICAgICAgPFBsYXllckluZm9cbiAgICAgICAgICAgIHBsYXllcj17ZWx9XG4gICAgICAgICAgICBpc1RpbWVyUnVubmluZz17ZWwuc3ltYm9sID09PSBjdXJyZW50U3ltYm9sfVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD48Lz5cbiAgICAgICAgKSxcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUExBWUVSUyIsIlBsYXllckluZm8iLCJHYW1lSW5mbyIsInBsYXllcnNBbW91bnQiLCJjdXJyZW50U3ltYm9sIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiZWwiLCJpIiwicGxheWVyIiwiaXNUaW1lclJ1bm5pbmciLCJzeW1ib2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Game/game-info.jsx\n"));

/***/ })

});