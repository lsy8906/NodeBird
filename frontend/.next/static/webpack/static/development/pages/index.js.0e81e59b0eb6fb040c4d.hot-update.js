webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "/Users/LEESEUNGYEOP/Documents/sy/Project/SNS/frontend/pages/index.js";






var Home = function Home() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn,
      user = _useSelector.user;

  var mainPosts = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["LoginAction"]);
    dispatch(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["LogoutAction"]);
    dispatch(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["LoginAction"]);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, isLoggedIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PostForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), mainPosts.map(function (c) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: c,
      post: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0e81e59b0eb6fb040c4d.hot-update.js.map