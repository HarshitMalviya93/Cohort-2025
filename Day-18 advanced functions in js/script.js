// function abcd(a,b,c,...chacha){
//    console.log(a,b,c,chacha);
// }
// abcd(1,2,3,4,5,6);


//hoisting
//  abcd();  //function call first
//  function abcd(){
//     console.log("harshit")
//  }

//iife
/*(function abcd(){
    var a=12;
    console.log(a);
})();*/


//Hof
// function abcd(){
//     return function(){
//         console.log("heyhey");
//     }
// }
// abcd()();

//part 2 of hof
// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("heyeye")
// })


function abcd(){
    var a = 12;
    return function(){
        console.log(a);
    }
}
abcd()();