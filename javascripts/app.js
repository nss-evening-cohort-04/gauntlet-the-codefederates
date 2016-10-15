var Gauntlet =(function (gauntletApp) {

var voterPlayer = new gauntletApp.Combatants.Player();
voterPlayer.setWeapon(new WarAxe());
voterPlayer.generateClass();  // This will be used for "Surprise me" option
console.log(voterPlayer.toString());

var enemyCandidate = new gauntletApp.Combatants.Org();
enemyCandidate.generateClass();
enemyCandidate.setWeapon(new BroadSword());
console.log(enemyCandidate.toString());

/*
  Test code to generate a spell
 */
var spell = new gauntletApp.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

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
        moveAlong = ($("#player-name").val() !== "");
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

})(Gauntlet || {});
