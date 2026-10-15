// max sum of the sub array

function maxSumSubArray(arr){

    let currentSum=0
    let window=3
    if(arr.length < window) return 0;
    for(let i=0;i<window;i++){
        currentSum += arr[i]
    }
    let maxSum= currentSum
    for(let i=window;i<arr.length;i++){
        currentSum += arr[i] - arr[i-window]
        maxSum= Math.max(maxSum,currentSum)
    }
    return maxSum
}

console.log(maxSumSubArray([1,2,5,7,8,3]))

// function sumOfArray(arr){

//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i]
//     }
//     return sum

// }

// console.log(sumOfArray([[3, 2], [1], [4, 12]]))
// let arr=[[3, 2], [1], [4, 12]]
// let arr1=arr.flat()
// let totalSum= arr1.reduce((sum,num)=>
//     sum + num ,0
// )
// console.log(totalSum)