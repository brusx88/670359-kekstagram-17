'use strict';

(function () {
  window.removeElementsByClass = function (className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  };
})();
