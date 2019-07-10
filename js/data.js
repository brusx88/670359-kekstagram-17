'use strict';

(function () {
  window.pictures = document.querySelector('.pictures');
  window.picture = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  var onSuccess = function (response) {
    window.photos = response.slice(0, 25);
    // var imgPopular = document.querySelector('#filter-popular');

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
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };
  window.load(onSuccess, errorHandler);

})();
