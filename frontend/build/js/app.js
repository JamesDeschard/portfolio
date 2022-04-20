/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lazysizes_plugins_native_loading_ls_native_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lazysizes/plugins/native-loading/ls.native-loading */ "./node_modules/lazysizes/plugins/native-loading/ls.native-loading.js");
/* harmony import */ var lazysizes_plugins_native_loading_ls_native_loading__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_native_loading_ls_native_loading__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lazysizes/plugins/object-fit/ls.object-fit */ "./node_modules/lazysizes/plugins/object-fit/ls.object-fit.js");
/* harmony import */ var lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_object_fit_ls_object_fit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lazysizes/plugins/unveilhooks/ls.unveilhooks */ "./node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.js");
/* harmony import */ var lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_plugin_syntax_dynamic_import__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/plugin-syntax-dynamic-import */ "./node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js");
/* harmony import */ var conditioner_core_conditioner_core_min__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! conditioner-core/conditioner-core.min */ "./node_modules/conditioner-core/conditioner-core.min.js");
/* harmony import */ var conditioner_core_conditioner_core_min__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(conditioner_core_conditioner_core_min__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _post_build__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post-build */ "./src/scripts/post-build.js");
/* harmony import */ var _polyfill_dataset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./polyfill/dataset */ "./src/scripts/polyfill/dataset.js");















document.documentElement.className = 'js';
conditioner_core_conditioner_core_min__WEBPACK_IMPORTED_MODULE_12__.addPlugin({
  // the plugin "monitor" hook
  // use in html : <div data-module="component" data-context="@visible true"></div>
  monitor: {
    // the name of our monitor, not prefixed with "@"
    name: 'visible',
    // the monitor factory method, this will create our monitor
    create: function create(context, element) {
      return {
        // current match state
        matches: false,
        // called by conditioner to start listening for changes
        addListener: function addListener(change) {
          var _this = this;

          new IntersectionObserver(function (entries) {
            // update the matches state
            _this.matches = entries.pop().isIntersecting === context; // inform conditioner of the new state

            change();
          }).observe(element);
        }
      };
    }
  },
  // converts module aliases to paths
  moduleSetName: function moduleSetName(name) {
    return "./modules/".concat(name, ".js");
  },
  // get the module constructor
  moduleGetConstructor: function moduleGetConstructor(module) {
    return module.default;
  },
  // override the import (this makes webpack bundle all the dynamically included files as well)
  // https://webpack.js.org/api/module-methods/#import-
  // - set to "eager" to create a single chunk for all modules
  // - set to "lazy" to create a separate chunk for each module
  moduleImport: function moduleImport(name) {
    return __webpack_require__("./src/scripts lazy recursive ^.*$")("".concat(name));
  }
});
conditioner_core_conditioner_core_min__WEBPACK_IMPORTED_MODULE_12__.hydrate(document.documentElement);
/**
 * LazySizes configuration
 * https://github.com/aFarkas/lazysizes/#js-api---options
 */

(lazysizes__WEBPACK_IMPORTED_MODULE_6___default().cfg.nativeLoading) = {
  setLoadingAttribute: false
};

/***/ }),

/***/ "./src/scripts/modules/Captcha.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/Captcha.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// eslint-disable-next-line no-unused-vars
/* harmony default export */ __webpack_exports__["default"] = (function (Captcha) {
  var EmailForm = /*#__PURE__*/function () {
    function EmailForm(form) {
      _classCallCheck(this, EmailForm);

      _defineProperty(this, "validateEmail", function (email) {
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      });

      this.form = form;
      this.box_1 = this.form.querySelector('.first-box');
      this.box_2 = this.form.querySelector('.second-box');
      this.box_3 = this.form.querySelector('.third-box');
      this.next = this.box_1.querySelector('button');
      this.submit = this.box_2.querySelector('input[type="submit"]');
      this.bindEvents();
    }

    _createClass(EmailForm, [{
      key: "bindEvents",
      value: function bindEvents() {
        var _this = this;

        this.next.addEventListener('click', function () {
          var form_content = _this.box_1.querySelector('input');

          if (_this.validateEmail(form_content.value)) {
            _this.nextElement(_this.box_1, _this.box_2);
          }
        });
        this.submit.addEventListener('click', function (e) {
          e.preventDefault();

          var response = _this.ajaxRequest(_this.form);

          response.then(function (res) {
            return _this.ajaxAnswer(res);
          });
        });
      }
    }, {
      key: "nextElement",
      value: function nextElement(elementOne, elementTwo) {
        elementOne.classList.add('move-out');
        setTimeout(function () {
          elementOne.classList.add('no-display');
          elementTwo.classList.toggle('no-display');
          elementTwo.classList.toggle('move-in');
        }, 500);
      }
    }, {
      key: "ajaxAnswer",
      value: function ajaxAnswer(response) {
        if (response.form) {
          this.nextElement(this.box_2, this.box_3);
        } else {
          var refresh = this.box_2.querySelector('a');
          refresh.click();
          var fr = 'Captcha invalide! Réessayez!';
          var en = 'Invalid Captcha! Try again!';
          this.submit.value = response.language == 'en' ? en : fr;
        }
      }
    }, {
      key: "ajaxRequest",
      value: function () {
        var _ajaxRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var url, rawResponse, content;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  url = window.location.href;
                  _context.next = 3;
                  return fetch(url, {
                    method: 'POST',
                    headers: {
                      "X-Requested-With": "XMLHttpRequest"
                    },
                    body: new FormData(this.form)
                  });

                case 3:
                  rawResponse = _context.sent;
                  _context.next = 6;
                  return rawResponse.json();

                case 6:
                  content = _context.sent;
                  return _context.abrupt("return", content);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function ajaxRequest() {
          return _ajaxRequest.apply(this, arguments);
        }

        return ajaxRequest;
      }()
    }]);

    return EmailForm;
  }();

  var form = document.querySelector('[data-module="Captcha"]');
  new EmailForm(form);
  var captchas = document.querySelectorAll('img.captcha');

  function headers(options) {
    options = options || {};
    options.headers = options.headers || {};
    options.headers['X-Requested-With'] = 'XMLHttpRequest';
    return options;
  }

  var _iterator = _createForOfIteratorHelper(captchas),
      _step;

  try {
    var _loop = function _loop() {
      var captcha = _step.value;
      var anchor = document.createElement('a');
      anchor.href = '#captcha';
      anchor.classList.add('captcha-refresh');
      anchor.textContent = 'Refresh';
      anchor.addEventListener('click', function (_ref) {
        var target = _ref.target;
        var url = "".concat(window.location.origin, "/captcha/refresh/");
        var formEl = target.parentElement;

        while (formEl && formEl.tagName.toLowerCase() !== 'form') {
          formEl = formEl.parentElement;
        }

        fetch(url, headers()).then(function (res) {
          return res.json();
        }).then(function (json) {
          formEl.querySelector('input[name="captcha_0"]').value = json.key;
          captcha.setAttribute('src', json.image_url);
        }).catch(console.error);
        return false;
      });
      captcha.after(anchor);
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

/***/ }),

/***/ "./src/scripts/modules/Cards.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/Cards.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
















 // eslint-disable-next-line no-unused-vars

/* harmony default export */ __webpack_exports__["default"] = (function (NavigationIndicator) {
  function flip(elements, changeFunc, vars) {
    elements = gsap__WEBPACK_IMPORTED_MODULE_15__.gsap.utils.toArray(elements);
    vars = vars || {};
    var tl = gsap__WEBPACK_IMPORTED_MODULE_15__.gsap.timeline({
      onComplete: vars.onComplete,
      delay: vars.delay || 0
    }),
        bounds = elements.map(function (el) {
      return el.getBoundingClientRect();
    }),
        copy = {},
        p;
    elements.forEach(function (el) {
      el._flip && el._flip.progress(1);
      el._flip = tl;
    });
    changeFunc();

    for (p in vars) {
      p !== "onComplete" && p !== "delay" && (copy[p] = vars[p]);
    }

    copy.x = function (i, element) {
      return "+=" + (bounds[i].left - element.getBoundingClientRect().left);
    };

    copy.y = function (i, element) {
      return "+=" + (bounds[i].top - element.getBoundingClientRect().top);
    };

    return tl.from(elements, copy);
  }

  var CardAnimations = /*#__PURE__*/function () {
    function CardAnimations(cards) {
      _classCallCheck(this, CardAnimations);

      this.cards = _toConsumableArray(cards);
      this.current = this.cards[0];
      this.emojiTrue = document.querySelector('.cards__container__right');
      this.emojiFalse = document.querySelector('.cards__container__left');
      this.showAllCards = document.querySelector('.cards-outro__show-all');
      this.flipped = document.querySelector('.cards__flipped');
      this.standard = document.querySelector('.cards__container__center');
      this.tracker = false;
      this.indexCounter = -1;
      this.indexState = {};
      this.bindEvents();
    }

    _createClass(CardAnimations, [{
      key: "bindEvents",
      value: function bindEvents() {
        var _this = this;

        for (var _i = 0, _arr = [this.emojiTrue, this.emojiFalse]; _i < _arr.length; _i++) {
          var emoji = _arr[_i];
          emoji.addEventListener('click', function () {
            _this.animateCardToExitAndReEnterContainer(_this.current);
          });
        }

        this.showAllCards.addEventListener('click', function () {
          if (!_this.tracker) {
            _this.tracker = true;

            _this.moveSmileyFaces();

            _this.cardsContainerToFlippedContainer(1000);

            _this.changeHoverOnFlexCards();

            _this.changeTransitionPropertyAndRemoveRotation();

            _this.controllerButtonModifications();
          } else {
            _this.tracker = false;

            _this.cardsContainerToFlippedContainer();

            setTimeout(function () {
              _this.changeTransitionPropertyAndRemoveRotation(true);

              _this.changeHoverOnFlexCards();

              _this.moveSmileyFaces();

              _this.controllerButtonModifications();
            }, 1400);
          }
        });
      } // Flip Transition
      // Flip Transition Main Functions

    }, {
      key: "cardsContainerToFlippedContainer",
      value: function cardsContainerToFlippedContainer(timer) {
        var _this2 = this;

        setTimeout(function () {
          _this2.cards.forEach(function (card) {
            card.classList.add('notransition');
            flip([_this2.cards], _this2.swapPosition.bind(_this2, card), {
              duration: 1.3
            });
          });

          _this2.changeMainContainerHeight();
        }, timer);
      }
    }, {
      key: "swapPosition",
      value: function swapPosition(card) {
        var parent = this.tracker === true ? this.flipped : this.standard;
        card.classList.toggle('prepare-card');
        parent.appendChild(this.incrementIndexState(card));
      } // Flip Transition Utils

    }, {
      key: "changeTransitionPropertyAndRemoveRotation",
      value: function changeTransitionPropertyAndRemoveRotation() {
        var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var counter = 0;
        this.cards.forEach(function (card) {
          card.classList.remove('notransition');

          if (reset === true) {
            card.style.transform = "rotate(-".concat(counter, "deg)");
            counter += 10;
          } else {
            card.style.transform = 'rotate(0deg)';
          }
        });
      }
    }, {
      key: "incrementIndexState",
      value: function incrementIndexState(item) {
        if (this.tracker) {
          this.indexState[this.indexCounter] = item;
          this.indexCounter -= 1;
          item.style.zIndex = 0;
        } else {
          for (var _i2 = 0, _Object$entries = Object.entries(this.indexState); _i2 < _Object$entries.length; _i2++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            if (item == value) {
              item.style.zIndex = key;
            }
          }
        }

        return item;
      }
    }, {
      key: "changeHoverOnFlexCards",
      value: function changeHoverOnFlexCards() {
        var _iterator = _createForOfIteratorHelper(this.cards),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var card = _step.value;
            var front = card.firstElementChild;
            var back = front.nextElementSibling;
            front.classList.toggle('activate-hover-1');
            back.classList.toggle('activate-hover-2');
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "changeMainContainerHeight",
      value: function changeMainContainerHeight() {
        var container = document.querySelector('.cards');
        container.classList.toggle('adjust-height');
      }
    }, {
      key: "moveSmileyFaces",
      value: function moveSmileyFaces() {
        if (this.tracker) {
          this.emojiTrue.firstElementChild.classList.remove('move-in-right');
          this.emojiFalse.firstElementChild.classList.remove('move-in-left');
          this.emojiTrue.firstElementChild.classList.add('move-out-right');
          this.emojiFalse.firstElementChild.classList.add('move-out-left');
        } else {
          this.emojiTrue.firstElementChild.classList.remove('move-out-right');
          this.emojiFalse.firstElementChild.classList.remove('move-out-left');
          this.emojiTrue.firstElementChild.classList.add('move-in-right');
          this.emojiFalse.firstElementChild.classList.add('move-in-left');
        }
      } // Flip Transition Changes On Controller Button

    }, {
      key: "controllerButtonModifications",
      value: function controllerButtonModifications() {
        var _this3 = this;

        var textChange = function textChange(text) {
          _this3.showAllCards.firstElementChild.innerHTML = text;
        };

        setTimeout(function () {
          var language = window.location.href.includes('/fr/') ? 'fr' : 'en';

          if (_this3.tracker) {
            if (language == 'en') {
              textChange('Let me guess! &nbsp; &#128640;');
            } else {
              textChange('Laissez moi deviner! &nbsp; &#128640;');
            }
          } else {
            if (language == 'en') {
              textChange('Just show all! &nbsp; &#128640;');
            } else {
              textChange('Tout montrer! &nbsp; &#128640;');
            }
          }
        }, 1000);
        this.showAllCards.classList.toggle('fade-in-last-moment');
      } // Basic Animation 

    }, {
      key: "setZIndexToMinimumAndRemoveAnimationClass",
      value: function setZIndexToMinimumAndRemoveAnimationClass(moved_item) {
        moved_item.style.zIndex = -4;
        moved_item.style.transform = "rotate(-30deg)";
        moved_item.classList.remove('animate');
      }
    }, {
      key: "flipCardInMiddleOfAnimation",
      value: function flipCardInMiddleOfAnimation(card) {
        var front = card.firstElementChild;
        var back = front.nextElementSibling;
        front.classList.toggle('activate-flip-1');
        back.classList.toggle('activate-flip-2');
      }
    }, {
      key: "animateCardToExitAndReEnterContainer",
      value: function animateCardToExitAndReEnterContainer(card) {
        card.classList.add('animate');
        var moved_item = this.cards.shift();
        var rotate = 0,
            zIndex = 0;

        var _iterator2 = _createForOfIteratorHelper(this.cards),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _card = _step2.value;
            _card.style.transform = "rotate(".concat(rotate, "deg)");
            _card.style.zIndex = "".concat(zIndex);
            rotate -= 10, zIndex -= 1;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        setTimeout(this.setZIndexToMinimumAndRemoveAnimationClass.bind(this, moved_item), 5000);
        setTimeout(this.flipCardInMiddleOfAnimation.bind(this, moved_item), 1000);
        setTimeout(this.flipCardInMiddleOfAnimation.bind(this, moved_item), 3500);
        this.cards.push(moved_item);
        this.current = this.cards[0];
      }
    }]);

    return CardAnimations;
  }();

  var cards = document.querySelectorAll('.cards__container__center__card');
  new CardAnimations(cards);
});

/***/ }),

/***/ "./src/scripts/modules/Carousel.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/Carousel.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide/dist/glide.modular.esm */ "./node_modules/@glidejs/glide/dist/glide.modular.esm.js");


 // eslint-disable-next-line no-unused-vars

/* harmony default export */ __webpack_exports__["default"] = (function (Carousel) {
  var carousels = [];
  carousels.push('[data-module=Carousel]');

  var check_url = function check_url(str) {
    if (window.location.href.includes(str)) {
      return true;
    }
  };

  if (check_url('/projects/') || check_url('/projets/')) {
    carousels.push('[data-carousel=Carousel_bis]');
  }

  for (var _i = 0, _carousels = carousels; _i < _carousels.length; _i++) {
    var item = _carousels[_i];
    new _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_2__.default(item, {
      type: 'carousel',
      autoplay: 10,
      animationDuration: 12000,
      animationTimingFunc: 'linear',
      startAt: 0,
      perView: 2,
      gap: 50,
      breakpoints: {
        768: {
          perView: 1
        }
      }
    }).mount({
      Breakpoints: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_2__.Breakpoints,
      Autoplay: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_2__.Autoplay
    });
  }
});

/***/ }),

