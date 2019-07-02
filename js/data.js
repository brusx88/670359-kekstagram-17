'use strict';

(function () {
  var pictures = document.querySelector('.pictures');
  var picture = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  var path = 'photos/';
  var type = '.jpg';

  var photos = [];

  var messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];

  var names = [
    'Алеша',
    'Михаил',
    'Дмитрий',
    'Геннадий',
    'Окоп',
    'Арсений'
  ];
  // generate random comments
  for (var i = 1; i <= 25; i++) {
    var comments = [];
    for (var j = 0; j < window.util.random(1, 10); j++) {
      comments.push({
        avatar: 'img/avatar-' + window.util.random(1, 6) + '.svg',
        message: messages[window.util.random(0, 5)],
        name: names[window.util.random(0, 5)],
      });
    }
    photos.push({
      url: path + i + type,
      likes: window.util.random(15, 200),
      comments: comments,
    });
  }

  function renderPhotos(photo) {
    var photosElement = picture.cloneNode(true);

    photosElement.querySelector('.picture__img').setAttribute('src', photo.url);
    photosElement.querySelector('.picture__likes').textContent = photo.likes;
    photosElement.querySelector('.picture__comments').textContent = photo.comments.length;

    return photosElement;
  }

  var fragment = document.createDocumentFragment();

  for (var t = 0; t < 25; t++) {
    fragment.appendChild(renderPhotos(photos[t]));
    pictures.appendChild(fragment);
  }
})();
