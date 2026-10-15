function isPalindrome(str){
    let str1= str.toLowerCase().replace(/[^a-z0-9]/g,'')
    let left=0;
    let right=str1.length-1

    while(left < right){
        if(str1[left] != str1[right]){
            return false
        }
        left++
        right--
    }
    return true
}

console.log(isPalindrome("madam  "))