const isPalindrome = (word) => {
    let left = 0;
    let right = word.length - 1;

    while (left < right){
        if (word[left] !== word[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("racecar"));

const isPalindromeRecursive = (str) => {
    if (str.length <=1 ) return true;
    if (str[0] !== str[str.length -1]){
        return false;
    } 
    return isPalindrome(str.slice(1, -1));
}