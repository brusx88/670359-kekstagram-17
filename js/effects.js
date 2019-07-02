'use strict';

(function () {
  var effectsRadio = document.querySelectorAll('.effects__radio');
  var imgUpload = document.querySelector('.img-upload__effect-level');
  imgUpload.style.display = 'none';
  // calculate the color depth
  window.filters = {
    setFilter: function setFilter(filter, intensity) {
      var filterValues = {
        'grayscale': intensity / 100,
        'sepia': intensity / 100,
        'invert': intensity + '%',
        'blur': 3 * (intensity / 100) + 'px',
        'brightness': 2 * (intensity / 100) + 1
      };
      if (filter === 'none') {
        window.uploadPreview.removeAttribute('style');
      } else {
        window.uploadPreview.style.filter = filter + '(' + filterValues[filter] + ')';
      }
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
      window.uploadPreview.classList = ['img-upload__preview'];
      window.filterIntensity = 100;
      window.effectLevelPin.style.left = window.filterIntensity + '%';
      window.effectLevelDepth.style.width = window.filterIntensity + '%';
      if (filter !== 'none') {
        window.uploadPreview.classList.add(classAdd);
        imgUpload.style.display = 'block';
      } else {
        imgUpload.style.display = 'none';
      }
      window.currentFilter = filter;
      window.filters.setFilter(window.currentFilter, window.filterIntensity);
    });
  };

  for (var t = 0; t < effectsRadio.length; t++) {
    addThumbnailClickHandler(effectsRadio[t], effects[t], filters[t]);
  }
})();
