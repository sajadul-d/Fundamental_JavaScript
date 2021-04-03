//triangle number print in javascript
var n =5
for(var i =1;i<=n;i++){
    var result = ''
    for(var j=1;j<=i;j++)
    {
        result += j + ' '

    }
    console.log(result);
}

//square star printing in javascript


var t =10;
for(var row =1 ;row<=t;row++){
    var result = '';
    for(var col=1;col<=t;col++){
        result += "*"+' '
    }
    console.log(result)
}