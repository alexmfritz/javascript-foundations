
class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = `human`;
    this.hungry = false;
  }
  completeTransformation() {
    if (this.form === `human`) {
      this.form = `wolf`;
      this.hungry = true;
      return this.form && `Aaa-Woooo!`;
    } else if (this.form === `wolf`){
      this.form = `human`
      this.hungry = false;
      return this.form && `Where are I?`;
    }
  }
  eatVictim(victim) {
    if (this.form === `human`) {
      return `No way am I eating ${victim.name}, I'd like a burger!`;
      } else if (this.form === `wolf`) {
        if (this.hungry === true) {
          victim.alive = false;
          this.form = `human`;
          return (`Yum, ${victim.name} was delicious.`);
      }
    }
  }
}



module.exports = Werewolf;
