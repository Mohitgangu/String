function prefixSum(arr){
    let prifix= new Array(arr.length)

     prifix[0]= arr[0]
     for(let i=1;i<arr.length;i++){
        prifix[i] = prifix[i-1] + arr[i]
     }
     return prifix
}

console.log(prefixSum([2,2,1,3,5]))  