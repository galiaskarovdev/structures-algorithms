// Простой пример структуры данных "Очередь"
// Работает по методу "Первым вошёл - первым вышел"


class Queue {
    constructor() {
        this.queue = [];
    }

    add(value) {
        this.queue.push(value);
        return this;
    }

    shift() {
        return this.queue.shift();
    }
}


const queue = new Queue();

queue.add(5)
.add(6)
.add(7);

console.log(queue.shift(), queue.shift());