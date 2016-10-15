
var Gauntlet =(function (gauntletWeapons) {

gauntletWeapons.Weapon = function() {
  this.weaponName = "bare hands";
  this.weaponDamage = 2;

  this.toString = function() {
    return this.name;
  }
};

gauntletWeapons.talkingPoints = function() {
  this.weaponName = "talking Points";
  this.weaponDamage = 4;
};
talkingPoints.prototype = new Weapon();

gauntletWeapons.experience = function() {
  this.weaponName = "experience";
  this.weaponDamage = 5;
};
experience.prototype = new Weapon();

return gauntletWeapons;

})(Gauntlet || {});
