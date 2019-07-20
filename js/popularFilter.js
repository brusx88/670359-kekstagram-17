'use strict';

(function () {

  window.pictures = document.querySelector('.pictures');
  window.picture = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  var imgPopular = document.querySelector('#filter-popular');

  imgPopular.addEventListener('click', function () {
    var delay = window.debounce(function () {
      window.renderPhotos(window.photos);
    }, window.DEBOUNCE_INTERVAL);
    delay();
  });

  var onSuccess = function (response) {
    window.photos = response.slice(0, 25);
    window.renderPhotos(window.photos);
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
