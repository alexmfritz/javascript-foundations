class Dragon {
  constructor(name, rider, count) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.count = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat(count) {
    this.count++;
    if (this.count >= 3){
      return this.hungry = false;
    }
  }
}


module.exports = Dragon;
// 1. read the test
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass
