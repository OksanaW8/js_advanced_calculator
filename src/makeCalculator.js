'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    // Початковий результат
    result: 0,

    // Додавання
    add(value) {
      this.result += value;
    },

    // Віднімання
    subtract(value) {
      this.result -= value;
    },

    // Множення
    multiply(value) {
      this.result *= value;
    },

    // Ділення
    divide(value) {
      if (value !== 0) {
        this.result /= value;
      } else {
        // eslint-disable-next-line no-console
        console.error('Cannot divide by zero');
      }
    },

    // Операція, що приймає callback і значення
    operate(operation, value) {
      operation.call(this, value); // Виклик операції з переданим значенням

      return this; // Повертаємо об'єкт для ланцюжкових викликів
    },

    // Скидання результату
    reset() {
      this.result = 0;

      return this; // Повертаємо об'єкт для ланцюжкових викликів
    },
  };
}

module.exports = makeCalculator;
