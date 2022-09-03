
// Comments make code readable
// Welcome to 30 Days of JavaScript
/*
Comments make cod readable
easy to understand
*/
console.log("hello world");

let a  = "String";
let b = 20;
let c = null;
let d = undefined;

console.log(typeof d );

let e;
let f;
let g;
let h;
let FirstName = "Rahul";let LastName = "Goyal";let maritalStatus = "Unmarried";let country = "India";let age = 25;

let myAge = 25 ;
let yourAge = 40;
console.log(`I am ${myAge} years old .\n You are ${yourAge} year old.`)

console.clear();

// Day two exercise -------------

// Exercise One 

let challange = "30 Days Of JavaScript";
console.log(challange);
console.log(challange.length);
console.log(challange.toUpperCase());
console.log(challange.toLowerCase());
// console.log(challange.)  6th question
// console.log(challange.)  7th question
console.log(challange.includes('JavaScript')); 
// See  split method 
console.log(challange.split());  
console.log(challange.split(""));
let names = "Google, Apple, Microsoft, IBM, Oracle, Amazon"
console.log(names.split());

console.log(challange.replace("JavaScript","Python")); 

console.log(challange.charAt(0));
console.log(challange.charCodeAt(0));
console.log(challange.indexOf(3)); // return index or -1 if not and if string is  not between Quotes
console.log(challange.lastIndexOf(0));

let ab = "You cannot end a sentence with because because because is a conjuction"
console.log(ab.indexOf("because"));
console.log(ab.lastIndexOf("because"));
let aab = "        30 Days    Of JavaScript     ";
console.log(aab.trim());  // Only begining and at end 
console.log(aab);
console.log(ab.search("because"));
console.log(ab.startsWith("You"));
console.log(ab.endsWith("conjuction"));
//-----------------23-----------
console.log(ab.concat(aab));
console.log(ab.repeat(12));


console.clear();



// Split() - How to split at specific place
//substr() - 2 arguments , start index and no. of chartacters 
// substing() - 2 arguments , start index and end index (excludes it )


let new1 = "The Quote \'There is no exercise better for the heart than reaching down and lifting people up\' by John Holmes teaches us to help one another.";
console.log(new1);

let abc = parseInt("10");
let cde = 10;
console.log(abc ===cde);


a = parseInt("9.8");
b = 10;
console.log(a===b);



a = "Python";
b = "Jargon";

console.log(a.includes("on")===b.includes("on"));

a = "I hope this course is not full of jargons";
console.log(a.includes("jargon"));



a = `1 1 1 1 1 \n2 1 2 4 8 \n `
console.log(a);


a = "You cannot end a sentence with because because because is a conjuction";
console.log(a.indexOf("because"));
console.log(a.substr(31,23));

console.clear();

// ----------------- 10 ------------------------
// match () - with it all see global flags and stuff

// Exercise 3--------------------------


// ------- Math ----------------

// Math.random , .floor , .ceil , .round (to closest) , .min and max (for Array of numbers) , etc. 


// Generate a random number between 2 numbers ---------
let num = Math.floor(Math.random()*101);
console.log(num);
function num1(max,min){
    console.log(Math.floor(Math.random()*(max-min))+min);
}
num1(100,50);


// Conversion of Number into String and vice-versa ----

// 1 String to Int
// parseInt() , Number() , + ------
let num3 = "10";
let num4 = parseInt(num3);
num4 = Number(num3);
num4 = +num3;
console.log(num4); 
// console.log(typeof num4); 

// 2 String to Float 
// parseFloat() , Number() , +


// 3 Float to Int ---------
// parseInt()


