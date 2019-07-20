'use strict';

(function () {
  // random numbers
  window.util = {
    random: function random(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
  };
  // debounce
  window.debounce = function (func, interval) {
    var timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        func();
        clearTimeout(timeout);
      }, interval);
    };
  };

})();
