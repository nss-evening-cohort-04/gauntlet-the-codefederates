var Gauntlet =(function (gauntletWeapons) {

gauntletWeapons.WeaponBarracks = {};

gauntletWeapons.WeaponBarracks.Weapon = function() {
  this.weaponName = "bare hands";
  this.weaponDamage = 2;

  this.toString = function() {
    return this.name;
  }
};

gauntletWeapons.WeaponBarracks.talkingPoints = function() {
  this.weaponName = "talking Points";
  this.weaponDamage = 4;
};
gauntletWeapons.WeaponBarracks.talkingPoints.prototype = new gauntletWeapons.WeaponBarracks.Weapon();

gauntletWeapons.WeaponBarracks.experience = function() {
  this.weaponName = "experience";
  this.weaponDamage = 5;
};
gauntletWeapons.WeaponBarracks.experience.prototype = new gauntletWeapons.WeaponBarracks.Weapon();

return gauntletWeapons;

})(Gauntlet || {});
