var str = 'big mango tree'
var length=0;
while(1){
   if(str.charAt(length)==''){
       break;
   }
   else{
       length++;
   }
}
console.log(length);

//string length with javascript built in function
console.log(str.length);