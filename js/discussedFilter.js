'use strict';

(function () {

  window.DEBOUNCE_INTERVAL = 500;
  var imgDiscussed = document.querySelector('#filter-discussed');
  imgDiscussed.addEventListener('click', function () {
    var sort = window.photos.slice()
    .sort(function (a, b) {
      return a.comments.length - b.comments.length;
    })
    .reverse();
    var delay = window.debounce(function () {
      window.renderPhotos(sort);
    }, window.DEBOUNCE_INTERVAL);
    delay();
  });
})();
