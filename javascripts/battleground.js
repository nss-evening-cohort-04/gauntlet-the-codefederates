var Gauntlet = (function(battle){

let player, enemy

	battle.updateEnemyHealth = function() {
		$("#enemy-stats").html(
			`<h1>${enemy.class}</h1>
			<h3>With ${enemy.weapon}</h3>
			<h1 id="enemyHp">${enemy.health}</h1>`
		);
	};

	battle.updatePlayerHealth = function() {
		$("#player-stats").html(
			`<h1>${player.voterName}</h1>
			<h3>${player.class} with ${player.weapon}</h3>
			<h1>${player.health}</h1>`
		);
	}

	battle.InitializeBattleground = function(currentPlayer, currentEnemy) {

		player = currentPlayer;
		enemy = currentEnemy;

		//output player info to dom info div.
		$("#player-stats").html(
			`<h1>${player.voterName}</h1>
			<h3>${player.class} with ${player.weapon}</h3>
			<h1>${player.health}</h1>`
		);
		// output enemy info to the dom.
		$("#enemy-stats").html(
			`<h1>${enemy.class}</h1>
			<h3>With ${enemy.weapon}</h3>
			<h1>${enemy.health}</h1>`
		);

	}

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
			let currentLog = $(`<p><span class="insertText">${enemy.voterName}</span> attacks <span class="insertText">${player.voterName}</span> with <span class="insertText">${enemy.weapon}</span> This attack does <span class="insertText">${enemyAttackMath}</span> damage.<h1>player health is : ${player.health}</h1></p> <p><span class="insertText">${player.voterName}</span> attacks <span class="insertText">${enemy.voterName}</span> with <span class="insertText">${player.weapon}</span>. This attack does <span class="insertText">${playerAttackMath}</span> damage<h1 id="enemyHp">enemy health is : ${enemyAttack}</h1>.</p>`);

			//push all to DOM
			currentLog.hide().appendTo("#battleLog").fadeIn();

			//call to update health after attack
			battle.updateEnemyHealth();
			battle.updatePlayerHealth();

			//check if any healths are zero and do somethin about it!
			if (player.health <= 0) {
				$("#attackButton").attr("disabled", true);
				alert('you lose')
			};
			if (enemy.health <= 0) {
				$("#attackButton").attr("disabled", true);
				alert('you win')
			} else {
				$("#attackButton").removeAttr("disabled");
			}
		});

	return battle;

})(Gauntlet || {});