



class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.counter = 0;
  }
  break() {
    this.counter++;
    this.broken = true;
  }
  repair() {
    if (this.counter < 2) {
      this.broken = false;
    } else {
      return `This ${this.type} has seen better days, we'll need a brand new one!`;
    }
  }
}

module.exports = Part;
