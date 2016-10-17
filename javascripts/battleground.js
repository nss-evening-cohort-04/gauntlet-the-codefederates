 var Gauntlet = (function(battle){
 	let player = {
 		"name" : "wee",
 		"class" : "wiener",
 		"weaponName" : "butt",
 		"health" : 55,
 		"attack" : 15
 	}

 	 // 		"name" : battle.Combatants.Player.voterName,
 		// "class" : battle.Combatants.Player.class,
 		// "weaponName" : battle.Combatants.Player.weapon,
 		// "health" : battle.Combatants.Player.health,
 		// "attack" : 15

 	let enemy = {
 		"name" : "butthole",
 		"species" : "rabbit",
 		"weaponName" : "fish",
 		"health" : 55,
 		"attack" : 15
 	}
 	console.log("enemy", enemy)
 	console.log("player", player);


	//this is a click function for the battle
	$("#attackButton").on("click", function(){
		let playerAttackMath = Math.floor(Math.random() * (player.attack + 1));
		let enemyAttackMath = Math.floor(Math.random()* (enemy.attack + 1));
		let playerAttack = player.health -= enemyAttackMath;
		let enemyAttack = enemy.health -= playerAttackMath;
		console.log("player hp", player.health);
		console.log("enemy hp", enemy.health);
		console.log("player attack", playerAttackMath);
		console.log("enemy attack", enemyAttackMath);
		//combat log text output
		$("#battleLog").text("");
		let currentLog = $(`<p><span class="insertText">${enemy.name}</span> attacks <span class="insertText">${player.name}</span> with <span class="insertText">${enemy.weaponName}</span> This attack does <span class="insertText">${enemyAttackMath}</span> damage.<h1>player health is : ${player.health}</h1></p> <p><span class="insertText">${player.name}</span> attacks <span class="insertText">${enemy.name}</span> with <span class="insertText">${player.weaponName}</span>. This attack does <span class="insertText">${playerAttackMath}</span> damage<h1>enemy health is : ${enemy.health}</h1>.</p>`);
		
		//push all to DOM
		currentLog.hide().appendTo("#battleLog").fadeIn();

		//check if any healths are zero and do somethin about it!
		if (player.health <= 0) {
			$("#attackButton").attr("disabled", true);
			alert('you lose')
		};
		if (enemy.health < 0) {
			$("#attackButton").attr("disabled", true);
			alert('you win')
		} else {
			$("#attackButton").removeAttr("disabled");
		}
	});

	return battle;

})(Gauntlet || {});