//[5,3,7,8,1,2,12,4]
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }

    let left = arr.slice(0, arr.length / 2);
    // let right = arr.slice((arr.length / 2), arr.length);
    let right = arr.slice(arr.length / 2);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}


//[5] [3] [7] [8] [1] [2] [12] [4]
//[3, 5] [7, 8] [1, 2] [4, 12]
//[3, 5, 7, 8] [1, 2, 4, 12]
//[1,2,3,4,5,7,8,12]
function merge(left, right) {
    let arr = [];
    // while (left.length !== 0 && right.length !== 0) {
    //     if (left[0] < right[0]) {
    //         arr.push(left.shift());
    //     } else {
    //         arr.push(right.shift());
    //     }
    // }

    // if (left.length !== 0) {
    //     for (let i = 0; i < left.length; i++) {
    //         arr.push(left[i]);
    //     }
    // } else {
    //     for (let i = 0; i < right.length; i++) {
    //         arr.push(right[i]);
    //     }
    // }
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr.push(left[i]);
            i++;
        } else {
            arr.push(right[j]);
            j++;
        }
    }

    return arr.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([5, 3, 7, 8, 1, 2, 12, 4, 15, 23, 10]))