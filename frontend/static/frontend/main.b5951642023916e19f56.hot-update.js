/*! For license information please see main.b5951642023916e19f56.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/CheckOut.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Checkout)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");\n/* harmony import */ var _CheckoutForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckoutForm */ "./src/components/CheckoutForm.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Checkout() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),\n      Cart = _useState2[0],\n      SetCart = _useState2[1];\n\n  var GetCart = function GetCart() {\n    axios__WEBPACK_IMPORTED_MODULE_4___default().get(\'/api/get_cart\').then(function (response) {\n      SetCart(response.data);\n      console.log(response.data);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    GetCart();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    className: "min-h-screen w-full h-auto"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    cartlen: Cart.length\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    id: "home",\n    className: "dark:bg-dark-gray relative flex flex-col min-h-screen w-full px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CheckoutForm__WEBPACK_IMPORTED_MODULE_3__["default"], null)));\n}\n\n//# sourceURL=webpack://frontend/./src/components/CheckOut.js?')}},(function(_){_.h=()=>"3acccaf3720cbfed39c7"}));