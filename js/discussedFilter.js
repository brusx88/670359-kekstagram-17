'use strict';

(function () {
  var imgDiscussed = document.querySelector('#filter-discussed');
  imgDiscussed.addEventListener('click', function () {

    var sort = window.photos.slice(function (photo) {
      return photo.comments;
    });
    sort.sort(function (a, b) {
      return a.comments.length - b.comments.length;
    })
    .reverse();
    window.renderPhotos(sort);
  });

})();
