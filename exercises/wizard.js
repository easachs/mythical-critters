class Wizard {
  constructor(attributes) {
    if (attributes.bearded === undefined) {
      attributes.bearded = true;
    }
    this.name = attributes.name;
    this.bearded = attributes.bearded;
    this.rested = true;
    this.castCount = 0;
  }

  incantation(incant) {
    return incant.toUpperCase();
  }

  cast() {
    this.castCount += 1;
    if (this.castCount >= 3) {
      this.rested = false;
      return 'I SHALL NOT CAST!!';
    } else {
      return 'MAGIC BULLET';
    }
  }
}

module.exports = Wizard;