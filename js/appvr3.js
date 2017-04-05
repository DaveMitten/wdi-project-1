var Game = Game || {};

Game.init = function(){
  Game.$runway      = $('.runway');
  Game.$start       = $('.start');
  Game.$end         = $('.end');
  Game.playerScore  = 0;
  Game.playerLives  = 5;
  Game.difficulty   = 1000;
  Game.speed        = 1000;
  Game.score        = $('.scoreBoard').html(`Score: ${Game.playerScore}`);

  Game.$start.on('click', Game.startGame);
};

Game.startGame = function(){
  Game.keyPress();
  // Game.interval = setInterval(Game.$createNote, Game.difficulty);
};

Game.chooseRandomRunway = function() {
  return $($('.runway')[Math.floor(Math.random()*$('.runway').length)]).click();
};

Game.$createNote = function (){
  Game.interval = setTimeout(Game.$createNote, Game.difficulty);
  const $runway = Game.chooseRandomRunway();
  Game.$note = $(`<div class="note" id="${$runway.attr('id')}"></div>`);
  $($runway).append(Game.$note);
  Game.animate();
};

Game.animate = function(){
  Game.$note.animate({'top': '+=810px'}, {
    duration: Game.speed,
    step: Game.positionCheck,
    complete: Game.missedNote
  });
};

Game.missedNote = function() {
  // playerLives--

  // if playerLives === 0 -> do something
};

Game.positionCheck = function() {
  if( $(this).position().top > 800 ) $(this).stop().remove();
};

// Game.playerClick = Game.$end.click(function clickNote() {
//   const notePos = $('.note').position();
//   if(notePos.top >= 600 && notePos.top <= 810 ){
//     $('.note').eq(0).remove();
//     Game.playerScore++;
//     Game.score = $('.scoreBoard').html(`Score: ${Game.playerScore}`);
//   }
// });

Game.checkForNotes = function(keyCode) {
  // console.log($(`#${keyCode}`));
  const $keyRunway = $(`#${keyCode}`);
  const $lastNoteInRunway = $keyRunway.children().first();
  let notePosition;

  if ($lastNoteInRunway.length !== 0) {
    notePosition = $($lastNoteInRunway).position();

    if(notePosition.top >= 600 && notePosition.top <= 810 ){
      $($lastNoteInRunway).stop().remove();
      // Game.playerScore++;
      // Game.score = $('.scoreBoard').html(`Score: ${Game.playerScore}`);
      console.log('correctHit');
    } else {
      console.log('wrongHit');
    }
  }



  // $.each($notesInRunway, function(index, note) {
  //   const notePosition = $(note).position();
  //   if(notePosition.top >= 600 && notePosition.top <= 810 ){
  //     $(note).stop().remove();
  //     Game.playerScore++;
  //     Game.score = $('.scoreBoard').html(`Score: ${Game.playerScore}`);
  //     console.log('correctHit');
  //   } else {
  //     console.log('wrongHit');
  //   }
  // });


  // console.log($keyRunway.children()); // -> array of notes within this runway

  // loop over all notes in runway and check if any note in within the correct place to remove it
  // notePos.top >= 600 && notePos.top <= 810 -> user has clicked correct key
  //
};

Game.keyPress = function() {
  $(document).on('keydown', function(e) {

    switch (e.which) {
      case 90:
      // console.log('Z');
      Game.checkForNotes(90);
      break;
      case 88:
      // console.log('X');
      Game.checkForNotes(88);
      break;
      case 67:
      // console.log('C');
      Game.checkForNotes(67);
      break;
      case 86:
      // console.log('V');
      Game.checkForNotes(86);
      break;
      case 66:
      // console.log('B');
      Game.checkForNotes(66);
      break;
    }
  });
};

$(Game.init);

//
// z == 64
//
// <div class='note' id='64'></div>
