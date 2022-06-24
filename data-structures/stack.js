// Простой пример структуры данных "Стэк"
// Работает по методу "Последним вошёл - первым вышел"
class Stack {
    constructor() {
        this.stack = [];
    }
    add (value) {
        this.stack.push(value);
        return this;
    }
    get size() {
        return this.stack.length;
    }
    pop() {
        return this.stack.pop();
    }
}

const stack = new Stack();

stack.add(5)
    .add(7)
    .add(8)
    .add(9);

console.log(stack.pop(), stack.pop(), stack.size)