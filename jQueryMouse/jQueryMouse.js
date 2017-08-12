//append text
$('.one').click(function(e) {
  var oldText = $('.text').text();
  $('.text').text(oldText + " Hello ");
});

$('.two').hover(function(e) {
  $('.text').css({
    fontWeight: "bold",
    fontSize: "90px",
    color: "white",
  });
}, function(e) {
  $('.text').css({
    fontWeight: "normal",
  });
});
//
// $('.button3').click(function(e) {
//   $('.'). ('');
// });
//
// $('.button4').click(function(e) {
//   $('.'). ('');
// });
