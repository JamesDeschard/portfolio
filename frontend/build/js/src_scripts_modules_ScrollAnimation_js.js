"use strict";
(self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || []).push([["src_scripts_modules_ScrollAnimation_js"],{

/***/ "./src/scripts/modules/ScrollAnimation.js":
/*!************************************************!*\
  !*** ./src/scripts/modules/ScrollAnimation.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");




gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger, gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_3__.ScrollToPlugin); // eslint-disable-next-line no-unused-vars

/* harmony default export */ __webpack_exports__["default"] = (function (ScrollAnimation) {
  gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
    scrollTrigger: {
      trigger: '.ipad__ipad',
      start: 'top 100%',
      toggleActions: 'play reset play reset'
    }
  }).fromTo('.ipad__ipad', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 4
  });
  var images = document.querySelectorAll('.iphone__image-box');

  function getDistanceToExit(element) {
    return element == images[0] ? 200 : -200;
  }

  function getClass(element) {
    return ".".concat(element.classList[1]);
  }

  images.forEach(function (image) {
    gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
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
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3NjcmlwdHNfbW9kdWxlc19TY3JvbGxBbmltYXRpb25fanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL1Njcm9sbEFuaW1hdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qc1wiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuaW1wb3J0IHsgU2Nyb2xsVG9QbHVnaW4gfSBmcm9tIFwiZ3NhcC9TY3JvbGxUb1BsdWdpblwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyLCBTY3JvbGxUb1BsdWdpbik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKFNjcm9sbEFuaW1hdGlvbikge1xuICBnc2FwLnRpbWVsaW5lKHtcbiAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICB0cmlnZ2VyOiAnLmlwYWRfX2lwYWQnLFxuICAgICAgc3RhcnQ6ICd0b3AgMTAwJScsXG4gICAgICB0b2dnbGVBY3Rpb25zOiAncGxheSByZXNldCBwbGF5IHJlc2V0J1xuICAgIH1cbiAgfSkuZnJvbVRvKCcuaXBhZF9faXBhZCcsIHtcbiAgICBvcGFjaXR5OiAwXG4gIH0sIHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIGR1cmF0aW9uOiA0XG4gIH0pO1xuICB2YXIgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlwaG9uZV9faW1hZ2UtYm94Jyk7XG5cbiAgZnVuY3Rpb24gZ2V0RGlzdGFuY2VUb0V4aXQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50ID09IGltYWdlc1swXSA/IDIwMCA6IC0yMDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDbGFzcyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIFwiLlwiLmNvbmNhdChlbGVtZW50LmNsYXNzTGlzdFsxXSk7XG4gIH1cblxuICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogZ2V0Q2xhc3MoaW1hZ2UpLFxuICAgICAgICBzdGFydDogJ3RvcCA3NSUnLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOiAncGxheSByZXNldCBwbGF5IHJlc2V0J1xuICAgICAgfVxuICAgIH0pLmZyb21UbyhnZXRDbGFzcyhpbWFnZSksIHtcbiAgICAgIHg6IGdldERpc3RhbmNlVG9FeGl0KGltYWdlKSxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9LCB7XG4gICAgICB4OiAwLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGR1cmF0aW9uOiAyXG4gICAgfSk7XG4gIH0pO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9