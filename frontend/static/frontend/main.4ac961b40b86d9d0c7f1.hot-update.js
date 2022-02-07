/*! For license information please see main.4ac961b40b86d9d0c7f1.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/CheckOut.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Checkout)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");\n/* harmony import */ var _CheckoutForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckoutForm */ "./src/components/CheckoutForm.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");\n\n\n\n\n\n\n\nvar stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__.loadStripe)(\'pk_test_51KPqVjIe60pKGrAOnS4gEdD930envC2Iibv1UbuI0kiRWdrjwKrQatPS1r6iqx4nQVUi9ZvymfMaBlwRnWadA9pZ00gpGVhYCD\');\nfunction Checkout() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),\n      Cart = _useState2[0],\n      SetCart = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),\n      clientSecret = _useState4[0],\n      setClientSecret = _useState4[1];\n\n  var FetchStripe = function FetchStripe() {\n    axios__WEBPACK_IMPORTED_MODULE_4___default().post(\'/api/payment\', {\n      email: email,\n      payment_method_id: paymentMethod.id\n    }).then(function (response) {\n      console.log(response.data);\n      setClientSecret(response.data.clientSecret);\n    })["catch"](function (error) {\n      console.log(error);\n    });\n  };\n\n  var GetCart = function GetCart() {\n    axios__WEBPACK_IMPORTED_MODULE_4___default().get(\'/api/get_cart\').then(function (response) {\n      SetCart(response.data);\n      console.log(response.data);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    GetCart();\n    Fet;\n  }, []);\n  var appearance = {\n    theme: \'stripe\'\n  };\n  var options = {\n    clientSecret: clientSecret,\n    appearance: appearance\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    className: "min-h-screen w-full h-auto"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    id: "home",\n    className: "dark:bg-dark-gray relative flex flex-col min-h-screen pt-[4.25rem] w-full px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    cartlen: Cart.length\n  }), clientSecret && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__.Elements, {\n    options: options,\n    stripe: stripePromise\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CheckoutForm__WEBPACK_IMPORTED_MODULE_3__["default"], null))));\n}\n\n//# sourceURL=webpack://frontend/./src/components/CheckOut.js?')}},(function(_){_.h=()=>"138547b4012d72f859a5"}));