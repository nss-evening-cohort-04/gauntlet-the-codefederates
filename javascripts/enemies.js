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

})(Gauntlet || {});