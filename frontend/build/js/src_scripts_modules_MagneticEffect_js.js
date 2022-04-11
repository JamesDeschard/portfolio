"use strict";
(self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || []).push([["src_scripts_modules_MagneticEffect_js"],{

/***/ "./src/scripts/modules/MagneticEffect.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/MagneticEffect.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);

// eslint-disable-next-line no-unused-vars
/* harmony default export */ __webpack_exports__["default"] = (function (MagneticEffect) {
  var element = document.querySelector('.greeting__box-right-circle');
  console.log(element);

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3NjcmlwdHNfbW9kdWxlc19NYWduZXRpY0VmZmVjdF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9NYWduZXRpY0VmZmVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoTWFnbmV0aWNFZmZlY3QpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlZXRpbmdfX2JveC1yaWdodC1jaXJjbGUnKTtcbiAgY29uc29sZS5sb2coZWxlbWVudCk7XG5cbiAgdmFyIG1hZ25ldGljRWZmZWN0ID0gZnVuY3Rpb24gbWFnbmV0aWNFZmZlY3QoZSkge1xuICAgIHZhciBpbm5lciA9IGVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgdmFyIHggPSBlLm9mZnNldFgsXG4gICAgICAgIHkgPSBlLm9mZnNldFk7XG4gICAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIG1vdmUgPSAxNTtcbiAgICB2YXIgeE1vdmUgPSB4IC8gd2lkdGggKiAobW92ZSAqIDIpIC0gbW92ZTtcbiAgICB2YXIgeU1vdmUgPSB5IC8gaGVpZ2h0ICogKG1vdmUgKiAyKSAtIG1vdmU7XG4gICAgaW5uZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHhNb3ZlLCBcInB4LCBcIikuY29uY2F0KHlNb3ZlLCBcInB4KVwiKTtcbiAgICBpZiAoZS50eXBlID09PSAnbW91c2VsZWF2ZScpIGlubmVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICB9O1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbWFnbmV0aWNFZmZlY3QpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBtYWduZXRpY0VmZmVjdCk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtYWduZXRpY0VmZmVjdCk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbWFnbmV0aWNFZmZlY3QpO1xuICB9O1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9