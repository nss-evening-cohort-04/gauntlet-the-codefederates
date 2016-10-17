var Gauntlet =(function (gauntletEnemy) {



gauntletEnemy.Combatants.Opponent = function() {
  this.species = "Opponent";
  this.class = function() {
     if (playerOne.class === "Hillary Clinton") {
      this.class = "Donald Trump";
    } else {
      this.class = "Hillary Clinton";
    }
    return this.class;
  };
  this.weapon = null;
  this.voterName = "Voter";
}
gauntletEnemy.Combatants.Opponent.prototype = new Gauntlet.Combatants.Monster();

return gauntletEnemy;

})(Gauntlet || {});