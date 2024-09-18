class Stack {
  public stack: Array<string>;

  constructor() {
    this.stack = [];
  }

  addValue(value: string) {
    this.stack.push(value);
    return this.stack;
  }

  removeValue() {
    this.stack.pop();
    return this.stack;
  }

  size() {
    return this.stack.length;
  }

  peek() {
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    if (this.size() === 0) {
      return true;
    } else {
      return false;
    }
  }

  isReversed() {
    return this.stack.reverse().join(" ");
    return this.stack;
  }
}

let stack = new Stack();

stack.addValue("Lagos sky appears to be white and sunny today");
stack.isReversed;

console.log(stack);
