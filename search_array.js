var find = 22
var arr = [10,20,30,40,50,55,65,67,70,75,80,85,90,95]
var flag = false

for(let i =0;i<arr.length;i++){
    if(arr[i]==find){
        console.log("Element is found at Index: "+i)
        flag = true
        break;
    }

}

if(flag==false){
    console.log("Element is not found in this array")
}