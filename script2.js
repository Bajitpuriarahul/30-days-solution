

// Day three

console.log("This is Day Three");


// Odd and Even number ---------------
let a = 23;
if (a%2==0){
    console.log(`${a} is even number`);
}
else{
    console.log(`${a} is an odd number`);
}

let firstName = "Rahul";
let lastName = "Goyal";
let country = "India";
let age = 25;

console.log(typeof country);

// let num = Number("10"); // idhr true ayega
let num = "10"; // idhr flase ayega 
let num2 = 10;
console.log(num === num2);

num = parseInt(Math.ceil("9.8"));
num2 = 10;
console.log(num === num2);

// --------- 4 --------------  true and false statement 

console.log(4!="4"); // idhr false ayega 

let b = 'python';
let c = 'jargon';
console.log(b.length !== c.length);

// Logical Operators -------
// 1 && ------  if both true , then only true else false
// 2 || ------ if both or  one true , both true 
// 3 ! ------- if gives opposite answer 

console.log(4>3 && 10 <12);
console.log(4>3 || 100 <12);
let ab = !(4>30);
console.log (ab);

let ba = "dragon";
let aa = ba.includes('on');
let bba = "python";
let aab= bba.includes("on");
console.log(aa,aab);

let bb = aa !== aab;
console.log(bb);

console.clear();

// Time -----------------
// let a = new Date();
// let b = a.getFullyear() , getMonth(0 to 11) +1 (to get month number instead of index), getDate(1 to 31), getHours(0 to 23), getMinutes(0 to 59),getSeconds(0 to 59), getMilliseconds(0 to 999), getTime(milliseconds since jan 1 1970), getDay(0 to 6)

let dat = new Date();
let time = dat.getFullYear();
console.log(time);
time = dat.getSeconds();

//  function tt(){

//   if (time <10){
//     console.log(`0${time}`);
// }
// else{
//     console.log(time);
// }}
// let cc = setInterval(time,1000);
// console.log(cc);

dat = new Date();
time = dat.getTime();
console.log(time);

// let base = prompt("Enter base of the triangle");
// let height = prompt("Enter the height of the triangle");
// console.log(`The area of the triangle is ${base*height*.5}`);




// let base = prompt("Enter the length of rectangle");
// let width = prompt("Enter the width of the rectangle");
// let perimeter = (base += width)*2;
// console.log(`The area of the rectangle is ${base*width} and the perimeter oif rectangle is ${perimeter}`);

// let radius = prompt("Enter the radius");
// let pi = Math.pi;
// console.log(`Area of circle is${pi} `)

// let hourRate = prompt("Enter hour rate");
// let ratePerHour = prompt("Enter rate per hour");
// console.log(`Weekly pay of the person is ${(hourRate*ratePerHour)*7}`);
let name = "Raaaaaul";

if (name.length >7){
    console.log("Your name is long")
}
else{
console.log("Your name is short")
};

// let fname = prompt("Enter your first name");
// let lname = prompt("Enter your last name");
// if (fname.length >lname.length){
//     console.log(`Your first name ,${fname} is longer then your last name ,${lname}`)
// }
// else {
//     console.log(`Your last name , ${lname} is longer then your first name ,${fname}`)
// };


// let timee = prompt("Enter number of years old you are");
// console.log(`${timee*365*24*60*60}`);


console.clear();



function tt(){
    let timee = new Date();
let y = timee.getFullYear();
let mon = timee.getMonth() + 1;
let d = timee.getDate();
let h = timee.getHours();
let m = timee.getMinutes();
let s = timee.getSeconds();


mon = (mon <10) ? "0" + mon : mon;
d = (d <10) ? "0" + d : d;
h = (h <10) ? "0" + h : h;
m = (m <10) ? "0" + m : m;
s = (s <10) ? "0" + s : s;
    
    document.querySelector("#demo").innerHTML =(`${y}-${mon}-${d} ${h}:${m} : ${s}`);}

setInterval(tt, 1000);

// Compare two codes ------------
function hh(){
    clock.innerHTML = new Date();
  }
  setInterval(hh,1000);

// let myAge = prompt("Enter my age");
// let yourAge = prompt("Enter your age");

// if (myAge> yourAge){
//     console.log(`I am ${myAge - yourAge} older to you`)
// }
// else{
//     console.log(`You are ${yourAge - myAge} older than me `)
// }


a = 340;
b = 430;

a>b
?console.log(`${a} is greater than ${b}`)
:console.log(`${b} is greater than ${a}`)


// let numb = prompt("Enter your number");

// if (numb %2 ==0){
//     console.log(`${numb} is an even number`)
// }
// else{
//     console.log(`${numb} is an odd number`)
// };

// ----- Exercise level 2 


// let Month = prompt("Enter the Month");

// if(Month =="September"||Month =="October"|| Month =="November" ){
//     console.log(`${Month} is the season of Autumn`)
// }
// else if (Month =="December"|| Month =="January"|| Month =="February"){
//     console.log(`${Month} is the season of Winter `)
// }
// else if(Month == "March"|| Month =="April"|| Month =="May"){
//     console.log(`${Month} is the season of Spring`)
// }
// else{
//     console.log(`${Month} is the season of Summer`)
// }





// Day 2 level 2 Question number 10 , niche wala 

// To access charachter of a word randomly
let randd = "JavaScript";
let result = ""
let charlength = randd.length;
for (let i =0; i <charlength; i++)
   {result = randd.charAt(Math.floor(Math.random()*charlength));}
   console.log(result);

// Also day 2 ke level 3 solve nai hue 


// see day 3 truthy and falsy value 
// Day 3 Exercise 2 ke math wale questions ------- Nai hue  


// day 4 ke level 2 and 3 wale bhi nai hue 


//  let marks = prompt("Enter your marks to get grades");

//  if (100>=marks && marks>=80){
//     console.log("A")
//  }
//  else if  (79>=marks && marks>=70){
//     console.log("B")
//  }
//  else if (69>=marks && marks>=60){
//     console.log("C")
//  }
//  else if (59>=marks && marks>=50){
//     console.log("D")
//  }
//  else if (49>=marks && marks>=0){
//     console.log("F")
//  }




