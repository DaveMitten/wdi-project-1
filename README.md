# wdi-project-1

**MAIN**
1st project for WDI/London. DavidJamesMitten.

Guitar hero for a javsscript basic programming.

needs a browser page

needs a collumn

needs to a div in that collumn

needs a div at the bottom of said collumn




...
**SELECTING ELEMENT/STARTING GAME**

attempt to animate the html element note to get it to slide down the runway. **DONE**

select the element that i want animate **DONE**

to start thE animation i need an event listener to be activated. **DONE**
...

**REMOVING DIV AND ADDING TO TOP AGAIN**

remove div when it reaches the bottom of the collumn (at 700 px) **DONE**

[remove() - Removes the selected element (and its child elements)
empty() - Removes the child elements from the selected element
might be using these.]

attempting to use offset to produce the coordinates for my div so that i can use this to add a 'removeclass' to my div **DONE...used position().top/used remove() for the removal of the div**


**LOOPING GAME**

Will need a while loop that whilst remaining true keeps looping and adding points. False when 4 consequetive notes have been missed

will need a math.random to be created which decides which note div gets generated;
Will need


**ADDING AND REMOVING NOTE**
once the button is removed i need to add it again to the top of '.runway div'. Then the animation needs to start again. and go continuously.




**SCORING**
click on the 'end div' to push the 'note div' value of 50 to player score empty array. only allow if 'note div' is within the limits of the 'end div' window

**RESULTS**
---one player---
send 'end div' clicks (that get the 'note div' within the dimensions of the 'end div' window) to an empty array.

option 1 = when timer is up, display total score (this has limitation of max points achievable)
option 2 = endless time, die when you miss 4 consequetive notes, display total points (pref.)


---two player---
Math.max(5, 10) this decides between two numbers which is higher, for my purpose which number wins.
each value produced when end div is clicked is sent to an empty array, which then gets totalled at the end.


var player1 = []

 function winner () {
   math.max(5, 10);
 }



**NEXT STEP**
now that the notes are falling down, the project is inside of an object and the start button is starting it off. I need to make it possible to click on a bar and add it to my score.

This has several parts.

1.) register the bar clicking. **done**
2.)register a click on  a note.
3.) send a value to the console.
4.)record value in an array

**ADD VALUE TO HIGH SCORE WINDOW**
display this on the right
When you die show high score

**MAKE MORE CHANNELS**
copy the current code that allows you to make a channel x 4
allocate to different divs that will line up as collumns for the game.



**MAKE DIFFICULTY BUTTONS**

first of all, need to create three buttons? or a drop down? Buttons probably more game like.






**rane**

difficulty buttons,
present score when finished (alert window styled?)
*setInterval(function(){ alert("Hello"); }, 3000);
var randomNumber = Math.floor(Math.random()*textArray.length);**

either a swtich statement that goes between cases (runway) to see which one gets a note placed on it




fonts

Monoton -

<style>
@import url('https://fonts.googleapis.com/css?family=Monoton');
</style>

font-family: 'Monoton', cursive;

<link href="https://fonts.googleapis.com/css?family=Monoton" rel="stylesheet">

8_bit -

<link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">

font-family: 'Press Start 2P', cursive;


<style>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
</style>
