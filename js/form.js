'use strict';

(function () {
  var commentInput = document.querySelector('.text__description');

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
  // limit comment length
  commentInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length > 140) {
      target.setCustomValidity('Комментарий не должн превышать 140 символов');
    } else {
      target.setCustomValidity('');
    }
  });

})();
