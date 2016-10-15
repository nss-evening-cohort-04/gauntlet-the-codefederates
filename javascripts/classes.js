var Gauntlet = (function(gauntletClasses){

gauntletClasses.DebateHall = {};

gauntletClasses.DebateHall.PlayerClass = function() {
  this.name = "";
  this.party = null;

  this.toString = function() {
    return this.name;
  }
};

gauntletClasses.DebateHall.DonaldTrump = function() {
  this.name = "Donald Trump";
  this.party = "Republican";
};
gauntletClasses.DebateHall.DonaldTrump.prototype = new gauntletClasses.DebateHall.PlayerClass();


gauntletClasses.DebateHall.HillaryClinton = function() {
  this.name = "Hillary Clinton";
  this.party = "Democrat";
};
gauntletClasses.DebateHall.HillaryClinton.prototype = new gauntletClasses.DebateHall.PlayerClass();

return gauntletClasses;

})(Gauntlet || {});

