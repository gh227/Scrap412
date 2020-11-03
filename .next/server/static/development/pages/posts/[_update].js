module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "c:\\Users\\hero\\Documents\\documents\\projects\\Next\\components\\Head.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 1
    }
  }, __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/css/widgeditor/widgEditor.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/lib/bootstrap/css/bootstrap.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/lib/font-awesome/css/all.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/css/style.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/lib/animate/animate.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/css/font-utils.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "/js/widgEditor.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "//pl15639111.profitablegate.com/e5/39/04/e53904565f5cc8cf06c234c67a958b2e.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }));
});

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! exports provided: getPosts, getSingle, getSingleUpdated, getLatest, getTopNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingle", function() { return getSingle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleUpdated", function() { return getSingleUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatest", function() { return getLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopNews", function() { return getTopNews; });
async function getPosts(req, cat) {
  const postsArray = await req.db.collection('posts').find({
    category: cat
  }).sort({
    createdAt: -1
  }).toArray();
  if (!postsArray) return null;
  const posts = postsArray.map(value => {
    const {
      _id,
      image_link,
      caption,
      author,
      source,
      source_link,
      category,
      headings,
      abstract_cat,
      content
    } = value;
    return {
      _id,
      image_link,
      caption,
      author,
      source,
      source_link,
      category,
      headings,
      abstract_cat,
      content
    };
  });
  return {
    posts
  };
}
async function getSingle(req, title) {
  const singleFetch = await req.db.collection('posts').findOne({
    caption: title
  });
  if (!singleFetch) return null;
  const {
    _id,
    image_link,
    caption,
    author,
    source,
    source_link,
    category,
    headings,
    abstract_cat,
    content,
    createdAt
  } = singleFetch;
  const single = {
    _id,
    image_link,
    caption,
    author,
    source,
    source_link,
    category,
    headings,
    abstract_cat,
    content,
    createdAt: createdAt.toString()
  };
  return {
    single
  };
}
async function getSingleUpdated(req, _update, query) {
  console.log(_update, query);
  const singleFetch = await req.db.collection('posts').findOne({
    [query]: _update
  }); //console.log(title)

  if (!singleFetch) return null;
  const {
    _id,
    phoneNumber,
    code
  } = singleFetch;
  const single = {
    _id,
    phoneNumber,
    code
  };
  return {
    single
  };
}
async function getLatest(req) {
  const latestPosts = await req.db.collection('posts').find({
    abstract_cat: 'latest_news'
  }).limit(5).sort({
    createdAt: -1
  }).toArray();
  if (!latestPosts) return null;
  const latest_news = latestPosts.map(value => {
    const {
      _id,
      image_link,
      caption,
      author,
      source,
      source_link,
      category,
      headings,
      abstract_cat,
      content
    } = value;
    return {
      _id,
      image_link,
      caption,
      author,
      source,
      source_link,
      category,
      headings,
      abstract_cat,
      content
    };
  });
  return {
    latest_news
  };
}
async function getTopNews(req) {
  const topNews = await req.db.collection('posts').find({
    abstract_cat: 'top_stories'
  }).limit(5).sort({
    createdAt: -1
  }).toArray();
  if (!topNews) return null;
  const top_news = topNews.map(value => {
    const {
      _id,
      image_link,
      caption,
      author,
      source,
      source_link,
      category,
      headings,
      abstract_cat,
      content
    } = value;
    return {
      _id,
      image_link,
      caption,
      author,
      source,
      source_link,
      category,
      headings,
      abstract_cat,
      content
    };
  });
  return {
    top_news
  };
}

/***/ }),

/***/ "./lib/fetch.js":
/*!**********************!*\
  !*** ./lib/fetch.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetcher; });
async function fetcher(url) {
  const r = await fetch(url);
  return await r.json();
}

/***/ }),

/***/ "./lib/hooks.js":
/*!**********************!*\
  !*** ./lib/hooks.js ***!
  \**********************/
/*! exports provided: useCurrentUser, useUser, useCurrentComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCurrentUser", function() { return useCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUser", function() { return useUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCurrentComments", function() { return useCurrentComments; });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./lib/fetch.js");


function useCurrentUser() {
  const {
    data,
    mutate
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()('/api/user', _fetch__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const user = data === null || data === void 0 ? void 0 : data.user;
  return [user, {
    mutate
  }];
}
function useUser() {
  const {
    data
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()('/api/user/${id}', _fetch__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return data === null || data === void 0 ? void 0 : data.user;
}
function useCurrentComments(url) {
  const {
    data,
    mutate
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(url, _fetch__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const comment = data === null || data === void 0 ? void 0 : data.comment;
  return [comment, {
    mutate
  }];
}

/***/ }),

/***/ "./lib/passport.js":
/*!*************************!*\
  !*** ./lib/passport.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-local */ "passport-local");
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_2__);



