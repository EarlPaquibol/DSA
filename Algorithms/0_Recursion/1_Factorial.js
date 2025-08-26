//Recursive

const Factorial = (num) => {
    if (num === 1 || num === 0) return 1;
    return num * Factorial(num - 1);
}

console.log(Factorial(5));

//iterative
const FactIterative = (num) => {
    let answer = num;
    while (num !== 1) {
        num--;
        answer *= num;
    }
    return answer;
}

// console.log(FactIterative(10))