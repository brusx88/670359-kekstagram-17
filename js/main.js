'use strict';

var uploadFile = document.querySelector('#upload-file');
var openEditForm = document.querySelector('.img-upload__overlay');
var closeEditForm = document.querySelector('.img-upload__cancel');
var controllSmaller = document.querySelector('.scale__control--smaller');
var controllBigger = document.querySelector('.scale__control--bigger');
var uploadPreview = document.querySelector('.img-upload__preview');
var controlValue = document.querySelector('.scale__control--value');
document.querySelector('.img-filters').classList.remove('img-filters--inactive');
var imgUpload = document.querySelector('.img-upload__effect-level');
var scale = 100;
var ESC_KEYCODE = 27;
var currentFilter = 'none';
var filterIntensity = 100;
imgUpload.style.display = 'none';

/* made popup  */

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  openEditForm.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  openEditForm.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  uploadFile.value = '';
};

uploadFile.addEventListener('change', function () {
  openPopup();
});

closeEditForm.addEventListener('click', function () {
  closePopup();
});

/* made zoom for pictures */

function changeScale(step, value) {
  var newStep = step + value;
  if (newStep >= 25 && newStep <= 100) {
    return newStep;
  }
  return step;
}

var minusStep = -25;
var plusStep = 25;

function controll(nameListener, steps) {
  nameListener.addEventListener('click', function () {
    scale = changeScale(scale, steps);
    controlValue.value = scale + '%';
    var newScale = 'transform: scale(' + scale / 100 + ')';
    uploadPreview.style = newScale;
  });
}
controll(controllSmaller, minusStep);
controll(controllBigger, plusStep);

/* here we have some effects for images */

var effectsRadio = document.querySelectorAll('.effects__radio');

var setFilter = function (filter, intensity) {
  var filterValues = {
    'grayscale': intensity / 100,
    'sepia': intensity / 100,
    'invert': intensity + '%',
    'blur': 3 * (intensity / 100) + 'px',
    'brightness': 2 * (intensity / 100) + 1
  };
  if (filter === 'none') {
    uploadPreview.removeAttribute('style');
  } else {
    uploadPreview.style.filter = filter + '(' + filterValues[filter] + ')';
  }
};

var effects = [
  'effects__preview--none',
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat'
];

// pin = 25%

var filters = [
  'none',
  'grayscale',
  'sepia',
  'invert',
  'blur',
  'brightness',
];

var addThumbnailClickHandler = function (effect, classAdd, filter) {
  effect.addEventListener('click', function () {
    uploadPreview.classList = ['img-upload__preview'];
    filterIntensity = 100;
    effectLevelPin.style.left = filterIntensity + '%';
    effectLevelDepth.style.width = filterIntensity + '%';
    if (filter !== 'none') {
      uploadPreview.classList.add(classAdd);
      imgUpload.style.display = 'block';
    } else {
      imgUpload.style.display = 'none';
    }
    currentFilter = filter;
    setFilter(currentFilter, filterIntensity);
  });
};

for (var t = 0; t < effectsRadio.length; t++) {
  addThumbnailClickHandler(effectsRadio[t], effects[t], filters[t]);
}
/* added some photos and comments/likes */

var pictures = document.querySelector('.pictures');
var picture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

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

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var path = 'photos/';
var type = '.jpg';

var photos = [];

for (var i = 1; i <= 25; i++) {
  var comments = [];
  for (var k = 0; k < random(1, 10); k++) {
    comments.push({
      avatar: 'img/avatar-' + random(1, 6) + '.svg',
      message: messages[random(0, 5)],
      name: names[random(0, 5)],
    });
  }
  photos.push({
    url: path + i + type,
    likes: random(15, 200),
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

for (var j = 0; j < 25; j++) {
  fragment.appendChild(renderPhotos(photos[j]));
  pictures.appendChild(fragment);
}
/* find placeholder and do some operations */
var commentInput = document.querySelector('.text__description');
commentInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

commentInput.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

commentInput.addEventListener('invalid', function () {
  if (commentInput.validity.tooLong) {
    commentInput.setCustomValidity('Комментарий не должн превышать 140 символов');
  }
});

commentInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length > 140) {
    target.setCustomValidity('Комментарий не должн превышать 140 символов');
  } else {
    target.setCustomValidity('');
  }
});
/* made to move a slider */
var getCoords = function (elem) {
  var box = elem.getBoundingClientRect();

  return {
    left: box.left + pageXOffset,
    right: box.right
  };
};

var effectLevelLine = document.querySelector('.effect-level__line');
var effectLevelPin = effectLevelLine.children[0];
var effectLevelDepth = effectLevelLine.children[1];
var value = document.querySelector('.effect-level__value');
// var pinPercentage;
effectLevelPin.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  var sliderCoords = getCoords(effectLevelLine);
  var startCoord = getCoords(effectLevelPin);
  var shiftX = evt.pageX - startCoord.left;

  function onMouseMove(evtMove) {

    var newLeft = evtMove.pageX - shiftX - sliderCoords.left;
    if (newLeft < 0) {
      newLeft = 0;
    }
    var rightEdge = effectLevelLine.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    effectLevelPin.style.left = filterIntensity + '%';
    effectLevelDepth.style.width = newLeft + 'px';
    var widthProp = Math.floor((effectLevelDepth.offsetWidth * 100) / rightEdge);

    value.setAttribute('value', widthProp);
    filterIntensity = value.value;
    setFilter(currentFilter, filterIntensity);
  }

  function onMouseUp(upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseUp', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
