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
          card.style.transform = 'rotate(0deg)';

          if (reset === true) {
            card.style.transform = "rotate(-".concat(counter, "deg)");
            counter += 10;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdlBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDVkE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FFaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9DYXJkcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0Nhcm91c2VsLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2hhbmdlVGhlbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9NYWduZXRpY0VmZmVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL05hdmlnYXRpb25JbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9SZXNwb25zaXZlTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Njcm9sbEFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Njcm9sbFVwLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzL21vZHVsZXMvU21vb3RoU2Nyb2xsLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzL3BvbHlmaWxsL2RhdGFzZXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvcG9zdC1idWlsZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2ljb25zL2Fycm93LWJvdHRvbS5zdmciLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2ljb25zL2Fycm93LXJpZ2h0LnN2ZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvaWNvbnMvY2FyZXQtcmlnaHQuc3ZnIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL2ljb25zL21lbnUuc3ZnIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9pY29uc3xzeW5jfC8uc3ZnJCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0c3xsYXp5fC9eLiokL3xncm91cE9wdGlvbnM6IHt9fG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFybW9ueSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGxhenlTaXplcyBmcm9tICdsYXp5c2l6ZXMnO1xuaW1wb3J0ICdsYXp5c2l6ZXMvcGx1Z2lucy9uYXRpdmUtbG9hZGluZy9scy5uYXRpdmUtbG9hZGluZyc7XG5pbXBvcnQgJ2xhenlzaXplcy9wbHVnaW5zL29iamVjdC1maXQvbHMub2JqZWN0LWZpdCc7XG5pbXBvcnQgJ2xhenlzaXplcy9wbHVnaW5zL3VudmVpbGhvb2tzL2xzLnVudmVpbGhvb2tzJztcbmltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJztcbmltcG9ydCAnQGJhYmVsL3BsdWdpbi1zeW50YXgtZHluYW1pYy1pbXBvcnQnO1xuaW1wb3J0ICogYXMgY29uZGl0aW9uZXIgZnJvbSAnY29uZGl0aW9uZXItY29yZS9jb25kaXRpb25lci1jb3JlLm1pbic7XG5pbXBvcnQgJy4vcG9zdC1idWlsZCc7XG5pbXBvcnQgJy4vcG9seWZpbGwvZGF0YXNldCc7XG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gJ2pzJztcbmNvbmRpdGlvbmVyLmFkZFBsdWdpbih7XG4gIC8vIHRoZSBwbHVnaW4gXCJtb25pdG9yXCIgaG9va1xuICAvLyB1c2UgaW4gaHRtbCA6IDxkaXYgZGF0YS1tb2R1bGU9XCJjb21wb25lbnRcIiBkYXRhLWNvbnRleHQ9XCJAdmlzaWJsZSB0cnVlXCI+PC9kaXY+XG4gIG1vbml0b3I6IHtcbiAgICAvLyB0aGUgbmFtZSBvZiBvdXIgbW9uaXRvciwgbm90IHByZWZpeGVkIHdpdGggXCJAXCJcbiAgICBuYW1lOiAndmlzaWJsZScsXG4gICAgLy8gdGhlIG1vbml0b3IgZmFjdG9yeSBtZXRob2QsIHRoaXMgd2lsbCBjcmVhdGUgb3VyIG1vbml0b3JcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShjb250ZXh0LCBlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBjdXJyZW50IG1hdGNoIHN0YXRlXG4gICAgICAgIG1hdGNoZXM6IGZhbHNlLFxuICAgICAgICAvLyBjYWxsZWQgYnkgY29uZGl0aW9uZXIgdG8gc3RhcnQgbGlzdGVuaW5nIGZvciBjaGFuZ2VzXG4gICAgICAgIGFkZExpc3RlbmVyOiBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjaGFuZ2UpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIG1hdGNoZXMgc3RhdGVcbiAgICAgICAgICAgIF90aGlzLm1hdGNoZXMgPSBlbnRyaWVzLnBvcCgpLmlzSW50ZXJzZWN0aW5nID09PSBjb250ZXh0OyAvLyBpbmZvcm0gY29uZGl0aW9uZXIgb2YgdGhlIG5ldyBzdGF0ZVxuXG4gICAgICAgICAgICBjaGFuZ2UoKTtcbiAgICAgICAgICB9KS5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgLy8gY29udmVydHMgbW9kdWxlIGFsaWFzZXMgdG8gcGF0aHNcbiAgbW9kdWxlU2V0TmFtZTogZnVuY3Rpb24gbW9kdWxlU2V0TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIFwiLi9tb2R1bGVzL1wiLmNvbmNhdChuYW1lLCBcIi5qc1wiKTtcbiAgfSxcbiAgLy8gZ2V0IHRoZSBtb2R1bGUgY29uc3RydWN0b3JcbiAgbW9kdWxlR2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uIG1vZHVsZUdldENvbnN0cnVjdG9yKG1vZHVsZSkge1xuICAgIHJldHVybiBtb2R1bGUuZGVmYXVsdDtcbiAgfSxcbiAgLy8gb3ZlcnJpZGUgdGhlIGltcG9ydCAodGhpcyBtYWtlcyB3ZWJwYWNrIGJ1bmRsZSBhbGwgdGhlIGR5bmFtaWNhbGx5IGluY2x1ZGVkIGZpbGVzIGFzIHdlbGwpXG4gIC8vIGh0dHBzOi8vd2VicGFjay5qcy5vcmcvYXBpL21vZHVsZS1tZXRob2RzLyNpbXBvcnQtXG4gIC8vIC0gc2V0IHRvIFwiZWFnZXJcIiB0byBjcmVhdGUgYSBzaW5nbGUgY2h1bmsgZm9yIGFsbCBtb2R1bGVzXG4gIC8vIC0gc2V0IHRvIFwibGF6eVwiIHRvIGNyZWF0ZSBhIHNlcGFyYXRlIGNodW5rIGZvciBlYWNoIG1vZHVsZVxuICBtb2R1bGVJbXBvcnQ6IGZ1bmN0aW9uIG1vZHVsZUltcG9ydChuYW1lKSB7XG4gICAgcmV0dXJuIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cbiAgICBcIlwiLmNvbmNhdChuYW1lKSk7XG4gIH1cbn0pO1xuY29uZGl0aW9uZXIuaHlkcmF0ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuLyoqXHJcbiAqIExhenlTaXplcyBjb25maWd1cmF0aW9uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hRmFya2FzL2xhenlzaXplcy8janMtYXBpLS0tb3B0aW9uc1xyXG4gKi9cblxubGF6eVNpemVzLmNmZy5uYXRpdmVMb2FkaW5nID0ge1xuICBzZXRMb2FkaW5nQXR0cmlidXRlOiBmYWxzZVxufTsiLCJmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyB0aHJvdyBfZTI7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IGl0LmNhbGwobyk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTMpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UzOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5lbnRyaWVzLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanNcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChOYXZpZ2F0aW9uSW5kaWNhdG9yKSB7XG4gIGZ1bmN0aW9uIGZsaXAoZWxlbWVudHMsIGNoYW5nZUZ1bmMsIHZhcnMpIHtcbiAgICBlbGVtZW50cyA9IGdzYXAudXRpbHMudG9BcnJheShlbGVtZW50cyk7XG4gICAgdmFycyA9IHZhcnMgfHwge307XG4gICAgdmFyIHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBvbkNvbXBsZXRlOiB2YXJzLm9uQ29tcGxldGUsXG4gICAgICBkZWxheTogdmFycy5kZWxheSB8fCAwXG4gICAgfSksXG4gICAgICAgIGJvdW5kcyA9IGVsZW1lbnRzLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9KSxcbiAgICAgICAgY29weSA9IHt9LFxuICAgICAgICBwO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5fZmxpcCAmJiBlbC5fZmxpcC5wcm9ncmVzcygxKTtcbiAgICAgIGVsLl9mbGlwID0gdGw7XG4gICAgfSk7XG4gICAgY2hhbmdlRnVuYygpO1xuXG4gICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgIHAgIT09IFwib25Db21wbGV0ZVwiICYmIHAgIT09IFwiZGVsYXlcIiAmJiAoY29weVtwXSA9IHZhcnNbcF0pO1xuICAgIH1cblxuICAgIGNvcHkueCA9IGZ1bmN0aW9uIChpLCBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gXCIrPVwiICsgKGJvdW5kc1tpXS5sZWZ0IC0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KTtcbiAgICB9O1xuXG4gICAgY29weS55ID0gZnVuY3Rpb24gKGksIGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBcIis9XCIgKyAoYm91bmRzW2ldLnRvcCAtIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRsLmZyb20oZWxlbWVudHMsIGNvcHkpO1xuICB9XG5cbiAgdmFyIENhcmRBbmltYXRpb25zID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYXJkQW5pbWF0aW9ucyhjYXJkcykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhcmRBbmltYXRpb25zKTtcblxuICAgICAgdGhpcy5jYXJkcyA9IF90b0NvbnN1bWFibGVBcnJheShjYXJkcyk7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmNhcmRzWzBdO1xuICAgICAgdGhpcy5lbW9qaVRydWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX2NvbnRhaW5lcl9fcmlnaHQnKTtcbiAgICAgIHRoaXMuZW1vamlGYWxzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fY29udGFpbmVyX19sZWZ0Jyk7XG4gICAgICB0aGlzLnNob3dBbGxDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1vdXRyb19fc2hvdy1hbGwnKTtcbiAgICAgIHRoaXMuZmxpcHBlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fZmxpcHBlZCcpO1xuICAgICAgdGhpcy5zdGFuZGFyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fY29udGFpbmVyX19jZW50ZXInKTtcbiAgICAgIHRoaXMudHJhY2tlciA9IGZhbHNlO1xuICAgICAgdGhpcy5pbmRleENvdW50ZXIgPSAtMTtcbiAgICAgIHRoaXMuaW5kZXhTdGF0ZSA9IHt9O1xuICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENhcmRBbmltYXRpb25zLCBbe1xuICAgICAga2V5OiBcImJpbmRFdmVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2FyciA9IFt0aGlzLmVtb2ppVHJ1ZSwgdGhpcy5lbW9qaUZhbHNlXTsgX2kgPCBfYXJyLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgIHZhciBlbW9qaSA9IF9hcnJbX2ldO1xuICAgICAgICAgIGVtb2ppLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZUNhcmRUb0V4aXRBbmRSZUVudGVyQ29udGFpbmVyKF90aGlzLmN1cnJlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93QWxsQ2FyZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFfdGhpcy50cmFja2VyKSB7XG4gICAgICAgICAgICBfdGhpcy50cmFja2VyID0gdHJ1ZTtcblxuICAgICAgICAgICAgX3RoaXMubW92ZVNtaWxleUZhY2VzKCk7XG5cbiAgICAgICAgICAgIF90aGlzLmNhcmRzQ29udGFpbmVyVG9GbGlwcGVkQ29udGFpbmVyKDEwMDApO1xuXG4gICAgICAgICAgICBfdGhpcy5jaGFuZ2VIb3Zlck9uRmxleENhcmRzKCk7XG5cbiAgICAgICAgICAgIF90aGlzLmNoYW5nZVRyYW5zaXRpb25Qcm9wZXJ0eUFuZFJlbW92ZVJvdGF0aW9uKCk7XG5cbiAgICAgICAgICAgIF90aGlzLmNvbnRyb2xsZXJCdXR0b25Nb2RpZmljYXRpb25zKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnRyYWNrZXIgPSBmYWxzZTtcblxuICAgICAgICAgICAgX3RoaXMuY2FyZHNDb250YWluZXJUb0ZsaXBwZWRDb250YWluZXIoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzLmNoYW5nZVRyYW5zaXRpb25Qcm9wZXJ0eUFuZFJlbW92ZVJvdGF0aW9uKHRydWUpO1xuXG4gICAgICAgICAgICAgIF90aGlzLmNoYW5nZUhvdmVyT25GbGV4Q2FyZHMoKTtcblxuICAgICAgICAgICAgICBfdGhpcy5tb3ZlU21pbGV5RmFjZXMoKTtcblxuICAgICAgICAgICAgICBfdGhpcy5jb250cm9sbGVyQnV0dG9uTW9kaWZpY2F0aW9ucygpO1xuICAgICAgICAgICAgfSwgMTQwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gRmxpcCBUcmFuc2l0aW9uXG4gICAgICAvLyBGbGlwIFRyYW5zaXRpb24gTWFpbiBGdW5jdGlvbnNcblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjYXJkc0NvbnRhaW5lclRvRmxpcHBlZENvbnRhaW5lclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhcmRzQ29udGFpbmVyVG9GbGlwcGVkQ29udGFpbmVyKHRpbWVyKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5jYXJkcy5mb3JFYWNoKGZ1bmN0aW9uIChjYXJkKSB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ25vdHJhbnNpdGlvbicpO1xuICAgICAgICAgICAgZmxpcChbX3RoaXMyLmNhcmRzXSwgX3RoaXMyLnN3YXBQb3NpdGlvbi5iaW5kKF90aGlzMiwgY2FyZCksIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDEuM1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBfdGhpczIuY2hhbmdlTWFpbkNvbnRhaW5lckhlaWdodCgpO1xuICAgICAgICB9LCB0aW1lcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN3YXBQb3NpdGlvblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN3YXBQb3NpdGlvbihjYXJkKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnRyYWNrZXIgPT09IHRydWUgPyB0aGlzLmZsaXBwZWQgOiB0aGlzLnN0YW5kYXJkO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoJ3ByZXBhcmUtY2FyZCcpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5pbmNyZW1lbnRJbmRleFN0YXRlKGNhcmQpKTtcbiAgICAgIH0gLy8gRmxpcCBUcmFuc2l0aW9uIFV0aWxzXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2hhbmdlVHJhbnNpdGlvblByb3BlcnR5QW5kUmVtb3ZlUm90YXRpb25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VUcmFuc2l0aW9uUHJvcGVydHlBbmRSZW1vdmVSb3RhdGlvbigpIHtcbiAgICAgICAgdmFyIHJlc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLmNhcmRzLmZvckVhY2goZnVuY3Rpb24gKGNhcmQpIHtcbiAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ25vdHJhbnNpdGlvbicpO1xuICAgICAgICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG5cbiAgICAgICAgICBpZiAocmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoLVwiLmNvbmNhdChjb3VudGVyLCBcImRlZylcIik7XG4gICAgICAgICAgICBjb3VudGVyICs9IDEwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImluY3JlbWVudEluZGV4U3RhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmNyZW1lbnRJbmRleFN0YXRlKGl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMudHJhY2tlcikge1xuICAgICAgICAgIHRoaXMuaW5kZXhTdGF0ZVt0aGlzLmluZGV4Q291bnRlcl0gPSBpdGVtO1xuICAgICAgICAgIHRoaXMuaW5kZXhDb3VudGVyIC09IDE7XG4gICAgICAgICAgaXRlbS5zdHlsZS56SW5kZXggPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAodmFyIF9pMiA9IDAsIF9PYmplY3QkZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuaW5kZXhTdGF0ZSk7IF9pMiA8IF9PYmplY3QkZW50cmllcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgICB2YXIgX09iamVjdCRlbnRyaWVzJF9pID0gX3NsaWNlZFRvQXJyYXkoX09iamVjdCRlbnRyaWVzW19pMl0sIDIpLFxuICAgICAgICAgICAgICAgIGtleSA9IF9PYmplY3QkZW50cmllcyRfaVswXSxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IF9PYmplY3QkZW50cmllcyRfaVsxXTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgaXRlbS5zdHlsZS56SW5kZXggPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNoYW5nZUhvdmVyT25GbGV4Q2FyZHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VIb3Zlck9uRmxleENhcmRzKCkge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIodGhpcy5jYXJkcyksXG4gICAgICAgICAgICBfc3RlcDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgICB2YXIgY2FyZCA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGZyb250ID0gY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIHZhciBiYWNrID0gZnJvbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZhdGUtaG92ZXItMScpO1xuICAgICAgICAgICAgYmFjay5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmF0ZS1ob3Zlci0yJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2hhbmdlTWFpbkNvbnRhaW5lckhlaWdodFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5nZU1haW5Db250YWluZXJIZWlnaHQoKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2FkanVzdC1oZWlnaHQnKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwibW92ZVNtaWxleUZhY2VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZVNtaWxleUZhY2VzKCkge1xuICAgICAgICBpZiAodGhpcy50cmFja2VyKSB7XG4gICAgICAgICAgdGhpcy5lbW9qaVRydWUuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnbW92ZS1pbi1yaWdodCcpO1xuICAgICAgICAgIHRoaXMuZW1vamlGYWxzZS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZlLWluLWxlZnQnKTtcbiAgICAgICAgICB0aGlzLmVtb2ppVHJ1ZS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdtb3ZlLW91dC1yaWdodCcpO1xuICAgICAgICAgIHRoaXMuZW1vamlGYWxzZS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdtb3ZlLW91dC1sZWZ0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbW9qaVRydWUuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnbW92ZS1vdXQtcmlnaHQnKTtcbiAgICAgICAgICB0aGlzLmVtb2ppRmFsc2UuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnbW92ZS1vdXQtbGVmdCcpO1xuICAgICAgICAgIHRoaXMuZW1vamlUcnVlLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ21vdmUtaW4tcmlnaHQnKTtcbiAgICAgICAgICB0aGlzLmVtb2ppRmFsc2UuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnbW92ZS1pbi1sZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gRmxpcCBUcmFuc2l0aW9uIENoYW5nZXMgT24gQ29udHJvbGxlciBCdXR0b25cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjb250cm9sbGVyQnV0dG9uTW9kaWZpY2F0aW9uc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRyb2xsZXJCdXR0b25Nb2RpZmljYXRpb25zKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgdGV4dENoYW5nZSA9IGZ1bmN0aW9uIHRleHRDaGFuZ2UodGV4dCkge1xuICAgICAgICAgIF90aGlzMy5zaG93QWxsQ2FyZHMuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMzLnRyYWNrZXIpIHtcbiAgICAgICAgICAgIHRleHRDaGFuZ2UoJ0xldCBtZSBndWVzcyEgJm5ic3A7ICYjMTI4NjQwOycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0Q2hhbmdlKCdKdXN0IHNob3cgYWxsISAmbmJzcDsgJiMxMjg2NDA7Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgdGhpcy5zaG93QWxsQ2FyZHMuY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZS1pbi1sYXN0LW1vbWVudCcpO1xuICAgICAgfSAvLyBCYXNpYyBBbmltYXRpb24gXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0WkluZGV4VG9NaW5pbXVtQW5kUmVtb3ZlQW5pbWF0aW9uQ2xhc3NcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRaSW5kZXhUb01pbmltdW1BbmRSZW1vdmVBbmltYXRpb25DbGFzcyhtb3ZlZF9pdGVtKSB7XG4gICAgICAgIG1vdmVkX2l0ZW0uc3R5bGUuekluZGV4ID0gLTQ7XG4gICAgICAgIG1vdmVkX2l0ZW0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoLTMwZGVnKVwiO1xuICAgICAgICBtb3ZlZF9pdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZmxpcENhcmRJbk1pZGRsZU9mQW5pbWF0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZmxpcENhcmRJbk1pZGRsZU9mQW5pbWF0aW9uKGNhcmQpIHtcbiAgICAgICAgdmFyIGZyb250ID0gY2FyZC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdmFyIGJhY2sgPSBmcm9udC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGZyb250LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2YXRlLWZsaXAtMScpO1xuICAgICAgICBiYWNrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2YXRlLWZsaXAtMicpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhbmltYXRlQ2FyZFRvRXhpdEFuZFJlRW50ZXJDb250YWluZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbmltYXRlQ2FyZFRvRXhpdEFuZFJlRW50ZXJDb250YWluZXIoY2FyZCkge1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcbiAgICAgICAgdmFyIG1vdmVkX2l0ZW0gPSB0aGlzLmNhcmRzLnNoaWZ0KCk7XG4gICAgICAgIHZhciByb3RhdGUgPSAwLFxuICAgICAgICAgICAgekluZGV4ID0gMDtcblxuICAgICAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHRoaXMuY2FyZHMpLFxuICAgICAgICAgICAgX3N0ZXAyO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgIHZhciBfY2FyZCA9IF9zdGVwMi52YWx1ZTtcbiAgICAgICAgICAgIF9jYXJkLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKFwiLmNvbmNhdChyb3RhdGUsIFwiZGVnKVwiKTtcbiAgICAgICAgICAgIF9jYXJkLnN0eWxlLnpJbmRleCA9IFwiXCIuY29uY2F0KHpJbmRleCk7XG4gICAgICAgICAgICByb3RhdGUgLT0gMTAsIHpJbmRleCAtPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMi5mKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2V0WkluZGV4VG9NaW5pbXVtQW5kUmVtb3ZlQW5pbWF0aW9uQ2xhc3MuYmluZCh0aGlzLCBtb3ZlZF9pdGVtKSwgNTAwMCk7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5mbGlwQ2FyZEluTWlkZGxlT2ZBbmltYXRpb24uYmluZCh0aGlzLCBtb3ZlZF9pdGVtKSwgMTAwMCk7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5mbGlwQ2FyZEluTWlkZGxlT2ZBbmltYXRpb24uYmluZCh0aGlzLCBtb3ZlZF9pdGVtKSwgMzUwMCk7XG4gICAgICAgIHRoaXMuY2FyZHMucHVzaChtb3ZlZF9pdGVtKTtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jYXJkc1swXTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2FyZEFuaW1hdGlvbnM7XG4gIH0oKTtcblxuICB2YXIgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZHNfX2NvbnRhaW5lcl9fY2VudGVyX19jYXJkJyk7XG4gIG5ldyBDYXJkQW5pbWF0aW9ucyhjYXJkcyk7XG59KTsiLCJpbXBvcnQgR2xpZGUsIHsgQnJlYWtwb2ludHMsIEF1dG9wbGF5IH0gZnJvbSAnQGdsaWRlanMvZ2xpZGUvZGlzdC9nbGlkZS5tb2R1bGFyLmVzbSc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKENhcm91c2VsKSB7XG4gIHZhciBmaXJzdF9jYXJvdXNlbCA9ICdbZGF0YS1tb2R1bGU9Q2Fyb3VzZWxdJztcbiAgdmFyIHNlY29uZF9jYXJvdXNlbCA9ICdbZGF0YS1jYXJvdXNlbD1DYXJvdXNlbF9iaXNdJztcblxuICBmb3IgKHZhciBfaSA9IDAsIF9hcnIgPSBbZmlyc3RfY2Fyb3VzZWwsIHNlY29uZF9jYXJvdXNlbF07IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgaXRlbSA9IF9hcnJbX2ldO1xuICAgIG5ldyBHbGlkZShpdGVtLCB7XG4gICAgICB0eXBlOiAnY2Fyb3VzZWwnLFxuICAgICAgYXV0b3BsYXk6IDEwLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDEyMDAwLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuYzogJ2xpbmVhcicsXG4gICAgICBzdGFydEF0OiAwLFxuICAgICAgcGVyVmlldzogMixcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDc2ODoge1xuICAgICAgICAgIHBlclZpZXc6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdhcDogOFxuICAgIH0pLm1vdW50KHtcbiAgICAgIEJyZWFrcG9pbnRzOiBCcmVha3BvaW50cyxcbiAgICAgIEF1dG9wbGF5OiBBdXRvcGxheVxuICAgIH0pO1xuICB9XG59KTsiLCJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmtleXMuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmVudHJpZXMuanNcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoQ2hhbmdlVGhlbWUpIHtcbiAgdmFyIHRoZW1lID0gW3tcbiAgICBcIi0tbWFpbi1mb250XCI6IFwicmdiKDMzLCAzMywgMzMpXCIsXG4gICAgXCItLW1haW4tYmdcIjogXCIjZmZmXCIsXG4gICAgXCItLXByb2plY3QtYmdcIjogXCIjRjJGMkYyXCIsXG4gICAgXCItLWRhcmstZm9udFwiOiBcIiM2NjY2NjZcIixcbiAgICBcIi0tc21hbGwtZm9udFwiOiBcIiM2NjY2NjZcIixcbiAgICBcIi0tc3ViLWNvbG9yLWRhcmtcIjogXCJyZ2JhKDAsIDAsIDAsIDAuNylcIixcbiAgICBcIi0tc3ViLWNvbG9yLWxpZ2h0XCI6IFwiI0YyRjJGMlwiXG4gIH0sIHtcbiAgICBcIi0tbWFpbi1mb250XCI6IFwiI2ZmZlwiLFxuICAgIFwiLS1tYWluLWJnXCI6IFwicmdiKDMzLCAzMywgMzMpXCIsXG4gICAgXCItLXByb2plY3QtYmdcIjogXCJyZ2IoMzMsIDMzLCAzMylcIixcbiAgICBcIi0tZGFyay1mb250XCI6IFwicmdiKDE4OCwgMTg4LCAxODgpXCIsXG4gICAgXCItLXNtYWxsLWZvbnRcIjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIixcbiAgICBcIi0tc3ViLWNvbG9yLWRhcmtcIjogXCJyZ2IoNDIsIDQyLCA0MilcIixcbiAgICBcIi0tc3ViLWNvbG9yLWxpZ2h0XCI6IFwicmdiKDQyLCA0MiwgNDIpXCJcbiAgfV07XG5cbiAgdmFyIFRoZW1lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaGVtZShjaGFuZ2VCdXR0b24pIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaGVtZSk7XG5cbiAgICAgIHRoaXMuY2hhbmdlQnV0dG9uID0gY2hhbmdlQnV0dG9uO1xuICAgICAgdGhpcy5yb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgdGhpcy50aGVtZSA9ICd3aGl0ZSc7XG4gICAgICB0aGlzLndoaXRlX3RoZW1lID0gJ2lubGluZSc7XG4gICAgICB0aGlzLmJsYWNrX3RoZW1lID0gJ25vbmUnO1xuICAgICAgdGhpcy5iaW5kRXZlbnQoKTtcbiAgICAgIHRoaXMuYWRhcHRUaGVtZSgpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUaGVtZSwgW3tcbiAgICAgIGtleTogXCJhZGFwdFRoZW1lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRhcHRUaGVtZSgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRfdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcblxuICAgICAgICBpZiAoY3VycmVudF90aGVtZSA9PSAnYmxhY2snKSB7XG4gICAgICAgICAgdGhpcy5tYWtlVGhlbWVDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYmluZEV2ZW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEV2ZW50KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmICghdGhpcy5jaGFuZ2VCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZpZ2F0aW9uX2hhY2snKSkge1xuICAgICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubWFrZVRoZW1lQ2hhbmdlcygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm1ha2VUaGVtZUNoYW5nZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBtYWtlVGhlbWVDaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLnRoZW1lID0gdGhpcy50aGVtZSA9PSAnd2hpdGUnID8gJ2JsYWNrJyA6ICd3aGl0ZSc7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoaXMudGhlbWUpO1xuICAgICAgICB0aGlzLnN3YXBDc3NWYXJzKCk7XG4gICAgICAgIHRoaXMuc3dhcFRoZW1lKCk7XG4gICAgICAgIHRoaXMuc3dhcEltYWdlcygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzd2FwQ3NzVmFyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN3YXBDc3NWYXJzKCkge1xuICAgICAgICB2YXIgY3VycmVudCA9IE9iamVjdC5rZXlzKHRoZW1lWzBdKTtcbiAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gT2JqZWN0LmtleXModGhlbWVbMV0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpbml0aWFsX3ZhbHVlID0gdGhlbWVbMF1bY3VycmVudFtpXV07XG4gICAgICAgICAgdGhlbWVbMF1bY3VycmVudFtpXV0gPSB0aGVtZVsxXVtyZXBsYWNlbWVudFtpXV07XG4gICAgICAgICAgdGhlbWVbMV1bY3VycmVudFtpXV0gPSBpbml0aWFsX3ZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN3YXBUaGVtZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN3YXBUaGVtZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhlbWVbMF0pLmZvckVhY2goZnVuY3Rpb24gKGt2X3BhaXIpIHtcbiAgICAgICAgICBfdGhpczIucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShrdl9wYWlyWzBdLCBrdl9wYWlyWzFdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMud2hpdGVfdGhlbWUgPSB0aGlzLndoaXRlX3RoZW1lID09ICdpbmxpbmUnID8gJ25vbmUnIDogJ2lubGluZSc7XG4gICAgICAgIHRoaXMuYmxhY2tfdGhlbWUgPSB0aGlzLmJsYWNrX3RoZW1lID09ICdub25lJyA/ICdpbmxpbmUnIDogJ25vbmUnO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzd2FwSW1hZ2VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3dhcEltYWdlcygpIHtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS10aGVtZV93aGl0ZVwiLCB0aGlzLndoaXRlX3RoZW1lKTtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS10aGVtZV9ibGFja1wiLCB0aGlzLmJsYWNrX3RoZW1lKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGhlbWU7XG4gIH0oKTtcblxuICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbW9kdWxlPUNoYW5nZVRoZW1lXScpO1xuICBuZXcgVGhlbWUoYnV0dG9uKTtcbn0pOyIsImltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoTWFnbmV0aWNFZmZlY3QpIHtcbiAgdmFyIGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyZWV0aW5nX19ib3gtcmlnaHQnKTtcbiAgYm94ZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBtYWduZXRpY0VmZmVjdCA9IGZ1bmN0aW9uIG1hZ25ldGljRWZmZWN0KGUpIHtcbiAgICAgIHZhciBpbm5lciA9IGVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgICB2YXIgeCA9IGUub2Zmc2V0WCxcbiAgICAgICAgICB5ID0gZS5vZmZzZXRZO1xuICAgICAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIHZhciBtb3ZlID0gMTU7XG4gICAgICB2YXIgeE1vdmUgPSB4IC8gd2lkdGggKiAobW92ZSAqIDIpIC0gbW92ZTtcbiAgICAgIHZhciB5TW92ZSA9IHkgLyBoZWlnaHQgKiAobW92ZSAqIDIpIC0gbW92ZTtcbiAgICAgIGlubmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh4TW92ZSwgXCJweCwgXCIpLmNvbmNhdCh5TW92ZSwgXCJweClcIik7XG4gICAgICBpZiAoZS50eXBlID09PSAnbW91c2VsZWF2ZScpIGlubmVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIH07XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1hZ25ldGljRWZmZWN0KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBtYWduZXRpY0VmZmVjdCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbWFnbmV0aWNFZmZlY3QpO1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbWFnbmV0aWNFZmZlY3QpO1xuICAgIH07XG4gIH0pO1xufSk7IiwiaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLml0ZXJhdG9yLmpzXCI7XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdIHx8IG9bXCJAQGl0ZXJhdG9yXCJdOyBpZiAoIWl0KSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IGl0LmNhbGwobyk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKE5hdmlnYXRpb25JbmRpY2F0b3IpIHtcbiAgZnVuY3Rpb24gYWN0aXZhdGVOYXZpZ2F0aW9uSW5kaWNhdG9yKCkge1xuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vZHVsZT1OYXZpZ2F0aW9uSW5kaWNhdG9yXScpO1xuICAgIGxpbmtzID0gbGlua3MucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcblxuICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihsaW5rcyksXG4gICAgICAgIF9zdGVwO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgIHZhciBpdGVtID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmID09IGl0ZW0uZmlyc3RDaGlsZC5ocmVmKSB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uX19zZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBfaXRlcmF0b3IuZigpO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2YXRlTmF2aWdhdGlvbkluZGljYXRvcigpO1xufSk7IiwiaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluY2x1ZGVzLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoUmVzcG9uc2l2ZU5hdmlnYXRpb24pIHtcbiAgdmFyIGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vZHVsZT1SZXNwb25zaXZlTmF2aWdhdGlvbl0nKTtcbiAgdmFyIGNvbnRlbnQgPSBoYW1idXJnZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBwbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF0ZScpO1xuXG4gICAgaWYgKCEoZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhjb250ZW50KSB8fCBlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGhhbWJ1cmdlcikpKSB7XG4gICAgICBpZiAoY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgcGxhdGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pOyIsImZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdIHx8IG9bXCJAQGl0ZXJhdG9yXCJdOyBpZiAoIWl0KSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IGl0LmNhbGwobyk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zbGljZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IHsgU2Nyb2xsVG9QbHVnaW4gfSBmcm9tIFwiZ3NhcC9TY3JvbGxUb1BsdWdpblwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyLCBTY3JvbGxUb1BsdWdpbik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKFNjcm9sbEFuaW1hdGlvbikge1xuICB2YXIgYW5pbWF0aW9uX3RhcmdldHMgPSBbXCIuZ3JlZXRpbmdfX2JveC1sZWZ0XCIsIFwiLmVtYWlsX19sZWZ0LWJveFwiXTtcblxuICBmb3IgKHZhciBfaSA9IDAsIF9hbmltYXRpb25fdGFyZ2V0cyA9IGFuaW1hdGlvbl90YXJnZXRzOyBfaSA8IF9hbmltYXRpb25fdGFyZ2V0cy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgaXRlbSA9IF9hbmltYXRpb25fdGFyZ2V0c1tfaV07XG4gICAgZ3NhcC50aW1lbGluZSh7XG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IGl0ZW0sXG4gICAgICAgIHN0YXJ0OiAndG9wIDEwMCUnLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOiAncGxheSBub25lIG5vbmUgbm9uZSdcbiAgICAgIH1cbiAgICB9KS5mcm9tVG8oaXRlbSwge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHk6IC0yMCxcbiAgICAgIHg6IC0yMFxuICAgIH0sIHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB5OiAwLFxuICAgICAgeDogMCxcbiAgICAgIGR1cmF0aW9uOiAxXG4gICAgfSk7XG4gIH0gLy8gSXBhZFxuXG5cbiAgZ3NhcC50aW1lbGluZSh7XG4gICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgdHJpZ2dlcjogJy5pcGFkX19pcGFkJyxcbiAgICAgIHN0YXJ0OiAndG9wIDEwMCUnLFxuICAgICAgdG9nZ2xlQWN0aW9uczogJ3BsYXkgcmVzZXQgcGxheSByZXNldCdcbiAgICB9XG4gIH0pLmZyb21UbygnLmlwYWRfX2lwYWQnLCB7XG4gICAgb3BhY2l0eTogMFxuICB9LCB7XG4gICAgb3BhY2l0eTogMSxcbiAgICBkdXJhdGlvbjogMlxuICB9KTtcbiAgdmFyIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pcGhvbmVfX2ltYWdlLWJveCcpO1xuXG4gIGZ1bmN0aW9uIGdldERpc3RhbmNlVG9FeGl0KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCA9PSBpbWFnZXNbMF0gPyAyMDAgOiAtMjAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3MoZWxlbWVudCkge1xuICAgIHJldHVybiBcIi5cIi5jb25jYXQoZWxlbWVudC5jbGFzc0xpc3RbMV0pO1xuICB9IC8vIElwaG9uZXNcblxuXG4gIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgIGdzYXAudGltZWxpbmUoe1xuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiBnZXRDbGFzcyhpbWFnZSksXG4gICAgICAgIHN0YXJ0OiAndG9wIDc1JScsXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6ICdwbGF5IHJlc2V0IHBsYXkgcmVzZXQnXG4gICAgICB9XG4gICAgfSkuZnJvbVRvKGdldENsYXNzKGltYWdlKSwge1xuICAgICAgeDogZ2V0RGlzdGFuY2VUb0V4aXQoaW1hZ2UpLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH0sIHtcbiAgICAgIHg6IDAsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZHVyYXRpb246IDJcbiAgICB9KTtcbiAgfSk7IC8vIENhcmRzIFxuXG4gIHZhciBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkc19fY29udGFpbmVyX19jZW50ZXJfX2NhcmQnKTtcbiAgdmFyIG15ZGVsYXkgPSAwO1xuXG4gIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihjYXJkcyksXG4gICAgICBfc3RlcDtcblxuICB0cnkge1xuICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgX2l0ZW0gPSBfc3RlcC52YWx1ZTtcbiAgICAgIGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgdHJpZ2dlcjogX2l0ZW0sXG4gICAgICAgICAgc3RhcnQ6ICd0b3AgMTAwJScsXG4gICAgICAgICAgdG9nZ2xlQWN0aW9uczogJ3BsYXkgbm9uZSBub25lIG5vbmUnXG4gICAgICAgIH1cbiAgICAgIH0pLmZyb21UbyhfaXRlbSwge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB5OiAtMTAwXG4gICAgICB9LCB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgIGRlbGF5OiBteWRlbGF5LFxuICAgICAgICBjbGVhclByb3BzOiBcInNjYWxlXCJcbiAgICAgIH0pO1xuICAgICAgbXlkZWxheSArPSAwLjU7XG4gICAgfSAvLyBQcm9qZWN0IERldGFpbFxuXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvci5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yLmYoKTtcbiAgfVxuXG4gIGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IFwiLnByb2plY3RfX2NvbnRhaW5lcl9fcmlnaHRcIixcbiAgICAgIHN0YXJ0OiAndG9wIDc1JScsXG4gICAgICB0b2dnbGVBY3Rpb25zOiAncGxheSByZXNldCBwbGF5IHJlc2V0J1xuICAgIH1cbiAgfSkuZnJvbVRvKFwiLnByb2plY3RfX2NvbnRhaW5lcl9fcmlnaHRcIiwge1xuICAgIHg6IDIwMCxcbiAgICBvcGFjaXR5OiAwXG4gIH0sIHtcbiAgICB4OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgZHVyYXRpb246IDJcbiAgfSk7IC8vIEdvYWxcblxuICB2YXIgZ29hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb2FsX19sZWZ0Jyk7XG4gIGdzYXAudGltZWxpbmUoe1xuICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIHRyaWdnZXI6IGdvYWwsXG4gICAgICBzdGFydDogJ3RvcCAxMDAlJyxcbiAgICAgIHRvZ2dsZUFjdGlvbnM6ICdwbGF5IG5vbmUgbm9uZSBub25lJ1xuICAgIH1cbiAgfSkuZnJvbVRvKGdvYWwsIHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHk6IC0yMCxcbiAgICB4OiAtMjBcbiAgfSwge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgeTogMCxcbiAgICB4OiAwLFxuICAgIGR1cmF0aW9uOiAxXG4gIH0pOyAvLyBGcmFtaW5nIGNhcmRzXG5cbiAgdmFyIGZyYW1pbmdfY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJhbWluZ19fY2FyZHNfX2NhcmQsIC5pbnNpZ2h0c19fdGFibGVfX3JpZ2h0X19wb2ludCcpO1xuICB2YXIgZGVsYXkgPSAwO1xuICB2YXIgY291bnRlciA9IDA7XG5cbiAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihmcmFtaW5nX2NhcmRzKSxcbiAgICAgIF9zdGVwMjtcblxuICB0cnkge1xuICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgX2l0ZW0yID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICB0cmlnZ2VyOiBfaXRlbTIsXG4gICAgICAgICAgc3RhcnQ6ICd0b3AgMTAwJScsXG4gICAgICAgICAgdG9nZ2xlQWN0aW9uczogJ3BsYXkgbm9uZSBub25lIG5vbmUnXG4gICAgICAgIH1cbiAgICAgIH0pLmZyb21UbyhfaXRlbTIsIHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgeTogLTEwMFxuICAgICAgfSwge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB5OiAwLFxuICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICBkZWxheTogZGVsYXksXG4gICAgICAgIGNsZWFyUHJvcHM6IFwic2NhbGVcIlxuICAgICAgfSk7XG4gICAgICBjb3VudGVyICs9IDE7XG5cbiAgICAgIGlmIChjb3VudGVyID09IDQpIHtcbiAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgfVxuXG4gICAgICBkZWxheSArPSAwLjU7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfaXRlcmF0b3IyLmUoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBfaXRlcmF0b3IyLmYoKTtcbiAgfVxufSk7IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKFNjcm9sbFVwKSB7XG4gIHZhciBFbGV2YXRvciA9IGZ1bmN0aW9uIEVsZXZhdG9yKG9wdGlvbnMpIHtcbiAgICBcInVzZSBzdHJpY3RcIjsgLy8gRWxlbWVudHNcblxuICAgIHZhciBib2R5ID0gbnVsbDsgLy8gU2Nyb2xsIHZhcnNcblxuICAgIHZhciBhbmltYXRpb24gPSBudWxsO1xuICAgIHZhciBkdXJhdGlvbiA9IG51bGw7IC8vIG1zXG5cbiAgICB2YXIgY3VzdG9tRHVyYXRpb24gPSBmYWxzZTtcbiAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IG51bGw7XG4gICAgdmFyIGVuZFBvc2l0aW9uID0gMDtcbiAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IG51bGw7XG4gICAgdmFyIHZlcnRpY2FsUGFkZGluZyA9IG51bGw7XG4gICAgdmFyIGVsZXZhdGluZyA9IGZhbHNlO1xuICAgIHZhciBzdGFydENhbGxiYWNrO1xuICAgIHZhciBtYWluQXVkaW87XG4gICAgdmFyIGVuZEF1ZGlvO1xuICAgIHZhciBlbmRDYWxsYmFjaztcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgLyoqXHJcbiAgICAgKiBVdGlsc1xyXG4gICAgICovXG4gICAgLy8gVGhhbmtzIE1yIFBlbm5lciAtIGh0dHA6Ly9yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cblxuICAgIGZ1bmN0aW9uIGVhc2VJbk91dFF1YWQodCwgYiwgYywgZCkge1xuICAgICAgdCAvPSBkIC8gMjtcbiAgICAgIGlmICh0IDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuICAgICAgdC0tO1xuICAgICAgcmV0dXJuIC1jIC8gMiAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHRlbmRQYXJhbWV0ZXJzKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG4gICAgICBmb3IgKHZhciBvcHRpb24gaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgdmFyIHQgPSBvcHRpb25zW29wdGlvbl0gPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9uICE9PSBcImZ1bmN0aW9uXCI7XG5cbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICBvcHRpb25zW29wdGlvbl0gPSBkZWZhdWx0c1tvcHRpb25dO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZlcnRpY2FsT2Zmc2V0KGVsZW1lbnQpIHtcbiAgICAgIHZhciB2ZXJ0aWNhbE9mZnNldCA9IDA7XG5cbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIHZlcnRpY2FsT2Zmc2V0ICs9IGVsZW1lbnQub2Zmc2V0VG9wIHx8IDA7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcnRpY2FsUGFkZGluZykge1xuICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IHZlcnRpY2FsT2Zmc2V0IC0gdmVydGljYWxQYWRkaW5nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVydGljYWxPZmZzZXQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTWFpblxyXG4gICAgICovXG4gICAgLy8gVGltZSBpcyBwYXNzZWQgdGhyb3VnaCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHdoYXQgYSB3b3JsZCFcblxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZUxvb3AodGltZSkge1xuICAgICAgaWYgKCFzdGFydFRpbWUpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRpbWVTb0ZhciA9IHRpbWUgLSBzdGFydFRpbWU7XG4gICAgICB2YXIgZWFzZWRQb3NpdGlvbiA9IGVhc2VJbk91dFF1YWQodGltZVNvRmFyLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb24sIGR1cmF0aW9uKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBlYXNlZFBvc2l0aW9uKTtcblxuICAgICAgaWYgKHRpbWVTb0ZhciA8IGR1cmF0aW9uKSB7XG4gICAgICAgIGFuaW1hdGlvbiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlTG9vcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25GaW5pc2hlZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxldmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChlbGV2YXRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbGV2YXRpbmcgPSB0cnVlO1xuICAgICAgc3RhcnRQb3NpdGlvbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gICAgICB1cGRhdGVFbmRQb3NpdGlvbigpOyAvLyBObyBjdXN0b20gZHVyYXRpb24gc2V0LCBzbyB3ZSB0cmF2ZWwgYXQgcGl4ZWxzIHBlciBtaWxsaXNlY29uZC4gKDAuNzVweCBwZXIgbXMpXG5cbiAgICAgIGlmICghY3VzdG9tRHVyYXRpb24pIHtcbiAgICAgICAgZHVyYXRpb24gPSBNYXRoLmFicyhlbmRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb24pICogMS41O1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZUxvb3ApOyAvLyBTdGFydCBtdXNpYyFcblxuICAgICAgaWYgKG1haW5BdWRpbykge1xuICAgICAgICBtYWluQXVkaW8ucGxheSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhcnRDYWxsYmFjaykge1xuICAgICAgICBzdGFydENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGJyb3dzZXJNZWV0c1JlcXVpcmVtZW50cygpIHtcbiAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIHdpbmRvdy5BdWRpbyAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldFBvc2l0aW9ucygpIHtcbiAgICAgIHN0YXJ0VGltZSA9IG51bGw7XG4gICAgICBzdGFydFBvc2l0aW9uID0gbnVsbDtcbiAgICAgIGVsZXZhdGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUVuZFBvc2l0aW9uKCkge1xuICAgICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgZW5kUG9zaXRpb24gPSBnZXRWZXJ0aWNhbE9mZnNldCh0YXJnZXRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRpb25GaW5pc2hlZCgpIHtcbiAgICAgIHJlc2V0UG9zaXRpb25zKCk7IC8vIFN0b3AgbXVzaWMhXG5cbiAgICAgIGlmIChtYWluQXVkaW8pIHtcbiAgICAgICAgbWFpbkF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIG1haW5BdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRBdWRpbykge1xuICAgICAgICBlbmRBdWRpby5wbGF5KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRDYWxsYmFjaykge1xuICAgICAgICBlbmRDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uV2luZG93Qmx1cigpIHtcbiAgICAgIC8vIElmIGFuaW1hdGluZywgZ28gc3RyYWlnaHQgdG8gdGhlIHRvcC4gQW5kIHBsYXkgbm8gbW9yZSBtdXNpYy5cbiAgICAgIGlmIChlbGV2YXRpbmcpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgcmVzZXRQb3NpdGlvbnMoKTtcblxuICAgICAgICBpZiAobWFpbkF1ZGlvKSB7XG4gICAgICAgICAgbWFpbkF1ZGlvLnBhdXNlKCk7XG4gICAgICAgICAgbWFpbkF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUVuZFBvc2l0aW9uKCk7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBlbmRQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZEVsZXZhdGVUb0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGF0LmVsZXZhdGUsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoXCJvbmNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB1cGRhdGVFbmRQb3NpdGlvbigpO1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBlbmRQb3NpdGlvbjtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IGVuZFBvc2l0aW9uO1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgZW5kUG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KF9vcHRpb25zKSB7XG4gICAgICAvLyBUYWtlIHRoZSBzdGFpcnMgaW5zdGVhZFxuICAgICAgaWYgKCFicm93c2VyTWVldHNSZXF1aXJlbWVudHMoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIEJpbmQgdG8gZWxlbWVudCBjbGljayBldmVudC5cblxuXG4gICAgICBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgZHVyYXRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgbWFpbkF1ZGlvOiBmYWxzZSxcbiAgICAgICAgZW5kQXVkaW86IGZhbHNlLFxuICAgICAgICBwcmVsb2FkQXVkaW86IHRydWUsXG4gICAgICAgIGxvb3BBdWRpbzogdHJ1ZSxcbiAgICAgICAgc3RhcnRDYWxsYmFjazogbnVsbCxcbiAgICAgICAgZW5kQ2FsbGJhY2s6IG51bGxcbiAgICAgIH07XG4gICAgICBfb3B0aW9ucyA9IGV4dGVuZFBhcmFtZXRlcnMoX29wdGlvbnMsIGRlZmF1bHRzKTtcblxuICAgICAgaWYgKF9vcHRpb25zLmVsZW1lbnQpIHtcbiAgICAgICAgYmluZEVsZXZhdGVUb0VsZW1lbnQoX29wdGlvbnMuZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfb3B0aW9ucy5kdXJhdGlvbikge1xuICAgICAgICBjdXN0b21EdXJhdGlvbiA9IHRydWU7XG4gICAgICAgIGR1cmF0aW9uID0gX29wdGlvbnMuZHVyYXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChfb3B0aW9ucy50YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSBfb3B0aW9ucy50YXJnZXRFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoX29wdGlvbnMudmVydGljYWxQYWRkaW5nKSB7XG4gICAgICAgIHZlcnRpY2FsUGFkZGluZyA9IF9vcHRpb25zLnZlcnRpY2FsUGFkZGluZztcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIG9uV2luZG93Qmx1ciwgZmFsc2UpO1xuXG4gICAgICBpZiAoX29wdGlvbnMubWFpbkF1ZGlvKSB7XG4gICAgICAgIG1haW5BdWRpbyA9IG5ldyBBdWRpbyhfb3B0aW9ucy5tYWluQXVkaW8pO1xuICAgICAgICBtYWluQXVkaW8uc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBfb3B0aW9ucy5wcmVsb2FkQXVkaW8pO1xuICAgICAgICBtYWluQXVkaW8uc2V0QXR0cmlidXRlKFwibG9vcFwiLCBfb3B0aW9ucy5sb29wQXVkaW8pO1xuICAgICAgfVxuXG4gICAgICBpZiAoX29wdGlvbnMuZW5kQXVkaW8pIHtcbiAgICAgICAgZW5kQXVkaW8gPSBuZXcgQXVkaW8oX29wdGlvbnMuZW5kQXVkaW8pO1xuICAgICAgICBlbmRBdWRpby5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwidHJ1ZVwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9vcHRpb25zLmVuZENhbGxiYWNrKSB7XG4gICAgICAgIGVuZENhbGxiYWNrID0gX29wdGlvbnMuZW5kQ2FsbGJhY2s7XG4gICAgICB9XG5cbiAgICAgIGlmIChfb3B0aW9ucy5zdGFydENhbGxiYWNrKSB7XG4gICAgICAgIHN0YXJ0Q2FsbGJhY2sgPSBfb3B0aW9ucy5zdGFydENhbGxiYWNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluaXQob3B0aW9ucyk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEVsZXZhdG9yO1xuICB9XG5cbiAgdmFyIHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVsZXZhdG9yLWJ1dHRvbicpO1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlRWxldmF0b3IoKSB7XG4gICAgdmFyIGVsZXZhdG9yID0gbmV3IEVsZXZhdG9yKHtcbiAgICAgIGVsZW1lbnQ6IHN0YXJ0LFxuICAgICAgZHVyYXRpb246IDEwMDBcbiAgICB9KTtcbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsZXZhdG9yLmVsZXZhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlRWxldmF0b3IoKTtcbn0pOyIsImltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoU21vb3RoU2Nyb2xsKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJykuZm9yRWFjaChmdW5jdGlvbiAoYW5jaG9yKSB7XG4gICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pOyIsImltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLm1hdGNoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qc1wiO1xuXG4vKlxyXG4gKiBAcHJlc2VydmUgZGF0YXNldCBwb2x5ZmlsbCBmb3IgSUUgPCAxMS4gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudC9kYXRhc2V0IGFuZCBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1kYXRhc2V0XHJcbiAqXHJcbiAqIEBhdXRob3IgU2hpcnRsZXNzS2lyayBjb3B5cmlnaHQgMjAxNVxyXG4gKiBAbGljZW5zZSBXVEZQTCAoaHR0cDovL3d3dy53dGZwbC5uZXQvdHh0L2NvcHlpbmcpXHJcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKiBnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4vKiBqc2xpbnQgbm9tZW46IHRydWUsIHJlZ2V4cDogdHJ1ZSwgdW5wYXJhbTogdHJ1ZSAqL1xuKGZ1bmN0aW9uIGRhdGFzZXRNb2R1bGUoZ2xvYmFsLCBkZWZpbml0aW9uKSB7XG4gIC8vIG5vbi1leHBvcnRpbmcgbW9kdWxlIG1hZ2ljIGRhbmNlXG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgYW1kID0gJ2FtZCcsXG4gICAgICBleHBvcnRzID0gJ2V4cG9ydHMnOyAvLyBrZWVwcyB0aGUgbWV0aG9kIG5hbWVzIGZvciBDb21tb25KUyAvIEFNRCBmcm9tIGJlaW5nIGNvbXBpbGVkIHRvIHNpbmdsZSBjaGFyYWN0ZXIgdmFyaWFibGVcblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmVbYW1kXSkge1xuICAgIGRlZmluZShmdW5jdGlvbiBkZWZpbmVyKCkge1xuICAgICAgcmV0dXJuIGRlZmluaXRpb24oZ2xvYmFsKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnZnVuY3Rpb24nICYmIG1vZHVsZVtleHBvcnRzXSkge1xuICAgIG1vZHVsZVtleHBvcnRzXSA9IGRlZmluaXRpb24oZ2xvYmFsKTtcbiAgfSBlbHNlIHtcbiAgICBkZWZpbml0aW9uKGdsb2JhbCk7XG4gIH1cbn0pKHdpbmRvdywgZnVuY3Rpb24gZGF0YXNldFBvbHlmaWxsKGdsb2JhbCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGF0dHJpYnV0ZSxcbiAgICAgIGF0dHJpYnV0ZXMsXG4gICAgICBjb3VudGVyLFxuICAgICAgZGFzaCxcbiAgICAgIGRhdGFSZWdFeCxcbiAgICAgIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50LFxuICAgICAgaGFzRXZlbnRMaXN0ZW5lcixcbiAgICAgIGxlbmd0aCxcbiAgICAgIG1hdGNoLFxuICAgICAgbXV0YXRpb25TdXBwb3J0LFxuICAgICAgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ18nKSxcbiAgICAgIERPTUF0dHJNb2RpZmllZCA9ICdET01BdHRyTW9kaWZpZWQnO1xuXG4gIGZ1bmN0aW9uIGNsZWFyRGF0YXNldChldmVudCkge1xuICAgIGRlbGV0ZSBldmVudC50YXJnZXQuX2RhdGFzZXRDYWNoZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShkYXNoLCBmdW5jdGlvbiAobSwgbGV0dGVyKSB7XG4gICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREYXRhc2V0KCkge1xuICAgIHZhciBkYXRhc2V0ID0ge307XG4gICAgYXR0cmlidXRlcyA9IHRoaXMuYXR0cmlidXRlcztcblxuICAgIGZvciAoY291bnRlciA9IDAsIGxlbmd0aCA9IGF0dHJpYnV0ZXMubGVuZ3RoOyBjb3VudGVyIDwgbGVuZ3RoOyBjb3VudGVyICs9IDEpIHtcbiAgICAgIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNbY291bnRlcl07XG4gICAgICBtYXRjaCA9IGF0dHJpYnV0ZS5uYW1lLm1hdGNoKGRhdGFSZWdFeCk7XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBkYXRhc2V0W3RvQ2FtZWxDYXNlKG1hdGNoWzFdKV0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFzZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBtdXRhdGlvbigpIHtcbiAgICBpZiAoaGFzRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGVzdC5yZW1vdmVFdmVudExpc3RlbmVyKERPTUF0dHJNb2RpZmllZCwgbXV0YXRpb24sIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVzdC5kZXRhY2hFdmVudCgnb24nICsgRE9NQXR0ck1vZGlmaWVkLCBtdXRhdGlvbik7XG4gICAgfVxuXG4gICAgbXV0YXRpb25TdXBwb3J0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0ZXN0LmRhdGFzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5cbiAgZGFzaCA9IC9cXC0oW2Etel0pL2lnO1xuICBkYXRhUmVnRXggPSAvXmRhdGFcXC0oLispLztcbiAgaGFzRXZlbnRMaXN0ZW5lciA9ICEhZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgbXV0YXRpb25TdXBwb3J0ID0gZmFsc2U7XG5cbiAgaWYgKGhhc0V2ZW50TGlzdGVuZXIpIHtcbiAgICB0ZXN0LmFkZEV2ZW50TGlzdGVuZXIoRE9NQXR0ck1vZGlmaWVkLCBtdXRhdGlvbiwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIHRlc3QuYXR0YWNoRXZlbnQoJ29uJyArIERPTUF0dHJNb2RpZmllZCwgbXV0YXRpb24pO1xuICB9IC8vIHRyaWdnZXIgZXZlbnQgKGlmIHN1cHBvcnRlZClcblxuXG4gIHRlc3Quc2V0QXR0cmlidXRlKCdmb28nLCAnYmFyJyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWwuRWxlbWVudC5wcm90b3R5cGUsICdkYXRhc2V0Jywge1xuICAgIGdldDogbXV0YXRpb25TdXBwb3J0ID8gZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKCF0aGlzLl9kYXRhc2V0Q2FjaGUpIHtcbiAgICAgICAgdGhpcy5fZGF0YXNldENhY2hlID0gZ2V0RGF0YXNldC5jYWxsKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fZGF0YXNldENhY2hlO1xuICAgIH0gOiBnZXREYXRhc2V0XG4gIH0pO1xuXG4gIGlmIChtdXRhdGlvblN1cHBvcnQgJiYgaGFzRXZlbnRMaXN0ZW5lcikge1xuICAgIC8vIDwgSUU5IHN1cHBvcnRzIG5laXRoZXJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKERPTUF0dHJNb2RpZmllZCwgY2xlYXJEYXRhc2V0LCBmYWxzZSk7XG4gIH1cbn0pOyIsImltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qc1wiO1xuXG5mdW5jdGlvbiByZXF1aXJlQWxsKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKTtcbn1cblxucmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ljb25zJywgdHJ1ZSwgL1xcLnN2ZyQvKSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1hcnJvdy1ib3R0b20tdXNhZ2VcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICB1cmw6IFwiaWNvbnMvXCIgKyBcInNwcml0ZS5zdmcjaWNvbi1hcnJvdy1ib3R0b20tdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1hcnJvdy1yaWdodC11c2FnZVwiLFxuICAgICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICAgIHVybDogXCJpY29ucy9cIiArIFwic3ByaXRlLnN2ZyNpY29uLWFycm93LXJpZ2h0LXVzYWdlXCIsXG4gICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51cmw7XG4gICAgICB9XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGlkOiBcImljb24tY2FyZXQtcmlnaHQtdXNhZ2VcIixcbiAgICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgICB1cmw6IFwiaWNvbnMvXCIgKyBcInNwcml0ZS5zdmcjaWNvbi1jYXJldC1yaWdodC11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgICBpZDogXCJpY29uLWNsb3NlLXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgdXJsOiBcImljb25zL1wiICsgXCJzcHJpdGUuc3ZnI2ljb24tY2xvc2UtdXNhZ2VcIixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVybDtcbiAgICAgIH1cbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgaWQ6IFwiaWNvbi1tZW51LXVzYWdlXCIsXG4gICAgICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgdXJsOiBcImljb25zL1wiICsgXCJzcHJpdGUuc3ZnI2ljb24tbWVudS11c2FnZVwiLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xuICAgICAgfVxuICAgIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXJyb3ctYm90dG9tLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2Fycm93LWJvdHRvbS5zdmdcIixcblx0XCIuL2Fycm93LXJpZ2h0LnN2Z1wiOiBcIi4vc3JjL2ljb25zL2Fycm93LXJpZ2h0LnN2Z1wiLFxuXHRcIi4vY2FyZXQtcmlnaHQuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvY2FyZXQtcmlnaHQuc3ZnXCIsXG5cdFwiLi9jbG9zZS5zdmdcIjogXCIuL3NyYy9pY29ucy9jbG9zZS5zdmdcIixcblx0XCIuL21lbnUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMvbWVudS5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaWNvbnMgc3luYyByZWN1cnNpdmUgXFxcXC5zdmckXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuXCI6IFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiLFxuXHRcIi4vXCI6IFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiLFxuXHRcIi4vaW5kZXhcIjogXCIuL3NyYy9zY3JpcHRzL2luZGV4LmpzXCIsXG5cdFwiLi9pbmRleC5qc1wiOiBcIi4vc3JjL3NjcmlwdHMvaW5kZXguanNcIixcblx0XCIuL21vZHVsZXMvQ2FyZHNcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2FyZHMuanNcIixcblx0XCIuL21vZHVsZXMvQ2FyZHMuanNcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2FyZHMuanNcIixcblx0XCIuL21vZHVsZXMvQ2Fyb3VzZWxcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2Fyb3VzZWwuanNcIixcblx0XCIuL21vZHVsZXMvQ2Fyb3VzZWwuanNcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2Fyb3VzZWwuanNcIixcblx0XCIuL21vZHVsZXMvQ2hhbmdlVGhlbWVcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2hhbmdlVGhlbWUuanNcIixcblx0XCIuL21vZHVsZXMvQ2hhbmdlVGhlbWUuanNcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2hhbmdlVGhlbWUuanNcIixcblx0XCIuL21vZHVsZXMvTWFnbmV0aWNFZmZlY3RcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvTWFnbmV0aWNFZmZlY3QuanNcIixcblx0XCIuL21vZHVsZXMvTWFnbmV0aWNFZmZlY3QuanNcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvTWFnbmV0aWNFZmZlY3QuanNcIixcblx0XCIuL21vZHVsZXMvTmF2aWdhdGlvbkluZGljYXRvclwiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9OYXZpZ2F0aW9uSW5kaWNhdG9yLmpzXCIsXG5cdFwiLi9tb2R1bGVzL05hdmlnYXRpb25JbmRpY2F0b3IuanNcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvTmF2aWdhdGlvbkluZGljYXRvci5qc1wiLFxuXHRcIi4vbW9kdWxlcy9SZXNwb25zaXZlTmF2aWdhdGlvblwiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9SZXNwb25zaXZlTmF2aWdhdGlvbi5qc1wiLFxuXHRcIi4vbW9kdWxlcy9SZXNwb25zaXZlTmF2aWdhdGlvbi5qc1wiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9SZXNwb25zaXZlTmF2aWdhdGlvbi5qc1wiLFxuXHRcIi4vbW9kdWxlcy9TY3JvbGxBbmltYXRpb25cIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvU2Nyb2xsQW5pbWF0aW9uLmpzXCIsXG5cdFwiLi9tb2R1bGVzL1Njcm9sbEFuaW1hdGlvbi5qc1wiOiBcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9TY3JvbGxBbmltYXRpb24uanNcIixcblx0XCIuL21vZHVsZXMvU2Nyb2xsVXBcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvU2Nyb2xsVXAuanNcIixcblx0XCIuL21vZHVsZXMvU2Nyb2xsVXAuanNcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvU2Nyb2xsVXAuanNcIixcblx0XCIuL21vZHVsZXMvU21vb3RoU2Nyb2xsXCI6IFwiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Ntb290aFNjcm9sbC5qc1wiLFxuXHRcIi4vbW9kdWxlcy9TbW9vdGhTY3JvbGwuanNcIjogXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvU21vb3RoU2Nyb2xsLmpzXCIsXG5cdFwiLi9wb2x5ZmlsbC9kYXRhc2V0XCI6IFwiLi9zcmMvc2NyaXB0cy9wb2x5ZmlsbC9kYXRhc2V0LmpzXCIsXG5cdFwiLi9wb2x5ZmlsbC9kYXRhc2V0LmpzXCI6IFwiLi9zcmMvc2NyaXB0cy9wb2x5ZmlsbC9kYXRhc2V0LmpzXCIsXG5cdFwiLi9wb3N0LWJ1aWxkXCI6IFwiLi9zcmMvc2NyaXB0cy9wb3N0LWJ1aWxkLmpzXCIsXG5cdFwiLi9wb3N0LWJ1aWxkLmpzXCI6IFwiLi9zcmMvc2NyaXB0cy9wb3N0LWJ1aWxkLmpzXCJcbn07XG5cbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH1cblxuXHRcdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7IH07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3NyYy9zY3JpcHRzIGxhenkgcmVjdXJzaXZlIF4uKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSBmdW5jdGlvbihyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpIHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGNodW5rSWRzID0gZGVmZXJyZWRbaV1bMF07XG5cdFx0dmFyIGZuID0gZGVmZXJyZWRbaV1bMV07XG5cdFx0dmFyIHByaW9yaXR5ID0gZGVmZXJyZWRbaV1bMl07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pOyB9KSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuLy8gU2luY2UgYWxsIHJlZmVyZW5jZWQgY2h1bmtzIGFyZSBhbHJlYWR5IGluY2x1ZGVkXG4vLyBpbiB0aGlzIGZpbGUsIHRoaXMgZnVuY3Rpb24gaXMgZW1wdHkgaGVyZS5cbl9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSBmdW5jdGlvbihjaHVua0lkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDA7IH07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gZnVuY3Rpb24ocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzJdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja19zdGFydGVyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tfc3RhcnRlclwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvaW5kZXguanNcIik7IH0pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2FyZHMuanNcIik7IH0pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2Fyb3VzZWwuanNcIik7IH0pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2hhbmdlVGhlbWUuanNcIik7IH0pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvTWFnbmV0aWNFZmZlY3QuanNcIik7IH0pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvTmF2aWdhdGlvbkluZGljYXRvci5qc1wiKTsgfSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9SZXNwb25zaXZlTmF2aWdhdGlvbi5qc1wiKTsgfSlcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvbW9kdWxlcy9TY3JvbGxBbmltYXRpb24uanNcIik7IH0pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvU2Nyb2xsVXAuanNcIik7IH0pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL21vZHVsZXMvU21vb3RoU2Nyb2xsLmpzXCIpOyB9KVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgZnVuY3Rpb24oKSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9wb2x5ZmlsbC9kYXRhc2V0LmpzXCIpOyB9KVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL3Bvc3QtYnVpbGQuanNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9