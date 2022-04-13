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
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
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
    elements = gsap__WEBPACK_IMPORTED_MODULE_13__.gsap.utils.toArray(elements);
    vars = vars || {};
    var tl = gsap__WEBPACK_IMPORTED_MODULE_13__.gsap.timeline({
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
          if (_this3.tracker) {
            textChange('Let me guess! &nbsp; &#128640;');
          } else {
            textChange('Just show all! &nbsp; &#128640;');
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
/* harmony import */ var _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide/dist/glide.modular.esm */ "./node_modules/@glidejs/glide/dist/glide.modular.esm.js");
 // eslint-disable-next-line no-unused-vars

/* harmony default export */ __webpack_exports__["default"] = (function (Carousel) {
  var first_carousel = '[data-module=Carousel]';
  var second_carousel = '[data-carousel=Carousel_bis]';

  for (var _i = 0, _arr = [first_carousel, second_carousel]; _i < _arr.length; _i++) {
    var item = _arr[_i];
    new _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.default(item, {
      type: 'carousel',
      autoplay: 10,
      animationDuration: 12000,
      animationTimingFunc: 'linear',
      startAt: 0,
      perView: 2,
      breakpoints: {
        768: {
          perView: 1
        }
      },
      gap: 8
    }).mount({
      Breakpoints: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.Breakpoints,
      Autoplay: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__.Autoplay
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
      this.checkUserTheme();
      this.adaptTheme();
    }

    _createClass(Theme, [{
      key: "adaptTheme",
      value: function adaptTheme() {
        var current_theme = localStorage.getItem('theme');

        if (current_theme == 'black') {
          this.makeThemeChanges();
        }
      }
    }, {
      key: "checkUserTheme",
      value: function checkUserTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
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
      toggleActions: 'play reset play reset'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNWQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUVoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0NhcmRzLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9DaGFuZ2VUaGVtZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL01hZ25ldGljRWZmZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzL21vZHVsZXMvTmF2aWdhdGlvbkluZGljYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Jlc3BvbnNpdmVOYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzL21vZHVsZXMvU2Nyb2xsQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzL21vZHVsZXMvU2Nyb2xsVXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9TbW9vdGhTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvcG9seWZpbGwvZGF0YXNldC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9wb3N0LWJ1aWxkLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvaWNvbnMvYXJyb3ctYm90dG9tLnN2ZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9pY29ucy9jYXJldC1yaWdodC5zdmciLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2ljb25zL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvaWNvbnMvbWVudS5zdmciLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2ljb25zfHN5bmN8Ly5zdmckIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzfGxhenl8L14uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucHJvbWlzZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgbGF6eVNpemVzIGZyb20gJ2xhenlzaXplcyc7XG5pbXBvcnQgJ2xhenlzaXplcy9wbHVnaW5zL25hdGl2ZS1sb2FkaW5nL2xzLm5hdGl2ZS1sb2FkaW5nJztcbmltcG9ydCAnbGF6eXNpemVzL3BsdWdpbnMvb2JqZWN0LWZpdC9scy5vYmplY3QtZml0JztcbmltcG9ydCAnbGF6eXNpemVzL3BsdWdpbnMvdW52ZWlsaG9va3MvbHMudW52ZWlsaG9va3MnO1xuaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnO1xuaW1wb3J0ICdAYmFiZWwvcGx1Z2luLXN5bnRheC1keW5hbWljLWltcG9ydCc7XG5pbXBvcnQgKiBhcyBjb25kaXRpb25lciBmcm9tICdjb25kaXRpb25lci1jb3JlL2NvbmRpdGlvbmVyLWNvcmUubWluJztcbmltcG9ydCAnLi9wb3N0LWJ1aWxkJztcbmltcG9ydCAnLi9wb2x5ZmlsbC9kYXRhc2V0JztcbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSAnanMnO1xuY29uZGl0aW9uZXIuYWRkUGx1Z2luKHtcbiAgLy8gdGhlIHBsdWdpbiBcIm1vbml0b3JcIiBob29rXG4gIC8vIHVzZSBpbiBodG1sIDogPGRpdiBkYXRhLW1vZHVsZT1cImNvbXBvbmVudFwiIGRhdGEtY29udGV4dD1cIkB2aXNpYmxlIHRydWVcIj48L2Rpdj5cbiAgbW9uaXRvcjoge1xuICAgIC8vIHRoZSBuYW1lIG9mIG91ciBtb25pdG9yLCBub3QgcHJlZml4ZWQgd2l0aCBcIkBcIlxuICAgIG5hbWU6ICd2aXNpYmxlJyxcbiAgICAvLyB0aGUgbW9uaXRvciBmYWN0b3J5IG1ldGhvZCwgdGhpcyB3aWxsIGNyZWF0ZSBvdXIgbW9uaXRvclxuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKGNvbnRleHQsIGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIGN1cnJlbnQgbWF0Y2ggc3RhdGVcbiAgICAgICAgbWF0Y2hlczogZmFsc2UsXG4gICAgICAgIC8vIGNhbGxlZCBieSBjb25kaXRpb25lciB0byBzdGFydCBsaXN0ZW5pbmcgZm9yIGNoYW5nZXNcbiAgICAgICAgYWRkTGlzdGVuZXI6IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGNoYW5nZSkge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgbWF0Y2hlcyBzdGF0ZVxuICAgICAgICAgICAgX3RoaXMubWF0Y2hlcyA9IGVudHJpZXMucG9wKCkuaXNJbnRlcnNlY3RpbmcgPT09IGNvbnRleHQ7IC8vIGluZm9ybSBjb25kaXRpb25lciBvZiB0aGUgbmV3IHN0YXRlXG5cbiAgICAgICAgICAgIGNoYW5nZSgpO1xuICAgICAgICAgIH0pLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuICAvLyBjb252ZXJ0cyBtb2R1bGUgYWxpYXNlcyB0byBwYXRoc1xuICBtb2R1bGVTZXROYW1lOiBmdW5jdGlvbiBtb2R1bGVTZXROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gXCIuL21vZHVsZXMvXCIuY29uY2F0KG5hbWUsIFwiLmpzXCIpO1xuICB9LFxuICAvLyBnZXQgdGhlIG1vZHVsZSBjb25zdHJ1Y3RvclxuICBtb2R1bGVHZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gbW9kdWxlR2V0Q29uc3RydWN0b3IobW9kdWxlKSB7XG4gICAgcmV0dXJuIG1vZHVsZS5kZWZhdWx0O1xuICB9LFxuICAvLyBvdmVycmlkZSB0aGUgaW1wb3J0ICh0aGlzIG1ha2VzIHdlYnBhY2sgYnVuZGxlIGFsbCB0aGUgZHluYW1pY2FsbHkgaW5jbHVkZWQgZmlsZXMgYXMgd2VsbClcbiAgLy8gaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9hcGkvbW9kdWxlLW1ldGhvZHMvI2ltcG9ydC1cbiAgLy8gLSBzZXQgdG8gXCJlYWdlclwiIHRvIGNyZWF0ZSBhIHNpbmdsZSBjaHVuayBmb3IgYWxsIG1vZHVsZXNcbiAgLy8gLSBzZXQgdG8gXCJsYXp5XCIgdG8gY3JlYXRlIGEgc2VwYXJhdGUgY2h1bmsgZm9yIGVhY2ggbW9kdWxlXG4gIG1vZHVsZUltcG9ydDogZnVuY3Rpb24gbW9kdWxlSW1wb3J0KG5hbWUpIHtcbiAgICByZXR1cm4gaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tNb2RlOiBcImxhenlcIiAqL1xuICAgIFwiXCIuY29uY2F0KG5hbWUpKTtcbiAgfVxufSk7XG5jb25kaXRpb25lci5oeWRyYXRlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4vKipcclxuICogTGF6eVNpemVzIGNvbmZpZ3VyYXRpb25cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2FGYXJrYXMvbGF6eXNpemVzLyNqcy1hcGktLS1vcHRpb25zXHJcbiAqL1xuXG5sYXp5U2l6ZXMuY2ZnLm5hdGl2ZUxvYWRpbmcgPSB7XG4gIHNldExvYWRpbmdBdHRyaWJ1dGU6IGZhbHNlXG59OyIsImZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdIHx8IG9bXCJAQGl0ZXJhdG9yXCJdOyBpZiAoIWl0KSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IHRocm93IF9lMjsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gaXQuY2FsbChvKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMykgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTM7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdC5yZXR1cm4gIT0gbnVsbCkgaXQucmV0dXJuKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmVudHJpZXMuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qc1wiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKE5hdmlnYXRpb25JbmRpY2F0b3IpIHtcbiAgZnVuY3Rpb24gZmxpcChlbGVtZW50cywgY2hhbmdlRnVuYywgdmFycykge1xuICAgIGVsZW1lbnRzID0gZ3NhcC51dGlscy50b0FycmF5KGVsZW1lbnRzKTtcbiAgICB2YXJzID0gdmFycyB8fCB7fTtcbiAgICB2YXIgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIG9uQ29tcGxldGU6IHZhcnMub25Db21wbGV0ZSxcbiAgICAgIGRlbGF5OiB2YXJzLmRlbGF5IHx8IDBcbiAgICB9KSxcbiAgICAgICAgYm91bmRzID0gZWxlbWVudHMubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH0pLFxuICAgICAgICBjb3B5ID0ge30sXG4gICAgICAgIHA7XG4gICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLl9mbGlwICYmIGVsLl9mbGlwLnByb2dyZXNzKDEpO1xuICAgICAgZWwuX2ZsaXAgPSB0bDtcbiAgICB9KTtcbiAgICBjaGFuZ2VGdW5jKCk7XG5cbiAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgcCAhPT0gXCJvbkNvbXBsZXRlXCIgJiYgcCAhPT0gXCJkZWxheVwiICYmIChjb3B5W3BdID0gdmFyc1twXSk7XG4gICAgfVxuXG4gICAgY29weS54ID0gZnVuY3Rpb24gKGksIGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBcIis9XCIgKyAoYm91bmRzW2ldLmxlZnQgLSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpO1xuICAgIH07XG5cbiAgICBjb3B5LnkgPSBmdW5jdGlvbiAoaSwgZWxlbWVudCkge1xuICAgICAgcmV0dXJuIFwiKz1cIiArIChib3VuZHNbaV0udG9wIC0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGwuZnJvbShlbGVtZW50cywgY29weSk7XG4gIH1cblxuICB2YXIgQ2FyZEFuaW1hdGlvbnMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhcmRBbmltYXRpb25zKGNhcmRzKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FyZEFuaW1hdGlvbnMpO1xuXG4gICAgICB0aGlzLmNhcmRzID0gX3RvQ29uc3VtYWJsZUFycmF5KGNhcmRzKTtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY2FyZHNbMF07XG4gICAgICB0aGlzLmVtb2ppVHJ1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fY29udGFpbmVyX19yaWdodCcpO1xuICAgICAgdGhpcy5lbW9qaUZhbHNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19jb250YWluZXJfX2xlZnQnKTtcbiAgICAgIHRoaXMuc2hvd0FsbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLW91dHJvX19zaG93LWFsbCcpO1xuICAgICAgdGhpcy5mbGlwcGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19mbGlwcGVkJyk7XG4gICAgICB0aGlzLnN0YW5kYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19jb250YWluZXJfX2NlbnRlcicpO1xuICAgICAgdGhpcy50cmFja2VyID0gZmFsc2U7XG4gICAgICB0aGlzLmluZGV4Q291bnRlciA9IC0xO1xuICAgICAgdGhpcy5pbmRleFN0YXRlID0ge307XG4gICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2FyZEFuaW1hdGlvbnMsIFt7XG4gICAgICBrZXk6IFwiYmluZEV2ZW50c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYXJyID0gW3RoaXMuZW1vamlUcnVlLCB0aGlzLmVtb2ppRmFsc2VdOyBfaSA8IF9hcnIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgdmFyIGVtb2ppID0gX2FycltfaV07XG4gICAgICAgICAgZW1vamkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRlQ2FyZFRvRXhpdEFuZFJlRW50ZXJDb250YWluZXIoX3RoaXMuY3VycmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dBbGxDYXJkcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIV90aGlzLnRyYWNrZXIpIHtcbiAgICAgICAgICAgIF90aGlzLnRyYWNrZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBfdGhpcy5tb3ZlU21pbGV5RmFjZXMoKTtcblxuICAgICAgICAgICAgX3RoaXMuY2FyZHNDb250YWluZXJUb0ZsaXBwZWRDb250YWluZXIoMTAwMCk7XG5cbiAgICAgICAgICAgIF90aGlzLmNoYW5nZUhvdmVyT25GbGV4Q2FyZHMoKTtcblxuICAgICAgICAgICAgX3RoaXMuY2hhbmdlVHJhbnNpdGlvblByb3BlcnR5QW5kUmVtb3ZlUm90YXRpb24oKTtcblxuICAgICAgICAgICAgX3RoaXMuY29udHJvbGxlckJ1dHRvbk1vZGlmaWNhdGlvbnMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMudHJhY2tlciA9IGZhbHNlO1xuXG4gICAgICAgICAgICBfdGhpcy5jYXJkc0NvbnRhaW5lclRvRmxpcHBlZENvbnRhaW5lcigpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlVHJhbnNpdGlvblByb3BlcnR5QW5kUmVtb3ZlUm90YXRpb24odHJ1ZSk7XG5cbiAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlSG92ZXJPbkZsZXhDYXJkcygpO1xuXG4gICAgICAgICAgICAgIF90aGlzLm1vdmVTbWlsZXlGYWNlcygpO1xuXG4gICAgICAgICAgICAgIF90aGlzLmNvbnRyb2xsZXJCdXR0b25Nb2RpZmljYXRpb25zKCk7XG4gICAgICAgICAgICB9LCAxNDAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBGbGlwIFRyYW5zaXRpb25cbiAgICAgIC8vIEZsaXAgVHJhbnNpdGlvbiBNYWluIEZ1bmN0aW9uc1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImNhcmRzQ29udGFpbmVyVG9GbGlwcGVkQ29udGFpbmVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2FyZHNDb250YWluZXJUb0ZsaXBwZWRDb250YWluZXIodGltZXIpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLmNhcmRzLmZvckVhY2goZnVuY3Rpb24gKGNhcmQpIHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbm90cmFuc2l0aW9uJyk7XG4gICAgICAgICAgICBmbGlwKFtfdGhpczIuY2FyZHNdLCBfdGhpczIuc3dhcFBvc2l0aW9uLmJpbmQoX3RoaXMyLCBjYXJkKSwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogMS4zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIF90aGlzMi5jaGFuZ2VNYWluQ29udGFpbmVySGVpZ2h0KCk7XG4gICAgICAgIH0sIHRpbWVyKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3dhcFBvc2l0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3dhcFBvc2l0aW9uKGNhcmQpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMudHJhY2tlciA9PT0gdHJ1ZSA/IHRoaXMuZmxpcHBlZCA6IHRoaXMuc3RhbmRhcmQ7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LnRvZ2dsZSgncHJlcGFyZS1jYXJkJyk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmluY3JlbWVudEluZGV4U3RhdGUoY2FyZCkpO1xuICAgICAgfSAvLyBGbGlwIFRyYW5zaXRpb24gVXRpbHNcblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjaGFuZ2VUcmFuc2l0aW9uUHJvcGVydHlBbmRSZW1vdmVSb3RhdGlvblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5nZVRyYW5zaXRpb25Qcm9wZXJ0eUFuZFJlbW92ZVJvdGF0aW9uKCkge1xuICAgICAgICB2YXIgcmVzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuY2FyZHMuZm9yRWFjaChmdW5jdGlvbiAoY2FyZCkge1xuICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnbm90cmFuc2l0aW9uJyk7XG5cbiAgICAgICAgICBpZiAocmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoLVwiLmNvbmNhdChjb3VudGVyLCBcImRlZylcIik7XG4gICAgICAgICAgICBjb3VudGVyICs9IDEwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYXJkLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImluY3JlbWVudEluZGV4U3RhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmNyZW1lbnRJbmRleFN0YXRlKGl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMudHJhY2tlcikge1xuICAgICAgICAgIHRoaXMuaW5kZXhTdGF0ZVt0aGlzLmluZGV4Q291bnRlcl0gPSBpdGVtO1xuICAgICAgICAgIHRoaXMuaW5kZXhDb3VudGVyIC09IDE7XG4gICAgICAgICAgaXRlbS5zdHlsZS56SW5kZXggPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9PYmplY3QkZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuaW5kZXhTdGF0ZSk7IF9pMiA8IF9PYmplY3QkZW50cmllcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgICB2YXIgX09iamVjdCRlbnRyaWVzJF9pID0gX3NsaWNlZFRvQXJyYXkoX09iamVjdCRlbnRyaWVzW19pMl0sIDIpLFxuICAgICAgICAgICAgICAgIGtleSA9IF9PYmplY3QkZW50cmllcyRfaVswXSxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IF9PYmplY3QkZW50cmllcyRfaVsxXTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgaXRlbS5zdHlsZS56SW5kZXggPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNoYW5nZUhvdmVyT25GbGV4Q2FyZHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VIb3Zlck9uRmxleENhcmRzKCkge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodGhpcy5jYXJkcyksXG4gICAgICAgICAgICBfc3RlcDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgICB2YXIgY2FyZCA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGZyb250ID0gY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIHZhciBiYWNrID0gZnJvbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZhdGUtaG92ZXItMScpO1xuICAgICAgICAgICAgYmFjay5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmF0ZS1ob3Zlci0yJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2hhbmdlTWFpbkNvbnRhaW5lckhlaWdodFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5nZU1haW5Db250YWluZXJIZWlnaHQoKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2FkanVzdC1oZWlnaHQnKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwibW92ZVNtaWxleUZhY2VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZVNtaWxleUZhY2VzKCkge1xuICAgICAgICBpZiAodGhpcy50cmFja2VyKSB7XG4gICAgICAgICAgdGhpcy5lbW9qaVRydWUuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnbW92ZS1pbi1yaWdodCcpO1xuICAgICAgICAgIHRoaXMuZW1vamlGYWxzZS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZlLWluLWxlZnQnKTtcbiAgICAgICAgICB0aGlzLmVtb2ppVHJ1ZS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdtb3ZlLW91dC1yaWdodCcpO1xuICAgICAgICAgIHRoaXMuZW1vamlGYWxzZS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdtb3ZlLW91dC1sZWZ0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbW9qaVRydWUuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnbW92ZS1vdXQtcmlnaHQnKTtcbiAgICAgICAgICB0aGlzLmVtb2ppRmFsc2UuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnbW92ZS1vdXQtbGVmdCcpO1xuICAgICAgICAgIHRoaXMuZW1vamlUcnVlLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ21vdmUtaW4tcmlnaHQnKTtcbiAgICAgICAgICB0aGlzLmVtb2ppRmFsc2UuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnbW92ZS1pbi1sZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gRmxpcCBUcmFuc2l0aW9uIENoYW5nZXMgT24gQ29udHJvbGxlciBCdXR0b25cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb250cm9sbGVyQnV0dG9uTW9kaWZpY2F0aW9uc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRyb2xsZXJCdXR0b25Nb2RpZmljYXRpb25zKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgdGV4dENoYW5nZSA9IGZ1bmN0aW9uIHRleHRDaGFuZ2UodGV4dCkge1xuICAgICAgICAgIF90aGlzMy5zaG93QWxsQ2FyZHMuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMzLnRyYWNrZXIpIHtcbiAgICAgICAgICAgIHRleHRDaGFuZ2UoJ0xldCBtZSBndWVzcyEgJm5ic3A7ICYjMTI4NjQwOycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0Q2hhbmdlKCdKdXN0IHNob3cgYWxsISAmbmJzcDsgJiMxMjg2NDA7Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgdGhpcy5zaG93QWxsQ2FyZHMuY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZS1pbi1sYXN0LW1vbWVudCcpO1xuICAgICAgfSAvLyBCYXNpYyBBbmltYXRpb24gXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0WkluZGV4VG9NaW5pbXVtQW5kUmVtb3ZlQW5pbWF0aW9uQ2xhc3NcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRaSW5kZXhUb01pbmltdW1BbmRSZW1vdmVBbmltYXRpb25DbGFzcyhtb3ZlZF9pdGVtKSB7XG4gICAgICAgIG1vdmVkX2l0ZW0uc3R5bGUuekluZGV4ID0gLTQ7XG4gICAgICAgIG1vdmVkX2l0ZW0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoLTMwZGVnKVwiO1xuICAgICAgICBtb3ZlZF9pdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZmxpcENhcmRJbk1pZGRsZU9mQW5pbWF0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZmxpcENhcmRJbk1pZGRsZU9mQW5pbWF0aW9uKGNhcmQpIHtcbiAgICAgICAgdmFyIGZyb250ID0gY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdmFyIGJhY2sgPSBmcm9udC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGZyb250LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2YXRlLWZsaXAtMScpO1xuICAgICAgICBiYWNrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2YXRlLWZsaXAtMicpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhbmltYXRlQ2FyZFRvRXhpdEFuZFJlRW50ZXJDb250YWluZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbmltYXRlQ2FyZFRvRXhpdEFuZFJlRW50ZXJDb250YWluZXIoY2FyZCkge1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcbiAgICAgICAgdmFyIG1vdmVkX2l0ZW0gPSB0aGlzLmNhcmRzLnNoaWZ0KCk7XG4gICAgICAgIHZhciByb3RhdGUgPSAwLFxuICAgICAgICAgICAgekluZGV4ID0gMDtcblxuICAgICAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHRoaXMuY2FyZHMpLFxuICAgICAgICAgICAgX3N0ZXAyO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgIHZhciBfY2FyZCA9IF9zdGVwMi52YWx1ZTtcbiAgICAgICAgICAgIF9jYXJkLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKFwiLmNvbmNhdChyb3RhdGUsIFwiZGVnKVwiKTtcbiAgICAgICAgICAgIF9jYXJkLnN0eWxlLnpJbmRleCA9IFwiXCIuY29uY2F0KHpJbmRleCk7XG4gICAgICAgICAgICByb3RhdGUgLT0gMTAsIHpJbmRleCAtPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMi5mKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2V0WkluZGV4VG9NaW5pbXVtQW5kUmVtb3ZlQW5pbWF0aW9uQ2xhc3MuYmluZCh0aGlzLCBtb3ZlZF9pdGVtKSwgNTAwMCk7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5mbGlwQ2FyZEluTWlkZGxlT2ZBbmltYXRpb24uYmluZCh0aGlzLCBtb3ZlZF9pdGVtKSwgMTAwMCk7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5mbGlwQ2FyZEluTWlkZGxlT2ZBbmltYXRpb24uYmluZCh0aGlzLCBtb3ZlZF9pdGVtKSwgMzUwMCk7XG4gICAgICAgIHRoaXMuY2FyZHMucHVzaChtb3ZlZF9pdGVtKTtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jYXJkc1swXTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2FyZEFuaW1hdGlvbnM7XG4gIH0oKTtcblxuICB2YXIgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZHNfX2NvbnRhaW5lcl9fY2VudGVyX19jYXJkJyk7XG4gIG5ldyBDYXJkQW5pbWF0aW9ucyhjYXJkcyk7XG59KTsiLCJpbXBvcnQgR2xpZGUsIHsgQnJlYWtwb2ludHMsIEF1dG9wbGF5IH0gZnJvbSAnQGdsaWRlanMvZ2xpZGUvZGlzdC9nbGlkZS5tb2R1bGFyLmVzbSc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKENhcm91c2VsKSB7XG4gIHZhciBmaXJzdF9jYXJvdXNlbCA9ICdbZGF0YS1tb2R1bGU9Q2Fyb3VzZWxdJztcbiAgdmFyIHNlY29uZF9jYXJvdXNlbCA9ICdbZGF0YS1jYXJvdXNlbD1DYXJvdXNlbF9iaXNdJztcblxuICBmb3IgKHZhciBfaSA9IDAsIF9hcnIgPSBbZmlyc3RfY2Fyb3VzZWwsIHNlY29uZF9jYXJvdXNlbF07IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgaXRlbSA9IF9hcnJbX2ldO1xuICAgIG5ldyBHbGlkZShpdGVtLCB7XG4gICAgICB0eXBlOiAnY2Fyb3VzZWwnLFxuICAgICAgYXV0b3BsYXk6IDEwLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDEyMDAwLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuYzogJ2xpbmVhcicsXG4gICAgICBzdGFydEF0OiAwLFxuICAgICAgcGVyVmlldzogMixcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDc2ODoge1xuICAgICAgICAgIHBlclZpZXc6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdhcDogOFxuICAgIH0pLm1vdW50KHtcbiAgICAgIEJyZWFrcG9pbnRzOiBCcmVha3BvaW50cyxcbiAgICAgIEF1dG9wbGF5OiBBdXRvcGxheVxuICAgIH0pO1xuICB9XG59KTsiLCJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmtleXMuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmVudHJpZXMuanNcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoQ2hhbmdlVGhlbWUpIHtcbiAgdmFyIHRoZW1lID0gW3tcbiAgICBcIi0tbWFpbi1mb250XCI6IFwicmdiKDMzLCAzMywgMzMpXCIsXG4gICAgXCItLW1haW4tYmdcIjogXCIjZmZmXCIsXG4gICAgXCItLXByb2plY3QtYmdcIjogXCIjRjJGMkYyXCIsXG4gICAgXCItLWRhcmstZm9udFwiOiBcIiM2NjY2NjZcIixcbiAgICBcIi0tc21hbGwtZm9udFwiOiBcIiM2NjY2NjZcIixcbiAgICBcIi0tc3ViLWNvbG9yLWRhcmtcIjogXCJyZ2JhKDAsIDAsIDAsIDAuNylcIixcbiAgICBcIi0tc3ViLWNvbG9yLWxpZ2h0XCI6IFwiI0YyRjJGMlwiXG4gIH0sIHtcbiAgICBcIi0tbWFpbi1mb250XCI6IFwiI2ZmZlwiLFxuICAgIFwiLS1tYWluLWJnXCI6IFwicmdiKDMzLCAzMywgMzMpXCIsXG4gICAgXCItLXByb2plY3QtYmdcIjogXCJyZ2IoMzMsIDMzLCAzMylcIixcbiAgICBcIi0tZGFyay1mb250XCI6IFwicmdiKDE4OCwgMTg4LCAxODgpXCIsXG4gICAgXCItLXNtYWxsLWZvbnRcIjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIixcbiAgICBcIi0tc3ViLWNvbG9yLWRhcmtcIjogXCJyZ2IoNDIsIDQyLCA0MilcIixcbiAgICBcIi0tc3ViLWNvbG9yLWxpZ2h0XCI6IFwicmdiKDQyLCA0MiwgNDIpXCJcbiAgfV07XG5cbiAgdmFyIFRoZW1lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaGVtZShjaGFuZ2VCdXR0b24pIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaGVtZSk7XG5cbiAgICAgIHRoaXMuY2hhbmdlQnV0dG9uID0gY2hhbmdlQnV0dG9uO1xuICAgICAgdGhpcy5yb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgdGhpcy50aGVtZSA9ICd3aGl0ZSc7XG4gICAgICB0aGlzLndoaXRlX3RoZW1lID0gJ2lubGluZSc7XG4gICAgICB0aGlzLmJsYWNrX3RoZW1lID0gJ25vbmUnO1xuICAgICAgdGhpcy5iaW5kRXZlbnQoKTtcbiAgICAgIHRoaXMuY2hlY2tVc2VyVGhlbWUoKTtcbiAgICAgIHRoaXMuYWRhcHRUaGVtZSgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUaGVtZSwgW3tcbiAgICAgIGtleTogXCJhZGFwdFRoZW1lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRhcHRUaGVtZSgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRfdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcblxuICAgICAgICBpZiAoY3VycmVudF90aGVtZSA9PSAnYmxhY2snKSB7XG4gICAgICAgICAgdGhpcy5tYWtlVGhlbWVDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2hlY2tVc2VyVGhlbWVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja1VzZXJUaGVtZSgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xuICAgICAgICAgIHRoaXMubWFrZVRoZW1lQ2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImJpbmRFdmVudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMuY2hhbmdlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnbmF2aWdhdGlvbl9oYWNrJykpIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLm1ha2VUaGVtZUNoYW5nZXMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJtYWtlVGhlbWVDaGFuZ2VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbWFrZVRoZW1lQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy50aGVtZSA9IHRoaXMudGhlbWUgPT0gJ3doaXRlJyA/ICdibGFjaycgOiAnd2hpdGUnO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0aGlzLnRoZW1lKTtcbiAgICAgICAgdGhpcy5zd2FwQ3NzVmFycygpO1xuICAgICAgICB0aGlzLnN3YXBUaGVtZSgpO1xuICAgICAgICB0aGlzLnN3YXBJbWFnZXMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3dhcENzc1ZhcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzd2FwQ3NzVmFycygpIHtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBPYmplY3Qua2V5cyh0aGVtZVswXSk7XG4gICAgICAgIHZhciByZXBsYWNlbWVudCA9IE9iamVjdC5rZXlzKHRoZW1lWzFdKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaW5pdGlhbF92YWx1ZSA9IHRoZW1lWzBdW2N1cnJlbnRbaV1dO1xuICAgICAgICAgIHRoZW1lWzBdW2N1cnJlbnRbaV1dID0gdGhlbWVbMV1bcmVwbGFjZW1lbnRbaV1dO1xuICAgICAgICAgIHRoZW1lWzFdW2N1cnJlbnRbaV1dID0gaW5pdGlhbF92YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzd2FwVGhlbWVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzd2FwVGhlbWUoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoZW1lWzBdKS5mb3JFYWNoKGZ1bmN0aW9uIChrdl9wYWlyKSB7XG4gICAgICAgICAgX3RoaXMyLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoa3ZfcGFpclswXSwga3ZfcGFpclsxXSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLndoaXRlX3RoZW1lID0gdGhpcy53aGl0ZV90aGVtZSA9PSAnaW5saW5lJyA/ICdub25lJyA6ICdpbmxpbmUnO1xuICAgICAgICB0aGlzLmJsYWNrX3RoZW1lID0gdGhpcy5ibGFja190aGVtZSA9PSAnbm9uZScgPyAnaW5saW5lJyA6ICdub25lJztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3dhcEltYWdlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN3YXBJbWFnZXMoKSB7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGhlbWVfd2hpdGVcIiwgdGhpcy53aGl0ZV90aGVtZSk7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGhlbWVfYmxhY2tcIiwgdGhpcy5ibGFja190aGVtZSk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRoZW1lO1xuICB9KCk7XG5cbiAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vZHVsZT1DaGFuZ2VUaGVtZV0nKTtcbiAgbmV3IFRoZW1lKGJ1dHRvbik7XG59KTsiLCJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qc1wiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKE1hZ25ldGljRWZmZWN0KSB7XG4gIHZhciBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmVldGluZ19fYm94LXJpZ2h0Jyk7XG4gIGJveGVzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgbWFnbmV0aWNFZmZlY3QgPSBmdW5jdGlvbiBtYWduZXRpY0VmZmVjdChlKSB7XG4gICAgICB2YXIgaW5uZXIgPSBlbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgICAgdmFyIHggPSBlLm9mZnNldFgsXG4gICAgICAgICAgeSA9IGUub2Zmc2V0WTtcbiAgICAgIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICB2YXIgbW92ZSA9IDE1O1xuICAgICAgdmFyIHhNb3ZlID0geCAvIHdpZHRoICogKG1vdmUgKiAyKSAtIG1vdmU7XG4gICAgICB2YXIgeU1vdmUgPSB5IC8gaGVpZ2h0ICogKG1vdmUgKiAyKSAtIG1vdmU7XG4gICAgICBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIi5jb25jYXQoeE1vdmUsIFwicHgsIFwiKS5jb25jYXQoeU1vdmUsIFwicHgpXCIpO1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlbGVhdmUnKSBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICB9O1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtYWduZXRpY0VmZmVjdCk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbWFnbmV0aWNFZmZlY3QpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1hZ25ldGljRWZmZWN0KTtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG1hZ25ldGljRWZmZWN0KTtcbiAgICB9O1xuICB9KTtcbn0pOyIsImltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qc1wiO1xuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChOYXZpZ2F0aW9uSW5kaWNhdG9yKSB7XG4gIGZ1bmN0aW9uIGFjdGl2YXRlTmF2aWdhdGlvbkluZGljYXRvcigpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2R1bGU9TmF2aWdhdGlvbkluZGljYXRvcl0nKTtcbiAgICBsaW5rcyA9IGxpbmtzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5cbiAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobGlua3MpLFxuICAgICAgICBfc3RlcDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICB2YXIgaXRlbSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZiA9PSBpdGVtLmZpcnN0Q2hpbGQuaHJlZikge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbl9fc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICB9XG4gIH1cblxuICBhY3RpdmF0ZU5hdmlnYXRpb25JbmRpY2F0b3IoKTtcbn0pOyIsImltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmNsdWRlcy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pbmNsdWRlcy5qc1wiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKFJlc3BvbnNpdmVOYXZpZ2F0aW9uKSB7XG4gIHZhciBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2R1bGU9UmVzcG9uc2l2ZU5hdmlnYXRpb25dJyk7XG4gIHZhciBjb250ZW50ID0gaGFtYnVyZ2VyLm5leHRFbGVtZW50U2libGluZztcbiAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICB9KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhdGUnKTtcblxuICAgIGlmICghKGUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoY29udGVudCkgfHwgZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoYW1idXJnZXIpKSkge1xuICAgICAgaWYgKGNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgIHBsYXRlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTsiLCJmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0LnJldHVybiAhPSBudWxsKSBpdC5yZXR1cm4oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCB7IFNjcm9sbFRvUGx1Z2luIH0gZnJvbSBcImdzYXAvU2Nyb2xsVG9QbHVnaW5cIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlciwgU2Nyb2xsVG9QbHVnaW4pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChTY3JvbGxBbmltYXRpb24pIHtcbiAgLy8gR3JlZXRpbmcgYW5kIEVtYWlsIHBhcmFncmFwaHNcbiAgdmFyIGFuaW1hdGlvbl90YXJnZXRzID0gW1wiLmdyZWV0aW5nX19ib3gtbGVmdFwiLCBcIi5lbWFpbF9fbGVmdC1ib3hcIl07XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfYW5pbWF0aW9uX3RhcmdldHMgPSBhbmltYXRpb25fdGFyZ2V0czsgX2kgPCBfYW5pbWF0aW9uX3RhcmdldHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBfYW5pbWF0aW9uX3RhcmdldHNbX2ldO1xuICAgIGdzYXAudGltZWxpbmUoe1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBpdGVtLFxuICAgICAgICBzdGFydDogJ3RvcCAxMDAlJyxcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogJ3BsYXkgbm9uZSBub25lIG5vbmUnXG4gICAgICB9XG4gICAgfSkuZnJvbVRvKGl0ZW0sIHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB5OiAtMjAsXG4gICAgICB4OiAtMjBcbiAgICB9LCB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgeTogMCxcbiAgICAgIHg6IDAsXG4gICAgICBkdXJhdGlvbjogMVxuICAgIH0pO1xuICB9IC8vIElwYWRcblxuXG4gIGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6ICcuaXBhZF9faXBhZCcsXG4gICAgICBzdGFydDogJ3RvcCAxMDAlJyxcbiAgICAgIHRvZ2dsZUFjdGlvbnM6ICdwbGF5IHJlc2V0IHBsYXkgcmVzZXQnXG4gICAgfVxuICB9KS5mcm9tVG8oJy5pcGFkX19pcGFkJywge1xuICAgIG9wYWNpdHk6IDBcbiAgfSwge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgZHVyYXRpb246IDJcbiAgfSk7XG4gIHZhciBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXBob25lX19pbWFnZS1ib3gnKTtcblxuICBmdW5jdGlvbiBnZXREaXN0YW5jZVRvRXhpdChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPT0gaW1hZ2VzWzBdID8gMjAwIDogLTIwMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENsYXNzKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gXCIuXCIuY29uY2F0KGVsZW1lbnQuY2xhc3NMaXN0WzFdKTtcbiAgfSAvLyBJcGhvbmVzXG5cblxuICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogZ2V0Q2xhc3MoaW1hZ2UpLFxuICAgICAgICBzdGFydDogJ3RvcCA3NSUnLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOiAncGxheSByZXNldCBwbGF5IHJlc2V0J1xuICAgICAgfVxuICAgIH0pLmZyb21UbyhnZXRDbGFzcyhpbWFnZSksIHtcbiAgICAgIHg6IGdldERpc3RhbmNlVG9FeGl0KGltYWdlKSxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9LCB7XG4gICAgICB4OiAwLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGR1cmF0aW9uOiAyXG4gICAgfSk7XG4gIH0pOyAvLyBDYXJkcyBcblxuICB2YXIgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZHNfX2NvbnRhaW5lcl9fY2VudGVyX19jYXJkJyk7XG4gIHZhciBteWRlbGF5ID0gMDtcblxuICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoY2FyZHMpLFxuICAgICAgX3N0ZXA7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgdmFyIF9pdGVtID0gX3N0ZXAudmFsdWU7XG4gICAgICBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgIHRyaWdnZXI6IF9pdGVtLFxuICAgICAgICAgIHN0YXJ0OiAndG9wIDEwMCUnLFxuICAgICAgICAgIHRvZ2dsZUFjdGlvbnM6ICdwbGF5IG5vbmUgbm9uZSBub25lJ1xuICAgICAgICB9XG4gICAgICB9KS5mcm9tVG8oX2l0ZW0sIHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgeTogLTEwMFxuICAgICAgfSwge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB5OiAwLFxuICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICBkZWxheTogbXlkZWxheSxcbiAgICAgICAgY2xlYXJQcm9wczogXCJzY2FsZVwiXG4gICAgICB9KTtcbiAgICAgIG15ZGVsYXkgKz0gMC41O1xuICAgIH0gLy8gUHJvamVjdCBEZXRhaWxcblxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfaXRlcmF0b3IuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvci5mKCk7XG4gIH1cblxuICBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBcIi5wcm9qZWN0X19jb250YWluZXJfX3JpZ2h0XCIsXG4gICAgICBzdGFydDogJ3RvcCA3NSUnLFxuICAgICAgdG9nZ2xlQWN0aW9uczogJ3BsYXkgcmVzZXQgcGxheSByZXNldCdcbiAgICB9XG4gIH0pLmZyb21UbyhcIi5wcm9qZWN0X19jb250YWluZXJfX3JpZ2h0XCIsIHtcbiAgICB4OiAyMDAsXG4gICAgb3BhY2l0eTogMFxuICB9LCB7XG4gICAgeDogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIGR1cmF0aW9uOiAyXG4gIH0pOyAvLyBHb2FsXG5cbiAgdmFyIGdvYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29hbF9fbGVmdCcpO1xuICBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiBnb2FsLFxuICAgICAgc3RhcnQ6ICd0b3AgMTAwJScsXG4gICAgICB0b2dnbGVBY3Rpb25zOiAncGxheSBub25lIG5vbmUgbm9uZSdcbiAgICB9XG4gIH0pLmZyb21Ubyhnb2FsLCB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB5OiAtMjAsXG4gICAgeDogLTIwXG4gIH0sIHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHk6IDAsXG4gICAgeDogMCxcbiAgICBkdXJhdGlvbjogMVxuICB9KTsgLy8gRnJhbWluZyBjYXJkc1xuXG4gIHZhciBmcmFtaW5nX2NhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZyYW1pbmdfX2NhcmRzX19jYXJkLCAuaW5zaWdodHNfX3RhYmxlX19yaWdodF9fcG9pbnQnKTtcbiAgdmFyIGRlbGF5ID0gMDtcbiAgdmFyIGNvdW50ZXIgPSAwO1xuXG4gIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZnJhbWluZ19jYXJkcyksXG4gICAgICBfc3RlcDI7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgdmFyIF9pdGVtMiA9IF9zdGVwMi52YWx1ZTtcbiAgICAgIGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgdHJpZ2dlcjogX2l0ZW0yLFxuICAgICAgICAgIHN0YXJ0OiAndG9wIDEwMCUnLFxuICAgICAgICAgIHRvZ2dsZUFjdGlvbnM6ICdwbGF5IG5vbmUgbm9uZSBub25lJ1xuICAgICAgICB9XG4gICAgICB9KS5mcm9tVG8oX2l0ZW0yLCB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHk6IC0xMDBcbiAgICAgIH0sIHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgICBjbGVhclByb3BzOiBcInNjYWxlXCJcbiAgICAgIH0pO1xuICAgICAgY291bnRlciArPSAxO1xuXG4gICAgICBpZiAoY291bnRlciA9PSA0KSB7XG4gICAgICAgIGRlbGF5ID0gMDtcbiAgICAgIH1cblxuICAgICAgZGVsYXkgKz0gMC41O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yMi5mKCk7XG4gIH1cbn0pOyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChTY3JvbGxVcCkge1xuICB2YXIgRWxldmF0b3IgPSBmdW5jdGlvbiBFbGV2YXRvcihvcHRpb25zKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7IC8vIEVsZW1lbnRzXG5cbiAgICB2YXIgYm9keSA9IG51bGw7IC8vIFNjcm9sbCB2YXJzXG5cbiAgICB2YXIgYW5pbWF0aW9uID0gbnVsbDtcbiAgICB2YXIgZHVyYXRpb24gPSBudWxsOyAvLyBtc1xuXG4gICAgdmFyIGN1c3RvbUR1cmF0aW9uID0gZmFsc2U7XG4gICAgdmFyIHN0YXJ0VGltZSA9IG51bGw7XG4gICAgdmFyIHN0YXJ0UG9zaXRpb24gPSBudWxsO1xuICAgIHZhciBlbmRQb3NpdGlvbiA9IDA7XG4gICAgdmFyIHRhcmdldEVsZW1lbnQgPSBudWxsO1xuICAgIHZhciB2ZXJ0aWNhbFBhZGRpbmcgPSBudWxsO1xuICAgIHZhciBlbGV2YXRpbmcgPSBmYWxzZTtcbiAgICB2YXIgc3RhcnRDYWxsYmFjaztcbiAgICB2YXIgbWFpbkF1ZGlvO1xuICAgIHZhciBlbmRBdWRpbztcbiAgICB2YXIgZW5kQ2FsbGJhY2s7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIC8qKlxyXG4gICAgICogVXRpbHNcclxuICAgICAqL1xuICAgIC8vIFRoYW5rcyBNciBQZW5uZXIgLSBodHRwOi8vcm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG5cbiAgICBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQsIGIsIGMsIGQpIHtcbiAgICAgIHQgLz0gZCAvIDI7XG4gICAgICBpZiAodCA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcbiAgICAgIHQtLTtcbiAgICAgIHJldHVybiAtYyAvIDIgKiAodCAqICh0IC0gMikgLSAxKSArIGI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0ZW5kUGFyYW1ldGVycyhvcHRpb25zLCBkZWZhdWx0cykge1xuICAgICAgZm9yICh2YXIgb3B0aW9uIGluIGRlZmF1bHRzKSB7XG4gICAgICAgIHZhciB0ID0gb3B0aW9uc1tvcHRpb25dID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdGlvbiAhPT0gXCJmdW5jdGlvblwiO1xuXG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gZGVmYXVsdHNbb3B0aW9uXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWZXJ0aWNhbE9mZnNldChlbGVtZW50KSB7XG4gICAgICB2YXIgdmVydGljYWxPZmZzZXQgPSAwO1xuXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICB2ZXJ0aWNhbE9mZnNldCArPSBlbGVtZW50Lm9mZnNldFRvcCB8fCAwO1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJ0aWNhbFBhZGRpbmcpIHtcbiAgICAgICAgdmVydGljYWxPZmZzZXQgPSB2ZXJ0aWNhbE9mZnNldCAtIHZlcnRpY2FsUGFkZGluZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZlcnRpY2FsT2Zmc2V0O1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIE1haW5cclxuICAgICAqL1xuICAgIC8vIFRpbWUgaXMgcGFzc2VkIHRocm91Z2ggcmVxdWVzdEFuaW1hdGlvbkZyYW1lLCB3aGF0IGEgd29ybGQhXG5cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVMb29wKHRpbWUpIHtcbiAgICAgIGlmICghc3RhcnRUaW1lKSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICB9XG5cbiAgICAgIHZhciB0aW1lU29GYXIgPSB0aW1lIC0gc3RhcnRUaW1lO1xuICAgICAgdmFyIGVhc2VkUG9zaXRpb24gPSBlYXNlSW5PdXRRdWFkKHRpbWVTb0Zhciwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24gLSBzdGFydFBvc2l0aW9uLCBkdXJhdGlvbik7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZWFzZWRQb3NpdGlvbik7XG5cbiAgICAgIGlmICh0aW1lU29GYXIgPCBkdXJhdGlvbikge1xuICAgICAgICBhbmltYXRpb24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZUxvb3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5pbWF0aW9uRmluaXNoZWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsZXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZWxldmF0aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZWxldmF0aW5nID0gdHJ1ZTtcbiAgICAgIHN0YXJ0UG9zaXRpb24gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICAgICAgdXBkYXRlRW5kUG9zaXRpb24oKTsgLy8gTm8gY3VzdG9tIGR1cmF0aW9uIHNldCwgc28gd2UgdHJhdmVsIGF0IHBpeGVscyBwZXIgbWlsbGlzZWNvbmQuICgwLjc1cHggcGVyIG1zKVxuXG4gICAgICBpZiAoIWN1c3RvbUR1cmF0aW9uKSB7XG4gICAgICAgIGR1cmF0aW9uID0gTWF0aC5hYnMoZW5kUG9zaXRpb24gLSBzdGFydFBvc2l0aW9uKSAqIDEuNTtcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVMb29wKTsgLy8gU3RhcnQgbXVzaWMhXG5cbiAgICAgIGlmIChtYWluQXVkaW8pIHtcbiAgICAgICAgbWFpbkF1ZGlvLnBsYXkoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0Q2FsbGJhY2spIHtcbiAgICAgICAgc3RhcnRDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBicm93c2VyTWVldHNSZXF1aXJlbWVudHMoKSB7XG4gICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJiB3aW5kb3cuQXVkaW8gJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRQb3NpdGlvbnMoKSB7XG4gICAgICBzdGFydFRpbWUgPSBudWxsO1xuICAgICAgc3RhcnRQb3NpdGlvbiA9IG51bGw7XG4gICAgICBlbGV2YXRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVFbmRQb3NpdGlvbigpIHtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIGVuZFBvc2l0aW9uID0gZ2V0VmVydGljYWxPZmZzZXQodGFyZ2V0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0aW9uRmluaXNoZWQoKSB7XG4gICAgICByZXNldFBvc2l0aW9ucygpOyAvLyBTdG9wIG11c2ljIVxuXG4gICAgICBpZiAobWFpbkF1ZGlvKSB7XG4gICAgICAgIG1haW5BdWRpby5wYXVzZSgpO1xuICAgICAgICBtYWluQXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kQXVkaW8pIHtcbiAgICAgICAgZW5kQXVkaW8ucGxheSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kQ2FsbGJhY2spIHtcbiAgICAgICAgZW5kQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbldpbmRvd0JsdXIoKSB7XG4gICAgICAvLyBJZiBhbmltYXRpbmcsIGdvIHN0cmFpZ2h0IHRvIHRoZSB0b3AuIEFuZCBwbGF5IG5vIG1vcmUgbXVzaWMuXG4gICAgICBpZiAoZWxldmF0aW5nKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIHJlc2V0UG9zaXRpb25zKCk7XG5cbiAgICAgICAgaWYgKG1haW5BdWRpbykge1xuICAgICAgICAgIG1haW5BdWRpby5wYXVzZSgpO1xuICAgICAgICAgIG1haW5BdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVFbmRQb3NpdGlvbigpO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZW5kUG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmRFbGV2YXRlVG9FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhhdC5lbGV2YXRlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPbGRlciBicm93c2Vyc1xuICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KFwib25jbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdXBkYXRlRW5kUG9zaXRpb24oKTtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gZW5kUG9zaXRpb247XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBlbmRQb3NpdGlvbjtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIGVuZFBvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdChfb3B0aW9ucykge1xuICAgICAgLy8gVGFrZSB0aGUgc3RhaXJzIGluc3RlYWRcbiAgICAgIGlmICghYnJvd3Nlck1lZXRzUmVxdWlyZW1lbnRzKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBCaW5kIHRvIGVsZW1lbnQgY2xpY2sgZXZlbnQuXG5cblxuICAgICAgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGR1cmF0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIG1haW5BdWRpbzogZmFsc2UsXG4gICAgICAgIGVuZEF1ZGlvOiBmYWxzZSxcbiAgICAgICAgcHJlbG9hZEF1ZGlvOiB0cnVlLFxuICAgICAgICBsb29wQXVkaW86IHRydWUsXG4gICAgICAgIHN0YXJ0Q2FsbGJhY2s6IG51bGwsXG4gICAgICAgIGVuZENhbGxiYWNrOiBudWxsXG4gICAgICB9O1xuICAgICAgX29wdGlvbnMgPSBleHRlbmRQYXJhbWV0ZXJzKF9vcHRpb25zLCBkZWZhdWx0cyk7XG5cbiAgICAgIGlmIChfb3B0aW9ucy5lbGVtZW50KSB7XG4gICAgICAgIGJpbmRFbGV2YXRlVG9FbGVtZW50KF9vcHRpb25zLmVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX29wdGlvbnMuZHVyYXRpb24pIHtcbiAgICAgICAgY3VzdG9tRHVyYXRpb24gPSB0cnVlO1xuICAgICAgICBkdXJhdGlvbiA9IF9vcHRpb25zLmR1cmF0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoX29wdGlvbnMudGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0YXJnZXRFbGVtZW50ID0gX29wdGlvbnMudGFyZ2V0RWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKF9vcHRpb25zLnZlcnRpY2FsUGFkZGluZykge1xuICAgICAgICB2ZXJ0aWNhbFBhZGRpbmcgPSBfb3B0aW9ucy52ZXJ0aWNhbFBhZGRpbmc7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBvbldpbmRvd0JsdXIsIGZhbHNlKTtcblxuICAgICAgaWYgKF9vcHRpb25zLm1haW5BdWRpbykge1xuICAgICAgICBtYWluQXVkaW8gPSBuZXcgQXVkaW8oX29wdGlvbnMubWFpbkF1ZGlvKTtcbiAgICAgICAgbWFpbkF1ZGlvLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgX29wdGlvbnMucHJlbG9hZEF1ZGlvKTtcbiAgICAgICAgbWFpbkF1ZGlvLnNldEF0dHJpYnV0ZShcImxvb3BcIiwgX29wdGlvbnMubG9vcEF1ZGlvKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9vcHRpb25zLmVuZEF1ZGlvKSB7XG4gICAgICAgIGVuZEF1ZGlvID0gbmV3IEF1ZGlvKF9vcHRpb25zLmVuZEF1ZGlvKTtcbiAgICAgICAgZW5kQXVkaW8uc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcInRydWVcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChfb3B0aW9ucy5lbmRDYWxsYmFjaykge1xuICAgICAgICBlbmRDYWxsYmFjayA9IF9vcHRpb25zLmVuZENhbGxiYWNrO1xuICAgICAgfVxuXG4gICAgICBpZiAoX29wdGlvbnMuc3RhcnRDYWxsYmFjaykge1xuICAgICAgICBzdGFydENhbGxiYWNrID0gX29wdGlvbnMuc3RhcnRDYWxsYmFjaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KG9wdGlvbnMpO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBFbGV2YXRvcjtcbiAgfVxuXG4gIHZhciBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGV2YXRvci1idXR0b24nKTtcblxuICBmdW5jdGlvbiBhY3RpdmF0ZUVsZXZhdG9yKCkge1xuICAgIHZhciBlbGV2YXRvciA9IG5ldyBFbGV2YXRvcih7XG4gICAgICBlbGVtZW50OiBzdGFydCxcbiAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgfSk7XG4gICAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBlbGV2YXRvci5lbGV2YXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZUVsZXZhdG9yKCk7XG59KTsiLCJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qc1wiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKFNtb290aFNjcm9sbCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpLmZvckVhY2goZnVuY3Rpb24gKGFuY2hvcikge1xuICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTsiLCJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcucmVwbGFjZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanNcIjtcblxuLypcclxuICogQHByZXNlcnZlIGRhdGFzZXQgcG9seWZpbGwgZm9yIElFIDwgMTEuIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvZGF0YXNldCBhbmQgaHR0cDovL2Nhbml1c2UuY29tLyNzZWFyY2g9ZGF0YXNldFxyXG4gKlxyXG4gKiBAYXV0aG9yIFNoaXJ0bGVzc0tpcmsgY29weXJpZ2h0IDIwMTVcclxuICogQGxpY2Vuc2UgV1RGUEwgKGh0dHA6Ly93d3cud3RmcGwubmV0L3R4dC9jb3B5aW5nKVxyXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyogZ2xvYmFsIGRlZmluZTogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuLyoganNsaW50IG5vbWVuOiB0cnVlLCByZWdleHA6IHRydWUsIHVucGFyYW06IHRydWUgKi9cbihmdW5jdGlvbiBkYXRhc2V0TW9kdWxlKGdsb2JhbCwgZGVmaW5pdGlvbikge1xuICAvLyBub24tZXhwb3J0aW5nIG1vZHVsZSBtYWdpYyBkYW5jZVxuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGFtZCA9ICdhbWQnLFxuICAgICAgZXhwb3J0cyA9ICdleHBvcnRzJzsgLy8ga2VlcHMgdGhlIG1ldGhvZCBuYW1lcyBmb3IgQ29tbW9uSlMgLyBBTUQgZnJvbSBiZWluZyBjb21waWxlZCB0byBzaW5nbGUgY2hhcmFjdGVyIHZhcmlhYmxlXG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lW2FtZF0pIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24gZGVmaW5lcigpIHtcbiAgICAgIHJldHVybiBkZWZpbml0aW9uKGdsb2JhbCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ2Z1bmN0aW9uJyAmJiBtb2R1bGVbZXhwb3J0c10pIHtcbiAgICBtb2R1bGVbZXhwb3J0c10gPSBkZWZpbml0aW9uKGdsb2JhbCk7XG4gIH0gZWxzZSB7XG4gICAgZGVmaW5pdGlvbihnbG9iYWwpO1xuICB9XG59KSh3aW5kb3csIGZ1bmN0aW9uIGRhdGFzZXRQb2x5ZmlsbChnbG9iYWwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBhdHRyaWJ1dGUsXG4gICAgICBhdHRyaWJ1dGVzLFxuICAgICAgY291bnRlcixcbiAgICAgIGRhc2gsXG4gICAgICBkYXRhUmVnRXgsXG4gICAgICBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudCxcbiAgICAgIGhhc0V2ZW50TGlzdGVuZXIsXG4gICAgICBsZW5ndGgsXG4gICAgICBtYXRjaCxcbiAgICAgIG11dGF0aW9uU3VwcG9ydCxcbiAgICAgIHRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdfJyksXG4gICAgICBET01BdHRyTW9kaWZpZWQgPSAnRE9NQXR0ck1vZGlmaWVkJztcblxuICBmdW5jdGlvbiBjbGVhckRhdGFzZXQoZXZlbnQpIHtcbiAgICBkZWxldGUgZXZlbnQudGFyZ2V0Ll9kYXRhc2V0Q2FjaGU7XG4gIH1cblxuICBmdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoZGFzaCwgZnVuY3Rpb24gKG0sIGxldHRlcikge1xuICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YXNldCgpIHtcbiAgICB2YXIgZGF0YXNldCA9IHt9O1xuICAgIGF0dHJpYnV0ZXMgPSB0aGlzLmF0dHJpYnV0ZXM7XG5cbiAgICBmb3IgKGNvdW50ZXIgPSAwLCBsZW5ndGggPSBhdHRyaWJ1dGVzLmxlbmd0aDsgY291bnRlciA8IGxlbmd0aDsgY291bnRlciArPSAxKSB7XG4gICAgICBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzW2NvdW50ZXJdO1xuICAgICAgbWF0Y2ggPSBhdHRyaWJ1dGUubmFtZS5tYXRjaChkYXRhUmVnRXgpO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgZGF0YXNldFt0b0NhbWVsQ2FzZShtYXRjaFsxXSldID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhc2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gbXV0YXRpb24oKSB7XG4gICAgaWYgKGhhc0V2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihET01BdHRyTW9kaWZpZWQsIG11dGF0aW9uLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlc3QuZGV0YWNoRXZlbnQoJ29uJyArIERPTUF0dHJNb2RpZmllZCwgbXV0YXRpb24pO1xuICAgIH1cblxuICAgIG11dGF0aW9uU3VwcG9ydCA9IHRydWU7XG4gIH1cblxuICBpZiAodGVzdC5kYXRhc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyogZXNsaW50LWRpc2FibGUgKi9cblxuXG4gIGRhc2ggPSAvXFwtKFthLXpdKS9pZztcbiAgZGF0YVJlZ0V4ID0gL15kYXRhXFwtKC4rKS87XG4gIGhhc0V2ZW50TGlzdGVuZXIgPSAhIWRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI7XG4gIG11dGF0aW9uU3VwcG9ydCA9IGZhbHNlO1xuXG4gIGlmIChoYXNFdmVudExpc3RlbmVyKSB7XG4gICAgdGVzdC5hZGRFdmVudExpc3RlbmVyKERPTUF0dHJNb2RpZmllZCwgbXV0YXRpb24sIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICB0ZXN0LmF0dGFjaEV2ZW50KCdvbicgKyBET01BdHRyTW9kaWZpZWQsIG11dGF0aW9uKTtcbiAgfSAvLyB0cmlnZ2VyIGV2ZW50IChpZiBzdXBwb3J0ZWQpXG5cblxuICB0ZXN0LnNldEF0dHJpYnV0ZSgnZm9vJywgJ2JhcicpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsLkVsZW1lbnQucHJvdG90eXBlLCAnZGF0YXNldCcsIHtcbiAgICBnZXQ6IG11dGF0aW9uU3VwcG9ydCA/IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICghdGhpcy5fZGF0YXNldENhY2hlKSB7XG4gICAgICAgIHRoaXMuX2RhdGFzZXRDYWNoZSA9IGdldERhdGFzZXQuY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2RhdGFzZXRDYWNoZTtcbiAgICB9IDogZ2V0RGF0YXNldFxuICB9KTtcblxuICBpZiAobXV0YXRpb25TdXBwb3J0ICYmIGhhc0V2ZW50TGlzdGVuZXIpIHtcbiAgICAvLyA8IElFOSBzdXBwb3J0cyBuZWl0aGVyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihET01BdHRyTW9kaWZpZWQsIGNsZWFyRGF0YXNldCwgZmFsc2UpO1xuICB9XG59KTsiLCJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIjtcblxuZnVuY3Rpb24gcmVxdWlyZUFsbChyKSB7XG4gIHIua2V5cygpLmZvckVhY2gocik7XG59XG5cbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9pY29ucycsIHRydWUsIC9cXC5zdmckLykpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tYXJyb3ctYm90dG9tLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgdXJsOiBcImljb25zL1wiICsgXCJzcHJpdGUuc3ZnI2ljb24tYXJyb3ctYm90dG9tLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tYXJyb3ctcmlnaHQtdXNhZ2VcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICB1cmw6IFwiaWNvbnMvXCIgKyBcInNwcml0ZS5zdmcjaWNvbi1hcnJvdy1yaWdodC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWNhcmV0LXJpZ2h0LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgdXJsOiBcImljb25zL1wiICsgXCJzcHJpdGUuc3ZnI2ljb24tY2FyZXQtcmlnaHQtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1jbG9zZS11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICAgIHVybDogXCJpY29ucy9cIiArIFwic3ByaXRlLnN2ZyNpY29uLWNsb3NlLXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tbWVudS11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICAgIHVybDogXCJpY29ucy9cIiArIFwic3ByaXRlLnN2ZyNpY29uLW1lbnUtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwidmFyIG1hcCA9IHtcblx0XCIuL2Fycm93LWJvdHRvbS5zdmdcIjogXCIuL3NyYy9pY29ucy9hcnJvdy1ib3R0b20uc3ZnXCIsXG5cdFwiLi9hcnJvdy1yaWdodC5zdmdcIjogXCIuL3NyYy9pY29ucy9hcnJvdy1yaWdodC5zdmdcIixcblx0XCIuL2NhcmV0LXJpZ2h0LnN2Z1wiOiBcIi4vc3JjL2ljb25zL2NhcmV0LXJpZ2h0LnN2Z1wiLFxuXHRcIi4vY2xvc2Uuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvY2xvc2Uuc3ZnXCIsXG5cdFwiLi9tZW51LnN2Z1wiOiBcIi4vc3JjL2ljb25zL21lbnUuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ljb25zIHN5bmMgcmVjdXJzaXZlIFxcXFwuc3ZnJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLlwiOiBcIi4vc3JjL3NjcmlwdHMvaW5kZXguanNcIixcblx0XCIuL1wiOiBcIi4vc3JjL3NjcmlwdHMvaW5kZXguanNcIixcblx0XCIuL2luZGV4XCI6IFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiLFxuXHRcIi4vaW5kZXguanNcIjogXCIuL3NyYy9zY3JpcHRzL2luZGV4LmpzXCIsXG5cdFwiLi9tb2R1bGVzL0NhcmRzXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0NhcmRzLmpzXCIsXG5cdFwiLi9tb2R1bGVzL0NhcmRzLmpzXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0NhcmRzLmpzXCIsXG5cdFwiLi9tb2R1bGVzL0Nhcm91c2VsXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0Nhcm91c2VsLmpzXCIsXG5cdFwiLi9tb2R1bGVzL0Nhcm91c2VsLmpzXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0Nhcm91c2VsLmpzXCIsXG5cdFwiLi9tb2R1bGVzL0NoYW5nZVRoZW1lXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0NoYW5nZVRoZW1lLmpzXCIsXG5cdFwiLi9tb2R1bGVzL0NoYW5nZVRoZW1lLmpzXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0NoYW5nZVRoZW1lLmpzXCIsXG5cdFwiLi9tb2R1bGVzL01hZ25ldGljRWZmZWN0XCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL01hZ25ldGljRWZmZWN0LmpzXCIsXG5cdFwiLi9tb2R1bGVzL01hZ25ldGljRWZmZWN0LmpzXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL01hZ25ldGljRWZmZWN0LmpzXCIsXG5cdFwiLi9tb2R1bGVzL05hdmlnYXRpb25JbmRpY2F0b3JcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvTmF2aWdhdGlvbkluZGljYXRvci5qc1wiLFxuXHRcIi4vbW9kdWxlcy9OYXZpZ2F0aW9uSW5kaWNhdG9yLmpzXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL05hdmlnYXRpb25JbmRpY2F0b3IuanNcIixcblx0XCIuL21vZHVsZXMvUmVzcG9uc2l2ZU5hdmlnYXRpb25cIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvUmVzcG9uc2l2ZU5hdmlnYXRpb24uanNcIixcblx0XCIuL21vZHVsZXMvUmVzcG9uc2l2ZU5hdmlnYXRpb24uanNcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvUmVzcG9uc2l2ZU5hdmlnYXRpb24uanNcIixcblx0XCIuL21vZHVsZXMvU2Nyb2xsQW5pbWF0aW9uXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Njcm9sbEFuaW1hdGlvbi5qc1wiLFxuXHRcIi4vbW9kdWxlcy9TY3JvbGxBbmltYXRpb24uanNcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvU2Nyb2xsQW5pbWF0aW9uLmpzXCIsXG5cdFwiLi9tb2R1bGVzL1Njcm9sbFVwXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Njcm9sbFVwLmpzXCIsXG5cdFwiLi9tb2R1bGVzL1Njcm9sbFVwLmpzXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Njcm9sbFVwLmpzXCIsXG5cdFwiLi9tb2R1bGVzL1Ntb290aFNjcm9sbFwiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9TbW9vdGhTY3JvbGwuanNcIixcblx0XCIuL21vZHVsZXMvU21vb3RoU2Nyb2xsLmpzXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Ntb290aFNjcm9sbC5qc1wiLFxuXHRcIi4vcG9seWZpbGwvZGF0YXNldFwiOiBcIi4vc3JjL3NjcmlwdHMvcG9seWZpbGwvZGF0YXNldC5qc1wiLFxuXHRcIi4vcG9seWZpbGwvZGF0YXNldC5qc1wiOiBcIi4vc3JjL3NjcmlwdHMvcG9seWZpbGwvZGF0YXNldC5qc1wiLFxuXHRcIi4vcG9zdC1idWlsZFwiOiBcIi4vc3JjL3NjcmlwdHMvcG9zdC1idWlsZC5qc1wiLFxuXHRcIi4vcG9zdC1idWlsZC5qc1wiOiBcIi4vc3JjL3NjcmlwdHMvcG9zdC1idWlsZC5qc1wiXG59O1xuXG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cblx0XHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBPYmplY3Qua2V5cyhtYXApOyB9O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zcmMvc2NyaXB0cyBsYXp5IHJlY3Vyc2l2ZSBeLiokXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbi8vIFNpbmNlIGFsbCByZWZlcmVuY2VkIGNodW5rcyBhcmUgYWxyZWFkeSBpbmNsdWRlZFxuLy8gaW4gdGhpcyBmaWxlLCB0aGlzIGZ1bmN0aW9uIGlzIGVtcHR5IGhlcmUuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyB9OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tfc3RhcnRlclwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWJwYWNrX3N0YXJ0ZXJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2luZGV4LmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0NhcmRzLmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0Nhcm91c2VsLmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0NoYW5nZVRoZW1lLmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL01hZ25ldGljRWZmZWN0LmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL05hdmlnYXRpb25JbmRpY2F0b3IuanNcIik7IH0pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvUmVzcG9uc2l2ZU5hdmlnYXRpb24uanNcIik7IH0pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvU2Nyb2xsQW5pbWF0aW9uLmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Njcm9sbFVwLmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Ntb290aFNjcm9sbC5qc1wiKTsgfSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvcG9seWZpbGwvZGF0YXNldC5qc1wiKTsgfSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9wb3N0LWJ1aWxkLmpzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==