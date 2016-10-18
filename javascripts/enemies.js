var Gauntlet =(function (gauntletEnemy) {

gauntletEnemy.Combatants.Opponent = function() {
  this.species = "Opponent";
  this.attack = 15;
  this.weapon = "Bull Horn"
  this.class = function() {
     if (playerOne.class === "Hillary Clinton") {
      this.class = "Donald Trump";
    } else {
      this.class = "Hillary Clinton";
    }
  }

};

gauntletEnemy.Combatants.Opponent.prototype = new gauntletEnemy.Combatants.Monster();

return gauntletEnemy;

})(Gauntlet || {});