"use strict";
(self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || []).push([["src_scripts_modules_ScrollUp_js"],{

/***/ "./src/scripts/modules/ScrollUp.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/ScrollUp.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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

  window.onload = function () {
    var elevator = new Elevator({
      element: start,
      duration: 1000 // milliseconds

    });
    start.addEventListener('click', function () {
      elevator.elevate();
    });
  };
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3NjcmlwdHNfbW9kdWxlc19TY3JvbGxVcF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1zdGFydGVyLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9TY3JvbGxVcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoU2Nyb2xsVXApIHtcbiAgdmFyIEVsZXZhdG9yID0gZnVuY3Rpb24gRWxldmF0b3Iob3B0aW9ucykge1xuICAgIFwidXNlIHN0cmljdFwiOyAvLyBFbGVtZW50c1xuXG4gICAgdmFyIGJvZHkgPSBudWxsOyAvLyBTY3JvbGwgdmFyc1xuXG4gICAgdmFyIGFuaW1hdGlvbiA9IG51bGw7XG4gICAgdmFyIGR1cmF0aW9uID0gbnVsbDsgLy8gbXNcblxuICAgIHZhciBjdXN0b21EdXJhdGlvbiA9IGZhbHNlO1xuICAgIHZhciBzdGFydFRpbWUgPSBudWxsO1xuICAgIHZhciBzdGFydFBvc2l0aW9uID0gbnVsbDtcbiAgICB2YXIgZW5kUG9zaXRpb24gPSAwO1xuICAgIHZhciB0YXJnZXRFbGVtZW50ID0gbnVsbDtcbiAgICB2YXIgdmVydGljYWxQYWRkaW5nID0gbnVsbDtcbiAgICB2YXIgZWxldmF0aW5nID0gZmFsc2U7XG4gICAgdmFyIHN0YXJ0Q2FsbGJhY2s7XG4gICAgdmFyIG1haW5BdWRpbztcbiAgICB2YXIgZW5kQXVkaW87XG4gICAgdmFyIGVuZENhbGxiYWNrO1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAvKipcclxuICAgICAqIFV0aWxzXHJcbiAgICAgKi9cbiAgICAvLyBUaGFua3MgTXIgUGVubmVyIC0gaHR0cDovL3JvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuXG4gICAgZnVuY3Rpb24gZWFzZUluT3V0UXVhZCh0LCBiLCBjLCBkKSB7XG4gICAgICB0IC89IGQgLyAyO1xuICAgICAgaWYgKHQgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG4gICAgICB0LS07XG4gICAgICByZXR1cm4gLWMgLyAyICogKHQgKiAodCAtIDIpIC0gMSkgKyBiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4dGVuZFBhcmFtZXRlcnMob3B0aW9ucywgZGVmYXVsdHMpIHtcbiAgICAgIGZvciAodmFyIG9wdGlvbiBpbiBkZWZhdWx0cykge1xuICAgICAgICB2YXIgdCA9IG9wdGlvbnNbb3B0aW9uXSA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb24gIT09IFwiZnVuY3Rpb25cIjtcblxuICAgICAgICBpZiAodCkge1xuICAgICAgICAgIG9wdGlvbnNbb3B0aW9uXSA9IGRlZmF1bHRzW29wdGlvbl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmVydGljYWxPZmZzZXQoZWxlbWVudCkge1xuICAgICAgdmFyIHZlcnRpY2FsT2Zmc2V0ID0gMDtcblxuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgdmVydGljYWxPZmZzZXQgKz0gZWxlbWVudC5vZmZzZXRUb3AgfHwgMDtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAodmVydGljYWxQYWRkaW5nKSB7XG4gICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gdmVydGljYWxPZmZzZXQgLSB2ZXJ0aWNhbFBhZGRpbmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2ZXJ0aWNhbE9mZnNldDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBNYWluXHJcbiAgICAgKi9cbiAgICAvLyBUaW1lIGlzIHBhc3NlZCB0aHJvdWdoIHJlcXVlc3RBbmltYXRpb25GcmFtZSwgd2hhdCBhIHdvcmxkIVxuXG5cbiAgICBmdW5jdGlvbiBhbmltYXRlTG9vcCh0aW1lKSB7XG4gICAgICBpZiAoIXN0YXJ0VGltZSkge1xuICAgICAgICBzdGFydFRpbWUgPSB0aW1lO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGltZVNvRmFyID0gdGltZSAtIHN0YXJ0VGltZTtcbiAgICAgIHZhciBlYXNlZFBvc2l0aW9uID0gZWFzZUluT3V0UXVhZCh0aW1lU29GYXIsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uIC0gc3RhcnRQb3NpdGlvbiwgZHVyYXRpb24pO1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGVhc2VkUG9zaXRpb24pO1xuXG4gICAgICBpZiAodGltZVNvRmFyIDwgZHVyYXRpb24pIHtcbiAgICAgICAgYW5pbWF0aW9uID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVMb29wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGlvbkZpbmlzaGVkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbGV2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGVsZXZhdGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGVsZXZhdGluZyA9IHRydWU7XG4gICAgICBzdGFydFBvc2l0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbFRvcDtcbiAgICAgIHVwZGF0ZUVuZFBvc2l0aW9uKCk7IC8vIE5vIGN1c3RvbSBkdXJhdGlvbiBzZXQsIHNvIHdlIHRyYXZlbCBhdCBwaXhlbHMgcGVyIG1pbGxpc2Vjb25kLiAoMC43NXB4IHBlciBtcylcblxuICAgICAgaWYgKCFjdXN0b21EdXJhdGlvbikge1xuICAgICAgICBkdXJhdGlvbiA9IE1hdGguYWJzKGVuZFBvc2l0aW9uIC0gc3RhcnRQb3NpdGlvbikgKiAxLjU7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlTG9vcCk7IC8vIFN0YXJ0IG11c2ljIVxuXG4gICAgICBpZiAobWFpbkF1ZGlvKSB7XG4gICAgICAgIG1haW5BdWRpby5wbGF5KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydENhbGxiYWNrKSB7XG4gICAgICAgIHN0YXJ0Q2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYnJvd3Nlck1lZXRzUmVxdWlyZW1lbnRzKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiYgd2luZG93LkF1ZGlvICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0UG9zaXRpb25zKCkge1xuICAgICAgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgIHN0YXJ0UG9zaXRpb24gPSBudWxsO1xuICAgICAgZWxldmF0aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRW5kUG9zaXRpb24oKSB7XG4gICAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgICBlbmRQb3NpdGlvbiA9IGdldFZlcnRpY2FsT2Zmc2V0KHRhcmdldEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGlvbkZpbmlzaGVkKCkge1xuICAgICAgcmVzZXRQb3NpdGlvbnMoKTsgLy8gU3RvcCBtdXNpYyFcblxuICAgICAgaWYgKG1haW5BdWRpbykge1xuICAgICAgICBtYWluQXVkaW8ucGF1c2UoKTtcbiAgICAgICAgbWFpbkF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZEF1ZGlvKSB7XG4gICAgICAgIGVuZEF1ZGlvLnBsYXkoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZENhbGxiYWNrKSB7XG4gICAgICAgIGVuZENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25XaW5kb3dCbHVyKCkge1xuICAgICAgLy8gSWYgYW5pbWF0aW5nLCBnbyBzdHJhaWdodCB0byB0aGUgdG9wLiBBbmQgcGxheSBubyBtb3JlIG11c2ljLlxuICAgICAgaWYgKGVsZXZhdGluZykge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICByZXNldFBvc2l0aW9ucygpO1xuXG4gICAgICAgIGlmIChtYWluQXVkaW8pIHtcbiAgICAgICAgICBtYWluQXVkaW8ucGF1c2UoKTtcbiAgICAgICAgICBtYWluQXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlRW5kUG9zaXRpb24oKTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGVuZFBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaW5kRWxldmF0ZVRvRWxlbWVudChlbGVtZW50KSB7XG4gICAgICBpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoYXQuZWxldmF0ZSwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT2xkZXIgYnJvd3NlcnNcbiAgICAgICAgZWxlbWVudC5hdHRhY2hFdmVudChcIm9uY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHVwZGF0ZUVuZFBvc2l0aW9uKCk7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IGVuZFBvc2l0aW9uO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gZW5kUG9zaXRpb247XG4gICAgICAgICAgd2luZG93LnNjcm9sbCgwLCBlbmRQb3NpdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoX29wdGlvbnMpIHtcbiAgICAgIC8vIFRha2UgdGhlIHN0YWlycyBpbnN0ZWFkXG4gICAgICBpZiAoIWJyb3dzZXJNZWV0c1JlcXVpcmVtZW50cygpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gQmluZCB0byBlbGVtZW50IGNsaWNrIGV2ZW50LlxuXG5cbiAgICAgIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBkdXJhdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBtYWluQXVkaW86IGZhbHNlLFxuICAgICAgICBlbmRBdWRpbzogZmFsc2UsXG4gICAgICAgIHByZWxvYWRBdWRpbzogdHJ1ZSxcbiAgICAgICAgbG9vcEF1ZGlvOiB0cnVlLFxuICAgICAgICBzdGFydENhbGxiYWNrOiBudWxsLFxuICAgICAgICBlbmRDYWxsYmFjazogbnVsbFxuICAgICAgfTtcbiAgICAgIF9vcHRpb25zID0gZXh0ZW5kUGFyYW1ldGVycyhfb3B0aW9ucywgZGVmYXVsdHMpO1xuXG4gICAgICBpZiAoX29wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICBiaW5kRWxldmF0ZVRvRWxlbWVudChfb3B0aW9ucy5lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9vcHRpb25zLmR1cmF0aW9uKSB7XG4gICAgICAgIGN1c3RvbUR1cmF0aW9uID0gdHJ1ZTtcbiAgICAgICAgZHVyYXRpb24gPSBfb3B0aW9ucy5kdXJhdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKF9vcHRpb25zLnRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudCA9IF9vcHRpb25zLnRhcmdldEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChfb3B0aW9ucy52ZXJ0aWNhbFBhZGRpbmcpIHtcbiAgICAgICAgdmVydGljYWxQYWRkaW5nID0gX29wdGlvbnMudmVydGljYWxQYWRkaW5nO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgb25XaW5kb3dCbHVyLCBmYWxzZSk7XG5cbiAgICAgIGlmIChfb3B0aW9ucy5tYWluQXVkaW8pIHtcbiAgICAgICAgbWFpbkF1ZGlvID0gbmV3IEF1ZGlvKF9vcHRpb25zLm1haW5BdWRpbyk7XG4gICAgICAgIG1haW5BdWRpby5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIF9vcHRpb25zLnByZWxvYWRBdWRpbyk7XG4gICAgICAgIG1haW5BdWRpby5zZXRBdHRyaWJ1dGUoXCJsb29wXCIsIF9vcHRpb25zLmxvb3BBdWRpbyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfb3B0aW9ucy5lbmRBdWRpbykge1xuICAgICAgICBlbmRBdWRpbyA9IG5ldyBBdWRpbyhfb3B0aW9ucy5lbmRBdWRpbyk7XG4gICAgICAgIGVuZEF1ZGlvLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX29wdGlvbnMuZW5kQ2FsbGJhY2spIHtcbiAgICAgICAgZW5kQ2FsbGJhY2sgPSBfb3B0aW9ucy5lbmRDYWxsYmFjaztcbiAgICAgIH1cblxuICAgICAgaWYgKF9vcHRpb25zLnN0YXJ0Q2FsbGJhY2spIHtcbiAgICAgICAgc3RhcnRDYWxsYmFjayA9IF9vcHRpb25zLnN0YXJ0Q2FsbGJhY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5pdChvcHRpb25zKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gRWxldmF0b3I7XG4gIH1cblxuICB2YXIgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWxldmF0b3ItYnV0dG9uJyk7XG5cbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxldmF0b3IgPSBuZXcgRWxldmF0b3Ioe1xuICAgICAgZWxlbWVudDogc3RhcnQsXG4gICAgICBkdXJhdGlvbjogMTAwMCAvLyBtaWxsaXNlY29uZHNcblxuICAgIH0pO1xuICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgZWxldmF0b3IuZWxldmF0ZSgpO1xuICAgIH0pO1xuICB9O1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9