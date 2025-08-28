function reverseString(str) {
    let answer = "";
    for (let i = 1; i <= str.length; i++){
        answer += str[str.length-i]
    }
    return answer;
}

console.log(reverseString("yoyo master sup")); 

function reverseStringRecursive(str) {
    if (!str) return null;
    if (str.length < 1) return "";
    if (str.length < 2){
        return str;
    }
    return reverseStringRecursive(str.slice(1)) + str[0];
}   

console.log(reverseStringRecursive("yoyo master"));