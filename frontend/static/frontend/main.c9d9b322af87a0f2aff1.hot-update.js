/*! For license information please see main.c9d9b322af87a0f2aff1.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefrontend("main",{"./node_modules/@stripe/stripe-js/dist/stripe.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadStripe\": () => (/* binding */ loadStripe)\n/* harmony export */ });\nvar V3_URL = 'https://js.stripe.com/v3';\nvar V3_URL_REGEX = /^https:\\/\\/js\\.stripe\\.com\\/v3\\/?(\\?.*)?$/;\nvar EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';\nvar findScript = function findScript() {\n  var scripts = document.querySelectorAll(\"script[src^=\\\"\".concat(V3_URL, \"\\\"]\"));\n\n  for (var i = 0; i < scripts.length; i++) {\n    var script = scripts[i];\n\n    if (!V3_URL_REGEX.test(script.src)) {\n      continue;\n    }\n\n    return script;\n  }\n\n  return null;\n};\n\nvar injectScript = function injectScript(params) {\n  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';\n  var script = document.createElement('script');\n  script.src = \"\".concat(V3_URL).concat(queryString);\n  var headOrBody = document.head || document.body;\n\n  if (!headOrBody) {\n    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');\n  }\n\n  headOrBody.appendChild(script);\n  return script;\n};\n\nvar registerWrapper = function registerWrapper(stripe, startTime) {\n  if (!stripe || !stripe._registerWrapper) {\n    return;\n  }\n\n  stripe._registerWrapper({\n    name: 'stripe-js',\n    version: \"1.22.0\",\n    startTime: startTime\n  });\n};\n\nvar stripePromise = null;\nvar loadScript = function loadScript(params) {\n  // Ensure that we only attempt to load Stripe.js at most once\n  if (stripePromise !== null) {\n    return stripePromise;\n  }\n\n  stripePromise = new Promise(function (resolve, reject) {\n    if (typeof window === 'undefined') {\n      // Resolve to null when imported server side. This makes the module\n      // safe to import in an isomorphic code base.\n      resolve(null);\n      return;\n    }\n\n    if (window.Stripe && params) {\n      console.warn(EXISTING_SCRIPT_MESSAGE);\n    }\n\n    if (window.Stripe) {\n      resolve(window.Stripe);\n      return;\n    }\n\n    try {\n      var script = findScript();\n\n      if (script && params) {\n        console.warn(EXISTING_SCRIPT_MESSAGE);\n      } else if (!script) {\n        script = injectScript(params);\n      }\n\n      script.addEventListener('load', function () {\n        if (window.Stripe) {\n          resolve(window.Stripe);\n        } else {\n          reject(new Error('Stripe.js not available'));\n        }\n      });\n      script.addEventListener('error', function () {\n        reject(new Error('Failed to load Stripe.js'));\n      });\n    } catch (error) {\n      reject(error);\n      return;\n    }\n  });\n  return stripePromise;\n};\nvar initStripe = function initStripe(maybeStripe, args, startTime) {\n  if (maybeStripe === null) {\n    return null;\n  }\n\n  var stripe = maybeStripe.apply(undefined, args);\n  registerWrapper(stripe, startTime);\n  return stripe;\n};\n\n// own script injection.\n\nvar stripePromise$1 = Promise.resolve().then(function () {\n  return loadScript(null);\n});\nvar loadCalled = false;\nstripePromise$1[\"catch\"](function (err) {\n  if (!loadCalled) {\n    console.warn(err);\n  }\n});\nvar loadStripe = function loadStripe() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  loadCalled = true;\n  var startTime = Date.now();\n  return stripePromise$1.then(function (maybeStripe) {\n    return initStripe(maybeStripe, args, startTime);\n  });\n};\n\n\n\n\n//# sourceURL=webpack://frontend/./node_modules/@stripe/stripe-js/dist/stripe.esm.js?")},"./src/components/CheckOut.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Checkout)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");\n/* harmony import */ var _CheckoutForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckoutForm */ "./src/components/CheckoutForm.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");\n\n\n\n\n\n\n\nvar stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__.loadStripe)(\'pk_test_51KPqVjIe60pKGrAOnS4gEdD930envC2Iibv1UbuI0kiRWdrjwKrQatPS1r6iqx4nQVUi9ZvymfMaBlwRnWadA9pZ00gpGVhYCD\');\nfunction Checkout() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),\n      Cart = _useState2[0],\n      SetCart = _useState2[1];\n\n  var GetCart = function GetCart() {\n    axios__WEBPACK_IMPORTED_MODULE_4___default().get(\'/api/get_cart\').then(function (response) {\n      SetCart(response.data);\n      console.log(response.data);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    GetCart();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__.Elements, {\n    stripe: stripePromise\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    className: "min-h-screen w-full h-auto"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {\n    id: "home",\n    className: "dark:bg-dark-gray relative flex flex-col min-h-screen pt-[4.25rem] w-full px-[5%] lg:px-[15%] transition-all duration-500 bg-light-yellow"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    cartlen: Cart.length\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_CheckoutForm__WEBPACK_IMPORTED_MODULE_3__["default"], null))));\n}\n\n//# sourceURL=webpack://frontend/./src/components/CheckOut.js?')}},(function(e){e.h=()=>"0349e024e2862616ef36"}));