var Gauntlet =(function () {

var Weapon = function() {
  this.name = "bare hands";
  this.damage = 2;

  this.toString = function() {
    return this.name;
  }
};

var talkingPoints = function() {
  this.name = "talking Points";
  this.damage = 4;
};
talkingPoints.prototype = new Weapon();

var experience = function() {
  this.name = "experience";
  this.damage = 5;
};
experience.prototype = new Weapon();


})(Gauntlet || {});
