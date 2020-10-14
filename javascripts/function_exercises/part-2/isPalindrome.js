function isPalindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}