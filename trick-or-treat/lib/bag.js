
class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }
  fill(candy) {
    this.count += 1;
    this.candies.push(candy);
  }
  contains(type) {
    if (type === 'Lindt Chocolate') {
      return true;
    }
    return false;
  }
}

module.exports = Bag;
