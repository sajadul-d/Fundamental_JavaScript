var arr = [1,2,3,4,5,6,7,8,9,10]
arr.push(11)//insert something at the end 
console.log(arr);
arr.unshift(0)
console.log(arr);
arr.splice(1,0,12,13,14)
console.log(arr);
var arr1 = [1,2,3,4,5]
arr1.pop()
console.log(arr1);
arr1.shift()
console.log(arr1);
arr1.splice(1,1,14)//replace 3 and here insert 14
console.log(arr1);