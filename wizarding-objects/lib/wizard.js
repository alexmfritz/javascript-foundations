
class Wizard {
  constructor(wizard) {
    this.name = wizard.name;
    this.pets = [];
    this.petsCount = 0;
  }
  adoptPet(pet) {
    this.pets.push(pet);
    this.petsCount++;
  }
  petsList() {
    return `A ${this.pets[0].type} named ${this.pets[0].name}; An ${this.pets[1].type} named ${this.pets[1].name}.`;
  }
  getWand(wand) {
    this.wand = new Wand(wand);
  }
}


module.exports = Wizard;
