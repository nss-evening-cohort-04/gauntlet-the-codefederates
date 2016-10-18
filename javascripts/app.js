/*
  Test code to generate a human player and an enemy player
 */
  // let playerOne = new Gauntlet.Combatants.Human();
  // playerOne.weapon = "bare hands";
  // playerOne.class = "Hillary Clinton";
  // playerOne.voterName = "Taylor";
  // console.log(playerOne.toString());

  // let enemyOne = new Gauntlet.Combatants.Opponent();
  // enemyOne.weapon = "talking points";
  // enemyOne.class();
  // console.log(enemyOne.toString());

/*
  Test code to generate a spell
 */
// var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());

/* Create new instance of Human */
let playerOne = new Gauntlet.Combatants.Human();
let buttholio = new Gauntlet.Combatants.Opponent();
/* Create new instance of Opponent */
$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  //event listener to set player name
  $("#candidateBtn").click(function() {
    var playerName = $("#player-name").val(); // grabs player name once typed
    /* Declare this.voterName = playerName; */
    playerOne.voterName = playerName;
    console.log(playerOne.toString());
  });

  // For Selecting Candidate:
  /* use if statement to determine if the user clicked Clinton or Trump
  if Trump is clicked, class = "Donald Trump"
  if Clinton is clicked, class = "Hillary Clinton" 
  BOTH CLINTON & TRUMP BUTTONS will need id's so we can call them in the .js files */
  //event listener to set player class
  $(".btn--blue").click(function() {
    playerOne.class = "Hillary Clinton";
    console.log(playerOne.toString());
  });
  $(".btn--orange").click(function() {
    playerOne.class = "Donald Trump";
    console.log(playerOne.toString());
  });

  //For Selecting Weapon:
  /* if statement for when a weapon is clicked, to "equip" player with weapon
  When "Debate your opponent" is clicked, an enemy also needs to be created with:
  > class (candidate)
  > weapon
  > health (should be already covered in player.js, but double check logic... initially prints 70)
  */
  $("#talkingpoints").click(function() {
    playerOne.weapon = "talking points";
    console.log(playerOne.toString());
  });
  $("#experience").click(function() {
    playerOne.weapon = "experience";
    console.log(playerOne.toString());
  });
  $("#barehands").click(function() {
    playerOne.weapon = "bare hands";
    console.log(playerOne.toString());
  });
  console.log(playerOne);
  var newPlayer = playerOne
  console.log(newPlayer);

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
        buttholio.class();
        Gauntlet.InitializeBattleground(playerOne, buttholio);
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
