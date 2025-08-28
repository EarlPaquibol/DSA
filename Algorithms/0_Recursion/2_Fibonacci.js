//0, 1, 1, 2, 3, 5, 8, 13, 21, 34....

const fibonacciRecursive = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

const fibonacciIterative = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let prev = 0;
    let current = 1;
    for (let i = 2; i <= n; i++){
        let answer = prev + current;
        prev = current; //1
        current = answer; //1
    }
    return current;
}

console.log(fibonacciIterative(9), "Iterative");
console.log(fibonacciRecursive(9), "Recursive");