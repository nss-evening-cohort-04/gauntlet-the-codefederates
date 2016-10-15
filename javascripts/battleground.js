 // var Gauntlet = (function(battle){

 	let currentHeroHealth, currentEnemyHealth, hero, enemy

	 battle.outputCurrentHealths = function() {
	    var replacementHeroHealth = $(`<span id ="currentHeroHealth">${currentHeroHealth}</span>`).hide();
	    var replacementEnemyHealth = $(`<span id="currentEnemyHealth">${currentEnemyHealth}</span>`).hide();
	    $("#currentHeroHealth").fadeOut();
	    $("#currentHeroHealth").replaceWith(replacementHeroHealth);
	    $("#currentHeroHealth").fadeIn();
	    $("#currentEnemyHealth").fadeOut();
	    $("#currentEnemyHealth").replaceWith(replacementEnemyHealth);
	    $("#currentEnemyHealth").fadeIn();
	  }


	//   $("#attackButton").on("click", function(){


	    //find out damage each player makes.
	    let heroAttack= Math.floor(Math.random() * (hero.attack + 1));
	    let enemyAttack = Math.floor(Math.random()* (enemy.attack + 1));

	    //subtract current damage from health.
	    battle.updateHeroHealth(enemyAttack);
	    battle.updateEnemyHealth(heroAttack);

	    //update DOM.
	    battle.outputCurrentHealths();
	    battle.logAttacks(heroAttack, enemyAttack);

	    //check if any healths are zero.
	    Gauntlet.checkForDeath(currentHeroHealth, currentEnemyHealth, hero, enemy);
	  });


	  battle.updateHeroHealth = function(enemyAttack) {
	    currentHeroHealth -= enemyAttack;
	    return currentHeroHealth;

	  };

	  battle.updateEnemyHealth = function(heroAttack) {
	    currentEnemyHealth -= heroAttack;
	    return currentEnemyHealth;
	  };





})(Gauntlet || {});