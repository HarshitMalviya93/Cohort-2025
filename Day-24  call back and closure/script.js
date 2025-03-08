// function callerfnc(fn){
//     setTimeout(fn,3000);
// }
// callerfnc(function(){
//     console.log("hey");
// })

//question no.2
// function hap(arr,fnc){
//     var newarr = [];

//     for(var i = 0 ; i< arr.length; i++){
//         newarr.push(fnc(arr[i]));
//     }
//     return newarr;

// }
// var ans = hap([1,2,3,4,5,6], function(value){
//     return value + 3;
// })


// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// var fn = counter(); // func call
// fn();
// fn();
// fn();
// fn();





function fnlimiter(fn,limit){
    let totalcalled=0;
    return function(){
        if(totalcalled < limit){
            totalcalled++;
            fn();
        }
        else{console.error("Limit Reached");}
        
    };
}
let limiter  = fnlimiter(function(){
    console.log("Hey");
},3);
limiter();
limiter();
limiter();
limiter();