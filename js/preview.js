'use strict';

(function () {
  window.uploadPreview = document.querySelector('.img-upload__preview');
  var controllSmaller = document.querySelector('.scale__control--smaller');
  var controllBigger = document.querySelector('.scale__control--bigger');
  var controlValue = document.querySelector('.scale__control--value');
  var scale = 100;
  var minusStep = -25;
  var plusStep = 25;
  function changeScale(step, value) {
    var newStep = step + value;
    if (newStep >= 25 && newStep <= 100) {
      return newStep;
    }
    return step;
  }

  function controll(nameListener, steps) {
    nameListener.addEventListener('click', function () {
      scale = changeScale(scale, steps);
      controlValue.value = scale + '%';
      var newScale = 'transform: scale(' + scale / 100 + ')';
      window.uploadPreview.style = newScale;
    });
  }
  controll(controllSmaller, minusStep);
  controll(controllBigger, plusStep);

})();
