
var Gauntlet = (function(){


	const Battleground = function (human_combatant, enemy_combatant, console_output = false) {
	  this.human = human_combatant;
	  this.enemy = enemy_combatant;
	  this.console_output = console_output;
	}

	Battleground.prototype.attack = function(damage, target){
		damage = Gauntlet.weaponDamage;
		console.log(damage);
	}

})(Gauntlet || {});