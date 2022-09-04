

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



let timee = new Date();
let yyyy = timee.getFullYear();
let mon = timee.getMonth();
let dd = timee.getDate();
let hh = timee.getHours();
let mm = timee.getMinutes();

if (mon < 10){
    console.log(`0${mon +1}`)
}
else{
    console.log(`${mon +1}`)
};

console.log(`${yyyy}-${mon +1}-${dd} ${hh}:${mm}`);

console.clear();


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

// if(Month =="September"||"October"||"November" ){
//     console.log(`${Month} is the season of Autumn`)
// }
// else if (Month =="December"||"January"||"February"){
//     console.log(`${Month} is the season of Winter `)
// }
// else if(Month == "March"||"April"||"May"){
//     console.log(`${Month} is the season of Spring`)
// }
// else{
//     console.log(`${Month} is the season of Summer`)
// }





// Day 2 level 2 Question number 10 , niche wala 

// let randd = "JavaScript";
// let numm = Math.random(randd);
// console.log(randd.charAt(numm));

// Also day 2 ke level 3 solve nai hue 


// see day 3 truthy and falsy value 
// Day 3 Exercise 2 ke math wale questions ------- Nai hue  
// Also time formate related Questions 


// day 4 ke level 2 and 3 wale bhi nai hue 
