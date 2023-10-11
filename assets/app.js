//task 1

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

// let sum = 0;
// let add = 0;

// for(const element of arr_1){
//    sum += element;
// }
// for(const element of arr_2){
//    add += element;
// }
// console.log(sum + add);

//task 2

// for(let i = 2; i <= 22; i += 2){
//    console.log(i);
// }

//task 3

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// let reverseArr = [...arr].reverse();
// console.log(reverseArr);

//task 4

// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];
// for(let i = 0; i < arr_3.length; i++){
//    let arrSum = arr_3[i] + arr_4[i]
//    console.log(arrSum);
// }

//task 5

// let str = prompt("write something...");
// if(str.includes('y')){
//    alert("Yes");
// }
// else{
//    alert("No");
// }

//task 6

// function listNumbers(n){
//    if(n < 0){
//       return "Wrong";
//    }
//    if(n == 0 || n == 1){
//       return 1;
//    }
//    else{
//       return n * listNumbers(n - 1)
//    }
// }
// let n = 4;
// let list = listNumbers(n);
// console.log(listNumbers(4));

//task 7

// let str = prompt("write something...");
// let array = [...str].reverse().join("");
// if(array == str){
//    alert("Yes")
// }
// else{
//    alert("No");
// }

//task 8

// for (let i = 1; i <= 45; i += 2) {
//   if (i % 5 == 0 && i % 3 == 0) {
//     console.log(i + " FizzBuzz");
//   }
//   if (i % 5 == 0 && i % 3 != 0) {
//     console.log(i + " Buzz");
//   }
//   if (i % 3 == 0 && i % 5 != 0) {
//     console.log(i + " Fizz");
//   }
// }

//task 9

// const thisIsAnArray = ["element1", "element2", "element3", "element4"];

// for(const element of thisIsAnArray){
//    console.log(element);
// }

//task 10

// for(let i = 10; i >= -20; i--){
//    if(i % 2 == 0){
//       console.log(i);
//    }
// }