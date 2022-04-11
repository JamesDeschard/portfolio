"use strict";
(self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || []).push([["src_scripts_modules_Elevator_js"],{

/***/ "./src/scripts/modules/Elevator.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/Elevator.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* harmony default export */ __webpack_exports__["default"] = (function (Elevator) {
  console.log('Hello World', Elevator);

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
    } //            ELEVATE!
    //              /
    //         ____
    //       .'    '=====<0
    //       |======|
    //       |======|
    //       [IIIIII[\--()
    //       |_______|
    //       C O O O D
    //      C O  O  O D
    //     C  O  O  O  D
    //     C__O__O__O__D
    //    [_____________]


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
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3NjcmlwdHNfbW9kdWxlc19FbGV2YXRvcl9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL0VsZXZhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoRWxldmF0b3IpIHtcbiAgY29uc29sZS5sb2coJ0hlbGxvIFdvcmxkJywgRWxldmF0b3IpO1xuXG4gIHZhciBFbGV2YXRvciA9IGZ1bmN0aW9uIEVsZXZhdG9yKG9wdGlvbnMpIHtcbiAgICBcInVzZSBzdHJpY3RcIjsgLy8gRWxlbWVudHNcblxuICAgIHZhciBib2R5ID0gbnVsbDsgLy8gU2Nyb2xsIHZhcnNcblxuICAgIHZhciBhbmltYXRpb24gPSBudWxsO1xuICAgIHZhciBkdXJhdGlvbiA9IG51bGw7IC8vIG1zXG5cbiAgICB2YXIgY3VzdG9tRHVyYXRpb24gPSBmYWxzZTtcbiAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IG51bGw7XG4gICAgdmFyIGVuZFBvc2l0aW9uID0gMDtcbiAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IG51bGw7XG4gICAgdmFyIHZlcnRpY2FsUGFkZGluZyA9IG51bGw7XG4gICAgdmFyIGVsZXZhdGluZyA9IGZhbHNlO1xuICAgIHZhciBzdGFydENhbGxiYWNrO1xuICAgIHZhciBtYWluQXVkaW87XG4gICAgdmFyIGVuZEF1ZGlvO1xuICAgIHZhciBlbmRDYWxsYmFjaztcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgLyoqXHJcbiAgICAgKiBVdGlsc1xyXG4gICAgICovXG4gICAgLy8gVGhhbmtzIE1yIFBlbm5lciAtIGh0dHA6Ly9yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cblxuICAgIGZ1bmN0aW9uIGVhc2VJbk91dFF1YWQodCwgYiwgYywgZCkge1xuICAgICAgdCAvPSBkIC8gMjtcbiAgICAgIGlmICh0IDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuICAgICAgdC0tO1xuICAgICAgcmV0dXJuIC1jIC8gMiAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHRlbmRQYXJhbWV0ZXJzKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG4gICAgICBmb3IgKHZhciBvcHRpb24gaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgdmFyIHQgPSBvcHRpb25zW29wdGlvbl0gPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9uICE9PSBcImZ1bmN0aW9uXCI7XG5cbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICBvcHRpb25zW29wdGlvbl0gPSBkZWZhdWx0c1tvcHRpb25dO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZlcnRpY2FsT2Zmc2V0KGVsZW1lbnQpIHtcbiAgICAgIHZhciB2ZXJ0aWNhbE9mZnNldCA9IDA7XG5cbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIHZlcnRpY2FsT2Zmc2V0ICs9IGVsZW1lbnQub2Zmc2V0VG9wIHx8IDA7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcnRpY2FsUGFkZGluZykge1xuICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IHZlcnRpY2FsT2Zmc2V0IC0gdmVydGljYWxQYWRkaW5nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVydGljYWxPZmZzZXQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTWFpblxyXG4gICAgICovXG4gICAgLy8gVGltZSBpcyBwYXNzZWQgdGhyb3VnaCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHdoYXQgYSB3b3JsZCFcblxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZUxvb3AodGltZSkge1xuICAgICAgaWYgKCFzdGFydFRpbWUpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRpbWVTb0ZhciA9IHRpbWUgLSBzdGFydFRpbWU7XG4gICAgICB2YXIgZWFzZWRQb3NpdGlvbiA9IGVhc2VJbk91dFF1YWQodGltZVNvRmFyLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb24sIGR1cmF0aW9uKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBlYXNlZFBvc2l0aW9uKTtcblxuICAgICAgaWYgKHRpbWVTb0ZhciA8IGR1cmF0aW9uKSB7XG4gICAgICAgIGFuaW1hdGlvbiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlTG9vcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25GaW5pc2hlZCgpO1xuICAgICAgfVxuICAgIH0gLy8gICAgICAgICAgICBFTEVWQVRFIVxuICAgIC8vICAgICAgICAgICAgICAvXG4gICAgLy8gICAgICAgICBfX19fXG4gICAgLy8gICAgICAgLicgICAgJz09PT09PDBcbiAgICAvLyAgICAgICB8PT09PT09fFxuICAgIC8vICAgICAgIHw9PT09PT18XG4gICAgLy8gICAgICAgW0lJSUlJSVtcXC0tKClcbiAgICAvLyAgICAgICB8X19fX19fX3xcbiAgICAvLyAgICAgICBDIE8gTyBPIERcbiAgICAvLyAgICAgIEMgTyAgTyAgTyBEXG4gICAgLy8gICAgIEMgIE8gIE8gIE8gIERcbiAgICAvLyAgICAgQ19fT19fT19fT19fRFxuICAgIC8vICAgIFtfX19fX19fX19fX19fXVxuXG5cbiAgICB0aGlzLmVsZXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZWxldmF0aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZWxldmF0aW5nID0gdHJ1ZTtcbiAgICAgIHN0YXJ0UG9zaXRpb24gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICAgICAgdXBkYXRlRW5kUG9zaXRpb24oKTsgLy8gTm8gY3VzdG9tIGR1cmF0aW9uIHNldCwgc28gd2UgdHJhdmVsIGF0IHBpeGVscyBwZXIgbWlsbGlzZWNvbmQuICgwLjc1cHggcGVyIG1zKVxuXG4gICAgICBpZiAoIWN1c3RvbUR1cmF0aW9uKSB7XG4gICAgICAgIGR1cmF0aW9uID0gTWF0aC5hYnMoZW5kUG9zaXRpb24gLSBzdGFydFBvc2l0aW9uKSAqIDEuNTtcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVMb29wKTsgLy8gU3RhcnQgbXVzaWMhXG5cbiAgICAgIGlmIChtYWluQXVkaW8pIHtcbiAgICAgICAgbWFpbkF1ZGlvLnBsYXkoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0Q2FsbGJhY2spIHtcbiAgICAgICAgc3RhcnRDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBicm93c2VyTWVldHNSZXF1aXJlbWVudHMoKSB7XG4gICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSAmJiB3aW5kb3cuQXVkaW8gJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRQb3NpdGlvbnMoKSB7XG4gICAgICBzdGFydFRpbWUgPSBudWxsO1xuICAgICAgc3RhcnRQb3NpdGlvbiA9IG51bGw7XG4gICAgICBlbGV2YXRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVFbmRQb3NpdGlvbigpIHtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIGVuZFBvc2l0aW9uID0gZ2V0VmVydGljYWxPZmZzZXQodGFyZ2V0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0aW9uRmluaXNoZWQoKSB7XG4gICAgICByZXNldFBvc2l0aW9ucygpOyAvLyBTdG9wIG11c2ljIVxuXG4gICAgICBpZiAobWFpbkF1ZGlvKSB7XG4gICAgICAgIG1haW5BdWRpby5wYXVzZSgpO1xuICAgICAgICBtYWluQXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kQXVkaW8pIHtcbiAgICAgICAgZW5kQXVkaW8ucGxheSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kQ2FsbGJhY2spIHtcbiAgICAgICAgZW5kQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbldpbmRvd0JsdXIoKSB7XG4gICAgICAvLyBJZiBhbmltYXRpbmcsIGdvIHN0cmFpZ2h0IHRvIHRoZSB0b3AuIEFuZCBwbGF5IG5vIG1vcmUgbXVzaWMuXG4gICAgICBpZiAoZWxldmF0aW5nKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIHJlc2V0UG9zaXRpb25zKCk7XG5cbiAgICAgICAgaWYgKG1haW5BdWRpbykge1xuICAgICAgICAgIG1haW5BdWRpby5wYXVzZSgpO1xuICAgICAgICAgIG1haW5BdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVFbmRQb3NpdGlvbigpO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZW5kUG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpbmRFbGV2YXRlVG9FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhhdC5lbGV2YXRlLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPbGRlciBicm93c2Vyc1xuICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KFwib25jbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdXBkYXRlRW5kUG9zaXRpb24oKTtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gZW5kUG9zaXRpb247XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBlbmRQb3NpdGlvbjtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIGVuZFBvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdChfb3B0aW9ucykge1xuICAgICAgLy8gVGFrZSB0aGUgc3RhaXJzIGluc3RlYWRcbiAgICAgIGlmICghYnJvd3Nlck1lZXRzUmVxdWlyZW1lbnRzKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBCaW5kIHRvIGVsZW1lbnQgY2xpY2sgZXZlbnQuXG5cblxuICAgICAgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGR1cmF0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIG1haW5BdWRpbzogZmFsc2UsXG4gICAgICAgIGVuZEF1ZGlvOiBmYWxzZSxcbiAgICAgICAgcHJlbG9hZEF1ZGlvOiB0cnVlLFxuICAgICAgICBsb29wQXVkaW86IHRydWUsXG4gICAgICAgIHN0YXJ0Q2FsbGJhY2s6IG51bGwsXG4gICAgICAgIGVuZENhbGxiYWNrOiBudWxsXG4gICAgICB9O1xuICAgICAgX29wdGlvbnMgPSBleHRlbmRQYXJhbWV0ZXJzKF9vcHRpb25zLCBkZWZhdWx0cyk7XG5cbiAgICAgIGlmIChfb3B0aW9ucy5lbGVtZW50KSB7XG4gICAgICAgIGJpbmRFbGV2YXRlVG9FbGVtZW50KF9vcHRpb25zLmVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX29wdGlvbnMuZHVyYXRpb24pIHtcbiAgICAgICAgY3VzdG9tRHVyYXRpb24gPSB0cnVlO1xuICAgICAgICBkdXJhdGlvbiA9IF9vcHRpb25zLmR1cmF0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoX29wdGlvbnMudGFyZ2V0RWxlbWVudCkge1xuICAgICAgICB0YXJnZXRFbGVtZW50ID0gX29wdGlvbnMudGFyZ2V0RWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKF9vcHRpb25zLnZlcnRpY2FsUGFkZGluZykge1xuICAgICAgICB2ZXJ0aWNhbFBhZGRpbmcgPSBfb3B0aW9ucy52ZXJ0aWNhbFBhZGRpbmc7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBvbldpbmRvd0JsdXIsIGZhbHNlKTtcblxuICAgICAgaWYgKF9vcHRpb25zLm1haW5BdWRpbykge1xuICAgICAgICBtYWluQXVkaW8gPSBuZXcgQXVkaW8oX29wdGlvbnMubWFpbkF1ZGlvKTtcbiAgICAgICAgbWFpbkF1ZGlvLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgX29wdGlvbnMucHJlbG9hZEF1ZGlvKTtcbiAgICAgICAgbWFpbkF1ZGlvLnNldEF0dHJpYnV0ZShcImxvb3BcIiwgX29wdGlvbnMubG9vcEF1ZGlvKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9vcHRpb25zLmVuZEF1ZGlvKSB7XG4gICAgICAgIGVuZEF1ZGlvID0gbmV3IEF1ZGlvKF9vcHRpb25zLmVuZEF1ZGlvKTtcbiAgICAgICAgZW5kQXVkaW8uc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcInRydWVcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChfb3B0aW9ucy5lbmRDYWxsYmFjaykge1xuICAgICAgICBlbmRDYWxsYmFjayA9IF9vcHRpb25zLmVuZENhbGxiYWNrO1xuICAgICAgfVxuXG4gICAgICBpZiAoX29wdGlvbnMuc3RhcnRDYWxsYmFjaykge1xuICAgICAgICBzdGFydENhbGxiYWNrID0gX29wdGlvbnMuc3RhcnRDYWxsYmFjaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0KG9wdGlvbnMpO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBFbGV2YXRvcjtcbiAgfVxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9