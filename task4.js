// toString();converts an array to a string with comma separated,
// join();method joins all array elements into a String
// Pop();method removes a element in an array(in the last)
// Push();method adds elemnt in an array(in the last)
// shift();method removes a first array element in  an array
// unshift();method adds a new element to an array(at the beginning)
// concat();method nt change existing arrays always returns new array.
// splice();method can be used to remove array elemnts,
//         also adds new elemnts to an array.
// slice();method creates a new array. it does nt remove any elements frm source array. 
// and also given with two arguments, it selects first argument to not included (last argument).
// sort();method sorts an arrays alphabetically.
// reverse();method reverses the elements in an array
// forEach();method calls a function (a callback function)once for each array elements.
// map();method creates anew array by performing a  function on each array elements.
// filter();method creates a new array with array elements that passes a test
// reduce();method runs a function on each array element to reduce it to a single value
// every();method check if all array values passes a test
// some();method check if some array values passes a test
// indexOf();method searches array elemnt value and returns its position
// lastIndexOf();this method returns position of last occurence of specified element
// includes();this method allows us to check if an element is present in an array r nt
// find();this method returns the value of first array element that passes a test
// findIndex();==this method returns index of first array element that passes a test



let fruits = ["kiwi","orange","apple","mango","banana"];
let fruits1 = ["pineapple","lemon"]
  //let res=fruits.toString();
//console.log(res); //toString()
// let res = fruits.join("+");
// console.log(res); // join()
// let res = fruits.pop();
// console.log(res);
// let res = fruits.push("strawberry");
// console.log(res);
// let res = fruits.shift();
// console.log(res);
// let res = fruits.unshift("strawberry");
// console.log(res);
// let res = fruits.concat(fruits1);
// console.log(res);
// let res = fruits.splice(2);
// console.log(res);
// let res = fruits.splice(0,2);
// console.log(res);
fruits.splice(2,0,"orang");
//console.log(res);
