// console.log('hi');


// console.log(game);
$('#start').on('click', function startDescent() {

  var windowHeight = $(window).height();
  var lineHeight = $('.note').height();
  var desiredBottom = 0;

  var newPosition = windowHeight - (lineHeight + desiredBottom);

  $('.note').animate({top: newPosition}, 3000/*this is the pace*/, function animateDescent () {
    $('.note').css({
      bottom: desiredBottom,
      top: 'auto'
    });
  });


});
