'use strict';

(function () {
  var imgPopular = document.querySelector('#filter-popular');
  imgPopular.addEventListener('click', function () {
    function renderPhotos(photo) {
      var photosElement = window.picture.cloneNode(true);

      photosElement.querySelector('.picture__img').setAttribute('src', photo.url);
      photosElement.querySelector('.picture__likes').textContent = photo.likes;
      photosElement.querySelector('.picture__comments').textContent = photo.comments.length;

      return photosElement;
    }

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.photos.length; i++) {
      fragment.appendChild(renderPhotos(window.photos[i]));
      window.pictures.appendChild(fragment);
    }
  });
})();
