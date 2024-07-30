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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Profile_profile_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Profile/profile-info */ \"./components/Profile/profile-info.jsx\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-symbol */ \"./components/Game/game-symbol.jsx\");\n/* harmony import */ var _use_game_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../use-game-states */ \"./components/use-game-states.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PlayerInfo(param) {\n    let { player, isTimerRunning, isWinner } = param;\n    _s();\n    const { seconds, setGameState, minutesString, secondsString } = (0,_use_game_states__WEBPACK_IMPORTED_MODULE_4__.useGameState)();\n    const isDanger = seconds < 10;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isTimerRunning && !isWinner) {\n            const interval = setInterval(()=>{\n                setGameState((lastGameState)=>({\n                        ...lastGameState,\n                        seconds: Math.max(lastGameState.seconds - 1, 0)\n                    }));\n            }, 1000);\n            return ()=>{\n                clearInterval(interval);\n                setGameState((lastGameState)=>({\n                        ...lastGameState,\n                        seconds: lastGameState.seconds === 0 ? 60 : lastGameState.seconds\n                    }));\n            };\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        isTimerRunning\n    ]);\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"grid grid-cols-2 m-4 relative transition-colors\", \"text-\".concat(player.color), isWinner === player.symbol ? \"border border-yellow-400 p-4 rounded-md bg-yellow-100\" : \"\", isWinner && isWinner !== player.symbol ? \"text-slate-200\" : \"\");\n    const timerClassName = (0,clsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"text-xl\", isDanger ? \"text-red-600\" : isTimerRunning ? \"text-slate-900\" : \"text-slate-400\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Profile_profile_info__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                player: player\n            }, void 0, false, {\n                fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-slate-100 text-base absolute -top-2 -left-1 w-6 h-6 rounded-full shadow-lg text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                    symbol: player.symbol\n                }, void 0, false, {\n                    fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-3 ml-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-6 w-px bg-slate-400\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: timerClassName,\n                        children: [\n                            minutesString,\n                            \":\",\n                            secondsString\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tamir/Desktop/GitHub/TicTakToe-Online/components/Game/player-info.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(PlayerInfo, \"5U1AdYVH7I1wo5ukTcdPav9ASPc=\", false, function() {\n    return [\n        _use_game_states__WEBPACK_IMPORTED_MODULE_4__.useGameState\n    ];\n});\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvcGxheWVyLWluZm8uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ2dCO0FBQ1A7QUFDTztBQUMxQjtBQUVqQixTQUFTSyxXQUFXLEtBQW9DO1FBQXBDLEVBQUVDLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxRQUFRLEVBQUUsR0FBcEM7O0lBQ3pCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFLEdBQzNEVCw4REFBWUE7SUFFZCxNQUFNVSxXQUFXSixVQUFVO0lBRTNCVCxnREFBU0EsQ0FBQztRQUNSLElBQUlPLGtCQUFrQixDQUFDQyxVQUFVO1lBQy9CLE1BQU1NLFdBQVdDLFlBQVk7Z0JBQzNCTCxhQUFhLENBQUNNLGdCQUFtQjt3QkFDL0IsR0FBR0EsYUFBYTt3QkFDaEJQLFNBQVNRLEtBQUtDLEdBQUcsQ0FBQ0YsY0FBY1AsT0FBTyxHQUFHLEdBQUc7b0JBQy9DO1lBQ0YsR0FBRztZQUVILE9BQU87Z0JBQ0xVLGNBQWNMO2dCQUNkSixhQUFhLENBQUNNLGdCQUFtQjt3QkFDL0IsR0FBR0EsYUFBYTt3QkFDaEJQLFNBQVNPLGNBQWNQLE9BQU8sS0FBSyxJQUFJLEtBQUtPLGNBQWNQLE9BQU87b0JBQ25FO1lBQ0Y7UUFDRjtJQUNBLHVEQUF1RDtJQUN6RCxHQUFHO1FBQUNGO0tBQWU7SUFFbkIsTUFBTWEsWUFBWWhCLGdEQUFJQSxDQUNwQixtREFDQSxRQUFxQixPQUFiRSxPQUFPZSxLQUFLLEdBQ3BCYixhQUFhRixPQUFPZ0IsTUFBTSxHQUN0QiwwREFDQSxJQUNKZCxZQUFZQSxhQUFhRixPQUFPZ0IsTUFBTSxHQUFHLG1CQUFtQjtJQUU5RCxNQUFNQyxpQkFBaUJuQixnREFBSUEsQ0FDekIsV0FDQVMsV0FDSSxpQkFDQU4saUJBQ0UsbUJBQ0E7SUFHUixxQkFDRSw4REFBQ2lCO1FBQUlKLFdBQVdBOzswQkFDZCw4REFBQ25CLDBEQUFPQTtnQkFBQ0ssUUFBUUE7Ozs7OzswQkFDakIsOERBQUNrQjtnQkFBSUosV0FBVTswQkFDYiw0RUFBQ2xCLG9EQUFVQTtvQkFBQ29CLFFBQVFoQixPQUFPZ0IsTUFBTTs7Ozs7Ozs7Ozs7MEJBRW5DLDhEQUFDRTtnQkFBSUosV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUFJSixXQUFVOzs7Ozs7a0NBQ2YsOERBQUNLO3dCQUFLTCxXQUFXRzs7NEJBQ2RaOzRCQUFjOzRCQUFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQjtHQXpEZ0JQOztRQUVaRiwwREFBWUE7OztLQUZBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbWUvcGxheWVyLWluZm8uanN4P2MwOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIi4uL1Byb2ZpbGUvcHJvZmlsZS1pbmZvXCI7XG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcbmltcG9ydCB7IHVzZUdhbWVTdGF0ZSB9IGZyb20gXCIuLi91c2UtZ2FtZS1zdGF0ZXNcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJJbmZvKHsgcGxheWVyLCBpc1RpbWVyUnVubmluZywgaXNXaW5uZXIgfSkge1xuICBjb25zdCB7IHNlY29uZHMsIHNldEdhbWVTdGF0ZSwgbWludXRlc1N0cmluZywgc2Vjb25kc1N0cmluZyB9ID1cbiAgICB1c2VHYW1lU3RhdGUoKTtcblxuICBjb25zdCBpc0RhbmdlciA9IHNlY29uZHMgPCAxMDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1RpbWVyUnVubmluZyAmJiAhaXNXaW5uZXIpIHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+ICh7XG4gICAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcbiAgICAgICAgICBzZWNvbmRzOiBNYXRoLm1heChsYXN0R2FtZVN0YXRlLnNlY29uZHMgLSAxLCAwKSxcbiAgICAgICAgfSkpO1xuICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+ICh7XG4gICAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcbiAgICAgICAgICBzZWNvbmRzOiBsYXN0R2FtZVN0YXRlLnNlY29uZHMgPT09IDAgPyA2MCA6IGxhc3RHYW1lU3RhdGUuc2Vjb25kcyxcbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbaXNUaW1lclJ1bm5pbmddKTtcblxuICBjb25zdCBjbGFzc05hbWUgPSBjbHN4KFxuICAgIFwiZ3JpZCBncmlkLWNvbHMtMiBtLTQgcmVsYXRpdmUgdHJhbnNpdGlvbi1jb2xvcnNcIixcbiAgICBgdGV4dC0ke3BsYXllci5jb2xvcn1gLFxuICAgIGlzV2lubmVyID09PSBwbGF5ZXIuc3ltYm9sXG4gICAgICA/IFwiYm9yZGVyIGJvcmRlci15ZWxsb3ctNDAwIHAtNCByb3VuZGVkLW1kIGJnLXllbGxvdy0xMDBcIlxuICAgICAgOiBcIlwiLFxuICAgIGlzV2lubmVyICYmIGlzV2lubmVyICE9PSBwbGF5ZXIuc3ltYm9sID8gXCJ0ZXh0LXNsYXRlLTIwMFwiIDogXCJcIixcbiAgKTtcbiAgY29uc3QgdGltZXJDbGFzc05hbWUgPSBjbHN4KFxuICAgIFwidGV4dC14bFwiLFxuICAgIGlzRGFuZ2VyXG4gICAgICA/IFwidGV4dC1yZWQtNjAwXCJcbiAgICAgIDogaXNUaW1lclJ1bm5pbmdcbiAgICAgICAgPyBcInRleHQtc2xhdGUtOTAwXCJcbiAgICAgICAgOiBcInRleHQtc2xhdGUtNDAwXCIsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxQcm9maWxlIHBsYXllcj17cGxheWVyfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYmctc2xhdGUtMTAwIHRleHQtYmFzZSBhYnNvbHV0ZSAtdG9wLTIgLWxlZnQtMSB3LTYgaC02IHJvdW5kZWQtZnVsbCBzaGFkb3ctbGcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPEdhbWVTeW1ib2wgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIG1sLTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02IHctcHggYmctc2xhdGUtNDAwXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0aW1lckNsYXNzTmFtZX0+XG4gICAgICAgICAge21pbnV0ZXNTdHJpbmd9OntzZWNvbmRzU3RyaW5nfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJQcm9maWxlIiwiR2FtZVN5bWJvbCIsInVzZUdhbWVTdGF0ZSIsImNsc3giLCJQbGF5ZXJJbmZvIiwicGxheWVyIiwiaXNUaW1lclJ1bm5pbmciLCJpc1dpbm5lciIsInNlY29uZHMiLCJzZXRHYW1lU3RhdGUiLCJtaW51dGVzU3RyaW5nIiwic2Vjb25kc1N0cmluZyIsImlzRGFuZ2VyIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImxhc3RHYW1lU3RhdGUiLCJNYXRoIiwibWF4IiwiY2xlYXJJbnRlcnZhbCIsImNsYXNzTmFtZSIsImNvbG9yIiwic3ltYm9sIiwidGltZXJDbGFzc05hbWUiLCJkaXYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Game/player-info.jsx\n"));

/***/ })

});