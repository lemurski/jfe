/*! For license information please see main.92f0fb53999e92fd15dc.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/Cart.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Cart)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.xsrfCookieName) = \'csrftoken\';\n(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.xsrfHeaderName) = \'X-CSRFToken\';\nfunction Cart(props) {\n  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();\n  var showMenu = location.state.cart.map(function (food, key) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      key: key,\n      className: "mx-auto w-[95%] relative p-3 flex bg-gray-50 mt-5 h-40 rounded-lg"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "flex flex-col"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {\n      className: "text-2xl font-bold leading-7 text-gray-900"\n    }, food.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n      className: "mt-1 text-sm"\n    }, food.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {\n      className: "font-semibold text-lg mt-auto mb-0"\n    }, food.price, " z\\u0142")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {\n      className: "w-28 mr-0 ml-auto h-16 rounded-md",\n      src: food.image\n    }));\n  });\n\n  var press = function press() {\n    console.log(location);\n  };\n\n  var AddToCart = function AddToCart() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().post(\'/api/cart\', {\n      \'cart\': location.state.list\n    }).then(function (response) {\n      console.log(response);\n    });\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect = (function () {\n    press();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "min-h-screen w-full h-auto"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    id: "home",\n    className: "dark:bg-dark-gray relative flex flex-col min-h-screen w-full h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    cart: location.state.cart,\n    list: location.state.list,\n    cartlen: location.state.cartlen\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "flex flex-col my-auto"\n  }, showMenu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    onClick: AddToCart\n  }, "BUTTON")));\n}\n\n//# sourceURL=webpack://frontend/./src/components/Cart.js?')}},(function(_){_.h=()=>"7bbe488928b9fb38a576"}));