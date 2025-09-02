//[5,3,7,8,2,1]
function insertionSortTry(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j <= i-1; j++) {
            console.log(arr[i], arr[j]);
            if (arr[i] < arr[j]) {
                let [el] = arr.splice(i, 1);
                arr.splice(j, 0, el);
                break;
            }
        }
        console.log(arr);
    }
    return arr;
}

console.log(insertionSortTry([5, 3, 7, 8, 2, 1]));
console.log(insertionSortTry([10, 1, 5, 3]));


//i = 4;
//3 5 7 8 2 1

