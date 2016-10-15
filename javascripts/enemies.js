<<<<<<< HEAD
var Gauntlet =(function (gauntletEnemy) {

gauntletEnemy.Combatants.Opponent = function() {
  this.species = "Opponent";
  this.class = function() {
     if (gauntletPlayer.class === "Hillary Clinton") {
      this.class = "Donald Trump";
    } else {
      this.class = "Hillary Clinton";
    }
  }

};

gauntletEnemy.Combatants.Opponent.prototype = new gauntletEnemy.Combatants.Monster();

return gauntletEnemy;
=======
// Gauntlet.Combatants.Orc = function() {
//   this.health = this.health + 20;
//   this.species = "Orc";
//   this.allowedClasses = ["Warrior", "Berserker", "Shaman"];

//   this.generateClass = function() {
//     // Get a random index from the allowed classes array
//     var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

//     // Get the string at the index
//     var randomClass = this.allowedClasses[random];

//     // Composes the corresponding player class into the player object
//     this.class = new Gauntlet.GuildHall[randomClass]();
//     return this.class;
//   }
// };

// Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();
>>>>>>> master

})(Gauntlet || {});