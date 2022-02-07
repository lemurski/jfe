/*! For license information please see main.bc07b748b60b8b7992b6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/CheckoutForm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ CheckoutForm)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\n\n\n\n\nfunction CheckoutForm() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\'\'),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),\n      email = _useState4[0],\n      setEmail = _useState4[1];\n\n  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useStripe)();\n  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useElements)();\n\n  var handleChange = function handleChange(event) {\n    if (event.error) {\n      setError(event.error.message);\n    } else {\n      setError(null);\n    }\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(event) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n\n            case 1:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("form", {\n    onSubmit: handleSubmit,\n    className: "p-3 w-auto mb-20 h-44 rounded-md bg-gray-50"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("label", {\n    htmlFor: "email",\n    className: "ml-[2px]"\n  }, "Email Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("input", {\n    type: "email",\n    placeholder: "jenny.rosen@example.com",\n    autoComplete: "off",\n    required: true,\n    id: "email",\n    value: email,\n    onChange: function onChange(event) {\n      setEmail(event.target.value);\n    },\n    "class": " mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement, {\n    className: "border-2 border-blue-50 h-auto mt-2",\n    id: "card-element",\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {\n    role: "alert"\n  }, error));\n}\n\n//# sourceURL=webpack://frontend/./src/components/CheckoutForm.js?')}},(function(_){_.h=()=>"495ea18167dad98b4ba3"}));