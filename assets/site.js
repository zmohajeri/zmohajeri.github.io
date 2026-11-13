(function () {
  // Topic filter on section pages.
  var chips = document.querySelectorAll('.chip');
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      var tp = c.getAttribute('data-topic');
      chips.forEach(function (x) { x.classList.toggle('on', x === c); });
      document.querySelectorAll('.grid .card').forEach(function (card) {
        card.hidden = !!tp && card.getAttribute('data-topic') !== tp;
      });
    });
  });
})();
