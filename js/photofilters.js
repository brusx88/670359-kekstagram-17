'use strict';

(function () {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  // var filterForm = document.querySelectorAll('.img-filters__form');
  // var imgNew = document.querySelector('#filter-new');
  var imgDiscussed = document.querySelector('#filter-discussed');
  imgDiscussed.addEventListener('click', function () {

    var sort = window.photos.slice(function (photo) {
      return photo.comments;
    });
    sort.sort(function (a, b) {
      return a.comments.length - b.comments.length;
    })
    .reverse();

    function renderPhotos(phot) {

      var photosElement = window.picture.cloneNode(true);

      photosElement.querySelector('.picture__img').setAttribute('src', phot.url);
      photosElement.querySelector('.picture__likes').textContent = phot.likes;
      photosElement.querySelector('.picture__comments').textContent = phot.comments.length;

      return photosElement;
    }
    var fragment = document.createDocumentFragment();
    while (window.pictures.firstChild) {
      window.pictures.removeChild(window.pictures.firstChild);
    }
    for (var i = 0; i < sort.length; i++) {
      fragment.appendChild(renderPhotos(sort[i]));
      window.pictures.appendChild(fragment);
    }


  });

})();
