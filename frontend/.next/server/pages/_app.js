(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9613:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(6689));

var _v13PagesRouter = __webpack_require__(5922);

__webpack_require__(7069);

__webpack_require__(4260);

__webpack_require__(8401);

__webpack_require__(7524);

__webpack_require__(6867);

var _jsxRuntime = __webpack_require__(997);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  nextRedux
} = __webpack_require__(9030);

function WrappedApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, _objectSpread({}, pageProps));
}

var _default = [nextRedux.withRedux].reduce((cmp, hoc) => hoc(cmp), WrappedApp);

exports["default"] = _default;

/***/ }),

/***/ 9030:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  configureMakeStore,
  getOrCreateStore
} = __webpack_require__(3603);

const {
  HYDRATE,
  createWrapper
} = __webpack_require__(5648);

const merge = __webpack_require__(6981); // Basic hydrate reducer for next-redux-wrapper
// @see: https://github.com/kirill-konshin/next-redux-wrapper#usage


const rootReducer = (state, {
  type,
  payload
}) => type === HYDRATE ? merge({}, state, payload) : state;

const reducers = {};
const makeStore = configureMakeStore({
  rootReducer,
  reducers
});
const nextRedux = createWrapper(getOrCreateStore(makeStore));
module.exports = makeStore;
module.exports.nextRedux = nextRedux;

/***/ }),

/***/ 4260:
/***/ (() => {



/***/ }),

/***/ 8401:
/***/ (() => {



/***/ }),

/***/ 7524:
/***/ (() => {



/***/ }),

/***/ 6867:
/***/ (() => {



/***/ }),

/***/ 7069:
/***/ (() => {



/***/ }),

/***/ 3603:
/***/ ((module) => {

"use strict";
module.exports = require("@gasket/redux");

/***/ }),

/***/ 5922:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material-nextjs/v13-pagesRouter");

/***/ }),

/***/ 6981:
/***/ ((module) => {

"use strict";
module.exports = require("lodash.merge");

/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9613));
module.exports = __webpack_exports__;

})();