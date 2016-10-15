var Gauntlet =(function (gauntletWeapon) {

	gauntletWeapon.Weapon = function() {
	  this.weaponName = "bare hands";
	  this.weaponDamage = 2;

	  this.toString = function() {
	    return this.name;
	  }
	};

	gauntletWeapon.talkingPoints = function() {
	  this.weaponName = "talking Points";
	  this.weaponDamage = 4;
	};
	talkingPoints.prototype = new Weapon();

	gauntletWapon.experience = function() {
	  this.weaponName = "experience";
	  this.weaponDamage = 5;
	};
	experience.prototype = new Weapon();

	return gauntletWeapon;
})(Gauntlet || {});
