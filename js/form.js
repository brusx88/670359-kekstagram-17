'use strict';

(function () {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  var imgUpload = document.querySelector('.img-upload__effect-level');
  var commentInput = document.querySelector('.text__description');
  imgUpload.style.display = 'none';

  commentInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', window.onPopupEscPress);
  });

  commentInput.addEventListener('blur', function () {
    document.addEventListener('keydown', window.onPopupEscPress);
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

})();
