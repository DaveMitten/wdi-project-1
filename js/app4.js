var Game = Game || {};

Game.init = function(){
  Game.$runway      = $('.runway');
  Game.$start       = $('.start');
  Game.$end         = $('.end');
  Game.playerScore  = 0;
  Game.playerLives  = 5;
  Game.difficulty   = 900;
  Game.speed        = 10000;
  Game.score        = $('.scoreBoard').html(`Score: ${Game.playerScore}`);

  Game.$start.on('click', Game.startGame);
};

Game.startGame = function(){
  Game.keyPress();
  Game.interval = setTimeout(Game.createNote, Game.difficulty);
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

Game.chooseRandomRunway = function() {
  return $($('.runway')[Math.floor(Math.random()*$('.runway').length)]).click();
};

Game.createNote = function (){
  Game.interval = setTimeout(Game.$createNote, Game.difficulty);
  const $runway = Game.chooseRandomRunway();
  Game.$note = $(`<div class="note"></div>`);
  $($runway).append(Game.$note);
  Game.animate();
};

Game.animate = function(){
  Game.$note.animate({'top': '+=810px'}, {
    duration: Game.speed,
    // step: Game.positionCheck,
    complete: Game.missedNote
  });
};

Game.missedNote = function() {
  console.log('missed Note');
  Game.playerLives--; // 4

  if (Game.playerLives === 0) {
    // game over;
    clearInterval(Game.interval);
  }
};

// Game.positionCheck = function() {
//   if( $(this).position().top > 800 ) $(this).stop().remove();
// };

Game.checkForNotes = function(keyCode) {
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
      // play missed sound
      console.log('wrongHit');
    }
  }
};



$(Game.init);
