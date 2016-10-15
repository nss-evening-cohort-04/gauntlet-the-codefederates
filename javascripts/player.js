/* This is the base player.js file. When the index.html is more complete,
we will be able to complete the constructor functions listed below.
The constructor file will need to call from the index.html file what the user
has selected for their character/candidate */


var Gauntlet = (function (gauntletPlayer) {

gauntletPlayer.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */

gauntletPlayer.Combatants.Player = function(name) {
  this.class = null;
  this.weapon = null;

  this.voterName = name || "Voter";
  this.health = 100;

  this.toString = function() {
    var output = [this.voterName,
      "and",
      this.class, //this is the candidate
      " have ",
      this.health, //or "votes"
      " votes and uses",
      this.weapon,
      "!"
    ].join("");
    return output; // Ex: "Mike with Hillary Clinton has 100 votes and uses talking points!"
  };
};


//This creates the enemy:
gauntletPlayer.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
};

gauntletPlayer.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new gauntletPlayer.GuildHall[randomClass]();

};

/*
  Define the base properties for a human in a
  constructor function.
 */
gauntletPlayer.Combatants.Human = function() {

  this.allowedClasses = ["Donald Trump", "Hillary Clinton"];

};
gauntletPlayer.Combatants.Human.prototype = new gauntletPlayer.Combatants.Player();


/*
  Define the base properties for a monster in a
  constructor function.
 */

gauntletPlayer.Combatants.Monster = function() {
  this.health = this.health - 30; //for testing purposes, the enemy should be @ 70 health
};

gauntletPlayer.Combatants.Monster.prototype = new gauntletPlayer.Combatants.Player();


return gauntletPlayer;

})(Gauntlet || {});

