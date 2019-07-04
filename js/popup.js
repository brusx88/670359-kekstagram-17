'use strict';

(function () {
  var uploadFile = document.querySelector('#upload-file');
  var openEditForm = document.querySelector('.img-upload__overlay');
  var closeEditForm = document.querySelector('.img-upload__cancel');
  var ESC_KEYCODE = 27;
  // interaction with popup window
  window.onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    openEditForm.classList.remove('hidden');
    document.addEventListener('keydown', window.onPopupEscPress);
  };

  var closePopup = function () {
    openEditForm.classList.add('hidden');
    document.removeEventListener('keydown', window.onPopupEscPress);
    uploadFile.value = '';
  };

  uploadFile.addEventListener('change', function () {
    openPopup();
  });

  closeEditForm.addEventListener('click', function () {
    closePopup();
  });

})();
