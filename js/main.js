var $svg = $('svg');
var $btn = $('.btn');

$btn.on('click', function (e) {
  $('.engage').toggleClass('engaged');
  $btn.toggleClass('button');
  $lines.toggleClass('is-clicked');
});
