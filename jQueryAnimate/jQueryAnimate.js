$('.changeOpacity').click(function() {
  $('.dialog').animate({opacity: '.25'}, 2000);
});

$('.increaseHeight').click(function(){
    $('.dialog').animate({height: '500px'}, 2000);
});

$('.increaseWidth').click(function() {
  $('.dialog').animate({width: '700px'}, 2000);
});

$('.increaseFont').click(function() {
  $('.text').animate({'fontSize': '25px'}, 2000);
});
