// Сложность алгоритма O(log2n)
// Бинарный поиск

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14, 15];

let count = 0;


function binary_search(array, element) {
    let start = 0;
    let end = array.length;
    let middle;
    let founded = false;
    let position = -1;
    while (founded === false || start <= end) {
        count++;
          middle = Math.floor((start + end) / 2);
          if (array[middle] === element) {
              founded = true;
              position = middle;
              return position
          }
          if (element < array[middle]) {
             end = middle - 1;
          } else {
              start = middle + 1;
          }
    }
    return position;
}

function recursion(array, element, start, end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === element) {
        return middle;
    }
    if (array[middle] > element) {
        return recursion(array, element, start, middle - 1);
    }
    if (array[middle] < element) {
        return recursion(array, element, middle + 1, end);
    }
}


console.log(recursion(array, 5, 0, array.length));