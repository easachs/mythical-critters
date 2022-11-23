class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.isShort = true;
    this.adult = false;
    this.old = false;
    this.hasRing = this.isFrodo()
  }

  celebrateBirthday() {
    this.age += 1;
    if (this.age > 100) {
      this.old = true;
    } else if (this.age > 32) {
      this.adult = true;
    }
  }

  isFrodo() {
    return (this.name === 'Frodo');
  }
}

module.exports = Hobbit;