class Grub {
  constructor(age = 0, color = 'pink',food='jelly'){
    this.color = color
    this.age = age
    this.food = food
  }
  eat (food) {
    return 'Mmmmmmmmm ' + this.food
  }
};
