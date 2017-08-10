$('.up').click(function() {
  $('.container').slideUp('slow');
});

$('.down').click(function() {
  $('.container').slideDown();
});

$('.toggle').click(function() {
  $('.container').slideToggle('fast');
});
