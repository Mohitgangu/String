function isAnagram(str,tr){
let s=str.toLowerCase().replace(/[^a-z0-9]/g, '')
let t=tr.toLowerCase().replace(/[^a-z0-9]/g, '')
if(s.length != t.length){
    return false
}

let freq={}
for(let ch of s){
    freq[ch]=(freq[ch] || 0)+1
}
   for(let ch of t){
    if(!freq[ch]){
        return false
    }
    freq[ch]--
   }
   return true
}

console.log(isAnagram("Listen","silent"))



