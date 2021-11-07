


class Runner {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }
  runSomeMiles(miles) {
    this.milesRun += miles;
    this.fitness += (1 * miles);
  }
  stretch() {
    this.fitness += .5;
  }
  runRace(race, miles) {
    this.completedRaces.push(race);
    this.milesRun += miles;
    this.fitness += miles;
  }
}

module.exports = Runner;
