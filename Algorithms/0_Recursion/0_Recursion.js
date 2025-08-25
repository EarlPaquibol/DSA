let counter = 0;

function recursion () {
    console.log(counter);
    if (counter > 3){
        return 'Done!';
    }
    counter++;
    return recursion();
}

console.log(recursion());

//1. Identify base case
//2. Identify recursive case
//3. Get closer and closer to answer and return