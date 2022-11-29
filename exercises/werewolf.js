class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    if (this.wolf) {
      this.hungry = true;
    }
  }

  eat(victim) {
    if (this.wolf) {
      this.hungry = false;
      this.change();
      victim.alive = false;
    }
  }
}

module.exports = Werewolf;