'use strict';

(function () {
  var newFilter = document.querySelector('#filter-new');

  newFilter.addEventListener('click', function () {
    function shaffleArray(array, length) {
      var copy = array.slice();
      var results = [];
      for (var i = 0; i <= length; i++) {
        var index = window.util.random(0, copy.length - 1);
        var element = copy.splice(index, 1);
        results.push(element[0]);
      }
      return results;
    }
    window.renderPhotos(shaffleArray(window.photos, 10));
  });

})();
