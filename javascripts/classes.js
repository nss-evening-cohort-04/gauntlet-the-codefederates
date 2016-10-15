var Gauntlet = (function(){

Gauntlet.DebateHall = {};

Gauntlet.DebateHall.PlayerClass = function() {
  this.name = "";
  this.party = null;

  this.toString = function() {
    return this.name;
  }
};

Gauntlet.DebateHall.DonaldTrump = function() {
  this.name = "Donald Trump";
  this.party = "Republican";
};
Gauntlet.DebateHall.DonaldTrump.prototype = new Gauntlet.DebateHall.PlayerClass();


Gauntlet.DebateHall.HillaryClinton = function() {
  this.name = "Hillary Clinton";
  this.party = "Democrat";
};
Gauntlet.DebateHall.HillaryClinton.prototype = new Gauntlet.DebateHall.PlayerClass();

})(Gauntlet || {});

