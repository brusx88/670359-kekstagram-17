'use strict';

(function () {
  var pictures = document.querySelector('.pictures');
  var picture = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  var onSuccess = function (response) {
    var photos = response.slice(0, 25);

    function renderPhotos(photo) {
      var photosElement = picture.cloneNode(true);

      photosElement.querySelector('.picture__img').setAttribute('src', photo.url);
      photosElement.querySelector('.picture__likes').textContent = photo.likes;
      photosElement.querySelector('.picture__comments').textContent = photo.comments.length;
      return photosElement;
    }

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < photos.length; i++) {
      fragment.appendChild(renderPhotos(photos[i]));
      pictures.appendChild(fragment);
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
