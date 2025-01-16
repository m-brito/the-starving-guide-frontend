"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();\n        const originalRenderPage = ctx.renderPage;\n        try {\n            ctx.renderPage = ()=>originalRenderPage({\n                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                                ...props\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mauricio\\\\Desktop\\\\Mauricio\\\\Estudos React\\\\the-starving-guide-frontend\\\\src\\\\pages\\\\_document.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 59\n                            }, this))\n                });\n            const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n            return {\n                ...initialProps,\n                styles: [\n                    initialProps.styles,\n                    sheet.getStyleElement()\n                ]\n            };\n        } finally{\n            sheet.seal();\n        }\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"pt\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            charSet: \"utf-8\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mauricio\\\\Desktop\\\\Mauricio\\\\Estudos React\\\\the-starving-guide-frontend\\\\src\\\\pages\\\\_document.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.googleapis.com\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mauricio\\\\Desktop\\\\Mauricio\\\\Estudos React\\\\the-starving-guide-frontend\\\\src\\\\pages\\\\_document.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.gstatic.com\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mauricio\\\\Desktop\\\\Mauricio\\\\Estudos React\\\\the-starving-guide-frontend\\\\src\\\\pages\\\\_document.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: \"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Rock+Salt&display=swap\",\n                            rel: \"stylesheet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mauricio\\\\Desktop\\\\Mauricio\\\\Estudos React\\\\the-starving-guide-frontend\\\\src\\\\pages\\\\_document.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Mauricio\\\\Desktop\\\\Mauricio\\\\Estudos React\\\\the-starving-guide-frontend\\\\src\\\\pages\\\\_document.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mauricio\\\\Desktop\\\\Mauricio\\\\Estudos React\\\\the-starving-guide-frontend\\\\src\\\\pages\\\\_document.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mauricio\\\\Desktop\\\\Mauricio\\\\Estudos React\\\\the-starving-guide-frontend\\\\src\\\\pages\\\\_document.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Mauricio\\\\Desktop\\\\Mauricio\\\\Estudos React\\\\the-starving-guide-frontend\\\\src\\\\pages\\\\_document.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Mauricio\\\\Desktop\\\\Mauricio\\\\Estudos React\\\\the-starving-guide-frontend\\\\src\\\\pages\\\\_document.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNzRTtBQUNsQjtBQUVyQyxNQUFNTSxtQkFBbUJOLHNEQUFRQTtJQUM5QyxhQUFhTyxnQkFDWEMsR0FBb0IsRUFDVztRQUMvQixNQUFNQyxRQUFRLElBQUlKLCtEQUFnQkE7UUFDbEMsTUFBTUsscUJBQXFCRixJQUFJRyxVQUFVO1FBRXpDLElBQUk7WUFDRkgsSUFBSUcsVUFBVSxHQUFHLElBQ2ZELG1CQUFtQjtvQkFDakJFLFlBQVlDLENBQUFBLE1BQU9DLENBQUFBLFFBQVNMLE1BQU1NLGFBQWEsZUFBQyw4REFBQ0Y7Z0NBQUssR0FBR0MsS0FBSzs7Ozs7O2dCQUNoRTtZQUVGLE1BQU1FLGVBQWUsTUFBTWhCLG9FQUF3QixDQUFDUTtZQUNwRCxPQUFPO2dCQUNMLEdBQUdRLFlBQVk7Z0JBQ2ZDLFFBQVE7b0JBQUNELGFBQWFDLE1BQU07b0JBQUVSLE1BQU1TLGVBQWU7aUJBQUc7WUFDeEQ7UUFDRixTQUFVO1lBQ1JULE1BQU1VLElBQUk7UUFDWjtJQUNGO0lBRUFDLFNBQXNCO1FBQ3BCLHFCQUNFLDhEQUFDbEIsK0NBQUlBO1lBQUNtQixNQUFLOzs4QkFDVCw4REFBQ3BCLCtDQUFJQTs7c0NBQ0gsOERBQUNxQjs0QkFBS0MsU0FBUTs7Ozs7O3NDQUVkLDhEQUFDQzs0QkFBS0MsS0FBSTs0QkFBYUMsTUFBSzs7Ozs7O3NDQUM1Qiw4REFBQ0Y7NEJBQUtDLEtBQUk7NEJBQWFDLE1BQUs7Ozs7OztzQ0FDNUIsOERBQUNGOzRCQUNDRSxNQUFLOzRCQUNMRCxLQUFJOzs7Ozs7Ozs7Ozs7OEJBR1IsOERBQUNFOztzQ0FDQyw4REFBQ3hCLCtDQUFJQTs7Ozs7c0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxNYXVyaWNpb1xcRGVza3RvcFxcTWF1cmljaW9cXEVzdHVkb3MgUmVhY3RcXHRoZS1zdGFydmluZy1ndWlkZS1mcm9udGVuZFxcc3JjXFxwYWdlc1xcX2RvY3VtZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERvY3VtZW50Q29udGV4dCwgRG9jdW1lbnRJbml0aWFsUHJvcHMgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuaW1wb3J0IERvY3VtZW50LCB7IEhlYWQsIEh0bWwsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKFxuICAgIGN0eDogRG9jdW1lbnRDb250ZXh0XG4gICk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+IHtcbiAgICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KClcbiAgICBjb25zdCBvcmlnaW5hbFJlbmRlclBhZ2UgPSBjdHgucmVuZGVyUGFnZVxuXG4gICAgdHJ5IHtcbiAgICAgIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cbiAgICAgICAgb3JpZ2luYWxSZW5kZXJQYWdlKHtcbiAgICAgICAgICBlbmhhbmNlQXBwOiBBcHAgPT4gcHJvcHMgPT4gc2hlZXQuY29sbGVjdFN0eWxlcyg8QXBwIHsuLi5wcm9wc30gLz4pXG4gICAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbml0aWFsUHJvcHMsXG4gICAgICAgIHN0eWxlczogW2luaXRpYWxQcm9wcy5zdHlsZXMsIHNoZWV0LmdldFN0eWxlRWxlbWVudCgpXVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzaGVldC5zZWFsKClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbCBsYW5nPVwicHRcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblxuICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANDAwOzcwMCZmYW1pbHk9Um9jaytTYWx0JmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiSGVhZCIsIkh0bWwiLCJNYWluIiwiTmV4dFNjcmlwdCIsIlNlcnZlclN0eWxlU2hlZXQiLCJNeURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic2hlZXQiLCJvcmlnaW5hbFJlbmRlclBhZ2UiLCJyZW5kZXJQYWdlIiwiZW5oYW5jZUFwcCIsIkFwcCIsInByb3BzIiwiY29sbGVjdFN0eWxlcyIsImluaXRpYWxQcm9wcyIsInN0eWxlcyIsImdldFN0eWxlRWxlbWVudCIsInNlYWwiLCJyZW5kZXIiLCJsYW5nIiwibWV0YSIsImNoYXJTZXQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImJvZHkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();