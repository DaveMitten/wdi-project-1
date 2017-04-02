// console.log('hi');
$(document).ready(function(){


//if button is clicked, perform action. Keep true untill the div reaches its targe of 700 px, when that happens, remove class.

//then adde class at top and start sequence again

// const top = $('.note')

  $('button').click(function (){
    $('.note').animate({'top': '+=700px'}, 3000);

  });
// if('.note' === 'top' ))
// .removeClass('.note');









  // console.log('startDescent');


});
