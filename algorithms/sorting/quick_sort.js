// Быстрая сортировка, O(log2n * n)

const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32] // [0,1,1,2,3.......]
let count = 0;

function quick_sort(array) {
    if(array.length <= 1) {
        return array;
    }
    let middleIndex = Math.floor(array.length / 2);
    let middleElement = array[middleIndex];
    let less = [];
    let greeter = [];
    for (let i = 0; i < array.length; i++) {
        if (i === middleElement) {
            continue;
        }
        if(array[i] < middleElement) {
            less.push(array[i]);
        }
        if(array[i] > middleElement) {
            greeter.push(array[i]);
        }
    }
    return [...quick_sort(less), middleElement, ...quick_sort(greeter)];
}

console.log(quick_sort(arr));