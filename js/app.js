// console.log('hi');
$(document).ready(function(){
  const note = $('.note');
  const start = $('.start');
  const end = $('.end');
  let playerScore = [];

  //push note div value to array

  end.on('click', function(){
    console.log(end.on());
    if(note.position().top > 700 && note.position().top < 800){
      alert(true);
      console.log(note.position().top);
    }else {
      alert(false);
    }
  });

  // this will start the game
  start.click(function (){


    note.animate({'top': '+=800px'}, 2000, function(){
      if(note.position().top === 800){
        note.remove();
      }
    });







  });
});


//   if(note.position().top > 700 && note.position().top < 800){
//     alert(true);
//     console.log(note.position().top);
//   } else{
//     alert(false);
//     note.remove();
//   }
//
// });
















//this judges if you have hit the note of not by comparin the height
// if(note.height() > 700 && note.height() < 800){
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
// });

// if(note === top = 700px){
//   note.removeClass();

// }










// console.log('startDescent');
