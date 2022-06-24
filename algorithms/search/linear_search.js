// Алгоритм линейного поиска
// Сложность O(n)


const array = [1,4,5,8,5,1,2,7,5,2,11]
let count = 0;

function linear_search(array, element) {
    for (let index = 0; index < array.length; index++) {
        count++;
        if (array[index] === element) {
            return index;
        }
    }
}

console.log(linear_search(array, 5));
console.log(`Count: ${count}`);