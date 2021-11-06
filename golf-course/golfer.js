



class Golfer {
  constructor(golfer) {
    this.name = golfer.name;
    this.handicap = golfer.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }
  calculateAvg(par) {
    this.handicap += par;
    return `I usually shoot a ${this.handicap} on average.`;
  }
  playRound(course) {
    if (course.difficulty === `hard`) {
      this.frustration  = 500;
    } else {
      this.frustration = 100;
    }
  }
  hitTheRange() {
    this.confidence += 10;
  }
  marvel(course) {
    return `I love the ${course.features.join(' and ')} on this course!`;
  }
  whatYaShoot(shots) {
    if (shots < 0) {
      this.frustration = 0;
      return `I AM THE GREATEST GOLFER ALIVE!`;
    } else if (shots === 0) {
      this.frustration -= 10;
      return `Booyah!`;
    } else if (shots > 0) {
      this.frustration += 20;
      return `Doh!`;
    }
  }
}

module.exports = Golfer;
