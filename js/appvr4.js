var Game = Game || {};

Game.init = function(){
  Game.$runway      = $('.runway');
  Game.$start       = $('.start');
  Game.$end         = $('.end');
  Game.playerScore  = 0;
  Game.playerLives  = 5;
  Game.difficulty   = 3000;
  Game.speed        = 3000;
  Game.score        = $('.scoreBoard').html(`Score: ${Game.playerScore}`);

  Game.$start.on('click', Game.startGame);
};

Game.startGame = function(){
  Game.keyPress();
  Game.interval = setTimeout(Game.createNote, Game.difficulty);
};

Game.keyPress = function() {
  $(document).on('keydown', Game.keyPressValue);
};

Game.keyPressValue = function(e) {
  switch (e.which) {
    case 90:
      Game.checkForNotes(90);
      break;
    case 88:
      console.log('X');
      Game.checkForNotes(88);
      break;
    case 67:
      Game.checkForNotes(67);
      break;
    case 86:
      Game.checkForNotes(86);
      break;
    case 66:
      Game.checkForNotes(66);
      break;
  }
};

Game.chooseRandomRunway = function() {
  return $($('.runway')[Math.floor(Math.random()*$('.runway').length)]).click();
};

Game.createNote = function(){
  Game.interval = setTimeout(Game.createNote, Game.difficulty);

  const $runway = Game.chooseRandomRunway();
  const $note = $(`<div class="note"></div>`);
  $($runway).append($note);
  Game.animate($note);
};

Game.animate = function($note){
  $note.animate({'top': '+=700px'}, {
    duration: Game.speed,
    complete: () => Game.missedNote($note)
  });
};

Game.missedNote = function($note) {
  console.log('Missed');
  $note.stop().remove();
  // Game.playerLives--; // 4
  //
  // if (Game.playerLives === 0) {
  //   // game over;
  //   // clearInterval(Game.interval);
  // }
};

Game.checkForNotes = function(keyCode) {
  const $keyRunway = $(`#${keyCode}`);
  const $NotesInRunway = $keyRunway.children();

  if ($NotesInRunway.length !== 0) {
    $.each($NotesInRunway, function(index, note) {
      const notePosition = $(note).position();

      if(notePosition.top >= 603 && notePosition.top <= 628 ){
        $(note).stop().remove();
        console.log('correctHit');
      } else if (notePosition.top > 628){
        console.log('missed');
        $(note).stop().remove();
      }
    });
  }
};



$(Game.init);
