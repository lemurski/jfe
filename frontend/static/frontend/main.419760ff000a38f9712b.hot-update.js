/*! For license information please see main.419760ff000a38f9712b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/Homepage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Homepage)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Homepage() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),\n      Menu = _useState2[0],\n      SetMenu = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    id: 15,\n    title: \'Hamburger\',\n    description: \'Smaczny Hamburgerson\',\n    ingredients: \'"[salami,ser]"\'\n  }),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),\n      Item = _useState4[0],\n      SetItem = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),\n      Displayed = _useState6[0],\n      SetDisplayed = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),\n      Cart = _useState8[0],\n      SetCart = _useState8[1];\n\n  var DisplayItem = function DisplayItem(e) {\n    SetItem(Menu[e.target.value]);\n    Displayed ? SetDisplayed(false) : SetDisplayed(true);\n  };\n\n  var CloseDetails = function CloseDetails() {\n    SetDisplayed(false);\n    console.log(Cart);\n    console.log(JSON.parse(Item.ingredients));\n  };\n\n  var add = function add() {\n    SetCart([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Cart), [Item]));\n  }; // const AddToCart = () => {\n  //     axios.post(\'/api/cart\', {\n  //         \'cart\': Cart\n  //     }).then((response) => {\n  //         console.log(response)\n  //     })\n  // }\n\n\n  var FetchMenu = function FetchMenu() {\n    axios__WEBPACK_IMPORTED_MODULE_3___default().get(\'/api/menu\').then(function (response) {\n      console.log(response.data);\n      SetMenu(response.data);\n    });\n  };\n\n  var showIngredients = JSON.parse(Item.ingredients).map(function (ingredient) {\n    /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, ingredient);\n  });\n  var showMenu = Menu.map(function (food, key) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n      key: key,\n      className: "mx-auto w-[95%] relative p-3 flex bg-gray-50 mt-5 h-40 rounded-lg"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n      className: "flex flex-col"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", {\n      className: "text-dark-gray text-xl font-semibold"\n    }, food.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {\n      className: "text-sm"\n    }, food.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h2", {\n      className: "font-semibold text-lg mt-auto mb-0"\n    }, food.price, " z\\u0142")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {\n      className: "w-28 mr-0 ml-auto h-16 rounded-md",\n      src: food.image\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {\n      value: key,\n      onClick: DisplayItem,\n      className: "absolute transition-all text-sm font-semibold hover:scale-105 duration-300 bottom-3 right-3 p-[0.3rem] border-2 border-dark-gray rounded-md"\n    }, "Dodaj do koszyka"));\n  });\n\n  var ItemDetails = function ItemDetails() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n      onClick: CloseDetails,\n      className: "top-0 z-20 left-0 bottom-0 right-0 fixed bg-gray-500/25"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n      className: "absolute rounded-xl items-center p-4 z-50 flex flex-col left-0 right-0 m-auto top-0 bottom-0 w-[22.5rem] h-[39rem] bg-gray-50"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n      className: "text-xl font-semibold"\n    }, Item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {\n      className: "mt-2 rounded-md w-52 h-auto",\n      src: Item.image\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {\n      className: "mt-2"\n    }, Item.description), showIngredients, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {\n      onClick: add,\n      className: "p-[0.3rem] border-2 mt-auto mb-0 border-dark-gray rounded-md"\n    }, "Dodaj do koszyka")));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    FetchMenu();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n    id: "home",\n    className: "dark:bg-dark-gray relative flex flex-col min-h-screen w-full h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n    className: "flex flex-col my-auto"\n  }, showMenu), Displayed ? ItemDetails() : null);\n}\n\n//# sourceURL=webpack://frontend/./src/components/Homepage.js?')}},(function(e){e.h=()=>"527474e87c1e99baef8d"}));