class HoneyMakerBee extends Bee{
  constructor() {
    super()
    this.job = 'make honey'
    this.honeyPot = 0
    this.age = 10
  }
  makeHoney() {
    this.honeyPot += 1
  }

  giveHoney() {
    this.honeyPot -= 1
  }
  // TODO..
};
