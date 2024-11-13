'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
   
    result: 0,

   
    add(value) {
      this.result += value;
    },

   
    subtract(value) {
      this.result -= value;
    },

   
    multiply(value) {
      this.result *= value;
    },

   
    divide(value) {
      if (value !== 0) {
        this.result /= value;
      } else {
        // eslint-disable-next-line no-console
        console.error('Cannot divide by zero');
      }
    },

   
    operate(operation, value) {
      operation.call(this, value); 
      return this; 
    },

    reset() {
      this.result = 0;

      return this; 
    },
  };
}

module.exports = makeCalculator;
