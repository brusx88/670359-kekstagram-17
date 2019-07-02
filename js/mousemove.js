'use strict';

(function () {
  window.effectLevelLine = document.querySelector('.effect-level__line');
  window.effectLevelPin = window.effectLevelLine.children[0];
  window.effectLevelDepth = window.effectLevelLine.children[1];
  var value = document.querySelector('.effect-level__value');
  // determine the area of the mouse movement
  var getCoords = function (elem) {
    var box = elem.getBoundingClientRect();

    return {
      left: box.left + pageXOffset,
      right: box.right
    };
  };
  window.effectLevelPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var sliderCoords = getCoords(window.effectLevelLine);
    var startCoord = getCoords(window.effectLevelPin);
    var shiftX = evt.pageX - startCoord.left;

    function onMouseMove(evtMove) {

      var newLeft = evtMove.pageX - shiftX - sliderCoords.left;
      if (newLeft < 0) {
        newLeft = 0;
      }
      var rightEdge = window.effectLevelLine.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      window.effectLevelPin.style.left = window.filterIntensity + '%';
      window.effectLevelDepth.style.width = newLeft + 'px';
      var widthProp = Math.floor((window.effectLevelDepth.offsetWidth * 100) / rightEdge);

      value.setAttribute('value', widthProp);
      window.filterIntensity = value.value;
      window.filters.setFilter(window.currentFilter, window.filterIntensity);
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseUp', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
