
function reverseStr(str){
  let s= str.toLowerCase().replace(/[^a-z0-9]/g,'')

  let left=0;
  let right= s.length-1
  let arr=s.split('')

  while(left < right){
    let temp= arr[left]
    arr[left]= arr[right]
    arr[right]=temp

    left++
    right--
  }
  return arr.join('')
}

console.log(reverseStr("hello"))
console.log(reverseStr("silent"))
console.log(reverseStr("Mohit"))