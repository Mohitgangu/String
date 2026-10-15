
function removeVowels(str){
   let vowels= new Set(['a','e','i','o','u','A','E','I','O','U'])

   let arr= str.split('')
   let i=0
   let result=[]

   while(i < arr.length){
    if(!vowels.has(arr[i])){
        result.push(arr[i])
    }
    i++
   }
   return result.join('')
}

console.log(removeVowels("mohit"))

//  regex ki help se sb se fast tarika  

function remvowel(str){
    return str.replace(/[aeiouAEIOU]/g,'')
}

console.log(remvowel("hello"))


function removeVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let result = ""; // Sirf ek empty string li

    // Direct string par loop chalaya (No split needed)
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // Dono case check karne ke liye lowercase me convert kiya
        if (!vowels.has(char.toLowerCase())) {
            result += char; // Non-vowel ko string me jod diya
        }
    }
    return result;
}

console.log(removeVowels("mohit")); 