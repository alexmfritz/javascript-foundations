var Person = require('./person');
var Statue = require('./statue');



class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    this.statues.push(new Statue(victim.name));
    if (this.statues.length > 3) {
      var person = this.statues.shift();
      return new Person(person.name, `relieved`);
    }
  }
}








module.exports = Medusa;
