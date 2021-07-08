let arr=[9,3,82,65,24,1,76];
// let temp=[];
// for(let i=0;i<=arr.length-1;i++){
//     for(let j=i+1;j<=arr.length-1;j++){
//     if(arr[i]>arr[j]){
//     temp=arr[j];
//     arr[j]=arr[i];
//     arr[i]=temp;
//     }
// }
// }
// console.log(arr);
let res= arr.sort((num1,num2)=>num2-num1);
console.log(res);

