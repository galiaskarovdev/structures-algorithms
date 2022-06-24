const factorial = n => {
    if(n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

const fibonacci = n => {
    console.log(n);
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(4))