

class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || `scallywag`;
    this.cursed = false;
    this.booty = 0;
    this.count = 0;
  }
  robShip() {
    if (this.count === 5) {
      this.cursed = true;
      return `ARG! I've been cursed!`;
    }
    this.count++;
    this.booty += 100;
    return `YAARRR!`;
  }
  liftCurse() {
    if (this.cursed === true) {
      this.booty -= 300;
      this.cursed = false;
      return `Your curse has been lifted!`;
    }
    return `You don't need to lift a curse!`
  }
}


module.exports = Pirate;
