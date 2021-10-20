class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(str) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = str.split(' ');
    let newStr = [];

    for (let i = 0; i < words.length; i++) {
      let word = words[i];

      if (i === 0) {
        newStr.push(this.capitalize(word))
      } else {
        if (exceptions.includes(word)) {
          newStr.push(word)
        } else {
          newStr.push(this.capitalize(word))
        }
      }
    }

    return newStr.join(' ');
  }
}