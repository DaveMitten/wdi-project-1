// console.log('hi');
$(document).ready(function(){
  // $('body').append('<div class="runway"></div>');
  // $('body').append('<div class="end"></div>');
  // $('body').append('<div class= "buttons"></div>');
  // $('body').append('<div class="score">score</div>');
  // // $buttons.append('<button class= "start">start</button>');


  // const $buttons = $('.buttons');
  const $runway = $('.runway');
  const $start = $('.start');
  const $end = $('.end');
  const $playerScore = [];
//added the css into js now but i seem to have lost the position style and when i generate a new div under the class of note, the runway and note div bind and animate togeter. I want the note to animate individually.
  // $runway.css({
  //   'border': '2px dotted red',
  //   'height': '850px',
  //   'position': 'relative'});
  // $end.css({
  //   'border': '2px dotted blue',
  //   'position': 'absolute',
  //   'bottom': '10%',
  //   'height': '100px',
  //   'width': '500px'
  // });





  // this will start the game
  $start.click(function (){
    const $note = $('<div class="note"></div>');
    $runway.append($note);
    // const $note = $runway.append('<div class="note">note</div>');
    // $note.css({
    //   'background-color': 'silver',
    //   /*border: 2px*/
    //   'height': '50px',
    //   'width': '500px',
    //   'position': 'absolute'}
    // );
    $note.animate({'top': '+=810px'}, 2000, function(){
      if($note.position().top > 800){
        $note.remove();
      }
    });



    //this allows ou to click on end and add

    $end.on('click', function(){
      // console.log(end.on());
      if($note.position().top > 665 && $note.position().top < 765){
        // alert(true);
        console.log($note.position().top);
        $playerScore.push('50');
        alert($playerScore);
        $note.remove();
      }else {
        // alert(false);
        $note.remove();
        alert('bad move');
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



$(init);

let difficulty = 1000;


function init() {
  $('.start').on('click', startGame);
}

function startGame() {
  setInterval(appendNote, difficulty)
}

function appendNote() {
  const $note = $('<div class="note"></div>');
  $runway.append($note);
  animateNote($note);
}

function animateNote(note) {
}
