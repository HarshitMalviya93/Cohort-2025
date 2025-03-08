/*var arr = [1,2,3,4];
var ans = arr.map(function(value){
    return 1 ;
})*/

/*var arr = [1,2,3,4];
arr.forEach(function(value){
    ans = console.log(value);
})*/

// var arr = [1,2,3,4];
// var  ans  = arr.filter(function(value){
//     return value===3;

// })



// var arr = [1,2,3,4,5];
// var ans = arr.reduce(function(accumulator , key){
//     return accumulator + key;
// },0)


// var i = 10;
// while(i>0){
//     console.log(i);
//     i--
// }

// var i = 3;
// while(i<31){
//     console.log(i);
//     i+=3;
// }

// var sum = 0;
// for(i=1; i<101; i++){
//     sum+=i;
    
// }
// console.log(sum);


// var str = "JavaScript";
// for(var i of str){
//     console.log(i);
// }

// var arr = [1,1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4];
// var ans  = [...new Set(arr)];


// var arr = [3,1,4,3,1,4,2,5];
// var ans = arr.sort(function(a,b){
//     return a - b;
// })



// var arr = [1,2,3,4,5,6,7,8,9,10,40,50];
// var ans = [...new Set(arr)];
// var newarr= ans.sort(function(a,b){
//     return b-a;
// })
// console.log(newarr[1]);

// var arr = [1,2,3,4,5,6,7,8,9,10];
// var ans  = arr.sort((a,b) => b-a);


// var arr = [1,2,3,4,5,6];
// var arr2 = [];
// for(var i = arr.length-1; i>=0; i--){
//      arr2.push(arr[i]);
// }
// var ans = console.log(arr2);



let arr = [3,4,5,6,2,3,8];
var obj = {};
arr.forEach(function(val){
        obj[val] === undefined ? (obj[val]=1) : obj[val] ++ ;
})