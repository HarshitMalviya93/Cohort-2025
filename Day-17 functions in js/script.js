// function greet(){
//     console.log("Hello World");
// }
// greet();
// greet();
// greet();
// greet();

//parameters
/*function abcd(a,b,c,d){
    console.log(a,b,c,d)
}
abcd(1,2,3,4);*/


function abcd(a,b,c,d){
    console.log(a,b,c,d)
}
abcd(1,2,3);


// ()=>{

// }


//function return 
// function abcd(){
//     return 12;
// }
// var ans = abcd();   

//implicit return
/*var abcd = ()=>12;
var ans = abcd();*/

//rest parameter
// function abcd(a,b,c,...rest){
//     console.log(a,b,c,rest);
// }
// abcd(1,2,3,4,5,6,7);


function greet(name){
    return `HEllo, ${name}`;
}
console.log(greet("Alice"));