/***/ "./src/scripts/modules/ChangeTheme.js":
/*!********************************************!*\
  !*** ./src/scripts/modules/ChangeTheme.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// eslint-disable-next-line no-unused-vars
/* harmony default export */ __webpack_exports__["default"] = (function (ChangeTheme) {
  var theme = [{
    "--main-font": "rgb(33, 33, 33)",
    "--main-bg": "#fff",
    "--project-bg": "#F2F2F2",
    "--dark-font": "#666666",
    "--small-font": "#666666",
    "--sub-color-dark": "rgba(0, 0, 0, 0.7)",
    "--sub-color-light": "#F2F2F2"
  }, {
    "--main-font": "#fff",
    "--main-bg": "rgb(33, 33, 33)",
    "--project-bg": "rgb(33, 33, 33)",
    "--dark-font": "rgb(188, 188, 188)",
    "--small-font": "rgba(255, 255, 255, 0.5)",
    "--sub-color-dark": "rgb(42, 42, 42)",
    "--sub-color-light": "rgb(42, 42, 42)"
  }];

  var Theme = /*#__PURE__*/function () {
    function Theme(changeButton) {
      _classCallCheck(this, Theme);

      this.changeButton = changeButton;
      this.root = document.documentElement;
      this.theme = 'white';
      this.white_theme = 'inline';
      this.black_theme = 'none';
      this.bindEvent();
      this.adaptTheme();
    }

    _createClass(Theme, [{
      key: "adaptTheme",
      value: function adaptTheme() {
        var current_theme = localStorage.getItem('theme');

        if (current_theme == 'black') {
          this.makeThemeChanges();
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && current_theme == 'white') {//
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.makeThemeChanges();
        }
      }
    }, {
      key: "bindEvent",
      value: function bindEvent() {
        var _this = this;

        if (!this.changeButton.classList.contains('navigation_hack')) {
          this.changeButton.addEventListener('click', function () {
            _this.makeThemeChanges();
          });
        }
      }
    }, {
      key: "makeThemeChanges",
      value: function makeThemeChanges() {
        this.theme = this.theme == 'white' ? 'black' : 'white';
        localStorage.setItem('theme', this.theme);
        this.swapCssVars();
        this.swapTheme();
        this.swapImages();
      }
    }, {
      key: "swapCssVars",
      value: function swapCssVars() {
        var current = Object.keys(theme[0]);
        var replacement = Object.keys(theme[1]);

        for (var i = 0; i < current.length; i++) {
          var initial_value = theme[0][current[i]];
          theme[0][current[i]] = theme[1][replacement[i]];
          theme[1][current[i]] = initial_value;
        }
      }
    }, {
      key: "swapTheme",
      value: function swapTheme() {
        var _this2 = this;

        Object.entries(theme[0]).forEach(function (kv_pair) {
          _this2.root.style.setProperty(kv_pair[0], kv_pair[1]);
        });
        this.white_theme = this.white_theme == 'inline' ? 'none' : 'inline';
        this.black_theme = this.black_theme == 'none' ? 'inline' : 'none';
      }
    }, {
      key: "swapImages",
      value: function swapImages() {
        this.root.style.setProperty("--theme_white", this.white_theme);
        this.root.style.setProperty("--theme_black", this.black_theme);
      }
    }]);

    return Theme;
  }();

  var button = document.querySelector('[data-module=ChangeTheme]');
  new Theme(button);
});

/***/ }),

/***/ "./src/scripts/modules/MagneticEffect.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/MagneticEffect.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);


// eslint-disable-next-line no-unused-vars
/* harmony default export */ __webpack_exports__["default"] = (function (MagneticEffect) {
  var boxes = document.querySelectorAll('.greeting__box-right');
  boxes.forEach(function (element) {
    var magneticEffect = function magneticEffect(e) {
      var inner = element.children[0];
      var x = e.offsetX,
          y = e.offsetY;
      var width = element.offsetWidth,
          height = element.offsetHeight;
      var move = 15;
      var xMove = x / width * (move * 2) - move;
      var yMove = y / height * (move * 2) - move;
      inner.style.transform = "translate(".concat(xMove, "px, ").concat(yMove, "px)");
      if (e.type === 'mouseleave') inner.style.transform = '';
    };

    element.addEventListener('mousemove', magneticEffect);
    element.addEventListener('mouseleave', magneticEffect);
    return function () {
      element.removeEventListener('mousemove', magneticEffect);
      element.removeEventListener('mouseleave', magneticEffect);
    };
  });
});

/***/ }),

/***/ "./src/scripts/modules/NavigationIndicator.js":
/*!****************************************************!*\
  !*** ./src/scripts/modules/NavigationIndicator.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);











function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// eslint-disable-next-line no-unused-vars
/* harmony default export */ __webpack_exports__["default"] = (function (NavigationIndicator) {
  function activateNavigationIndicator() {
    var links = document.querySelector('[data-module=NavigationIndicator]');
    links = links.querySelectorAll('li');

    var _iterator = _createForOfIteratorHelper(links),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (window.location.href == item.firstChild.href) {
          item.classList.add('navigation__selected');
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  activateNavigationIndicator();
});

/***/ }),

/***/ "./src/scripts/modules/ResponsiveNavigation.js":
/*!*****************************************************!*\
  !*** ./src/scripts/modules/ResponsiveNavigation.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);


// eslint-disable-next-line no-unused-vars
/* harmony default export */ __webpack_exports__["default"] = (function (ResponsiveNavigation) {
  var hamburger = document.querySelector('[data-module=ResponsiveNavigation]');
  var content = hamburger.nextElementSibling;
  hamburger.addEventListener('click', function () {
    content.classList.toggle('open');
  });
  window.addEventListener('click', function (e) {
    var plate = document.querySelector('.plate');

    if (!(e.composedPath().includes(content) || e.composedPath().includes(hamburger))) {
      if (content.classList.contains('open')) {
        content.classList.remove('open');
        plate.classList.toggle('active');
      }
    }
  });
  var languages = document.querySelector('.languages');
  var hamburger_languages = document.querySelector('.navigation__hamburger-content__languages');
  var fragment = document.createDocumentFragment();

  function moveLanguagesToHamburger(mediaquery) {
    if (mediaquery.matches) {
      fragment.appendChild(languages.firstElementChild);
      hamburger_languages.appendChild(fragment);
    } else {
      fragment.appendChild(hamburger_languages.firstElementChild);
      languages.appendChild(fragment);
    }
  }

  var mediaquery = window.matchMedia("(max-width: 768px)");
  moveLanguagesToHamburger(mediaquery);
  mediaquery.addListener(moveLanguagesToHamburger);
});

/***/ }),

/***/ "./src/scripts/modules/ScrollAnimation.js":
/*!************************************************!*\
  !*** ./src/scripts/modules/ScrollAnimation.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }















gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_12__.ScrollTrigger, gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_13__.ScrollToPlugin); // eslint-disable-next-line no-unused-vars

/* harmony default export */ __webpack_exports__["default"] = (function (ScrollAnimation) {
  // Greeting and Email paragraphs
  var animation_targets = [".greeting__box-left", ".email__left-box"];

  for (var _i = 0, _animation_targets = animation_targets; _i < _animation_targets.length; _i++) {
    var item = _animation_targets[_i];
    gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 100%',
        toggleActions: 'play none none none'
      }
    }).fromTo(item, {
      opacity: 0,
      y: -20,
      x: -20
    }, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 1
    });
  } // Ipad


  gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
    scrollTrigger: {
      trigger: '.ipad__ipad',
      start: 'top 100%',
      toggleActions: 'play none none none'
    }
  }).fromTo('.ipad__ipad', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 2
  });
  var images = document.querySelectorAll('.iphone__image-box');

  function getDistanceToExit(element) {
    return element == images[0] ? 200 : -200;
  }

  function getClass(element) {
    return ".".concat(element.classList[1]);
  } // Iphones


  images.forEach(function (image) {
    gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
      scrollTrigger: {
        trigger: getClass(image),
        start: 'top 75%',
        toggleActions: 'play reset play reset'
      }
    }).fromTo(getClass(image), {
      x: getDistanceToExit(image),
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 2
    });
  }); // Cards 

  var cards = document.querySelectorAll('.cards__container__center__card');
  var mydelay = 0;

  var _iterator = _createForOfIteratorHelper(cards),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _item = _step.value;
      gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
        scrollTrigger: {
          trigger: _item,
          start: 'top 100%',
          toggleActions: 'play none none none'
        }
      }).fromTo(_item, {
        opacity: 0,
        y: -100
      }, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: mydelay,
        clearProps: "scale"
      });
      mydelay += 0.5;
    } // Project Detail

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
    scrollTrigger: {
      trigger: ".project__container__right",
      start: 'top 75%',
      toggleActions: 'play reset play reset'
    }
  }).fromTo(".project__container__right", {
    x: 200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 2
  }); // Goal

  var goal = document.querySelector('.goal__left');
  gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
    scrollTrigger: {
      trigger: goal,
      start: 'top 100%',
      toggleActions: 'play none none none'
    }
  }).fromTo(goal, {
    opacity: 0,
    y: -20,
    x: -20
  }, {
    opacity: 1,
    y: 0,
    x: 0,
    duration: 1
  }); // Framing cards

  var framing_cards = document.querySelectorAll('.framing__cards__card, .insights__table__right__point');
  var delay = 0;
  var counter = 0;

  var _iterator2 = _createForOfIteratorHelper(framing_cards),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _item2 = _step2.value;
      gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
        scrollTrigger: {
          trigger: _item2,
          start: 'top 100%',
          toggleActions: 'play none none none'
        }
      }).fromTo(_item2, {
        opacity: 0,
        y: -100
      }, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: delay,
        clearProps: "scale"
      });
      counter += 1;

      if (counter == 4) {
        delay = 0;
      }

      delay += 0.5;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});

/***/ }),

