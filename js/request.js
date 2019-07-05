'use strict';

(function () {
  var BASE_URL = 'https://js.dump.academy/kekstagram/';

  var successCodes = [200, 201, 204];

  window.load = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', BASE_URL + 'data/');

    xhr.addEventListener('load', function () {
      var successCode = successCodes.find(function (elem) {
        return elem === xhr.status;
      });
      if (successCode) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.send();
  };
})();
