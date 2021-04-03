var arr = [12,13,14,10,15,16,21]//array declaration using array literal

arr[2]=12

console.log(arr);
console.log(arr[1]);//it returns 14
console.log(arr[11]);//it returns 'undefined'
arr[7]=20
console.log("After adding 20 the array will be=  " + arr);
console.log(arr.length);



//array length without built in function in JavaScript
var arr1 = Array(1,2,4,3,5,6,7,8)//array declare using array Constructor 
var length =0;
while(length!=undefined){
    length++
}
console.log(length);
 
