//Your application here should use jQuery to wire up the interface to play a
//Simon Says type game. A SimonGame object has been provided that has the guts
//of the game logic. You should not _need_ to edit simongame.js however if you
//want to add extra features like more colors, etc edit the file to your hearts
//content.

var game;

function newGame() {
  game = new SimonGame(4);
  //Diplay the answer for 2 seconds
  $(".display").text(game.answer());
    
  setTimeout(function() {
      
      $(".display").text("");
      
  }, 2000);
}


//listen to a button click
$("#red").click(function() {
    var guess = game.guess("red");
    if (guess === "lost") {
        alert("You lost");
    } else if (guess==="won") {
        
       alert("You Won!");
        
    } 
});
$("#green").click(function() {
    var guess = game.guess("green");
    if (guess === "lost") {
        alert("You lost");
    } else if (guess==="won") {
          alert("You Won!");
    } 
});
$("#yellow").click(function() {
    var guess = game.guess("yellow");
    if (guess === "lost") {
        alert("You lost");
    } else if (guess==="won") {
         alert("You Won!");
    } 
});
$("#blue").click(function() {
    var guess = game.guess("blue");
    if (guess === "lost") {
        alert("You lost");
    } else if (guess==="won") {
         alert("You Won!");
    } 
});
//make a guess based on the button

//reset game should start a new game
$(".start-over").click(function() {
  newGame();
});