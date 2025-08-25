const input = "Hi my name is Earl";

const reverseString = (input) => {
    // const myArray = [...input];
    // const myArray = input.split('');
    let reverseArr = [];
    for (let i = input.length-1; i >= 0; i--){
        reverseArr.push(input[i])
    }
    return reverseArr.join("");
}

const reverseString2 = input => input.split("").reverse().join("");

console.log(reverseString2(input));


//This solution has a time complexity of O(n) and a space complexity of O(n)