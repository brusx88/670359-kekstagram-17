'use strict';

(function () {
  var effectsRadio = document.querySelectorAll('.effects__radio');
  var imgUpload = document.querySelector('.img-upload__effect-level');
  imgUpload.style.display = 'none';
  // calculate the color depth
  
  var setFilter = function setFilter() {
    var filterValues = {
      'grayscale': window.filterIntensity / 100,
      'sepia': window.filterIntensity / 100,
      'invert': window.filterIntensity + '%',
      'blur': 3 * (window.filterIntensity / 100) + 'px',
      'brightness': 2 * (window.filterIntensity / 100) + 1
    };
    if (window.currentFilter === 'none') {
      window.uploadPreview.removeAttribute('style');
    } else {
      window.uploadPreview.style.filter = window.currentFilter + '(' + filterValues[window.currentFilter] + ')';
    }
  };
  window.filters = {
    setFilter: setFilter,
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
      filters.setFilter();
    });
  };

  for (var t = 0; t < effectsRadio.length; t++) {
    addThumbnailClickHandler(effectsRadio[t], effects[t], filters[t]);
  }
})();
