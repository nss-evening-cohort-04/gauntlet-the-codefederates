/*
  Test code to generate a human player and an orc player
 */
// var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

// var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// orc.setWeapon(new BroadSword());
// console.log(orc.toString());

/*
  Test code to generate a spell
 */
// var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());
var playerName = $("#player-name").value; // grabs player name once typed
/* Create new instance of Human */
/* Declare this.voterName = playerName; */


// For Selecting Candidate:
/* use if statement to determine if the user clicked Clinton or Trump
   if Trump is clicked, class = "Donald Trump"
   if Clinton is clicked, class = "Hillary Clinton" 
BOTH CLINTON & TRUMP BUTTONS will need id's so we can call them in the .js files */



//For Selecting Weapon:
/* if statement for when a weapon is clicked, to "equip" player with weapon
When "Debate your opponent" is clicked, an enemy also needs to be created with:
 > class (candidate)
 > weapon
 > health (should be already covered in player.js, but double check logic... initially prints 70)
*/
$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();
  var playerOne = new Gauntlet.Combatants.Player();
  playerOne.weapon = "bare hands";
  playerOne.class = "Hillary Clinton";
  playerOne.voterName = "Taylor";
  console.log(playerOne.toString());


  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = true;
        break;
      case "card--battleground":
        moveAlong = true;
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});
