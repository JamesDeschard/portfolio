"use strict";
(self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || []).push([["src_scripts_modules_Captch_js"],{

/***/ "./src/scripts/modules/Captch.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/Captch.js ***!
  \***************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3NjcmlwdHNfbW9kdWxlc19DYXB0Y2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0NhcHRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcubWF0Y2guanNcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChDYXB0Y2hhRm9ybSkge1xuICB2YXIgYm94XzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib3gtMScpO1xuICB2YXIgYm94XzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib3gtMicpO1xuICB2YXIgYm94XzFfYnRuID0gYm94XzEucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gIGJveF8xX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZm9ybV9jb250ZW50ID0gYm94XzEucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICB2YXIgbWFpbF9mb3JtYXQgPSAvXncrKFsuLV0/dyspKkB3KyhbLi1dP3crKSooLnd7MiwzfSkrJC87XG5cbiAgICBpZiAoZm9ybV9jb250ZW50LnZhbHVlLm1hdGNoKG1haWxfZm9ybWF0KSkge1xuICAgICAgYm94XzEuY2xhc3NMaXN0LmFkZCgnbW92ZS1vdXQtbGVmdCcpO1xuICAgICAgYm94XzIuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xuICAgICAgYm94XzIuY2xhc3NMaXN0LnRvZ2dsZSgnbW92ZS1pbi1yaWdodCcpO1xuICAgIH1cbiAgfSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=