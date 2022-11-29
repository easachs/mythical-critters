class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.activityCount = 0;
  }

  shoot() {
    this.activityCount += 1;
    if (this.activityCount >= 3) {
      this.cranky = true;
      return 'NO!';
    } else if (this.layingDown) {
      return 'NO!';
    } else {
      return 'Twang!!!';
    }
  }

  run() {
    this.activityCount += 1;
    if (this.activityCount >= 3) {
      this.cranky = true;
    } else if (this.layingDown) {
      return 'NO!';
    } else {
      return 'Clop clop clop clop!!!';
    }
  }

  sleep() {
    if (this.standing) {
      return 'NO!';
    } else if (this.layingDown) {
      this.activityCount = 0;
      this.cranky = false;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.layingDown) {
      return 'Not while I\'m laying down!';
    } else {
      this.cranky = !this.cranky;
    }
  }
}

module.exports = Centaur;