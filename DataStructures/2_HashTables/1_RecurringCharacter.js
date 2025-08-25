//given an array
//find the first recurring character
//Ex. [2,5,1,2,3,5,1,2,4];
//should return 2

//Ex. [2,1,1,2,3,5,1,2,4]
//should return 1

//Ex. [1,2,3,4]
//should return undefined

const recurringChar = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]){
                return arr[i]
            }
        }
    }
    return undefined;
}

//recurringChar has a time complexity of O(n^2) and space complexity of O(1)

const recurringChar2 = (arr) => {
    let map = {};
    for (let i = 0; i < arr.length; i++){
        if (map[arr[i]] !== undefined){
            return arr[i];
        }
        else {
            map[arr[i]] = i;
        }
    }
    return undefined;
}

//recurringChar2 has a time complexity of O(n) and a space complexity of O(n)

console.log(recurringChar([2,1,2,1,2,3,5,1,2,4]));