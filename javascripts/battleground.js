 var Gauntlet = (function(battle){

	  $("#attackButton").on("click", function(){

	    //find out damage each player makes.
	    var heroAttack= Math.floor(Math.random() * (hero.attack + 1));
	    var enemyAttack = Math.floor(Math.random()* (enemy.attack + 1));


	    //subtract current damage from health.
	    battle.updateHeroHealth(enemyAttack);
	    battle.updateEnemyHealth(heroAttack);
	    //update DOM.
	    battle.outputCurrentHealths();
	    battle.logAttacks(heroAttack, enemyAttack);

	    //check if any healths are zero.
	    FoodFight.checkForDeath(currentHeroHealth, currentEnemyHealth, hero, enemy);
	  });

	  
	  fight.updateHeroHealth = function(enemyAttack) {
	    currentHeroHealth -= enemyAttack;
	    return currentHeroHealth;

	  };

	  fight.updateEnemyHealth = function(heroAttack) {
	    currentEnemyHealth -= heroAttack;
	    return currentEnemyHealth;
	  };


})(Gauntlet || {});