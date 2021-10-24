
class Fairy {
  constructor(name, disposition) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: [`Iris`],
    }
    this.disposition = disposition || `Good natured`;
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust++;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(flowers) {
    this.clothes.dresses = this.clothes.dresses.concat(flowers);
  }
  becomeProvoked() {
    this.disposition = `Vengeful`;
  }
  replaceInfant(changelings) {
    if (this.humanWards.length >= 2) {
      this.disposition = `Good natured`;
    }
    if (this.disposition === `Vengeful`) {
      this.humanWards.push(changelings);
      return changelings.disposition = `Malicious`;
    } else {
      return changelings;
    }
  }
}

module.exports = Fairy;
