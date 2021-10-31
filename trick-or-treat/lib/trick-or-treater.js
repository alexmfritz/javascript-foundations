
class TrickOrTreater {
  constructor(costume) {
    this.dressedUpAs = costume.style;
    this.bag = {
      candies: [],
      count: 0,
    }
    this.hasCandy = false;
    this.countCandies = 0;
  }
  putCandyInBag(candy) {
    this.countCandies++;
    this.bag.count++;
    this.hasCandy = true;
    this.bag.candies.push(candy);
  }
  eat() {
    this.countCandies--;
    this.bag.candies.pop();
  }
}



module.exports = TrickOrTreater;
