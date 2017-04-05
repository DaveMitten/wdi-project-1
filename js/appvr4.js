var Game = Game || {};

Game.init = function(){
  Game.$runway      = $('.runway');
  Game.$start       = $('.start');
  Game.$end         = $('.end');
  Game.playerScore  = 0;
  Game.playerLives  = 4;
  Game.difficulty   = 1500;
  Game.speed        = 1500;
  Game.score        = $('.scoreBoard').html(`Score: ${Game.playerScore}`);




  Game.$start.on('click', Game.startGame);

//you need to select easy, hard, or medium.

};

Game.startGame = function(){
  Game.keyPress();
  Game.interval = setTimeout(Game.createNote, Game.difficulty);
  Game.audio;
  Game.audio = new Audio('../audio/satanic.mp3');
  Game.audio.play();
  Game.audio.volume = 0.2;
};

Game.keyPress = function() {
  $(document).on('keydown', Game.keyPressValue);
};

Game.playNote = function(note) {
  note.currentTime = 0;
  note.play();
};

Game.keyPressValue = function(e) {
  Game.note1 = document.querySelector('.note1');
  Game.note1.volume = 0.2;
  Game.note2 = document.querySelector('.note2');
  Game.note2.volume = 1;
  switch (e.which) {
    case 90:
      Game.playNote(Game.note2);
      Game.checkForNotes(90);
      break;
    case 88:
      Game.playNote(Game.note2);
      Game.checkForNotes(88);
      break;
    case 67:
      Game.playNote(Game.note2);
      Game.checkForNotes(67);
      break;
    case 86:
      Game.playNote(Game.note2);
      Game.checkForNotes(86);
      break;
    case 66:
      Game.playNote(Game.note2);
      Game.checkForNotes(66);
      break;
  }
  // Game.audio.play();
  // Game.audio.volume = 0.5;

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
    duration: Game.speed, easing: 'linear',
    complete: () => Game.missedNote($note)
  });
};

Game.missedNote = function($note) {
  Game.audio;
  Game.audio = new Audio('audio/bassend.wav');
  $note.stop().remove();
  Game.playerLives--; // 4
  console.log(Game.playerLives);
  if (Game.playerLives <= 0) {
    clearInterval(Game.interval);
    const $gameOver = $(`<div class="gameOver"></div>`);
    $('body').append($gameOver);
    $gameOver.html(`Game Over! ${Game.playerScore}
    Play again?`);
    Game.$gameOver.on('click', Game.startGame);

  }
  Game.audio.play();

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
        Game.playerScore++;
        Game.score = $('.scoreBoard').html(`Score: ${Game.playerScore}`);
        } else if (notePosition.top > 628){
        console.log('missed');
        $(note).stop().remove();
      }
    });
  }
};



$(Game.init);
