'use strict';

(function () {
  var filterForm = document.querySelector('.img-filters__form');
  var filterButtons = filterForm.querySelectorAll('.img-filters__button');

  filterForm.addEventListener('click', function (evt) {
    var target = evt.target;
    if (!target.classList.contains('img-filters__form')) {
      [].forEach.call(filterButtons, function (elem) {
        elem.classList.remove('img-filters__button--active');
      });
      target.classList.add('img-filters__button--active');
    }
  });

})();
