
class Centaur {
  constructor(centaur) {
    this.name = centaur;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.count = 0;
  }
  shootBow() {
    this.count++;
    if ((this.count > 3) && (this.cranky === true)) {
      return `NO!`;
    } else if (this.layingDown === true) {
      return `NO!`;
    } else if (this.count === 3) {
      this.cranky = true;
    }
    return `Twang!!!`;
  }
  run() {
    this.count++;
    if ((this.count > 3) && (this.cranky === true)) {
      return `NO!`;
    } else if (this.layingDown === true) {
      return `NO!`;
    } else if (this.count === 3) {
      this.cranky = true;
    }
    return `Clop clop clop clop!!!`;
  }
  sleep() {
    if (this.standing === true) {
      return `NO!`;
    }
    this.cranky = false;
    this.count = 0;
    return `ZZZZ`;
  }
  layDown() {
    this.layingDown = true;
    this.standing = false;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.standing === false) {
      return `Not while I'm laying down!`;
    }
    this.count = 0;
    this.cranky = false;
  }
}




module.exports = Centaur;
