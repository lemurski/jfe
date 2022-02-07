/*! For license information please see main.12e8071e2da2e3b56013.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/Cart.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Cart)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");\n\n\n\n\n\nfunction Cart(props) {\n  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),\n      Cart = _useState2[0],\n      SetCart = _useState2[1];\n\n  (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.xsrfCookieName) = \'csrftoken\';\n  (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.xsrfHeaderName) = \'X-CSRFToken\';\n  var showMenu = Cart.map(function (food, key) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      key: key,\n      className: "mx-auto w-[95%] relative p-3 flex bg-gray-50 mt-5 h-40 rounded-lg"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      className: "flex flex-col"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {\n      className: "text-2xl font-bold leading-7 text-gray-900"\n    }, food.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {\n      className: "mt-1 text-sm"\n    }, food.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {\n      className: "font-semibold text-lg mt-auto mb-0"\n    }, food.price, " z\\u0142")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {\n      className: "w-28 mr-0 ml-auto h-16 rounded-md",\n      src: food.image\n    }));\n  }); // useEffect(() => {\n  //     const orderSocket = new WebSocket(\n  //         \'ws://\' + window.location.host + \'/ws/order_socket/\'\n  //     )\n  //     orderSocket.onmessage = (e) => {\n  //         console.log(e.data)\n  //         const data = JSON.parse(e.data)\n  //         SetOrders(data)\n  //     }\n  //     orderSocket.onopen = (e) => {\n  //         console.log(e.data)\n  //     }\n  // },[]                    )\n\n  var AddToCart = function AddToCart() {\n    var list = Cart.map(function (x) {\n      return x.id;\n    });\n    axios__WEBPACK_IMPORTED_MODULE_2___default().post(\'/api/order\', {\n      \'cart\': list\n    }).then(function (response) {\n      console.log(response);\n    });\n  };\n\n  var GetCart = function GetCart() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\'/api/get_cart\').then(function (response) {\n      SetCart(response.data);\n      console.log(response.data);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    GetCart();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    className: "min-h-screen w-full h-auto"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    id: "home",\n    className: "dark:bg-dark-gray relative flex flex-col min-h-screen w-full h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    cartlen: Cart.length\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    className: "flex flex-col my-auto"\n  }, showMenu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {\n    className: "rounded p-2 bg-white",\n    onClick: AddToCart\n  }, "BUTTON")));\n}\n\n//# sourceURL=webpack://frontend/./src/components/Cart.js?')}},(function(_){_.h=()=>"93332ebe6a065f457672"}));