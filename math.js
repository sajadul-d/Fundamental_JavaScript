var a = 5.56
var b = 10.45
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(b))
console.log(Math.floor(b)) 
console.log(Math.ceil(b)) 
console.log(Math.round(b))//This is maintained the mathematical rule

console.log(Math.round(a))//This is maintained the mathematical rule
console.log(Math.max(400,500,800,700));
console.log(Math.min(400,500,700,800));
console.log(Math.pow(2,3));
console.log(Math.pow(2,4));
console.log("Random NUmber=" + Math.round(Math.random()*50 + 1));//Random generate


//Random number generate between two numbers
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }
  
     const r = random(1, 500) 
     console.log(r);

     