
class Magician {
  constructor(magician) {
    this.name = `The Great ${magician.name}`;
    this.assistant = magician.assistant;
    this.favoriteAccessory = magician.clothing || `top hat`;
    this.confidencePercentage = 10;
  }
  performIncantation(spell) {
    return `${spell.toUpperCase()}!`;
  }
  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === `top hat`) {
      return `PULL RABBIT FROM TOP HAT`;
    }
    return `PULL DOVE FROM SLEEVE`;
  }
  performShowStopper() {
    if ((this.assistant === true) && (this.confidencePercentage >= 100)) {
      return `WOW! The magician totally just sawed that person in half!`;
    }
    return `Oh no, this trick is not ready!`
  }
}



module.exports = Magician;
