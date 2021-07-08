let arr1=[2,3,4,5,6] ;
let arr2=[9,8,5,4,3,3] ;
//let arr3[];

// for(let i=0;i<=arr1.length-1;i++){
//     for(let j=0;j<=arr2.length-1;j++){
//         if(arr1[i]===arr2[j]){
//             arr3.push(arr1[i]);
//         }
//     }
// }
// console.log(arr3);
let res = arr1.filter((val)=>arr2.includes(val));
console.log(res);