var Gauntlet =(function (gauntletWeapons) {

var Weapon = function() {
  this.weaponName = "bare hands";
  this.weaponDamage = 2;

  this.toString = function() {
    return this.name;
  }
};

var talkingPoints = function() {
  this.weaponName = "talking Points";
  this.weaponDamage = 4;
};
talkingPoints.prototype = new Weapon();

var experience = function() {
  this.weaponName = "experience";
  this.weaponDamage = 5;
};
experience.prototype = new Weapon();

return gauntletWeapons;

})(Gauntlet || {});
