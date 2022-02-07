/*! For license information please see main.1021c97a3b3958abc869.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./node_modules/@react-icons/all-files/fa/FaCartPlus.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "FaCartPlus": () => (/* binding */ FaCartPlus)\n/* harmony export */ });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./node_modules/@react-icons/all-files/lib/esm/index.js");\n// THIS FILE IS AUTO GENERATED\n\nfunction FaCartPlus (props) {\n  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"}}]})(props);\n};\n\n\n//# sourceURL=webpack://frontend/./node_modules/@react-icons/all-files/fa/FaCartPlus.esm.js?')},"./src/components/Homepage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Homepage)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var _react_icons_all_files_fa_FaCartPlus_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-icons/all-files/fa/FaCartPlus.esm.js */ "./node_modules/@react-icons/all-files/fa/FaCartPlus.esm.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Homepage() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),\n      Menu = _useState2[0],\n      SetMenu = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),\n      Item = _useState4[0],\n      SetItem = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),\n      Displayed = _useState6[0],\n      SetDisplayed = _useState6[1];\n\n  var DisplayItem = function DisplayItem(e) {\n    SetItem(Menu[e.target.value]);\n    Displayed ? SetDisplayed(false) : SetDisplayed(true);\n  };\n\n  var CloseDetails = function CloseDetails() {\n    SetDisplayed(false);\n  };\n\n  var FetchMenu = function FetchMenu() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\'/api/menu\').then(function (response) {\n      console.log(response.data);\n      SetMenu(response.data);\n    });\n  };\n\n  var showMenu = Menu.map(function (food, key) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      key: key,\n      className: "mx-auto w-[95%] relative p-3 flex bg-gray-50 mt-5 h-40 rounded-lg"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      className: "flex flex-col"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {\n      className: "text-dark-gray text-xl font-semibold"\n    }, food.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {\n      className: "text-sm"\n    }, food.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", {\n      className: "font-semibold text-lg mt-auto mb-0"\n    }, food.price, " z\\u0142")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {\n      className: "w-28 mr-0 ml-auto h-16 rounded-md",\n      src: food.image\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_icons_all_files_fa_FaCartPlus_esm_js__WEBPACK_IMPORTED_MODULE_3__.FaCartPlus, {\n      value: key,\n      onClick: DisplayItem,\n      className: "absolute transition-all text-sm font-semibold w-10 h-10 text-black hover:scale-105 duration-300 bottom-3 right-3 p-[0.3rem] border-2 border-dark-gray rounded-md"\n    }));\n  });\n\n  var ItemDetails = function ItemDetails() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      onClick: CloseDetails,\n      className: "top-0 z-20 left-0 bottom-0 right-0 fixed bg-gray-500/25"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      className: "absolute rounded items-center p-4 z-50 flex flex-col left-0 right-0 m-auto top-0 bottom-0 w-[22.5rem] h-[39rem] bg-gray-50"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n      className: "text-xl font-semibold"\n    }, Item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {\n      className: "mt-2 rounded-md w-52 h-auto",\n      src: Item.image\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {\n      className: "mt-2"\n    }, Item.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {\n      className: "p-[0.3rem] border-2 mt-auto mb-0 border-dark-gray rounded-md"\n    }, "Dodaj do koszyka")));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    FetchMenu();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    id: "home",\n    className: "dark:bg-dark-gray relative flex flex-col min-h-screen w-full h-auto px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    className: "flex flex-col my-auto"\n  }, showMenu), Displayed ? ItemDetails() : null);\n}\n\n//# sourceURL=webpack://frontend/./src/components/Homepage.js?')}},(function(_){_.h=()=>"f93d935b1b0428d19b65"}));