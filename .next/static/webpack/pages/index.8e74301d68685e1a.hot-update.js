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

/***/ "./components/Game/player-info.jsx":
/*!*****************************************!*\
  !*** ./components/Game/player-info.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Profile_profile_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Profile/profile-info */ \"./components/Profile/profile-info.jsx\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-symbol */ \"./components/Game/game-symbol.jsx\");\n/* harmony import */ var _use_game_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../use-game-states */ \"./components/use-game-states.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PlayerInfo(param) {\n    let { player, isTimerRunning, winner } = param;\n    _s();\n    const { seconds, setGameState, minutesString, secondsString } = (0,_use_game_states__WEBPACK_IMPORTED_MODULE_4__.useGameState)();\n    const isDanger = seconds < 10;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isTimerRunning) {\n            const interval = setInterval(()=>{\n                setGameState((lastGameState)=>({\n                        ...lastGameState,\n                        seconds: Math.max(lastGameState.seconds - 1, 0)\n                    }));\n            }, 1000);\n            return ()=>{\n                clearInterval(interval);\n                setGameState((lastGameState)=>({\n                        ...lastGameState,\n                        seconds: lastGameState.seconds === 0 ? 60 : lastGameState.seconds\n                    }));\n            };\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        isTimerRunning\n    ]);\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"grid grid-cols-2 m-4 relative\", \"text-\".concat(player.color), winner !== null && winner !== void 0 ? winner : \"bg-yellow-600\");\n    const timerClassName = (0,clsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"text-xl\", isDanger ? \"text-red-600\" : isTimerRunning ? \"text-slate-900\" : \"text-slate-400\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Profile_profile_info__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                player: player\n            }, void 0, false, {\n                fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-slate-100 text-base absolute -top-2 -left-1 w-6 h-6 rounded-full shadow-lg text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                    symbol: player.symbol\n                }, void 0, false, {\n                    fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-3 ml-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-6 w-px bg-slate-400\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: timerClassName,\n                        children: [\n                            minutesString,\n                            \":\",\n                            secondsString\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(PlayerInfo, \"5U1AdYVH7I1wo5ukTcdPav9ASPc=\", false, function() {\n    return [\n        _use_game_states__WEBPACK_IMPORTED_MODULE_4__.useGameState\n    ];\n});\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvcGxheWVyLWluZm8uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ2dCO0FBQ1A7QUFDTztBQUMxQjtBQUVqQixTQUFTSyxXQUFXLEtBQWtDO1FBQWxDLEVBQUVDLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxNQUFNLEVBQUUsR0FBbEM7O0lBQ3pCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFLEdBQzNEVCw4REFBWUE7SUFFZCxNQUFNVSxXQUFXSixVQUFVO0lBRTNCVCxnREFBU0EsQ0FBQztRQUNSLElBQUlPLGdCQUFnQjtZQUNsQixNQUFNTyxXQUFXQyxZQUFZO2dCQUMzQkwsYUFBYSxDQUFDTSxnQkFBbUI7d0JBQy9CLEdBQUdBLGFBQWE7d0JBQ2hCUCxTQUFTUSxLQUFLQyxHQUFHLENBQUNGLGNBQWNQLE9BQU8sR0FBRyxHQUFHO29CQUMvQztZQUNGLEdBQUc7WUFFSCxPQUFPO2dCQUNMVSxjQUFjTDtnQkFDZEosYUFBYSxDQUFDTSxnQkFBbUI7d0JBQy9CLEdBQUdBLGFBQWE7d0JBQ2hCUCxTQUFTTyxjQUFjUCxPQUFPLEtBQUssSUFBSSxLQUFLTyxjQUFjUCxPQUFPO29CQUNuRTtZQUNGO1FBQ0Y7SUFDQSx1REFBdUQ7SUFDekQsR0FBRztRQUFDRjtLQUFlO0lBRW5CLE1BQU1hLFlBQVloQixnREFBSUEsQ0FDcEIsaUNBQ0EsUUFBcUIsT0FBYkUsT0FBT2UsS0FBSyxHQUNwQmIsbUJBQUFBLG9CQUFBQSxTQUFVO0lBRVosTUFBTWMsaUJBQWlCbEIsZ0RBQUlBLENBQ3pCLFdBQ0FTLFdBQ0ksaUJBQ0FOLGlCQUNFLG1CQUNBO0lBR1IscUJBQ0UsOERBQUNnQjtRQUFJSCxXQUFXQTs7MEJBQ2QsOERBQUNuQiwwREFBT0E7Z0JBQUNLLFFBQVFBOzs7Ozs7MEJBQ2pCLDhEQUFDaUI7Z0JBQUlILFdBQVU7MEJBQ2IsNEVBQUNsQixvREFBVUE7b0JBQUNzQixRQUFRbEIsT0FBT2tCLE1BQU07Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ0Q7Z0JBQUlILFdBQVU7O2tDQUNiLDhEQUFDRzt3QkFBSUgsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDSzt3QkFBS0wsV0FBV0U7OzRCQUNkWDs0QkFBYzs0QkFBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0I7R0F0RGdCUDs7UUFFWkYsMERBQVlBOzs7S0FGQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lL3BsYXllci1pbmZvLmpzeD9jMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gXCIuLi9Qcm9maWxlL3Byb2ZpbGUtaW5mb1wiO1xuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gXCIuL2dhbWUtc3ltYm9sXCI7XG5pbXBvcnQgeyB1c2VHYW1lU3RhdGUgfSBmcm9tIFwiLi4vdXNlLWdhbWUtc3RhdGVzXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUGxheWVySW5mbyh7IHBsYXllciwgaXNUaW1lclJ1bm5pbmcsIHdpbm5lciB9KSB7XG4gIGNvbnN0IHsgc2Vjb25kcywgc2V0R2FtZVN0YXRlLCBtaW51dGVzU3RyaW5nLCBzZWNvbmRzU3RyaW5nIH0gPVxuICAgIHVzZUdhbWVTdGF0ZSgpO1xuXG4gIGNvbnN0IGlzRGFuZ2VyID0gc2Vjb25kcyA8IDEwO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzVGltZXJSdW5uaW5nKSB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiAoe1xuICAgICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXG4gICAgICAgICAgc2Vjb25kczogTWF0aC5tYXgobGFzdEdhbWVTdGF0ZS5zZWNvbmRzIC0gMSwgMCksXG4gICAgICAgIH0pKTtcbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiAoe1xuICAgICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXG4gICAgICAgICAgc2Vjb25kczogbGFzdEdhbWVTdGF0ZS5zZWNvbmRzID09PSAwID8gNjAgOiBsYXN0R2FtZVN0YXRlLnNlY29uZHMsXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2lzVGltZXJSdW5uaW5nXSk7XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gY2xzeChcbiAgICBcImdyaWQgZ3JpZC1jb2xzLTIgbS00IHJlbGF0aXZlXCIsXG4gICAgYHRleHQtJHtwbGF5ZXIuY29sb3J9YCxcbiAgICB3aW5uZXIgPz8gXCJiZy15ZWxsb3ctNjAwXCIsXG4gICk7XG4gIGNvbnN0IHRpbWVyQ2xhc3NOYW1lID0gY2xzeChcbiAgICBcInRleHQteGxcIixcbiAgICBpc0RhbmdlclxuICAgICAgPyBcInRleHQtcmVkLTYwMFwiXG4gICAgICA6IGlzVGltZXJSdW5uaW5nXG4gICAgICAgID8gXCJ0ZXh0LXNsYXRlLTkwMFwiXG4gICAgICAgIDogXCJ0ZXh0LXNsYXRlLTQwMFwiLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8UHJvZmlsZSBwbGF5ZXI9e3BsYXllcn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJnLXNsYXRlLTEwMCB0ZXh0LWJhc2UgYWJzb2x1dGUgLXRvcC0yIC1sZWZ0LTEgdy02IGgtNiByb3VuZGVkLWZ1bGwgc2hhZG93LWxnIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxHYW1lU3ltYm9sIHN5bWJvbD17cGxheWVyLnN5bWJvbH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtbC0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNiB3LXB4IGJnLXNsYXRlLTQwMFwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGltZXJDbGFzc05hbWV9PlxuICAgICAgICAgIHttaW51dGVzU3RyaW5nfTp7c2Vjb25kc1N0cmluZ31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiUHJvZmlsZSIsIkdhbWVTeW1ib2wiLCJ1c2VHYW1lU3RhdGUiLCJjbHN4IiwiUGxheWVySW5mbyIsInBsYXllciIsImlzVGltZXJSdW5uaW5nIiwid2lubmVyIiwic2Vjb25kcyIsInNldEdhbWVTdGF0ZSIsIm1pbnV0ZXNTdHJpbmciLCJzZWNvbmRzU3RyaW5nIiwiaXNEYW5nZXIiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGFzdEdhbWVTdGF0ZSIsIk1hdGgiLCJtYXgiLCJjbGVhckludGVydmFsIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJ0aW1lckNsYXNzTmFtZSIsImRpdiIsInN5bWJvbCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Game/player-info.jsx\n"));

/***/ })

});