
class Centaur {
  constructor(name) {
    this.name = name || name.name;
    this.breed = name.type;
    this.standing = true;
    this.count = 0;
    this.cranky = false;
    this.layingDown = false;
  }
  shootBow() {
    this.count++;
    if ((this.count > 3) && (this.cranky === true)) {
      return `NO!`;
    } else if (this.layingDown === true) {
      return `NO!`;
    } else if (this.count === 3) {
      this.cranky = true;
      return `Twang!!!`;
    } else if (this.count < 3) {
      return `Twang!!!`;
    }
  }
  run() {
    this.count++;
    if ((this.count > 3) && (this.cranky === true)) {
      return `NO!`;
    } else if (this.layingDown === true) {
      return `NO!`;
    } else if (this.count === 3) {
      this.cranky = true;
      return `Clop clop clop clop!!!`;
    } else if (this.count < 3) {
      return `Clop clop clop clop!!!`;
    }
  }
  sleep() {
    if (this.standing === true) {
      return `NO!`;
    } else if (this.standing === false) {
      this.cranky = false;
      this.count = 0;
      return `ZZZZ`;
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.standing === true) {
      this.cranky = false;
      this.count = 0;
    } else if (this.standing === false) {
      return `Not while I'm laying down!`;
    }
  }
}




module.exports = Centaur;
