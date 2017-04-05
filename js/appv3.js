var Game = Game || {};

Game.init = function(){
  Game.$runway      = $('.runway');
  Game.$start       = $('.start');
  Game.$end         = $('.end');
  Game.playerScore  = 0;
  Game.playerLives  = 5;
  Game.difficulty   = 900;
  Game.speed        = 2000;
  Game.score        = $('.scoreBoard').html(`Score: ${Game.playerScore}`);

  Game.$start.on('click', Game.startGame);
};

Game.startGame = function(){
  Game.interval = setTimeout(Game.$createNote, Game.difficulty);
};

Game.chooseRandomRunway = function() {
  return $($('.runway')[Math.floor(Math.random()*$('.runway').length)]).click();
};

Game.$createNote = function (){
  Game.interval = setTimeout(Game.$createNote, Game.difficulty);
  Game.$note = $('<div class="note"></div>');
  $(Game.chooseRandomRunway()).append(Game.$note);
  Game.animate(Game.$note);
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

Game.playerClick = Game.$end.click(function clickNote() {
  const notePos = $('.note').position();
  if(notePos.top >= 600 && notePos.top <= 810 ){
    $('.note').eq(0).remove();
    Game.playerScore++;
    Game.score = $('.scoreBoard').html(`Score: ${Game.playerScore}`);
  }
});

$(Game.init);
