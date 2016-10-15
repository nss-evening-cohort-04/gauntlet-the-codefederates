var Gauntlet  = (function(){

Gauntlet.SpellBook = {};

/*
  Base spell function that defines name, damage, damage type
 */
Gauntlet.SpellBook.Spell = function() {
  this.spellName = "";
  this.spellDamage = 0;

  this.toString = function() {
    return this.spellName + " have been used for " + this.spellDamage + " damage!";
  }
};

Gauntlet.SpellBook.Emails = function() {
  this.spellName = "Deleted emails";
  this.spellDamage = Math.floor(Math.random() * 10 + 5);
};
Gauntlet.SpellBook.Emails.prototype = new Gauntlet.SpellBook.Spell();


Gauntlet.SpellBook.angryCats = function() {
  this.spellName = "Angry cats";
  this.spellDamage = Math.floor(Math.random() * 10 + 5);

};
Gauntlet.SpellBook.Emails.prototype = new Gauntlet.SpellBook.Spell();

})(Gauntlet || {});
