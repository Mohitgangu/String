// find the longest SubString without repting the characketer

// let str="abcabcbba"
// output="abc"

function longestSubStringWithoutRepating(str){
 
    let s=new Set()
    let left=0;
    let maxLen=0
    

    for(let i=0;i<str.length;i++){
        while(s.has(str[i])){
          s.delete(str[left])
          left++
        }
        s.add(str[i])
        
        maxLen=Math.max(maxLen,i-left+1)
    }
    return maxLen

}

console.log(longestSubStringWithoutRepating("abcabcbb"))