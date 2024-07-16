// first program
// function fizz(n){
//     for(let i=1;i<=100;i++){
//        if(n%3==0 && n%5==0){
//         return("FizzBuzz");
//        }
//        else if(n%3==0){
//         return("Fizz");
//        }
//        else if(n%5==0){
//         return("Buzz");
//        }
//        else{
//         return("invalid number");
//        }
//     }
// }
// console.log(fizz(15));

// largest number in an array
// function largest(arr){
//     let large=0;
//     for(let i=0;i<arr.length;i++){
//         if(large<arr[i]){
//             large=arr[i];
//         }
//     }
//     return large;
// }
// let arr=[1,23,45,570];
// console.log("largest element in array",largest(arr));

//factorial of a number
// function factorial(n){
//     let fact=1;
//     for(let i=1;i<=n;i++){
//         fact=fact*i;
//     }
//     return(fact);
// }
// console.log(factorial(5));

//palindrome of a string
// function palindrome(str){
//     let i=0;
//     let j=str.length-1;
//     let flag=true;
//     while(i<j){
//         if(str.charAt(i)!=str.charAt(j)){
//             flag=false;
//         }
//         i++;
//         j--;
//     }
//     if(flag==true){
//         return("palindrome")
//     }
//     else{
//         return("not a palindrome")
//     }   
// }
// let str="gowtham";
// console.log(palindrome(str));


//farenheit to celcius
// function temperature(temp){
//     // let temp;
//     fahrenheit=((temp*9)/5)+32;
//     return fahrenheit;
// }
// console.log("fahrenheit",temperature(24));


//missing number 
// function missingNumber(arr) {
    
//     for(let i=0; i<arr.length-1; i++){
//         if((arr[i]+1) != (arr[i+1])){
//             return arr[i]+1;
//         }
//     }
// }

// let arr = [1,2,5];
// console.log("missing numbers",missingNumber(arr));


//key values 
// function occurance(str) {

//     let occ = {};
//     for(let i=0; i<str.length; i++){
//         let res = 1;
        
//         if(str.charAt(i) in occ){
//             continue;
//         }
//         for(let j=i+1; j<str.length; j++){
//             if(str.charAt(i) == str.charAt(j)){
//                 console.log(str.charAt(j));
//                 res += 1;
//             }
//         }
        
//         occ[str.charAt(i)] = res;
//     }

//     console.log(occ);
// }

// occurance("gowtham");


//longest word in a string
// function longestWord(str) {
    
//         let arr = str.split(" ");
//         let max = 0;
    
//         for(let i=0; i<arr.length; i++){
    
//             if(arr[i].length > max){
//                 max = i;
//             }
//         }
    
//         return arr[max];
//     }
    
//     let str = "this is a gowtham";
    
//     console.log("longest word in a string",longestWord(str));


////16/07/2024
 
// function res(arr){
//     return arr.sort();
// }
// let arr=[5,4,3,2,1];
// console.log(res(arr));

//sorting
// let arr=[34,56,67,89];
// arr.push(100);
// console.log(arr);

//Minimumana maximum in array
// var arr=[23,78,34,20,18];
// var max=0; 
// var min=arr[0];
// function res(arr){
//     for(let i=0;i<arr.length;i++){
//         if(this.max<arr[i]){
//             this.max=arr[i];
//         }
//         if(this.min>arr[i]){
//             this.min=arr[i]
//         }
//     }
// }
// res(arr);
// console.log(max);
// console.log(min);

//array creation
// let arr=["gow","tham","tour","java"]
// console.log(arr);

//index of
// var arr=[1,3,5,7,8,10,11];
// console.log(arr.lastIndexOf(7));
// console.log(arr.indexOf(5));






