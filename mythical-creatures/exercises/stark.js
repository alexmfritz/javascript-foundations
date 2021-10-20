const Direwolf = require('../exercises/direwolf');




class Stark {
  constructor(stark) {
    if (stark) {
      this.name = stark.name
      this.location = stark.area || `Winterfell`;
      this.safe = false;
    }
  }
  sayHouseWords() {
    if (this.safe === true) {
      return `The North Remembers`;
    } else if (this.safe === false) {
      return `Winter is Coming`;
    }
  }
  callDirewolf(name, home) {
    var direwolf = new Direwolf(name, home);
    direwolf.home = this.location;
    direwolf.protect(this);
    return direwolf;
  }
}



module.exports = Stark;
