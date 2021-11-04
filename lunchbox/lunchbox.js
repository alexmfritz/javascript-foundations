var Snack = require('./snack');


class LunchBox {
  constructor(object) {
    this.owner = object.owner;
    this.material = object.madeOf
    this.shape = object.shape;
    this.color = object.color;
    this.snacks = [];
  }
  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }
  findHealthySnacks() {
    var healthySnacks = [];
    for(var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy()) {
        healthySnacks.push(this.snacks[i].type);
      }
    }
    return healthySnacks;
  }
}

module.exports = LunchBox;