/***/ "./src/scripts/modules/ScrollUp.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/ScrollUp.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
// eslint-disable-next-line no-unused-vars
/* harmony default export */ __webpack_exports__["default"] = (function (ScrollUp) {
  var Elevator = function Elevator(options) {
    "use strict"; // Elements

    var body = null; // Scroll vars

    var animation = null;
    var duration = null; // ms

    var customDuration = false;
    var startTime = null;
    var startPosition = null;
    var endPosition = 0;
    var targetElement = null;
    var verticalPadding = null;
    var elevating = false;
    var startCallback;
    var mainAudio;
    var endAudio;
    var endCallback;
    var that = this;
    /**
     * Utils
     */
    // Thanks Mr Penner - http://robertpenner.com/easing/

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    function extendParameters(options, defaults) {
      for (var option in defaults) {
        var t = options[option] === undefined && typeof option !== "function";

        if (t) {
          options[option] = defaults[option];
        }
      }

      return options;
    }

    function getVerticalOffset(element) {
      var verticalOffset = 0;

      while (element) {
        verticalOffset += element.offsetTop || 0;
        element = element.offsetParent;
      }

      if (verticalPadding) {
        verticalOffset = verticalOffset - verticalPadding;
      }

      return verticalOffset;
    }
    /**
     * Main
     */
    // Time is passed through requestAnimationFrame, what a world!


    function animateLoop(time) {
      if (!startTime) {
        startTime = time;
      }

      var timeSoFar = time - startTime;
      var easedPosition = easeInOutQuad(timeSoFar, startPosition, endPosition - startPosition, duration);
      window.scrollTo(0, easedPosition);

      if (timeSoFar < duration) {
        animation = requestAnimationFrame(animateLoop);
      } else {
        animationFinished();
      }
    }

    this.elevate = function () {
      if (elevating) {
        return;
      }

      elevating = true;
      startPosition = document.documentElement.scrollTop || body.scrollTop;
      updateEndPosition(); // No custom duration set, so we travel at pixels per millisecond. (0.75px per ms)

      if (!customDuration) {
        duration = Math.abs(endPosition - startPosition) * 1.5;
      }

      requestAnimationFrame(animateLoop); // Start music!

      if (mainAudio) {
        mainAudio.play();
      }

      if (startCallback) {
        startCallback();
      }
    };

    function browserMeetsRequirements() {
      return window.requestAnimationFrame && window.Audio && window.addEventListener;
    }

    function resetPositions() {
      startTime = null;
      startPosition = null;
      elevating = false;
    }

    function updateEndPosition() {
      if (targetElement) {
        endPosition = getVerticalOffset(targetElement);
      }
    }

    function animationFinished() {
      resetPositions(); // Stop music!

      if (mainAudio) {
        mainAudio.pause();
        mainAudio.currentTime = 0;
      }

      if (endAudio) {
        endAudio.play();
      }

      if (endCallback) {
        endCallback();
      }
    }

    function onWindowBlur() {
      // If animating, go straight to the top. And play no more music.
      if (elevating) {
        cancelAnimationFrame(animation);
        resetPositions();

        if (mainAudio) {
          mainAudio.pause();
          mainAudio.currentTime = 0;
        }

        updateEndPosition();
        window.scrollTo(0, endPosition);
      }
    }

    function bindElevateToElement(element) {
      if (element.addEventListener) {
        element.addEventListener("click", that.elevate, false);
      } else {
        // Older browsers
        element.attachEvent("onclick", function () {
          updateEndPosition();
          document.documentElement.scrollTop = endPosition;
          document.body.scrollTop = endPosition;
          window.scroll(0, endPosition);
        });
      }
    }

    function init(_options) {
      // Take the stairs instead
      if (!browserMeetsRequirements()) {
        return;
      } // Bind to element click event.


      body = document.body;
      var defaults = {
        duration: undefined,
        mainAudio: false,
        endAudio: false,
        preloadAudio: true,
        loopAudio: true,
        startCallback: null,
        endCallback: null
      };
      _options = extendParameters(_options, defaults);

      if (_options.element) {
        bindElevateToElement(_options.element);
      }

      if (_options.duration) {
        customDuration = true;
        duration = _options.duration;
      }

      if (_options.targetElement) {
        targetElement = _options.targetElement;
      }

      if (_options.verticalPadding) {
        verticalPadding = _options.verticalPadding;
      }

      window.addEventListener("blur", onWindowBlur, false);

      if (_options.mainAudio) {
        mainAudio = new Audio(_options.mainAudio);
        mainAudio.setAttribute("preload", _options.preloadAudio);
        mainAudio.setAttribute("loop", _options.loopAudio);
      }

      if (_options.endAudio) {
        endAudio = new Audio(_options.endAudio);
        endAudio.setAttribute("preload", "true");
      }

      if (_options.endCallback) {
        endCallback = _options.endCallback;
      }

      if (_options.startCallback) {
        startCallback = _options.startCallback;
      }
    }

    init(options);
  };

  if ( true && module.exports) {
    module.exports = Elevator;
  }

  var start = document.querySelector('.elevator-button');

  function activateElevator() {
    var elevator = new Elevator({
      element: start,
      duration: 1000
    });
    start.addEventListener('click', function () {
      elevator.elevate();
    });
  }

  activateElevator();
});

/***/ }),

/***/ "./src/scripts/modules/SmoothScroll.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/SmoothScroll.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);

// eslint-disable-next-line no-unused-vars
/* harmony default export */ __webpack_exports__["default"] = (function (SmoothScroll) {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

/***/ }),

/***/ "./src/scripts/polyfill/dataset.js":
/*!*****************************************!*\
  !*** ./src/scripts/polyfill/dataset.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);





/*
 * @preserve dataset polyfill for IE < 11. See https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset and http://caniuse.com/#search=dataset
 *
 * @author ShirtlessKirk copyright 2015
 * @license WTFPL (http://www.wtfpl.net/txt/copying)
 */

/* eslint-disable */

/* global define: false, module: false */

/* jslint nomen: true, regexp: true, unparam: true */
(function datasetModule(global, definition) {
  // non-exporting module magic dance
  'use strict';

  var amd = 'amd',
      exports = 'exports'; // keeps the method names for CommonJS / AMD from being compiled to single character variable

  if (typeof define === 'function' && define[amd]) {
    define(function definer() {
      return definition(global);
    });
  } else if (false) {} else {
    definition(global);
  }
})(window, function datasetPolyfill(global) {
  'use strict';

  var attribute,
      attributes,
      counter,
      dash,
      dataRegEx,
      document = global.document,
      hasEventListener,
      length,
      match,
      mutationSupport,
      test = document.createElement('_'),
      DOMAttrModified = 'DOMAttrModified';

  function clearDataset(event) {
    delete event.target._datasetCache;
  }

  function toCamelCase(string) {
    return string.replace(dash, function (m, letter) {
      return letter.toUpperCase();
    });
  }

  function getDataset() {
    var dataset = {};
    attributes = this.attributes;

    for (counter = 0, length = attributes.length; counter < length; counter += 1) {
      attribute = attributes[counter];
      match = attribute.name.match(dataRegEx);

      if (match) {
        dataset[toCamelCase(match[1])] = attribute.value;
      }
    }

    return dataset;
  }

  function mutation() {
    if (hasEventListener) {
      test.removeEventListener(DOMAttrModified, mutation, false);
    } else {
      test.detachEvent('on' + DOMAttrModified, mutation);
    }

    mutationSupport = true;
  }

  if (test.dataset !== undefined) {
    return;
  }
  /* eslint-disable */


  dash = /\-([a-z])/ig;
  dataRegEx = /^data\-(.+)/;
  hasEventListener = !!document.addEventListener;
  mutationSupport = false;

  if (hasEventListener) {
    test.addEventListener(DOMAttrModified, mutation, false);
  } else {
    test.attachEvent('on' + DOMAttrModified, mutation);
  } // trigger event (if supported)


  test.setAttribute('foo', 'bar');
  Object.defineProperty(global.Element.prototype, 'dataset', {
    get: mutationSupport ? function get() {
      if (!this._datasetCache) {
        this._datasetCache = getDataset.call(this);
      }

      return this._datasetCache;
    } : getDataset
  });

  if (mutationSupport && hasEventListener) {
    // < IE9 supports neither
    document.addEventListener(DOMAttrModified, clearDataset, false);
  }
});

/***/ }),

/***/ "./src/scripts/post-build.js":
/*!***********************************!*\
  !*** ./src/scripts/post-build.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);





function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__("./src/icons sync recursive \\.svg$"));

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/icons/arrow-bottom.svg":
/*!************************************!*\
  !*** ./src/icons/arrow-bottom.svg ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-arrow-bottom-usage",
      viewBox: "0 0 24 24",
      url: "icons/" + "sprite.svg#icon-arrow-bottom-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/icons/arrow-right.svg":
/*!***********************************!*\
  !*** ./src/icons/arrow-right.svg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-arrow-right-usage",
      viewBox: "0 0 24 24",
      url: "icons/" + "sprite.svg#icon-arrow-right-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/icons/caret-right.svg":
/*!***********************************!*\
  !*** ./src/icons/caret-right.svg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-caret-right-usage",
      viewBox: "0 0 24 24",
      url: "icons/" + "sprite.svg#icon-caret-right-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/icons/close.svg":
/*!*****************************!*\
  !*** ./src/icons/close.svg ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-close-usage",
      viewBox: "0 0 24 24",
      url: "icons/" + "sprite.svg#icon-close-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/icons/en.svg":
/*!**************************!*\
  !*** ./src/icons/en.svg ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-en-usage",
      viewBox: "0 0 640 480",
      url: "icons/" + "sprite.svg#icon-en-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/icons/fr.svg":
/*!**************************!*\
  !*** ./src/icons/fr.svg ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-fr-usage",
      viewBox: "0 0 640 480",
      url: "icons/" + "sprite.svg#icon-fr-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/icons/menu.svg":
/*!****************************!*\
  !*** ./src/icons/menu.svg ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-menu-usage",
      viewBox: "0 0 24 24",
      url: "icons/" + "sprite.svg#icon-menu-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/icons sync recursive \\.svg$":
/*!********************************!*\
  !*** ./src/icons/ sync \.svg$ ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./arrow-bottom.svg": "./src/icons/arrow-bottom.svg",
	"./arrow-right.svg": "./src/icons/arrow-right.svg",
	"./caret-right.svg": "./src/icons/caret-right.svg",
	"./close.svg": "./src/icons/close.svg",
	"./en.svg": "./src/icons/en.svg",
	"./fr.svg": "./src/icons/fr.svg",
	"./menu.svg": "./src/icons/menu.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/icons sync recursive \\.svg$";

/***/ }),