passport__WEBPACK_IMPORTED_MODULE_0___default.a.serializeUser((user, done) => {
  done(null, user._id);
});
passport__WEBPACK_IMPORTED_MODULE_0___default.a.deserializeUser((req, id, done) => {
  req.db.collection('users').findOne({
    _id: id
  }).then(user => done(null, user));
});
passport__WEBPACK_IMPORTED_MODULE_0___default.a.use(new passport_local__WEBPACK_IMPORTED_MODULE_2__["Strategy"]({
  usernameField: 'email',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await req.db.collection('users').findOne({
    email
  });
  if (user && (await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, user.password))) done(null, user);else done(null, false, {
    message: 'Email or password is incorrect'
  });
}));
/* harmony default export */ __webpack_exports__["default"] = (passport__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./middlewares/db.js":
/*!***************************!*\
  !*** ./middlewares/db.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"](process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function database(req, res, next) {
  try {
    if (!client.isConnected()) await client.connect();
  } catch (err) {
    console.log(err);
  }

  req.dbClient = client;
  req.db = client.db(process.env.DB_NAME);
  return next();
}

/* harmony default export */ __webpack_exports__["default"] = (database);

/***/ }),

/***/ "./middlewares/middleware.js":
/*!***********************************!*\
  !*** ./middlewares/middleware.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ "./middlewares/db.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session */ "./middlewares/session.js");
/* harmony import */ var _lib_passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/passport */ "./lib/passport.js");




const middleware = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
middleware.use(_db__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (middleware);

/***/ }),

/***/ "./middlewares/session.js":
/*!********************************!*\
  !*** ./middlewares/session.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-session */ "next-session");
/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_session__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connect-mongo */ "connect-mongo");
/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connect_mongo__WEBPACK_IMPORTED_MODULE_1__);


const MongoStore = connect_mongo__WEBPACK_IMPORTED_MODULE_1___default()(next_session__WEBPACK_IMPORTED_MODULE_0__["expressSession"]);
/* harmony default export */ __webpack_exports__["default"] = (function (req, res, next) {
  const mongoStore = new MongoStore({
    client: req.dbClient,
    stringify: false
  });
  return Object(next_session__WEBPACK_IMPORTED_MODULE_0__["session"])({
    store: Object(next_session__WEBPACK_IMPORTED_MODULE_0__["promisifyStore"])(mongoStore)
  })(req, res, next);
});

/***/ }),

/***/ "./pages/posts/[_update].js":
/*!**********************************!*\
  !*** ./pages/posts/[_update].js ***!
  \**********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Head */ "./components/Head.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/hooks */ "./lib/hooks.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _middlewares_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../middlewares/middleware */ "./middlewares/middleware.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/db */ "./lib/db.js");
var _jsxFileName = "c:\\Users\\hero\\Documents\\documents\\projects\\Next\\pages\\posts\\[_update].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







async function getServerSideProps(context) {
  await _middlewares_middleware__WEBPACK_IMPORTED_MODULE_4__["default"].apply(context.req, context.res);
  const single = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_5__["getSingleUpdated"])(context.req, context.params._update, '_id');
  if (!single) context.res.statusCode = 404;
  return {
    props: {
      single
    }
  };
}

const Update = props => {
  console.log(props, " getting it here");
  const {
    single
  } = props.single; //const [user] = useCurrentUser();

  const {
    0: errMsg,
    1: setErrMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: auth,
    1: setAuth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    phoneNumber: single.phoneNumber,
    code: single.code
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {});

  const handleInput = e => {
    const value = e.target.value;
    setInputValue(_objectSpread({}, inputValue, {
      [e.target.name]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      phoneNumber: e.currentTarget.phoneNumber.value,
      code: e.currentTarget.code.value,
      date: new Date()
    };

    try {
      const res = await fetch(`/api/posts`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (res.status == 200 || res.status == 201) {
        setErrMsg("updated successfully");
      }
    } catch (err) {
      setErrMsg("An error occured, pls check your internet connection and try again");
    }
  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 3
    }
  }, __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }), __jsx("div", {
    id: "main-content",
    className: "animate-bottom container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx("h2", {
    style: {
      padding: '20px 0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, "Enter code to continue"), errMsg && __jsx("div", {
    className: "alert alert-success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 16
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, errMsg)), __jsx("form", {
    onSubmit: handleSubmit,
    encType: "multipart/form-data",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "phoneNumber",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "Image link"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "phoneNumber",
    name: "phoneNumber",
    value: inputValue.phoneNumber,
    onChange: handleInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "code",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "code :"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "code",
    name: "code",
    value: inputValue.code,
    onChange: handleInput,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  })), __jsx("button", {
    type: "submit",
    className: "btn btn-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Update);

/***/ }),

/***/ 7:
/*!****************************************!*\
  !*** multi ./pages/posts/[_update].js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\hero\Documents\documents\projects\Next\pages\posts\[_update].js */"./pages/posts/[_update].js");


/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ }),

/***/ "next-session":
/*!*******************************!*\
  !*** external "next-session" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-session");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=[_update].js.map