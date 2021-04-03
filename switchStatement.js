var date = new Date()
var today = date.getDay()
//0 = sunday 1= monday 
switch (today) {
    case 0:
        console.log("today is a sunday")
        break;
    case 1:
        console.log("today is a monday")
        break;    
    case 2:
        console.log("today is a tuesday")
        break;
    case 3:
        console.log("today is a wednesday")
        break;   
    case 4:
        console.log("today is a tri");     
    case 5:
        console.log("Today is Friday");
    case 6:
        console.log("Today is saturday");    
    default:
        console.log("You enter invalid statement");
        break;
}