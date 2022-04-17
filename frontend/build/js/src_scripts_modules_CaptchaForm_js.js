"use strict";
(self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || []).push([["src_scripts_modules_CaptchaForm_js"],{

/***/ "./src/scripts/modules/CaptchaForm.js":
/*!********************************************!*\
  !*** ./src/scripts/modules/CaptchaForm.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);


// eslint-disable-next-line no-unused-vars
/* harmony default export */ __webpack_exports__["default"] = (function (CaptchaForm) {
  var box_1 = document.querySelector('box-1');
  var box_2 = document.querySelector('box-2');
  var box_1_btn = box_1.querySelector('button');
  box_1_btn.addEventListener('click', function () {
    var form_content = box_1.querySelector('input');
    var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if (form_content.value.match(mail_format)) {
      box_1.classList.add('move-out-left');
      box_2.classList.toggle('visible');
      box_2.classList.toggle('move-in-right');
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3NjcmlwdHNfbW9kdWxlc19DYXB0Y2hhRm9ybV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9zY3JpcHRzL21vZHVsZXMvQ2FwdGNoYUZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLm1hdGNoLmpzXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoQ2FwdGNoYUZvcm0pIHtcbiAgdmFyIGJveF8xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm94LTEnKTtcbiAgdmFyIGJveF8yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm94LTInKTtcbiAgdmFyIGJveF8xX2J0biA9IGJveF8xLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICBib3hfMV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZvcm1fY29udGVudCA9IGJveF8xLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgdmFyIG1haWxfZm9ybWF0ID0gL153KyhbLi1dP3crKSpAdysoWy4tXT93KykqKC53ezIsM30pKyQvO1xuXG4gICAgaWYgKGZvcm1fY29udGVudC52YWx1ZS5tYXRjaChtYWlsX2Zvcm1hdCkpIHtcbiAgICAgIGJveF8xLmNsYXNzTGlzdC5hZGQoJ21vdmUtb3V0LWxlZnQnKTtcbiAgICAgIGJveF8yLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbiAgICAgIGJveF8yLmNsYXNzTGlzdC50b2dnbGUoJ21vdmUtaW4tcmlnaHQnKTtcbiAgICB9XG4gIH0pO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9