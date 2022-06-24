function cache(callback) {
     const cacheMap = new Map();
     return function (item) {
         if (cacheMap.size > 0) {
             console.log(cacheMap);
         }
         if(cacheMap.has(item)) {
             return cacheMap.get(item);
         }
         const value = callback.call(this, item);
         cacheMap.set(item, value);
         return value;
     };
}

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

const cacheRecursion = cache(factorial);
console.log(cacheRecursion(5));
console.log(cacheRecursion(5))