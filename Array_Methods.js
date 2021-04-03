var arr = [1,2,3,4,5,6]
var arr2 = [4,5,6,7]
console.log(arr.join(' | '));//this join the array and return as string
console.log(arr.fill(true));//all array elements fill with true
var arr3 = arr.concat(arr2)
console.log(arr3);

//Capital array working 

console.log(Array.isArray(arr));//if arr= array then it will return true
//otherwise it will be return false

var a = [1,2]
var b = Array.from(a)
b[0] = 5
console.log(a);
console.log(b);
