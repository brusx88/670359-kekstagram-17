'use strict';

(function () {
  window.renderPhotos = function (arrayPhotos) {
    function render(photo) {
      var photosElement = window.picture.cloneNode(true);

      photosElement.querySelector('.picture__img').setAttribute('src', photo.url);
      photosElement.querySelector('.picture__likes').textContent = photo.likes;
      photosElement.querySelector('.picture__comments').textContent = photo.comments.length;

      return photosElement;
    }

    var fragment = document.createDocumentFragment();
    window.removeElementsByClass('picture');
    for (var i = 0; i < arrayPhotos.length; i++) {
      fragment.appendChild(render(arrayPhotos[i]));
      window.pictures.appendChild(fragment);
    }
  };
})();
