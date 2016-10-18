var Gauntlet = (function(gauntletWords){

var trumpAttackWords = [];
var clintonAttackWords = [];

function getTrumpWordsAJAX(){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "../data/trump.json"
      }).done(function(statements){
        resolve(statements);
      }).fail(function(xhr, status, error){
        reject(error);
      });
    });
  }

function getClintonWordsAJAX(){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "../data/clinton.json"
      }).done(function(statements){
        resolve(statements);
      }).fail(function(xhr, status, error){
        reject(error);
      });
    });
  }

gauntletWords.getTrumpWords = function() {
  getTrumpWordsAJAX().then(function(statementsPass) {
    trumpAttackWords = statementsPass.trumpAttackStatements;
    console.log("trumpAttackWords", trumpAttackWords);
    var trumpStatement = mudSlinger(trumpAttackWords);
    return trumpStatement;
  })
}

gauntletWords.getClintonWords = function() {
  getClintonWordsAJAX().then(function(statementsPass) {
    clintonAttackWords = statementsPass.clintonAttackStatements;
    console.log("clintonAttackWords", clintonAttackWords);
    var clintonStatement = mudSlinger(clintonAttackWords);
    return clintonStatement;
  })
}

function mudSlinger(candidate) {
    var statement = candidate[Math.floor(Math.random() * candidate.length)];
    return statement;
}

return gauntletWords;

})(Gauntlet || {});