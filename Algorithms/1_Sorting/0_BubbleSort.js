//[5,3,7,8,2,1]
function bubbleSortTry(arr) {
    let length = 1;
    while (length < arr.length) {
        let swap = true;
        for (let i = 0; i < arr.length - length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = false;
            }
        }
        if (swap) {
            return arr;
        }
        length++;
    }
    return arr;
}

const bubbleSort = (arr) => {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        let swapped = false;
        // skip already sorted items at the end (i), 
        // and -1 so j+1 doesn't go out of bounds
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // skip already sorted items at the end (i), 
        // and -1 so j+1 doesn't go out of bounds
        if (!swapped) break;
    }
    return arr;
}

console.log(bubbleSortTry([5, 3, 7, 8, 2, 1]));
console.log(bubbleSort([5, 3, 7, 8, 2, 1]));