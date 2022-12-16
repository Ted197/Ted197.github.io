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
exports.id = "pages/protected";
exports.ids = ["pages/protected"];
exports.modules = {

/***/ "./pages/protected.jsx":
/*!*****************************!*\
  !*** ./pages/protected.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _moralisweb3_common_evm_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @moralisweb3/common-evm-utils */ \"@moralisweb3/common-evm-utils\");\n/* harmony import */ var _moralisweb3_common_evm_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_common_evm_utils__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Protected({ message , nftList  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Protected content\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Sites\\\\Ted197 Site\\\\pages\\\\protected.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Sites\\\\Ted197 Site\\\\pages\\\\protected.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(nftList, null, 2)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Sites\\\\Ted197 Site\\\\pages\\\\protected.jsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Sites\\\\Ted197 Site\\\\pages\\\\protected.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/signin\",\n                permanent: false\n            }\n        };\n    }\n    if (!(moralis__WEBPACK_IMPORTED_MODULE_2___default().Core.isStarted)) {\n        await moralis__WEBPACK_IMPORTED_MODULE_2___default().start({\n            apiKey: process.env.MORALIS_API_KEY\n        });\n    }\n    const nftList = await moralis__WEBPACK_IMPORTED_MODULE_2___default().EvmApi.nft.getWalletNFTs({\n        chain: _moralisweb3_common_evm_utils__WEBPACK_IMPORTED_MODULE_3__.EvmChain.POLYGON,\n        address: session.user.address,\n        // replace \"0x...\" with your NFT token address\n        tokenAddresses: [\n            \"0x0B91B07bEb67333225A5bA0259D55AeE10E3A578\",\n            \"0x72B6Dc1003E154ac71c76D3795A3829CfD5e33b9\"\n        ]\n    });\n    return {\n        props: {\n            message: // if user has at least one NFT he will get protected content\n            nftList.raw.total > 0 ? \"Nice! You have our NFT\" : \"Sorry, you don't have our NFT\",\n            nftList: nftList.raw.result\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Protected);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm90ZWN0ZWQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QztBQUNmO0FBQzJCO0FBRXpELFNBQVNHLFVBQVUsRUFBRUMsUUFBTyxFQUFFQyxRQUFPLEVBQUUsRUFBRTtJQUNyQyxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBR0o7Ozs7OzswQkFDSiw4REFBQ0s7MEJBQUtDLEtBQUtDLFNBQVMsQ0FBQ04sU0FBUyxJQUFJLEVBQUU7Ozs7Ozs7Ozs7OztBQUdoRDtBQUVPLGVBQWVPLG1CQUFtQkMsT0FBTyxFQUFFO0lBQzlDLE1BQU1DLFVBQVUsTUFBTWQsMkRBQVVBLENBQUNhO0lBRWpDLElBQUksQ0FBQ0MsU0FBUztRQUNWLE9BQU87WUFDSEMsVUFBVTtnQkFDTkMsYUFBYTtnQkFDYkMsV0FBVyxLQUFLO1lBQ3BCO1FBQ0o7SUFDSixDQUFDO0lBRUwsSUFBRyxDQUFDaEIsK0RBQXNCLEVBQUM7UUFDekIsTUFBTUEsb0RBQWEsQ0FBQztZQUFFb0IsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO1FBQUM7SUFDNUQsQ0FBQztJQUVHLE1BQU1uQixVQUFVLE1BQU1KLHVFQUFnQyxDQUFDO1FBQ25EMkIsT0FBTzFCLDJFQUFnQjtRQUN2QjRCLFNBQVNoQixRQUFRaUIsSUFBSSxDQUFDRCxPQUFPO1FBQzdCLDhDQUE4QztRQUM5Q0UsZ0JBQWdCO1lBQUM7WUFBOEM7U0FBNkM7SUFDaEg7SUFFQSxPQUFPO1FBQ0hDLE9BQU87WUFDSDdCLFNBQ0ksNkRBQTZEO1lBQzdEQyxRQUFRNkIsR0FBRyxDQUFDQyxLQUFLLEdBQUcsSUFBSSwyQkFBMkIsK0JBQStCO1lBQ3RGOUIsU0FBU0EsUUFBUTZCLEdBQUcsQ0FBQ0UsTUFBTTtRQUMvQjtJQUNKO0FBQ0osQ0FBQztBQUNELGlFQUFlakMsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlZDE5Ny1zaXRlLy4vcGFnZXMvcHJvdGVjdGVkLmpzeD8wY2Q0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgTW9yYWxpcyBmcm9tICdtb3JhbGlzJztcclxuaW1wb3J0IHsgRXZtQ2hhaW4gfSBmcm9tICdAbW9yYWxpc3dlYjMvY29tbW9uLWV2bS11dGlscyc7XHJcblxyXG5mdW5jdGlvbiBQcm90ZWN0ZWQoeyBtZXNzYWdlLCBuZnRMaXN0IH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPlByb3RlY3RlZCBjb250ZW50PC9oMz5cclxuICAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShuZnRMaXN0LCBudWxsLCAyKX08L3ByZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XHJcblxyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL3NpZ25pbicsXHJcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgXHJcbmlmKCFNb3JhbGlzLkNvcmUuaXNTdGFydGVkKXtcclxuICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XHJcbn1cclxuXHJcbiAgICBjb25zdCBuZnRMaXN0ID0gYXdhaXQgTW9yYWxpcy5Fdm1BcGkubmZ0LmdldFdhbGxldE5GVHMoe1xyXG4gICAgICAgIGNoYWluOiBFdm1DaGFpbi5QT0xZR09OLFxyXG4gICAgICAgIGFkZHJlc3M6IHNlc3Npb24udXNlci5hZGRyZXNzLFxyXG4gICAgICAgIC8vIHJlcGxhY2UgXCIweC4uLlwiIHdpdGggeW91ciBORlQgdG9rZW4gYWRkcmVzc1xyXG4gICAgICAgIHRva2VuQWRkcmVzc2VzOiBbXCIweDBCOTFCMDdiRWI2NzMzMzIyNUE1YkEwMjU5RDU1QWVFMTBFM0E1NzhcIiwgXCIweDcyQjZEYzEwMDNFMTU0YWM3MWM3NkQzNzk1QTM4MjlDZkQ1ZTMzYjlcIl0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB1c2VyIGhhcyBhdCBsZWFzdCBvbmUgTkZUIGhlIHdpbGwgZ2V0IHByb3RlY3RlZCBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBuZnRMaXN0LnJhdy50b3RhbCA+IDAgPyAnTmljZSEgWW91IGhhdmUgb3VyIE5GVCcgOiBcIlNvcnJ5LCB5b3UgZG9uJ3QgaGF2ZSBvdXIgTkZUXCIsXHJcbiAgICAgICAgICAgIG5mdExpc3Q6IG5mdExpc3QucmF3LnJlc3VsdCxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm90ZWN0ZWQ7Il0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJNb3JhbGlzIiwiRXZtQ2hhaW4iLCJQcm90ZWN0ZWQiLCJtZXNzYWdlIiwibmZ0TGlzdCIsImRpdiIsImgzIiwicCIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic2Vzc2lvbiIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiLCJDb3JlIiwiaXNTdGFydGVkIiwic3RhcnQiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTU9SQUxJU19BUElfS0VZIiwiRXZtQXBpIiwibmZ0IiwiZ2V0V2FsbGV0TkZUcyIsImNoYWluIiwiUE9MWUdPTiIsImFkZHJlc3MiLCJ1c2VyIiwidG9rZW5BZGRyZXNzZXMiLCJwcm9wcyIsInJhdyIsInRvdGFsIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/protected.jsx\n");

/***/ }),

/***/ "@moralisweb3/common-evm-utils":
/*!************************************************!*\
  !*** external "@moralisweb3/common-evm-utils" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@moralisweb3/common-evm-utils");

/***/ }),

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/protected.jsx"));
module.exports = __webpack_exports__;

})();