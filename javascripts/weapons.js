
var Gauntlet =(function (gauntletWeapons) {

<<<<<<< HEAD
gauntletWeapons.Weapon = function() {
=======
gauntletWeapons.WeaponBarracks = {};

gauntletWeapons.WeaponBarracks.Weapon = function() {
>>>>>>> 39d8a46a97b87ef10727fed35b8e4e0b5583a024
  this.weaponName = "bare hands";
  this.weaponDamage = 2;

  this.toString = function() {
    return this.name;
  }
};

<<<<<<< HEAD
gauntletWeapons.talkingPoints = function() {
=======
gauntletWeapons.WeaponBarracks.talkingPoints = function() {
>>>>>>> 39d8a46a97b87ef10727fed35b8e4e0b5583a024
  this.weaponName = "talking Points";
  this.weaponDamage = 4;
};
gauntletWeapons.WeaponBarracks.talkingPoints.prototype = new gauntletWeapons.WeaponBarracks.Weapon();

<<<<<<< HEAD
gauntletWeapons.experience = function() {
=======
gauntletWeapons.WeaponBarracks.experience = function() {
>>>>>>> 39d8a46a97b87ef10727fed35b8e4e0b5583a024
  this.weaponName = "experience";
  this.weaponDamage = 5;
};
gauntletWeapons.WeaponBarracks.experience.prototype = new gauntletWeapons.WeaponBarracks.Weapon();

return gauntletWeapons;

})(Gauntlet || {});
