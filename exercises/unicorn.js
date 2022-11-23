class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  }

  isWhite() {
    // if (this.color !== 'white') {
    //   return false;
    // } else {
    //   return true;
    // }
    return (this.color === 'white');
  }

  says(stuff) {
    // return '**;* ' + stuff + ' *;**';
    return `**;* ${stuff} *;**`;
  }
}

module.exports = Unicorn;