/***/ "./src/scripts lazy recursive ^.*$":
/*!*************************************************!*\
  !*** ./src/scripts/ lazy ^.*$ namespace object ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	".": "./src/scripts/index.js",
	"./": "./src/scripts/index.js",
	"./index": "./src/scripts/index.js",
	"./index.js": "./src/scripts/index.js",
	"./modules/Captcha": "./src/scripts/modules/Captcha.js",
	"./modules/Captcha.js": "./src/scripts/modules/Captcha.js",
	"./modules/Cards": "./src/scripts/modules/Cards.js",
	"./modules/Cards.js": "./src/scripts/modules/Cards.js",
	"./modules/Carousel": "./src/scripts/modules/Carousel.js",
	"./modules/Carousel.js": "./src/scripts/modules/Carousel.js",
	"./modules/ChangeTheme": "./src/scripts/modules/ChangeTheme.js",
	"./modules/ChangeTheme.js": "./src/scripts/modules/ChangeTheme.js",
	"./modules/MagneticEffect": "./src/scripts/modules/MagneticEffect.js",
	"./modules/MagneticEffect.js": "./src/scripts/modules/MagneticEffect.js",
	"./modules/NavigationIndicator": "./src/scripts/modules/NavigationIndicator.js",
	"./modules/NavigationIndicator.js": "./src/scripts/modules/NavigationIndicator.js",
	"./modules/ResponsiveNavigation": "./src/scripts/modules/ResponsiveNavigation.js",
	"./modules/ResponsiveNavigation.js": "./src/scripts/modules/ResponsiveNavigation.js",
	"./modules/ScrollAnimation": "./src/scripts/modules/ScrollAnimation.js",
	"./modules/ScrollAnimation.js": "./src/scripts/modules/ScrollAnimation.js",
	"./modules/ScrollUp": "./src/scripts/modules/ScrollUp.js",
	"./modules/ScrollUp.js": "./src/scripts/modules/ScrollUp.js",
	"./modules/SmoothScroll": "./src/scripts/modules/SmoothScroll.js",
	"./modules/SmoothScroll.js": "./src/scripts/modules/SmoothScroll.js",
	"./polyfill/dataset": "./src/scripts/polyfill/dataset.js",
	"./polyfill/dataset.js": "./src/scripts/polyfill/dataset.js",
	"./post-build": "./src/scripts/post-build.js",
	"./post-build.js": "./src/scripts/post-build.js"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = "./src/scripts lazy recursive ^.*$";
module.exports = webpackAsyncContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = function() { return Promise.resolve(); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/index.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/modules/Captcha.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/modules/Cards.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/modules/Carousel.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/modules/ChangeTheme.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/modules/MagneticEffect.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/modules/NavigationIndicator.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/modules/ResponsiveNavigation.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/modules/ScrollAnimation.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/modules/ScrollUp.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/modules/SmoothScroll.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/polyfill/dataset.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/scripts/post-build.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1ZBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBRWhEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9DYXB0Y2hhLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0NoYW5nZVRoZW1lLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzL21vZHVsZXMvTWFnbmV0aWNFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9OYXZpZ2F0aW9uSW5kaWNhdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzL21vZHVsZXMvUmVzcG9uc2l2ZU5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9TY3JvbGxBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9TY3JvbGxVcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Ntb290aFNjcm9sbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9wb2x5ZmlsbC9kYXRhc2V0LmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzL3Bvc3QtYnVpbGQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2U1YzYiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2ljb25zL2Fycm93LWJvdHRvbS5zdmciLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2ljb25zL2Fycm93LXJpZ2h0LnN2ZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvaWNvbnMvY2FyZXQtcmlnaHQuc3ZnIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2ljb25zL2VuLnN2ZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvaWNvbnMvZnIuc3ZnIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9pY29ucy9tZW51LnN2ZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvL1VzZXJzL2phbWVzZGVzY2hhcmQvcG9ydGZvbGlvL2Zyb250ZW5kL3NyYy9pY29uc3xzeW5jfC9cXC5zdmckLyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0c3xsYXp5fC9eLiokL3xncm91cE9wdGlvbnM6IHt9fG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFybW9ueSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGxhenlTaXplcyBmcm9tICdsYXp5c2l6ZXMnO1xuaW1wb3J0ICdsYXp5c2l6ZXMvcGx1Z2lucy9uYXRpdmUtbG9hZGluZy9scy5uYXRpdmUtbG9hZGluZyc7XG5pbXBvcnQgJ2xhenlzaXplcy9wbHVnaW5zL29iamVjdC1maXQvbHMub2JqZWN0LWZpdCc7XG5pbXBvcnQgJ2xhenlzaXplcy9wbHVnaW5zL3VudmVpbGhvb2tzL2xzLnVudmVpbGhvb2tzJztcbmltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJztcbmltcG9ydCAnQGJhYmVsL3BsdWdpbi1zeW50YXgtZHluYW1pYy1pbXBvcnQnO1xuaW1wb3J0ICogYXMgY29uZGl0aW9uZXIgZnJvbSAnY29uZGl0aW9uZXItY29yZS9jb25kaXRpb25lci1jb3JlLm1pbic7XG5pbXBvcnQgJy4vcG9zdC1idWlsZCc7XG5pbXBvcnQgJy4vcG9seWZpbGwvZGF0YXNldCc7XG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gJ2pzJztcbmNvbmRpdGlvbmVyLmFkZFBsdWdpbih7XG4gIC8vIHRoZSBwbHVnaW4gXCJtb25pdG9yXCIgaG9va1xuICAvLyB1c2UgaW4gaHRtbCA6IDxkaXYgZGF0YS1tb2R1bGU9XCJjb21wb25lbnRcIiBkYXRhLWNvbnRleHQ9XCJAdmlzaWJsZSB0cnVlXCI+PC9kaXY+XG4gIG1vbml0b3I6IHtcbiAgICAvLyB0aGUgbmFtZSBvZiBvdXIgbW9uaXRvciwgbm90IHByZWZpeGVkIHdpdGggXCJAXCJcbiAgICBuYW1lOiAndmlzaWJsZScsXG4gICAgLy8gdGhlIG1vbml0b3IgZmFjdG9yeSBtZXRob2QsIHRoaXMgd2lsbCBjcmVhdGUgb3VyIG1vbml0b3JcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShjb250ZXh0LCBlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBjdXJyZW50IG1hdGNoIHN0YXRlXG4gICAgICAgIG1hdGNoZXM6IGZhbHNlLFxuICAgICAgICAvLyBjYWxsZWQgYnkgY29uZGl0aW9uZXIgdG8gc3RhcnQgbGlzdGVuaW5nIGZvciBjaGFuZ2VzXG4gICAgICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjaGFuZ2UpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIG1hdGNoZXMgc3RhdGVcbiAgICAgICAgICAgIF90aGlzLm1hdGNoZXMgPSBlbnRyaWVzLnBvcCgpLmlzSW50ZXJzZWN0aW5nID09PSBjb250ZXh0OyAvLyBpbmZvcm0gY29uZGl0aW9uZXIgb2YgdGhlIG5ldyBzdGF0ZVxuXG4gICAgICAgICAgICBjaGFuZ2UoKTtcbiAgICAgICAgICB9KS5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgLy8gY29udmVydHMgbW9kdWxlIGFsaWFzZXMgdG8gcGF0aHNcbiAgbW9kdWxlU2V0TmFtZTogZnVuY3Rpb24gbW9kdWxlU2V0TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIFwiLi9tb2R1bGVzL1wiLmNvbmNhdChuYW1lLCBcIi5qc1wiKTtcbiAgfSxcbiAgLy8gZ2V0IHRoZSBtb2R1bGUgY29uc3RydWN0b3JcbiAgbW9kdWxlR2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uIG1vZHVsZUdldENvbnN0cnVjdG9yKG1vZHVsZSkge1xuICAgIHJldHVybiBtb2R1bGUuZGVmYXVsdDtcbiAgfSxcbiAgLy8gb3ZlcnJpZGUgdGhlIGltcG9ydCAodGhpcyBtYWtlcyB3ZWJwYWNrIGJ1bmRsZSBhbGwgdGhlIGR5bmFtaWNhbGx5IGluY2x1ZGVkIGZpbGVzIGFzIHdlbGwpXG4gIC8vIGh0dHBzOi8vd2VicGFjay5qcy5vcmcvYXBpL21vZHVsZS1tZXRob2RzLyNpbXBvcnQtXG4gIC8vIC0gc2V0IHRvIFwiZWFnZXJcIiB0byBjcmVhdGUgYSBzaW5nbGUgY2h1bmsgZm9yIGFsbCBtb2R1bGVzXG4gIC8vIC0gc2V0IHRvIFwibGF6eVwiIHRvIGNyZWF0ZSBhIHNlcGFyYXRlIGNodW5rIGZvciBlYWNoIG1vZHVsZVxuICBtb2R1bGVJbXBvcnQ6IGZ1bmN0aW9uIG1vZHVsZUltcG9ydChuYW1lKSB7XG4gICAgcmV0dXJuIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cbiAgICBcIlwiLmNvbmNhdChuYW1lKSk7XG4gIH1cbn0pO1xuY29uZGl0aW9uZXIuaHlkcmF0ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuLyoqXG4gKiBMYXp5U2l6ZXMgY29uZmlndXJhdGlvblxuICogaHR0cHM6Ly9naXRodWIuY29tL2FGYXJrYXMvbGF6eXNpemVzLyNqcy1hcGktLS1vcHRpb25zXG4gKi9cblxubGF6eVNpemVzLmNmZy5uYXRpdmVMb2FkaW5nID0ge1xuICBzZXRMb2FkaW5nQXR0cmlidXRlOiBmYWxzZVxufTsiLCJmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1wiO1xuXG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcubWF0Y2guanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucHJvbWlzZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoQ2FwdGNoYSkge1xuICB2YXIgRW1haWxGb3JtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFbWFpbEZvcm0oZm9ybSkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVtYWlsRm9ybSk7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInZhbGlkYXRlRW1haWxcIiwgZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkubWF0Y2goL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgdGhpcy5ib3hfMSA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCcuZmlyc3QtYm94Jyk7XG4gICAgICB0aGlzLmJveF8yID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtYm94Jyk7XG4gICAgICB0aGlzLmJveF8zID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJy50aGlyZC1ib3gnKTtcbiAgICAgIHRoaXMubmV4dCA9IHRoaXMuYm94XzEucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuYm94XzIucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEVtYWlsRm9ybSwgW3tcbiAgICAgIGtleTogXCJiaW5kRXZlbnRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB0aGlzLm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGZvcm1fY29udGVudCA9IF90aGlzLmJveF8xLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5cbiAgICAgICAgICBpZiAoX3RoaXMudmFsaWRhdGVFbWFpbChmb3JtX2NvbnRlbnQudmFsdWUpKSB7XG4gICAgICAgICAgICBfdGhpcy5uZXh0RWxlbWVudChfdGhpcy5ib3hfMSwgX3RoaXMuYm94XzIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBfdGhpcy5hamF4UmVxdWVzdChfdGhpcy5mb3JtKTtcblxuICAgICAgICAgIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFqYXhBbnN3ZXIocmVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm5leHRFbGVtZW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dEVsZW1lbnQoZWxlbWVudE9uZSwgZWxlbWVudFR3bykge1xuICAgICAgICBlbGVtZW50T25lLmNsYXNzTGlzdC5hZGQoJ21vdmUtb3V0Jyk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGVsZW1lbnRPbmUuY2xhc3NMaXN0LmFkZCgnbm8tZGlzcGxheScpO1xuICAgICAgICAgIGVsZW1lbnRUd28uY2xhc3NMaXN0LnRvZ2dsZSgnbm8tZGlzcGxheScpO1xuICAgICAgICAgIGVsZW1lbnRUd28uY2xhc3NMaXN0LnRvZ2dsZSgnbW92ZS1pbicpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhamF4QW5zd2VyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWpheEFuc3dlcihyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2UuZm9ybSkge1xuICAgICAgICAgIHRoaXMubmV4dEVsZW1lbnQodGhpcy5ib3hfMiwgdGhpcy5ib3hfMyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHJlZnJlc2ggPSB0aGlzLmJveF8yLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgICAgICAgICByZWZyZXNoLmNsaWNrKCk7XG4gICAgICAgICAgdmFyIGZyID0gJ0NhcHRjaGEgaW52YWxpZGUhIFLDqWVzc2F5ZXohJztcbiAgICAgICAgICB2YXIgZW4gPSAnSW52YWxpZCBDYXB0Y2hhISBUcnkgYWdhaW4hJztcbiAgICAgICAgICB0aGlzLnN1Ym1pdC52YWx1ZSA9IHJlc3BvbnNlLmxhbmd1YWdlID09ICdlbicgPyBlbiA6IGZyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFqYXhSZXF1ZXN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2FqYXhSZXF1ZXN0ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICAgIHZhciB1cmwsIHJhd1Jlc3BvbnNlLCBjb250ZW50O1xuICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBuZXcgRm9ybURhdGEodGhpcy5mb3JtKVxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICByYXdSZXNwb25zZSA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByYXdSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICBjb250ZW50ID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF9jYWxsZWUsIHRoaXMpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgZnVuY3Rpb24gYWpheFJlcXVlc3QoKSB7XG4gICAgICAgICAgcmV0dXJuIF9hamF4UmVxdWVzdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFqYXhSZXF1ZXN0O1xuICAgICAgfSgpXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEVtYWlsRm9ybTtcbiAgfSgpO1xuXG4gIHZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbW9kdWxlPVwiQ2FwdGNoYVwiXScpO1xuICBuZXcgRW1haWxGb3JtKGZvcm0pO1xuICB2YXIgY2FwdGNoYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuY2FwdGNoYScpO1xuXG4gIGZ1bmN0aW9uIGhlYWRlcnMob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICBvcHRpb25zLmhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoY2FwdGNoYXMpLFxuICAgICAgX3N0ZXA7XG5cbiAgdHJ5IHtcbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgIHZhciBjYXB0Y2hhID0gX3N0ZXAudmFsdWU7XG4gICAgICB2YXIgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgYW5jaG9yLmhyZWYgPSAnI2NhcHRjaGEnO1xuICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2NhcHRjaGEtcmVmcmVzaCcpO1xuICAgICAgYW5jaG9yLnRleHRDb250ZW50ID0gJ1JlZnJlc2gnO1xuICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IF9yZWYudGFyZ2V0O1xuICAgICAgICB2YXIgdXJsID0gXCJcIi5jb25jYXQod2luZG93LmxvY2F0aW9uLm9yaWdpbiwgXCIvY2FwdGNoYS9yZWZyZXNoL1wiKTtcbiAgICAgICAgdmFyIGZvcm1FbCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIHdoaWxlIChmb3JtRWwgJiYgZm9ybUVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2Zvcm0nKSB7XG4gICAgICAgICAgZm9ybUVsID0gZm9ybUVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCh1cmwsIGhlYWRlcnMoKSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgICBmb3JtRWwucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImNhcHRjaGFfMFwiXScpLnZhbHVlID0ganNvbi5rZXk7XG4gICAgICAgICAgY2FwdGNoYS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGpzb24uaW1hZ2VfdXJsKTtcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgY2FwdGNoYS5hZnRlcihhbmNob3IpO1xuICAgIH07XG5cbiAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgX2xvb3AoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvci5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yLmYoKTtcbiAgfVxufSk7IiwiZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07IGlmICghaXQpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgdGhyb3cgX2UyOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UzKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMzsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZW50cmllcy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluY2x1ZGVzLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanNcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChOYXZpZ2F0aW9uSW5kaWNhdG9yKSB7XG4gIGZ1bmN0aW9uIGZsaXAoZWxlbWVudHMsIGNoYW5nZUZ1bmMsIHZhcnMpIHtcbiAgICBlbGVtZW50cyA9IGdzYXAudXRpbHMudG9BcnJheShlbGVtZW50cyk7XG4gICAgdmFycyA9IHZhcnMgfHwge307XG4gICAgdmFyIHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBvbkNvbXBsZXRlOiB2YXJzLm9uQ29tcGxldGUsXG4gICAgICBkZWxheTogdmFycy5kZWxheSB8fCAwXG4gICAgfSksXG4gICAgICAgIGJvdW5kcyA9IGVsZW1lbnRzLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9KSxcbiAgICAgICAgY29weSA9IHt9LFxuICAgICAgICBwO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5fZmxpcCAmJiBlbC5fZmxpcC5wcm9ncmVzcygxKTtcbiAgICAgIGVsLl9mbGlwID0gdGw7XG4gICAgfSk7XG4gICAgY2hhbmdlRnVuYygpO1xuXG4gICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgIHAgIT09IFwib25Db21wbGV0ZVwiICYmIHAgIT09IFwiZGVsYXlcIiAmJiAoY29weVtwXSA9IHZhcnNbcF0pO1xuICAgIH1cblxuICAgIGNvcHkueCA9IGZ1bmN0aW9uIChpLCBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gXCIrPVwiICsgKGJvdW5kc1tpXS5sZWZ0IC0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KTtcbiAgICB9O1xuXG4gICAgY29weS55ID0gZnVuY3Rpb24gKGksIGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBcIis9XCIgKyAoYm91bmRzW2ldLnRvcCAtIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRsLmZyb20oZWxlbWVudHMsIGNvcHkpO1xuICB9XG5cbiAgdmFyIENhcmRBbmltYXRpb25zID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYXJkQW5pbWF0aW9ucyhjYXJkcykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhcmRBbmltYXRpb25zKTtcblxuICAgICAgdGhpcy5jYXJkcyA9IF90b0NvbnN1bWFibGVBcnJheShjYXJkcyk7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmNhcmRzWzBdO1xuICAgICAgdGhpcy5lbW9qaVRydWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX2NvbnRhaW5lcl9fcmlnaHQnKTtcbiAgICAgIHRoaXMuZW1vamlGYWxzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fY29udGFpbmVyX19sZWZ0Jyk7XG4gICAgICB0aGlzLnNob3dBbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1vdXRyb19fc2hvdy1hbGwnKTtcbiAgICAgIHRoaXMuZmxpcHBlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fZmxpcHBlZCcpO1xuICAgICAgdGhpcy5zdGFuZGFyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fY29udGFpbmVyX19jZW50ZXInKTtcbiAgICAgIHRoaXMudHJhY2tlciA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRleENvdW50ZXIgPSAtMTtcbiAgICAgIHRoaXMuaW5kZXhTdGF0ZSA9IHt9O1xuICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENhcmRBbmltYXRpb25zLCBbe1xuICAgICAga2V5OiBcImJpbmRFdmVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2FyciA9IFt0aGlzLmVtb2ppVHJ1ZSwgdGhpcy5lbW9qaUZhbHNlXTsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgIHZhciBlbW9qaSA9IF9hcnJbX2ldO1xuICAgICAgICAgIGVtb2ppLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZUNhcmRUb0V4aXRBbmRSZUVudGVyQ29udGFpbmVyKF90aGlzLmN1cnJlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93QWxsQ2FyZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFfdGhpcy50cmFja2VyKSB7XG4gICAgICAgICAgICBfdGhpcy50cmFja2VyID0gdHJ1ZTtcblxuICAgICAgICAgICAgX3RoaXMubW92ZVNtaWxleUZhY2VzKCk7XG5cbiAgICAgICAgICAgIF90aGlzLmNhcmRzQ29udGFpbmVyVG9GbGlwcGVkQ29udGFpbmVyKDEwMDApO1xuXG4gICAgICAgICAgICBfdGhpcy5jaGFuZ2VIb3Zlck9uRmxleENhcmRzKCk7XG5cbiAgICAgICAgICAgIF90aGlzLmNoYW5nZVRyYW5zaXRpb25Qcm9wZXJ0eUFuZFJlbW92ZVJvdGF0aW9uKCk7XG5cbiAgICAgICAgICAgIF90aGlzLmNvbnRyb2xsZXJCdXR0b25Nb2RpZmljYXRpb25zKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnRyYWNrZXIgPSBmYWxzZTtcblxuICAgICAgICAgICAgX3RoaXMuY2FyZHNDb250YWluZXJUb0ZsaXBwZWRDb250YWluZXIoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzLmNoYW5nZVRyYW5zaXRpb25Qcm9wZXJ0eUFuZFJlbW92ZVJvdGF0aW9uKHRydWUpO1xuXG4gICAgICAgICAgICAgIF90aGlzLmNoYW5nZUhvdmVyT25GbGV4Q2FyZHMoKTtcblxuICAgICAgICAgICAgICBfdGhpcy5tb3ZlU21pbGV5RmFjZXMoKTtcblxuICAgICAgICAgICAgICBfdGhpcy5jb250cm9sbGVyQnV0dG9uTW9kaWZpY2F0aW9ucygpO1xuICAgICAgICAgICAgfSwgMTQwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gRmxpcCBUcmFuc2l0aW9uXG4gICAgICAvLyBGbGlwIFRyYW5zaXRpb24gTWFpbiBGdW5jdGlvbnNcblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjYXJkc0NvbnRhaW5lclRvRmxpcHBlZENvbnRhaW5lclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhcmRzQ29udGFpbmVyVG9GbGlwcGVkQ29udGFpbmVyKHRpbWVyKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5jYXJkcy5mb3JFYWNoKGZ1bmN0aW9uIChjYXJkKSB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ25vdHJhbnNpdGlvbicpO1xuICAgICAgICAgICAgZmxpcChbX3RoaXMyLmNhcmRzXSwgX3RoaXMyLnN3YXBQb3NpdGlvbi5iaW5kKF90aGlzMiwgY2FyZCksIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEuM1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBfdGhpczIuY2hhbmdlTWFpbkNvbnRhaW5lckhlaWdodCgpO1xuICAgICAgICB9LCB0aW1lcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN3YXBQb3NpdGlvblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN3YXBQb3NpdGlvbihjYXJkKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnRyYWNrZXIgPT09IHRydWUgPyB0aGlzLmZsaXBwZWQgOiB0aGlzLnN0YW5kYXJkO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoJ3ByZXBhcmUtY2FyZCcpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5pbmNyZW1lbnRJbmRleFN0YXRlKGNhcmQpKTtcbiAgICAgIH0gLy8gRmxpcCBUcmFuc2l0aW9uIFV0aWxzXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2hhbmdlVHJhbnNpdGlvblByb3BlcnR5QW5kUmVtb3ZlUm90YXRpb25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VUcmFuc2l0aW9uUHJvcGVydHlBbmRSZW1vdmVSb3RhdGlvbigpIHtcbiAgICAgICAgdmFyIHJlc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLmNhcmRzLmZvckVhY2goZnVuY3Rpb24gKGNhcmQpIHtcbiAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ25vdHJhbnNpdGlvbicpO1xuXG4gICAgICAgICAgaWYgKHJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjYXJkLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKC1cIi5jb25jYXQoY291bnRlciwgXCJkZWcpXCIpO1xuICAgICAgICAgICAgY291bnRlciArPSAxMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJpbmNyZW1lbnRJbmRleFN0YXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5jcmVtZW50SW5kZXhTdGF0ZShpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLnRyYWNrZXIpIHtcbiAgICAgICAgICB0aGlzLmluZGV4U3RhdGVbdGhpcy5pbmRleENvdW50ZXJdID0gaXRlbTtcbiAgICAgICAgICB0aGlzLmluZGV4Q291bnRlciAtPSAxO1xuICAgICAgICAgIGl0ZW0uc3R5bGUuekluZGV4ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBfaTIgPSAwLCBfT2JqZWN0JGVudHJpZXMgPSBPYmplY3QuZW50cmllcyh0aGlzLmluZGV4U3RhdGUpOyBfaTIgPCBfT2JqZWN0JGVudHJpZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgICAgdmFyIF9PYmplY3QkZW50cmllcyRfaSA9IF9zbGljZWRUb0FycmF5KF9PYmplY3QkZW50cmllc1tfaTJdLCAyKSxcbiAgICAgICAgICAgICAgICBrZXkgPSBfT2JqZWN0JGVudHJpZXMkX2lbMF0sXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBfT2JqZWN0JGVudHJpZXMkX2lbMV07XG5cbiAgICAgICAgICAgIGlmIChpdGVtID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgIGl0ZW0uc3R5bGUuekluZGV4ID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjaGFuZ2VIb3Zlck9uRmxleENhcmRzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbmdlSG92ZXJPbkZsZXhDYXJkcygpIHtcbiAgICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHRoaXMuY2FyZHMpLFxuICAgICAgICAgICAgX3N0ZXA7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgICAgdmFyIGNhcmQgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICAgIHZhciBmcm9udCA9IGNhcmQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgYmFjayA9IGZyb250Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGZyb250LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2YXRlLWhvdmVyLTEnKTtcbiAgICAgICAgICAgIGJhY2suY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZhdGUtaG92ZXItMicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNoYW5nZU1haW5Db250YWluZXJIZWlnaHRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VNYWluQ29udGFpbmVySGVpZ2h0KCkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdhZGp1c3QtaGVpZ2h0Jyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm1vdmVTbWlsZXlGYWNlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1vdmVTbWlsZXlGYWNlcygpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhY2tlcikge1xuICAgICAgICAgIHRoaXMuZW1vamlUcnVlLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ21vdmUtaW4tcmlnaHQnKTtcbiAgICAgICAgICB0aGlzLmVtb2ppRmFsc2UuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnbW92ZS1pbi1sZWZ0Jyk7XG4gICAgICAgICAgdGhpcy5lbW9qaVRydWUuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnbW92ZS1vdXQtcmlnaHQnKTtcbiAgICAgICAgICB0aGlzLmVtb2ppRmFsc2UuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnbW92ZS1vdXQtbGVmdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZW1vamlUcnVlLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ21vdmUtb3V0LXJpZ2h0Jyk7XG4gICAgICAgICAgdGhpcy5lbW9qaUZhbHNlLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ21vdmUtb3V0LWxlZnQnKTtcbiAgICAgICAgICB0aGlzLmVtb2ppVHJ1ZS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdtb3ZlLWluLXJpZ2h0Jyk7XG4gICAgICAgICAgdGhpcy5lbW9qaUZhbHNlLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ21vdmUtaW4tbGVmdCcpO1xuICAgICAgICB9XG4gICAgICB9IC8vIEZsaXAgVHJhbnNpdGlvbiBDaGFuZ2VzIE9uIENvbnRyb2xsZXIgQnV0dG9uXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY29udHJvbGxlckJ1dHRvbk1vZGlmaWNhdGlvbnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb250cm9sbGVyQnV0dG9uTW9kaWZpY2F0aW9ucygpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRleHRDaGFuZ2UgPSBmdW5jdGlvbiB0ZXh0Q2hhbmdlKHRleHQpIHtcbiAgICAgICAgICBfdGhpczMuc2hvd0FsbENhcmRzLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGxhbmd1YWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJy9mci8nKSA/ICdmcicgOiAnZW4nO1xuXG4gICAgICAgICAgaWYgKF90aGlzMy50cmFja2VyKSB7XG4gICAgICAgICAgICBpZiAobGFuZ3VhZ2UgPT0gJ2VuJykge1xuICAgICAgICAgICAgICB0ZXh0Q2hhbmdlKCdMZXQgbWUgZ3Vlc3MhICZuYnNwOyAmIzEyODY0MDsnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRleHRDaGFuZ2UoJ0xhaXNzZXogbW9pIGRldmluZXIhICZuYnNwOyAmIzEyODY0MDsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxhbmd1YWdlID09ICdlbicpIHtcbiAgICAgICAgICAgICAgdGV4dENoYW5nZSgnSnVzdCBzaG93IGFsbCEgJm5ic3A7ICYjMTI4NjQwOycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGV4dENoYW5nZSgnVG91dCBtb250cmVyISAmbmJzcDsgJiMxMjg2NDA7Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgdGhpcy5zaG93QWxsQ2FyZHMuY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZS1pbi1sYXN0LW1vbWVudCcpO1xuICAgICAgfSAvLyBCYXNpYyBBbmltYXRpb24gXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0WkluZGV4VG9NaW5pbXVtQW5kUmVtb3ZlQW5pbWF0aW9uQ2xhc3NcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRaSW5kZXhUb01pbmltdW1BbmRSZW1vdmVBbmltYXRpb25DbGFzcyhtb3ZlZF9pdGVtKSB7XG4gICAgICAgIG1vdmVkX2l0ZW0uc3R5bGUuekluZGV4ID0gLTQ7XG4gICAgICAgIG1vdmVkX2l0ZW0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoLTMwZGVnKVwiO1xuICAgICAgICBtb3ZlZF9pdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZmxpcENhcmRJbk1pZGRsZU9mQW5pbWF0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZmxpcENhcmRJbk1pZGRsZU9mQW5pbWF0aW9uKGNhcmQpIHtcbiAgICAgICAgdmFyIGZyb250ID0gY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdmFyIGJhY2sgPSBmcm9udC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGZyb250LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2YXRlLWZsaXAtMScpO1xuICAgICAgICBiYWNrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2YXRlLWZsaXAtMicpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhbmltYXRlQ2FyZFRvRXhpdEFuZFJlRW50ZXJDb250YWluZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbmltYXRlQ2FyZFRvRXhpdEFuZFJlRW50ZXJDb250YWluZXIoY2FyZCkge1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcbiAgICAgICAgdmFyIG1vdmVkX2l0ZW0gPSB0aGlzLmNhcmRzLnNoaWZ0KCk7XG4gICAgICAgIHZhciByb3RhdGUgPSAwLFxuICAgICAgICAgICAgekluZGV4ID0gMDtcblxuICAgICAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHRoaXMuY2FyZHMpLFxuICAgICAgICAgICAgX3N0ZXAyO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgIHZhciBfY2FyZCA9IF9zdGVwMi52YWx1ZTtcbiAgICAgICAgICAgIF9jYXJkLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKFwiLmNvbmNhdChyb3RhdGUsIFwiZGVnKVwiKTtcbiAgICAgICAgICAgIF9jYXJkLnN0eWxlLnpJbmRleCA9IFwiXCIuY29uY2F0KHpJbmRleCk7XG4gICAgICAgICAgICByb3RhdGUgLT0gMTAsIHpJbmRleCAtPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMi5mKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2V0WkluZGV4VG9NaW5pbXVtQW5kUmVtb3ZlQW5pbWF0aW9uQ2xhc3MuYmluZCh0aGlzLCBtb3ZlZF9pdGVtKSwgNTAwMCk7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5mbGlwQ2FyZEluTWlkZGxlT2ZBbmltYXRpb24uYmluZCh0aGlzLCBtb3ZlZF9pdGVtKSwgMTAwMCk7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5mbGlwQ2FyZEluTWlkZGxlT2ZBbmltYXRpb24uYmluZCh0aGlzLCBtb3ZlZF9pdGVtKSwgMzUwMCk7XG4gICAgICAgIHRoaXMuY2FyZHMucHVzaChtb3ZlZF9pdGVtKTtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jYXJkc1swXTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2FyZEFuaW1hdGlvbnM7XG4gIH0oKTtcblxuICB2YXIgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZHNfX2NvbnRhaW5lcl9fY2VudGVyX19jYXJkJyk7XG4gIG5ldyBDYXJkQW5pbWF0aW9ucyhjYXJkcyk7XG59KTsiLCJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaW5jbHVkZXMuanNcIjtcbmltcG9ydCBHbGlkZSwgeyBCcmVha3BvaW50cywgQXV0b3BsYXkgfSBmcm9tICdAZ2xpZGVqcy9nbGlkZS9kaXN0L2dsaWRlLm1vZHVsYXIuZXNtJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoQ2Fyb3VzZWwpIHtcbiAgdmFyIGNhcm91c2VscyA9IFtdO1xuICBjYXJvdXNlbHMucHVzaCgnW2RhdGEtbW9kdWxlPUNhcm91c2VsXScpO1xuXG4gIHZhciBjaGVja191cmwgPSBmdW5jdGlvbiBjaGVja191cmwoc3RyKSB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKHN0cikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBpZiAoY2hlY2tfdXJsKCcvcHJvamVjdHMvJykgfHwgY2hlY2tfdXJsKCcvcHJvamV0cy8nKSkge1xuICAgIGNhcm91c2Vscy5wdXNoKCdbZGF0YS1jYXJvdXNlbD1DYXJvdXNlbF9iaXNdJyk7XG4gIH1cblxuICBmb3IgKHZhciBfaSA9IDAsIF9jYXJvdXNlbHMgPSBjYXJvdXNlbHM7IF9pIDwgX2Nhcm91c2Vscy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgaXRlbSA9IF9jYXJvdXNlbHNbX2ldO1xuICAgIG5ldyBHbGlkZShpdGVtLCB7XG4gICAgICB0eXBlOiAnY2Fyb3VzZWwnLFxuICAgICAgYXV0b3BsYXk6IDEwLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDEyMDAwLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuYzogJ2xpbmVhcicsXG4gICAgICBzdGFydEF0OiAwLFxuICAgICAgcGVyVmlldzogMixcbiAgICAgIGdhcDogNTAsXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICA3Njg6IHtcbiAgICAgICAgICBwZXJWaWV3OiAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KS5tb3VudCh7XG4gICAgICBCcmVha3BvaW50czogQnJlYWtwb2ludHMsXG4gICAgICBBdXRvcGxheTogQXV0b3BsYXlcbiAgICB9KTtcbiAgfVxufSk7IiwiaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5rZXlzLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5lbnRyaWVzLmpzXCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKENoYW5nZVRoZW1lKSB7XG4gIHZhciB0aGVtZSA9IFt7XG4gICAgXCItLW1haW4tZm9udFwiOiBcInJnYigzMywgMzMsIDMzKVwiLFxuICAgIFwiLS1tYWluLWJnXCI6IFwiI2ZmZlwiLFxuICAgIFwiLS1wcm9qZWN0LWJnXCI6IFwiI0YyRjJGMlwiLFxuICAgIFwiLS1kYXJrLWZvbnRcIjogXCIjNjY2NjY2XCIsXG4gICAgXCItLXNtYWxsLWZvbnRcIjogXCIjNjY2NjY2XCIsXG4gICAgXCItLXN1Yi1jb2xvci1kYXJrXCI6IFwicmdiYSgwLCAwLCAwLCAwLjcpXCIsXG4gICAgXCItLXN1Yi1jb2xvci1saWdodFwiOiBcIiNGMkYyRjJcIlxuICB9LCB7XG4gICAgXCItLW1haW4tZm9udFwiOiBcIiNmZmZcIixcbiAgICBcIi0tbWFpbi1iZ1wiOiBcInJnYigzMywgMzMsIDMzKVwiLFxuICAgIFwiLS1wcm9qZWN0LWJnXCI6IFwicmdiKDMzLCAzMywgMzMpXCIsXG4gICAgXCItLWRhcmstZm9udFwiOiBcInJnYigxODgsIDE4OCwgMTg4KVwiLFxuICAgIFwiLS1zbWFsbC1mb250XCI6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXCIsXG4gICAgXCItLXN1Yi1jb2xvci1kYXJrXCI6IFwicmdiKDQyLCA0MiwgNDIpXCIsXG4gICAgXCItLXN1Yi1jb2xvci1saWdodFwiOiBcInJnYig0MiwgNDIsIDQyKVwiXG4gIH1dO1xuXG4gIHZhciBUaGVtZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGhlbWUoY2hhbmdlQnV0dG9uKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGhlbWUpO1xuXG4gICAgICB0aGlzLmNoYW5nZUJ1dHRvbiA9IGNoYW5nZUJ1dHRvbjtcbiAgICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHRoaXMudGhlbWUgPSAnd2hpdGUnO1xuICAgICAgdGhpcy53aGl0ZV90aGVtZSA9ICdpbmxpbmUnO1xuICAgICAgdGhpcy5ibGFja190aGVtZSA9ICdub25lJztcbiAgICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gICAgICB0aGlzLmFkYXB0VGhlbWUoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGhlbWUsIFt7XG4gICAgICBrZXk6IFwiYWRhcHRUaGVtZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkYXB0VGhlbWUoKSB7XG4gICAgICAgIHZhciBjdXJyZW50X3RoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRfdGhlbWUgPT0gJ2JsYWNrJykge1xuICAgICAgICAgIHRoaXMubWFrZVRoZW1lQ2hhbmdlcygpO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcyAmJiBjdXJyZW50X3RoZW1lID09ICd3aGl0ZScpIHsvL1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xuICAgICAgICAgIHRoaXMubWFrZVRoZW1lQ2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImJpbmRFdmVudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMuY2hhbmdlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnbmF2aWdhdGlvbl9oYWNrJykpIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLm1ha2VUaGVtZUNoYW5nZXMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJtYWtlVGhlbWVDaGFuZ2VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbWFrZVRoZW1lQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy50aGVtZSA9IHRoaXMudGhlbWUgPT0gJ3doaXRlJyA/ICdibGFjaycgOiAnd2hpdGUnO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGlzLnRoZW1lKTtcbiAgICAgICAgdGhpcy5zd2FwQ3NzVmFycygpO1xuICAgICAgICB0aGlzLnN3YXBUaGVtZSgpO1xuICAgICAgICB0aGlzLnN3YXBJbWFnZXMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3dhcENzc1ZhcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzd2FwQ3NzVmFycygpIHtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBPYmplY3Qua2V5cyh0aGVtZVswXSk7XG4gICAgICAgIHZhciByZXBsYWNlbWVudCA9IE9iamVjdC5rZXlzKHRoZW1lWzFdKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaW5pdGlhbF92YWx1ZSA9IHRoZW1lWzBdW2N1cnJlbnRbaV1dO1xuICAgICAgICAgIHRoZW1lWzBdW2N1cnJlbnRbaV1dID0gdGhlbWVbMV1bcmVwbGFjZW1lbnRbaV1dO1xuICAgICAgICAgIHRoZW1lWzFdW2N1cnJlbnRbaV1dID0gaW5pdGlhbF92YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzd2FwVGhlbWVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzd2FwVGhlbWUoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoZW1lWzBdKS5mb3JFYWNoKGZ1bmN0aW9uIChrdl9wYWlyKSB7XG4gICAgICAgICAgX3RoaXMyLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoa3ZfcGFpclswXSwga3ZfcGFpclsxXSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLndoaXRlX3RoZW1lID0gdGhpcy53aGl0ZV90aGVtZSA9PSAnaW5saW5lJyA/ICdub25lJyA6ICdpbmxpbmUnO1xuICAgICAgICB0aGlzLmJsYWNrX3RoZW1lID0gdGhpcy5ibGFja190aGVtZSA9PSAnbm9uZScgPyAnaW5saW5lJyA6ICdub25lJztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3dhcEltYWdlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN3YXBJbWFnZXMoKSB7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGhlbWVfd2hpdGVcIiwgdGhpcy53aGl0ZV90aGVtZSk7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGhlbWVfYmxhY2tcIiwgdGhpcy5ibGFja190aGVtZSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRoZW1lO1xuICB9KCk7XG5cbiAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vZHVsZT1DaGFuZ2VUaGVtZV0nKTtcbiAgbmV3IFRoZW1lKGJ1dHRvbik7XG59KTsiLCJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qc1wiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKE1hZ25ldGljRWZmZWN0KSB7XG4gIHZhciBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmVldGluZ19fYm94LXJpZ2h0Jyk7XG4gIGJveGVzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgbWFnbmV0aWNFZmZlY3QgPSBmdW5jdGlvbiBtYWduZXRpY0VmZmVjdChlKSB7XG4gICAgICB2YXIgaW5uZXIgPSBlbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgICAgdmFyIHggPSBlLm9mZnNldFgsXG4gICAgICAgICAgeSA9IGUub2Zmc2V0WTtcbiAgICAgIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICB2YXIgbW92ZSA9IDE1O1xuICAgICAgdmFyIHhNb3ZlID0geCAvIHdpZHRoICogKG1vdmUgKiAyKSAtIG1vdmU7XG4gICAgICB2YXIgeU1vdmUgPSB5IC8gaGVpZ2h0ICogKG1vdmUgKiAyKSAtIG1vdmU7XG4gICAgICBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIi5jb25jYXQoeE1vdmUsIFwicHgsIFwiKS5jb25jYXQoeU1vdmUsIFwicHgpXCIpO1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnKSBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICB9O1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtYWduZXRpY0VmZmVjdCk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbWFnbmV0aWNFZmZlY3QpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1hZ25ldGljRWZmZWN0KTtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG1hZ25ldGljRWZmZWN0KTtcbiAgICB9O1xuICB9KTtcbn0pOyIsImltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qc1wiO1xuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChOYXZpZ2F0aW9uSW5kaWNhdG9yKSB7XG4gIGZ1bmN0aW9uIGFjdGl2YXRlTmF2aWdhdGlvbkluZGljYXRvcigpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2R1bGU9TmF2aWdhdGlvbkluZGljYXRvcl0nKTtcbiAgICBsaW5rcyA9IGxpbmtzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5cbiAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobGlua3MpLFxuICAgICAgICBfc3RlcDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICB2YXIgaXRlbSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZiA9PSBpdGVtLmZpcnN0Q2hpbGQuaHJlZikge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbl9fc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICB9XG4gIH1cblxuICBhY3RpdmF0ZU5hdmlnYXRpb25JbmRpY2F0b3IoKTtcbn0pOyIsImltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmNsdWRlcy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pbmNsdWRlcy5qc1wiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKFJlc3BvbnNpdmVOYXZpZ2F0aW9uKSB7XG4gIHZhciBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2R1bGU9UmVzcG9uc2l2ZU5hdmlnYXRpb25dJyk7XG4gIHZhciBjb250ZW50ID0gaGFtYnVyZ2VyLm5leHRFbGVtZW50U2libGluZztcbiAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICB9KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhdGUnKTtcblxuICAgIGlmICghKGUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoY29udGVudCkgfHwgZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoYW1idXJnZXIpKSkge1xuICAgICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgIHBsYXRlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHZhciBsYW5ndWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZ3VhZ2VzJyk7XG4gIHZhciBoYW1idXJnZXJfbGFuZ3VhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2hhbWJ1cmdlci1jb250ZW50X19sYW5ndWFnZXMnKTtcbiAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gIGZ1bmN0aW9uIG1vdmVMYW5ndWFnZXNUb0hhbWJ1cmdlcihtZWRpYXF1ZXJ5KSB7XG4gICAgaWYgKG1lZGlhcXVlcnkubWF0Y2hlcykge1xuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobGFuZ3VhZ2VzLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgIGhhbWJ1cmdlcl9sYW5ndWFnZXMuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJfbGFuZ3VhZ2VzLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgIGxhbmd1YWdlcy5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIG1lZGlhcXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2OHB4KVwiKTtcbiAgbW92ZUxhbmd1YWdlc1RvSGFtYnVyZ2VyKG1lZGlhcXVlcnkpO1xuICBtZWRpYXF1ZXJ5LmFkZExpc3RlbmVyKG1vdmVMYW5ndWFnZXNUb0hhbWJ1cmdlcik7XG59KTsiLCJmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCB7IFNjcm9sbFRvUGx1Z2luIH0gZnJvbSBcImdzYXAvU2Nyb2xsVG9QbHVnaW5cIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlciwgU2Nyb2xsVG9QbHVnaW4pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChTY3JvbGxBbmltYXRpb24pIHtcbiAgLy8gR3JlZXRpbmcgYW5kIEVtYWlsIHBhcmFncmFwaHNcbiAgdmFyIGFuaW1hdGlvbl90YXJnZXRzID0gW1wiLmdyZWV0aW5nX19ib3gtbGVmdFwiLCBcIi5lbWFpbF9fbGVmdC1ib3hcIl07XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfYW5pbWF0aW9uX3RhcmdldHMgPSBhbmltYXRpb25fdGFyZ2V0czsgX2kgPCBfYW5pbWF0aW9uX3RhcmdldHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBfYW5pbWF0aW9uX3RhcmdldHNbX2ldO1xuICAgIGdzYXAudGltZWxpbmUoe1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBpdGVtLFxuICAgICAgICBzdGFydDogJ3RvcCAxMDAlJyxcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogJ3BsYXkgbm9uZSBub25lIG5vbmUnXG4gICAgICB9XG4gICAgfSkuZnJvbVRvKGl0ZW0sIHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB5OiAtMjAsXG4gICAgICB4OiAtMjBcbiAgICB9LCB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgeTogMCxcbiAgICAgIHg6IDAsXG4gICAgICBkdXJhdGlvbjogMVxuICAgIH0pO1xuICB9IC8vIElwYWRcblxuXG4gIGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6ICcuaXBhZF9faXBhZCcsXG4gICAgICBzdGFydDogJ3RvcCAxMDAlJyxcbiAgICAgIHRvZ2dsZUFjdGlvbnM6ICdwbGF5IG5vbmUgbm9uZSBub25lJ1xuICAgIH1cbiAgfSkuZnJvbVRvKCcuaXBhZF9faXBhZCcsIHtcbiAgICBvcGFjaXR5OiAwXG4gIH0sIHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIGR1cmF0aW9uOiAyXG4gIH0pO1xuICB2YXIgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlwaG9uZV9faW1hZ2UtYm94Jyk7XG5cbiAgZnVuY3Rpb24gZ2V0RGlzdGFuY2VUb0V4aXQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50ID09IGltYWdlc1swXSA/IDIwMCA6IC0yMDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDbGFzcyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIFwiLlwiLmNvbmNhdChlbGVtZW50LmNsYXNzTGlzdFsxXSk7XG4gIH0gLy8gSXBob25lc1xuXG5cbiAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgZ3NhcC50aW1lbGluZSh7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IGdldENsYXNzKGltYWdlKSxcbiAgICAgICAgc3RhcnQ6ICd0b3AgNzUlJyxcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogJ3BsYXkgcmVzZXQgcGxheSByZXNldCdcbiAgICAgIH1cbiAgICB9KS5mcm9tVG8oZ2V0Q2xhc3MoaW1hZ2UpLCB7XG4gICAgICB4OiBnZXREaXN0YW5jZVRvRXhpdChpbWFnZSksXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSwge1xuICAgICAgeDogMCxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBkdXJhdGlvbjogMlxuICAgIH0pO1xuICB9KTsgLy8gQ2FyZHMgXG5cbiAgdmFyIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRzX19jb250YWluZXJfX2NlbnRlcl9fY2FyZCcpO1xuICB2YXIgbXlkZWxheSA9IDA7XG5cbiAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGNhcmRzKSxcbiAgICAgIF9zdGVwO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgIHZhciBfaXRlbSA9IF9zdGVwLnZhbHVlO1xuICAgICAgZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICB0cmlnZ2VyOiBfaXRlbSxcbiAgICAgICAgICBzdGFydDogJ3RvcCAxMDAlJyxcbiAgICAgICAgICB0b2dnbGVBY3Rpb25zOiAncGxheSBub25lIG5vbmUgbm9uZSdcbiAgICAgICAgfVxuICAgICAgfSkuZnJvbVRvKF9pdGVtLCB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHk6IC0xMDBcbiAgICAgIH0sIHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgZGVsYXk6IG15ZGVsYXksXG4gICAgICAgIGNsZWFyUHJvcHM6IFwic2NhbGVcIlxuICAgICAgfSk7XG4gICAgICBteWRlbGF5ICs9IDAuNTtcbiAgICB9IC8vIFByb2plY3QgRGV0YWlsXG5cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBfaXRlcmF0b3IuZigpO1xuICB9XG5cbiAgZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogXCIucHJvamVjdF9fY29udGFpbmVyX19yaWdodFwiLFxuICAgICAgc3RhcnQ6ICd0b3AgNzUlJyxcbiAgICAgIHRvZ2dsZUFjdGlvbnM6ICdwbGF5IHJlc2V0IHBsYXkgcmVzZXQnXG4gICAgfVxuICB9KS5mcm9tVG8oXCIucHJvamVjdF9fY29udGFpbmVyX19yaWdodFwiLCB7XG4gICAgeDogMjAwLFxuICAgIG9wYWNpdHk6IDBcbiAgfSwge1xuICAgIHg6IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICBkdXJhdGlvbjogMlxuICB9KTsgLy8gR29hbFxuXG4gIHZhciBnb2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYWxfX2xlZnQnKTtcbiAgZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogZ29hbCxcbiAgICAgIHN0YXJ0OiAndG9wIDEwMCUnLFxuICAgICAgdG9nZ2xlQWN0aW9uczogJ3BsYXkgbm9uZSBub25lIG5vbmUnXG4gICAgfVxuICB9KS5mcm9tVG8oZ29hbCwge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgeTogLTIwLFxuICAgIHg6IC0yMFxuICB9LCB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB5OiAwLFxuICAgIHg6IDAsXG4gICAgZHVyYXRpb246IDFcbiAgfSk7IC8vIEZyYW1pbmcgY2FyZHNcblxuICB2YXIgZnJhbWluZ19jYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mcmFtaW5nX19jYXJkc19fY2FyZCwgLmluc2lnaHRzX190YWJsZV9fcmlnaHRfX3BvaW50Jyk7XG4gIHZhciBkZWxheSA9IDA7XG4gIHZhciBjb3VudGVyID0gMDtcblxuICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGZyYW1pbmdfY2FyZHMpLFxuICAgICAgX3N0ZXAyO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcbiAgICAgIHZhciBfaXRlbTIgPSBfc3RlcDIudmFsdWU7XG4gICAgICBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgIHRyaWdnZXI6IF9pdGVtMixcbiAgICAgICAgICBzdGFydDogJ3RvcCAxMDAlJyxcbiAgICAgICAgICB0b2dnbGVBY3Rpb25zOiAncGxheSBub25lIG5vbmUgbm9uZSdcbiAgICAgICAgfVxuICAgICAgfSkuZnJvbVRvKF9pdGVtMiwge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB5OiAtMTAwXG4gICAgICB9LCB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgY2xlYXJQcm9wczogXCJzY2FsZVwiXG4gICAgICB9KTtcbiAgICAgIGNvdW50ZXIgKz0gMTtcblxuICAgICAgaWYgKGNvdW50ZXIgPT0gNCkge1xuICAgICAgICBkZWxheSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGRlbGF5ICs9IDAuNTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvcjIuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvcjIuZigpO1xuICB9XG59KTsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoU2Nyb2xsVXApIHtcbiAgdmFyIEVsZXZhdG9yID0gZnVuY3Rpb24gRWxldmF0b3Iob3B0aW9ucykge1xuICAgIFwidXNlIHN0cmljdFwiOyAvLyBFbGVtZW50c1xuXG4gICAgdmFyIGJvZHkgPSBudWxsOyAvLyBTY3JvbGwgdmFyc1xuXG4gICAgdmFyIGFuaW1hdGlvbiA9IG51bGw7XG4gICAgdmFyIGR1cmF0aW9uID0gbnVsbDsgLy8gbXNcblxuICAgIHZhciBjdXN0b21EdXJhdGlvbiA9IGZhbHNlO1xuICAgIHZhciBzdGFydFRpbWUgPSBudWxsO1xuICAgIHZhciBzdGFydFBvc2l0aW9uID0gbnVsbDtcbiAgICB2YXIgZW5kUG9zaXRpb24gPSAwO1xuICAgIHZhciB0YXJnZXRFbGVtZW50ID0gbnVsbDtcbiAgICB2YXIgdmVydGljYWxQYWRkaW5nID0gbnVsbDtcbiAgICB2YXIgZWxldmF0aW5nID0gZmFsc2U7XG4gICAgdmFyIHN0YXJ0Q2FsbGJhY2s7XG4gICAgdmFyIG1haW5BdWRpbztcbiAgICB2YXIgZW5kQXVkaW87XG4gICAgdmFyIGVuZENhbGxiYWNrO1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAvKipcbiAgICAgKiBVdGlsc1xuICAgICAqL1xuICAgIC8vIFRoYW5rcyBNciBQZW5uZXIgLSBodHRwOi8vcm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG5cbiAgICBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQsIGIsIGMsIGQpIHtcbiAgICAgIHQgLz0gZCAvIDI7XG4gICAgICBpZiAodCA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcbiAgICAgIHQtLTtcbiAgICAgIHJldHVybiAtYyAvIDIgKiAodCAqICh0IC0gMikgLSAxKSArIGI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0ZW5kUGFyYW1ldGVycyhvcHRpb25zLCBkZWZhdWx0cykge1xuICAgICAgZm9yICh2YXIgb3B0aW9uIGluIGRlZmF1bHRzKSB7XG4gICAgICAgIHZhciB0ID0gb3B0aW9uc1tvcHRpb25dID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdGlvbiAhPT0gXCJmdW5jdGlvblwiO1xuXG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gZGVmYXVsdHNbb3B0aW9uXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWZXJ0aWNhbE9mZnNldChlbGVtZW50KSB7XG4gICAgICB2YXIgdmVydGljYWxPZmZzZXQgPSAwO1xuXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICB2ZXJ0aWNhbE9mZnNldCArPSBlbGVtZW50Lm9mZnNldFRvcCB8fCAwO1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJ0aWNhbFBhZGRpbmcpIHtcbiAgICAgICAgdmVydGljYWxPZmZzZXQgPSB2ZXJ0aWNhbE9mZnNldCAtIHZlcnRpY2FsUGFkZGluZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZlcnRpY2FsT2Zmc2V0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYWluXG4gICAgICovXG4gICAgLy8gVGltZSBpcyBwYXNzZWQgdGhyb3VnaCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHdoYXQgYSB3b3JsZCFcblxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZUxvb3AodGltZSkge1xuICAgICAgaWYgKCFzdGFydFRpbWUpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRpbWVTb0ZhciA9IHRpbWUgLSBzdGFydFRpbWU7XG4gICAgICB2YXIgZWFzZWRQb3NpdGlvbiA9IGVhc2VJbk91dFF1YWQodGltZVNvRmFyLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb24sIGR1cmF0aW9uKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBlYXNlZFBvc2l0aW9uKTtcblxuICAgICAgaWYgKHRpbWVTb0ZhciA8IGR1cmF0aW9uKSB7XG4gICAgICAgIGFuaW1hdGlvbiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlTG9vcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25GaW5pc2hlZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxldmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChlbGV2YXRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbGV2YXRpbmcgPSB0cnVlO1xuICAgICAgc3RhcnRQb3NpdGlvbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gICAgICB1cGRhdGVFbmRQb3NpdGlvbigpOyAvLyBObyBjdXN0b20gZHVyYXRpb24gc2V0LCBzbyB3ZSB0cmF2ZWwgYXQgcGl4ZWxzIHBlciBtaWxsaXNlY29uZC4gKDAuNzVweCBwZXIgbXMpXG5cbiAgICAgIGlmICghY3VzdG9tRHVyYXRpb24pIHtcbiAgICAgICAgZHVyYXRpb24gPSBNYXRoLmFicyhlbmRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb24pICogMS41O1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZUxvb3ApOyAvLyBTdGFydCBtdXNpYyFcblxuICAgICAgaWYgKG1haW5BdWRpbykge1xuICAgICAgICBtYWluQXVkaW8ucGxheSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhcnRDYWxsYmFjaykge1xuICAgICAgICBzdGFydENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGJyb3dzZXJNZWV0c1JlcXVpcmVtZW50cygpIHtcbiAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIHdpbmRvdy5BdWRpbyAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldFBvc2l0aW9ucygpIHtcbiAgICAgIHN0YXJ0VGltZSA9IG51bGw7XG4gICAgICBzdGFydFBvc2l0aW9uID0gbnVsbDtcbiAgICAgIGVsZXZhdGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUVuZFBvc2l0aW9uKCkge1xuICAgICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgZW5kUG9zaXRpb24gPSBnZXRWZXJ0aWNhbE9mZnNldCh0YXJnZXRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRpb25GaW5pc2hlZCgpIHtcbiAgICAgIHJlc2V0UG9zaXRpb25zKCk7IC8vIFN0b3AgbXVzaWMhXG5cbiAgICAgIGlmIChtYWluQXVkaW8pIHtcbiAgICAgICAgbWFpbkF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIG1haW5BdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRBdWRpbykge1xuICAgICAgICBlbmRBdWRpby5wbGF5KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRDYWxsYmFjaykge1xuICAgICAgICBlbmRDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uV2luZG93Qmx1cigpIHtcbiAgICAgIC8vIElmIGFuaW1hdGluZywgZ28gc3RyYWlnaHQgdG8gdGhlIHRvcC4gQW5kIHBsYXkgbm8gbW9yZSBtdXNpYy5cbiAgICAgIGlmIChlbGV2YXRpbmcpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgcmVzZXRQb3NpdGlvbnMoKTtcblxuICAgICAgICBpZiAobWFpbkF1ZGlvKSB7XG4gICAgICAgICAgbWFpbkF1ZGlvLnBhdXNlKCk7XG4gICAgICAgICAgbWFpbkF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUVuZFBvc2l0aW9uKCk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBlbmRQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZEVsZXZhdGVUb0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGF0LmVsZXZhdGUsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoXCJvbmNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB1cGRhdGVFbmRQb3NpdGlvbigpO1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBlbmRQb3NpdGlvbjtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IGVuZFBvc2l0aW9uO1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgZW5kUG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KF9vcHRpb25zKSB7XG4gICAgICAvLyBUYWtlIHRoZSBzdGFpcnMgaW5zdGVhZFxuICAgICAgaWYgKCFicm93c2VyTWVldHNSZXF1aXJlbWVudHMoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIEJpbmQgdG8gZWxlbWVudCBjbGljayBldmVudC5cblxuXG4gICAgICBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgZHVyYXRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgbWFpbkF1ZGlvOiBmYWxzZSxcbiAgICAgICAgZW5kQXVkaW86IGZhbHNlLFxuICAgICAgICBwcmVsb2FkQXVkaW86IHRydWUsXG4gICAgICAgIGxvb3BBdWRpbzogdHJ1ZSxcbiAgICAgICAgc3RhcnRDYWxsYmFjazogbnVsbCxcbiAgICAgICAgZW5kQ2FsbGJhY2s6IG51bGxcbiAgICAgIH07XG4gICAgICBfb3B0aW9ucyA9IGV4dGVuZFBhcmFtZXRlcnMoX29wdGlvbnMsIGRlZmF1bHRzKTtcblxuICAgICAgaWYgKF9vcHRpb25zLmVsZW1lbnQpIHtcbiAgICAgICAgYmluZEVsZXZhdGVUb0VsZW1lbnQoX29wdGlvbnMuZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfb3B0aW9ucy5kdXJhdGlvbikge1xuICAgICAgICBjdXN0b21EdXJhdGlvbiA9IHRydWU7XG4gICAgICAgIGR1cmF0aW9uID0gX29wdGlvbnMuZHVyYXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChfb3B0aW9ucy50YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSBfb3B0aW9ucy50YXJnZXRFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoX29wdGlvbnMudmVydGljYWxQYWRkaW5nKSB7XG4gICAgICAgIHZlcnRpY2FsUGFkZGluZyA9IF9vcHRpb25zLnZlcnRpY2FsUGFkZGluZztcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIG9uV2luZG93Qmx1ciwgZmFsc2UpO1xuXG4gICAgICBpZiAoX29wdGlvbnMubWFpbkF1ZGlvKSB7XG4gICAgICAgIG1haW5BdWRpbyA9IG5ldyBBdWRpbyhfb3B0aW9ucy5tYWluQXVkaW8pO1xuICAgICAgICBtYWluQXVkaW8uc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBfb3B0aW9ucy5wcmVsb2FkQXVkaW8pO1xuICAgICAgICBtYWluQXVkaW8uc2V0QXR0cmlidXRlKFwibG9vcFwiLCBfb3B0aW9ucy5sb29wQXVkaW8pO1xuICAgICAgfVxuXG4gICAgICBpZiAoX29wdGlvbnMuZW5kQXVkaW8pIHtcbiAgICAgICAgZW5kQXVkaW8gPSBuZXcgQXVkaW8oX29wdGlvbnMuZW5kQXVkaW8pO1xuICAgICAgICBlbmRBdWRpby5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwidHJ1ZVwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9vcHRpb25zLmVuZENhbGxiYWNrKSB7XG4gICAgICAgIGVuZENhbGxiYWNrID0gX29wdGlvbnMuZW5kQ2FsbGJhY2s7XG4gICAgICB9XG5cbiAgICAgIGlmIChfb3B0aW9ucy5zdGFydENhbGxiYWNrKSB7XG4gICAgICAgIHN0YXJ0Q2FsbGJhY2sgPSBfb3B0aW9ucy5zdGFydENhbGxiYWNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluaXQob3B0aW9ucyk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEVsZXZhdG9yO1xuICB9XG5cbiAgdmFyIHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVsZXZhdG9yLWJ1dHRvbicpO1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlRWxldmF0b3IoKSB7XG4gICAgdmFyIGVsZXZhdG9yID0gbmV3IEVsZXZhdG9yKHtcbiAgICAgIGVsZW1lbnQ6IHN0YXJ0LFxuICAgICAgZHVyYXRpb246IDEwMDBcbiAgICB9KTtcbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsZXZhdG9yLmVsZXZhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlRWxldmF0b3IoKTtcbn0pOyIsImltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoU21vb3RoU2Nyb2xsKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJykuZm9yRWFjaChmdW5jdGlvbiAoYW5jaG9yKSB7XG4gICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pOyIsImltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLm1hdGNoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qc1wiO1xuXG4vKlxuICogQHByZXNlcnZlIGRhdGFzZXQgcG9seWZpbGwgZm9yIElFIDwgMTEuIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvZGF0YXNldCBhbmQgaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9ZGF0YXNldFxuICpcbiAqIEBhdXRob3IgU2hpcnRsZXNzS2lyayBjb3B5cmlnaHQgMjAxNVxuICogQGxpY2Vuc2UgV1RGUEwgKGh0dHA6Ly93d3cud3RmcGwubmV0L3R4dC9jb3B5aW5nKVxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qIGdsb2JhbCBkZWZpbmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbi8qIGpzbGludCBub21lbjogdHJ1ZSwgcmVnZXhwOiB0cnVlLCB1bnBhcmFtOiB0cnVlICovXG4oZnVuY3Rpb24gZGF0YXNldE1vZHVsZShnbG9iYWwsIGRlZmluaXRpb24pIHtcbiAgLy8gbm9uLWV4cG9ydGluZyBtb2R1bGUgbWFnaWMgZGFuY2VcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBhbWQgPSAnYW1kJyxcbiAgICAgIGV4cG9ydHMgPSAnZXhwb3J0cyc7IC8vIGtlZXBzIHRoZSBtZXRob2QgbmFtZXMgZm9yIENvbW1vbkpTIC8gQU1EIGZyb20gYmVpbmcgY29tcGlsZWQgdG8gc2luZ2xlIGNoYXJhY3RlciB2YXJpYWJsZVxuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVthbWRdKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uIGRlZmluZXIoKSB7XG4gICAgICByZXR1cm4gZGVmaW5pdGlvbihnbG9iYWwpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdmdW5jdGlvbicgJiYgbW9kdWxlW2V4cG9ydHNdKSB7XG4gICAgbW9kdWxlW2V4cG9ydHNdID0gZGVmaW5pdGlvbihnbG9iYWwpO1xuICB9IGVsc2Uge1xuICAgIGRlZmluaXRpb24oZ2xvYmFsKTtcbiAgfVxufSkod2luZG93LCBmdW5jdGlvbiBkYXRhc2V0UG9seWZpbGwoZ2xvYmFsKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgYXR0cmlidXRlLFxuICAgICAgYXR0cmlidXRlcyxcbiAgICAgIGNvdW50ZXIsXG4gICAgICBkYXNoLFxuICAgICAgZGF0YVJlZ0V4LFxuICAgICAgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQsXG4gICAgICBoYXNFdmVudExpc3RlbmVyLFxuICAgICAgbGVuZ3RoLFxuICAgICAgbWF0Y2gsXG4gICAgICBtdXRhdGlvblN1cHBvcnQsXG4gICAgICB0ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnXycpLFxuICAgICAgRE9NQXR0ck1vZGlmaWVkID0gJ0RPTUF0dHJNb2RpZmllZCc7XG5cbiAgZnVuY3Rpb24gY2xlYXJEYXRhc2V0KGV2ZW50KSB7XG4gICAgZGVsZXRlIGV2ZW50LnRhcmdldC5fZGF0YXNldENhY2hlO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGRhc2gsIGZ1bmN0aW9uIChtLCBsZXR0ZXIpIHtcbiAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERhdGFzZXQoKSB7XG4gICAgdmFyIGRhdGFzZXQgPSB7fTtcbiAgICBhdHRyaWJ1dGVzID0gdGhpcy5hdHRyaWJ1dGVzO1xuXG4gICAgZm9yIChjb3VudGVyID0gMCwgbGVuZ3RoID0gYXR0cmlidXRlcy5sZW5ndGg7IGNvdW50ZXIgPCBsZW5ndGg7IGNvdW50ZXIgKz0gMSkge1xuICAgICAgYXR0cmlidXRlID0gYXR0cmlidXRlc1tjb3VudGVyXTtcbiAgICAgIG1hdGNoID0gYXR0cmlidXRlLm5hbWUubWF0Y2goZGF0YVJlZ0V4KTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGRhdGFzZXRbdG9DYW1lbENhc2UobWF0Y2hbMV0pXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YXNldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG11dGF0aW9uKCkge1xuICAgIGlmIChoYXNFdmVudExpc3RlbmVyKSB7XG4gICAgICB0ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoRE9NQXR0ck1vZGlmaWVkLCBtdXRhdGlvbiwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXN0LmRldGFjaEV2ZW50KCdvbicgKyBET01BdHRyTW9kaWZpZWQsIG11dGF0aW9uKTtcbiAgICB9XG5cbiAgICBtdXRhdGlvblN1cHBvcnQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRlc3QuZGF0YXNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG5cblxuICBkYXNoID0gL1xcLShbYS16XSkvaWc7XG4gIGRhdGFSZWdFeCA9IC9eZGF0YVxcLSguKykvO1xuICBoYXNFdmVudExpc3RlbmVyID0gISFkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyO1xuICBtdXRhdGlvblN1cHBvcnQgPSBmYWxzZTtcblxuICBpZiAoaGFzRXZlbnRMaXN0ZW5lcikge1xuICAgIHRlc3QuYWRkRXZlbnRMaXN0ZW5lcihET01BdHRyTW9kaWZpZWQsIG11dGF0aW9uLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgdGVzdC5hdHRhY2hFdmVudCgnb24nICsgRE9NQXR0ck1vZGlmaWVkLCBtdXRhdGlvbik7XG4gIH0gLy8gdHJpZ2dlciBldmVudCAoaWYgc3VwcG9ydGVkKVxuXG5cbiAgdGVzdC5zZXRBdHRyaWJ1dGUoJ2ZvbycsICdiYXInKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbC5FbGVtZW50LnByb3RvdHlwZSwgJ2RhdGFzZXQnLCB7XG4gICAgZ2V0OiBtdXRhdGlvblN1cHBvcnQgPyBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2RhdGFzZXRDYWNoZSkge1xuICAgICAgICB0aGlzLl9kYXRhc2V0Q2FjaGUgPSBnZXREYXRhc2V0LmNhbGwodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9kYXRhc2V0Q2FjaGU7XG4gICAgfSA6IGdldERhdGFzZXRcbiAgfSk7XG5cbiAgaWYgKG11dGF0aW9uU3VwcG9ydCAmJiBoYXNFdmVudExpc3RlbmVyKSB7XG4gICAgLy8gPCBJRTkgc3VwcG9ydHMgbmVpdGhlclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoRE9NQXR0ck1vZGlmaWVkLCBjbGVhckRhdGFzZXQsIGZhbHNlKTtcbiAgfVxufSk7IiwiaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzXCI7XG5cbmZ1bmN0aW9uIHJlcXVpcmVBbGwocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpO1xufVxuXG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi4vaWNvbnMnLCB0cnVlLCAvXFwuc3ZnJC8pKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWFycm93LWJvdHRvbS11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICAgIHVybDogXCJpY29ucy9cIiArIFwic3ByaXRlLnN2ZyNpY29uLWFycm93LWJvdHRvbS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWFycm93LXJpZ2h0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgdXJsOiBcImljb25zL1wiICsgXCJzcHJpdGUuc3ZnI2ljb24tYXJyb3ctcmlnaHQtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1jYXJldC1yaWdodC11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICAgIHVybDogXCJpY29ucy9cIiArIFwic3ByaXRlLnN2ZyNpY29uLWNhcmV0LXJpZ2h0LXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tY2xvc2UtdXNhZ2VcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICB1cmw6IFwiaWNvbnMvXCIgKyBcInNwcml0ZS5zdmcjaWNvbi1jbG9zZS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWVuLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA2NDAgNDgwXCIsXG4gICAgICB1cmw6IFwiaWNvbnMvXCIgKyBcInNwcml0ZS5zdmcjaWNvbi1lbi11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWZyLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCA2NDAgNDgwXCIsXG4gICAgICB1cmw6IFwiaWNvbnMvXCIgKyBcInNwcml0ZS5zdmcjaWNvbi1mci11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLW1lbnUtdXNhZ2VcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICB1cmw6IFwiaWNvbnMvXCIgKyBcInNwcml0ZS5zdmcjaWNvbi1tZW51LXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcnJvdy1ib3R0b20uc3ZnXCI6IFwiLi9zcmMvaWNvbnMvYXJyb3ctYm90dG9tLnN2Z1wiLFxuXHRcIi4vYXJyb3ctcmlnaHQuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnXCIsXG5cdFwiLi9jYXJldC1yaWdodC5zdmdcIjogXCIuL3NyYy9pY29ucy9jYXJldC1yaWdodC5zdmdcIixcblx0XCIuL2Nsb3NlLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2Nsb3NlLnN2Z1wiLFxuXHRcIi4vZW4uc3ZnXCI6IFwiLi9zcmMvaWNvbnMvZW4uc3ZnXCIsXG5cdFwiLi9mci5zdmdcIjogXCIuL3NyYy9pY29ucy9mci5zdmdcIixcblx0XCIuL21lbnUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbWVudS5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaWNvbnMgc3luYyByZWN1cnNpdmUgXFxcXC5zdmckXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuXCI6IFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiLFxuXHRcIi4vXCI6IFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiLFxuXHRcIi4vaW5kZXhcIjogXCIuL3NyYy9zY3JpcHRzL2luZGV4LmpzXCIsXG5cdFwiLi9pbmRleC5qc1wiOiBcIi4vc3JjL3NjcmlwdHMvaW5kZXguanNcIixcblx0XCIuL21vZHVsZXMvQ2FwdGNoYVwiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9DYXB0Y2hhLmpzXCIsXG5cdFwiLi9tb2R1bGVzL0NhcHRjaGEuanNcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2FwdGNoYS5qc1wiLFxuXHRcIi4vbW9kdWxlcy9DYXJkc1wiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9DYXJkcy5qc1wiLFxuXHRcIi4vbW9kdWxlcy9DYXJkcy5qc1wiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9DYXJkcy5qc1wiLFxuXHRcIi4vbW9kdWxlcy9DYXJvdXNlbFwiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9DYXJvdXNlbC5qc1wiLFxuXHRcIi4vbW9kdWxlcy9DYXJvdXNlbC5qc1wiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9DYXJvdXNlbC5qc1wiLFxuXHRcIi4vbW9kdWxlcy9DaGFuZ2VUaGVtZVwiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9DaGFuZ2VUaGVtZS5qc1wiLFxuXHRcIi4vbW9kdWxlcy9DaGFuZ2VUaGVtZS5qc1wiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9DaGFuZ2VUaGVtZS5qc1wiLFxuXHRcIi4vbW9kdWxlcy9NYWduZXRpY0VmZmVjdFwiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9NYWduZXRpY0VmZmVjdC5qc1wiLFxuXHRcIi4vbW9kdWxlcy9NYWduZXRpY0VmZmVjdC5qc1wiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9NYWduZXRpY0VmZmVjdC5qc1wiLFxuXHRcIi4vbW9kdWxlcy9OYXZpZ2F0aW9uSW5kaWNhdG9yXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL05hdmlnYXRpb25JbmRpY2F0b3IuanNcIixcblx0XCIuL21vZHVsZXMvTmF2aWdhdGlvbkluZGljYXRvci5qc1wiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9OYXZpZ2F0aW9uSW5kaWNhdG9yLmpzXCIsXG5cdFwiLi9tb2R1bGVzL1Jlc3BvbnNpdmVOYXZpZ2F0aW9uXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Jlc3BvbnNpdmVOYXZpZ2F0aW9uLmpzXCIsXG5cdFwiLi9tb2R1bGVzL1Jlc3BvbnNpdmVOYXZpZ2F0aW9uLmpzXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Jlc3BvbnNpdmVOYXZpZ2F0aW9uLmpzXCIsXG5cdFwiLi9tb2R1bGVzL1Njcm9sbEFuaW1hdGlvblwiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9TY3JvbGxBbmltYXRpb24uanNcIixcblx0XCIuL21vZHVsZXMvU2Nyb2xsQW5pbWF0aW9uLmpzXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Njcm9sbEFuaW1hdGlvbi5qc1wiLFxuXHRcIi4vbW9kdWxlcy9TY3JvbGxVcFwiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9TY3JvbGxVcC5qc1wiLFxuXHRcIi4vbW9kdWxlcy9TY3JvbGxVcC5qc1wiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9TY3JvbGxVcC5qc1wiLFxuXHRcIi4vbW9kdWxlcy9TbW9vdGhTY3JvbGxcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvU21vb3RoU2Nyb2xsLmpzXCIsXG5cdFwiLi9tb2R1bGVzL1Ntb290aFNjcm9sbC5qc1wiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9TbW9vdGhTY3JvbGwuanNcIixcblx0XCIuL3BvbHlmaWxsL2RhdGFzZXRcIjogXCIuL3NyYy9zY3JpcHRzL3BvbHlmaWxsL2RhdGFzZXQuanNcIixcblx0XCIuL3BvbHlmaWxsL2RhdGFzZXQuanNcIjogXCIuL3NyYy9zY3JpcHRzL3BvbHlmaWxsL2RhdGFzZXQuanNcIixcblx0XCIuL3Bvc3QtYnVpbGRcIjogXCIuL3NyYy9zY3JpcHRzL3Bvc3QtYnVpbGQuanNcIixcblx0XCIuL3Bvc3QtYnVpbGQuanNcIjogXCIuL3NyYy9zY3JpcHRzL3Bvc3QtYnVpbGQuanNcIlxufTtcblxuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXG5cdFx0dmFyIGlkID0gbWFwW3JlcV07XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gT2JqZWN0LmtleXMobWFwKTsgfTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3JjL3NjcmlwdHMgbGF6eSByZWN1cnNpdmUgXi4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4vLyBTaW5jZSBhbGwgcmVmZXJlbmNlZCBjaHVua3MgYXJlIGFscmVhZHkgaW5jbHVkZWRcbi8vIGluIHRoaXMgZmlsZSwgdGhpcyBmdW5jdGlvbiBpcyBlbXB0eSBoZXJlLlxuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24oKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrX3N0YXJ0ZXJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja19zdGFydGVyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiKTsgfSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9DYXB0Y2hhLmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0NhcmRzLmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0Nhcm91c2VsLmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0NoYW5nZVRoZW1lLmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL01hZ25ldGljRWZmZWN0LmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL05hdmlnYXRpb25JbmRpY2F0b3IuanNcIik7IH0pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvUmVzcG9uc2l2ZU5hdmlnYXRpb24uanNcIik7IH0pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvU2Nyb2xsQW5pbWF0aW9uLmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Njcm9sbFVwLmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Ntb290aFNjcm9sbC5qc1wiKTsgfSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvcG9seWZpbGwvZGF0YXNldC5qc1wiKTsgfSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9wb3N0LWJ1aWxkLmpzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==