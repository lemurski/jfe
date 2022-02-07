/*! For license information please see main.95253d15b40c91e697a8.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/Orders.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Order)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Order() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),\n      Orders = _useState2[0],\n      SetOrders = _useState2[1];\n\n  var GetCart = function GetCart() {\n    axios__WEBPACK_IMPORTED_MODULE_3___default().get(\'/api/get_orders\').then(function (response) {\n      SetOrders(response.data);\n      console.log(response.data);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    GetCart();\n  }, []);\n\n  var DeleteOrder = function DeleteOrder(e) {\n    console.log(e.target.value);\n  };\n\n  var showMenu = Orders.map(function (order, key) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      key: key,\n      className: "mx-auto w-[95%] relative p-3 flex flex-col bg-gray-50 mt-5 h-40 rounded-lg"\n    }, order.ordered.map(function (item, key) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n        className: "text-xl font-semibold",\n        key: key\n      }, item.title);\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      className: "w-full flex mt-auto mb-0"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {\n      value: order.id,\n      onClick: DeleteOrder,\n      className: "w-1/2 bg-green-400 text-white mx-auto py-3 rounded"\n    }, "DONE")));\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    className: "min-h-screen w-full h-auto"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    id: "home",\n    className: "dark:bg-dark-gray relative flex flex-col min-h-screen w-full h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow"\n  }, showMenu));\n}\n\n//# sourceURL=webpack://frontend/./src/components/Orders.js?')}},(function(e){e.h=()=>"1d4fafb731478ae1eac2"}));