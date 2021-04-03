var arr = [2,3,5,6,8,9,10]
let sum =0
 for (let i = 0; i< arr.length; i++) {  
     sum = sum + arr[i]
       
 }
 console.log(sum);

 //even_odd check in array
 var arr2 = [10,11,12,13,14,15]
 for (let i = 0; i < arr2.length; i++) {
      
     if(arr2[i]%2==0){
         console.log("even = "+arr2[i]);
     }
     else if(arr2[i]%2==1){
         console.log("odd = "+arr2[i]);
     }
 }