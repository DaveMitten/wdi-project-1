// console.log('hi');
$(document).ready(function(){


  //if button is clicked, perform action. Keep true untill the div reaches its targe of 700 px, when that happens, remove class.

  //then adde class at top and start sequence again

  // const top = $('.note')


// while(){
//
// }

  const buttons = $('.buttons');
  const note = $('.note');
  const start = $('.start');
  // const button = $('button');
  // const noteTop = note.top(700px;)

// this  actually will start all
  start.click(function (){


    note.animate({'top': '+=725px'}, 3000);

    //this judges if you have hit the note of not by comparin the height
    // if('.note.height()' === height(700px) ){
    //   alert(true);
    // } else{
    //   alert(false);
    // }

























    // alert(note.offset);

    // if('.note'.height === 100){
    //   alert('.note'.height());
    // }
    // let x = note.offset();
    // return(x.top);

//could use this as a function to drop note if needed

 // $("button").click(function(){
//     $("p").slideDown();
// });


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
