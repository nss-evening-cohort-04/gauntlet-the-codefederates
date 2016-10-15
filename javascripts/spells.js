var Gauntlet  = (function(gauntletSpells){

gauntletSpells.SpellBook = {};

/*
  Base spell function that defines name, damage, damage type
 */
gauntletSpells.SpellBook.Spell = function() {
  this.spellName = "";
  this.spellDamage = 0;

  this.toString = function() {
    return this.spellName + " have been used for " + this.spellDamage + " damage!";
  }
};

gauntletSpells.SpellBook.Emails = function() {
  this.spellName = "Deleted emails";
  this.spellDamage = Math.floor(Math.random() * 10 + 5);
};
gauntletSpells.SpellBook.Emails.prototype = new gauntletSpells.SpellBook.Spell();


gauntletSpells.SpellBook.angryCats = function() {
  this.spellName = "Angry cats";
  this.spellDamage = Math.floor(Math.random() * 10 + 5);

};
gauntletSpells.SpellBook.Emails.prototype = new gauntletSpells.SpellBook.Spell();

return gauntletSpells;

})(Gauntlet || {});
