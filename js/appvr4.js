var Game = Game || {};

Game.init = function(){

  Game.$runway         = $('.runway');
  Game.$end            = $('.end');
  Game.playerScore     = 0;
  Game.playerLives     = 0;
  Game.score           = $('.scoreBoard').html(`Score: ${Game.playerScore}`);
  Game.startSpeed      = 1500;
  Game.startDifficulty = 1500;
  Game.$start          = $('body').append(`<div class="start">Insert Coin\n Click\n to Play!</div>`);
  Game.$lives          = $('.lives').html(`Lives: ${Game.playerLives}`);

  Game.incrementTime      = function() {
    Game.startDifficulty -= 50;
    console.log(Game.startDifficulty);
  };

  Game.incrementSpeed = function() {
    Game.startSpeed  -= 50;
    console.log(Game.startSpeed);
  };

  Game.startGame         = function(){
    Game.playerScore     = 0;
    //i need to clear the score here
    $('.scoreBoard').html(`Score: ${Game.playerScore}`);
    console.log(Game.playerScore);
    Game.startSpeed      = 1500;
    Game.startDifficulty = 1500;
    $('.gameOver').remove();
    $('.start').remove();
    Game.keyPress();
    Game.interval    = setTimeout(Game.createNote, Game.startDifficulty);
    Game.playerLives = 4;
    $('.lives').html(`Lives: ${Game.playerLives}`);
    Game.satanic     = document.querySelector('.satanic');
    Game.playNote(Game.satanic);
    Game.satanic.volume = 0.2;
    Game.difficulty     = setInterval(Game.incrementTime, 2000);
    Game.speed          = setInterval(Game.incrementSpeed, 2000);
  };

  Game.keyPress = function() {
    $(document).on('keydown', Game.keyPressValue);
  };
  Game.playNote      = function(note) {
    note.currentTime = 0;
    note.play();
  };
  Game.keyPressValue  = function(e) {
    Game.note1        = document.querySelector('.note1');
    Game.note1.volume = 0.2;
    Game.note2        = document.querySelector('.note2');
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

  };

  Game.chooseRandomRunway = function() {
    return $($('.runway')[Math.floor(Math.random()*$('.runway').length)]).click();
  };

  Game.createNote = function(){
    Game.interval = setTimeout(Game.createNote, Game.startDifficulty);
    const $runway = Game.chooseRandomRunway();
    const $note   = $(`<div class="note"></div>`);
    $($runway).append($note);
    Game.animate($note);
  };

  Game.animate     = function($note){
    $note.animate({'top': '+=700px'}, {
      duration: Game.startSpeed, easing: 'linear',
      complete: () => Game.missedNote($note)
    });
  };

  Game.missedNote = function($note) {
    // Game.audio;
    // Game.audio = new Audio('./audio/bassend.wav');
    // Game.audiovolume = 1;
    // Game.audio.play();
    $note.stop().remove();
    Game.playerLives--;
    $('.lives').html(`Lives: ${Game.playerLives}`);
    console.log(Game.playerLives);
    if (Game.playerLives === 0) {
      clearInterval(Game.interval);
      console.log('Clearing Interval');
      clearInterval(Game.speed);
      console.log('Clearing Interval');
      clearInterval(Game.difficulty);
      console.log('Clearing Interval');
      Game.$gameOver = $(`<div class="gameOver"></div>`);
      $('body').append(Game.$gameOver);
      console.log(Game.$gameOver);
      $('.note').stop().remove();
      Game.$gameOver.text(`Game Over! ${Game.playerScore}
        Play again?`);
      $('.gameOver').on('click', Game.startGame);
    }
  };
  Game.checkForNotes     = function(keyCode) {
    const $keyRunway     = $(`#${keyCode}`);
    const $NotesInRunway = $keyRunway.children();

    if ($NotesInRunway.length !== 0) {
      $.each($NotesInRunway, function(index, note) {
        const notePosition = $(note).position();

        if(notePosition.top >= 565 && notePosition.top <= 655 ){
          $(note).stop().remove();
          console.log('correctHit');
          Game.playerScore++;
          Game.score         = $('.scoreBoard').html(`Score: ${Game.playerScore}`);
        }else if (notePosition.top > 628){
          console.log('missed');
          $(note).stop().remove();
        }
      });
    }
  };
  $('.start').one('click', Game.startGame);

};

$(Game.init);
