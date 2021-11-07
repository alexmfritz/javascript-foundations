class Material {
  constructor(name, price, amt, units) {
    this.name = name;
    this.price = price;
    this.amount = amt;
    this.units = units;
  }
  useMaterial(amt) {
    if (amt > this.amount) {
      return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`;
    }
    this.amount -= amt;
    return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
  }
  calculateMaterialCost() {
    return this.price *= this.amount;
  }
}

module.exports = Material;
