// console.log('hi');
$(document).ready(function(){


  //if button is clicked, perform action. Keep true untill the div reaches its targe of 700 px, when that happens, remove class.

  //then adde class at top and start sequence again

  // const top = $('.note')


  const buttons = $('.buttons');
  const note = $('.note');
  // const button = $('button');
  // const noteTop = note.top(700px;)


  buttons.click(function (){
    note.animate({'top': '+=700px'}, 3000);
    let x = note.offset();
    return(x.top);

//     let noteTop = note.postion.top
//
//     $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 800) {
//     $('.bottomMenu').fadeIn();
//   } else {
//     $('.bottomMenu').fadeOut();
//   }
// });




    // note.removeClass();
    // if()
  });

  // if(note === top = 700px){
  //   note.removeClass();

  // }










  // console.log('startDescent');


});
