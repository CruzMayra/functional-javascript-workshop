function repeat(operation, num) {
    if(num === 0) {
      return;
    }
    operation()
    return repeat(num - 1);
  }
  // Do not remove the line below
  module.exports = repeat
