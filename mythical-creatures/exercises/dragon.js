class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.count = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`
  }
  eat() {
    this.count++;
    if (this.count === 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
// 1. read the test
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass
