//[5,3,7,8,2,1]
function selectionSortTry(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        let smallest = i;
        //i+1 because comparing arr[i] to itself is redundant
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        if (smallest !== i) {
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
    }
    return arr;
}

console.log(selectionSortTry([5, 3, 7, 8, 2, 1]));
// console.log(selectionSort([5, 3, 7, 8, 2, 1]));