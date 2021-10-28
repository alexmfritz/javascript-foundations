


class Gear {
  constructor(gear, amount) {
    this.type = gear;
    this.quantity = amount;
  }
  checkForValidity() {
    if ((this.type === 'food') || (this.type ==='ammunition') || (this.type ==='clothes')) {
      return `Great, we'll need lots of ${this.type}!`;
    }
    this.type = null;
    return `I don't think a mp3 player will help us.`;
  }
}

module.exports = Gear;
