/*! For license information please see main.10e47ebe5566c592e2ac.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./src/components/CheckoutForm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ CheckoutForm)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\n\n\n\n\n\n\nfunction CheckoutForm() {\n  var _React$createElement;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\'\'),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),\n      email = _useState4[0],\n      setEmail = _useState4[1];\n\n  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useStripe)();\n  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useElements)();\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),\n      isLoading = _useState6[0],\n      setIsLoading = _useState6[1];\n\n  var handleChange = function handleChange(event) {\n    if (event.error) {\n      setError(event.error.message);\n    } else {\n      setError(null);\n    }\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(event) {\n      var _yield$stripe$confirm, error;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault(); // const card = elements.getElement(CardElement);       \n              // const {paymentMethod, error} = await stripe.createPaymentMethod({\n              //    type: \'card\',\n              //    card: card\n              //   });\n              // console.log(paymentMethod);\n              // axios.post(\'/api/payment\',{email, payment_method_id: paymentMethod.id}).then((response) => {\n              //   console.log(response.data)\n              // }).catch(error => {console.log(error)});\n\n              _context.next = 3;\n              return stripe.confirmPayment({\n                elements: elements,\n                confirmParams: {\n                  // Make sure to change this to your payment completion page\n                  return_url: "http://127.0.0.1:8000/"\n                }\n              });\n\n            case 3:\n              _yield$stripe$confirm = _context.sent;\n              error = _yield$stripe$confirm.error;\n\n              if (error.type === "card_error" || error.type === "validation_error") {\n                setError(error.message);\n              } else {\n                setMessage("An unexpected error occured.");\n              }\n\n            case 6:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("form", {\n    onSubmit: handleSubmit,\n    className: "p-3 w-full my-auto h-[40rem] flex flex-col mx-0 rounded-md bg-gray-50"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("label", {\n    htmlFor: "email",\n    className: "ml-[2px]"\n  }, "Email Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("input", {\n    type: "email",\n    placeholder: "jenny.rosen@example.com",\n    autoComplete: "off",\n    required: true,\n    id: "email",\n    value: email,\n    onChange: function onChange(event) {\n      setEmail(event.target.value);\n    },\n    className: " mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.PaymentElement, (_React$createElement = {\n    id: "payment-element",\n    className: "mt-1 p-3"\n  }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "id", "card-element"), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "onChange", handleChange), _React$createElement)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {\n    role: "alert"\n  }, error));\n}\n\n//# sourceURL=webpack://frontend/./src/components/CheckoutForm.js?')}},(function(e){e.h=()=>"a8c1ccc608f8ecde2f20"}));