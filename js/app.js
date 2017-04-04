$(document).ready(function(){

  var Game = Game || {};

  Game.$runway = $('.runway');
  Game.$start = $('.start');
  Game.$end = $('.end');
  Game.playerScore = 0;
  Game.score = $('.scoreBoard').html(`Score: ${Game.playerScore}`);

//make the difficulty an object that can pull either Gsame.speed or Game.difficulty into the create note function//
  // Game.difficultyEasy = {difficulty =
  //   speed =
  //   }
  // Game.difficultyMedium ={difficulty =
  //   speed =
  //   }
  // Game.difficultyHard ={difficulty =
  //   speed =
  //   }
  Game.difficulty = 900;
  Game.speed = 2000;

  //this is the function taht allows the game to start
  Game.$init = function(){
    Game.$start.on('click', Game.$startGame);
  };
  //this creates the note and appends it to the runway
  Game.$createNote = function (){
    Game.$note = $('<div class="note"></div>');
    Game.$runway.append(Game.$note);
    Game.animate(Game.$note);
  };

  Game.$playerClick = Game.$end.click(function clickNote() {
    // const note = $('.note');
    const notePos = $('.note').position();
    // const end = $('.end').position();
    if(notePos.top >= 600 && notePos.top <= 810 ){
      $('.note').eq(0).remove();
      Game.playerScore++;
      Game.score = $('.scoreBoard').html(`Score: ${Game.playerScore}`);

      // console.log(Game.playerScore);
    }
      // console.log(note);
  });
  // Game.$addScore = function(){
  //   if(Game.$playerClick === true){
  //     // Game.playerScore++;
  //     // $('.scoreBoard').html(`Score: ${Game.playerScore}`);
  //     // Game.playerScore.push('50');
  //     // console.log('Game.playerScore');
  //   }
  // };

  //this creates a note and gives it a speed...
  Game.$startGame = function(){
    setInterval(Game.$createNote, Game.difficulty);
  };

  Game.animate = function(){
    // console.log($notes);
    Game.$note.animate({'top': '+=810px'}, {
      duration: Game.speed,
      step: Game.positionCheck
    });
  };

  Game.positionCheck = function() {
    // console.log($(this).position().top);
    if($(this).position().top > 800){
      $(this).remove();
    }
  };

    // Game.$end.click(function clickNote(){
  //   console.log('hi');
  //   if(Game.$note.position().top > 675 && Game.$note.position().top < 775){
  //     // alert(true);
  //     console.log(Game.$note.position().top);
  //     Game.$playerScore.push('50');
  //     // alert($playerScore);
  //     Game.$note.remove();
  //   }else {
  //     // alert(false);
  //     Game.$note.remove();
  //     alert('bad move');
  //   }
  //
  //
  // });
//i call on the function here...
  $(Game.$init);
});
