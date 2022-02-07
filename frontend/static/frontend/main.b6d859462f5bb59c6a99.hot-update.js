/*! For license information please see main.b6d859462f5bb59c6a99.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/Homepage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Homepage)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");\n\n\n\n\n\n\nfunction Homepage() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),\n      Menu = _useState2[0],\n      SetMenu = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    id: 15,\n    title: \'Hamburger\',\n    description: \'Smaczny Hamburgerson\',\n    ingredients: \'["salami","ser"]\'\n  }),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),\n      Item = _useState4[0],\n      SetItem = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),\n      Displayed = _useState6[0],\n      SetDisplayed = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),\n      Cart = _useState8[0],\n      SetCart = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),\n      Note = _useState10[0],\n      SetNote = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),\n      CartLen = _useState12[0],\n      SetCartLen = _useState12[1];\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),\n      List = _useState14[0],\n      SetList = _useState14[1];\n\n  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();\n\n  var DisplayItem = function DisplayItem(e) {\n    SetItem(Menu[e.target.value]);\n    Item.ingredients = JSON.parse(Item.ingredients);\n    Displayed ? SetDisplayed(false) : SetDisplayed(true);\n  };\n\n  var CloseDetails = function CloseDetails() {\n    SetDisplayed(false);\n    console.log(Cart);\n    SetItem({\n      id: 15,\n      title: \'Hamburger\',\n      description: \'Smaczny Hamburgerson\',\n      ingredients: \'["salami","ser"]\'\n    });\n  };\n\n  var add = function add() {\n    Item.note = Note;\n    SetCart([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Cart), [Item]));\n    SetList([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(List), [Item.id]));\n    SetCartLen(CartLen + 1);\n    SetDisplayed(false);\n    SetItem({\n      id: 15,\n      title: \'Hamburger\',\n      description: \'Smaczny Hamburgerson\',\n      ingredients: \'["salami","ser"]\'\n    });\n  };\n\n  var HandleNote = function HandleNote(e) {\n    SetNote(e.target.value);\n  }; // }\n\n\n  var FetchMenu = function FetchMenu() {\n    axios__WEBPACK_IMPORTED_MODULE_3___default().get(\'/api/menu\').then(function (response) {\n      console.log(response.data);\n      SetMenu(response.data);\n    });\n\n    if (location.state) {\n      SetCartLen(location.state.cartlen);\n      SetCart(location.state.cart);\n      SetList(location.state.list);\n      console.log(location.state);\n    }\n  }; // const showIngredients = (Item.ingredients).map((ingredient) => {\n  //     <div>{ingredient}</div>\n  // })\n\n\n  var showMenu = Menu.map(function (food, key) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n      key: key,\n      className: "mx-auto w-[95%] relative p-3 flex bg-gray-50 mt-5 h-40 rounded-lg"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n      className: "flex flex-col"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", {\n      className: "text-2xl font-bold leading-7 text-gray-900"\n    }, food.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {\n      className: "mt-1 text-sm"\n    }, food.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h2", {\n      className: "font-semibold text-lg mt-auto mb-0"\n    }, food.price, " z\\u0142")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {\n      className: "w-28 mr-0 ml-auto h-16 rounded-md",\n      src: food.image\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {\n      value: key,\n      onClick: DisplayItem,\n      className: "absolute transition-all text-sm font-semibold hover:scale-105 duration-300 bottom-3 right-3 p-[0.3rem] border-2 border-dark-gray rounded-md"\n    }, "Dodaj do koszyka"));\n  });\n\n  var ItemDetails = function ItemDetails() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n      onClick: CloseDetails,\n      className: "top-0 z-20 left-0 bottom-0 right-0 fixed bg-gray-500/25"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n      className: "absolute rounded-xl items-center p-4 z-50 flex flex-col left-0 right-0 m-auto top-0 bottom-0 w-[22.5rem] h-[39rem] bg-gray-50"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n      className: "text-2xl font-bold leading-7 text-gray-900"\n    }, Item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {\n      className: "mt-2 rounded-md w-52 h-auto",\n      src: Item.image\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("p", {\n      className: "mt-2 font-semibold"\n    }, Item.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", {\n      onChange: HandleNote,\n      placeholder: "Dodaj notatk\\u0119 do przedmiotu",\n      className: "mt-10 w-full resize-none h-28 rounded-md focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {\n      onClick: add,\n      className: "p-[0.3rem] border-2 mt-auto mb-0 border-dark-gray rounded-md"\n    }, "Dodaj do koszyka")));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    FetchMenu();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n    className: "min-h-screen w-full h-auto"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    cart: Cart,\n    list: List,\n    cartlen: CartLen\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n    id: "home",\n    className: "dark:bg-dark-gray relative flex flex-col min-h-screen w-full h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {\n    className: "flex flex-col my-auto"\n  }, showMenu), Displayed ? ItemDetails() : null));\n}\n\n//# sourceURL=webpack://frontend/./src/components/Homepage.js?')}},(function(e){e.h=()=>"92f0fb53999e92fd15dc"}));