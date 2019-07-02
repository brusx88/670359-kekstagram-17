'use strict';

(function () {
  // random numbers
  window.util = {
    random: function random(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
  };
})();
