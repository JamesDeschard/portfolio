"use strict";
(self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || []).push([["src_scripts_modules_ChangeTheme_js"],{

/***/ "./src/scripts/modules/ChangeTheme.js":
/*!********************************************!*\
  !*** ./src/scripts/modules/ChangeTheme.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    "--main-font": "rgba(0, 0, 0, 0.87)",
    "--main-bg": "#fff",
    "--dark-font": "rgba(0, 0, 0, 0.6)",
    "--sub-color-dark": "rgba(0, 0, 0, 0.7)",
    "--sub-color-light": "#F2F2F2"
  }, {
    "--main-font": "#fff",
    "--main-bg": "rgba(0, 0, 0, 0.87)",
    "--dark-font": "rgba(255, 255, 255, 0.7)",
    "--sub-color-dark": "rgba(51, 51, 51, 0.5)",
    "--sub-color-light": "rgba(51, 51, 51, 0.5)"
  }];

  var Theme = /*#__PURE__*/function () {
    function Theme(changeButton) {
      _classCallCheck(this, Theme);

      this.changeButton = changeButton;
      this.root = document.documentElement;
      this.white_theme = 'inline';
      this.black_theme = 'none';
      this.bindEvent();
    }

    _createClass(Theme, [{
      key: "bindEvent",
      value: function bindEvent() {
        var _this = this;

        this.changeButton.addEventListener('click', function () {
          _this.swapCssVars();

          _this.swapTheme();

          _this.swapImages();
        });
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3NjcmlwdHNfbW9kdWxlc19DaGFuZ2VUaGVtZV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9DaGFuZ2VUaGVtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmtleXMuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmVudHJpZXMuanNcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoQ2hhbmdlVGhlbWUpIHtcbiAgdmFyIHRoZW1lID0gW3tcbiAgICBcIi0tbWFpbi1mb250XCI6IFwicmdiYSgwLCAwLCAwLCAwLjg3KVwiLFxuICAgIFwiLS1tYWluLWJnXCI6IFwiI2ZmZlwiLFxuICAgIFwiLS1kYXJrLWZvbnRcIjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIixcbiAgICBcIi0tc3ViLWNvbG9yLWRhcmtcIjogXCJyZ2JhKDAsIDAsIDAsIDAuNylcIixcbiAgICBcIi0tc3ViLWNvbG9yLWxpZ2h0XCI6IFwiI0YyRjJGMlwiXG4gIH0sIHtcbiAgICBcIi0tbWFpbi1mb250XCI6IFwiI2ZmZlwiLFxuICAgIFwiLS1tYWluLWJnXCI6IFwicmdiYSgwLCAwLCAwLCAwLjg3KVwiLFxuICAgIFwiLS1kYXJrLWZvbnRcIjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNylcIixcbiAgICBcIi0tc3ViLWNvbG9yLWRhcmtcIjogXCJyZ2JhKDUxLCA1MSwgNTEsIDAuNSlcIixcbiAgICBcIi0tc3ViLWNvbG9yLWxpZ2h0XCI6IFwicmdiYSg1MSwgNTEsIDUxLCAwLjUpXCJcbiAgfV07XG5cbiAgdmFyIFRoZW1lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaGVtZShjaGFuZ2VCdXR0b24pIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaGVtZSk7XG5cbiAgICAgIHRoaXMuY2hhbmdlQnV0dG9uID0gY2hhbmdlQnV0dG9uO1xuICAgICAgdGhpcy5yb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgdGhpcy53aGl0ZV90aGVtZSA9ICdpbmxpbmUnO1xuICAgICAgdGhpcy5ibGFja190aGVtZSA9ICdub25lJztcbiAgICAgIHRoaXMuYmluZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRoZW1lLCBbe1xuICAgICAga2V5OiBcImJpbmRFdmVudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB0aGlzLmNoYW5nZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5zd2FwQ3NzVmFycygpO1xuXG4gICAgICAgICAgX3RoaXMuc3dhcFRoZW1lKCk7XG5cbiAgICAgICAgICBfdGhpcy5zd2FwSW1hZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzd2FwQ3NzVmFyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN3YXBDc3NWYXJzKCkge1xuICAgICAgICB2YXIgY3VycmVudCA9IE9iamVjdC5rZXlzKHRoZW1lWzBdKTtcbiAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gT2JqZWN0LmtleXModGhlbWVbMV0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpbml0aWFsX3ZhbHVlID0gdGhlbWVbMF1bY3VycmVudFtpXV07XG4gICAgICAgICAgdGhlbWVbMF1bY3VycmVudFtpXV0gPSB0aGVtZVsxXVtyZXBsYWNlbWVudFtpXV07XG4gICAgICAgICAgdGhlbWVbMV1bY3VycmVudFtpXV0gPSBpbml0aWFsX3ZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN3YXBUaGVtZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN3YXBUaGVtZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhlbWVbMF0pLmZvckVhY2goZnVuY3Rpb24gKGt2X3BhaXIpIHtcbiAgICAgICAgICBfdGhpczIucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShrdl9wYWlyWzBdLCBrdl9wYWlyWzFdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMud2hpdGVfdGhlbWUgPSB0aGlzLndoaXRlX3RoZW1lID09ICdpbmxpbmUnID8gJ25vbmUnIDogJ2lubGluZSc7XG4gICAgICAgIHRoaXMuYmxhY2tfdGhlbWUgPSB0aGlzLmJsYWNrX3RoZW1lID09ICdub25lJyA/ICdpbmxpbmUnIDogJ25vbmUnO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzd2FwSW1hZ2VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3dhcEltYWdlcygpIHtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS10aGVtZV93aGl0ZVwiLCB0aGlzLndoaXRlX3RoZW1lKTtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS10aGVtZV9ibGFja1wiLCB0aGlzLmJsYWNrX3RoZW1lKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGhlbWU7XG4gIH0oKTtcblxuICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbW9kdWxlPUNoYW5nZVRoZW1lXScpO1xuICBuZXcgVGhlbWUoYnV0dG9uKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==