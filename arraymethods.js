// let arr=[9,3,2];
// let arr1=[6,8];
// let arr3=parseInt(arr.join(""));
// let arr4=parseInt(arr1.join(""));
// let arr5=(arr3+arr4).toString().split("").map((val)=>parseInt(val));

// console.log(arr5);
//=========================
let  arr=["praveen","sai","gopi"];
let arr1;

for(let i=0;i<=arr.length-1;i++){
    for(let j=i+1;j<=arr.length-1;j++){
        if(arr[i]>arr[j]){
            arr1=arr[i];
            arr[i]= arr[j];
            arr[j]=arr1;
        }
    }
}
console.log(arr);
// arr.sort();
// console.log(arr);

