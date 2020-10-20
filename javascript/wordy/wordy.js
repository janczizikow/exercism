export class ArgumentError extends Error {}

export class WordProblem {
  constructor(question) {
    this.question = question;
  }

  sum(x, y) {
    return x + y;
  }

  substract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    return x / y;
  }

  operation(operator) {
    if (operator.match(/(add|plus)/)) {
      return this.sum;
    } else if (operator.match(/(minus)/)) {
      return this.substract;
    } else if (operator.match(/(multiply?|multiplied)/)) {
      return this.multiply;
    } else if (operator.match(/(divided?)/)) {
      return this.divide;
    } else {
      throw new Error(`unrecognized operator: "${operator}"`);
    }
  }

  answer() {
    const numbers = this.question.match(/-?\d+/g)?.map(Number) ?? [];
    const operators = this.question.match(
      /(add|plus|minus|multiply?|multiplied|divided?)/g
    );

    if (numbers.length < 2 || !operators.length) {
      throw new ArgumentError(
        "Must provide at least 2 numbers and one recognized operation"
      );
    }

    const [start, ...rest] = numbers;

    return rest.reduce((acc, cur) => {
      const head = operators.shift();
      const operation = this.operation(head);
      return operation(acc, cur);
    }, start);
  }
}
